import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { courses } from '../../data/siteData';
import styles from './CoursesPage.module.css';

// Reusing Navbar structure for top? The user's image shows a header inside the page body.
// We'll build the page content assuming Navbar is handled globally in App.jsx.

export default function CoursesPage({ searchQuery, setSearchQuery, navigate }) {
  const filteredCourses = courses.filter(course => 
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.page}>
      {/* Top Header Area */}
      <div className="container">
        <div className={styles.topSection}>
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
        <div className={styles.grid}>
          {filteredCourses.map((course) => (
            <div key={course.id} className={styles.card}>
              <div className={styles.imageWrap}>
                <img src={course.img} alt={course.title} className={styles.courseImg} />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.courseTitle}>{course.title}</h3>
                <div className={styles.metaInfo}>
                  <p><strong>Course Duration:</strong> {course.duration || '6 Months / 4 Months'}</p>
                  <p><strong>Course Mode:</strong> {course.mode || 'Online / Offline'}</p>
                </div>
                <p className={styles.courseDesc}>
                  one of the most in-demand careers today, combining programming, statistics, and business understanding to solve real-world problems.
                </p>
                
                <div className={styles.toolsSection}>
                  <strong>Tools You'll Learn:</strong>
                  <div className={styles.toolsGrid}>
                    <span className={styles.toolPill}></span>
                    <span className={styles.toolPill}></span>
                    <span className={styles.toolPill}></span>
                  </div>
                </div>

                <div className={styles.cardActions}>
                  <button className={styles.cardBtn}>Download Brochure</button>
                  <button 
                    className={styles.cardBtn}
                    onClick={() => navigate(`/course/${course.slug}`)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Promo Section */}
      <div className="container">
        <div className={styles.promoSection}>
          <div className={styles.promoContainer}>
            
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
                    <button className={styles.feeBtn}>Know Fee Structure</button>
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
