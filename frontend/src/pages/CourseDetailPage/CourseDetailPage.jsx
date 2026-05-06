import React, { useEffect, useState } from 'react';
import styles from './CourseDetailPage.module.css';
import { courses } from '../../data/siteData';
import nsdcLogo from '../../assets/nsdc.png';

const CourseDetailPage = () => {
  // Since we are not using react-router-dom's true routing yet (App.jsx handles it by state),
  // we'll expect the course object or slug to be passed or determined from URL.
  // For now, let's look at window.location.pathname if we want to simulate routing.
  
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const path = window.location.pathname;
    const slug = path.split('/').pop();
    const foundCourse = courses.find(c => c.slug === slug);
    
    if (foundCourse) {
      setCourse(foundCourse);
    } else {
      setCourse(null);
    }
    setLoading(false);
    window.scrollTo(0, 0);
  }, [window.location.pathname]);

  if (loading) return <div className={styles.loading}>Loading Course Details...</div>;
  if (!course) return <div className={styles.error}>Course not found</div>;

  return (
    <div className="page">
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroBox}>
            <div className={styles.heroLeft}>
              <span className={styles.tag}>{course.tag} Agency</span>
              <h1 className={styles.title}>
                {course.title} Course <br /> 
                {course.location ? `in ${course.location}` : ''}
              </h1>
              <p className={styles.description}>{course.desc}</p>
              
              <div className={styles.badges}>
                <div className={styles.badge}>
                  <img src={nsdcLogo} alt="NSDC" />
                  <span>NSDC Approved Certificate</span>
                </div>
                <div className={styles.badgePlaceholder}></div>
              </div>
            </div>

            <div className={styles.heroRight}>
              <div className={styles.formCard}>
                <div className={styles.formHeader}>
                  <div className={styles.avatars}>
                    <img src="https://i.pravatar.cc/150?u=1" alt="mentor" />
                    <img src="https://i.pravatar.cc/150?u=2" alt="mentor" />
                    <img src="https://i.pravatar.cc/150?u=3" alt="mentor" />
                  </div>
                  <p>Learn in-demand tech skills through hands-on</p>
                </div>
                <h3>Book Your Demo Class</h3>
                <form className={styles.form}>
                  <div className={styles.inputGroup}>
                    <label>Full Name</label>
                    <input type="text" placeholder="Enter your full name" />
                  </div>
                  <div className={styles.inputGroup}>
                    <label>Phone Number</label>
                    <input type="tel" placeholder="Enter your phone number" />
                  </div>
                  <button type="submit" className={styles.submitBtn}>Book Now</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className={styles.statsBar}>
        <div className="container">
          <div className={styles.statsGrid}>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className={styles.statItem}>
                <span className={styles.statNum}>100%</span>
                <span className={styles.statLabel}>Placement Assistance</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className={styles.partners}>
        <div className="container">
          <div className={styles.partnersScroll}>
             {/* Hiring Partner Logos */}
             {[
               { src: "https://www.vectorlogo.zone/logos/amazon/amazon-ar21.svg", alt: "Amazon" },
               { src: "https://www.vectorlogo.zone/logos/microsoft/microsoft-ar21.svg", alt: "Microsoft" },
               { src: "https://www.vectorlogo.zone/logos/google/google-ar21.svg", alt: "Google" },
               { src: "https://www.vectorlogo.zone/logos/accenture/accenture-ar21.svg", alt: "Accenture" },
               { src: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg", alt: "Infosys" },
               { src: "https://www.vectorlogo.zone/logos/adobe/adobe-ar21.svg", alt: "Adobe" },
               { src: "https://www.vectorlogo.zone/logos/oracle/oracle-ar21.svg", alt: "Oracle" },
               { src: "https://www.vectorlogo.zone/logos/intel/intel-ar21.svg", alt: "Intel" },
             ].map((logo, idx) => (
               <img key={idx} src={logo.src} alt={logo.alt} className={styles.partnerLogo} />
             ))}
          </div>
        </div>
      </section>

      {/* What You Will Learn */}
      {course.whatYouWillLearn && (
        <section className={`section ${styles.learnSection}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>What you will Learn</h2>
            <div className={styles.learnGrid}>
              {course.whatYouWillLearn.map((item) => (
                <div key={item.id} className={styles.learnCard}>
                  <div className={styles.cardIcon}>{item.icon}</div>
                  <div className={styles.cardContent}>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Essential Tools */}
      {course.tools && (
        <section className={`section ${styles.toolsSection}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Learn 15 + Essential Tools learning experience with us</h2>
            <div className={styles.toolsGrid}>
              {course.tools.map((tool, idx) => (
                <div key={idx} className={styles.toolCard}>
                  <div className={styles.toolIcon}>{tool.icon}</div>
                  <span className={styles.toolName}>{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default CourseDetailPage;
