import { sellingPoints } from '../data/highlights';

export default function SellingStrip() {
  const items = [...sellingPoints, ...sellingPoints];
  return (
    <section aria-label="What we sell" className="relative overflow-hidden border-y border-white/10 bg-navy-900 py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-navy-900 to-transparent sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-navy-900 to-transparent sm:w-32" />
      <ul className="marquee flex w-max items-center gap-10 hover:[animation-play-state:paused] sm:gap-14">
        {items.map(({ title, icon: Icon }, i) => (
          <li
            key={`${title}-${i}`}
            className="flex shrink-0 items-center gap-3 text-sm font-medium text-slate-300"
            aria-hidden={i >= sellingPoints.length}
          >
            <Icon size={18} className="text-brand-400" aria-hidden="true" />
            {title}
          </li>
        ))}
      </ul>
    </section>
  );
}
