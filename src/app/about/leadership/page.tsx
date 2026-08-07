import React from 'react';
import Image from 'next/image';
import { PageTitleBar } from '@/components/ui/PageTitleBar/PageTitleBar';
import { generatePageMetadata } from '@/config/seo.config';
import styles from './Leadership.module.css';

export const metadata = generatePageMetadata({
  title: 'About the Founder',
  description:
    'Meet Mr. Sunil Verma — Founder of King Marketing Solutions, with over 40 years of experience in the FMCG industry.',
  path: '/about/leadership',
});

const career = [
  {
    org: 'FMCG Distribution — Ambala, Haryana',
    role: 'Distributor',
    detail:
      'Began career in FMCG product distribution, gaining first-hand knowledge of market dynamics, customer behaviour, and distribution networks.',
  },
  {
    org: 'Royal Biscuits, Parwanoo',
    role: 'Field Officer — Rajasthan Region',
    detail:
      'Expanded market reach and strengthened sales operations, earning recognition for commitment and on-ground performance.',
  },
  {
    org: 'Cremica Biscuits, Ludhiana',
    role: 'Sales Representative → Area Sales Manager',
    detail:
      'Rose to ASM through exceptional results. Pioneered the introduction of gift packs in the biscuit industry — a first in the sector.',
  },
  {
    org: 'Bonn Biscuits',
    role: 'Regional Sales Manager',
    detail:
      "Led regional sales teams, expanded distribution networks, and drove the company's growth across multiple markets.",
  },
  {
    org: 'King Marketing Solutions',
    role: 'Founder',
    detail:
      'Founded the company to deliver professional FMCG sales and marketing solutions backed by four decades of industry expertise.',
  },
];

const values = [
  'Integrity and transparency',
  'Strong customer relationships',
  'Continuous learning and innovation',
  'Teamwork and leadership',
  'Commitment to excellence',
  'Long-term business partnerships',
];

export default function LeadershipPage() {
  return (
    <>
      <PageTitleBar title="About the Founder" parentLabel="About" parentHref="/about" />

      {/* ── Profile ───────────────────────────────────────────────── */}
      <section className={styles.profileSection}>
        <div className="container">
          <div className={styles.profileGrid}>
            {/* Photo */}
            <div className={styles.photoCol}>
              <div className={styles.photoFrame}>
                <Image
                  src="/assets/team/Sunil_Verma.jpeg"
                  alt="Mr. Sunil Verma, Founder — King Marketing Solutions"
                  fill
                  sizes="(max-width: 768px) 100vw, 360px"
                  className={styles.photo}
                  priority
                />
              </div>
            </div>

            {/* Bio */}
            <div className={styles.bioCol}>
              <span className={styles.eyebrow}>Founder</span>
              <h1 className={styles.founderName}>Sunil Verma</h1>
              <p className={styles.founderSub}>King Marketing Solutions</p>

              <div className={styles.statRow}>
                <div className={styles.stat}>
                  <span className={styles.statValue}>40+</span>
                  <span className={styles.statLabel}>Years in FMCG</span>
                </div>
                <div className={styles.statDivider} />
                <div className={styles.stat}>
                  <span className={styles.statValue}>4</span>
                  <span className={styles.statLabel}>Leading Companies</span>
                </div>
                <div className={styles.statDivider} />
                <div className={styles.stat}>
                  <span className={styles.statValue}>PAN</span>
                  <span className={styles.statLabel}>India Reach</span>
                </div>
              </div>

              <p className={styles.bioText}>
                With over <strong>40 years of experience in the FMCG industry</strong>, Mr. Sunil
                Verma is a respected sales and marketing professional whose journey is built on
                dedication, innovation, and leadership. His extensive experience across distribution,
                sales, and business development has made him a trusted name in the sector.
              </p>
              <p className={styles.bioText}>
                After decades with leading FMCG companies, he founded{' '}
                <strong>King Marketing Solutions</strong> to bridge the gap between quality brands
                and efficient market execution — a challenge he understood from the inside out.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Career ────────────────────────────────────────────────── */}
      <section className={styles.careerSection}>
        <div className="container">
          <div className={styles.careerHeader}>
            <span className={styles.eyebrow}>Career Journey</span>
            <h2 className={styles.sectionHeading}>A Journey Built on Experience</h2>
          </div>

          <div className={styles.careerTable}>
            {career.map((item, i) => (
              <div key={i} className={`${styles.careerRow} ${i === career.length - 1 ? styles.careerRowLast : ''}`}>
                <div className={styles.careerIndex}>{String(i + 1).padStart(2, '0')}</div>
                <div className={styles.careerOrg}>{item.org}</div>
                <div className={styles.careerRole}>{item.role}</div>
                <div className={styles.careerDetail}>{item.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vision + Values ───────────────────────────────────────── */}
      <section className={styles.visionSection}>
        <div className="container">
          <div className={styles.visionGrid}>
            <div className={styles.visionCol}>
              <span className={styles.eyebrow}>The Vision</span>
              <h2 className={styles.sectionHeading}>Why He Founded King Marketing Solutions</h2>
              <p className={styles.visionText}>
                After decades of working with leading FMCG companies, Mr. Verma recognised a
                recurring challenge — organisations struggling to recruit, manage, and retain an
                efficient sales force while maintaining consistent market execution.
              </p>
              <p className={styles.visionText}>
                Inspired by this insight, he founded King Marketing Solutions with a clear mission:
                to provide companies with professional sales and marketing solutions backed by
                industry expertise, strong market knowledge, and a dedicated workforce.
              </p>
              <p className={styles.visionText}>
                Today, King Marketing Solutions serves as a trusted partner for FMCG brands,
                helping them expand their market presence, strengthen distribution, and achieve
                sustainable business growth across India.
              </p>
            </div>

            <div className={styles.valuesCol}>
              <h3 className={styles.valuesTitle}>Leadership Philosophy</h3>
              <p className={styles.valuesIntro}>Mr. Verma believes success is built on:</p>
              <ul className={styles.valuesList}>
                {values.map((v, i) => (
                  <li key={i} className={styles.valuesItem}>
                    <span className={styles.valueTick}>—</span>
                    {v}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quote ─────────────────────────────────────────────────── */}
      <section className={styles.quoteSection}>
        <div className="container">
          <div className={styles.quoteInner}>
            <p className={styles.quoteText}>
              &ldquo;Success in business is not achieved overnight — it is built through
              dedication, consistency, and the courage to embrace change. My four decades in the
              FMCG industry have taught me that every challenge presents an opportunity to grow. At
              King Marketing Solutions, our mission is to help brands succeed by delivering
              reliable sales, marketing, and distribution solutions with professionalism, integrity,
              and passion.&rdquo;
            </p>
            <div className={styles.quoteFooter}>
              <span className={styles.quoteAuthor}>Sunil Verma</span>
              <span className={styles.quoteDivider}>·</span>
              <span className={styles.quoteRole}>Founder, King Marketing Solutions</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
