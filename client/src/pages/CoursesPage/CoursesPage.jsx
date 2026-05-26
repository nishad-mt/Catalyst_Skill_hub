import { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import { courses } from '../../data/siteData';
import styles from './CoursesPage.module.css';
import CourseCard from '../../components/CourseCard/CourseCard';

export default function CoursesPage({ searchQuery, setSearchQuery, navigate }) {
  useEffect(() => {
    document.title = "All Tech Programs & Courses | Catalyst Skill Hub";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Explore our wide range of AI-powered tech professional programs. Python, Full Stack, Data Science, Cyber Security, UI/UX, and more with 100% placement support.");
    }
    window.scrollTo(0, 0);
  }, []);
  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.page}>
      {/* Top Header Area */}
      <div className="container">
        <div className={`${styles.topSection} reveal`}>
          <div className={styles.headerRow}>
            <h1 className={styles.mainHeading}>Explore All Tech Professional Ai Powered Courses</h1>
            <div className={styles.searchBox}>
              <input
                type="text"
                placeholder="Search Your Course"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
              <button className={styles.searchBtn}>
                <FiSearch />
              </button>
            </div>
          </div>

          <div className={styles.filterRow}>
            <button className={`${styles.filterPill} ${styles.active}`}>All</button>
          </div>
        </div>

        {/* Courses Grid */}
        <div className={`${styles.grid} reveal-group`}>
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} navigate={navigate} />
          ))}
        </div>
      </div>

      {/* Bottom Promo Section */}
      <div className="container">
        <div className={`${styles.promoSection} reveal`}>
          <div className={`${styles.promoContainer} reveal-group`}>

            <div className={styles.promoLeft}>
              <h2 className={styles.promoHeading}>Explore All Tech Professional Ai Powered Courses</h2>
              <div className={styles.promoImgWrap}>
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80"
                  alt="Students reading"
                  className={styles.promoImg}
                />
              </div>
            </div>

            <div className={styles.promoRight}>
              <div className={styles.statsRow}>
                <div className={styles.statItem}>
                  <h3 className={styles.statNum}>100%</h3>
                  <p className={styles.statLabel}>Placement Assistance</p>
                </div>
                <div className={styles.statItem}>
                  <h3 className={styles.statNum}>150+</h3>
                  <p className={styles.statLabel}>Expert Faculties</p>
                </div>
                <div className={styles.statItem}>
                  <h3 className={styles.statNum}>25000+</h3>
                  <p className={styles.statLabel}>Students Yearly</p>
                </div>
              </div>

              <div className={styles.feeCards}>
                {[1, 2, 3].map((item) => (
                  <div key={item} className={styles.feeCard}>
                    <h4 className={styles.feeTitle}>Affordable Fee Structure</h4>
                    <p className={styles.feeDesc}>
                      Get access to expert-led training, hands-on projects, and career support — all at a price that fits your budget. No hidden costs, no unnecessary extras. Get access to expert-led training, hands
                    </p>
                    <button 
                      className={styles.feeBtn}
                      onClick={() => window.dispatchEvent(new CustomEvent('openModal', { detail: { type: 'callback' } }))}
                    >
                      Know Fee Structure
                    </button>

                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
