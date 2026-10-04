import { ArrowRight } from 'lucide-react';
import { services } from '../data/services';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import ServiceCard from './ServiceCard';

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative isolate overflow-hidden bg-navy-950 py-20 sm:py-24 lg:py-28"
    >
      <div className="tech-grid absolute inset-0 -z-10 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" />
      <div className="absolute -right-40 top-20 -z-10 h-96 w-96 rounded-full bg-royal-600/20 blur-[120px]" />

      <div className="container">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            id="services-heading"
            tone="dark"
            eyebrow="Services"
            title="More Than a Computer Shop."
            description="Repairs, upgrades and hands-on IT help, so your technology keeps working for you long after you buy it."
          />
          <Reveal>
            <a href="#contact" className="btn-outline-light">
              Book a service
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 90} className="h-full">
              <ServiceCard service={service} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
