import { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import { courses } from '../../data/siteData';
import styles from './CoursesPage.module.css';
import CourseCard from '../../components/CourseCard/CourseCard';
import Mentors from '../../sections/Mentors/Mentors';
import StudentTestimonialsBanner from '../../components/StudentTestimonialsBanner/StudentTestimonialsBanner';

export default function CoursesPage({ searchQuery, setSearchQuery, navigate }) {
  useEffect(() => {
    document.title = "All Tech Programs & Courses | Catalyst Skill Hub";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Explore our wide range of AI-powered tech professional programs. Python, Full Stack, Data Science, Cyber Security, Data Analyst, and more with 100% placement support.");
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
            <div className={styles.headingGroup}>
              <h1 className={styles.mainHeading}>Explore All Tech Professional Ai Powered Courses</h1>
              <p className={styles.subHeading}>
                Unlock your potential with industry-leading programs built for the future. From AI to Full Stack, our expert-led courses are designed to get you job-ready fast.
              </p>
            </div>

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

      {/* Mentors Section */}
      <Mentors />

      {/* Bottom Promo Section */}
      <div className="container">
        <div className={`${styles.promoSection} reveal`}>
          <div className={`${styles.promoContainer} reveal-group`}>

            <div className={styles.promoTopRow}>
              <h2 className={styles.promoHeading}>Explore All Tech Professional Ai Powered Courses</h2>
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
                <div className={styles.statItem}>
                  <h3 className={styles.statNum}>50+</h3>
                  <p className={styles.statLabel}>Hiring Partners</p>
                </div>
              </div>
            </div>

            <div className={styles.promoBottomRow}>
              <div className={styles.promoImgWrap}>
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80"
                  alt="Students reading"
                  className={styles.promoImg}
                />
              </div>

              <div className={styles.feeCards}>
                {[
                  {
                    id: 1,
                    title: "Expert Mentors",
                    desc: "Learn from industry professionals with years of real-world experience guiding you through practical assignments and career milestones.",
                    btnText: "Meet Mentors"
                  },
                  {
                    id: 2,
                    title: "Online/Offline Classes",
                    desc: "Choose what fits you best: attend interactive online sessions from home or join our offline classes for full face-to-face interaction.",
                    btnText: "Choose Batch Mode"
                  },
                  {
                    id: 3,
                    title: "State-of-the-Art Labs",
                    desc: "Get access to fully-equipped learning labs with high-speed internet, premium systems, and space to collaborate on code.",
                    btnText: "Explore Facilities"
                  }
                ].map((item) => (
                  <div key={item.id} className={styles.feeCard}>
                    <h4 className={styles.feeTitle}>{item.title}</h4>
                    <p className={styles.feeDesc}>{item.desc}</p>
                    <button 
                      className={styles.feeBtn}
                      onClick={() => window.dispatchEvent(new CustomEvent('openModal', { detail: { type: 'callback' } }))}
                    >
                      {item.btnText}
                    </button>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

            {/* Student Testimonials Banner Section */}
      <div className="container">
        <StudentTestimonialsBanner />
      </div>
    </div>
  );
}
