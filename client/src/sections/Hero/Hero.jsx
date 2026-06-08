// Hero.jsx
import styles from "./Hero.module.css";
import heroImg from "../../assets/image.png";
import nsdcLogo from "../../assets/nsdc.png";

import { companyLogos } from "../../data/siteData";
import { SiPython, SiDocker, SiReact, SiScikitlearn, SiLinux, SiPostgresql, SiKubernetes } from "react-icons/si";
import { MdSecurity } from "react-icons/md";
import { FaBullhorn, FaChartBar, FaFlask, FaAws } from "react-icons/fa";

function OrbitAnimation() {
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
        <span>Catalyst</span>
      </div>

      {/* Inner Orbit - Python & DevOps */}
      <div className={`${styles.orbitWrapper} ${styles.orbit1Wrapper}`}>
        <div className={styles.orbitRing1}>
          <div className={styles.orbitIconWrap} style={{ top: '-25px', left: 'calc(50% - 25px)' }} title="Python">
            <div className={styles.orbitIcon}>
              <SiPython />
            </div>
          </div>
          <div className={styles.orbitIconWrap} style={{ bottom: '-25px', left: 'calc(50% - 25px)' }} title="DevOps">
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
            style={{ top: '-25px', left: 'calc(50% - 25px)' }}
            title="Cybersecurity"
          >
            <div className={styles.orbitIcon}>
              <SiKubernetes />
            </div>
          </div>

          {/* Right */}
          <div
            className={styles.orbitIconWrap}
            style={{ right: '-25px', top: 'calc(50% - 25px)' }}
            title="Ethical Hacking"
          >
            <div className={styles.orbitIcon}>
              <FaBullhorn />
            </div>
          </div>

          {/* Bottom */}
          <div
            className={styles.orbitIconWrap}
            style={{ bottom: '-25px', left: 'calc(50% - 25px)' }}
            title="AWS Cloud"
          >
            <div className={styles.orbitIcon}>
              <FaAws />
            </div>
          </div>

          {/* Left - New Icon */}
          <div
            className={styles.orbitIconWrap}
            style={{ left: '-25px', top: 'calc(50% - 25px)' }}
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
            const radius = 255; // orbit diameter 510 / 2

            const x = Math.sin(item.angle * Math.PI / 180) * radius;
            const y = Math.cos(item.angle * Math.PI / 180) * radius;

            return (
              <div
                key={index}
                className={styles.orbitIconWrap}
                style={{
                  left: `calc(50% + ${x}px - 25px)`,
                  top: `calc(50% - ${y}px - 25px)`
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
              <OrbitAnimation />
            </div>
            <span className={styles.badge}>
              No.1 Tech Training Institute in Kerala
            </span>

            <h1 className={`${styles.title} reveal reveal-d1`}>
              <span className={styles.titleLine1}>Become a Tech Professional</span>
              <span className={styles.titleLine2}>with <span className={styles.titleAccent}>AI&#8209;Powered Skills</span></span>
            </h1>

            <p className={`${styles.desc} reveal reveal-d2`}>
              Learn in-demand tech skills through hands-on training,
              real-world projects, and expert mentorship — designed
              to get you hired.
            </p>

            <button 
              className={`${styles.primaryBtn} reveal reveal-d3`}
              onClick={() => navigate && navigate('/courses')}
            >
              Go to Programmes <span className={styles.arrow}>→</span>
            </button>

            {/* course tags */}
            <p className={`${styles.sectionLabel} reveal reveal-d4`}>Our Programmes</p>
            <div className={`${styles.tags} reveal-group`}>
              <span>Data Analytics</span>
              <span>DevOps</span>
              <span>Cyber Security</span>
              <span>MERN Stack</span>
              <span>Python Full Stack Development</span>
              <span>Flutter</span>
              <span>Software Testing</span>
            </div>

          </div>

          <div className={`${styles.right} reveal`}>
            <OrbitAnimation />
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