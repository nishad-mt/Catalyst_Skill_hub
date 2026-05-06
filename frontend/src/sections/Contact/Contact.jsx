// src/sections/Contact/Contact.jsx
import { useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const [form, setForm]       = useState({ name: '', phone: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

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
              <p className={styles.testimonialText}>
                I had a great learning experience at Catalyst Kannur. The faculty are highly knowledgeable and supportive, always ready to clarify doubts and guide students in the right direction.
              </p>
              <div className={styles.testimonialAuthor}>
                <img src="https://i.pravatar.cc/150?img=47" alt="Alex" className={styles.authorImg} />
                <div>
                  <h4 className={styles.authorName}>Alex</h4>
                  <p className={styles.authorRole}>Tech Specialist</p>
                </div>
              </div>
              <div className={styles.dots}>
                <span className={styles.dotActive}></span>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
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
                {loading ? 'SENDING...' : 'SEND'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
