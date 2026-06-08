import React from 'react';
import styles from './Placements.module.css';

import abinav from '../../assets/placements/abinav.jpg';
import ajna from '../../assets/placements/ajna.jpg';
import musthafa from '../../assets/placements/musthafa.jpg';
import nida from '../../assets/placements/nida.jpg';

const placementImages = [
  abinav,
  ajna,
  musthafa,
  nida,
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