import type { Service } from '../data/services';

export default function ServiceCard({ service, index }: { service: Service; index: number }) {
  const { title, description, icon: Icon } = service;
  return (
    <article className="group relative h-full overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-400/40 hover:bg-white/[0.06] sm:p-7">
      <div className="flex items-start justify-between">
        <span
          className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-400 ring-1 ring-brand-400/20 transition group-hover:bg-brand-500 group-hover:text-navy-950"
          aria-hidden="true"
        >
          <Icon size={22} />
        </span>
        <span className="font-display text-sm font-semibold text-white/20" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <h3 className="mt-6 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 leading-relaxed text-slate-400">{description}</p>
      <span
        className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-brand-400 transition-transform duration-500 group-hover:scale-x-100"
        aria-hidden="true"
      />
    </article>
  );
}
