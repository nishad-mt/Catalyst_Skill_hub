import React, { useState, useEffect } from 'react';
import styles from './ContactModal.module.css';

const ContactModal = ({ isOpen, onClose, type = 'callback', courseTitle = '' }) => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Lock body scroll when modal is open and reset form
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setFormData({ name: '', phone: '', email: '' });
      setIsSuccess(false);
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      _subject:
        type === "enroll"
          ? `🎓 New Enrollment Lead - ${courseTitle || "General"}`
          : "📞 New Callback Request",

      _captcha: "false",
      _template: "table",

      LeadType: type === "enroll" ? "Enrollment" : "Callback Request",

      Name: formData.name,
      Phone: formData.phone,
      Email: formData.email || "N/A",

      Course: courseTitle || "N/A",

      Source: "Course Page",
      Referrer: document.referrer || "Direct",

      PageURL: window.location.href,
      SubmittedAt: new Date().toLocaleString(),
    };

    try {
      const response = await fetch("https://formsubmit.co/ajax/hello@catalysthub.in", {
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

      setIsSuccess(true);
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (error) {
      console.error(error);
      const mailtoLink = `mailto:hello@catalysthub.in?subject=${encodeURIComponent(payload._subject)}&body=${encodeURIComponent(
        `Form Type: ${payload.FormType}\nName: ${payload.Name}\nPhone: ${payload.Phone}\nEmail: ${payload.Email}\nCourse: ${payload.CourseOfInterest}\nPage: ${payload.PageURL}\nTime: ${payload.SubmissionTime}`
      )}`;
      
      if (window.confirm("Our form server is currently experiencing issues. Would you like to send your details via your email app instead?")) {
        window.location.href = mailtoLink;
        onClose();
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <button className={styles.modalClose} onClick={onClose}>×</button>
        <div className={styles.modalHeader}>
          <h3>{type === 'enroll' ? `Enroll in ${courseTitle || 'Course'}` : 'Request a Callback'}</h3>
          <p>
            {type === 'enroll' 
              ? 'Fill out the form below and our counselor will contact you shortly.'
              : 'Leave your details and our expert will call you back.'}
          </p>
        </div>
        
        {isSuccess ? (
          <div style={{ textAlign: 'center', padding: '2rem 0', color: '#2563eb' }}>
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ margin: '0 auto 1rem' }}>
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Success!</h3>
            <p style={{ color: '#64748b' }}>We have received your details. Our team will contact you soon.</p>
          </div>
        ) : (
          <form className={styles.modalForm} onSubmit={handleSubmit}>
            <div className={styles.modalInputGroup}>
              <label>Full Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your full name" required />
            </div>
            <div className={styles.modalInputGroup}>
              <label>Phone Number</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" required />
            </div>
            <div className={styles.modalInputGroup}>
              <label>Email Address</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" required />
            </div>
            <button type="submit" className={styles.modalSubmitBtn} disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : (type === 'enroll' ? 'Submit Application' : 'Request Callback')}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
