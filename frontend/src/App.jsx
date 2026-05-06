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
import Centers from './sections/Centers/Centers';
import Trust   from './sections/Trust/Trust';
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
        <Centers />
        <Trust   />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
