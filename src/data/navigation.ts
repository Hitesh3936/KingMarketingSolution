export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navigationItems: NavItem[] = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'The Legacy', href: '/about' },
      { label: 'Leadership', href: '/about/leadership' },
      { label: 'Vision & Mission', href: '/about/vision-mission' },
      { label: 'Quality', href: '/about/quality' }
    ]
  },
  {
    label: 'Brands',
    href: '/brands'
  },
  {
    label: 'Products',
    href: '/products'
  },
  {
    label: 'CSR',
    href: '/csr'
  },
  {
    label: 'Career',
    href: '/career'
  },
  {
    label: 'Contact',
    href: '/contact'
  }
];

export const footerNavItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Leadership', href: '/about/leadership' },
  { label: 'Vision & Mission', href: '/about/vision-mission' },
  { label: 'Quality', href: '/about/quality' },
  { label: 'Brands', href: '/brands' },
  { label: 'Products', href: '/products' },
  { label: 'CSR', href: '/csr' },
  { label: 'Career', href: '/career' },
  { label: 'Contact', href: '/contact' }
];
