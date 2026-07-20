import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/data/products';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className={styles.card}>
      <Link href={`/products/${product.slug}`} className={styles.link}>
        <div className={styles.imageWrapper}>
          <Image
            src={product.image}
            alt={product.name}
            width={240}
            height={240}
            className={styles.image}
            priority={product.id <= 4}
          />
        </div>
        <h4 className={styles.name}>{product.name}</h4>
      </Link>
    </div>
  );
}
