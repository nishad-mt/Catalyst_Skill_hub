import React, { useState } from 'react';
import styles from './BlogDetails.module.css';
import { blogs } from '../../data/blogs';
import { Turnstile } from '@marsidev/react-turnstile';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

const BlogDetails = ({ navigate }) => {
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState(null);

  const path = window.location.pathname;
  const id = path.split('/blogs/')[1];

  const blog = blogs.find(
    item => item.id.toString() === id
  );

  if (!blog) return <NotFoundPage navigate={navigate} />;

  const { content } = blog;

  const handleEnroll = async (e) => {
    e.preventDefault();
    if (!phone.trim()) {
      alert("Please enter your phone number to enroll.");
      return;
    }
    
    // Simple basic phone format check
    const cleanPhone = phone.trim();
    if (cleanPhone.length < 10) {
      alert("Please enter a valid phone number.");
      return;
    }

    if (!turnstileToken) {
      alert("Please complete the captcha.");
      return;
    }

    setIsSubmitting(true);

    const payload = {
      name: "Blog Reader Lead",
      phone: cleanPhone,
      email: "N/A",
      course: blog.title,
      center: "N/A",
      pageUrl: window.location.href,
      turnstileToken: turnstileToken
    };

    try {
      const response = await fetch("/api/contact", {
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
      setPhone('');
      setTurnstileToken(null);
    } catch (error) {
      console.error(error);
      const mailtoLink = `mailto:hello@catalysthub.in?subject=Blog Lead&body=${encodeURIComponent(
        `Phone: ${payload.phone}\nCourse: ${payload.course}`
      )}`;
      
      if (window.confirm("Our form server is currently experiencing issues. Would you like to send your details via your email app instead?")) {
        window.location.href = mailtoLink;
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (

    <section className={styles.page}>

      <div className={`container ${styles.contentWrapper}`}>

        <h1 className={styles.title}>
          {content.heroTitle} :
        </h1>

        {/* LEFT CONTENT */}

        <div className={styles.left}>

          <img
            src={content.heroImage}
            alt={content.heroTitle}
            className={styles.heroImage}
          />

          {content.sections.map((section,index)=>(

            <section
              key={index}
              className={styles.section}
              id={`section-${index}`}
            >

              <h2 className={styles.heading}>
                {section.heading}
              </h2>

              <p className={styles.text}>
                {section.text.trim()}
              </p>

            </section>

          ))}

        </div>

        {/* RIGHT SIDEBAR */}

        <aside className={styles.sidebar}>

          <div className={styles.card}>

            <h3 className={styles.cardTitle}>
              Table of Content
            </h3>

            <ol>

              {content.tableOfContents.map((item,index)=>(

                <li key={index}>
                  <a href={`#section-${index}`} className={styles.tocLink}>
                    {item}
                  </a>
                </li>

              ))}

            </ol>

          </div>

          <div className={styles.card}>

            {isSuccess ? (
              <div className={styles.successBlock}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ margin: '0 auto 0.75rem', display: 'block' }}>
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <h3 className={styles.successTitle}>Successfully Enrolled!</h3>
                <p className={styles.successText}>We have received your number. Our team will contact you shortly.</p>
              </div>
            ) : (
              <>
                <h3 className={styles.cardTitle}>
                  {content.cta.title}
                </h3>

                <p className={styles.ctaText}>
                  {content.cta.description}
                </p>

                <form onSubmit={handleEnroll}>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={styles.input}
                    required
                  />

                  <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                    <Turnstile 
                      siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY} 
                      onSuccess={(token) => setTurnstileToken(token)} 
                      onError={(err) => console.error("Turnstile Error:", err)}
                    />
                  </div>

                  <button type="submit" className={styles.button} disabled={isSubmitting}>
                    {isSubmitting ? 'Enrolling...' : content.cta.buttonText}
                  </button>
                </form>
              </>
            )}

          </div>

        </aside>

      </div>

    </section>
  );
};

export default BlogDetails;