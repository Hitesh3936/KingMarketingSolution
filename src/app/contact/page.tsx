import React from 'react';
import { PageTitleBar } from '@/components/ui/PageTitleBar/PageTitleBar';
import { SectionTitle } from '@/components/ui/SectionTitle/SectionTitle';
import { ContactForm } from '@/components/ui/ContactForm/ContactForm';
import { ContactInfo } from '@/components/ui/ContactInfo/ContactInfo';
import { GoogleMap } from '@/components/ui/GoogleMap/GoogleMap';
import { generatePageMetadata } from '@/config/seo.config';
import styles from './Contact.module.css';

export const metadata = generatePageMetadata({
  title: 'Contact Us',
  description: 'Have a query, want to partner with us, or looking to distribute our products? Reach out to Bajrang Agro today.',
  path: '/contact'
});

export default function ContactPage() {
  return (
    <>
      <PageTitleBar title="Contact Us" />

      <section className={styles.section}>
        <div className="container">
          <div className={styles.grid}>
            {/* Left Column: Form */}
            <div className={styles.formCol}>
              <SectionTitle
                title="Get In Touch"
                description="Have any questions about our products, distribution opportunities, or partnership requests? Drop us a message, and our representative will get back to you shortly."
                align="left"
                className={styles.formTitle}
              />
              <ContactForm />
            </div>

            {/* Right Column: Contact info */}
            <div className={styles.infoCol}>
              <div className={styles.infoBox}>
                <h3 className={styles.infoHeading}>Contact Information</h3>
                <ContactInfo vertical className={styles.contactDetails} />
              </div>

              <div className={styles.mapBox}>
                <h4 className={styles.mapHeading}>Locate Our Corporate Office</h4>
                <GoogleMap height="250px" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
