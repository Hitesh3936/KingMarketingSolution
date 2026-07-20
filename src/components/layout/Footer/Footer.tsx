import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { brandConfig } from '@/config/brand.config';
import { footerNavItems } from '@/data/navigation';
import { SocialIcons } from '@/components/ui/SocialIcons/SocialIcons';
import { ContactInfo } from '@/components/ui/ContactInfo/ContactInfo';
import { GoogleMap } from '@/components/ui/GoogleMap/GoogleMap';
import { Button } from '@/components/ui/Button/Button';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className="container">
          <div className={styles.grid}>
            {/* Column 1: Brand Info */}
            <div className={styles.col}>
              <div className={styles.logoRow}>
                <Image
                  src={brandConfig.logos.footerIndianBuzz}
                  alt="Indian Buzz Logo"
                  width={90}
                  height={81}
                  className={styles.footerLogo}
                />
                <Image
                  src={brandConfig.logos.footerCookwell}
                  alt="Cookwell Logo"
                  width={90}
                  height={81}
                  className={styles.footerLogo}
                />
              </div>
              <p className={styles.aboutText}>
                King Marketing Solution is a trusted name in households across India—delivering quality, authenticity, and care through every product we craft. We are a diversified FMCG enterprise, touching lives with staples and snacks across the Globe.
              </p>
              <Button href="/about" size="sm" variant="primary" className={styles.aboutBtn}>
                More About Us
              </Button>
            </div>

            {/* Column 2: Navigation */}
            <div className={styles.col}>
              <h3 className={styles.title}>Quick Links</h3>
              <nav className={styles.nav}>
                <ul className={styles.navList}>
                  {footerNavItems.map((item, index) => (
                    <li key={index} className={styles.navItem}>
                      <Link href={item.href} className={styles.navLink}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Column 3: Contact */}
            <div className={styles.col}>
              <h3 className={styles.title}>Contact Us</h3>
              <ContactInfo vertical className={styles.contact} />
            </div>

            {/* Column 4: Map */}
            <div className={styles.col}>
              <h3 className={styles.title}>Find Us</h3>
              <GoogleMap height="240px" />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <div className={styles.bottomInner}>
            <div className={styles.copyright}>
              {brandConfig.copyright}
            </div>
            <SocialIcons light />
          </div>
        </div>
      </div>
    </footer>
  );
}
