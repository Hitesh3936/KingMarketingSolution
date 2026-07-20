import React from 'react';
import { PageTitleBar } from '@/components/ui/PageTitleBar/PageTitleBar';
import { SectionTitle } from '@/components/ui/SectionTitle/SectionTitle';
import { generatePageMetadata } from '@/config/seo.config';
import styles from './Quality.module.css';

export const metadata = generatePageMetadata({
  title: 'Quality & Certifications',
  description: 'Every product we manufacture under our flagship brands, Cookwell and Indian Buzz, is backed by globally recognized certifications.',
  path: '/about/quality'
});

const certs = [
  {
    title: 'FSSC 22000 – Food Safety System Certification',
    description: 'A globally accepted benchmark for food safety management, FSSC 22000 ensures that our manufacturing processes—from raw material handling to final packaging—are hygienic, traceable, and compliant with international food safety norms.'
  },
  {
    title: 'ISO 9000 – Quality Management System',
    description: 'This certification reflects our dedication to delivering consistent, high-quality products. Every batch is produced with precision, monitored through robust quality checks, and optimized for customer satisfaction.'
  },
  {
    title: 'ISO 14000 – Environmental Management System',
    description: 'We care deeply about the planet. ISO 14000 certifies our efforts in minimizing environmental impact through responsible resource usage, waste reduction, and sustainable manufacturing practices.'
  },
  {
    title: 'SEDEX – Ethical Trade Membership',
    description: 'As a SEDEX member, we uphold transparency, ethical sourcing, and fair labor practices across our supply chain. We believe in doing business that respects people and communities.'
  },
  {
    title: 'GMP – Good Manufacturing Practices',
    description: 'Our facilities follow strict GMP protocols to ensure product integrity, cleanliness, and safety. From pasta and vermicelli to instant noodles and chikki, every item is produced in a controlled, contamination-free environment.'
  },
  {
    title: 'HACCP – Hazard Analysis & Critical Control Points',
    description: 'HACCP certification guarantees that our food safety systems proactively identify and control risks. It’s a promise that every product reaching your home is safe, wholesome, and trustworthy.'
  }
];

export default function QualityPage() {
  return (
    <>
      <PageTitleBar title="Quality & Certifications" parentLabel="About" parentHref="/about" />
      
      <section className={styles.section}>
        <div className="container">
          <SectionTitle
            subtitle="Certifications"
            title="Quality You Can Trust. Standards We Uphold."
            description="At Bajrang Agro Industries, excellence isn’t just a goal—it’s a discipline. Every product we manufacture under our flagship brands, Cookwell and Indian Buzz, is backed by globally recognized certifications that reflect our unwavering commitment to safety, quality, sustainability, and ethical business practices."
            align="center"
            className={styles.introTitle}
          />

          <div className={styles.grid}>
            {certs.map((cert, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.iconWrapper}>
                  <span className={styles.cardNumber}>0{index + 1}</span>
                </div>
                <h4 className={styles.certTitle}>{cert.title}</h4>
                <p className={styles.certDesc}>{cert.description}</p>
              </div>
            ))}
          </div>

          <div className={styles.commitment}>
            <SectionTitle
              subtitle="Commitment to Excellence"
              title="A Shared Responsibility"
              description="We maintain stringent internal audits, real-time monitoring systems, and continuous training programs to ensure that every certification standard is not only met—but exceeded. Our teams are trained to uphold these norms with discipline and pride, making quality a shared responsibility across every department."
              align="center"
            />
            <div className={styles.footerText}>
              <strong>World-Class Products. Local Heart.</strong><br />
              Our products reflect a perfect blend of tradition and technology. These certifications are more than badges—they’re a reflection of our promise to deliver food that’s safe, ethical, and exceptional.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
