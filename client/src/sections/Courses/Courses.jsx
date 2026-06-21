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

  const visible = filteredCourses.slice(0, 4);

  return (
    <section id="courses" className={styles.section}>
      <div className="container">
        <div className={styles.contentBox}>
          {/* Header row */}
          <div className={`${styles.header} reveal`}>
            <h2 className={styles.heading}>
              {searchQuery ? `Search Results for "${searchQuery}"` : (
                <>Explore our <span style={{ color: '#1e3a8a' }}>Most popular Courses</span></>
              )}
            </h2>
            <p className={styles.subHeading}>
            Discover Skills, technologies and opportunities that can shape your future in the tech industry.
            </p>
          </div>

          {/* Course grid */}
          <div className={`${styles.grid} reveal-group`}>
            {visible.map((course) => (
              <CourseCard key={course.id} course={course} navigate={navigate} />
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <p style={{ textAlign: 'center', padding: '2rem', color: '#64748b' }} className="reveal">
              No courses found matching your search.
            </p>
          )}

        </div>

        <div className={`${styles.btnWrap} reveal`}>
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