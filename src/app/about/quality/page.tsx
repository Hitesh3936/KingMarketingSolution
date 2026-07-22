import React from 'react';
import { PageTitleBar } from '@/components/ui/PageTitleBar/PageTitleBar';
import { generatePageMetadata } from '@/config/seo.config';
import styles from './Quality.module.css';

export const metadata = generatePageMetadata({
  title: 'Quality & Certifications',
  description:
    'Every product King Marketing Solutions represents is backed by globally recognised certifications reflecting our unwavering commitment to safety, quality, and ethical business.',
  path: '/about/quality',
});

const certs = [
  {
    title: 'FSSC 22000',
    subtitle: 'Food Safety System Certification',
    desc: 'A globally accepted benchmark for food safety management ensuring our processes — from raw material handling to final packaging — are hygienic, traceable, and internationally compliant.',
  },
  {
    title: 'ISO 9000',
    subtitle: 'Quality Management System',
    desc: 'Reflects our dedication to delivering consistent, high-quality products. Every batch is produced with precision, monitored through robust quality checks, and optimised for customer satisfaction.',
  },
  {
    title: 'ISO 14000',
    subtitle: 'Environmental Management System',
    desc: 'Certifies our efforts in minimising environmental impact through responsible resource usage, waste reduction, and sustainable manufacturing practices.',
  },
  {
    title: 'SEDEX',
    subtitle: 'Ethical Trade Membership',
    desc: 'As a SEDEX member, we uphold transparency, ethical sourcing, and fair labour practices across our entire supply chain — doing business that respects people and communities.',
  },
  {
    title: 'GMP',
    subtitle: 'Good Manufacturing Practices',
    desc: 'Strict GMP protocols ensure product integrity, cleanliness, and safety. Every item is produced in a controlled, contamination-free environment from start to finish.',
  },
  {
    title: 'HACCP',
    subtitle: 'Hazard Analysis & Critical Control Points',
    desc: 'Guarantees our food safety systems proactively identify and control risks — a promise that every product reaching your home is safe, wholesome, and trustworthy.',
  },
];

const commitments = [
  {
    label: 'Internal Audits',
    desc: 'Stringent periodic audits ensure every standard is not just met — but consistently exceeded.',
  },
  {
    label: 'Real-Time Monitoring',
    desc: 'Live monitoring systems across facilities track quality metrics at every production stage.',
  },
  {
    label: 'Continuous Training',
    desc: 'Our teams are regularly trained to uphold certification norms with discipline and pride.',
  },
  {
    label: 'Shared Responsibility',
    desc: 'Quality is embedded across every department — not just a checklist, but a culture.',
  },
];

export default function QualityPage() {
  return (
    <>
      <PageTitleBar title="Quality & Certifications" parentLabel="About" parentHref="/about" />

      {/* ── Intro ─────────────────────────────────────────── */}
      <section className={styles.introSection}>
        <div className="container">
          <div className={styles.introGrid}>
            <div className={styles.introLeft}>
              <span className={styles.eyebrow}>Our Standards</span>
              <h1 className={styles.introHeading}>
                Quality You Can Trust.<br />Standards We Uphold.
              </h1>
            </div>
            <div className={styles.introRight}>
              <p className={styles.introPrimary}>
                At <strong>King Marketing Solutions</strong>, excellence isn&apos;t just a goal —
                it&apos;s a discipline built into everything we do.
              </p>
              <p className={styles.introSecondary}>
                Every product we represent is backed by globally recognised certifications that
                reflect our unwavering commitment to safety, quality, sustainability, and ethical
                business practices. These are not just badges — they are promises we keep every
                single day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Dark bar ──────────────────────────────────────── */}
      <section className={styles.barSection}>
        <div className="container">
          <div className={styles.barInner}>
            <div className={styles.barLabel}>
              <span className={styles.eyebrowLight}>Our Commitment</span>
            </div>
            <p className={styles.barStatement}>
              World-class products. Local heart. These certifications reflect a perfect blend of
              tradition and technology — and our promise to deliver food that&apos;s safe, ethical,
              and exceptional.
            </p>
          </div>
        </div>
      </section>

      {/* ── Certifications (3-col grid) ───────────────────── */}
      <section className={styles.certsSection}>
        <div className="container">
          <div className={styles.certsHeader}>
            <span className={styles.eyebrow}>Certifications</span>
            <h2 className={styles.sectionHeading}>Globally Recognised Standards</h2>
          </div>
          <div className={styles.certsGrid}>
            {certs.map((c, i) => (
              <div key={i} className={styles.certCard}>
                <span className={styles.certNum}>{String(i + 1).padStart(2, '0')}</span>
                <h4 className={styles.certTitle}>{c.title}</h4>
                <p className={styles.certSub}>{c.subtitle}</p>
                <p className={styles.certDesc}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quality Commitments (numbered list style) ─────── */}
      <section className={styles.commitSection}>
        <div className="container">
          <div className={styles.commitGrid}>
            <div className={styles.commitLeft}>
              <span className={styles.eyebrow}>How We Maintain It</span>
              <h2 className={styles.sectionHeading}>A Shared Responsibility</h2>
              <p className={styles.commitIntro}>
                We maintain stringent internal audits, real-time monitoring systems, and continuous
                training to ensure every standard is not only met — but exceeded.
              </p>
            </div>
            <div className={styles.commitRight}>
              <div className={styles.commitBlock}>
                <div className={styles.commitTitleRow}>
                  <h3 className={styles.commitTitle}>Our Quality Commitments</h3>
                </div>
                <ul className={styles.commitList}>
                  {commitments.map((item, i) => (
                    <li key={i} className={styles.commitItem}>
                      <span className={styles.commitNum}>{String(i + 1).padStart(2, '0')}</span>
                      <div>
                        <p className={styles.commitLabel}>{item.label}</p>
                        <p className={styles.commitDesc}>{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
