import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { navLinks } from '../config/navigation';
import { useActiveSection } from '../hooks/useActiveSection';
import { cn } from '../lib/cn';
import Logo from './Logo';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(navLinks.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled || open
          ? 'border-b border-white/10 bg-navy-950/90 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.6)] backdrop-blur-lg'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <nav className="container flex h-16 items-center justify-between sm:h-[4.5rem]" aria-label="Main navigation">
        <a href="#home" onClick={close} aria-label="Kwach Computers — home">
          <Logo />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                aria-current={active === link.id ? 'page' : undefined}
                className={cn(
                  'relative rounded-md px-4 py-2 text-sm font-medium transition-colors',
                  active === link.id ? 'text-white' : 'text-slate-300 hover:text-white',
                )}
              >
                {link.label}
                <span
                  className={cn(
                    'absolute inset-x-4 -bottom-0.5 h-0.5 origin-left rounded-full bg-brand-400 transition-transform duration-300',
                    active === link.id ? 'scale-x-100' : 'scale-x-0',
                  )}
                  aria-hidden="true"
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href="#contact" className="btn-primary hidden px-4 py-2.5 sm:inline-flex">
            Get a Quote
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-white transition hover:bg-white/10 lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          'grid transition-[grid-template-rows,opacity] duration-300 ease-out lg:hidden',
          open ? 'grid-rows-[1fr] opacity-100' : 'pointer-events-none grid-rows-[0fr] opacity-0',
        )}
        aria-hidden={!open}
      >
        <div className="overflow-hidden">
          <ul className="container flex flex-col gap-1 pb-6 pt-2">
            {navLinks.map((link, i) => (
              <li
                key={link.id}
                className={cn('transition duration-300', open ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0')}
                style={{ transitionDelay: open ? `${60 + i * 40}ms` : '0ms' }}
              >
                <a
                  href={`#${link.id}`}
                  onClick={close}
                  tabIndex={open ? 0 : -1}
                  className={cn(
                    'flex items-center justify-between rounded-lg px-4 py-3.5 text-base font-medium transition',
                    active === link.id ? 'bg-white/10 text-white' : 'text-slate-300 hover:bg-white/5 hover:text-white',
                  )}
                >
                  {link.label}
                  {active === link.id && <span className="h-1.5 w-1.5 rounded-full bg-brand-400" aria-hidden="true" />}
                </a>
              </li>
            ))}
            <li className="mt-3">
              <a href="#contact" onClick={close} tabIndex={open ? 0 : -1} className="btn-primary w-full py-3.5">
                Get a Quote
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
