import React, { useState } from 'react';
import styles from './BlogDetails.module.css';
import { blogs } from '../../data/blogs';

const BlogDetails = () => {
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const path = window.location.pathname;
  const id = path.split('/blogs/')[1];

  const blog = blogs.find(
    item => item.id.toString() === id
  );

  if (!blog) return <h2>Blog Not Found</h2>;

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

    setIsSubmitting(true);

    const payload = {
      _subject: `New Enrollment Lead from Blog: ${blog.title}`,
      _captcha: 'false',
      FormType: 'Enrollment',
      Name: 'Blog Reader Lead',
      Phone: cleanPhone,
      Email: 'N/A',
      PageURL: window.location.href,
      CourseOfInterest: blog.title || 'N/A',
      SubmissionTime: new Date().toLocaleString()
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
      setPhone('');
    } catch (error) {
      console.error(error);
      const mailtoLink = `mailto:hello@catalysthub.in?subject=${encodeURIComponent(payload._subject)}&body=${encodeURIComponent(
        `Form Type: ${payload.FormType}\nPhone: ${payload.Phone}\nCourse: ${payload.CourseOfInterest}\nPage: ${payload.PageURL}\nTime: ${payload.SubmissionTime}`
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

      <div className={styles.container}>

        {/* LEFT CONTENT */}

        <div className={styles.left}>

          <h1 className={styles.title}>
            {content.heroTitle} :
          </h1>

          <img
            src={content.heroImage}
            alt={content.heroTitle}
            className={styles.heroImage}
          />

          {content.sections.map((section,index)=>(

            <section
              key={index}
              className={styles.section}
            >

              <h2 className={styles.heading}>
                {section.heading}
              </h2>

              <p className={styles.text}>
                {section.text}
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
                  {item}
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