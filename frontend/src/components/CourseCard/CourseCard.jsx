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

  const limit = 75;
  const isLong = course.desc?.length > limit;
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
      </div>

      <div className={styles.cardBody}>
        {/* Title */}
        <h3 className={styles.title}>{course.title}</h3>

        {/* Mode */}
        <p className={styles.mode}>{course.mode || 'Offline / Online'}</p>

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

        {/* Duration */}
        <p className={styles.duration}>{course.duration || '3 Months / 6 Months'}</p>

        {/* Tools Pills */}
        {course.tools?.length > 0 && (
          <div className={styles.toolsList}>
            {course.tools.map((tool, i) => (
              <span key={i} className={styles.toolPill}>
                {tool.name}
              </span>
            ))}
          </div>
        )}

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
    </div>
  );
}