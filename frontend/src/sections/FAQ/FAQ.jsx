import React, { useState } from 'react';
import styles from './FAQ.module.css';
import { FiPlus, FiMinus } from 'react-icons/fi';

const FAQ = () => {
  const [activeTab, setActiveTab] = useState('General Questions');
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = {
    "General Questions": [
      {
        question: "What is Catalyst Tech Hub?",
        bullets: [
          "A premium skill development center focusing on AI-powered tech education.",
          "Offers hands-on training in Full Stack Dev, Data Science, Cyber Security, and more.",
          "Provides both online and offline learning modes for maximum flexibility."
        ]
      },
      {
        question: "Are the courses AI-powered?",
        bullets: [
          "Yes, we integrate AI tools like ChatGPT, GitHub Copilot, and Claude into our curriculum.",
          "Learn how to use AI for faster coding, debugging, and data analysis.",
          "Stay ahead of the curve by mastering AI-driven professional workflows."
        ]
      }
    ],
    "Placement & Support": [
      {
        question: "Do you provide 100% placement assistance?",
        bullets: [
          "Yes, we have a dedicated career cell that works with 50+ hiring partners.",
          "Includes mock interviews, resume building, and LinkedIn optimization workshops.",
          "We continue to provide support until you land your first tech role."
        ]
      },
      {
        question: "What kind of internship opportunities are available?",
        bullets: [
          "Students get access to live industry projects during the course.",
          "Paid internship opportunities with our partner startups and tech firms.",
          "Real-world experience to build a strong portfolio."
        ]
      }
    ],
    "Eligibility & Requirements": [
      {
        question: "Who can join these courses?",
        bullets: [
          "Graduates and final-year students looking for professional careers.",
          "Working professionals aiming for a career switch or upskilling.",
          "Even beginners with zero technical background can join our foundational tracks."
        ]
      },
      {
        question: "What are the prerequisites?",
        bullets: [
          "A basic understanding of computers is helpful but not mandatory.",
          "A laptop with at least 8GB RAM is recommended for practical sessions.",
          "Strong motivation to learn and build a career in technology."
        ]
      }
    ],
    "Certifications": [
      {
        question: "Will I get a certificate after completion?",
        bullets: [
          "Yes, you will receive an industry-recognized certificate from Catalyst Tech Hub.",
          "Our certifications are NSDC approved, adding significant value to your resume.",
          "Special badges for completing specific advanced modules."
        ]
      }
    ],
    "Fees & Payment": [
      {
        question: "What is the fee structure?",
        bullets: [
          "We offer competitive pricing with flexible payment plans.",
          "Options for EMI (Easy Monthly Installments) with 0% interest.",
          "Early bird discounts and merit-based scholarships available."
        ]
      }
    ],
    "Career Opportunities": [
      {
        question: "What roles can I apply for?",
        bullets: [
          "Full Stack Developer, Frontend/Backend Engineer, or UI/UX Designer.",
          "Data Analyst, AI Specialist, or Machine Learning Engineer.",
          "Cyber Security Analyst, SOC Engineer, or Penetration Tester."
        ]
      }
    ]
  };

  const tabs = Object.keys(faqData);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setOpenIndex(null); // Reset accordion when switching tabs
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
