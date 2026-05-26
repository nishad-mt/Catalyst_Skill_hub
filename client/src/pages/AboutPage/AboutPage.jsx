import React, { useEffect } from 'react';
import styles from './AboutPage.module.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';

// Assets
import heroBg from '../../assets/about_hero_bg.png';
import team1 from '../../assets/team_member_1.png';
import team2 from '../../assets/team_member_2.png';
import studentsBanner from '../../assets/students_banner.png';
import learningImg from '../../assets/learning.png';

const AboutPage = () => {
  // Initialize scroll reveal
  useScrollReveal();

  useEffect(() => {
    document.title = "About Us | Catalyst Skill Hub — Architecting the Future of Digital Talent";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "At Catalyst, we cultivate the next generation of innovators, problem-solvers, and digital leaders through industry-aligned, practical learning.");
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.aboutPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg} style={{ backgroundImage: `url(${heroBg})` }}></div>
        <div className={styles.heroOverlay}></div>
        <div className="container">
          <div className={`${styles.heroContent} reveal`}>
            <span className={styles.badge}>Our Journey</span>
            <h1>Architecting the Future of <span className={styles.gradientText}>Digital Talent</span></h1>
            <p>
              At Catalyst, we don't just teach technology; we cultivate the next generation of innovators, 
              problem-solvers, and digital leaders.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className="container">
          <div className={`${styles.statsGrid} reveal-group`}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>10k+</div>
              <div className={styles.statLabel}>Active Learners</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>50+</div>
              <div className={styles.statLabel}>Expert Mentors</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>95%</div>
              <div className={styles.statLabel}>Placement Success</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>100+</div>
              <div className={styles.statLabel}>Hiring Partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className={styles.visionSection}>
        <div className="container">
          <div className={styles.visionGrid}>
            <div className={`${styles.visionImage} reveal`}>
              <img src={studentsBanner} alt="Catalyst Students" />
              <div className={styles.imageFloatingCard}>
                <p>"The best way to predict the future is to create it."</p>
              </div>
            </div>
            <div className={`${styles.visionContent} reveal`}>
              <span className={styles.sectionSubtitle}>Our Vision</span>
              <h2>Bridging the Gap Between <span className={styles.textAccent}>Learning & Industry</span></h2>
              <p>
                Founded with a vision to revolutionize technical education, Catalyst was born out of 
                the need for a more practical, industry-aligned approach to learning. 
              </p>
              <p>
                We believe that traditional education often lags behind the rapid pace of technology. 
                Our mission is to provide an ecosystem where students learn by doing, guided by 
                industry veterans who are currently shaping the digital landscape.
              </p>
              <div className={styles.featureList}>
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>✓</div>
                  <span>Industry-Standard Curriculum</span>
                </div>
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>✓</div>
                  <span>Real-world Project Experience</span>
                </div>
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>✓</div>
                  <span>Direct Mentorship from Experts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className={styles.valuesSection}>
        <div className={styles.meshBg}></div>
        <div className="container">
          <div className={`${styles.sectionHeader} reveal`}>
            <span className={styles.sectionSubtitle}>Why We Exist</span>
            <h2>The Values That <span className={styles.textAccent}>Drive Us</span></h2>
            <p>Our core principles are the foundation of every course we design and every student we mentor.</p>
          </div>
          <div className={`${styles.valuesGrid} reveal-group`}>
            <div className={styles.valueCard}>
              <div className={styles.valueIconWrapper}>🚀</div>
              <h3>Continuous Innovation</h3>
              <p>The tech world moves fast. We move faster. Our curriculum is updated monthly to reflect the latest industry shifts.</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIconWrapper}>🤝</div>
              <h3>Student Centricity</h3>
              <p>Your success is our metric. We provide personalized career paths and 1-on-1 mentorship to ensure you reach your goals.</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIconWrapper}>💎</div>
              <h3>Excellence in Execution</h3>
              <p>We don't just teach theory. We focus on building high-quality, production-ready code and robust problem-solving skills.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.teamSection}>
        <div className="container">
          <div className={`${styles.sectionHeader} reveal`}>
            <span className={styles.sectionSubtitle}>The Leadership</span>
            <h2>Meet the <span className={styles.textAccent}>Visionaries</span></h2>
            <p>A diverse group of industry experts dedicated to your professional growth.</p>
          </div>
          <div className={`${styles.teamGrid} reveal-group`}>
            <div className={styles.teamCard}>
              <div className={styles.teamImageWrapper}>
                <img src={team1} alt="Alex Rivera" />
                <div className={styles.teamSocials}>
                  <span>In</span>
                  <span>Tw</span>
                </div>
              </div>
              <h3>Alex Rivera</h3>
              <p className={styles.teamRole}>Founder & Chief Visionary</p>
            </div>
            <div className={styles.teamCard}>
              <div className={styles.teamImageWrapper}>
                <img src={team2} alt="Sarah Chen" />
                <div className={styles.teamSocials}>
                  <span>In</span>
                  <span>Tw</span>
                </div>
              </div>
              <h3>Sarah Chen</h3>
              <p className={styles.teamRole}>Head of Education</p>
            </div>
            <div className={styles.teamCard}>
              <div className={styles.teamImageWrapper}>
                <img src={team1} alt="David Miller" />
                <div className={styles.teamSocials}>
                  <span>In</span>
                  <span>Tw</span>
                </div>
              </div>
              <h3>David Miller</h3>
              <p className={styles.teamRole}>CTO & Principal Mentor</p>
            </div>
            <div className={styles.teamCard}>
              <div className={styles.teamImageWrapper}>
                <img src={team2} alt="Elena Rodriguez" />
                <div className={styles.teamSocials}>
                  <span>In</span>
                  <span>Tw</span>
                </div>
              </div>
              <h3>Elena Rodriguez</h3>
              <p className={styles.teamRole}>Director of Partnerships</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={`${styles.ctaBox} reveal`}>
            <h2>Ready to Start Your <span className={styles.gradientText}>Success Story?</span></h2>
            <p>Join thousands of students who have transformed their careers with Catalyst.</p>
            <div className={styles.ctaButtons}>
              <button className="btn-primary" onClick={() => window.history.pushState({}, '', '/courses')}>Explore Our Courses</button>
              <button 
                className={styles.btnSecondary}
                onClick={() => window.dispatchEvent(new CustomEvent('openModal', { detail: { type: 'callback' } }))}
              >
                Talk to an Expert
              </button>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

