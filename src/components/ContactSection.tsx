import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import type { ReactNode } from 'react';
import { site } from '../config/site';
import { mailLink, telLink, whatsappLink } from '../lib/links';
import { WhatsAppIcon } from './BrandIcons';
import ContactForm from './ContactForm';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-slate-50 py-20 sm:py-24 lg:py-28">
      <div className="container grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <SectionHeading
            id="contact-heading"
            eyebrow="Contact"
            title="Let's find the right solution for you."
            description="Order, enquire or book a repair. Reach us on WhatsApp, give us a call or send the form and we'll get back to you."
          />

          <Reveal delay={100} className="mt-10 space-y-4">
            <ContactItem icon={<WhatsAppIcon size={20} />} label="WhatsApp" accent="whatsapp">
              {site.phones.map((p) => (
                <a
                  key={p.international}
                  href={whatsappLink(undefined, p)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-semibold text-navy-950 transition hover:text-brand-700"
                >
                  {p.display}
                </a>
              ))}
            </ContactItem>
            <ContactItem icon={<Phone size={20} />} label="Call us">
              {site.phones.map((p) => (
                <a
                  key={p.international}
                  href={telLink(p)}
                  className="block font-semibold text-navy-950 transition hover:text-brand-700"
                >
                  {p.display}
                </a>
              ))}
            </ContactItem>
            <ContactItem icon={<Mail size={20} />} label="Email">
              <a href={mailLink()} className="break-all font-semibold text-navy-950 transition hover:text-brand-700">
                {site.email}
              </a>
            </ContactItem>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <ContactItem icon={<Clock size={20} />} label="Hours">
                <p className="font-semibold text-navy-950">{site.hours}</p>
              </ContactItem>
              <ContactItem icon={<MapPin size={20} />} label="Location">
                <p className="font-semibold text-navy-950">{site.location}</p>
              </ContactItem>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}

interface ContactItemProps {
  icon: ReactNode;
  label: string;
  children: ReactNode;
  accent?: 'brand' | 'whatsapp';
}

function ContactItem({ icon, label, children, accent = 'brand' }: ContactItemProps) {
  return (
    <div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
      <span
        className={
          accent === 'whatsapp'
            ? 'flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-whatsapp/10 text-whatsapp-dark'
            : 'flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700'
        }
        aria-hidden="true"
      >
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{label}</p>
        <div className="mt-1 space-y-0.5">{children}</div>
      </div>
    </div>
  );
}
