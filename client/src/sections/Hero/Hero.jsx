// Hero.jsx
import styles from "./Hero.module.css";
import logoImg from "../../assets/logo.png";

import { companyLogos } from "../../data/siteData";
import { SiPython, SiDocker, SiReact, SiScikitlearn, SiLinux, SiPostgresql, SiKubernetes } from "react-icons/si";
import { MdSecurity } from "react-icons/md";
import { FaBullhorn, FaChartBar, FaFlask, FaAws } from "react-icons/fa";

function OrbitAnimation({ isMobile }) {
  const orbit3Icons = [
  { icon: <SiReact />, angle: 0 },
  { icon: <FaChartBar />, angle: 60 },
  { icon: <SiScikitlearn />, angle: 120 },
  { icon: <FaFlask />, angle: 180 },
  { icon: <SiPostgresql />, angle: 240 },
  { icon: <MdSecurity />, angle: 300 },
];
  return (
    <div className={styles.orbitContainer}>
      <div className={styles.centerSphere}>
        {isMobile ? (
          <img src={logoImg} alt="Catalyst Logo" className={styles.centerLogo} />
        ) : (
          <span>Catalyst</span>
        )}
      </div>

      {/* Inner Orbit - Python & DevOps */}
      <div className={`${styles.orbitWrapper} ${styles.orbit1Wrapper}`}>
        <div className={styles.orbitRing1}>
          <div className={styles.orbitIconWrap} style={{ top: 0, left: '50%', transform: 'translate(-50%, -50%)' }} title="Python">
            <div className={styles.orbitIcon}>
              <SiPython />
            </div>
          </div>
          <div className={styles.orbitIconWrap} style={{ top: '100%', left: '50%', transform: 'translate(-50%, -50%)' }} title="DevOps">
            <div className={styles.orbitIcon}>
              <SiDocker />
            </div>
          </div>
        </div>
      </div>

      {/* Orbit 2 - 3 icons: Cybersecurity, Ethical Hacking, AWS Cloud */}
      <div className={`${styles.orbitWrapper} ${styles.orbit2Wrapper}`}>
        <div className={styles.orbitRing2}>

          {/* Top */}
          <div
            className={styles.orbitIconWrap}
            style={{ top: 0, left: '50%', transform: 'translate(-50%, -50%)' }}
            title="Cybersecurity"
          >
            <div className={styles.orbitIcon}>
              <SiKubernetes />
            </div>
          </div>

          {/* Right */}
          <div
            className={styles.orbitIconWrap}
            style={{ top: '50%', left: '100%', transform: 'translate(-50%, -50%)' }}
            title="Ethical Hacking"
          >
            <div className={styles.orbitIcon}>
              <FaBullhorn />
            </div>
          </div>

          {/* Bottom */}
          <div
            className={styles.orbitIconWrap}
            style={{ top: '100%', left: '50%', transform: 'translate(-50%, -50%)' }}
            title="AWS Cloud"
          >
            <div className={styles.orbitIcon}>
              <FaAws />
            </div>
          </div>

          {/* Left - New Icon */}
          <div
            className={styles.orbitIconWrap}
            style={{ top: '50%', left: 0, transform: 'translate(-50%, -50%)' }}
            title="DevOps"
          >
            <div className={styles.orbitIcon}>
              <SiLinux />
            </div>
          </div>

        </div>
      </div>

      {/* Orbit 3 - 4 icons: MERN, Data Analytics, Data Science, Machine Learning */}
      <div className={`${styles.orbitWrapper} ${styles.orbit3Wrapper}`}>
        <div className={styles.orbitRing3}>
            {orbit3Icons.map((item, index) => {
              return (
                <div
                  key={index}
                  className={styles.orbitIconWrap}
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `translate(-50%, -50%) rotate(${item.angle}deg) translateY(calc(var(--orbit3-size) / -2)) rotate(-${item.angle}deg)`
                  }}
                >
                <div className={styles.orbitIcon}>
                  {item.icon}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function Hero({ navigate }) {

  return (
    <section className={styles.hero}>
      <div className={`container-fluid ${styles.noPadding}`}>
        <div className={styles.heroBox}>
          {/* LEFT */}
          <div className={styles.left}>
            <div className={`${styles.orbitMobileWrapper} reveal`}>
              <OrbitAnimation isMobile={true} />
            </div>
            <span className={styles.badge}>
              No.1 Tech Training Institute in Kerala
            </span>

            <h1 className={`${styles.title} reveal reveal-d1`}>
              <span className={styles.titleLine1}>Become a Tech Professional</span>
              <span className={styles.titleLine2}>with <span className={styles.titleAccent}>AI&#8209;Powered Skills</span></span>
            </h1>

            <p className={`${styles.desc} reveal reveal-d2`}>
              Begin your Career with today’s most in-demand tech skills.
            </p>

            <button 
              className={`${styles.primaryBtn} reveal reveal-d3`}
              onClick={() => navigate && navigate('/courses')}
            >
              View All Courses <span className={styles.arrow}>→</span>
            </button>

            {/* course tags */}
            <p className={`${styles.sectionLabel} reveal reveal-d4`}>Our Programmes</p>
            <div className={`${styles.tags} reveal-group`}>
              <span>DevOps</span>
              <span>Data Analytics</span>
              <span>Python Full Stack Development</span>
              {/* <span>Software Testing</span> */}
            </div>

          </div>

          <div className={`${styles.right} reveal`}>
            <OrbitAnimation isMobile={false} />
          </div>

          {/* company logos - Full width at the bottom of heroBox */}
          <div className={styles.companiesWrapper}>
            <p className={`${styles.sectionLabel} reveal reveal-d5`}>
              Our alumni work at
            </p>
            <div className={`${styles.companies} reveal-group`}>
              {companyLogos.map((logo, i) => (
                <img key={i} src={logo.src} alt={logo.alt} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}