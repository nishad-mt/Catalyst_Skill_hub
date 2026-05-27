import { useEffect, useState, useRef } from 'react';
import styles from './LifePage.module.css';
import { life } from '../../data/life';

export default function LifePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Custom router check for detail view (e.g. /life/1)
  const path = window.location.pathname;
  const detailId = path.split('/life/')[1];

  const [selectedCategory, setSelectedCategory] = useState('all');
  const itemRefs = useRef({});

  // 1. DETAIL VIEW FALLBACK (Matching BlogDetails.jsx style)
  if (detailId) {
    const item = life.find((data) => data.id.toString() === detailId);

    if (!item) {
      return (
        <section className={styles.page}>
          <div className="container" style={{ padding: '160px 0 100px', textAlign: 'center' }}>
            <h2>Life Event Not Found</h2>
            <a
              href="#"
              className={styles.link}
              style={{ fontSize: '1rem', marginTop: '1rem', display: 'inline-block' }}
              onClick={(e) => {
                e.preventDefault();
                window.history.pushState({}, '', '/life');
                window.dispatchEvent(new PopStateEvent('popstate'));
              }}
            >
              Back to Life @ Catalyst
            </a>
          </div>
        </section>
      );
    }

    return (
      <section className={styles.page}>
        <div className={styles.container}>
          {/* LEFT CONTENT */}
          <div className={styles.left}>
            <h1 className={styles.title}>{item.thread.replace(/[-_]/g, ' ').toUpperCase()}</h1>

            <img
              src={item.image}
              alt={item.thread}
              className={styles.heroImage}
            />

            <section className={styles.section}>
              <h2 className={styles.heading}>Event Description</h2>
              <p className={styles.text}>{item.description}</p>
            </section>
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className={styles.sidebar}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Event Information</h3>
              <ol>
                <li>ID : {item.id}</li>
                <li>
                  Category : {item.thread.replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
                </li>
              </ol>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Join Our Community</h3>
              <p className={styles.ctaText}>
                Stay updated with our cultural events, celebrations, and activities.
              </p>
              <input
                type="text"
                placeholder="Phone Number"
                className={styles.input}
              />
              <button className={styles.button}>Register Now</button>
            </div>
          </aside>
        </div>
      </section>
    );
  }

  // 2. MAIN INDEX/GRID VIEW (Matching BlogPage.jsx style)
  const categories = ['all', ...new Set(life.map((item) => item.thread))];

  const filteredLife = selectedCategory !== 'all'
    ? life.filter((item) => item.thread === selectedCategory)
    : life;

  const formatCategory = (category) => {
    if (category === 'all') return 'All Activities';
    return category
      .replace(/[-_]/g, ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.heroTitle}>Life @ Catalyst</h1>
          <p className={styles.heroDesc}>
            Explore our vibrant student community, classroom sessions, lab training, cultural events, and campus activities at Catalyst.
          </p>
        </div>
      </section>

      {/* Main Layout Grid */}
      <section className={styles.layout}>
        {/* LEFT FILTER SIDEBAR */}
        <aside className={styles.sidebarFilters}>

          <div className={styles.sidebarTitle}>
            Categories
          </div>

          <div className={styles.categoriesRow}>
            {categories.map((category) => (
              <div
                key={category}
                ref={(el) => (itemRefs.current[category] = el)}
                className={`${styles.categoryItem} ${
                  selectedCategory === category ? styles.active : ''
                }`}
                onClick={() => {
                  setSelectedCategory(category);

                  itemRefs.current[category]?.scrollIntoView({
                    behavior:'smooth',
                    inline:'center',
                    block:'nearest',
                  });
                }}
              >
                {formatCategory(category)}
              </div>
            ))}
          </div>

        </aside>

        {/* RIGHT GALLERY GRID */}
        <div className={styles.galleryGrid}>
          {filteredLife.map((item) => (
            <div key={item.id} className={styles.galleryCard}>
              <img
                src={item.image}
                alt={item.thread}
                className={styles.galleryImage}
              />

              {/* Thread Top Right */}
              <div className={styles.threadTag}>
                {item.thread.replace(/[-_]/g, ' ').toUpperCase()}
              </div>

              {/* Hover Content */}
              <div className={styles.overlay}>
                <p className={styles.galleryDescription}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}