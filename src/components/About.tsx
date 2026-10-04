import { Building2, Briefcase, GraduationCap, Home, Landmark } from 'lucide-react';
import { site } from '../config/site';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const audiences = [
  { label: 'Students', icon: GraduationCap },
  { label: 'Professionals', icon: Briefcase },
  { label: 'Small businesses', icon: Building2 },
  { label: 'Home users', icon: Home },
  { label: 'Organizations', icon: Landmark },
];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-28">
      <div className="container grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative order-last lg:order-first">
          <div className="grid grid-cols-5 gap-4">
            <img
              src="/images/about-workspace.webp"
              alt="Laptop set up on a tidy desk, ready for work"
              loading="lazy"
              width={1000}
              height={666}
              className="col-span-3 aspect-[3/4] h-full w-full rounded-xl object-cover shadow-lift"
            />
            <div className="col-span-2 flex flex-col gap-4">
              <img
                src="/images/about-repairs.webp"
                alt="Technician repairing a computer circuit board"
                loading="lazy"
                width={1000}
                height={667}
                className="aspect-square w-full rounded-xl object-cover shadow-lift"
              />
              <div className="flex flex-1 flex-col items-center justify-center rounded-xl bg-navy-950 p-4 text-center">
                <img
                  src="/images/kwach-logo-lg.webp"
                  alt="Kwach Computers logo"
                  loading="lazy"
                  width={120}
                  height={120}
                  className="h-20 w-20 rounded-full sm:h-24 sm:w-24"
                />
                <p className="mt-3 text-xs font-medium uppercase tracking-[0.18em] text-brand-300">{site.handle}</p>
              </div>
            </div>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            id="about-heading"
            eyebrow="About us"
            title="Technology Should Make Life Easier."
            description="Kwach Computers is focused on making technology simple, practical and accessible. Whether you need a computer for school, work, business or everyday use, we help you understand your options and choose a solution that fits your needs."
          />
          <Reveal delay={100}>
            <p className="mt-5 leading-relaxed text-slate-600">
              No jargon and no pressure. Just clear advice, quality products and support you can reach on WhatsApp or by
              phone.
            </p>
          </Reveal>

          <Reveal delay={160}>
            <h3 className="mt-10 text-sm font-semibold uppercase tracking-wider text-navy-900">Who we work with</h3>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {audiences.map(({ label, icon: Icon }) => (
                <li
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
                >
                  <Icon size={16} className="text-brand-600" aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
