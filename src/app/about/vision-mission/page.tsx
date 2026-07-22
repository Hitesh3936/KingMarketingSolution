import React from 'react';
import { PageTitleBar } from '@/components/ui/PageTitleBar/PageTitleBar';
import { generatePageMetadata } from '@/config/seo.config';
import styles from './VisionMission.module.css';

export const metadata = generatePageMetadata({
  title: 'Vision & Mission',
  description:
    'To become one of India\'s most trusted marketing and distribution companies by providing quality products, innovative solutions, and outstanding customer satisfaction.',
  path: '/about/vision-mission',
});

const missionPoints = [
  'Deliver high-quality food products at competitive prices',
  'Build strong partnerships with distributors and retailers',
  'Expand our presence across India',
  'Maintain the highest standards of integrity and customer service',
  'Continuously innovate to meet changing consumer needs',
];

const coreValues = [
  {
    label: 'Integrity',
    desc: 'We conduct business with honesty, transparency, and accountability in every interaction.',
  },
  {
    label: 'Quality',
    desc: 'Every product we represent meets strict standards before it reaches the market.',
  },
  {
    label: 'Partnership',
    desc: 'We build lasting relationships with brands, retailers, and distributors built on mutual trust.',
  },
  {
    label: 'Customer Focus',
    desc: 'Our decisions are guided by what creates the most value for our customers and partners.',
  },
  {
    label: 'Innovation',
    desc: 'We continuously explore new approaches to sales, distribution, and market expansion.',
  },
  {
    label: 'Reliability',
    desc: 'Consistent delivery, dependable service, and a team you can count on — every time.',
  },
];

export default function VisionMissionPage() {
  return (
    <>
      <PageTitleBar title="Vision & Mission" parentLabel="About" parentHref="/about" />

      {/* ── Intro ─────────────────────────────────────────── */}
      <section className={styles.introSection}>
        <div className="container">
          <div className={styles.introGrid}>
            <div className={styles.introLeft}>
              <span className={styles.eyebrow}>Our Purpose</span>
              <h1 className={styles.introHeading}>
                Guided by Purpose,<br />Driven by Excellence
              </h1>
            </div>
            <div className={styles.introRight}>
              <p className={styles.introPrimary}>
                At <strong>King Marketing Solutions</strong>, everything we do is shaped by a clear
                vision and a defined mission — to connect quality FMCG brands with markets across
                India through reliable, professional, and transparent service.
              </p>
              <p className={styles.introSecondary}>
                Our values guide our decisions, our vision defines where we are going, and our
                mission sets out exactly how we will get there.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Vision (Dark Bar) ──────────────────────────────── */}
      <section className={styles.visionSection}>
        <div className="container">
          <div className={styles.visionInner}>
            <div className={styles.visionLabel}>
              <span className={styles.eyebrowLight}>Our Vision</span>
            </div>
            <p className={styles.visionStatement}>
              To become one of India&apos;s most trusted marketing and distribution companies by
              providing quality products, innovative solutions, and outstanding customer
              satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* ── Mission (Numbered List) ────────────────────────── */}
      <section className={styles.missionSection}>
        <div className="container">
          <div className={styles.missionGrid}>
            <div className={styles.missionLeft}>
              <span className={styles.eyebrow}>Our Mission</span>
              <h2 className={styles.sectionHeading}>What We Set Out to Achieve</h2>
              <p className={styles.sectionText}>
                Our mission translates our vision into concrete actions. These are the commitments
                that drive every decision we make and every partnership we build.
              </p>
            </div>
            <div className={styles.missionRight}>
              <div className={styles.missionBlock}>
                <div className={styles.missionTitleRow}>
                  <h3 className={styles.missionTitle}>Our Mission</h3>
                </div>
                <ul className={styles.missionList}>
                  {missionPoints.map((m, i) => (
                    <li key={i} className={styles.missionItem}>
                      <span className={styles.missionNum}>{String(i + 1).padStart(2, '0')}</span>
                      <span className={styles.missionText}>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Values (3-col grid) ───────────────────────── */}
      <section className={styles.valuesSection}>
        <div className="container">
          <div className={styles.valuesHeader}>
            <span className={styles.eyebrow}>Core Values</span>
            <h2 className={styles.sectionHeading}>The Principles We Live By</h2>
          </div>
          <div className={styles.valuesGrid}>
            {coreValues.map((v, i) => (
              <div key={i} className={styles.valueCard}>
                <span className={styles.valueNum}>{String(i + 1).padStart(2, '0')}</span>
                <h4 className={styles.valueLabel}>{v.label}</h4>
                <p className={styles.valueDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Promise ───────────────────────────────────────── */}
      <section className={styles.promiseSection}>
        <div className="container">
          <div className={styles.promiseGrid}>
            <div className={styles.promiseLeft}>
              <span className={styles.eyebrow}>Our Promise</span>
              <h2 className={styles.sectionHeading}>
                Built on Trust.<br />Driven by Excellence.
              </h2>
            </div>
            <div className={styles.promiseRight}>
              <p className={styles.promiseText}>
                We don&apos;t just distribute food products — we build partnerships based on trust,
                consistency, and shared success. Our promise to every brand and retailer we work
                with is simple: reliable service, quality products, and a team that treats your
                business as our own.
              </p>
              <p className={styles.promiseText}>
                Every day, across every interaction, we work to earn and maintain that trust.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
