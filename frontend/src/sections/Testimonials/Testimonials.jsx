import React from 'react';
import styles from './Testimonials.module.css';

const PlayIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="#cc0000" stroke="#cc0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="5 3 19 12 5 21 5 3"></polygon>
  </svg>
);

const Testimonials = () => {
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
      name: "Angelina joy",
      email: "Varunkumar@.com",
      image: "https://i.pravatar.cc/150?img=9",
      text: <>The trainers explained everything step by step. I was able to create a full website by the end of the course. Great learning experience! <strong>Catalyst</strong> The classes are simple, practical, and easy to follow. Very supportive mentors and good placement</>
    },
    {
      id: 4,
      name: "Angelina joy",
      email: "Varunkumar@.com",
      image: "https://i.pravatar.cc/150?img=1",
      text: <>Great course structure and practical sessions. I learned React and Node.js from scratch and built real projects. The trainers were very supportive throughout the course.</>
    },
    {
      id: 5,
      name: "Angelina joy",
      email: "Varunkumar@.com",
      image: "https://i.pravatar.cc/150?img=2",
      text: <>Great course structure and practical sessions. I learned React and Node.js from scratch and built real projects. The trainers were very supportive throughout the course.</>
    },
    {
      id: 6,
      name: "Angelina joy",
      email: "varunkumar@.com",
      image: "https://i.pravatar.cc/150?img=3",
      text: <>I took the Full Stack Development course at Tech Hub, and it was a great experience. The mentors are very supportive and always ready to help. I also got guidance for interviews and career</>
    },
    {
      id: 7,
      isVideo: true
    },
    {
      id: 8,
      name: "Angelina joy",
      email: "Varunkumar@.com",
      image: "https://i.pravatar.cc/150?img=4",
      text: <>Great course structure and practical sessions. I learned React and Node.js from scratch and built real projects. The trainers were very supportive throughout the course.</>
    }
  ];

  return (
    <section className={styles.testimonialsSection}>
      <div className="container">
        <div className={styles.wrapper}>
          <h2 className={styles.sectionTitle}>What Our Alumni Says</h2>
          
          <div className={styles.grid}>
            {testimonials.map((item) => {
              if (item.isVideo) {
                return (
                  <div key={item.id} className={styles.videoCard}>
                    <PlayIcon />
                  </div>
                );
              }

              return (
                <div key={item.id} className={styles.card}>
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
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
