import React from 'react';
import styles from './Breadcrumb.module.css';
import { courses } from '../../data/siteData';

export default function Breadcrumb({ currentPage, navigate }) {
  if (currentPage === 'home') return null;

  // Build the breadcrumb path dynamically
  const pathItems = [
    { label: 'Home', path: '/' }
  ];

  if (currentPage === 'courses') {
    pathItems.push({ label: 'Courses', path: '/courses', isCurrent: true });
  } else if (currentPage === 'about') {
    pathItems.push({ label: 'About Us', path: '/about', isCurrent: true });
  } else if (currentPage === 'success-stories') {
    pathItems.push({ label: 'Success Stories', path: '/success-stories', isCurrent: true });
  } else if (currentPage === 'life') {
    pathItems.push({ label: 'Life @ Catalyst', path: '/life', isCurrent: true });
  } else if (currentPage === 'blogs') {
    pathItems.push({ label: 'Blogs', path: '/blogs', isCurrent: true });
  } else if (currentPage === 'course-detail') {
    pathItems.push({ label: 'Courses', path: '/courses' });
    
    // Extract slug from URL
    const slug = window.location.pathname.split('/').pop();
    const course = courses.find(c => c.slug === slug);
    
    if (course) {
      pathItems.push({ label: course.title, path: `/course/${slug}`, isCurrent: true });
    } else {
      pathItems.push({ label: 'Course Detail', path: '#', isCurrent: true });
    }
  }

  const handleNavigation = (e, path) => {
    e.preventDefault();
    if (path !== '#') {
      navigate(path);
    }
  };

  return (
    <div className={styles.breadcrumbWrapper}>
      <div className="container">
        <nav aria-label="breadcrumb">
          <ul className={styles.breadcrumb}>
            {pathItems.map((item, index) => (
              <li key={index} className={styles.breadcrumbItem}>
                {item.isCurrent ? (
                  <span className={styles.current} aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <>
                    <a 
                      href={item.path} 
                      className={styles.breadcrumbLink}
                      onClick={(e) => handleNavigation(e, item.path)}
                    >
                      {item.label}
                    </a>
                    <span className={styles.separator}>/</span>
                  </>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
