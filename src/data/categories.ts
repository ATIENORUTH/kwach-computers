import type { LucideIcon } from 'lucide-react';
import { Cpu, Keyboard, Laptop } from 'lucide-react';
import type { NeedOption } from './contact';

export interface Category {
  label: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  icon: LucideIcon;
  items: string[];
  need: NeedOption;
}

export const categories: Category[] = [
  {
    label: 'Computers',
    title: 'Laptops & Desktops',
    description: 'Everyday laptops, business machines, desktops and work-ready computers.',
    image: '/images/category-laptops.webp',
    imageAlt: 'Laptop on a clean wooden desk',
    icon: Laptop,
    items: ['Business laptops', 'Student laptops', 'Desktop PCs'],
    need: 'Laptop / Desktop',
  },
  {
    label: 'Accessories',
    title: 'Accessories',
    description: 'Keyboards, mice, storage, chargers, cables, headsets and other essentials.',
    image: '/images/category-accessories.webp',
    imageAlt: 'Wireless keyboard, mouse and headphones on a desk',
    icon: Keyboard,
    items: ['Flash disks & memory cards', 'Earphones & headphones', 'Chargers, cables & adapters'],
    need: 'Accessories',
  },
  {
    label: 'Upgrades',
    title: 'Computer Parts',
    description: 'Components and upgrades to keep your setup performing at its best.',
    image: '/images/category-parts.webp',
    imageAlt: 'Close-up of a processor installed on a motherboard',
    icon: Cpu,
    items: ['SSDs & hard drives', 'RAM upgrades', 'Replacement parts'],
    need: 'Computer Parts / Upgrade',
  },
];
