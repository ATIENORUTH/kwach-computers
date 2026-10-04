import { categories } from '../data/categories';
import CategoryCard from './CategoryCard';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Products() {
  return (
    <section id="products" aria-labelledby="products-heading" className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            id="products-heading"
            eyebrow="Products"
            title="Technology That Fits Your Needs."
            description="From your first laptop to a full office setup, we help you get dependable equipment at a price that makes sense."
          />
          <Reveal>
            <a href="#featured" className="btn border border-slate-300 text-navy-900 hover:border-navy-900 hover:bg-navy-950 hover:text-white">
              View featured products
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 sm:mt-14 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {categories.map((category, i) => (
            <Reveal key={category.title} delay={i * 90} className="h-full">
              <CategoryCard category={category} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
