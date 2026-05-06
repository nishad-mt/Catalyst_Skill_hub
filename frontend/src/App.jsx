// src/App.jsx
import { useState, useEffect } from 'react';
import './styles/index.css';
import { useScrollReveal } from './hooks/useScrollReveal';

// Layout components
import Navbar     from './components/Navbar/Navbar';
import FloatingCTA from './components/FloatingCTA/FloatingCTA';

// Page sections
import Hero    from './sections/Hero/Hero';
import StatsBar from './sections/Status/StatsBar';
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

// Pages
import CoursesPage from './pages/CoursesPage/CoursesPage';

export default function App() {
  // Attach scroll-reveal observer after mount
  useScrollReveal();

  const [currentPage, setCurrentPage] = useState(() => {
    return window.location.pathname === '/courses' ? 'courses' : 'home';
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(window.location.pathname === '/courses' ? 'courses' : 'home');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <FloatingCTA />

      <main>
        {currentPage === 'courses' ? (
          <CoursesPage searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        ) : (
          <>
            <Hero    />
            <StatsBar    />
            <Courses searchQuery={searchQuery} />
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
