import React, { useEffect, useRef, useState } from 'react';
import { personalInfo, education, awards } from '../data/projects';
import { LinkedInIcon, GitHubIcon, TableauIcon, GmailIcon } from '../components/BrandIcons';

const ROLES = ["Data Analyst", "Business Analyst", "Data Engineer"];

function useTypingEffect(words, speed = 100, pause = 1800) {
  const [display, setDisplay] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIdx];
    let timeout;
    if (!deleting && charIdx < word.length) {
      timeout = setTimeout(() => setCharIdx(c => c + 1), speed);
    } else if (!deleting && charIdx === word.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx(c => c - 1), speed / 2);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setWordIdx(i => (i + 1) % words.length);
    }
    setDisplay(word.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

// Floating Particles
function Particles() {
  const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    left: Math.random() * 100,
    duration: Math.random() * 15 + 12,
    delay: Math.random() * 12,
    color: i % 3 === 0 ? '#1d4ed8' : i % 3 === 1 ? '#0ea5e9' : '#22d3ee',
  }));

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0, pointerEvents: 'none' }}>
      {particles.map(p => (
        <div
          key={p.id}
          className="particle"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            background: p.color,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function About() {
  const role = useTypingEffect(ROLES);
  const sectionRef = useRef(null);
  const [avatarLoaded, setAvatarLoaded] = useState(false);
  const [avatarError, setAvatarError] = useState(false);

  return (
    <section id="about" style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      {/* Backgrounds */}
      <div className="hero-bg" />
      <div className="grid-bg" />
      <Particles />

      <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '120px', paddingBottom: '80px', width: '100%' }}>
        <div style={styles.heroLayout}>
          {/* Left: Text */}
          <div style={styles.heroText}>
            <div style={styles.badge}>
              <span style={styles.badgeDot} />
              Available for opportunities
            </div>

            <h1 style={styles.heroName}>
              Nguyễn<br />
              <span className="gradient-text">Hoàng Duy</span>
            </h1>

            <div style={styles.roleRow}>
              <span style={styles.roleStatic}>I'm a </span>
              <span className="gradient-text" style={styles.roleTyping}>{role}</span>
              <span className="typing-cursor" />
            </div>

            <p style={styles.quote}>
              "{personalInfo.tagline}"
            </p>

            <p style={styles.bio}>{personalInfo.bio}</p>

            {/* Stats */}
            <div style={styles.stats}>
              {personalInfo.stats.map((s) => (
                <div key={s.label} style={styles.statItem}>
                  <span className="gradient-text" style={styles.statValue}>{s.value}</span>
                  <span style={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div style={styles.ctas}>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="btn-gradient">
                <LinkedInIcon size={16} />
                <span>LinkedIn</span>
              </a>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="btn-outline">
                <GitHubIcon size={16} />
                View GitHub
              </a>
            </div>

            {/* Social quick links */}
            <div style={styles.socialLinks}>
              <a href={personalInfo.tableau} target="_blank" rel="noreferrer" className="social-btn" title="Tableau Public">
                <TableauIcon size={18} />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="social-btn" title={`Gmail: ${personalInfo.email}`}>
                <GmailIcon size={18} />
              </a>
            </div>
          </div>

          {/* Right: Avatar + Cards */}
          <div style={styles.heroRight}>
            {/* Avatar */}
            <div style={styles.avatarContainer}>
              <div style={styles.avatarRing}>
                <div style={styles.avatarInner}>
                  {/* Show fallback ONLY when image errors or hasn't loaded yet */}
                  {(!avatarLoaded || avatarError) && (
                    <div style={styles.avatarFallback}>NHD</div>
                  )}
                  <img
                    src={personalInfo.avatar}
                    alt="Nguyễn Hoàng Duy"
                    style={{
                      ...styles.avatarImg,
                      opacity: avatarLoaded && !avatarError ? 1 : 0,
                      position: avatarLoaded && !avatarError ? 'relative' : 'absolute',
                    }}
                    onLoad={() => setAvatarLoaded(true)}
                    onError={() => setAvatarError(true)}
                  />
                </div>
              </div>
            </div>

            {/* Education Card */}
            <div style={styles.infoCard}>
              <div style={styles.infoCardHeader}>
                <span style={{ fontSize: '1.2rem' }}>🏫</span>
                <span style={styles.infoCardTitle}>Education</span>
              </div>
              <p style={styles.infoCardMain}>{education.university}</p>
              <p style={styles.infoCardSub}>{education.major}</p>
              <div style={styles.infoCardMeta}>
                <span>GPA <strong style={{ color: '#22d3ee' }}>{education.gpa}</strong></span>
                <span style={{ color: 'var(--text-muted)' }}>·</span>
                <span>Tốt nghiệp <strong style={{ color: '#22d3ee' }}>{education.graduation}</strong></span>
              </div>
            </div>

            {/* Awards */}
            <div style={styles.awardsCard}>
              <div style={styles.infoCardHeader}>
                <span style={{ fontSize: '1.2rem' }}>🏆</span>
                <span style={styles.infoCardTitle}>Awards & Certs</span>
              </div>
              {awards.map((award, i) => (
                <div key={i} style={styles.awardItem}>
                  <span style={{ fontSize: '1.1rem', flexShrink: 0 }}>{award.icon}</span>
                  <div>
                    <div style={styles.awardTitle}>{award.title}</div>
                    <div style={styles.awardEvent}>{award.event}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <div style={styles.scrollHint}>
        <div style={styles.scrollArrow} />
      </div>
    </section>
  );
}

const styles = {
  heroLayout: {
    display: 'grid',
    gridTemplateColumns: '1fr 420px',
    gap: '60px',
    alignItems: 'center',
    '@media (max-width: 1024px)': { gridTemplateColumns: '1fr' },
  },
  heroText: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '6px 16px',
    borderRadius: '50px',
    background: 'rgba(46,204,113,0.1)',
    border: '1px solid rgba(46,204,113,0.3)',
    color: '#6ed69a',
    fontSize: '0.82rem',
    fontWeight: 600,
    fontFamily: 'Outfit',
    width: 'fit-content',
  },
  badgeDot: {
    width: '7px',
    height: '7px',
    borderRadius: '50%',
    background: '#2ecc71',
    boxShadow: '0 0 8px #2ecc71',
    animation: 'pulse 2s infinite',
    display: 'inline-block',
  },
  heroName: {
    fontFamily: 'Outfit',
    fontWeight: 900,
    fontSize: 'clamp(2.8rem, 6vw, 5rem)',
    lineHeight: 1.05,
    letterSpacing: '-0.02em',
  },
  roleRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    flexWrap: 'wrap',
  },
  roleStatic: {
    fontFamily: 'Outfit',
    fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
    fontWeight: 500,
    color: 'var(--text-secondary)',
  },
  roleTyping: {
    fontFamily: 'Outfit',
    fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
    fontWeight: 700,
    minWidth: '200px',
  },
  quote: {
    fontSize: '0.95rem',
    color: 'var(--text-secondary)',
    fontStyle: 'italic',
    borderLeft: '3px solid #0ea5e9',
    paddingLeft: '16px',
    lineHeight: 1.6,
    maxWidth: '520px',
  },
  bio: {
    color: 'var(--text-secondary)',
    fontSize: '0.95rem',
    lineHeight: 1.75,
    maxWidth: '540px',
  },
  stats: {
    display: 'flex',
    gap: '32px',
    flexWrap: 'wrap',
  },
  statItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
  },
  statValue: {
    fontFamily: 'Outfit',
    fontWeight: 800,
    fontSize: '2rem',
    lineHeight: 1,
  },
  statLabel: {
    fontSize: '0.78rem',
    color: 'var(--text-muted)',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
  },
  ctas: {
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
  },
  socialLinks: {
    display: 'flex',
    gap: '10px',
  },
  // Right side
  heroRight: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    alignItems: 'center',
  },
  avatarContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatarRing: {
    position: 'relative',
    padding: '4px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #1d4ed8, #0ea5e9, #22d3ee, #1d4ed8)',
    backgroundSize: '300% 300%',
    animation: 'gradientRotate 4s linear infinite',
  },
  avatarInner: {
    width: '180px',
    height: '180px',
    borderRadius: '50%',
    overflow: 'hidden',
    background: 'var(--bg-secondary)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  avatarImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  avatarFallback: {
    position: 'absolute',
    fontFamily: 'Outfit',
    fontWeight: 800,
    fontSize: '2.5rem',
    background: 'linear-gradient(135deg, #93c5fd, #22d3ee)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  infoCard: {
    width: '100%',
    background: 'rgba(9,18,40,0.85)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(14,165,233,0.12)',
    borderRadius: '16px',
    padding: '18px 20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  infoCardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '4px',
  },
  infoCardTitle: {
    fontFamily: 'Outfit',
    fontWeight: 700,
    fontSize: '0.85rem',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    color: 'var(--text-muted)',
  },
  infoCardMain: {
    fontFamily: 'Outfit',
    fontWeight: 700,
    fontSize: '0.95rem',
    color: 'var(--text-primary)',
    lineHeight: 1.3,
  },
  infoCardSub: {
    fontSize: '0.82rem',
    color: 'var(--text-secondary)',
  },
  infoCardMeta: {
    display: 'flex',
    gap: '8px',
    fontSize: '0.8rem',
    color: 'var(--text-secondary)',
    flexWrap: 'wrap',
  },
  awardsCard: {
    width: '100%',
    background: 'rgba(9,18,40,0.85)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(14,165,233,0.12)',
    borderRadius: '16px',
    padding: '18px 20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  awardItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
  },
  awardTitle: {
    fontFamily: 'Outfit',
    fontWeight: 700,
    fontSize: '0.875rem',
    color: 'var(--text-primary)',
  },
  awardEvent: {
    fontSize: '0.775rem',
    color: 'var(--text-muted)',
    marginTop: '2px',
  },
  scrollHint: {
    position: 'absolute',
    bottom: '32px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    justifyContent: 'center',
    zIndex: 1,
  },
  scrollArrow: {
    width: '24px',
    height: '24px',
    border: '2px solid rgba(14,165,233,0.5)',
    borderTop: 'none',
    borderLeft: 'none',
    transform: 'rotate(45deg)',
    animation: 'scrollBounce 1.5s ease-in-out infinite',
  },
};

// Inject keyframes
const style = document.createElement('style');
style.textContent = `
  @keyframes gradientRotate {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  @keyframes pulse {
    0%, 100% { box-shadow: 0 0 8px #2ecc71; }
    50% { box-shadow: 0 0 16px #2ecc71; }
  }
  @keyframes scrollBounce {
    0%, 100% { transform: rotate(45deg) translateY(0); opacity: 1; }
    50% { transform: rotate(45deg) translateY(6px); opacity: 0.5; }
  }
  @media (max-width: 1024px) {
    .hero-layout-grid { grid-template-columns: 1fr !important; }
  }
`;
document.head.appendChild(style);
