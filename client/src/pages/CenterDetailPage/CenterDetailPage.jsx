import React, { useState, useEffect, useRef } from 'react';
import styles from './CenterDetailPage.module.css';
import { centers, courses } from '../../data/siteData';
import CourseCard from '../../components/CourseCard/CourseCard';
import campusImage from "../../assets/campus.jpg";
import campusLandingImg from "../../assets/campuslanding.png";
import { Turnstile } from '@marsidev/react-turnstile';
import Skills from '../../sections/Skills/Skills';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

export default function CenterDetailPage({ navigate }) {
  const [center, setCenter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({ name: '', phone: '', course: '' });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState(null);
  const coursesRef = useRef(null);

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
    return <NotFoundPage navigate={navigate} />;
  }

  // Display all courses available on the platform
  const offeredCourses = courses;

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
      setTimeout(() => {
        navigate('/thank-you');
      }, 1000);
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
              
              <div className={styles.heroQuickStats}>
                <div className={styles.quickStatItem}>
                  <strong>Mode</strong>
                  <span>Online/Offline</span>
                </div>
                <div className={styles.quickStatItem}>
                  <strong>Batch Start Date</strong>
                  <span>Jun 30, 2026</span>
                </div>
                <div className={styles.quickStatItem}>
                  <strong>Duration</strong>
                  <span>6 Months</span>
                </div>
              </div>

              <img 
                src={campusLandingImg} 
                alt="Campus View" 
                className={styles.mobileHeroImg} 
              />
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
                    <div 
                      className={styles.requestCallText}
                      style={{ userSelect: 'all', display: 'block' }}
                    >
                      For Enquiries Call:+91 97787 71175
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

            <div style={{ userSelect: 'all', fontWeight: '600', color: '#1d4ed8', fontSize: '1.1rem' }}>
              {center.phone}
            </div>

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

      <Skills />
    </div>
  );
}
