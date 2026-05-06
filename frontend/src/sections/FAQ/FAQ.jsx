import React, { useState } from 'react';
import styles from './FAQ.module.css';

const FAQ = () => {
  const [activeTab, setActiveTab] = useState('Eligibility & Requirements');

  const tabs = [
    "General Questions",
    "Placement & Support",
    "Eligibility & Requirements",
    "Certifications",
    "Fees & Payment",
    "Career Opportunities"
  ];

  const faqs = [
    {
      id: 1,
      question: "1. Do I need prior technical knowledge?",
      answer: "No, our courses are designed for beginners as well as those looking to upskill, with step-by-step guidance from basics to advanced. our courses are designed for beginners as well as those looking tha, our courses are designed for beginners as well as those looking"
    },
    {
      id: 2,
      question: "2. What courses are offered at Tech Hub?",
      answer: "No, our courses are designed for beginners as well as those looking to upskill, with step-by-step guidance from basics to advanced. our courses are designed for beginners as well as those looking tha, our courses are designed for beginners as well as those looking"
    },
    {
      id: 3,
      question: "3. Do you provide placement support?",
      answer: "No, our courses are designed for beginners as well as those looking to upskill, with step-by-step guidance from basics to advanced. our courses are designed for beginners as well as those looking tha, our courses are designed for beginners as well as those looking"
    }
  ];

  return (
    <section className={styles.faqSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
        
        <div className={styles.faqContainer}>
          {/* Sidebar */}
          <div className={styles.sidebar}>
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`${styles.tabItem} ${activeTab === tab ? styles.activeTab : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* FAQ Content */}
          <div className={styles.faqContent}>
            {faqs.map((faq) => (
              <div key={faq.id} className={styles.faqItem}>
                <h3 className={styles.question}>{faq.question}</h3>
                <p className={styles.answer}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
