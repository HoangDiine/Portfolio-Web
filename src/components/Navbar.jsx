import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/projects';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('#about');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ['contact', 'projects', 'skills', 'about'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 140) {
          setActive(`#${id}`);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header style={headerStyle(scrolled)}>
        <nav style={navStyle}>
          {/* Logo */}
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, '#about')}
            style={logoStyle}
          >
            <span className="gradient-text" style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: '1.4rem', letterSpacing: '-0.02em' }}>
              NHD
            </span>
            <span style={{ color: 'var(--accent-3)', fontWeight: 800, fontSize: '1.4rem', fontFamily: 'Outfit' }}>.</span>
            <span style={{ color: 'var(--text-muted)', fontFamily: 'Be Vietnam Pro', fontSize: '0.8rem', fontWeight: 600, marginLeft: '6px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Portfolio
            </span>
          </a>

          {/* Desktop Nav Links – uses CSS class (real media queries work) */}
          <ul className="nav-links-desktop">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`nav-link-item ${active === link.href ? 'active' : ''}`}
                >
                  {link.label}
                  {active === link.href && <span className="active-dot" />}
                </a>
              </li>
            ))}
          </ul>

          {/* GitHub CTA – hidden on mobile via CSS */}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="btn-outline nav-github-btn"
            style={{ fontSize: '0.875rem', padding: '8px 20px' }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            GitHub
          </a>

          {/* Hamburger – shown on mobile via CSS */}
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span style={hamburgerLine(menuOpen, 0)} />
            <span style={hamburgerLine(menuOpen, 1)} />
            <span style={hamburgerLine(menuOpen, 2)} />
          </button>
        </nav>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div style={mobileMenuStyle}>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                style={mobileLinkStyle(active === link.href)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              style={mobileLinkStyle(false)}
            >
              GitHub ↗
            </a>
          </div>
        )}
      </header>
    </>
  );
}

/* ── Styles (inline – no media query issues here since we use CSS classes above) ── */
const headerStyle = (scrolled) => ({
  position: 'fixed',
  top: 0, left: 0, right: 0,
  zIndex: 1000,
  transition: 'var(--transition)',
  background: scrolled ? 'var(--glass-bg)' : 'transparent',
  backdropFilter: scrolled ? 'blur(24px)' : 'none',
  WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
  borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
});

const navStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 32px',
  height: '72px',
  display: 'flex',
  alignItems: 'center',
  gap: '28px',
};

const logoStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '3px',
  textDecoration: 'none',
  marginRight: 'auto',
};

const hamburgerLine = (open, i) => ({
  width: '22px',
  height: '2px',
  background: 'var(--text-primary)',
  borderRadius: '2px',
  display: 'block',
  transition: 'var(--transition)',
  transform:
    open && i === 0 ? 'rotate(45deg) translate(5px, 5px)' :
    open && i === 1 ? 'scaleX(0)' :
    open && i === 2 ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
});

const mobileMenuStyle = {
  display: 'flex',
  flexDirection: 'column',
  padding: '12px 20px 20px',
  background: 'rgba(255, 255, 255, 0.98)',
  borderTop: '1px solid var(--border)',
  gap: '4px',
};

const mobileLinkStyle = (isActive) => ({
  padding: '12px 16px',
  borderRadius: '10px',
  color: isActive ? 'var(--accent-1)' : 'var(--text-secondary)',
  fontFamily: 'Outfit',
  fontWeight: 700,
  fontSize: '1rem',
  background: isActive ? 'var(--gradient-soft)' : 'transparent',
  textDecoration: 'none',
  transition: 'var(--transition)',
  display: 'block',
});
