// src/sections/Courses/Courses.jsx
import { useState } from 'react';
import CourseCard from '../../components/CourseCard/CourseCard';
import { courses } from '../../data/siteData';
import styles from './Courses.module.css';

const INITIAL_COUNT = 8;

export default function Courses() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? courses : courses.slice(0, INITIAL_COUNT);

  return (
    <section id="courses" className={styles.section}>
      <div className="container">

        {/* Header row */}
        <div className={styles.header}>
          <h2 className={styles.heading}>Most Popular Courses</h2>
        </div>

        {/* Course grid */}
        <div className={styles.grid}>
          {visible.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

       
          <div className={styles.btnWrap}>
            <button
              className={styles.viewAllBtn}
              onClick={() => setShowAll(v => !v)}
            >
              {showAll ? 'Show Less ↑' : 'View All Courses'}
            </button>
          </div>
       

        

      </div>
    </section>
  );
}