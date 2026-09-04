import { MetadataRoute } from 'next';
import { brandConfig } from '@/config/brand.config';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: `${brandConfig.website}/sitemap.xml`,
  };
}
