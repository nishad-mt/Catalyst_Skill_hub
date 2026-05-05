// src/components/CourseCard/CourseCard.jsx
import styles from './CourseCard.module.css';

/**
 * CourseCard
 * @param {Object} course - course object from siteData.js
 */
export default function CourseCard({ course }) {
  return (
    <div className={styles.card}>
      <img
        src={course.img}
        alt={course.title}
        className={styles.image}
        loading="lazy"
      />
      <div className={styles.body}>
        <span className={styles.tag}>{course.tag}</span>
        <h3 className={styles.title}>{course.title}</h3>
        <p className={styles.desc}>{course.desc}</p>

        <div className={styles.meta}>
          <span className={styles.metaItem}>
            <span className={styles.metaIcon}>📅</span>
            {course.duration}
          </span>
          <span className={styles.metaItem}>
            <span className={styles.metaIcon}>💰</span>
            {course.fee}
          </span>
        </div>

        <a href="#contact" className={styles.enquireBtn}>
        know more
        </a>
      </div>
    </div>
  );
}
