import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)', position: 'relative' }}>
      <div className="grain-overlay" />
      <Navbar />
      <main>
        <About />
        <div className="glow-divider" />
        <Skills />
        <div className="glow-divider" />
        <Projects />
        <div className="glow-divider" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
