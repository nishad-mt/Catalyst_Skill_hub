import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import '../styles/Navbar.css';
import logo from '../assets/catalyst_logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="logo">
          <img 
            src={logo} 
            className="logo-image"
          />
          Tech<span className="logo-text-light">Hub</span>
        </a>

        {/* Desktop Menu */}
        <nav className="nav-links desktop-only">
          <a href="#home" className="nav-link">Home</a>
          <a href="#courses" className="nav-link">Courses</a>
          <a href="#centers" className="nav-link">Centers</a>
          <a href="#contact" className="btn-primary nav-cta">
            Contact Us <ChevronRight size={16} />
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-toggle mobile-only"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav-links">
          <a href="#home" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
          <a href="#courses" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Courses</a>
          <a href="#centers" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Centers</a>
          <a href="#contact" className="btn-primary mobile-nav-cta" onClick={() => setIsMobileMenuOpen(false)}>
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
