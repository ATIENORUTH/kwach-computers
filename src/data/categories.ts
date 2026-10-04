import type { LucideIcon } from 'lucide-react';
import { Cable, Headphones, Keyboard, Laptop, Usb } from 'lucide-react';

export interface Category {
  label: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  icon: LucideIcon;
}

export const categories: Category[] = [
  {
    label: 'Computers',
    title: 'Laptops & Computers',
    description: 'Laptops and computers.',
    image: '/images/laptops-computers.jpeg',
    imageAlt: 'Sample laptop photo for the laptops and computers category',
    icon: Laptop,
  },
  {
    label: 'Accessories',
    title: 'Computer Accessories',
    description: 'Computer accessories.',
    image: '/images/computer%20accessories.jpg',
    imageAlt: 'Computer mouse shown as an accessory example',
    icon: Keyboard,
  },
  {
    label: 'Storage',
    title: 'Flash Disks & Memory Cards',
    description: 'Flash disks and memory cards.',
    image: '/images/flash%20cards.jpeg',
    imageAlt: 'Portable storage product shown as a storage category example',
    icon: Usb,
  },
  {
    label: 'Audio',
    title: 'Earphones & Headphones',
    description: 'Earphones and headphones.',
    image: '/images/product-headphones.webp',
    imageAlt: 'Unbranded over-ear headphones',
    icon: Headphones,
  },
  {
    label: 'Power',
    title: 'Chargers, Cables & Adapters',
    description: 'Chargers, cables and adapters.',
    image: '/images/charger.jpg',
    imageAlt: 'Charger and cable shown as a charger category example',
    icon: Cable,
  },
];
