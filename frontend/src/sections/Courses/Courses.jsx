import { useState, useEffect } from 'react';
import CourseCard from '../../components/CourseCard/CourseCard';
import { courses } from '../../data/siteData';
import styles from './Courses.module.css';

export default function Courses({ searchQuery, navigate }) {
  const [limit, setLimit] = useState(8);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 900) setLimit(4);
      else if (width <= 1200) setLimit(6);
      else setLimit(8);
    };
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const visible = filteredCourses.slice(0, limit);

  return (
    <section id="courses" className={styles.section}>
      <div className="container">
        <div className={styles.contentBox}>
          {/* Header row */}
          <div className={styles.header}>
            <h2 className={styles.heading}>
              {searchQuery ? `Search Results for "${searchQuery}"` : "Most Popular Courses"}
            </h2>
          </div>

          {/* Course grid */}
          <div className={styles.grid}>
            {visible.map((course) => (
              <CourseCard key={course.id} course={course} navigate={navigate} />
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <p style={{ textAlign: 'center', padding: '2rem', color: '#64748b' }}>
              No courses found matching your search.
            </p>
          )}

        </div>

        <div className={styles.btnWrap}>
          <button
            className={styles.viewAllBtn}
            onClick={() => {
              window.history.pushState({}, '', '/courses');
              window.dispatchEvent(new PopStateEvent('popstate'));
            }}
          >
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
}