import { ArrowRight } from 'lucide-react';
import type { Category } from '../data/categories';
import { whatsappLink } from '../lib/links';

export default function CategoryCard({ category }: { category: Category }) {
  const { label, title, description, image, imageAlt, icon: Icon } = category;
  const enquiry = `Hi KWACH_001 COMPUTERS, I'd like to ask about ${title}.`;
  return (
    <article className="card card-hover group flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <img
          src={image}
          alt={imageAlt}
          loading="lazy"
          width={900}
          height={600}
          className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 to-transparent" />
        <span className="absolute left-4 top-4 rounded-md bg-white/95 px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-wider text-navy-900">
          {label}
        </span>
        <span
          className="absolute -bottom-6 right-5 flex h-12 w-12 items-center justify-center rounded-xl bg-navy-950 text-brand-400 shadow-lg ring-4 ring-white"
          aria-hidden="true"
        >
          <Icon size={22} />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6 pt-7">
        <h3 className="text-xl font-bold text-navy-950">{title}</h3>
        <p className="mt-2 leading-relaxed text-slate-600">{description}</p>
        <a
          href={whatsappLink(enquiry)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-brand-700 transition hover:gap-3 hover:text-brand-600"
        >
          Inquire on WhatsApp
          <ArrowRight size={16} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
