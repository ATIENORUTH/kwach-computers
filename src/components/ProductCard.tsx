import { MessageCircle } from 'lucide-react';
import type { Product } from '../data/products';
import { whatsappLink } from '../lib/links';

const formatPrice = (amount: number) => `From KSh ${amount.toLocaleString('en-KE')}`;

export default function ProductCard({ product }: { product: Product }) {
  const { name, description, category, image, imageAlt, priceFrom, badge } = product;
  const enquiry = `Hi Kwach Computers, I'd like to know the price and availability of: ${name}.`;

  return (
    <article className="card card-hover group flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <img
          src={image}
          alt={imageAlt}
          loading="lazy"
          width={800}
          height={600}
          className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
        />
        {badge && (
          <span className="absolute left-3 top-3 rounded-md bg-navy-950/90 px-2 py-1 text-[0.7rem] font-semibold text-brand-300 backdrop-blur">
            {badge}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">{category}</p>
        <h3 className="mt-1.5 text-lg font-bold text-navy-950">{name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
        <div className="mt-auto flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
          <p className="whitespace-nowrap text-[0.8rem] font-semibold text-navy-900">{priceFrom ? formatPrice(priceFrom) : 'Contact for price'}</p>
          <a
            href={whatsappLink(enquiry)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-navy-950 px-3 py-2 text-sm font-semibold text-white transition hover:bg-brand-500 hover:text-navy-950"
            aria-label={`Request price for ${name} on WhatsApp`}
          >
            <MessageCircle size={15} aria-hidden="true" />
            Request Price
          </a>
        </div>
      </div>
    </article>
  );
}
