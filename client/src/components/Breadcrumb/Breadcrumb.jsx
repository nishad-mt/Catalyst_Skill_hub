import React from 'react';
import { FaHome } from "react-icons/fa";
import styles from './Breadcrumb.module.css';
import { courses } from '../../data/siteData';

export default function Breadcrumb({ currentPage, navigate }) {
  // Hide breadcrumbs on the home page
  if (currentPage === 'home') return null;

  // Pages that have the 50px TopBar (total navbar = 150px)
  const hasTopBar = ['courses', 'course-detail', 'center-detail'].includes(currentPage);

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
  } else if (currentPage === 'center-detail') {
    pathItems.push({ label: 'Centers', path: '#', isCurrent: true });
  } else if (currentPage === 'blog-detail') {
    pathItems.push({ label: 'Blogs', path: '/blogs' });
    pathItems.push({ label: 'Blog Post', path: '#', isCurrent: true });
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

  const isDarkBackground = ['home', 'about', 'center-detail'].includes(currentPage);

  return (
    <div className={`${styles.breadcrumbWrapper} ${isDarkBackground ? styles.darkBg : styles.lightBg} ${!hasTopBar ? styles.noTopBar : ''}`}>
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
                    aria-label="Home"
                  >
                    {item.label === "Home" ? <FaHome className={styles.homeIcon} /> : item.label}
                  </a>
                    <span className={styles.separator}>&gt;</span>
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
