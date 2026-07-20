import React from 'react';
import { brandConfig } from '@/config/brand.config';

export function generateOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': brandConfig.companyName,
    'url': brandConfig.website,
    'logo': `${brandConfig.website}${brandConfig.logos.main}`,
    'contactPoint': {
      '@type': 'ContactPoint',
      'telephone': brandConfig.contact.phone,
      'contactType': 'customer service',
      'email': brandConfig.contact.email,
      'areaServed': 'IN',
      'availableLanguage': ['en', 'hi']
    },
    'sameAs': [
      brandConfig.social.facebook,
      brandConfig.social.twitter,
      brandConfig.social.youtube
    ].filter(link => link !== '#')
  };
}

export function generateProductJsonLd(productName: string, description: string, image: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': productName,
    'description': description,
    'image': `${brandConfig.website}${image}`,
    'brand': {
      '@type': 'Brand',
      'name': brandConfig.shortName
    },
    'offers': {
      '@type': 'AggregateOffer',
      'priceCurrency': 'INR',
      'seller': {
        '@type': 'Organization',
        'name': brandConfig.companyName
      }
    }
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
