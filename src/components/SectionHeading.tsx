import type { ReactNode } from 'react';
import { cn } from '../lib/cn';
import Reveal from './Reveal';

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
  /** id applied to the h2, for aria-labelledby on the section */
  id?: string;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'light',
  id,
  className,
}: SectionHeadingProps) {
  const dark = tone === 'dark';
  return (
    <Reveal className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
      <p className={cn('eyebrow', dark && 'text-brand-300')}>
        <span className={cn('h-px w-6', dark ? 'bg-brand-300' : 'bg-brand-500')} aria-hidden="true" />
        {eyebrow}
      </p>
      <h2
        id={id}
        className={cn(
          'mt-4 text-3xl font-bold leading-[1.2] [text-wrap:balance] sm:text-4xl lg:text-[2.75rem]',
          dark ? 'text-white' : 'text-navy-950',
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn('mt-4 text-base leading-relaxed sm:text-lg', dark ? 'text-slate-300' : 'text-slate-600')}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
