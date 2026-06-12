import React, { useState, useEffect, useRef } from 'react';
import styles from './CenterDetailPage.module.css';
import { centers, courses } from '../../data/siteData';
import CourseCard from '../../components/CourseCard/CourseCard';
import campusImage from "../../assets/campus.jpg";
import { Turnstile } from '@marsidev/react-turnstile';

export default function CenterDetailPage({ navigate }) {
  const [center, setCenter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({ name: '', phone: '', course: '' });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState(null);
  const coursesRef = useRef(null);

  const advantagesData = [
  {
    title: "Industry Expert Mentorship",
    description: "Learn directly from experienced professionals and mentors with real industry knowledge."
  },
  {
    title: "Hands-On Practical Training",
    description: "Gain real-world experience through live projects, workshops, and practical sessions."
  },
  {
    title: "Career & Placement Support",
    description: "Receive career guidance, interview preparation, resume building, and placement assistance."
  },
  {
    title: "Modern Learning Environment",
    description: "Study in a professional environment equipped with updated tools and learning resources."
  },
  {
    title: "Flexible Learning Approach",
    description: "Access structured learning methods designed to support different learning styles."
  },
  {
    title: "Strong Professional Network",
    description: "Connect with mentors, peers, alumni, and industry professionals for future opportunities."
  },
  {
    title: "Project-Based Learning",
    description: "Build confidence by working on practical assignments and real application scenarios."
  },
  {
    title: "Skill Development for Future Careers",
    description: "Develop in-demand skills that help prepare you for competitive job markets."
  }
];

  useEffect(() => {
    const path = window.location.pathname;
    const slug = path.split('/').pop().toLowerCase();
    const foundCenter = centers.find(c => c.slug.toLowerCase() === slug);

    if (foundCenter) {
      setCenter(foundCenter);
      
      // Dynamic SEO Title & Meta Description Update
      document.title = `${foundCenter.fullName} | Best Tech Courses in ${foundCenter.name}`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', `${foundCenter.desc} Offered programs: ${foundCenter.courses.join(', ')}.`);
      }

      // Pre-fill the first course of the center in the form default selection
      if (foundCenter.courses && foundCenter.courses.length > 0) {
        const firstCourse = courses.find(c => c.slug === foundCenter.courses[0]);
        setFormData({ name: '', phone: '', course: firstCourse ? firstCourse.title : '' });
      }
    } else {
      setCenter(null);
    }
    setLoading(false);
    setSuccess(false);
    setTurnstileToken(null);
    window.scrollTo(0, 0);
  }, [window.location.pathname]);

  if (loading) {
    return <div className={styles.loadingContainer}>Loading Center Details...</div>;
  }

  if (!center) {
    return (
      <div className={styles.errorContainer}>
        <h2>Center Not Found</h2>
        <p>Sorry, the campus location you are looking for could not be found.</p>
        <button className="btn-primary" onClick={() => navigate('/')}>Back to Home</button>
      </div>
    );
  }

  // Get full course objects for the courses offered at this center
  const offeredCourses = courses.filter(c => center.courses.includes(c.slug));

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e, type = 'Callback Form') => {
    if (e) e.preventDefault();

    if (!formData.name.trim()) {
      alert("Please enter your name");
      return;
    }
    if (!formData.phone.trim()) {
      alert("Please enter your phone number");
      return;
    }
    if (!turnstileToken) {
      alert("Please complete the captcha.");
      return;
    }

    setSubmitting(true);

    const payload = {
      name: formData.name,
      phone: formData.phone,
      email: "N/A",
      course: formData.course || "Not Selected",
      center: center.name,
      pageUrl: window.location.href,
      turnstileToken: turnstileToken
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      
      if (!response.ok) {
        throw new Error('Server error');
      }

      setSuccess(true);
      setTurnstileToken(null);
    } catch (error) {
      console.error(error);
      const mailtoLink = `mailto:hello@catalysthub.in?subject=New Lead&body=${encodeURIComponent(
        `Name: ${payload.name}\nPhone: ${payload.phone}\nCourse: ${payload.course}\nCenter: ${payload.center}`
      )}`;
      
      if (window.confirm("Our form server is currently experiencing issues. Would you like to send your details via email instead?")) {
        window.location.href = mailtoLink;
      }
    } finally {
      setSubmitting(false);
    }
  };

  const handleScrollToCourses = () => {
    coursesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={styles.centerPage}>
      {/* Top Announcement Strip */}
      {center.announcement && (
        <div className={styles.announcementStrip}>
          <div className="container">
            <span className={styles.announcementText}>{center.announcement}</span>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroGrid}>
            
            {/* Left Content */}
            <div className={styles.heroLeft}>
              <span className={styles.campusBadge}>
                {center.badge ? `${center.badge} — Catalyst Hub` : 'Offline Campus — Catalyst Hub'}
              </span>
              <h1 className={styles.heroTitle}>
                {center.heroTagline || `Best Tech Career Courses in ${center.name}`}
              </h1>
              <p className={styles.heroDesc}>
                {center.heroDesc || `Join our flagship campus in ${center.name} with state-of-the-art labs, expert faculties, and placement cells to boost your tech career.`}
              </p>
              <div className={styles.heroActions}>
                <button className={styles.exploreBtn} onClick={handleScrollToCourses}>
                  Explore All Courses
                </button>
              </div>
            </div>

            {/* Right Form Card */}
            <div className={styles.heroRight}>
              <div className={styles.formCard}>
                <h3 className={styles.formTitle}>Begin your Career in Tech field</h3>
                
                {success ? (
                  <div className={styles.successState}>
                    <div className={styles.successIcon}>✓</div>
                    <h4>Request Submitted!</h4>
                    <p>Thank you! Our career coordinators will call you back shortly.</p>
                    <button 
                      className={styles.resetBtn} 
                      onClick={() => {
                        setSuccess(false);
                        setFormData(prev => ({ ...prev, name: '', phone: '' }));
                      }}
                    >
                      Submit Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={(e) => handleSubmit(e, 'Center Hero Form')}>
                    <div className={styles.inputGroup}>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Name" 
                        required 
                        className={styles.inputField}
                      />
                    </div>
                    <div className={styles.inputGroup}>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Phone Number" 
                        required 
                        className={styles.inputField}
                      />
                    </div>
                    <div className={styles.inputGroup}>
                      <select 
                        name="course"
                        value={formData.course}
                        onChange={handleInputChange}
                        required 
                        className={styles.selectField}
                      >
                        <option value="" disabled>Select Course</option>
                        {offeredCourses.map(c => (
                          <option key={c.id} value={c.title}>{c.title}</option>
                        ))}
                      </select>
                    </div>
                    <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                      <Turnstile 
                        siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY} 
                        onSuccess={(token) => setTurnstileToken(token)} 
                        onError={(err) => console.error("Turnstile Error:", err)}
                      />
                    </div>
                    <button 
                      type="submit" 
                      disabled={submitting} 
                      className={styles.submitBtn}
                    >
                      {submitting ? 'SUBMITTING...' : 'SUBMIT'}
                    </button>
                    <div className={styles.requestCallText} onClick={(e) => handleSubmit(null, 'Callback Request Quick Link')}>
                      Request a Call Back
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Bar */}
      {center.stats && center.stats.length > 0 && (
        <section className={styles.statsBar}>
          <div className="container">
            <div className={styles.statsGrid}>
              {center.stats.map((stat, idx) => (
                <div key={idx} className={styles.statCard}>
                  <h3 className={styles.statNum}>{stat.num}</h3>
                  <p className={styles.statLabel}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      
      {/* Offered Courses Grid */}
      <section ref={coursesRef} className={styles.coursesSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionSubtitle}>Programs Offered</span>
            <h2>Master In-Demand Tech Skills</h2>
            <p>Our top-rated career courses designed to get you hired. Highly recommended for students and professionals in {center.name}.</p>
          </div>
          
          {offeredCourses.length > 0 ? (
            <div className={styles.coursesGrid}>
              {offeredCourses.map(course => (
                <CourseCard key={course.id} course={course} navigate={navigate} />
              ))}
            </div>
          ) : (
            <div className={styles.noCourses}>
              <p>No courses listed for this center. Please check other campuses or contact support.</p>
            </div>
          )}
        </div>
      </section>

      {/* Map and Contact Details Section */}
      <section className={styles.contactMapSection}>
  <div className="container">

    <h2 className={styles.sectionTitle}>Campus Near You</h2>

    <div className={styles.contactMapGrid}>

      {/* LEFT — MAP */}

      <div className={styles.mapCard}>
        <div className={styles.iframeWrapper}>
          <iframe
            title={`Google Map - ${center.name}`}
            src={`https://maps.google.com/maps?q=${encodeURIComponent(center.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>

      {/* RIGHT — INFO PANEL */}

      <div className={styles.infoPanel}>

        <div className={styles.addressBox}>
          <h4>Main Campus*</h4>

          <div className={styles.locationCard}>
            📍 {center.address}
          </div>
        </div>

        <div className={styles.addressBox}>
          <h4>Other Campuses*</h4>

          <div className={styles.locationCard}>
            📍 Admissions / Training Centers Across Kerala
          </div>
        </div>

        <div className={styles.bottomGrid}>

          <div className={styles.contactMiniCard}>
            <h5>📞 Call Us</h5>

            <a href={`tel:${center.phone.replace(/\s+/g,'')}`}>
              {center.phone}
            </a>

            <p>Mon to Sun | 9am to 7pm</p>
          </div>

          <div className={styles.contactMiniCard}>
            <h5>✉️ Email Support</h5>

            <a href={`mailto:${center.email}`}>
              {center.email}
            </a>

            <p>Send us your query anytime!</p>
          </div>

        </div>

      </div>

    </div>

  </div>
</section>

      {/* Premium Campus Grid Section (Section 1) */}
      <section className={styles.campusGridSection}>
        <div className="container">
          <div className={styles.campusGridHeader}>
            <h2 className={styles.skilled}>
              <span className={styles.blueText}>Become a Skilled Data</span> & Technology <br /> Professional
            </h2>
            <p className={styles.campusGridSubtitle}>
              The mentors were incredibly supportive and always ready to help. I especially loved the hands-on projects they 
              <br />
              A place where we can build our confidence at industry level through the live projects that they give us
            </p>
          </div>

          <div className={styles.campusGridLayout}>
            {/* Left side: Stats grid */}
            <div className={styles.campusStatsLeft}>
              {/* Row 1: Two cards */}
              <div className={styles.statsRowTop}>
                <div className={styles.blueStatCard}>
                  <h3>24000+</h3>
                  <p>Become a Skilled Data & Technology Professional</p>
                </div>
                <div className={styles.blueStatCard}>
                  <h3>250+</h3>
                  <p>Become a Skilled Data & Technology Professional</p>
                </div>
              </div>

              {/* Row 2: Three cards */}
              <div className={styles.statsRowBottom}>
                <div className={`${styles.blueStatCard} ${styles.col1}`}>
                  <h3>700+</h3>
                  <p>Become a Skilled Data & Technology</p>
                </div>
                <div className={`${styles.blueStatCard} ${styles.col2}`}>
                  <h4>Become a Skilled Data & Technology</h4>
                  <p>The mentors were incredibly supportive and always ready to help. I especially loved the hands-on projects they The mentors</p>
                </div>
                <div className={`${styles.blueStatCard} ${styles.col3}`}>
                  <h3>100%</h3>
                  <p>Become a Skilled Data & Technology</p>
                </div>
              </div>
            </div>

            {/* Right side: Campus Image */}
            <div className={styles.campusImageRight}>
              <img
                src={campusImage}
                alt="Catalyst Campus Building"
                className={styles.campusImg}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Grid of 8 checklist cards (Section 2) */}
      <section className={styles.skillsGridSection}>
        <div className="container">
          <div className={styles.skillsGridHeader}>
            <h2 className={styles.header}>
              Become a Skilled Data
            </h2>
            <p className={styles.Subtitle}>
              The mentors were incredibly supportive and always ready to help. I especially loved the hands-on projects they 
              <br />
              A place where we can build our confidence at industry level through the live projects that they give us
            </p>
          </div>

          <div className={styles.skillsCardsGrid}>
            {advantagesData.map((item, index) => (
              <div className={styles.skillCheckCard} key={index}>

                <div className={styles.checkIconWrapper}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={styles.checklistIcon}
                  >
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                    <path d="M9 14l2 2 4-4"></path>
                  </svg>
                </div>

                <h4>{item.title}</h4>
                <p>{item.description}</p>

              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
