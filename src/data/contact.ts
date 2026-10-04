/** Options for the "What do you need?" field in the contact form. */
export const needOptions = [
  'Laptop / Desktop',
  'Accessories',
  'Computer Parts / Upgrade',
  'Computer Repair',
  'IT Support / System Setup',
  'Networking',
  'Software Support',
  'Something else',
] as const;

export type NeedOption = (typeof needOptions)[number];
