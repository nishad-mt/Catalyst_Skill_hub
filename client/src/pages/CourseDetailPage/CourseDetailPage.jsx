import React, { useEffect, useState, useRef } from 'react';
import styles from './CourseDetailPage.module.css';
import { courses } from '../../data/siteData';
import nsdcLogo from '../../assets/nsdc.png';
import promoImg from '../../assets/promo_thinking.png';
import studentsBanner from '../../assets/students_banner.png';
import { testimonials } from '../../data/testimonials';
const CourseDetailPage = () => {
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const testimonialsRef = useRef(null);

  const [heroFormData, setHeroFormData] = useState({ name: '', phone: '', email: '' });
  const [heroSubmitting, setHeroSubmitting] = useState(false);
  const [heroSuccess, setHeroSuccess] = useState(false);

  const [expandedCurriculumIdx, setExpandedCurriculumIdx] = useState(0);
  const toggleCurriculum = (idx) => {
    setExpandedCurriculumIdx(prev => prev === idx ? -1 : idx);
  };

  const mockCurriculum = [
    {
      title: "Advanced Math & Programming",
      duration: "5 Weeks",
      topics: [
        "Introduction to Data Science",
        "Python Programming for Data Science",
        "Data Analysis & Data Handling",
        "Database Management & SQL",
        "Statistics & Mathematics for Data Science",
        "Deep Learning & AI Fundamentals"
      ]
    },
    {
      title: "Advanced Math & Programming",
      duration: "5 Weeks",
      topics: [
        "Introduction to Data Science",
        "Python Programming for Data Science",
        "Data Analysis & Data Handling",
        "Database Management & SQL",
        "Statistics & Mathematics for Data Science",
        "Deep Learning & AI Fundamentals"
      ]
    },
    {
      title: "Advanced Math & Programming",
      duration: "5 Weeks",
      topics: [
        "Introduction to Data Science",
        "Python Programming for Data Science",
        "Data Analysis & Data Handling",
        "Database Management & SQL",
        "Statistics & Mathematics for Data Science",
        "Deep Learning & AI Fundamentals"
      ]
    }
  ];

  const handleHeroChange = (e) => {
    setHeroFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleHeroSubmit = async (type) => {
    if (!heroFormData.name.trim()) {
      alert("Please enter your name");
      return;
    }
    if (!heroFormData.phone.trim()) {
      alert("Please enter your phone number");
      return;
    }
    if (type === 'enroll' && !heroFormData.email.trim()) {
      alert("Please enter your email address");
      return;
    }

    setHeroSubmitting(true);

    const payload = {
      _subject: type === 'enroll' ? `New Enrollment Lead: ${course ? course.title : 'General'}` : `New Callback Request: ${course ? course.title : 'General'}`,
      _captcha: 'false',
      FormType: type === 'enroll' ? 'Enrollment' : 'Callback Request',
      Name: heroFormData.name,
      Phone: heroFormData.phone,
      Email: heroFormData.email || 'N/A',
      PageURL: window.location.href,
      CourseOfInterest: course ? course.title : 'N/A',
      SubmissionTime: new Date().toLocaleString()
    };

    try {
      const response = await fetch("https://formsubmit.co/ajax/nishadmt.py@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      
      if (!response.ok) {
        throw new Error('Server error or form API is down');
      }

      setHeroSuccess(true);
    } catch (error) {
      console.error(error);
      const mailtoLink = `mailto:nishadmt.py@gmail.com?subject=${encodeURIComponent(payload._subject)}&body=${encodeURIComponent(
        `Name: ${payload.Name}\nPhone: ${payload.Phone}\nEmail: ${payload.Email}\nCourse: ${payload.CourseOfInterest}\nPage: ${payload.PageURL}`
      )}`;
      
      if (window.confirm("Our form server is currently experiencing issues. Would you like to send your details via your email app instead?")) {
        window.location.href = mailtoLink;
      }
    } finally {
      setHeroSubmitting(false);
    }
  };

  const scrollTestimonials = (direction) => {
    if (testimonialsRef.current) {
      const scrollAmount = 320; // card width + gap
      testimonialsRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const path = window.location.pathname;
    const slug = path.split('/').pop();
    const foundCourse = courses.find(c => c.slug === slug);

    if (foundCourse) {
      setCourse(foundCourse);
    } else {
      setCourse(null);
    }
    setLoading(false);

    // Reset hero form states when switching courses
    setHeroFormData({ name: '', phone: '', email: '' });
    setHeroSubmitting(false);
    setHeroSuccess(false);

    window.scrollTo(0, 0);
  }, [window.location.pathname]);

  if (loading) return <div className={styles.loading}>Loading Course Details...</div>;
  if (!course) return <div className={styles.error}>Course not found</div>;

  const handleOpenModal = (type) => {
    window.dispatchEvent(new CustomEvent('openModal', { 
      detail: { 
        type, 
        courseTitle: course.title 
      } 
    }));
  };

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroBox}>
            <div className={styles.heroMain}>
              <div className={`${styles.heroLeft} reveal-group`}>
                <span className={styles.tag}>Best Tech Courses in Calicut</span>
                <h1 className={styles.title}>
                  {course.title} Course <br />
                  {course.location ? `in ${course.location}` : 'in Calicut'}
                </h1>
                <p className={styles.description}>{course.desc}</p>

                <div className={styles.avatarBadge}>
                  <div className={styles.avatars}>
                    <img src="https://i.pravatar.cc/150?u=1" alt="mentor" />
                    <img src="https://i.pravatar.cc/150?u=2" alt="mentor" />
                    <img src="https://i.pravatar.cc/150?u=3" alt="mentor" />
                  </div>
                  <span className={styles.avatarText}>Learn in-demand tech skills through hands</span>
                </div>
                {/* infoBar moved here to span full width */}
            <div className={styles.infoBar}>
              <div className={`${styles.infoItem} ${styles.googleReviewItem}`}>
                <div className={styles.googleRating}>
                  <img src="https://www.vectorlogo.zone/logos/google/google-ar21.svg" alt="Google" />
                  <div className={styles.ratingText}>
                    <span className={styles.ratingVal}>4.9 Reviews</span>
                  </div>
                </div>
              </div>
              <div className={`${styles.infoDivider} ${styles.googleReviewItem}`}></div>

              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Duration</span>
                <span className={styles.infoValue}>{course.duration || '4 Months'}</span>
              </div>
              <div className={styles.infoDivider}></div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Class Mode</span>
                <span className={styles.infoValue}>Online / Offline</span>
              </div>
              <div className={styles.infoDivider}></div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Next Batch Starts</span>
                <span className={styles.infoValue}>18 - June - 2026</span>
              </div>
            </div>
              </div>

              <div className={`${styles.heroRight} reveal`}>
                <div className={styles.formCard}>
                  {heroSuccess ? (
                    <div className={styles.successCard}>
                      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.successIcon}>
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                      <h3 className={styles.successTitle}>Success!</h3>
                      <p className={styles.successText}>We have received your details. Our team will contact you soon.</p>
                    </div>
                  ) : (
                    <>
                      <div className={styles.heroInputGroup}>
                        <input 
                          type="text" 
                          name="name" 
                          value={heroFormData.name} 
                          onChange={handleHeroChange} 
                          placeholder="Full Name" 
                          required 
                        />
                      </div>
                      <div className={styles.heroInputGroup}>
                        <input 
                          type="tel" 
                          name="phone" 
                          value={heroFormData.phone} 
                          onChange={handleHeroChange} 
                          placeholder="Phone Number" 
                          required 
                        />
                      </div>
                      <div className={styles.heroInputGroup}>
                        <input 
                          type="email" 
                          name="email" 
                          value={heroFormData.email} 
                          onChange={handleHeroChange} 
                          placeholder="Email Address" 
                          required 
                        />
                      </div>
                      <button 
                        className={styles.heroEnrollBtn}
                        onClick={() => handleHeroSubmit('enroll')}
                        disabled={heroSubmitting}
                      >
                        {heroSubmitting ? 'Submitting...' : 'Enroll Now'}
                      </button>
                      <button 
                        className={styles.heroCallbackBtn}
                        onClick={() => handleHeroSubmit('callback')}
                        disabled={heroSubmitting}
                      >
                        {heroSubmitting ? 'Submitting...' : 'Request a Call back'}
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>


            
          </div>
        </div>
      </section>

      {/* Course Overview Section */}
      <section className={styles.overviewSection}>
        <div className={styles.container}>
          <div className={styles.overviewHeader}>
            <div className={`${styles.overviewHeaderLeft} reveal`}>
              <h2><span className={styles.highlightBlue}>{course.title}</span> Course with the industry experts</h2>
              <p>{course.title} Course with the industry experts in Overview. Learn in-demand tech skills through hands-on training, real-world projects, and expert mentorship designed</p>
            </div>
            <div className={`${styles.overviewHeaderRight} reveal`}>
              <div className={styles.statGrid}>
                <div className={styles.statItem}>
                  <div className={styles.statIconWrapper}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
                  </div>
                  <div className={styles.statInfo}>
                    <h3>25000+</h3>
                    <p>Students Yearly</p>
                  </div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statIconWrapper}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>
                  </div>
                  <div className={styles.statInfo}>
                    <h3>100%</h3>
                    <p>Placement Assistance Assurance</p>
                  </div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statIconWrapper}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
                  </div>
                  <div className={styles.statInfo}>
                    <h3>25+</h3>
                    <p>High tech classrooms</p>
                  </div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statIconWrapper}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  <div className={styles.statInfo}>
                    <h3>200+</h3>
                    <p>Expert Faculties</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.overviewBody}>
            <div className={`${styles.overviewContentLeft} reveal`}>
              <span className={styles.subTag}>Key Features: Executive Diploma in {course.title}</span>
              <h3 className={styles.overviewHeading}>{course.title} Course Overview</h3>
              <p className={styles.overviewParagraph}>
                The mentors were incredibly supportive and always ready to help. I especially loved the hands-on projects they made learning much more effective. Joining this course was one of the best decisions I've made. The training was practical, easy to understand.The mentors were incredibly
              </p>
              <p className={styles.overviewParagraph}>
                The mentors were incredibly supportive and always ready to help. I especially loved the hands-on projects they made learning much more effective.
              </p>

              <h3 className={styles.overviewHeadingSmall}>What You'll Learn</h3>
              <div className={styles.learnListGrid}>
                {course.whatYouWillLearn && course.whatYouWillLearn.slice(0, 4).map((item, idx) => (
                  <div className={styles.learnListItem} key={idx}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>{item.title}: {item.desc}</span>
                  </div>
                ))}
              </div>

              <h3 className={styles.overviewHeadingSmall}>Tools You'll Learn</h3>
              <div className={styles.toolsLearnGrid}>
                {course.tools && course.tools.slice(0, 6).map((tool, idx) => (
                  <div className={styles.toolLearnCard} key={idx}>
                    <div className={styles.toolLearnIcon}>
                      <span style={{ fontSize: '1.2rem' }}>{tool.icon || '⚙️'}</span>
                    </div>
                    <span className={styles.toolLearnText}>{tool.name}</span>
                  </div>
                ))}
              </div>

              <span className={styles.subTag} style={{ marginTop: '50px' }}>Key Features: Executive Diploma in {course.title}</span>
              <h3 className={styles.overviewHeading}>Experience an all-new 2025 curriculum</h3>
              <div className={styles.curriculumContainer}>
                <div className={styles.curriculumTimeline}>
                  {mockCurriculum.map((node, idx) => {
                    const isExpanded = expandedCurriculumIdx === idx;
                    return (
                      <div className={styles.timelineNode} key={idx}>
                        <div className={styles.curriculumCard}>
                          <div className={styles.curriculumHeader} onClick={() => toggleCurriculum(idx)}>
                            <div>
                              <div className={styles.curriculumTitle}>{node.title}</div>
                              <div className={styles.curriculumMeta}>
                                <span className={styles.curriculumStars}>★★★★★</span>
                                <span>{node.duration}</span>
                              </div>
                            </div>
                            <button className={styles.curriculumToggle}>
                              {isExpanded ? '▲' : '▼'}
                            </button>
                          </div>
                          {isExpanded && (
                            <div className={styles.curriculumBody}>
                              <div className={styles.curriculumTopicsTitle}>Topics</div>
                              <ul className={styles.curriculumList}>
                                {node.topics.map((topic, tIdx) => (
                                  <li key={tIdx}>{tIdx + 1}. {topic}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
                  
            <div className={styles.overviewContentRight}>
              <div className={styles.eligibilityCard}>
                <h4>Find out If you're Eligible</h4>
                <form className={styles.eligibilityForm} onSubmit={async (e) => {
                  e.preventDefault();
                  const phone = e.target.phone.value;
                  const payload = {
                    _subject: `New Eligibility Check: ${course.title}`,
                    FormType: 'Eligibility Check',
                    Phone: phone,
                    CourseOfInterest: course.title,
                    PageURL: window.location.href,
                  };
                  try {
                    await fetch("https://formsubmit.co/ajax/nishadmt.py@gmail.com", {
                      method: "POST",
                      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                      body: JSON.stringify(payload)
                    });
                    alert("Thank you! We will contact you soon regarding your eligibility.");
                    e.target.reset();
                  } catch (err) {
                    alert("Something went wrong. Please try again.");
                  }
                }}>
                  <input type="tel" name="phone" placeholder="Phone Number" required />
                  <button type="submit">SUBMIT</button>
                </form>
              </div>
            </div>
          </div>
          <div className={styles.learnExperience}>Learn 15 + Essential Tools learning experience with us</div>
        </div>
      </section>

      {/* Partners Section */}
      <section className={styles.partners}>
        <div className={styles.container}>
          <div className={`${styles.partnersScroll} reveal-group`}>
            {/* Hiring Partner Logos */}
            {[
              { src: "https://www.vectorlogo.zone/logos/amazon/amazon-ar21.svg", alt: "Amazon" },
              { src: "https://www.vectorlogo.zone/logos/microsoft/microsoft-ar21.svg", alt: "Microsoft" },
              { src: "https://www.vectorlogo.zone/logos/google/google-ar21.svg", alt: "Google" },
              { src: "https://www.vectorlogo.zone/logos/accenture/accenture-ar21.svg", alt: "Accenture" },
              { src: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg", alt: "Infosys" },
              { src: "https://www.vectorlogo.zone/logos/adobe/adobe-ar21.svg", alt: "Adobe" },
              { src: "https://www.vectorlogo.zone/logos/oracle/oracle-ar21.svg", alt: "Oracle" },
              { src: "https://www.vectorlogo.zone/logos/intel/intel-ar21.svg", alt: "Intel" },
            ].map((logo, idx) => (
              <img key={idx} src={logo.src} alt={logo.alt} className={styles.partnerLogo} />
            ))}
          </div>
        </div>
      </section>

      {/* New Promo Banners */}
      <section className={styles.newPromoSection}>
        <div className={styles.container}>
          <div className={`${styles.newPromoGrid} reveal-group`}>
            {/* Left Banner with Image */}
            <div className={styles.newPromoCard}>
              <div className={styles.newPromoContent}>
                <h3>Learn in-demand tech skills through hands-on training, real-world projects, and expert mentorship designed</h3>
                <button className={styles.newPromoBtn}></button>
              </div>
              <img src={promoImg} alt="Student thinking" className={styles.newPromoImg} />
            </div>
            {/* Right Banner without Image */}
            <div className={styles.newPromoCard}>
              <div className={styles.newPromoContent}>
                <h3>Learn in-demand tech skills through hands-on</h3>
                <p style={{ fontSize: '0.8rem', marginTop: '-10px', marginBottom: '20px', lineHeight: '1.4' }}>
                  Learn in-demand tech skills through hands-on training, real-world projects, and expert mentorship designed
                </p>
                <button className={styles.newPromoBtn}></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <div className={`${styles.featuresHeader} reveal`}>
            <h2><span style={{ color: '#1e3a8a' }}>Learn in-demand tech skills</span> through hands-on training, real-world projects, and expert mentorship designed</h2>
            <p>Learn in-demand tech skills through hands-on training, real-world projects, and expert mentorship designed. Learn in-demand tech skills through hands-on training, real-world projects, and expert mentorship designed</p>
          </div>
          
          <div className={`${styles.featuresGrid} reveal-group`}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div className={styles.featureCard} key={i}>
                <div className={styles.featureIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>
                </div>
                <h4>Learn in-demand tech skills</h4>
                <p>hands-on training, real-world projects, and expert mentorship designed</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Split Info Section */}
      <section className={styles.splitInfoSection}>
        <div className={styles.container}>
          <h2 className={`${styles.splitInfoTitle} reveal`}>
            <span style={{color: '#1e3a8a'}}>Learn in-demand tech skills</span> through hands-on training, real-world projects, and expert mentorship designed
          </h2>
          <div className={`${styles.splitInfoGrid} reveal-group`}>
            <div className={styles.splitInfoLeft}>
              <img src={promoImg} alt="Student" className={styles.splitInfoImg} />
            </div>
            <div className={styles.splitInfoRight}>
              <div className={styles.splitInfoBox}></div>
              <p className={styles.splitInfoDesc}>
                The mentors were incredibly supportive and always ready to help. I especially loved the hands-on projects they made learning much more effective. Joining this course was one of the best decisions I've made. The training was practical, easy to understand. The mentors were incredibly
              </p>
              <div className={styles.splitInfoBullets}>
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={styles.bulletItem}>
                    <div className={styles.checkIcon}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <span>The mentors were incredibly supportive</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <section className={styles.mentorsSection}>
        <div className={styles.container}>
          <h2 className={`${styles.sectionTitleLeft} reveal`}>Learn 15 + Essential Tools learning experience with us</h2>
          <div className={`${styles.mentorsGrid} reveal-group`}>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className={styles.mentorCard}>
                <div className={styles.mentorTop}>
                  <img src={`https://i.pravatar.cc/300?u=mentor${i}`} alt="James Alex" className={styles.mentorImg} />
                </div>
                <div className={styles.mentorInfo}>
                  <h4>James Alex</h4>
                  <p className={styles.mentorRole}>CISSP, CISM, CEH, India</p>
                  <p className={styles.mentorWork}>Work @</p>
                  <p className={styles.mentorDesc}>Cyber security skills with hands-on training. Learn ethical hacking and protect real-world systems.</p>
                  <div className={styles.mentorSocial}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" />
                    <span>View Profile</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonials Grid */}
      <section className={styles.testimonialsSection}>
        <div className={styles.container}>
          <h2 className={`${styles.sectionTitleLeft} reveal`}>What our Students says about their learning experience with us</h2>
          <div className={`${styles.testimonialsGrid} reveal-group`}>
            {Array.from({ length: 10 }).map((_, idx) => {
              const testimonial = testimonials[idx];
              return (
                <div key={idx} className={styles.testimonialCardOutline}>
                  {testimonial && (
                    <>
                      <p className={styles.testimonialTextSmall}>
                        {testimonial.text}
                      </p>
                      <div className={styles.testimonialAuthorSmall}>
                        <img src={`https://i.pravatar.cc/100?u=student${testimonial.id}`} alt={testimonial.name} />
                        <div className={styles.authorInfoSmall}>
                          <h5>{testimonial.name}</h5>
                          <p>{testimonial.role}</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
};



export default CourseDetailPage;
