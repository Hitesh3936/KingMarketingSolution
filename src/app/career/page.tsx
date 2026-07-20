import React from 'react';
import { PageTitleBar } from '@/components/ui/PageTitleBar/PageTitleBar';
import { SectionTitle } from '@/components/ui/SectionTitle/SectionTitle';
import { Button } from '@/components/ui/Button/Button';
import { generatePageMetadata } from '@/config/seo.config';
import { brandConfig } from '@/config/brand.config';
import styles from './Career.module.css';

export const metadata = generatePageMetadata({
  title: 'Careers',
  description: 'At King Marketing Solution, we don’t just manufacture food—we craft experiences, nurture communities, and build careers that matter. Explore opportunities with us.',
  path: '/career'
});

const reasonsToWork = [
  {
    title: 'Legacy of Excellence',
    desc: 'Be part of a company with 40+ years of goodwill, stability, and sector leadership.'
  },
  {
    title: 'Cutting-Edge Technology',
    desc: 'Work in modern facilities equipped with automated production lines and advanced safety protocols.'
  },
  {
    title: 'Inclusive Culture',
    desc: 'Join a team that celebrates diversity, mutual respect, and collaborative achievement.'
  },
  {
    title: 'Employee-Centric Values',
    desc: 'From comprehensive health and wellness initiatives to continuous skill development workshops.'
  },
  {
    title: 'Purpose-Driven Work',
    desc: 'Contribute to daily staples and foods that nourish millions across India and the Globe.'
  }
];

const departments = [
  'Production & Quality Control',
  'Research & Development (R&D)',
  'Sales & Distribution Network',
  'Marketing & Brand Strategy',
  'Finance & Corporate Administration',
  'Human Resources & Talent Management',
  'IT & Digital Transformation'
];

export default function CareerPage() {
  return (
    <>
      <PageTitleBar title="Careers" />

      <section className={styles.section}>
        <div className="container">
          <SectionTitle
            subtitle="WORK WITH US"
            title="Build Your Career with a Company That Cares."
            description="At King Marketing Solution, we don’t just manufacture food—we craft experiences, nurture communities, and build careers that matter. We offer a workplace where your ideas are valued, your growth is supported, and your contributions make a real impact."
            align="center"
            className={styles.intro}
          />

          <div className={styles.whyUsBlock}>
            <SectionTitle title="Why Work With Us?" align="center" className={styles.subHeading} />
            <div className={styles.reasonsGrid}>
              {reasonsToWork.map((reason, index) => (
                <div key={index} className={styles.reasonCard}>
                  <h4 className={styles.reasonTitle}>{reason.title}</h4>
                  <p className={styles.reasonDesc}>{reason.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.gridContainer}>
            <div className={styles.col}>
              <h3 className={styles.blockTitle}>Departments Hiring</h3>
              <p className={styles.blockText}>
                We are actively looking for talent across various verticals of our operations. Explore roles and develop your career path:
              </p>
              <ul className={styles.deptList}>
                {departments.map((dept, index) => (
                  <li key={index} className={styles.deptItem}>
                    {dept}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.col}>
              <div className={styles.applyCard}>
                <h3 className={styles.applyTitle}>Ready to take the next step?</h3>
                <p className={styles.applyText}>
                  We are always on the lookout for bright minds who share our passion for quality and growth. If you don&apos;t see a matching open position, feel free to submit your resume for future opportunities.
                </p>
                <div className={styles.emailBox}>
                  <span>Email your resume to:</span>
                  <strong>{brandConfig.contact.email}</strong>
                </div>
                <Button href={`mailto:${brandConfig.contact.email}`} variant="primary" className={styles.applyBtn}>
                  Apply Via Email
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
