// src/App.jsx
import { useState, useEffect } from 'react';
import './styles/index.css';
import { useScrollReveal } from './hooks/useScrollReveal';

// Layout components
import Navbar     from './components/Navbar/Navbar';
import WhatsAppWidget from './components/WhatsAppWidget/WhatsAppWidget';
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
import Placements from './sections/Placements/Placements';

import CoursesPage from './pages/CoursesPage/CoursesPage';
import CourseDetailPage from './pages/CourseDetailPage/CourseDetailPage';
import AboutPage from './pages/AboutPage/AboutPage';
import SuccessStoriesPage from './pages/SuccessStoriesPage/SuccessStoriesPage';
import BlogPage from './pages/BlogPage/BlogPage';
import BlogDetails from './pages/BlogDetails/BlogDetails';
import LifePage from './pages/LifePage/LifePage';
import CenterDetailPage from './pages/CenterDetailPage/CenterDetailPage';
import ContactModal from './components/ContactModal/ContactModal';
import StudentTestimonialsBanner from './components/StudentTestimonialsBanner/StudentTestimonialsBanner';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ThankYouPage from './pages/ThankYouPage/ThankYouPage';

export default function App() {
  // Attach scroll-reveal observer after mount
  useScrollReveal();

  const [currentPage, setCurrentPage] = useState(() => {
    const path = window.location.pathname;
    if (path === '/' || path === '') return 'home';
    if (path.includes('/course/')) return 'course-detail';
    if (path.includes('/courses')) return 'courses';
    if (path.includes('/center/')) return 'center-detail';
    if (path.includes('/about')) return 'about';
    if (path.includes('/success-stories')) return 'success-stories';
    if (path.includes('/life')) return 'life';
    if (path.includes('/blogs/'))return 'blog-detail';
    if (path.includes('/blogs')) return 'blogs';
    if (path.includes('/thank-you')) return 'thank-you';
    return '404';
  });
  
  const [currentPath, setCurrentPath] = useState(() => window.location.pathname);

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
      setCurrentPath(path);
      if (path === '/' || path === '') setCurrentPage('home');
      else if (path.includes('/course/')) setCurrentPage('course-detail');
      else if (path.includes('/courses')) setCurrentPage('courses');
      else if (path.includes('/center/')) setCurrentPage('center-detail');
      else if (path.includes('/about')) setCurrentPage('about');
      else if (path.includes('/success-stories')) setCurrentPage('success-stories');
      else if (path.includes('/life')) setCurrentPage('life');
      else if (path.includes('/blogs/')) setCurrentPage('blog-detail');
      else if (path.includes('/blogs')) setCurrentPage('blogs'); 
      else if (path.includes('/thank-you')) setCurrentPage('thank-you');
      else setCurrentPage('404');
      window.scrollTo(0, 0);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const [searchQuery, setSearchQuery] = useState('');

  const navigate = (path) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    if (path === '/' || path === '') setCurrentPage('home');
    else if (path.includes('/course/')) setCurrentPage('course-detail');
    else if (path.includes('/courses')) setCurrentPage('courses');
    else if (path.includes('/center/')) setCurrentPage('center-detail');
    else if (path.includes('/about')) setCurrentPage('about');
    else if (path.includes('/success-stories')) setCurrentPage('success-stories');
    else if (path.includes('/life')) setCurrentPage('life');
    else if (path.includes('/blogs/')) setCurrentPage('blog-detail');
    else if (path.includes('/blogs')) setCurrentPage('blogs');
    else if (path.includes('/thank-you')) setCurrentPage('thank-you');
    else setCurrentPage('404');
    window.scrollTo(0, 0);
  };

  const isMinimalLayout = ['404', 'thank-you'].includes(currentPage);

  return (
    <>
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} navigate={navigate} currentPage={currentPage} />
      {!isMinimalLayout && <WhatsAppWidget />}
      {!isMinimalLayout && <MobileActionBar navigate={navigate} currentPage={currentPage} />}

      <main>
        {!isMinimalLayout && <Breadcrumb currentPage={currentPage} navigate={navigate} />}
        {currentPage === '404' ? (
          <NotFoundPage navigate={navigate} />
        ) : currentPage === 'thank-you' ? (
          <ThankYouPage navigate={navigate} />
        ) : currentPage === 'courses' ? (
          <CoursesPage searchQuery={searchQuery} setSearchQuery={setSearchQuery} navigate={navigate} />
        ) : currentPage === 'course-detail' ? (
          <CourseDetailPage key={currentPath} navigate={navigate} />
        ) : currentPage === 'center-detail' ? (
          <CenterDetailPage key={currentPath} navigate={navigate} />
        ) : currentPage === 'about' ? (
          <AboutPage />
        ) : currentPage === 'success-stories' ? (
          <SuccessStoriesPage />
        ) : currentPage === 'life' ? (
          <LifePage />
        ) : currentPage === 'blog-detail' ? (
          <BlogDetails key={currentPath} />
        ) : currentPage === 'blogs' ? (
          <BlogPage />
        ): (
          <>
            <Hero navigate={navigate} />
            <StatsBar    />
            <Courses searchQuery={searchQuery} navigate={navigate} />
            <Mentors />
            <Placements />
            <Skills />
            <Comparison />
            <Testimonials />
            <Life navigate={navigate} />
            <ResourceCenter />
            <div className="container">
              <StudentTestimonialsBanner />
            </div>
          </>
        )}
        {!isMinimalLayout && <FAQ />}
        {!isMinimalLayout && <Contact navigate={navigate} />}
      </main>

      {!isMinimalLayout && <Footer navigate={navigate} />}

      <ContactModal 
        isOpen={modalConfig.isOpen} 
        onClose={() => setModalConfig(prev => ({ ...prev, isOpen: false }))}
        type={modalConfig.type}
        courseTitle={modalConfig.courseTitle}
        navigate={navigate}
      />
    </>
  );
}


