export interface NavLink {
  label: string;
  /** Section id on the page (without #) */
  id: string;
}

export const navLinks: NavLink[] = [
  { label: 'Home', id: 'home' },
  { label: 'Products', id: 'products' },
  { label: 'Services', id: 'services' },
  { label: 'About', id: 'about' },
  { label: 'Contact', id: 'contact' },
];
