import { Metadata } from 'next';
import { brandConfig } from './brand.config';

export const seoConfig = {
  title: brandConfig.companyName,
  description: brandConfig.description,
  ogImage: '/assets/hero/banner-1.png',
  siteUrl: brandConfig.website,
};

export function generatePageMetadata({
  title,
  description,
  path = '',
  image = seoConfig.ogImage,
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
} = {}): Metadata {
  const pageTitle = title ? `${title} | ${brandConfig.shortName}` : brandConfig.companyName;
  const pageDesc = description || brandConfig.description;
  const canonicalUrl = `${seoConfig.siteUrl}${path}`;

  return {
    title: pageTitle,
    description: pageDesc,
    metadataBase: new URL(seoConfig.siteUrl),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: pageTitle,
      description: pageDesc,
      url: canonicalUrl,
      siteName: brandConfig.shortName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
      type: 'website',
    },
    icons: {
      icon: [
        { url: '/assets/logos/favicon-32.png', sizes: '32x32', type: 'image/png' },
        { url: '/assets/logos/favicon-192.png', sizes: '192x192', type: 'image/png' },
      ],
      apple: [
        { url: '/assets/logos/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDesc,
      images: [image],
    },
  };
}
