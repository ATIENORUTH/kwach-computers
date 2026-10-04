import { Mail, Phone } from 'lucide-react';
import type { ComponentType } from 'react';
import { navLinks } from '../config/navigation';
import { site } from '../config/site';
import { mailLink, telLink, whatsappLink } from '../lib/links';
import { InstagramIcon, TikTokIcon, WhatsAppIcon } from './BrandIcons';
import Logo from './Logo';

const socials: Array<{ label: string; href: string; icon: ComponentType<{ size?: number }> }> = [
  { label: 'Instagram', href: site.socials.instagram, icon: InstagramIcon },
  { label: 'TikTok', href: site.socials.tiktok, icon: TikTokIcon },
  { label: 'WhatsApp', href: whatsappLink(), icon: WhatsAppIcon },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-400">
      <div className="container grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1.2fr] lg:gap-16">
        <div>
          <a href="#home" aria-label="KWACH_001 COMPUTERS — back to top" className="inline-block">
            <Logo />
          </a>
          <p className="mt-5 text-sm font-medium text-slate-300">{site.tagline}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed">Laptops, computers and accessories.</p>
          <ul className="mt-6 flex gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`KWACH_001 COMPUTERS on ${label}`}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-300 transition hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-400"
                >
                  <Icon size={18} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-white">Navigate</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} className="transition hover:text-brand-400">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-white">Contact</h2>
          <ul className="mt-5 space-y-4 text-sm">
            {site.phones.map((phone, index) => (
              <li key={phone.international} className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-brand-400" aria-hidden="true" />
                <a href={telLink(phone)} className="transition hover:text-white">
                  {phone.display}
                </a>
                {index === 0 && (
                  <>
                    <span className="text-slate-600">·</span>
                    <a
                      href={whatsappLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-whatsapp transition hover:text-white"
                      aria-label={`WhatsApp ${phone.display}`}
                    >
                      WhatsApp
                    </a>
                  </>
                )}
              </li>
            ))}
            <li className="flex items-center gap-3">
              <Mail size={16} className="shrink-0 text-brand-400" aria-hidden="true" />
              <a href={mailLink()} className="break-all transition hover:text-white">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col items-center justify-between gap-3 py-6 text-xs sm:flex-row">
          <p>© {new Date().getFullYear()} KWACH_001 COMPUTERS. All rights reserved.</p>
          <p className="text-slate-500">{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
