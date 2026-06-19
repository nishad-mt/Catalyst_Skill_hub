import React, { useRef, useState, useEffect } from 'react';
import styles from './Placements.module.css';

import abinav from '../../assets/placements/abinav.jpg';
import afeef from '../../assets/placements/afeef.jpeg';
import ajna from '../../assets/placements/ajna.jpg';
import musthafa from '../../assets/placements/musthafa.jpeg';
import nasma from '../../assets/placements/nasma.jpeg';
import nida from '../../assets/placements/nidha.jpeg';
import nishad from '../../assets/placements/nishad.jpeg';
import sam from '../../assets/placements/sam.jpeg';
import shabeeha from '../../assets/placements/shabeeha.jpeg';

const placementImages = [
  abinav,
  afeef,
  ajna,
  musthafa,
  nasma,
  nida,
  nishad,
  sam,
  shabeeha,
];

const Placements = () => {
  const firstCardRef = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (firstCardRef.current) {
        const width = firstCardRef.current.getBoundingClientRect().width;
        const gap = parseFloat(getComputedStyle(firstCardRef.current).marginRight) || 16;
        setOffset(width / 2 + gap / 2);
      }
    };

    // Run measurement
    handleResize();

    // Since images load asynchronously, listen for their load events to get correct width
    const imgElement = firstCardRef.current?.querySelector('img');
    if (imgElement) {
      if (imgElement.complete) {
        handleResize();
      } else {
        imgElement.addEventListener('load', handleResize);
      }
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (imgElement) {
        imgElement.removeEventListener('load', handleResize);
      }
    };
  }, []);

  return (
    <section className={`section ${styles.placementsSection}`}>
      <div className="container">
        <h2 className={`${styles.sectionTitle} reveal`}>
          Placement Records
        </h2>



        {/* Desktop Grid (Manual Scroll, 2 Rows) */}
        <div className={styles.desktopGrid}>
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
              {[...placementImages, ...placementImages].map((image, index) => (
                <div 
                  key={`r1-${index}`} 
                  ref={index === 0 ? firstCardRef : null} 
                  className={styles.card}
                >
                  <img src={image} alt={`Placement Row 1 ${index + 1}`} className={styles.image} />
                </div>
              ))}
            </div>
          </div>
          {/* Row 2 */}
          <div className={`${styles.marqueeRow} ${styles.staggeredRow}`}>
            <div 
              className={styles.marqueeTrack}
              style={offset ? { marginLeft: `-${offset}px` } : undefined}
            >
              {/* Shift array by 4 so it doesn't match Row 1 directly, but maintains same total width */}
              {[...placementImages.slice(4), ...placementImages.slice(0, 4), ...placementImages.slice(4), ...placementImages.slice(0, 4)].map((image, index) => (
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