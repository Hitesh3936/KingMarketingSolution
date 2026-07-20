import React from 'react';
import { brandConfig } from '@/config/brand.config';
import styles from './GoogleMap.module.css';

interface GoogleMapProps {
  className?: string;
  height?: string;
}

export function GoogleMap({ className = '', height = '300px' }: GoogleMapProps) {
  const query = encodeURIComponent(brandConfig.googleMapsQuery);
  const src = `https://maps.google.com/maps?q=${query}&t=m&z=14&output=embed&iwloc=near`;

  return (
    <div className={`${styles.container} ${className}`} style={{ height }}>
      <iframe
        src={src}
        title={brandConfig.companyName}
        aria-label={brandConfig.companyName}
        className={styles.iframe}
        loading="lazy"
        allowFullScreen
      />
    </div>
  );
}
