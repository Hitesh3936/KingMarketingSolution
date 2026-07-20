import React from 'react';
import { Testimonial } from '@/data/testimonials';
import styles from './TestimonialCard.module.css';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.quoteIcon}>&ldquo;</div>
      <p className={styles.excerpt}>{testimonial.excerpt}</p>
      <div className={styles.meta}>
        <h4 className={styles.name}>{testimonial.name}</h4>
        <span className={styles.designation}>{testimonial.designation}</span>
      </div>
    </div>
  );
}
