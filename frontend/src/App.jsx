// src/App.jsx
import { useState, useEffect } from 'react';
import './styles/index.css';
import { useScrollReveal } from './hooks/useScrollReveal';

// Layout components
import Navbar     from './components/Navbar/Navbar';
import FloatingCTA from './components/FloatingCTA/FloatingCTA';

// Page sections
import Hero    from './sections/Hero/Hero';
import StatsBar from './sections/Status/Statsbar';
import Courses from './sections/Courses/Courses';
import Mentors from './sections/Mentors/Mentors';
import Skills  from './sections/Skills/Skills';
import Comparison from './sections/Comparison/Comparison';
import Testimonials from './sections/Testimonials/Testimonials';
import Life from './sections/Life/Life';
import ResourceCenter from './sections/ResourceCenter/ResourceCenter';
import FAQ from './sections/FAQ/FAQ';
import Contact from './sections/Contact/Contact';
import Footer  from './sections/Footer/Footer';

import CoursesPage from './pages/CoursesPage/CoursesPage';
import CourseDetailPage from './pages/CourseDetailPage/CourseDetailPage';

export default function App() {
  // Attach scroll-reveal observer after mount
  useScrollReveal();

  const [currentPage, setCurrentPage] = useState(() => {
    const path = window.location.pathname;
    if (path.includes('/courses')) return 'courses';
    if (path.includes('/course/')) return 'course-detail';
    return 'home';
  });

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path.includes('/courses')) setCurrentPage('courses');
      else if (path.includes('/course/')) setCurrentPage('course-detail');
      else setCurrentPage('home');
      window.scrollTo(0, 0);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const [searchQuery, setSearchQuery] = useState('');

  const navigate = (path) => {
    window.history.pushState({}, '', path);
    if (path.includes('/courses')) setCurrentPage('courses');
    else if (path.includes('/course/')) setCurrentPage('course-detail');
    else setCurrentPage('home');
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} navigate={navigate} />
      <FloatingCTA />

      <main>
        {currentPage === 'courses' ? (
          <CoursesPage searchQuery={searchQuery} setSearchQuery={setSearchQuery} navigate={navigate} />
        ) : currentPage === 'course-detail' ? (
          <CourseDetailPage />
        ) : (
          <>
            <Hero    />
            <StatsBar    />
            <Courses searchQuery={searchQuery} navigate={navigate} />
            <Mentors />
            <Skills />
            <Comparison />
            <Testimonials />
            <Life />
            <ResourceCenter />
          </>
        )}
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
