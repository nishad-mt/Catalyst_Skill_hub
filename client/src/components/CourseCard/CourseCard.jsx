// src/components/CourseCard/CourseCard.jsx
import { useState } from 'react';
import styles from './CourseCard.module.css';

/**
 * CourseCard
 * @param {Object} course - course object from siteData.js
 * Expected shape:
 * {
 *   title: string,
 *   mode: string,          // e.g. "Offline / Online"
 *   desc: string,
 *   duration: string,      // e.g. "3 Months / 6 Months"
 *   tags: string[],        // e.g. ["Docker", "Kubernetes"]
 *   programmeLink: string,
 *   syllabusLink: string,
 * }
 */
export default function CourseCard({ course, navigate }) {
  const [expanded, setExpanded] = useState(false);

  const limit = 60; // Point where 'read more' appears
  const threshold = 95; // Only show 'read more' if it significantly exceeds 2 lines
  const isLong = course.desc?.length > threshold;
  const shortDesc = isLong && !expanded
    ? course.desc.slice(0, limit).trimEnd() + '... '
    : course.desc;

  return (
    <div className={styles.card}>
      {/* Image Section */}
      <div className={styles.imageContainer}>
        <img
          src={course.img || "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80"}
          alt={course.title}
          className={styles.courseImage}
          loading="lazy"
        />
        {course.tag && <span className={styles.categoryBadge}>{course.tag}</span>}
        <h3 className={styles.titleOverlay}>{course.title}</h3>
      </div>

      <div className={styles.cardBody}>
        <h3 className={styles.courseTitle}>{course.title} + AI Integration</h3>
        <p className={styles.revrating}><span className={styles.rating}>{course.rating}</span> rating</p>

         {/* Duration */}
        <p className={styles.duration}>{course.duration || '6 months / 3 Months'} 
          <span className={styles.mode}>{course.mode || 'Online / Offline'}</span></p>

        {/* Description */}
        <p className={styles.desc}>
          {shortDesc}
          {isLong && (
            <button
              className={styles.moreBtn}
              onClick={() => setExpanded(v => !v)}
            >
              {expanded ? 'less..' : 'read more..'}
            </button>
          )}
        </p>

        <div className={styles.actions}>
          <a
            href={`/course/${course.slug}`}
            className={styles.btnPrimary}
            onClick={(e) => {
              e.preventDefault();
              navigate(`/course/${course.slug}`);
            }}>
            View Course
          </a>
        </div>
      </div>
    </div>
  );
}