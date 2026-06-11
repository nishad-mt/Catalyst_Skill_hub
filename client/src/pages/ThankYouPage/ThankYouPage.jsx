import { useState, useEffect } from 'react';
import styles from './ThankYouPage.module.css';

export default function ThankYouPage({ navigate }) {
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
      <div className={styles.illustration}>
        <svg viewBox="0 0 200 120" width="200" height="120" xmlns="http://www.w3.org/2000/svg">
          {/* Dotted path loop */}
          <path 
            d="M30,80 C60,110 80,40 100,70 C110,85 130,85 145,65 C155,50 165,40 178,35" 
            fill="none" 
            stroke="#fbc02d" 
            strokeWidth="2" 
            strokeDasharray="4,4" 
            strokeLinecap="round"
          />
          
          {/* Tiny clouds */}
          <path d="M25,50 Q28,47 32,50 Q36,47 40,50 Q42,54 36,54 Q28,54 25,50 Z" fill="#e2e8f0" />
          <path d="M125,45 Q128,42 132,45 Q136,42 140,45 Q142,49 136,49 Q128,49 125,45 Z" fill="#e2e8f0" />
          <path d="M90,95 Q93,92 97,95 Q101,92 105,95 Q107,99 101,99 Q93,99 90,95 Z" fill="#e2e8f0" />
          <path d="M170,70 Q173,67 177,70 Q181,67 185,70 Q187,74 181,74 Q173,74 170,70 Z" fill="#e2e8f0" />

          {/* Yellow Paper Plane */}
          <g transform="translate(178, 33) rotate(-15)">
            {/* Top main wing */}
            <polygon points="0,0 -30,-8 -12,8" fill="#fef08a" stroke="#fbc02d" strokeWidth="1" />
            {/* Bottom wing layer */}
            <polygon points="-12,8 -30,-8 -18,10" fill="#fef08a" stroke="#fbc02d" strokeWidth="1" />
            {/* Plane fold */}
            <polygon points="-12,8 -18,10 -15,14" fill="#fde047" stroke="#fbc02d" strokeWidth="1" />
          </g>
        </svg>
      </div>

      <h1 className={styles.heading}>Thank You</h1>
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
