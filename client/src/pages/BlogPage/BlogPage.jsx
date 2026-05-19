import React, { useEffect } from 'react';
import styles from './BlogPage.module.css';

const blogs = [
  {
    id: 1,
    title: "10 Reasons to Learn MERN Stack in 2026",
    excerpt: "The MERN stack continues to dominate web development. Here's why mastering MongoDB, Express, React, and Node is still your best bet for a lucrative career.",
    category: "Web Development",
    date: "May 10, 2026",
    img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&q=80"
  },
  {
    id: 2,
    title: "How AI is Changing the Landscape of Data Science",
    excerpt: "Artificial Intelligence isn't replacing Data Scientists; it's giving them superpowers. Discover the new tools every data professional should know.",
    category: "Data Science",
    date: "April 28, 2026",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80"
  },
  {
    id: 3,
    title: "Cybersecurity Best Practices for Remote Work",
    excerpt: "With remote work becoming the norm, securing your digital workspace is more critical than ever. Learn top practices from our cybersecurity experts.",
    category: "Cybersecurity",
    date: "April 15, 2026",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80"
  },
  {
    id: 4,
    title: "Designing for Accessibility: A UI/UX Guide",
    excerpt: "Good design is accessible design. Learn how to create inclusive user interfaces that everyone can use and enjoy.",
    category: "Design",
    date: "March 30, 2026",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80"
  },
  {
    id: 5,
    title: "A Beginner's Guide to AWS Cloud Computing",
    excerpt: "Cloud computing can seem daunting. This comprehensive guide breaks down the basics of AWS and why it's a must-have skill.",
    category: "Cloud",
    date: "March 12, 2026",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80"
  },
  {
    id: 6,
    title: "The Future of Digital Marketing: Trends to Watch",
    excerpt: "From AI-driven SEO to interactive social campaigns, here are the digital marketing trends that will define the rest of the decade.",
    category: "Marketing",
    date: "February 22, 2026",
    img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&q=80"
  }
];

export default function BlogPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <span className={`${styles.badge} reveal`}>Our Blog</span>
          <h1 className={`${styles.heroTitle} reveal`}>Tech Insights & News</h1>
          <p className={`${styles.heroDesc} reveal`}>
            Stay updated with the latest trends, tutorials, and career advice from industry experts at Catalyst Tech Hub.
          </p>
        </div>
      </section>

      <section className={styles.blogSection}>
        <div className="container">
          <div className={`${styles.grid} reveal-group`}>
            {blogs.map(blog => (
              <div key={blog.id} className={styles.blogCard}>
                <img src={blog.img} alt={blog.title} className={styles.blogImage} />
                <div className={styles.blogContent}>
                  <div className={styles.blogMeta}>
                    <span className={styles.blogCategory}>{blog.category}</span>
                    <span>{blog.date}</span>
                  </div>
                  <h3 className={styles.blogTitle}>{blog.title}</h3>
                  <p className={styles.blogExcerpt}>{blog.excerpt}</p>
                  <button className={styles.readMore}>
                    Read Article <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
