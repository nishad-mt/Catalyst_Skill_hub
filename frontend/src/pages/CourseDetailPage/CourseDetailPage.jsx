import React, { useEffect, useState } from 'react';
import styles from './CourseDetailPage.module.css';
import { courses } from '../../data/siteData';
import nsdcLogo from '../../assets/nsdc.png';
import promoImg from '../../assets/promo_thinking.png';
import studentsBanner from '../../assets/students_banner.png';

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
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroBox}>
            <div className={`${styles.heroLeft} reveal-group`}>
              <span className={styles.tag}>Best Tech Courses in Calicut</span>
              <h1 className={styles.title}>
                {course.title} Course <br />
                {course.location ? `in ${course.location}` : 'in Calicut'}
              </h1>
              <p className={styles.description}>{course.desc}</p>

              <div className={styles.avatarBadge}>
                <div className={styles.avatars}>
                  <img src="https://i.pravatar.cc/150?u=1" alt="mentor" />
                  <img src="https://i.pravatar.cc/150?u=2" alt="mentor" />
                  <img src="https://i.pravatar.cc/150?u=3" alt="mentor" />
                </div>
                <span className={styles.avatarText}>Learn in-demand tech skills through hands</span>
              </div>

              <div className={styles.infoBar}>
                <div className={styles.infoItem}>
                  <div className={styles.googleRating}>
                    <img src="https://www.vectorlogo.zone/logos/google/google-ar21.svg" alt="Google" />
                    <div className={styles.ratingText}>
                      <span className={styles.ratingVal}>4.9 Reviews</span>
                    </div>
                  </div>
                </div>
                <div className={styles.infoDivider}></div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Duration</span>
                  <span className={styles.infoValue}>{course.duration || '4 Months'}</span>
                </div>
                <div className={styles.infoDivider}></div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Class Mode</span>
                  <span className={styles.infoValue}>Online / Offline</span>
                </div>
                <div className={styles.infoDivider}></div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Next Batch Starts</span>
                  <span className={styles.infoValue}>18 - June - 2026</span>
                </div>
              </div>
            </div>

            <div id="enroll-form" className={`${styles.heroRight} reveal`}>
              <div className={styles.formCard}>
                <form className={styles.form}>
                  <div className={styles.inputGroup}>
                    <input type="text" placeholder="Full Name" />
                  </div>
                  <div className={styles.inputGroup}>
                    <input type="tel" placeholder="Phone Number" />
                  </div>
                  <button type="submit" className={styles.submitBtn}>Enroll Now</button>
                  <a href="#callback" className={styles.callbackLink}>Request a Call back</a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className={styles.partners}>
        <div className="container">
          <div className={`${styles.partnersScroll} reveal-group`}>
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

      {/* Learning Sessions Section */}
      {course.whatYouWillLearn && course.whatYouWillLearn.length > 0 && (
        <section id="learnsession" className={styles.learnSection}>
          <div className="container">
            <h2 className={`${styles.sectionTitle} reveal`}>Learning Sessions</h2>
            <div className={`${styles.learnGrid} reveal-group`}>
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

      {/* Tool Sessions Section */}
      {course.tools && course.tools.length > 0 && (
        <section id="toolsession" className={styles.toolsSection}>
          <div className="container">
            <h2 className={`${styles.sectionTitle} reveal`}>Tool Sessions</h2>
            <div className={`${styles.toolsGrid} reveal-group`}>
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

      {/* Promo Banners */}
      <section className={styles.promoSection}>
        <div className="container">
          <div className={`${styles.promoGrid} reveal-group`}>
            <div className={styles.promoBannerBlue}>
              <div className={styles.promoText}>
                <h3>Need to Learn more ? This course is designed to help you build a solid foundation in {course.title.toLowerCase()} and advance to real-world practical skills.</h3>
                <span className={styles.promoTag}>Expert Guidance</span>
              </div>
              <img src={promoImg} alt="Learn more" className={styles.promoImg} />
            </div>
            <div className={styles.promoBannerSolid}></div>
          </div>
        </div>
      </section>

      {/* Expert Mentors */}
      <section className={styles.mentorsSection}>
        <div className="container">
          <h2 className={`${styles.sectionTitleCenter} reveal`}>Expert Mentors To Upskill Your Career</h2>
          <div className={`${styles.mentorsGrid} reveal-group`}>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className={styles.mentorCard}>
                <div className={styles.mentorTop}>
                  <img src={`https://i.pravatar.cc/300?u=mentor${i}`} alt="Mentor" className={styles.mentorImg} />
                </div>
                <div className={styles.mentorInfo}>
                  <h4>James Alex</h4>
                  <p className={styles.mentorRole}>CISSP, CISM, CEH, India</p>
                  <p className={styles.mentorWork}>Work @</p>
                  <p className={styles.mentorDesc}>Cyber security skills with hands-on training. Learn ethical hacking and protect real-world systems.</p>
                  <div className={styles.mentorSocial}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" />
                    <span>View Profile</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learn Across Industries */}
      <section className={styles.industriesSection}>
        <div className="container">
          <h2 className={`${styles.sectionTitle} reveal`}>Learn Across Industries</h2>
          <div className={`${styles.industriesGrid} reveal-group`}>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className={styles.industryBox}></div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Life Banner */}
      <section className={styles.studentBannerSection}>
        <div className="container">
          <div className={`${styles.studentBannerContent} reveal`}>
            <div className={styles.studentBannerLeft}>
              {/* Left side is dark blue as in image */}
            </div>
            <div className={styles.studentBannerRight}>
              <img src={studentsBanner} alt="Students" />
            </div>
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className={styles.testimonialsSection}>
        <div className="container">
          <h2 className={`${styles.sectionTitle} reveal`}>What our Students says about their learning experience with us</h2>
          <div className={`${styles.testimonialsGrid} reveal-group`}>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className={styles.testimonialCard}>
                <p className={styles.testimonialText}>
                  The mentors were incredibly supportive and always ready to help. I especially loved the hands-on projects they made learning much more effective. Joining this course was one of the best decisions I've made. The training was practical, easy to understand.
                </p>
                <div className={styles.testimonialAuthor}>
                  <img src={`https://i.pravatar.cc/100?u=student${i}`} alt="Student" />
                  <div className={styles.authorInfo}>
                    <h5>Vishnu Prasad</h5>
                    <p>React Developer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetailPage;
