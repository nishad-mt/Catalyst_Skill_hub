import React from 'react';
import styles from './BlogDetails.module.css';
import { blogs } from '../../data/blogs';

const BlogDetails = () => {

  const path = window.location.pathname;
  const id = path.split('/blogs/')[1];

  const blog = blogs.find(
    item => item.id.toString() === id
  );

  if (!blog) return <h2>Blog Not Found</h2>;

  const { content } = blog;

  return (

    <section className={styles.page}>

      <div className={styles.container}>

        {/* LEFT CONTENT */}

        <div className={styles.left}>

          <h1 className={styles.title}>
            {content.heroTitle}
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

            <h3 className={styles.cardTitle}>
              {content.cta.title}
            </h3>

            <p className={styles.ctaText}>
              {content.cta.description}
            </p>

            <input
              type="text"
              placeholder="Phone Number"
              className={styles.input}
            />

            <button className={styles.button}>
              {content.cta.buttonText}
            </button>

          </div>

        </aside>

      </div>

    </section>
  );
};

export default BlogDetails;