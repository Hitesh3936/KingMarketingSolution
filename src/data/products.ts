export interface Product {
  id: number;
  slug: string;
  name: string;
  image: string;
  detailImage: string | null;
  description: string;
  brand: 'cookwell' | 'indian-buzz';
}

export const products: Product[] = [
  {
    id: 1,
    slug: 'premium-elaichi-rusk',
    name: 'Premium Elaichi Rusk',
    image: '/assets/products/slider/rusk.png',
    detailImage: null,
    description: 'Savor the crispness of our premium Elaichi Rusk. Infused with aromatic cardamom (elaichi) and double-baked to perfection for that classic, golden tea-time crunch.',
    brand: 'cookwell'
  },
  {
    id: 2,
    slug: 'macaroni',
    name: 'Macaroni',
    image: '/assets/products/slider/macaroni.png',
    detailImage: null,
    description: 'Quick-cooking macaroni made from select high-quality durum wheat. Offers the perfect bite and rich texture, making it ideal for cheesy macaroni dishes, soups, and fresh pasta salads.',
    brand: 'cookwell'
  },
  {
    id: 3,
    slug: 'pasta',
    name: 'Pasta',
    image: '/assets/products/slider/pasta.png',
    detailImage: null,
    description: 'Gourmet spiral pasta crafted from high-protein durum wheat semolina. Engineered to hold sauces perfectly, enabling you to bring authentic Italian flavors to your kitchen table.',
    brand: 'cookwell'
  },
  {
    id: 4,
    slug: 'instant-noodles-tangy-masala',
    name: 'Instant Noodles - Tangy Masala',
    image: '/assets/products/slider/noodles-tangy-vertical.png',
    detailImage: null,
    description: 'Delectable instant noodles seasoned with a rich blend of tangy Indian spices. Perfect for satisfying quick cravings and ready to serve in just two minutes.',
    brand: 'cookwell'
  },
  {
    id: 5,
    slug: 'instant-noodles-tangy-masala-classic',
    name: 'Instant Noodles - Tangy Masala (Classic Pack)',
    image: '/assets/products/slider/noodles-tangy-horizontal.png',
    detailImage: null,
    description: 'Enjoy our signature savory Tangy Masala instant noodles in our classic horizontal packaging, offering the same mouthwatering taste and quick comfort.',
    brand: 'cookwell'
  },
  {
    id: 6,
    slug: 'instant-noodles-teekha-tadka',
    name: 'Instant Noodles - Teekha Tadka',
    image: '/assets/products/slider/noodles-teekha-tadka.png',
    detailImage: null,
    description: 'Spiced up with hot red chilies and traditional Indian seasonings, delivering a fiery kick of Teekha Tadka in every noodle bite. Perfect for spice lovers.',
    brand: 'cookwell'
  }
];
