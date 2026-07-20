import React from 'react';
import Image from 'next/image';
import { TeamMember } from '@/data/team';
import styles from './TeamCard.module.css';

interface TeamCardProps {
  member: TeamMember;
}

export function TeamCard({ member }: TeamCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.thumbWrapper}>
        <div className={styles.imageContainer}>
          <Image
            src={member.image}
            alt={member.name}
            width={200}
            height={200}
            className={styles.image}
          />
        </div>
        <span className={styles.bubble}></span>
      </div>
      <h3 className={styles.name}>{member.name}</h3>
      <div className={styles.role}>{member.role}</div>
    </div>
  );
}
