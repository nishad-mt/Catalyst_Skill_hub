import React from 'react';
import { ArrowRight, BookOpen, Users } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <div className="badge">
            <span className="badge-dot"></span>
            #1 Tech Institution
          </div>
          <h1 className="hero-title">
            Start Your <span className="text-primary">Tech Career</span> Today
          </h1>
          <p className="hero-description">
            Master in-demand skills with industry experts. Join Catalyst Tech Hub to transform your future and land your dream job in tech.
          </p>
          <div className="hero-cta-group">
            <a href="#contact" className="btn-primary">
              Contact Us <ArrowRight size={20} />
            </a>
            <a href="#courses" className="btn-secondary">
              Explore Courses
            </a>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-icon-wrapper"><Users size={24} className="text-primary" /></div>
              <div className="stat-text">
                <strong>1000+</strong>
                <span>Students Trained</span>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon-wrapper"><BookOpen size={24} className="text-primary" /></div>
              <div className="stat-text">
                <strong>20+</strong>
                <span>Expert Courses</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="hero-image-wrapper animate-fade-in" style={{animationDelay: '0.2s'}}>
          <div className="hero-image-backdrop"></div>
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Students learning coding" 
            className="hero-image"
          />
          <div className="floating-card card-1">
            <div className="card-dot bg-green"></div>
            <span>Expert Mentors</span>
          </div>
          <div className="floating-card card-2">
            <div className="card-dot bg-blue"></div>
            <span>100% Placement</span>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
    </section>
  );
};

export default Hero;
