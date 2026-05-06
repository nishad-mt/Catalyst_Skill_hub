import React from 'react';
import styles from './Life.module.css';

const Life = () => {
  const images = [
    { id: 1, src: "https://picsum.photos/seed/cat1/400/300", className: styles.span1x1 },
    { id: 2, src: "https://picsum.photos/seed/cat2/300/300", className: styles.span1x1 },
    { id: 3, src: "https://picsum.photos/seed/cat3/400/300", className: styles.span1x1 },
    { id: 4, src: "https://picsum.photos/seed/cat4/300/500", className: styles.span1x2 },
    { id: 5, src: "https://picsum.photos/seed/cat5/300/400", className: styles.span1x2 },
    { id: 6, src: "https://picsum.photos/seed/cat6/300/400", className: styles.span1x2 },
    { id: 7, src: "https://picsum.photos/seed/cat7/300/400", className: styles.span1x2 },
    { id: 8, src: "https://picsum.photos/seed/cat8/300/200", className: styles.span1x1 },
    { id: 9, src: "https://picsum.photos/seed/cat9/600/300", className: styles.span2x1 },
  ];

  return (
    <section className={styles.lifeSection}>
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
