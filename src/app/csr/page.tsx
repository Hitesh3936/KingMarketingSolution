import React from 'react';
import Image from 'next/image';
import { PageTitleBar } from '@/components/ui/PageTitleBar/PageTitleBar';
import { SectionTitle } from '@/components/ui/SectionTitle/SectionTitle';
import { generatePageMetadata } from '@/config/seo.config';
import styles from './CSR.module.css';

export const metadata = generatePageMetadata({
  title: 'Corporate Social Responsibility (CSR)',
  description: 'At King Marketing Solution, we believe that true success is measured by the positive change we create in the lives of people and the planet.',
  path: '/csr'
});

const csrPillars = [
  {
    title: 'Empowering Communities',
    bullets: [
      'Agricultural training and modern techniques for wheat growers.',
      'Employment opportunities in semi-urban and rural manufacturing hubs.',
      'Support for women-led micro-enterprises in food processing.'
    ]
  },
  {
    title: 'Nourishing Lives',
    bullets: [
      'Regular donations of atta, vermicelli, and ready-to-eat products.',
      'Partnerships with NGOs for mid-day meal programs.',
      'Awareness campaigns on healthy eating and food safety.'
    ]
  },
  {
    title: 'Sustainability in Action',
    bullets: [
      'Use of biodegradable and recyclable packaging materials.',
      'Water conservation and waste management systems in plants.',
      'Transitioning to solar energy and green logistics.'
    ]
  },
  {
    title: 'People First Culture',
    bullets: [
      'Health and wellness programs for factory and office staff.',
      'Skill development workshops and career advancement support.',
      'Transparent HR practices and grievance redressal systems.'
    ]
  },
  {
    title: 'Ethical Governance',
    bullets: [
      'Strict adherence to food safety and compliance norms.',
      'Regular audits and process checks across all units.',
      'Open communication and responsible marketing practices.'
    ]
  }
];

export default function CSRPage() {
  return (
    <>
      <PageTitleBar title="Corporate Social Responsibility" />

      <section className={styles.section}>
        <div className="container">
          <div className={styles.introRow}>
            <div className={styles.introContent}>
              <SectionTitle
                subtitle="OUR PURPOSE"
                title="Growing Responsibly - Giving Back Wholeheartedly."
                description="At King Marketing Solution, we believe that true success is measured not just by profits, but by the positive change we create in the lives of people and the planet. Our commitment to Corporate Social Responsibility (CSR) is woven into every aspect of our operations."
                align="left"
              />
            </div>
            <div className={styles.introImage}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/assets/csr/csr-image.png"
                  alt="CSR in action"
                  width={570}
                  height={381}
                  className={styles.image}
                  priority
                />
              </div>
            </div>
          </div>

          <div className={styles.grid}>
            {csrPillars.map((pillar, index) => (
              <div key={index} className={styles.card}>
                <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                <ul className={styles.list}>
                  {pillar.bullets.map((bullet, idx) => (
                    <li key={idx} className={styles.item}>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className={styles.promise}>
            <h3 className={styles.promiseTitle}>Our Promise</h3>
            <p className={styles.promiseText}>
              CSR isn’t a department—it’s a mindset. At King Marketing Solution, we’re committed to building a business that gives back, grows responsibly, and leaves a lasting legacy of care.
            </p>
            <strong className={styles.promiseSlogan}>
              Together, we’re not just manufacturing food—we’re shaping futures.
            </strong>
          </div>
        </div>
      </section>
    </>
  );
}
