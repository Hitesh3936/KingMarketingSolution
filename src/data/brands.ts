export interface Brand {
  name: string;
  slug: string;
  logo: string;
  description: string;
}

export const brands: Brand[] = [
  {
    name: 'Cookwell',
    slug: 'cookwell',
    logo: '/assets/logos/cookwell-logo.png',
    description: 'Cookwell was born from a simple yet powerful idea: to make everyday cooking easier, healthier, and more joyful for Indian households. Cookwell represents trust, purity, and performance—values that have guided our journey for over four decades.'
  },
  {
    name: 'Indian Buzz',
    slug: 'indian-buzz',
    logo: '/assets/logos/indian-buzz-logo.png',
    description: "Indian Buzz was created to capture the energy, creativity, and evolving tastes of modern India. It's a brand that celebrates bold flavors, fast lifestyles, and cultural pride—whether it's a steaming bowl of instant noodles or a crunchy bite of chikki."
  }
];
