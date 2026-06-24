import React from "react";
import styles from "./AboutPage.module.css";
import { centers } from '../../data/siteData';
import { boardMembers } from '../../data/boardMembers';
import { FaLinkedin } from "react-icons/fa";
import snapcat from '../../assets/snapcat.jpg';

function AboutPage() {
  const stats = [
    { number: "50,000+", text: "Happy Students" },
    { number: "10+", text: "Industry focused Programmes" },
    { number: "100+", text: "Career Experts" },
    { number: "50+", text: "Lab facilities" },
  ];

  const features = [
    {
      title: "Industry-Aligned Curriculum",
      desc: "Our courses are designed alongside industry experts to meet current market demands.",
      // icon: "📚"
    },
    {
      title: "Hands-on Projects",
      desc: "Gain practical experience by working on real-world applications and scenarios.",
      // icon: "💻"
    },
    {
      title: "Expert Mentorship",
      desc: "Learn directly from seasoned professionals who bring years of experience to the classroom.",
      // icon: "👨‍🏫"
    },
    {
      title: "Placement Assistance",
      desc: "We provide dedicated support to help you land your dream tech role.",
      // icon: "🚀"
    }
  ];

  return (
    <div className={`${styles.aboutPage} container`}>
      {/* Hero Section */}
      <section className={`section ${styles.aboutHero}`}>
        <div className={styles.heroContent}>
          <h1>
            Creating the <span>Next Generation of Tech</span> Professionals
          </h1>

          <p>
            At Catalyst Tech Hub, we are committed to delivering industry-focused technology education that empowers
             learners to achieve their professional aspirations. Through expert-led training, hands-on learning experiences,
              and a curriculum aligned with evolving industry demands, we help students develop the skills and confidence required
               to succeed in today's competitive technology landscape. 
          </p>

          <button>Learn More</button>
        </div>

        <div className={styles.heroImage}>
          <img src={snapcat} alt="About Catalyst" className={styles.heroImg} />
        </div>
      </section>

      {/* Stats */}
      <section className={styles.statsSection}>
        {stats.map((item, index) => (
          <div className={styles.statCard} key={index}>
            <h2>{item.number}</h2>
            <p>{item.text}</p>
          </div>
        ))}
      </section>

      {/* Mission Section */}
      <section className={`section ${styles.missionSection}`}>
        <h2 className={styles.secondheading}>
          Shaping the <span>Next Generation of Tech</span>
        </h2>

        <div className={styles.missionContainer}>
          <div
            className={`${styles.missionCard} ${styles.light}`}
          >
            <h3>Vission</h3>
            <p>
             To make quality technology education a pathway to meaningful and sustainable careers.
            </p>
          </div>

          <div
            className={`${styles.missionCard} ${styles.dark}`}
          >
            <h3>Mission</h3>
            <p>
              To equip learners with industry-ready skills, practical experience, and professional confidence,
               enabling them to successfully transition into high-growth technology careers. 
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className={`section ${styles.featuresSection}`}>
        <h2 className={styles.heading}>
          Shaping the <span>Next Generation of Tech</span> Professionals
          Transforming Students into
        </h2>

        <div className={styles.featuresGrid}>
          {features.map((item, index) => (
            <div className={styles.featureCard} key={index}>
              <div className={styles.icon}>{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={`section ${styles.locationsSection}`}>
        <h2 className={styles.sectionTitle}>Our Campus Locations</h2>

        <div className={styles.locationsGrid}>
          {centers.map((center) => (
            <a
              key={center.id}
              href={`/center/${center.slug}`}
              className={styles.locationCard}
            >
              <img src={center.image} alt={center.name} />
              <span>{center.name}</span>
            </a>
          ))}
        </div>
      </section>

      <div className={`section ${styles.boardMembers}`}>
        <h2 className={styles.sectionTitle}>Meet Our Board Members</h2>
        <div className={styles.membersGrid}>
          {boardMembers.map((member) => (
            <div key={member.id} className={styles.memberCard}>
              <img src={member.image} alt={member.name} />

              <div className={styles.memberOverlay}>
                <div className={styles.memberContent}>
                  <div>
                    <h4>{member.name}</h4>
                    <p>{member.role}</p>
                  </div>

                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkedinIcon}
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutPage;