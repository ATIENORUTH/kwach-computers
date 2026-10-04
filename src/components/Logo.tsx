import { site } from '../config/site';
import { cn } from '../lib/cn';

interface LogoProps {
  className?: string;
  tone?: 'light' | 'dark';
}

export default function Logo({ className, tone = 'light' }: LogoProps) {
  return (
    <span className={cn('flex items-center gap-2.5', className)}>
      <img
        src="/images/kwach-logo.webp"
        alt=""
        width={44}
        height={44}
        className="h-10 w-10 shrink-0 rounded-full ring-1 ring-brand-400/40 sm:h-11 sm:w-11"
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'font-display text-[1.05rem] font-bold tracking-tight sm:text-lg',
            tone === 'light' ? 'text-white' : 'text-navy-950',
          )}
        >
          Kwach <span className="text-brand-400">Computers</span>
        </span>
        <span
          className={cn(
            'mt-1 text-[0.6rem] font-medium uppercase tracking-[0.2em]',
            tone === 'light' ? 'text-slate-400' : 'text-slate-500',
          )}
        >
          {site.tagline}
        </span>
      </span>
    </span>
  );
}
