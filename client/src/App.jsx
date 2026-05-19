// src/App.jsx
import { useState, useEffect } from 'react';
import './styles/index.css';
import { useScrollReveal } from './hooks/useScrollReveal';

// Layout components
import Navbar     from './components/Navbar/Navbar';
import FloatingCTA from './components/FloatingCTA/FloatingCTA';
import MobileActionBar from './components/MobileActionBar/MobileActionBar';
import Breadcrumb from './components/Breadcrumb/Breadcrumb';

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
import AboutPage from './pages/AboutPage/AboutPage';
import SuccessStoriesPage from './pages/SuccessStoriesPage/SuccessStoriesPage';
import BlogPage from './pages/BlogPage/BlogPage';
import LifePage from './pages/LifePage/LifePage';
import ContactModal from './components/ContactModal/ContactModal';

export default function App() {
  // Attach scroll-reveal observer after mount
  useScrollReveal();

  const [currentPage, setCurrentPage] = useState(() => {
    const path = window.location.pathname;
    if (path.includes('/courses')) return 'courses';
    if (path.includes('/course/')) return 'course-detail';
    if (path.includes('/about')) return 'about';
    if (path.includes('/success-stories')) return 'success-stories';
    if (path.includes('/life')) return 'life';
    if (path.includes('/blogs')) return 'blogs';
    return 'home';
  });

  const [modalConfig, setModalConfig] = useState({
    isOpen: false,
    type: 'callback',
    courseTitle: ''
  });

  useEffect(() => {
    const handleOpenModal = (e) => {
      setModalConfig({
        isOpen: true,
        type: e.detail.type || 'callback',
        courseTitle: e.detail.courseTitle || ''
      });
    };
    window.addEventListener('openModal', handleOpenModal);
    return () => window.removeEventListener('openModal', handleOpenModal);
  }, []);

  useEffect(() => {

    const handlePopState = () => {
      const path = window.location.pathname;
      if (path.includes('/courses')) setCurrentPage('courses');
      else if (path.includes('/course/')) setCurrentPage('course-detail');
      else if (path.includes('/about')) setCurrentPage('about');
      else if (path.includes('/success-stories')) setCurrentPage('success-stories');
      else if (path.includes('/life')) setCurrentPage('life');
      else if (path.includes('/blogs')) setCurrentPage('blogs');
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
    else if (path.includes('/about')) setCurrentPage('about');
    else if (path.includes('/success-stories')) setCurrentPage('success-stories');
    else if (path.includes('/life')) setCurrentPage('life');
    else if (path.includes('/blogs')) setCurrentPage('blogs');
    else setCurrentPage('home');
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} navigate={navigate} currentPage={currentPage} />
      <FloatingCTA />
      <MobileActionBar navigate={navigate} currentPage={currentPage} />

      <main>
        <Breadcrumb currentPage={currentPage} navigate={navigate} />
        {currentPage === 'courses' ? (
          <CoursesPage searchQuery={searchQuery} setSearchQuery={setSearchQuery} navigate={navigate} />
        ) : currentPage === 'course-detail' ? (
          <CourseDetailPage />
        ) : currentPage === 'about' ? (
          <AboutPage />
        ) : currentPage === 'success-stories' ? (
          <SuccessStoriesPage />
        ) : currentPage === 'life' ? (
          <LifePage />
        ) : currentPage === 'blogs' ? (
          <BlogPage />
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

      <Footer navigate={navigate} />

      <ContactModal 
        isOpen={modalConfig.isOpen} 
        onClose={() => setModalConfig(prev => ({ ...prev, isOpen: false }))}
        type={modalConfig.type}
        courseTitle={modalConfig.courseTitle}
      />
    </>
  );
}


