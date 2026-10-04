import type { ElementType, ReactNode } from 'react';
import { useInView } from '../hooks/useInView';
import { cn } from '../lib/cn';

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Delay in milliseconds, useful for staggering cards */
  delay?: number;
  as?: ElementType;
}

export default function Reveal({ children, className, delay = 0, as: Tag = 'div' }: RevealProps) {
  const { ref, inView } = useInView<HTMLElement>();
  return (
    <Tag
      ref={ref}
      className={cn('reveal', inView && 'is-visible', className)}
      style={delay ? ({ '--reveal-delay': `${delay}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
