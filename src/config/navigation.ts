export interface NavLink {
  label: string;
  /** Section id on the page (without #) */
  id: string;
}

export const navLinks: NavLink[] = [
  { label: 'Home', id: 'home' },
  { label: 'What We Sell', id: 'products' },
  { label: 'Products', id: 'featured' },
  { label: 'Contact', id: 'contact' },
];
