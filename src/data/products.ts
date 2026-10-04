/** Product categories shown with price requests instead of unconfirmed prices or models. */

export const productCategories = [
  'Laptops & Computers',
  'Computer Accessories',
  'Flash Disks & Memory Cards',
  'Earphones & Headphones',
  'Chargers, Cables & Adapters',
] as const;
export type ProductCategory = (typeof productCategories)[number];

export interface Product {
  id: string;
  name: string;
  description: string;
  category: ProductCategory;
  image: string;
  imageAlt: string;
  /** Optional starting price in KSh */
  priceFrom?: number;
}

export const products: Product[] = [
  {
    id: 'laptops-computers',
    name: 'Laptops & Computers',
    description: 'Ask about current models and prices.',
    category: 'Laptops & Computers',
    image: '/images/laptops-computers.jpeg',
    imageAlt: 'Sample laptop photo for the laptops and computers category',
  },
  {
    id: 'computer-accessories',
    name: 'Computer Accessories',
    description: 'Ask about current products and prices.',
    category: 'Computer Accessories',
    image: '/images/computer%20accessories.jpg',
    imageAlt: 'Computer mouse shown as an accessory example',
  },
  {
    id: 'flash-disks-memory-cards',
    name: 'Flash Disks & Memory Cards',
    description: 'Ask about current products and prices.',
    category: 'Flash Disks & Memory Cards',
    image: '/images/flash%20cards.jpeg',
    imageAlt: 'Portable storage product shown as a storage category example',
  },
  {
    id: 'earphones-headphones',
    name: 'Earphones & Headphones',
    description: 'Ask about current products and prices.',
    category: 'Earphones & Headphones',
    image: '/images/product-headphones.webp',
    imageAlt: 'Unbranded over-ear headphones',
  },
  {
    id: 'chargers-cables-adapters',
    name: 'Chargers, Cables & Adapters',
    description: 'Ask about current products and prices.',
    category: 'Chargers, Cables & Adapters',
    image: '/images/charger.jpg',
    imageAlt: 'Charger and cable shown as a charger category example',
  },
];
