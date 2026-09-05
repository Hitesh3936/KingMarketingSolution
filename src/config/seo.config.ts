import { Metadata } from 'next';
import { brandConfig } from './brand.config';

export const defaultKeywords = [
  'King Marketing Solution',
  'King Marketing Solutions',
  'King Marketing Rajpura',
  'FMCG Marketing Company Punjab',
  'FMCG Distributor India',
  'Wholesale Instant Noodles Supplier',
  'Bulk Pasta Macaroni Supplier India',
  'Elaichi Rusk Wholesale Supplier',
  'Food Distribution Company Punjab',
  'Cookwell Noodles Distributor',
  'Indian Buzz FMCG Brand',
  'Food Product Supply Chain India',
  'FMCG Wholesale Partner North India',
];

export const seoConfig = {
  title: `${brandConfig.companyName} | Leading FMCG Marketing & Distribution Company in India`,
  description: brandConfig.description,
  ogImage: '/assets/hero/banner-1.png',
  siteUrl: brandConfig.website,
};

export function generatePageMetadata({
  title,
  description,
  path = '',
  image = seoConfig.ogImage,
  keywords = [],
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  keywords?: string[];
} = {}): Metadata {
  const pageTitle = title
    ? `${title} | ${brandConfig.companyName}`
    : `${brandConfig.companyName} | Leading FMCG Marketing & Distribution Company`;
  const pageDesc = description || brandConfig.description;
  const canonicalUrl = `${seoConfig.siteUrl}${path}`;
  const combinedKeywords = Array.from(new Set([...keywords, ...defaultKeywords]));

  return {
    title: pageTitle,
    description: pageDesc,
    keywords: combinedKeywords,
    metadataBase: new URL(seoConfig.siteUrl),
    alternates: {
      canonical: canonicalUrl,
    },
    verification: {
      google: 'google888727015cd25fa1',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: pageTitle,
      description: pageDesc,
      url: canonicalUrl,
      siteName: brandConfig.companyName,
      locale: 'en_IN',
      type: 'website',
      images: [
        {
          url: image.startsWith('http') ? image : `${seoConfig.siteUrl}${image}`,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDesc,
      images: [image.startsWith('http') ? image : `${seoConfig.siteUrl}${image}`],
    },
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/assets/logos/favicon-32.png', sizes: '32x32', type: 'image/png' },
        { url: '/assets/logos/favicon-192.png', sizes: '192x192', type: 'image/png' },
      ],
      shortcut: '/favicon.ico',
      apple: [
        { url: '/assets/logos/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      ],
    },
  };
}
