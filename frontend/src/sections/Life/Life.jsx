import React from 'react';
import styles from './Life.module.css';

// Import images from assets
import img1 from '../../assets/cat4.png';
import img2 from '../../assets/dathub.png';
import img3 from '../../assets/image.png';
import img4 from '../../assets/learning.png';
import img5 from '../../assets/trainee.png';
import img6 from '../../assets/catalyst.png';

const Life = () => {
  const images = [
    { id: 1, src: img1, className: styles.span1x1 },
    { id: 2, src: img2, className: styles.span1x1 },
    { id: 3, src: img3, className: styles.span1x1 },
    { id: 4, src: img4, className: styles.span1x2 },
    { id: 5, src: img5, className: styles.span1x2 },
    { id: 6, src: img6, className: styles.span1x2 },
    { id: 7, src: img1, className: styles.span1x2 },
    { id: 8, src: img2, className: styles.span1x1 },
    { id: 9, src: img4, className: styles.span2x1 },
  ];

  return (
    <section className={`section ${styles.lifeSection}`}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Life@Catalyst</h2>

        <div className={styles.masonryGrid}>
          {images.map((img) => (
            <div key={img.id} className={`${styles.imageWrapper} ${img.className}`}>
              <img src={img.src} alt="Life at Catalyst" className={styles.gridImage} />
            </div>
          ))}
        </div>

        <div className={styles.buttonContainer}>
          <button className={styles.viewAllBtn}>View All</button>
        </div>
      </div>
    </section>
  );
};

export default Life;
