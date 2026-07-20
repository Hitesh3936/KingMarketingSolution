import React from 'react';
import { SectionTitle } from '@/components/ui/SectionTitle/SectionTitle';
import styles from './ClientNetworkMap.module.css';

export function ClientNetworkMap() {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionTitle
          title="Our Client Network"
          description="Explore our growing network of clients across India. Click any marker on the map to view client locations."
        />
        <div className={styles.mapWrapper}>
          {/* Overlay to hide the Google My Maps profile and title on the top left */}
          <div className={styles.mapCover}></div>
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1uzDkFNvLDjyZBTmkscshAqOIXpH3gy8&hl=en&ehbc=2E312F"
            loading="lazy"
            allowFullScreen
            title="Our Client Network Map"
            className={styles.iframe}
          ></iframe>
        </div>
      </div>
    </section>
  );
}
