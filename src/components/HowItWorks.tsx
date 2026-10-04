import { steps } from '../data/highlights';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function HowItWorks() {
  return (
    <section aria-labelledby="how-heading" className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="container">
        <SectionHeading
          id="how-heading"
          eyebrow="How it works"
          title="Getting sorted is simple."
          description="Three easy steps from question to working solution."
          align="center"
        />

        <ol className="relative mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          <span
            className="absolute left-[16.66%] right-[16.66%] top-7 hidden h-px bg-gradient-to-r from-brand-200 via-brand-400 to-brand-200 md:block"
            aria-hidden="true"
          />
          {steps.map((step, i) => (
            <Reveal as="li" key={step.number} delay={i * 120} className="relative text-center">
              <span className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-navy-950 font-display text-lg font-bold text-brand-400 ring-8 ring-white">
                {step.number}
              </span>
              <h3 className="mt-6 text-xl font-bold text-navy-950">{step.title}</h3>
              <p className="mx-auto mt-3 max-w-xs leading-relaxed text-slate-600">{step.description}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
