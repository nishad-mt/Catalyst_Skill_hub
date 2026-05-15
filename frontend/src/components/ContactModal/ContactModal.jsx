import React, { useEffect } from 'react';
import styles from './ContactModal.module.css';

const ContactModal = ({ isOpen, onClose, type = 'callback', courseTitle = '' }) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

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
        <form className={styles.modalForm} onSubmit={(e) => { e.preventDefault(); onClose(); alert(type === 'enroll' ? 'Enrolled Successfully!' : 'Callback Requested!'); }}>
          <div className={styles.modalInputGroup}>
            <label>Full Name</label>
            <input type="text" placeholder="Enter your full name" required />
          </div>
          <div className={styles.modalInputGroup}>
            <label>Phone Number</label>
            <input type="tel" placeholder="Enter your phone number" required />
          </div>
          {type === 'enroll' && (
            <div className={styles.modalInputGroup}>
              <label>Email Address</label>
              <input type="email" placeholder="Enter your email" required />
            </div>
          )}
          {type === 'callback' && (
            <div className={styles.modalInputGroup}>
              <label>Preferred Time</label>
              <select required className={styles.timeSelect}>
                <option value="">Select a time</option>
                <option value="morning">Morning (9 AM - 12 PM)</option>
                <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                <option value="evening">Evening (4 PM - 7 PM)</option>
              </select>
            </div>
          )}
          <button type="submit" className={styles.modalSubmitBtn}>
            {type === 'enroll' ? 'Submit Application' : 'Request Callback'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
