export interface Testimonial {
  id: number;
  name: string;
  designation: string;
  excerpt: string;
  image: string | null;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    designation: 'Authorized Distributor, Indore',
    excerpt: 'Partnering with King Marketing Solution has been one of our best business decisions. Their products like Cookwell Chakki Atta and Edible Oils have consistent demand and unparalleled quality.',
    image: null
  },
  {
    id: 2,
    name: 'Sunita Sharma',
    designation: 'Home Maker, Mumbai',
    excerpt: 'I have been using Cookwell refined wheat flour and vermicelli for my family for years. The freshness and purity remind me of traditional home-milled grain.',
    image: null
  },
  {
    id: 3,
    name: 'Amit Patel',
    designation: 'Retail Store Owner, Gujarat',
    excerpt: 'Indian Buzz noodles and peanut chikki fly off the shelves! The packaging is modern and clean, and the flavors are spot on for today’s younger generation.',
    image: null
  },
  {
    id: 4,
    name: 'Dr. Ananya Goel',
    designation: 'Nutritionist, Delhi',
    excerpt: 'I highly recommend whole grain wheat products from King Marketing Solution. Their hygienic processing ensures dietary fibers are completely retained, making them highly nutritious.',
    image: null
  }
];
