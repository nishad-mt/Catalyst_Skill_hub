// src/App.jsx
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

export default function App() {
  // Attach scroll-reveal observer after mount
  useScrollReveal();

  return (
    <>
      <Navbar />
      <FloatingCTA />

      <main>
        <Hero    />
        <StatsBar    />
        <Courses />
        <Mentors />
        <Skills />
        <Comparison />
        <Testimonials />
        <Life />
        <ResourceCenter />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
