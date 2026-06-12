import { useState, useEffect } from 'react';
import { testimonials, courses, centers } from '../../data/siteData';
import styles from './Contact.module.css';
import { Turnstile } from '@marsidev/react-turnstile';

export default function Contact({ navigate }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', course: '', center: '' });
  const [loading, setLoading] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const [turnstileToken, setTurnstileToken] = useState(null);

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [activeIdx]); // Recreate interval on index change to avoid immediately sliding after a manual swipe

  const currentTestimonial = testimonials[activeIdx];

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      setActiveIdx((prev) => (prev + 1) % testimonials.length);
    } else if (isRightSwipe) {
      setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
  };

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!turnstileToken) {
      alert("Please complete the captcha.");
      return;
    }
    setLoading(true);

    const payload = {
      name: form.name,
      phone: form.phone,
      email: form.email || "N/A",
      course: form.course || "N/A",
      center: form.center || "N/A"
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
        throw new Error('Server error or form API is down');
      }

      setForm({ name: '', phone: '', email: '', course: '', center: '' });
      setTurnstileToken(null);
      navigate('/thank-you');
    } catch (error) {
      console.error(error);
      const mailtoLink = `mailto:hello@catalysthub.in?subject=New Contact&body=${encodeURIComponent(
        `Name: ${payload.name}\nPhone: ${payload.phone}\nEmail: ${payload.email}\nCourse: ${payload.course}\nCenter: ${payload.center}`
      )}`;

      if (window.confirm("Our form server is currently experiencing issues. Would you like to send your details via email instead?")) {
        window.location.href = mailtoLink;
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <div className={styles.contactWrapper}>

          {/* Left Info Card */}
          <div className={`${styles.infoCard} reveal`}>
            <h2 className={styles.title}>Discuss Your<br />Concerns With us..</h2>
            <p className={styles.sub}>
              Have questions about our courses? Fill out the form and our team
              will get back to you with the right guidance.
            </p>

            <div className={styles.contactInfo}>
              <a href="mailto:hello@catalysthub.in" className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <span className={styles.infoLabel}>Email Us</span>
                  <span className={styles.infoValue}>hello@catalysthub.in</span>
                </div>
              </a>

              <a href="tel:+91 9037946833" className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <span className={styles.infoLabel}>Call Us</span>
                  <span className={styles.infoValue}>+91 9037946833</span>
                </div>
              </a>
            </div>

            <div 
              className={styles.testimonialBox}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div key={activeIdx} className={styles.testimonialContent}>
                <p className={styles.testimonialText}>{currentTestimonial.text}</p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.initialsCircle}>
                    {currentTestimonial.initials}
                  </div>
                  <div>
                    <h4 className={styles.authorName}>{currentTestimonial.name}</h4>
                    <p className={styles.authorRole}>{currentTestimonial.role}</p>
                  </div>
                </div>
              </div>

              <div className={styles.dots}>
                {testimonials.map((_, i) => (
                  <span
                    key={i}
                    className={i === activeIdx ? styles.dotActive : styles.dot}
                    onClick={() => setActiveIdx(i)}
                  ></span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className={`${styles.formContainer} reveal`}>
            <form onSubmit={handleSubmit}>

              <div className={styles.formGroup}>
                <label className={styles.label}>
                  <span className={styles.requiredStar}>*</span> Name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={handleChange('name')}
                  className={styles.input}
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className={styles.twoCol}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    <span className={styles.requiredStar}>*</span> Phone Number
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={handleChange('phone')}
                    className={styles.input}
                    placeholder="+91 00000 00000"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Email ID</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={handleChange('email')}
                    className={styles.input}
                    placeholder="you@example.com"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Course</label>
                  <select
                    value={form.course}
                    onChange={handleChange('course')}
                    className={styles.input}
                  >
                    <option value="">Select a course</option>
                    {courses.map((course) => (
                      <option key={course.id} value={course.title}>
                        {course.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Center</label>
                  <select
                    value={form.center}
                    onChange={handleChange('center')}
                    className={styles.input}
                  >
                    <option value="">Select a location</option>
                    {centers.map((center) => (
                      <option key={center.id} value={center.name}>
                        {center.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                <Turnstile siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY || "1x00000000000000000000AA"} onSuccess={(token) => setTurnstileToken(token)} />
              </div>

              <button
                type="submit"
                className={styles.submitBtn}
                disabled={loading || !turnstileToken}
              >
                {loading ? 'SENDING...' : 'SUBMIT'}
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}