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
        Oops! The page you are looking for does not exist. <br />
        It might have been moved or deleted.
      </p>
      <button className={styles.button} onClick={() => navigate('/')}>
        Back to Home
      </button>
      <p className={styles.countdownText}>
        Redirecting to home in {countdown} Seconds
      </p>
    </div>
  );
}
