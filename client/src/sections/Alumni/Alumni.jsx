import React, { useState, useEffect } from 'react';
import { alumni } from '../../data/siteData';
import styles from './Alumni.module.css';

export default function Alumni() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Split alumni into two rows
  const row1 = alumni.slice(0, 5);
  const row2 = alumni.slice(5, 10);

  // For desktop marquee
  const triple = (arr) => [...arr, ...arr, ...arr];

  const row1Data = isMobile ? row1 : triple(row1);
  const row2Data = isMobile ? row2 : triple(row2);

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
          <p className={styles.subheading}>
            Join the ranks of our successful graduates working in top global companies.
          </p>
        </div>
      </div>

      <div className={styles.marqueeContainer}>
        {/* Row 1 */}
        <div className={styles.marqueeRow}>
          <div className={styles.marqueeTrack}>
            {row1Data.map((person, index) => (
              <AlumniCard
                key={`${person.id}-r1-${index}`}
                person={person}
              />
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className={styles.marqueeRow}>
          <div className={styles.marqueeTrack}>
            {row2Data.map((person, index) => (
              <AlumniCard
                key={`${person.id}-r2-${index}`}
                person={person}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}