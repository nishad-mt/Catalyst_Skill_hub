import React from 'react';
import styles from './StudentTestimonialsBanner.module.css';
import { blogs } from '../../data/siteData';

export default function StudentTestimonialsBanner() {
  const displayedBlogs = blogs.slice(0, 4);

  const handleNavigate = (id) => {
    window.history.pushState({}, '', `/blogs/${id}`);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <div className={styles.outerContainer}>
      <div className={styles.leftContent}>
        <h2 className={styles.heading}>What our Students says about their</h2>
        <p className={styles.subtext}>
          Joining this course was one of the best decisions I've made. The training was practical, easy to understand.
        </p>
      </div>

      <div className={styles.cardsContainer}>
        {displayedBlogs.map(blog => (
          <div key={blog.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img src={blog.image} alt={blog.title} className={styles.image} />
            </div>
            <h3 className={styles.cardTitle}>{blog.title}</h3>
            <p className={styles.cardText}>{blog.description}</p>
            <button
              className={styles.cardFooter}
              onClick={() => handleNavigate(blog.id)}
              aria-label={`Read blog: ${blog.title}`}
            >
              Read More →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
