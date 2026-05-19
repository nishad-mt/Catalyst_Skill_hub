// src/sections/Contact/Contact.jsx
import { useState, useEffect } from 'react';
import { testimonials, alumni } from '../../data/siteData';
import styles from './Contact.module.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '' });
  const [loading, setLoading] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const currentTestimonial = testimonials[activeIdx];

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      _subject: 'New Contact Form Submission',
      _captcha: 'false',
      FormType: 'General Contact',
      Name: form.name,
      Phone: form.phone,
      Email: form.email,
      PageURL: window.location.href,
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

      alert('Message Sent Successfully! We will get back to you soon.');
      setForm({ name: '', phone: '', email: '' });
    } catch (error) {
      console.error(error);
      const mailtoLink = `mailto:nishadmt.py@gmail.com?subject=${encodeURIComponent(payload._subject)}&body=${encodeURIComponent(
        `Name: ${payload.Name}\nPhone: ${payload.Phone}\nEmail: ${payload.Email}\nPage: ${payload.PageURL}`
      )}`;
      
      if (window.confirm("Our form server is currently experiencing issues. Would you like to send your details via your email app instead?")) {
        window.location.href = mailtoLink;
        setForm({ name: '', phone: '', email: '' });
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
              <a href="mailto:catalyst.tech@gmail.com" className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <span className={styles.infoLabel}>Email Us</span>
                  <span className={styles.infoValue}>catalyst.tech@gmail.com</span>
                </div>
              </a>

              <a href="tel:+918157860663" className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <span className={styles.infoLabel}>Call Us</span>
                  <span className={styles.infoValue}>+91 8157860663</span>
                </div>
              </a>
            </div>

            <div className={styles.testimonialBox}>
              <div
                key={activeIdx}
                className={styles.testimonialContent}
              >
                <p className={styles.testimonialText}>
                  {currentTestimonial.text}
                </p>
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
                <label className={styles.label}>Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={handleChange('name')}
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Phone Number</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={handleChange('phone')}
                  className={styles.input}
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
                  required
                />
              </div>



              <button
                type="submit"
                className={styles.submitBtn}
                disabled={loading}
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
