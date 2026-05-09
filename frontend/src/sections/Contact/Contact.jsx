// src/sections/Contact/Contact.jsx
import { useState, useEffect } from 'react';
import { testimonials, alumni } from '../../data/siteData';
import styles from './Contact.module.css';

export default function Contact() {
  const [form, setForm]       = useState({ name: '', phone: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);

  // Auto-slide effect for testimonials
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate async submission
    setTimeout(() => {
      setLoading(false);
      alert('Message Sent!');
      setForm({ name: '', phone: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <div className={styles.contactWrapper}>
          
          {/* Left Info Card */}
          <div className={styles.infoCard}>
            <h2 className={styles.title}>Discuss Your<br/>Concerns With us..</h2>
            <p className={styles.sub}>
              Have questions about our courses? Fill out the form and our team
              will get back to you with the right guidance.
            </p>

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
          <div className={styles.formContainer}>
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

              <div className={styles.formGroup}>
                <label className={styles.label}>Message</label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={handleChange('message')}
                  className={styles.textarea}
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
