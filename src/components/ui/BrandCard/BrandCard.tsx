import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Brand } from '@/data/brands';
import styles from './BrandCard.module.css';

interface BrandCardProps {
  brand: Brand;
}

export function BrandCard({ brand }: BrandCardProps) {
  return (
    <div className={`${styles.card} ${styles[brand.slug]}`}>
      <div className={styles.logoWrapper}>
        <Image
          src={brand.logo}
          alt={brand.name}
          width={180}
          height={162}
          className={styles.logo}
        />
      </div>
      <p className={styles.description}>{brand.description}</p>
      <Link href="/brands" className={styles.learnMore}>
        Explore {brand.name} &rarr;
      </Link>
    </div>
  );
}
