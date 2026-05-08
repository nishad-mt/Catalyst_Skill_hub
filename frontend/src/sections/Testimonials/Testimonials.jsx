import React from 'react';
import styles from './Testimonials.module.css';

const PlayIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="#cc0000" stroke="#cc0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="5 3 19 12 5 21 5 3"></polygon>
  </svg>
);

const Testimonials = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Varun kumar",
      email: "Varunkumar@.com",
      image: "https://i.pravatar.cc/150?img=11",
      text: <>Clear explanation and <strong>practical training</strong> helped me understand both manual and automation testing. Classes were very interactive and beginner-friendly.</>
    },
    {
      id: 2,
      name: "Angelina joy",
      email: "Varunkumar@.com",
      image: "https://i.pravatar.cc/150?img=5",
      text: <>I joined Tech Hub for the <strong>Data Analytics</strong> course without any prior knowledge. The way they teach from basics and move step by step made it very easy for me to understand.</>
    },
    {
      id: 3,
      name: "Sandeep S",
      email: "Sandeep@.com",
      image: "https://i.pravatar.cc/150?img=9",
      text: <>The trainers explained everything step by step. I was able to create a full website by the end of the course. Great learning experience! <strong>Catalyst</strong> The classes are simple, practical, and easy to follow.</>
    },
    {
      id: 4,
      name: "Priya Nair",
      email: "Priya@.com",
      image: "https://i.pravatar.cc/150?img=1",
      text: <>Great course structure and practical sessions. I learned React and Node.js from scratch and built real projects. The trainers were very supportive throughout the course.</>
    },
    {
      id: 5,
      name: "Arun K",
      email: "Arun@.com",
      image: "https://i.pravatar.cc/150?img=2",
      text: <>Excellent mentorship! I was able to transition from non-tech to tech smoothly. The real-world projects gave me the confidence to ace my interviews.</>
    },
    {
      id: 6,
      name: "Meera Das",
      email: "Meera@.com",
      image: "https://i.pravatar.cc/150?img=3",
      text: <>I took the Full Stack Development course at Tech Hub, and it was a great experience. The mentors are very supportive and always ready to help. I also got guidance for interviews.</>
    },
    {
      id: 7,
      isVideo: true,
      id: "v1"
    },
    {
      id: 8,
      name: "Rahul R",
      email: "Rahul@.com",
      image: "https://i.pravatar.cc/150?img=4",
      text: <>Practical, hands-on learning that actually translates to job skills. The Python course was thorough and the placement support was outstanding.</>
    }
  ];

  const triple = (arr) => [...arr, ...arr, ...arr];

  const renderCard = (item, suffix) => {
    if (item.isVideo) {
      return (
        <div key={`${item.id}-${suffix}`} className={styles.videoCard}>
          <PlayIcon />
          <span className={styles.videoText}>Watch Success Story</span>
        </div>
      );
    }
    return (
      <div key={`${item.id}-${suffix}`} className={styles.card}>
        <div className={styles.cardHeader}>
          <img src={item.image} alt={item.name} className={styles.avatar} />
          <div className={styles.userInfo}>
            <h4 className={styles.userName}>{item.name}</h4>
            <p className={styles.userEmail}>{item.email}</p>
          </div>
        </div>
        <p className={styles.cardText}>{item.text}</p>
      </div>
    );
  };

  return (
    <section className={styles.testimonialsSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>What Our Alumni Says</h2>
      </div>
      
      <div className={styles.marqueeContainer}>
        {isMobile ? (
          /* Mobile: Single row with all items */
          <div className={styles.marqueeRow}>
            <div className={styles.marqueeTrack}>
              {triple(testimonials).map((item, idx) => renderCard(item, `mob-${idx}`))}
            </div>
          </div>
        ) : (
          /* Desktop/Tablet: Dual rows */
          <>
            <div className={styles.marqueeRow}>
              <div className={styles.marqueeTrack}>
                {triple(testimonials.slice(0, 4)).map((item, idx) => renderCard(item, `r1-${idx}`))}
              </div>
            </div>
            <div className={styles.marqueeRow}>
              <div className={styles.marqueeTrack}>
                {triple(testimonials.slice(4, 8)).map((item, idx) => renderCard(item, `r2-${idx}`))}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
