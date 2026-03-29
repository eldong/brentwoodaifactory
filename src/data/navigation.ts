// Navigation links used across the site
export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/team', label: 'Team' },
  { to: '/success-stories', label: 'Success Stories' },
  { to: '/insights', label: 'Insights' },
  { to: '/contact', label: 'Contact' },
] as const;

export type NavLink = (typeof navLinks)[number];
