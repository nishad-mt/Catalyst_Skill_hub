// Hero.jsx
import styles from "./Hero.module.css";
import heroImg from "../../assets/image.png";
import nsdcLogo from "../../assets/nsdc.png";

export default function Hero() {
  const logos = [
    { src: "https://www.vectorlogo.zone/logos/amazon/amazon-ar21.svg", alt: "Amazon" },
    { src: "https://www.vectorlogo.zone/logos/microsoft/microsoft-ar21.svg", alt: "Microsoft" },
    { src: "https://www.vectorlogo.zone/logos/google/google-ar21.svg", alt: "Google" },
    { src: "https://www.vectorlogo.zone/logos/accenture/accenture-ar21.svg", alt: "Accenture" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg", alt: "Infosys" },
    { src: "https://www.vectorlogo.zone/logos/adobe/adobe-ar21.svg", alt: "Adobe" },
    { src: "https://www.vectorlogo.zone/logos/oracle/oracle-ar21.svg", alt: "Oracle" },
    { src: "https://www.vectorlogo.zone/logos/intel/intel-ar21.svg", alt: "Intel" },
  ];

  return (
    <section className={styles.hero}>
      <div className={`container-wide ${styles.heroBox}`}>

        {/* LEFT */}
        <div className={styles.left}>
          <span className={styles.badge}>
            🏆 No.1 Tech Training Institute in Kerala
          </span>

          <h1 className={styles.title}>
            <span className={styles.titleLine1}>Become a Tech Professional</span>
            <span className={styles.titleLine2}>with <span className={styles.titleAccent}>AI&#8209;Powered Skills</span></span>
          </h1>

          <p className={styles.desc}>
            Learn in-demand tech skills through hands-on training,
            real-world projects, and expert mentorship — designed
            to get you hired.
          </p>

          <button className={styles.primaryBtn}>
            Go to Programmes →
          </button>

          {/* course tags */}
          <p className={styles.sectionLabel}>Our Programmes</p>
          <div className={styles.tags}>
            <span>Data Analytics</span>
            <span>DevOps</span>
            <span>Cyber Security</span>
            <span>MERN Stack</span>
            <span>Python Full Stack Development</span>
            <span>Flutter</span>
            <span>Software Testing</span>
          </div>

          {/* company logos */}
          <div className={styles.companiesWrapper}>
            <p className={styles.sectionLabel}>Our alumni work at</p>
            <div className={styles.companies}>
              {logos.map((logo, i) => (
                <img key={i} src={logo.src} alt={logo.alt} />
              ))}
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.imageBox}>
            <div className={styles.nsdcBadge}>
              <img
                src={nsdcLogo}
                alt="NSDC"
                className={styles.nsdcLogo}
              />
              <span className={styles.nsdcText}>
                NSDC Approved <br /> Certificate
              </span>
            </div>
            <img src={heroImg} alt="Students learning at the institute" className={styles.mainImg} />
            <div className={styles.greenDecoration} />
          </div>
        </div>

      </div>
    </section>
  );
}