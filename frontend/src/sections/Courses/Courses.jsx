// src/sections/Courses/Courses.jsx
import CourseCard from '../../components/CourseCard/CourseCard';
import { courses } from '../../data/siteData';
import styles from './Courses.module.css';

export default function Courses() {
  return (
    <section id="courses" className={styles.section}>
      <div className="container">

        {/* Header row */}
        <div className={styles.header}>
          <div>
            <div className="section-tag">Our Programs</div>
            <h2 className="section-title">Industry-Ready Courses</h2>
            <p className="section-sub">
              Designed with top employers. Built for real-world success.
            </p>
          </div>
          <a href="#contact" className={`btn-primary reveal ${styles.headerCta}`}>
            Enquire About All Courses →
          </a>
        </div>

        {/* Course grid */}
        <div className={styles.grid}>
          {courses.map((course, i) => (
            <div
              key={course.id}
              className={`reveal reveal-d${(i % 3) + 1}`}
            >
              <CourseCard course={course} />
            </div>
          ))}
        </div>

        {/* Bottom CTA banner */}
        <div className={`${styles.banner} reveal`}>
          <div>
            <strong>Not sure which course is right for you?</strong>
            <span>Talk to our expert counselors — free of charge.</span>
          </div>
          <a href="#contact" className="btn-primary">
            Get Free Counselling →
          </a>
        </div>

      </div>
    </section>
  );
}
