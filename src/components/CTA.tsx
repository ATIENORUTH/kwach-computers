import { Mail, Phone } from 'lucide-react';
import { primaryPhone, site } from '../config/site';
import { mailLink, telLink, whatsappLink } from '../lib/links';
import { WhatsAppIcon } from './BrandIcons';
import Reveal from './Reveal';

export default function CTA() {
  return (
    <section aria-labelledby="cta-heading" className="bg-white pb-20 sm:pb-24 lg:pb-28">
      <div className="container">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-2xl bg-brand-500 px-6 py-12 sm:px-12 sm:py-14 lg:px-16">
            <div
              className="absolute inset-0 -z-10 opacity-[0.12] [background-image:linear-gradient(#020818_1px,transparent_1px),linear-gradient(90deg,#020818_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_at_right,black,transparent_70%)]"
              aria-hidden="true"
            />
            <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <h2 id="cta-heading" className="text-3xl font-extrabold leading-tight text-navy-950 sm:text-4xl lg:text-5xl">
                  Need a Computer or a Fix?
                </h2>
                <p className="mt-4 max-w-xl text-lg text-navy-900/80">
                  Tell us what you need and we&apos;ll help you find the right solution.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-dark px-6 py-3.5">
                    <WhatsAppIcon size={18} className="text-whatsapp" />
                    WhatsApp Us
                  </a>
                  <a href={telLink()} className="btn-white px-6 py-3.5">
                    <Phone size={18} aria-hidden="true" />
                    Call {primaryPhone.display}
                  </a>
                  <a
                    href={mailLink()}
                    className="btn border border-navy-950/30 px-6 py-3.5 text-navy-950 hover:-translate-y-0.5 hover:border-navy-950 hover:bg-navy-950/5"
                  >
                    <Mail size={18} aria-hidden="true" />
                    Email Us
                  </a>
                </div>
              </div>

              <a
                href={site.whatsappChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="group mx-auto flex w-full max-w-sm items-center gap-5 rounded-xl bg-navy-950 p-5 text-white shadow-2xl transition hover:-translate-y-1 lg:mx-0 lg:ml-auto"
              >
                <img
                  src="/images/whatsapp-channel-qr.svg"
                  alt="QR code to join the Kwach Computers WhatsApp channel"
                  width={112}
                  height={112}
                  className="h-24 w-24 shrink-0 rounded-lg bg-white p-1.5 sm:h-28 sm:w-28"
                />
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
                    WhatsApp channel
                  </span>
                  <span className="mt-1 block font-display text-lg font-semibold leading-snug">
                    Scan or tap to join our channel
                  </span>
                  <span className="mt-1 block text-sm text-slate-400 group-hover:text-slate-300">
                    New stock, offers & tech tips. We&apos;ve got you covered.
                  </span>
                </span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
