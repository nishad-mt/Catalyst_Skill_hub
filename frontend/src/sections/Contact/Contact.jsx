// src/sections/Contact/Contact.jsx
import { useState } from 'react';
import { contactDetails, courseOptions } from '../../data/siteData';
import styles from './Contact.module.css';

export default function Contact() {
  const [form, setForm]       = useState({ fname: '', lname: '', phone: '', email: '', course: '', message: '' });
  const [errors, setErrors]   = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.fname.trim()) e.fname  = 'First name is required';
    if (!form.phone.trim()) e.phone  = 'Phone number is required';
    if (!form.email.trim()) e.email  = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email';
    return e;
  };

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    // Simulate async submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <div className={styles.grid}>

          {/* ---- Left: info ---- */}
          <div className={styles.left}>
            <div className={styles.sectionTag}>Contact Us</div>
            <h2 className={styles.title}>Start Your Tech Journey Today</h2>
            <p className={styles.sub}>
              Fill out the form and our counselors will reach out within 24 hours.
              No pressure — just honest, expert guidance.
            </p>

            <ul className={styles.contactList}>
              {contactDetails.map((item) => (
                <li key={item.id} className={styles.contactItem}>
                  <div className={styles.contactIcon}>{item.icon}</div>
                  <div>
                    <strong className={styles.contactLabel}>{item.label}</strong>
                    <span className={styles.contactValue}>{item.value}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* ---- Right: form ---- */}
          <div className={styles.formCard}>
            {!submitted ? (
              <>
                <h3 className={styles.formTitle}>Send Us a Message</h3>

                <form onSubmit={handleSubmit} noValidate>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>First Name</label>
                      <input
                        type="text"
                        placeholder="Arjun"
                        value={form.fname}
                        onChange={handleChange('fname')}
                        className={`${styles.input} ${errors.fname ? styles.inputError : ''}`}
                      />
                      {errors.fname && <span className={styles.errorMsg}>{errors.fname}</span>}
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>Last Name</label>
                      <input
                        type="text"
                        placeholder="Nair"
                        value={form.lname}
                        onChange={handleChange('lname')}
                        className={styles.input}
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label}>Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={handleChange('phone')}
                      className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
                    />
                    {errors.phone && <span className={styles.errorMsg}>{errors.phone}</span>}
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label}>Email Address</label>
                    <input
                      type="email"
                      placeholder="arjun@email.com"
                      value={form.email}
                      onChange={handleChange('email')}
                      className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                    />
                    {errors.email && <span className={styles.errorMsg}>{errors.email}</span>}
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label}>Course of Interest</label>
                    <select
                      value={form.course}
                      onChange={handleChange('course')}
                      className={styles.input}
                    >
                      <option value="">Select a course...</option>
                      {courseOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label}>Message (optional)</label>
                    <textarea
                      placeholder="Tell us about your background or any questions you have..."
                      rows={4}
                      value={form.message}
                      onChange={handleChange('message')}
                      className={styles.input}
                    />
                  </div>

                  <button
                    type="submit"
                    className={styles.submitBtn}
                    disabled={loading}
                  >
                    {loading ? 'Sending…' : 'Send Enquiry →'}
                  </button>
                </form>
              </>
            ) : (
              <div className={styles.success}>
                <div className={styles.successIcon}>🎉</div>
                <h3 className={styles.successTitle}>Message Received!</h3>
                <p className={styles.successDesc}>
                  Thank you for reaching out. Our counselor will contact you within 24 hours.
                </p>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
