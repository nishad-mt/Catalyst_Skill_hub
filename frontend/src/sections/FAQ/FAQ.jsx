import React, { useState, useRef } from 'react';
import styles from './FAQ.module.css';
import { FiPlus, FiMinus } from 'react-icons/fi';

import { faqData } from '../../data/siteData';

const FAQ = () => {
  const [activeTab, setActiveTab] = useState('General Questions');
  const [openIndex, setOpenIndex] = useState(0);

  const sidebarRef = useRef(null);
  const faqItemsRef = useRef([]);

  const tabs = Object.keys(faqData);

  const toggleAccordion = (index) => {
    const isOpening = openIndex !== index;
    setOpenIndex(isOpening ? index : null);
    
    // Auto-scroll the opened question into view on mobile
    if (isOpening && window.innerWidth < 768) {
      setTimeout(() => {
        faqItemsRef.current[index]?.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest'
        });
      }, 300); // Wait for accordion animation
    }
  };

  const handleTabChange = (tab, e) => {
    setActiveTab(tab);
    setOpenIndex(0); // Reset accordion when switching tabs

    // Auto-scroll the tab into view horizontally on mobile
    if (e && e.currentTarget && window.innerWidth < 768) {
      e.currentTarget.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest'
      });
    }
  };

  return (
    <section className={styles.faqSection} id="faq">
      <div className="container">
        <h2 className={`${styles.sectionTitle} reveal`}>Frequently Asked Questions</h2>

        <div className={styles.faqContainer}>
          {/* Sidebar */}
          <div className={`${styles.sidebar} reveal-group`}>
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`${styles.tabItem} ${activeTab === tab ? styles.activeTab : ''}`}
                onClick={(e) => handleTabChange(tab, e)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* FAQ Content */}
          <div className={`${styles.faqContent} reveal-group`}>
            {faqData[activeTab].map((faq, index) => (
              <div 
                key={index} 
                className={styles.faqItem}
                ref={el => faqItemsRef.current[index] = el}
              >
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
