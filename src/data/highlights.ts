import type { LucideIcon } from 'lucide-react';
import { Cable, Headphones, Keyboard, Laptop, Usb } from 'lucide-react';

export interface Highlight {
  title: string;
  description: string;
  icon: LucideIcon;
}

/** "What we sell" list from the flyer, shown in the scrolling strip under the hero */
export const sellingPoints: Array<Omit<Highlight, 'description'>> = [
  { title: 'Laptops & Computers', icon: Laptop },
  { title: 'Computer Accessories', icon: Keyboard },
  { title: 'Flash Disks & Memory Cards', icon: Usb },
  { title: 'Earphones & Headphones', icon: Headphones },
  { title: 'Chargers, Cables & Adapters', icon: Cable },
];
