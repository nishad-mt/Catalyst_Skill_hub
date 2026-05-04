import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        {/* <Courses />
        <Centers />
        <Trust />
        <Contact /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
