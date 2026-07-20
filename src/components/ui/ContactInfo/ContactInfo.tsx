import React from 'react';
import { brandConfig } from '@/config/brand.config';
import styles from './ContactInfo.module.css';

interface ContactInfoProps {
  className?: string;
  vertical?: boolean;
}

export function ContactInfo({ className = '', vertical = false }: ContactInfoProps) {
  const listClass = `${styles.list} ${vertical ? styles.vertical : ''} ${className}`;

  return (
    <ul className={listClass}>
      <li className={styles.item}>
        <a href={`tel:${brandConfig.contact.phoneRaw}`} className={styles.link}>
          <span className={styles.icon}>
            <svg viewBox="0 0 512 512" fill="currentColor" width="14" height="14">
              <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"/>
            </svg>
          </span>
          <span className={styles.text}>{brandConfig.contact.phone}</span>
        </a>
      </li>
      <li className={styles.item}>
        <a href={`mailto:${brandConfig.contact.email}`} className={styles.link}>
          <span className={styles.icon}>
            <svg viewBox="0 0 512 512" fill="currentColor" width="14" height="14">
              <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.8V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.9 9.7-4.8l186.2 148.9c25.4 20.3 61.4 20.3 86.8 0L502.3 190.8zM256 312c12.7 0 25-4.8 34.4-13.6L498.9 130.7c3.9-3.1 9.7-.2 9.7 4.8V112c0-26.5-21.5-48-48-48H48c-26.5 0-48 21.5-48 48v23.5c0 5 5.7 7.9 9.7 4.8l208.5 166.8c9.4 8.8 21.7 13.6 34.4 13.6z"/>
            </svg>
          </span>
          <span className={styles.text}>{brandConfig.contact.email}</span>
        </a>
      </li>
      <li className={styles.item}>
        <div className={styles.content}>
          <span className={styles.icon}>
            <svg viewBox="0 0 384 512" fill="currentColor" width="14" height="14">
              <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"/>
            </svg>
          </span>
          <span className={styles.text}>{brandConfig.contact.address}</span>
        </div>
      </li>
    </ul>
  );
}
