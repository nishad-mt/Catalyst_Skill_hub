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

  const shortDesc = course.desc?.length > 100 && !expanded
    ? course.desc.slice(0, 100).trimEnd() + '...'
    : course.desc;

  return (
    <div className={styles.card}>

      {/* Title */}
      <h3 className={styles.title}>{course.title}</h3>

      {/* Mode */}
      <p className={styles.mode}>{course.mode || 'Offline / Online'}</p>

      {/* Description */}
      <p className={styles.desc}>
        {shortDesc}
        {course.desc?.length > 100 && (
          <button
            className={styles.moreBtn}
            onClick={() => setExpanded(v => !v)}
          >
            {expanded ? ' Less...' : ' More...'}
          </button>
        )}
      </p>

      {/* Duration */}
      <p className={styles.duration}>{course.duration || '3 Months / 6 Months'}</p>

      {/* Skill Tags */}
      {course.tags?.length > 0 && (
        <div className={styles.tags}>
          {course.tags.map((tag, i) => (
            <span key={i} className={styles.tag}>{tag}</span>
          ))}
        </div>
      )}

      <div className={styles.actions}>
        <a
          href={`/course/${course.slug}`}
          className={styles.btnPrimary}
          onClick={(e) => {
            e.preventDefault();
            navigate(`/course/${course.slug}`);
          }}
        >
          View Programme
        </a>
        <a
          href={course.syllabusLink || '#'}
          className={styles.btnOutline}
        >
          View Syllabus
        </a>
      </div>

    </div>
  );
}