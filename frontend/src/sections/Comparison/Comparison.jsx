import React from 'react';
import styles from './Comparison.module.css';

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const CrossIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

// 1. Curriculum Quality (Book)
const BookIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4b5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
  </svg>
);

// 2. Learning Experience (Brain / Lightbulb)
const LightbulbIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4b5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18h6"></path>
    <path d="M10 22h4"></path>
    <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 12 3a4.65 4.65 0 0 0-4.5 8.5c.76.76 1.23 1.52 1.41 2.5"></path>
  </svg>
);

// 3. Practical Exposure (Wrench)
const WrenchIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4b5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
  </svg>
);

// 4. Modern Tools & AI (Cpu / Spark)
const CpuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4b5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
    <rect x="9" y="9" width="6" height="6"></rect>
    <line x1="9" y1="1" x2="9" y2="4"></line>
    <line x1="15" y1="1" x2="15" y2="4"></line>
    <line x1="9" y1="20" x2="9" y2="23"></line>
    <line x1="15" y1="20" x2="15" y2="23"></line>
    <line x1="20" y1="9" x2="23" y2="9"></line>
    <line x1="20" y1="14" x2="23" y2="14"></line>
    <line x1="1" y1="9" x2="4" y2="9"></line>
    <line x1="1" y1="14" x2="4" y2="14"></line>
  </svg>
);

// 5. Specialization Paths (Map / Route)
const RouteIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4b5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6" cy="19" r="3"></circle>
    <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path>
    <circle cx="18" cy="5" r="3"></circle>
  </svg>
);

// 6. Project Experience (Briefcase)
const BriefcaseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4b5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
  </svg>
);

// 7. Mentorship & Support (Users)
const UsersIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4b5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);


const Comparison = () => {
  const comparisonData = [
    {
      id: 1,
      feature: "Curriculum Quality",
      catalyst: "Continuously updated programs aligned with current industry practices",
      others: "Static syllabus with slower updates",
      icon: <BookIcon />
    },
    {
      id: 2,
      feature: "Learning Experience",
      catalyst: "Structured, guided learning with clear progression at every stage",
      others: "Less structured approach with limited guidance",
      icon: <LightbulbIcon />
    },
    {
      id: 3,
      feature: "Practical Exposure",
      catalyst: "Hands-on sessions using real tools, workflows, and case scenarios",
      others: "More focus on theory with limited practical depth",
      icon: <WrenchIcon />
    },
    {
      id: 4,
      feature: "Modern Tools & AI",
      catalyst: "Integrated exposure to current tools, platforms, and emerging technologies",
      others: "Limited focus on evolving tools and trends",
      icon: <CpuIcon />
    },
    {
      id: 5,
      feature: "Specialization Paths",
      catalyst: "Flexible learning tracks based on individual career goals",
      others: "One standard path for all learners",
      icon: <RouteIcon />
    },
    {
      id: 6,
      feature: "Project Experience",
      catalyst: "Industry-relevant projects that reflect real job responsibilities",
      others: "Basic project work with limited real-world context",
      icon: <BriefcaseIcon />
    },
    {
      id: 7,
      feature: "Mentorship & Support",
      catalyst: "Continuous trainer support, feedback, and progress tracking",
      others: "Limited one-on-one interaction",
      icon: <UsersIcon />
    }
  ];

  return (
    <section className={styles.comparisonSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>What Makes Catalyst the best</h2>
        
        <div className={styles.tableContainer}>
          <table className={styles.comparisonTable}>
            <thead>
              <tr>
                <th className={styles.featureCol}></th>
                <th className={styles.catalystCol}></th>
                <th className={styles.othersCol}>Others</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row) => (
                <tr key={row.id}>
                  <td className={styles.featureCell}>
                    <div className={styles.featureContent}>
                      {row.icon}
                      <span>{row.feature}</span>
                    </div>
                  </td>
                  <td className={styles.catalystCell}>
                    <div className={styles.catalystContent}>
                      <CheckIcon />
                      <span>{row.catalyst}</span>
                    </div>
                  </td>
                  <td className={styles.othersCell}>
                    <div className={styles.othersContent}>
                      <CrossIcon />
                      <span>{row.others}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.buttonContainer}>
          <button className={styles.checkBtn}>Check Eligibility</button>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
