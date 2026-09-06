import React from 'react';
import { brandConfig } from '@/config/brand.config';

export function generateOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${brandConfig.website}/#organization`,
    name: brandConfig.companyName,
    legalName: brandConfig.companyName,
    url: brandConfig.website,
    logo: `${brandConfig.website}${brandConfig.logos.main}`,
    image: `${brandConfig.website}${brandConfig.logos.main}`,
    description: brandConfig.description,
    telephone: brandConfig.contact.phone,
    email: brandConfig.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: brandConfig.contact.address,
      addressLocality: brandConfig.contact.city,
      addressRegion: brandConfig.contact.state,
      postalCode: brandConfig.contact.postalCode,
      addressCountry: brandConfig.contact.country,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: brandConfig.contact.phone,
      contactType: 'sales & customer service',
      email: brandConfig.contact.email,
      areaServed: 'IN',
      availableLanguage: ['en', 'hi', 'pa'],
    },
    sameAs: [
      brandConfig.social.facebook,
      brandConfig.social.twitter,
      brandConfig.social.youtube,
    ].filter((link) => link !== '#'),
  };
}

export function generateLocalBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WholesaleStore',
    '@id': `${brandConfig.website}/#localbusiness`,
    name: brandConfig.companyName,
    url: brandConfig.website,
    logo: `${brandConfig.website}${brandConfig.logos.main}`,
    image: `${brandConfig.website}/assets/og-image.png`,
    description: brandConfig.description,
    telephone: brandConfig.contact.phone,
    email: brandConfig.contact.email,
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'SCO 21, 2nd Floor, Madhuban Complex',
      addressLocality: 'Rajpura',
      addressRegion: 'Punjab',
      postalCode: '140401',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: brandConfig.contact.geo.latitude,
      longitude: brandConfig.contact.geo.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '19:00',
      },
    ],
  };
}

export function generateWebSiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${brandConfig.website}/#website`,
    url: brandConfig.website,
    name: brandConfig.companyName,
    description: brandConfig.description,
    publisher: {
      '@id': `${brandConfig.website}/#organization`,
    },
    inLanguage: 'en-IN',
  };
}

export function generateBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${brandConfig.website}${item.url}`,
    })),
  };
}

export function generateProductJsonLd(
  productName: string,
  description: string,
  image: string,
  slug: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: productName,
    description: description,
    image: image.startsWith('http') ? image : `${brandConfig.website}${image}`,
    url: `${brandConfig.website}/products/${slug}`,
    brand: {
      '@type': 'Brand',
      name: 'Cookwell',
    },
    manufacturer: {
      '@type': 'Organization',
      name: brandConfig.companyName,
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      price: 'Contact for Wholesale Price',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: brandConfig.companyName,
      },
    },
  };
}

interface JsonLdScriptProps {
  data: Record<string, unknown>;
}

export function JsonLdScript({ data }: JsonLdScriptProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

