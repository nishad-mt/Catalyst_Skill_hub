import React from 'react';
import styles from './Placements.module.css';

// import abinav from '../../assets/placements/abinav.jpg';
// import ajna from '../../assets/placements/ajna.jpg';

import musthafa from '../../assets/placements/musthafa.jpeg';
import nida from '../../assets/placements/nidha.jpeg';
import sam from '../../assets/placements/sam.jpeg';
import shabeeha from '../../assets/placements/shabeeha.jpeg';

const placementImages = [
  sam,
  nida,
  musthafa,
  shabeeha,
];

const Placements = () => {
  return (
    <section className={`section ${styles.placementsSection}`}>
      <div className="container">
        <h2 className={`${styles.sectionTitle} reveal`}>
          Placement Records
        </h2>
        <p className={styles.subHeading}>
From learning new skills to landing rewarding careers.
Our placement records highlight the success journeys of our students.        </p>

        {/* Desktop Grid */}
        <div className={styles.grid}>
          {placementImages.map((image, index) => (
            <div key={index} className={styles.card}>
              <img
                src={image}
                alt={`Placement ${index + 1}`}
                className={styles.image}
              />
            </div>
          ))}
        </div>

        {/* Mobile Auto-Scrolling Brick Pattern */}
        <div className={styles.marqueeContainer}>
          {/* Row 1 */}
          <div className={styles.marqueeRow}>
            <div className={styles.marqueeTrack}>
              {[...placementImages, ...placementImages, ...placementImages].map((image, index) => (
                <div key={`r1-${index}`} className={styles.card}>
                  <img src={image} alt={`Placement Row 1 ${index + 1}`} className={styles.image} />
                </div>
              ))}
            </div>
          </div>
          {/* Row 2 */}
          <div className={`${styles.marqueeRow} ${styles.staggeredRow}`}>
            <div className={styles.marqueeTrack}>
              {[...placementImages, ...placementImages, ...placementImages].reverse().map((image, index) => (
                <div key={`r2-${index}`} className={styles.card}>
                  <img src={image} alt={`Placement Row 2 ${index + 1}`} className={styles.image} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={`${styles.btnWrap} reveal`}>
          <button
            className={styles.viewAllBtn}
            onClick={() => {
              window.history.pushState({}, '', '/success-stories');
              window.dispatchEvent(new PopStateEvent('popstate'));
            }}
          >
            View All Placements
          </button>
        </div>
      </div>
    </section>
  );
};

export default Placements;