import { useMemo, useState } from 'react';
import { productCategories, products, type ProductCategory } from '../data/products';
import { cn } from '../lib/cn';
import ProductCard from './ProductCard';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

type Filter = 'All' | ProductCategory;
const filters: Filter[] = ['All', ...productCategories];

export default function FeaturedProducts() {
  const [filter, setFilter] = useState<Filter>('All');
  const visible = useMemo(
    () => (filter === 'All' ? products : products.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <section id="featured" aria-labelledby="featured-heading" className="bg-slate-50 py-20 sm:py-24 lg:py-28">
      <div className="container">
        <SectionHeading
          id="featured-heading"
          eyebrow="Featured products"
          title="Popular picks from our shelves."
          description="Stock changes often. Tap “Request Price” to get current prices and availability on WhatsApp."
          align="center"
        />

        <Reveal className="mt-10 flex justify-center">
          <div
            role="group"
            aria-label="Filter products by category"
            className="-mx-5 flex max-w-[calc(100%+2.5rem)] gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:mx-0 sm:max-w-full sm:flex-wrap sm:justify-center sm:px-0"
          >
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
                className={cn(
                  'shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition',
                  filter === f
                    ? 'border-navy-950 bg-navy-950 text-white'
                    : 'border-slate-300 bg-white text-slate-700 hover:border-navy-900 hover:text-navy-950',
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-6">
          {visible.map((product) => (
            <div key={`${filter}-${product.id}`} className="h-full animate-fade-in">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-slate-500">
          Looking for something not listed?{' '}
          <a href="#contact" className="font-semibold text-brand-700 underline-offset-4 hover:underline">
            Tell us what you need
          </a>{' '}
          and we&apos;ll source it.
        </p>
      </div>
    </section>
  );
}
