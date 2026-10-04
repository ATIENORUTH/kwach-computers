import { categories } from '../data/categories';
import { reasons } from '../data/highlights';
import { services } from '../data/services';
import { site } from '../config/site';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const stats = [
  { value: `${categories.length}`, label: 'Product categories' },
  { value: `${services.length}`, label: 'Core IT services' },
  { value: `${site.phones.length}`, label: 'WhatsApp & call lines' },
  { value: '1:1', label: 'Personal advice' },
];

export default function WhyChooseUs() {
  return (
    <section aria-labelledby="why-heading" className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="container grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeading
            id="why-heading"
            eyebrow="Why Kwach Computers"
            title="Straightforward tech help you can rely on."
            description="Buying a computer or getting one fixed shouldn't be confusing. We keep things simple, honest and focused on what works for you."
          />

          <Reveal delay={100}>
            <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200">
              {stats.map((s) => (
                <div key={s.label} className="bg-white p-5 sm:p-6">
                  <dt className="text-sm text-slate-500">{s.label}</dt>
                  <dd className="mt-1 font-display text-3xl font-bold text-navy-950 sm:text-4xl">{s.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={160}>
            <div className="mt-6 flex items-center gap-4 rounded-xl bg-navy-950 p-5 text-white">
              <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">Our promise</span>
              <span className="h-6 w-px bg-white/20" aria-hidden="true" />
              <span className="font-display text-lg font-semibold">{site.values.join(' · ')}</span>
            </div>
          </Reveal>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {reasons.map(({ title, description, icon: Icon }, i) => (
            <Reveal key={title} delay={(i % 2) * 80} className="h-full">
              <div className="card card-hover h-full p-6">
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-700 ring-1 ring-brand-100"
                  aria-hidden="true"
                >
                  <Icon size={22} />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-navy-950">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
