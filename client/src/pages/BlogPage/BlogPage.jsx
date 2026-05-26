import { useEffect, useState, useRef } from 'react';
import styles from './BlogPage.module.css';
import { courses } from '../../data/siteData';
import { blogs } from '../../data/blogs';
import { Link } from 'react-router-dom';

export default function BlogPage() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedCourse, setSelectedCourse] = useState(null);

  const itemRefs = useRef({});

  const filteredBlogs = selectedCourse
    ? blogs.filter(
        blog => blog.courseSlug === selectedCourse.slug
      )
    : blogs;

  return (
    <div className={styles.page}>

      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.heroTitle}>
            Best Tech career courses in calicut
          </h1>

          <p className={styles.heroDesc}>
            Stay updated with the latest trends, tutorials, and career advice from industry experts at Catalyst Tech Hub.
          </p>
        </div>
      </section>

      <section className={styles.layout}>

<aside className={styles.sidebar}>

  <div
    ref={(el) => (itemRefs.current["all"] = el)}
    className={`${styles.courseItem}
    ${selectedCourse === null ? styles.active : ''}`}

    onClick={() => {
      setSelectedCourse(null);

      itemRefs.current["all"]?.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest"
      });
    }}
  >
    All Blogs
  </div>

  {courses.map((course) => (
    <div
      key={course.id}

      ref={(el) => (itemRefs.current[course.id] = el)}

      className={`${styles.courseItem}
      ${selectedCourse?.id === course.id ? styles.active : ''}`}

      onClick={() => {
        setSelectedCourse(course);

        itemRefs.current[course.id]?.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest"
        });
      }}
    >
      {course.title}
    </div>
  ))}

</aside>

        {/* RIGHT BLOG GRID */}
        <div className={styles.blogGrid}>
          {filteredBlogs.map(blog => (
            <div key={blog.id} className={styles.blogCard}>

              <img
                src={blog.image}
                alt={blog.title}
                className={styles.blogImage}/>

              <div className={styles.blogContent}>
                <p className={styles.blogDate}>{blog.date} <span className={styles.read}>{blog.read}</span></p>
                <h3 className={styles.blogTitle}>{blog.title}</h3>
                <p className={styles.blogDescription}>
          {blog.description}
        </p>
<a
  className={styles.link}
  href="#"
  onClick={(e) => {
    e.preventDefault();
    window.history.pushState({}, '', `/blogs/${blog.id}`);
    window.dispatchEvent(new PopStateEvent('popstate'));
  }}
>
  Read More
</a>
              </div>

            </div>
          ))}
        </div>

      </section>

    </div>
  );
}