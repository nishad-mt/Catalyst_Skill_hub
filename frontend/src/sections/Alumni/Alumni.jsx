import React from 'react';
import { alumni } from '../../data/siteData';
import styles from './Alumni.module.css';

export default function Alumni() {
  // Split alumni into two rows for the marquee
  const row1 = alumni.slice(0, 5);
  const row2 = alumni.slice(5, 10);

  // Triple the items to ensure seamless scrolling even on very wide screens
  const triple = (arr) => [...arr, ...arr, ...arr];

  const AlumniCard = ({ person }) => (
    <div className={styles.card}>
      <div className={styles.imageWrap}>
        <img src={person.img} alt={person.name} className={styles.photo} />
        <div className={styles.companyBadge}>{person.company}</div>
      </div>
      <div className={styles.info}>
        <h4 className={styles.name}>{person.name}</h4>
        <p className={styles.role}>{person.role}</p>
      </div>
    </div>
  );

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.heading}>Our Alumni Work At</h2>
          <p className={styles.subheading}>Join the ranks of our successful graduates working in top global companies.</p>
        </div>
      </div>

      <div className={styles.marqueeContainer}>
        {/* Row 1 */}
        <div className={styles.marqueeRow}>
          <div className={styles.marqueeTrack}>
            {triple(row1).map((person, index) => (
              <AlumniCard key={`${person.id}-r1-${index}`} person={person} />
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className={styles.marqueeRow}>
          <div className={styles.marqueeTrack}>
            {triple(row2).map((person, index) => (
              <AlumniCard key={`${person.id}-r2-${index}`} person={person} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
