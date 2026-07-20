import React from 'react';
import Link from 'next/link';
import styles from './PageTitleBar.module.css';

interface PageTitleBarProps {
  title: string;
  parentLabel?: string;
  parentHref?: string;
}

export function PageTitleBar({ title, parentLabel, parentHref }: PageTitleBarProps) {
  return (
    <div className={styles.banner}>
      <div className={styles.overlay}></div>
      <div className="container">
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.breadcrumbs}>
            <Link href="/" className={styles.link}>
              Home
            </Link>
            <span className={styles.separator}>/</span>
            {parentLabel && parentHref && (
              <>
                <Link href={parentHref} className={styles.link}>
                  {parentLabel}
                </Link>
                <span className={styles.separator}>/</span>
              </>
            )}
            <span className={styles.current}>{title}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
