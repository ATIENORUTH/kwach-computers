import type { LucideIcon } from 'lucide-react';
import {
  BadgeCheck,
  Cable,
  GraduationCap,
  HandCoins,
  HardDrive,
  Headphones,
  HeartHandshake,
  Keyboard,
  Laptop,
  MessageSquareText,
  ShieldCheck,
  Usb,
} from 'lucide-react';

export interface Highlight {
  title: string;
  description: string;
  icon: LucideIcon;
}

/** "Why choose us" points */
export const reasons: Highlight[] = [
  {
    title: 'Quality-focused products',
    description: 'We stock machines and accessories we would be happy to use ourselves.',
    icon: BadgeCheck,
  },
  {
    title: 'Honest recommendations',
    description: 'We help you buy what you actually need, not the most expensive option.',
    icon: MessageSquareText,
  },
  {
    title: 'Affordable solutions',
    description: 'Options for different budgets, with clear pricing before you commit.',
    icon: HandCoins,
  },
  {
    title: 'Reliable technical support',
    description: 'Help with setup, repairs and troubleshooting when you need it.',
    icon: ShieldCheck,
  },
  {
    title: 'Customer-first service',
    description: 'Quick responses on WhatsApp and calls, with a friendly, patient approach.',
    icon: HeartHandshake,
  },
  {
    title: 'For students & businesses',
    description: 'From a first laptop for campus to equipment for a growing office.',
    icon: GraduationCap,
  },
];

/** "What we sell" list from the flyer, shown in the scrolling strip under the hero */
export const sellingPoints: Array<Omit<Highlight, 'description'>> = [
  { title: 'Laptops & Computers', icon: Laptop },
  { title: 'Computer Accessories', icon: Keyboard },
  { title: 'Flash Disks & Memory Cards', icon: Usb },
  { title: 'Earphones & Headphones', icon: Headphones },
  { title: 'Chargers, Cables & Adapters', icon: Cable },
  { title: 'Storage & Upgrades', icon: HardDrive },
];

export const steps = [
  {
    number: '01',
    title: 'Tell Us What You Need',
    description: 'WhatsApp, call or send the form. Share your budget and what the computer or fix is for.',
  },
  {
    number: '02',
    title: 'Get the Right Recommendation',
    description: 'We explain your options in plain language so you can choose with confidence.',
  },
  {
    number: '03',
    title: 'Get Your Solution',
    description: 'Collect your device, accessories or repaired machine, set up and ready to use.',
  },
];
