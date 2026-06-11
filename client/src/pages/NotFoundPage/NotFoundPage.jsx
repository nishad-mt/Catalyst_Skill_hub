import { useState, useEffect } from 'react';
import styles from './NotFoundPage.module.css';

export default function NotFoundPage({ navigate }) {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate('/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>404</h1>
      <p className={styles.text}>
        Your message has been submitted successfully. Our team <br />
        will review your request and get back to you shortly.
      </p>
      <button className={styles.button} onClick={() => navigate('/')}>
        Go to Home
      </button>
      <p className={styles.countdownText}>
        Redirecting to home in {countdown} Seconds
      </p>
    </div>
  );
}
