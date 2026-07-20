import React from 'react';
import { SectionTitle } from '@/components/ui/SectionTitle/SectionTitle';
import { TeamCard } from '@/components/ui/TeamCard/TeamCard';
import { teamMembers, leadershipIntro } from '@/data/team';
import styles from './LeadershipSection.module.css';

export function LeadershipSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {/* Left Column: Title and details */}
          <div className={styles.titleCol}>
            <SectionTitle
              subtitle={leadershipIntro.subtitle}
              title={leadershipIntro.title}
              description={leadershipIntro.description}
              align="left"
              className={styles.title}
            />
          </div>

          {/* Right Column: Circular profile list */}
          <div className={styles.teamCol}>
            <div className={styles.teamGrid}>
              {teamMembers.map((member) => (
                <div key={member.slug} className={styles.memberCol}>
                  <TeamCard member={member} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
