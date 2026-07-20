'use client';

import React, { useState } from 'react';
import { brandConfig } from '@/config/brand.config';
import styles from './ChatWidget.module.css';

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${brandConfig.contact.phoneRaw}`;
  const telUrl = `tel:${brandConfig.contact.phoneRaw}`;

  return (
    <div className={styles.widget}>
      {isOpen && (
        <div className={styles.popover}>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.channel} ${styles.whatsapp}`}
            aria-label="Chat on WhatsApp"
          >
            <svg width="20" height="20" viewBox="0 0 39 39" fill="currentColor">
              <path d="M12.9821 10.1115C12.7029 10.7767 11.5862 11.442 10.7486 11.575C10.1902 11.7081 9.35269 11.8411 6.84003 10.7767C3.48981 9.44628 1.39593 6.25317 1.25634 6.12012C1.11674 5.85403 0 4.39053 0 2.92702C0 1.46351 0.83755 0.665231 1.11673 0.399139C1.39592 0.133046 1.8147 0 2.23348 0C2.37307 0 2.51267 0 2.65226 0C2.93144 0 3.21063 0 3.35022 0.532183C3.62941 1.19741 4.32736 2.66092 4.32736 2.79397C4.46696 2.92702 4.46696 3.19311 4.32736 3.32616C4.18777 3.59225 4.18777 3.59224 3.90858 3.85834C3.76899 3.99138 3.6294 4.12443 3.48981 4.39052C3.35022 4.52357 3.21063 4.78966 3.35022 5.05576C3.48981 5.32185 4.18777 6.38622 5.16491 7.18449C6.42125 8.24886 7.39839 8.51496 7.81717 8.78105C8.09636 8.91409 8.37554 8.9141 8.65472 8.648C8.93391 8.38191 9.21309 7.98277 9.49228 7.58363C9.77146 7.31754 10.0507 7.1845 10.3298 7.31754C10.609 7.45059 12.2841 8.11582 12.5633 8.38191C12.8425 8.51496 13.1217 8.648 13.1217 8.78105C13.1217 8.78105 13.1217 9.44628 12.9821 10.1115Z" transform="translate(13 13)"/>
            </svg>
            <span>WhatsApp</span>
          </a>
          <a
            href={telUrl}
            className={`${styles.channel} ${styles.phone}`}
            aria-label="Call Us"
          >
            <svg width="20" height="20" viewBox="0 0 39 39" fill="currentColor">
              <path d="M19.3929 14.9176C17.752 14.7684 16.2602 14.3209 14.7684 13.7242C14.0226 13.4259 13.1275 13.7242 12.8292 14.4701L11.7849 16.2602C8.65222 14.6193 6.11623 11.9341 4.47529 8.95057L6.41458 7.90634C7.16046 7.60799 7.45881 6.71293 7.16046 5.96705C6.56375 4.47529 6.11623 2.83435 5.96705 1.34259C5.96705 0.596704 5.22117 0 4.47529 0H0.745882C0.298353 0 0 0.298352 0 0.745881C0 3.72941 0.596704 6.71293 1.93929 9.3981C3.87858 13.575 7.30964 16.8569 11.3374 18.7962C14.0226 20.1388 17.0061 20.7355 19.9896 20.7355C20.4371 20.7355 20.7355 20.4371 20.7355 19.9896V16.4094C20.7355 15.5143 20.1388 14.9176 19.3929 14.9176Z" transform="translate(9 9)"/>
            </svg>
            <span>Call Us</span>
          </a>
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${styles.trigger} ${isOpen ? styles.active : ''}`}
        aria-label="Toggle contact links"
      >
        <span className={styles.triggerIcon}>
          {isOpen ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          )}
        </span>
      </button>
    </div>
  );
}
