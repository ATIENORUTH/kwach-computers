import { Mail, Phone } from 'lucide-react';
import { primaryPhone, site } from '../config/site';
import { mailLink, telLink, whatsappLink } from '../lib/links';
import { WhatsAppIcon } from './BrandIcons';
import Reveal from './Reveal';

export default function CTA() {
  return (
    <section aria-labelledby="cta-heading" className="bg-slate-100 pb-20 sm:pb-24 lg:pb-28">
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
                  Ask About Our Products
                </h2>
                <p className="mt-4 max-w-xl text-lg text-navy-900/80">
                  Contact KWACH_001 COMPUTERS for current availability and prices.
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

              <div className="mx-auto flex w-full max-w-sm items-center justify-center rounded-xl bg-navy-950 p-8 text-center text-white lg:mx-0 lg:ml-auto">
                <div>
                  <p className="font-display text-lg font-semibold">{site.name}</p>
                  <p className="mt-2 text-sm text-slate-300">{site.tagline}</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
