import React from 'react';
import { PageTitleBar } from '@/components/ui/PageTitleBar/PageTitleBar';
import { generatePageMetadata } from '@/config/seo.config';
import styles from './About.module.css';

import { JsonLdScript, generateBreadcrumbJsonLd } from '@/utils/seo';

export const metadata = generatePageMetadata({
  title: 'About Us — Leading FMCG Marketing & Distribution Enterprise',
  description:
    'Learn about King Marketing Solution: A dedicated FMCG marketing and distribution enterprise based in Rajpura, Punjab. We connect premier food brands with distributors and retailers across India.',
  path: '/about',
  keywords: [
    'About King Marketing Solution',
    'FMCG Distribution Company Overview',
    'Food Product Supply Chain Partner Punjab',
  ],
});

const products = [
  'Instant Noodles',
  'Pasta & Macaroni',
  'Vermicelli',
  'Soya Chunks',
  'Snacks',
  'Rusks',
  'Other FMCG Food Products',
];

const strengths = [
  { label: 'Quality Assured', desc: 'Every product we represent meets strict quality standards before it reaches the market.' },
  { label: 'Wide Network', desc: 'A strong distribution network connecting brands to retailers and consumers across India.' },
  { label: 'Reliable Delivery', desc: 'Timely and consistent product availability through efficient supply chain management.' },
  { label: 'Competitive Pricing', desc: 'Best-in-class pricing that creates value for our partners at every level.' },
  { label: 'Customer First', desc: 'A service approach built on transparency, responsiveness, and long-term relationships.' },
  { label: 'Experienced Team', desc: 'A dedicated workforce with deep industry knowledge and on-ground expertise.' },
];

export default function AboutPage() {
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: 'Home', url: '/' },
    { name: 'About Us', url: '/about' },
  ]);

  return (
    <>
      <JsonLdScript data={breadcrumbJsonLd} />
      <PageTitleBar title="About Us" />

      {/* ── Intro ─────────────────────────────────────────────────── */}
      <section className={styles.introSection}>
        <div className="container">
          <div className={styles.introGrid}>
            <div className={styles.introLeft}>
              <span className={styles.eyebrow}>Who We Are</span>
              <h1 className={styles.introHeading}>
                Welcome to<br />King Marketing Solutions
              </h1>
            </div>
            <div className={styles.introRight}>
              <p className={styles.introPrimary}>
                At <strong>King Marketing Solutions</strong>, we are committed to delivering quality
                food products that bring great taste, value, and trust to every customer.
              </p>
              <p className={styles.introSecondary}>
                As a dedicated marketing and distribution company, we proudly connect trusted brands
                with retailers, wholesalers, distributors, and consumers across India. Our mission
                is to make high-quality food products easily accessible while building long-lasting
                relationships through reliability, transparency, and exceptional service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── What We Do ───────────────────────────────────────────── */}
      <section className={styles.doSection}>
        <div className="container">
          <div className={styles.doGrid}>
            <div className={styles.doLeft}>
              <span className={styles.eyebrow}>What We Do</span>
              <h2 className={styles.doHeading}>Our Product Range</h2>
              <p className={styles.doText}>
                We specialise in the marketing and distribution of a wide range of food products.
                We work closely with manufacturers and retail partners to ensure consistent product
                availability, competitive pricing, and efficient supply chain management.
              </p>
            </div>
            <div className={styles.doRight}>
              <ul className={styles.productList}>
                {products.map((p, i) => (
                  <li key={i} className={styles.productItem}>
                    <span className={styles.productDot} />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Vision ──────────────────────────────────────────────── */}
      <section className={styles.visionSection}>
        <div className="container">
          <div className={styles.visionInner}>
            <div className={styles.visionLabel}>
              <span className={styles.eyebrowLight}>Our Vision</span>
            </div>
            <p className={styles.visionStatement}>
              To become one of India&apos;s most trusted marketing and distribution companies by
              providing quality products, innovative solutions, and outstanding customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* ── Strengths ────────────────────────────────────────────── */}
      <section className={styles.strengthSection}>
        <div className="container">
          <div className={styles.strengthHeader}>
            <span className={styles.eyebrow}>Why Choose Us</span>
            <h2 className={styles.strengthHeading}>What Sets Us Apart</h2>
          </div>
          <div className={styles.strengthGrid}>
            {strengths.map((s, i) => (
              <div key={i} className={styles.strengthCard}>
                <span className={styles.strengthNum}>{String(i + 1).padStart(2, '0')}</span>
                <h4 className={styles.strengthLabel}>{s.label}</h4>
                <p className={styles.strengthDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Commitment ───────────────────────────────────────────── */}
      <section className={styles.commitSection}>
        <div className="container">
          <div className={styles.commitGrid}>
            <div className={styles.commitLeft}>
              <span className={styles.eyebrow}>Our Commitment</span>
              <h2 className={styles.commitHeading}>Built on Trust. Driven by Excellence.</h2>
            </div>
            <div className={styles.commitRight}>
              <p className={styles.commitText}>
                Every product we represent reflects our commitment to quality and customer
                satisfaction. We believe that success is built on trust, consistency, and lasting
                partnerships. Whether you are a retailer, distributor, wholesaler, or consumer, we
                are dedicated to providing products and services that exceed expectations.
              </p>
              <p className={styles.commitText}>
                We look forward to growing together and serving customers across India with
                excellence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
