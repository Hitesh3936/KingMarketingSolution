import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { products } from '@/data/products';
import { PageTitleBar } from '@/components/ui/PageTitleBar/PageTitleBar';
import { Button } from '@/components/ui/Button/Button';
import { generatePageMetadata } from '@/config/seo.config';
import { JsonLdScript, generateProductJsonLd, generateBreadcrumbJsonLd } from '@/utils/seo';
import styles from './ProductDetail.module.css';

interface ProductDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static paths for SSG
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

// Dynamic SEO metadata
export async function generateMetadata({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return generatePageMetadata({
      title: 'Product Not Found',
      description: 'The requested product could not be found.',
    });
  }

  return generatePageMetadata({
    title: `${product.name} — Wholesale FMCG Food Product`,
    description: `${product.description} Available in bulk for distributors, wholesalers, and retailers across India from King Marketing Solution.`,
    path: `/products/${product.slug}`,
    image: product.detailImage || product.image,
    keywords: [
      `${product.name} Wholesale`,
      `${product.name} Distributor India`,
      `Buy ${product.name} Bulk`,
      `Cookwell ${product.name}`,
    ],
  });
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const displayImage = product.detailImage || product.image;

  const productJsonLd = generateProductJsonLd(
    product.name,
    product.description,
    displayImage,
    product.slug
  );

  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: 'Home', url: '/' },
    { name: 'Products', url: '/products' },
    { name: product.name, url: `/products/${product.slug}` },
  ]);

  return (
    <>
      <JsonLdScript data={productJsonLd} />
      <JsonLdScript data={breadcrumbJsonLd} />
      <PageTitleBar title={product.name} parentLabel="Products" parentHref="/products" />

      <section className={styles.section}>
        <div className="container">
          <div className={styles.grid}>
            {/* Left Column: Image */}
            <div className={styles.imageCol}>
              <div className={styles.imageWrapper}>
                <Image
                  src={displayImage}
                  alt={product.name}
                  width={570}
                  height={400}
                  className={styles.image}
                  priority
                />
              </div>
            </div>

            {/* Right Column: Details */}
            <div className={styles.detailsCol}>
              <span className={`${styles.badge} ${styles[product.brand]}`}>
                {product.brand === 'cookwell' ? 'Cookwell Brand' : 'Indian Buzz Brand'}
              </span>
              <h2 className={styles.title}>{product.name}</h2>
              
              <div className={styles.divider}></div>
              
              <p className={styles.description}>{product.description}</p>
              
              <h4 className={styles.listHeading}>Why Choose King Marketing {product.name}?</h4>
              <ul className={styles.features}>
                <li className={styles.featureItem}>
                  <strong>Premium Quality Ingredients</strong>: Selected from the finest farms.
                </li>
                <li className={styles.featureItem}>
                  <strong>Hygienic Process</strong>: Processed in state-of-the-art automated plants.
                </li>
                <li className={styles.featureItem}>
                  <strong>Nutrient Preservation</strong>: Retaining natural goodness and original taste.
                </li>
              </ul>

              <div className={styles.actions}>
                <Button href="/contact" size="md" variant="primary">
                  Inquire Now
                </Button>
                <Link href="/products" className={styles.backLink}>
                  &larr; Back to Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
