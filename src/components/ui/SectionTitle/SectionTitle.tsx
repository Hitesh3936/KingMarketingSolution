import React from 'react';
import styles from './SectionTitle.module.css';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: 'center' | 'left' | 'right';
  className?: string;
  light?: boolean;
}

export function SectionTitle({
  title,
  subtitle,
  description,
  align = 'center',
  className = '',
  light = false
}: SectionTitleProps) {
  const containerClass = `${styles.wrapper} ${styles[align]} ${className}`;
  const titleClass = `${styles.title} ${light ? styles.lightTitle : ''}`;
  const descClass = `${styles.description} ${light ? styles.lightDesc : ''}`;

  return (
    <div className={containerClass}>
      <div className={styles.titleWrap}>
        {subtitle && <span className={styles.subTitle}>{subtitle}</span>}
        <h3 className={titleClass}>{title}</h3>
        <span className={styles.separator}></span>
      </div>
      {description && <div className={descClass}>{description}</div>}
    </div>
  );
}
