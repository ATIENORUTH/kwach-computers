/** Options for the "What do you need?" field in the contact form. */
export const needOptions = [
  'Laptops & Computers',
  'Computer Accessories',
  'Flash Disks & Memory Cards',
  'Earphones & Headphones',
  'Chargers, Cables & Adapters',
] as const;

export type NeedOption = (typeof needOptions)[number];
