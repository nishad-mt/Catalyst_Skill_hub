import React, { useState } from 'react';
import styles from './FAQ.module.css';
import { FiPlus, FiMinus } from 'react-icons/fi';

import { faqData } from '../../data/siteData';

const FAQ = () => {
  const [activeTab, setActiveTab] = useState('General Questions');
  const [openIndex, setOpenIndex] = useState(0);

  const tabs = Object.keys(faqData);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setOpenIndex(0); // Reset accordion when switching tabs
  };

  return (
    <section className={styles.faqSection} id="faq">
      <div className="container">
        <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
        
        <div className={styles.faqContainer}>
          {/* Sidebar */}
          <div className={styles.sidebar}>
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`${styles.tabItem} ${activeTab === tab ? styles.activeTab : ''}`}
                onClick={() => handleTabChange(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* FAQ Content */}
          <div className={styles.faqContent}>
            {faqData[activeTab].map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <button 
                  className={styles.questionWrapper} 
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={openIndex === index}
                >
                  <h3 className={styles.question}>{faq.question}</h3>
                  <span className={styles.icon}>
                    {openIndex === index ? <FiMinus /> : <FiPlus />}
                  </span>
                </button>
                
                <div className={`${styles.answerWrapper} ${openIndex === index ? styles.open : ''}`}>
                  <ul className={styles.bulletList}>
                    {faq.bullets.map((bullet, idx) => (
                      <li key={idx} className={styles.bulletItem}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
