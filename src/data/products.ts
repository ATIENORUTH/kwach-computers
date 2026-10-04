/**
 * Featured products.
 * To add a product: copy one object, change the fields and drop the image in /public/images.
 * Set `priceFrom` (a number in KSh) to show "From KSh …", or leave it out to show "Contact for price".
 */

export const productCategories = ['Laptops', 'Desktops', 'Storage & Parts', 'Accessories'] as const;
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
  /** Optional short badge, e.g. "Popular" or "New stock" */
  badge?: string;
}

export const products: Product[] = [
  {
    id: 'hp-elitebook',
    name: 'HP EliteBook',
    description: 'Slim, durable business laptop with a comfortable keyboard and long battery life.',
    category: 'Laptops',
    image: '/images/product-hp-elitebook.webp',
    imageAlt: 'Silver HP EliteBook business laptop on a desk',
    badge: 'Business',
  },
  {
    id: 'dell-latitude',
    name: 'Dell Latitude',
    description: 'Reliable workhorse for office, school and everyday productivity.',
    category: 'Laptops',
    image: '/images/product-dell-latitude.webp',
    imageAlt: 'Dell Latitude laptop open on a white surface',
  },
  {
    id: 'lenovo-thinkpad',
    name: 'Lenovo ThinkPad',
    description: 'Known for tough build quality and one of the best keyboards in its class.',
    category: 'Laptops',
    image: '/images/product-lenovo-thinkpad.webp',
    imageAlt: 'Lenovo ThinkPad laptop on a round table',
    badge: 'Popular',
  },
  {
    id: 'gaming-laptop',
    name: 'Gaming Laptop',
    description: 'Dedicated graphics and high-refresh displays for gaming, design and editing.',
    category: 'Laptops',
    image: '/images/product-gaming-laptop.webp',
    imageAlt: 'Gaming laptop with a colourful backlit keyboard',
  },
  {
    id: 'desktop-pc',
    name: 'Desktop PC',
    description: 'Office towers and custom builds configured for work, study or gaming.',
    category: 'Desktops',
    image: '/images/product-desktop-pc.webp',
    imageAlt: 'Desktop PC tower with blue cooling fans',
  },
  {
    id: 'ssd',
    name: 'SSD & Storage Drives',
    description: 'SATA and NVMe SSDs plus hard drives for faster boot times and more space.',
    category: 'Storage & Parts',
    image: '/images/product-ssd.webp',
    imageAlt: 'Internal computer storage drive',
  },
  {
    id: 'ram',
    name: 'RAM Upgrades',
    description: 'Laptop and desktop memory to make multitasking smoother.',
    category: 'Storage & Parts',
    image: '/images/product-ram.webp',
    imageAlt: 'Two computer RAM memory sticks',
  },
  {
    id: 'keyboard-mouse',
    name: 'Wireless Keyboard & Mouse',
    description: 'Clean, clutter-free desk setups with reliable wireless connectivity.',
    category: 'Accessories',
    image: '/images/product-keyboard-mouse.webp',
    imageAlt: 'White wireless keyboard on a desk',
  },
  {
    id: 'laptop-chargers',
    name: 'Laptop Chargers',
    description: 'Chargers and adapters for HP, Dell, Lenovo, Apple and other popular brands.',
    category: 'Accessories',
    image: '/images/product-laptop-charger.webp',
    imageAlt: 'White laptop charger with its cable',
  },
  {
    id: 'headphones',
    name: 'Headphones & Earphones',
    description: 'Wired and wireless audio for calls, classes, music and gaming.',
    category: 'Accessories',
    image: '/images/product-headphones.webp',
    imageAlt: 'Over-ear headphones on a white background',
  },
];
