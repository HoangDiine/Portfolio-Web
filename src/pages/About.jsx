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
  const [activeTab, setActiveTab] = useState('credentials');

  return (
    <section id="about" style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      {/* Backgrounds */}
      <div className="hero-bg" />
      <div className="grid-bg" />
      <Particles />

      <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '120px', paddingBottom: '80px', width: '100%' }}>
        <div className="hero-layout">
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

            {/* Tabbed Card (Lý lịch, Năng lực, Hoạt động) */}
            <div style={styles.tabCard}>
              {/* Tab Header Buttons */}
              <div style={styles.tabHeader}>
                <button
                  onClick={() => setActiveTab('credentials')}
                  style={{
                    ...styles.tabBtn,
                    background: activeTab === 'credentials' ? 'var(--gradient)' : 'transparent',
                    color: activeTab === 'credentials' ? '#fff' : 'var(--text-secondary)',
                    boxShadow: activeTab === 'credentials' ? '0 4px 15px rgba(6, 182, 212, 0.25)' : 'none',
                  }}
                >
                  <span style={{ fontSize: '1.1rem' }}>🏫</span> Lý Lịch
                </button>
                <button
                  onClick={() => setActiveTab('competencies')}
                  style={{
                    ...styles.tabBtn,
                    background: activeTab === 'competencies' ? 'var(--gradient)' : 'transparent',
                    color: activeTab === 'competencies' ? '#fff' : 'var(--text-secondary)',
                    boxShadow: activeTab === 'competencies' ? '0 4px 15px rgba(6, 182, 212, 0.25)' : 'none',
                  }}
                >
                  <span style={{ fontSize: '1.1rem' }}>🧠</span> Năng Lực
                </button>
                <button
                  onClick={() => setActiveTab('activity')}
                  style={{
                    ...styles.tabBtn,
                    background: activeTab === 'activity' ? 'var(--gradient)' : 'transparent',
                    color: activeTab === 'activity' ? '#fff' : 'var(--text-secondary)',
                    boxShadow: activeTab === 'activity' ? '0 4px 15px rgba(6, 182, 212, 0.25)' : 'none',
                  }}
                >
                  <span style={{ fontSize: '1.1rem' }}>📊</span> GitHub Stats
                </button>
              </div>

              {/* Tab Content Panel */}
              <div style={styles.tabContent}>
                {activeTab === 'credentials' && (
                  <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxHeight: '310px', overflowY: 'auto', paddingRight: '4px' }}>
                    {/* Education Part */}
                    <div>
                      <div style={styles.infoCardHeader}>
                        <span style={{ fontSize: '1.1rem' }}>🏫</span>
                        <span style={styles.infoCardTitle}>Education</span>
                      </div>
                      <p style={styles.infoCardMain}>{education.university}</p>
                      <p style={styles.infoCardSub}>{education.major}</p>
                      <div style={styles.infoCardMeta}>
                        <span>GPA <strong style={{ color: '#22d3ee' }}>{education.gpa}</strong></span>
                        <span style={{ color: 'var(--text-muted)' }}>·</span>
                        <span>Grad <strong style={{ color: '#22d3ee' }}>{education.graduation}</strong></span>
                      </div>
                    </div>

                    <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)', margin: '4px 0' }} />

                    {/* Awards Part */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={styles.infoCardHeader}>
                        <span style={{ fontSize: '1.1rem' }}>🏆</span>
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
                )}

                {activeTab === 'competencies' && (
                  <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxHeight: '310px', overflowY: 'auto', paddingRight: '4px' }}>
                    <div style={styles.infoCardHeader}>
                      <span style={{ fontSize: '1.1rem' }}>🧠</span>
                      <span style={styles.infoCardTitle}>Core Competencies</span>
                    </div>
                    <div style={styles.competencyGrid}>
                      <div style={styles.competencyItem}>
                        <div style={styles.competencyHeader}>🧠 Business Logic</div>
                        <p style={styles.competencyText}>Root Cause Analysis • Problem Structuring • KPIs Framework</p>
                      </div>
                      <div style={styles.competencyItem}>
                        <div style={styles.competencyHeader}>⚙️ Business Analysis</div>
                        <p style={styles.competencyText}>BPMN 2.0 • BRD/SRS • Agile/Scrum • Multi-domain (Finance, E-com, Real Estate)</p>
                      </div>
                      <div style={styles.competencyItem}>
                        <div style={styles.competencyHeader}>📈 Analytics & Automation</div>
                        <p style={styles.competencyText}>Data Processing (Python, R) • Web Scraping & Automation (Selenium)</p>
                      </div>
                      <div style={styles.competencyItem}>
                        <div style={styles.competencyHeader}>🎨 Visualization</div>
                        <p style={styles.competencyText}>UI/UX Dashboards (Power BI, Tableau, Looker Studio) • Data Storytelling</p>
                      </div>
                      <div style={styles.competencyItem}>
                        <div style={styles.competencyHeader}>🏗️ Data Engineering & Big Data</div>
                        <p style={styles.competencyText}>Apache Spark • Hadoop (HDFS) • MSSQL Server • Docker • GCP Cloud Infra</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'activity' && (
                  <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxHeight: '310px', overflowY: 'auto', paddingRight: '4px' }}>
                    <div style={styles.infoCardHeader}>
                      <span style={{ fontSize: '1.1rem' }}>📊</span>
                      <span style={styles.infoCardTitle}>GitHub Stats</span>
                    </div>

                    <div style={styles.githubStatsContainer}>
                      <img
                        src="https://github-readme-stats.vercel.app/api?username=HoangDiine&show_icons=true&theme=tokyonight&hide_border=true"
                        alt="GitHub Stats"
                        style={styles.githubStatImage}
                      />
                      <img
                        src="https://streak-stats.demolab.com/?user=HoangDiine&theme=tokyonight&hide_border=true"
                        alt="GitHub Streak"
                        style={styles.githubStatImage}
                      />
                    </div>
                  </div>
                )}
              </div>
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
  heroText: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 20px',
    borderRadius: '50px',
    background: 'rgba(46,204,113,0.08)',
    border: '1px solid rgba(46,204,113,0.25)',
    color: '#16a34a',
    fontSize: '0.82rem',
    fontWeight: 700,
    fontFamily: 'Outfit',
    width: 'fit-content',
    letterSpacing: '0.02em',
  },
  badgeDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    background: '#2ecc71',
    boxShadow: '0 0 10px #2ecc71',
    animation: 'pulse 2s infinite',
    display: 'inline-block',
  },
  heroName: {
    fontFamily: 'Outfit',
    fontWeight: 800,
    fontSize: 'clamp(2.8rem, 6vw, 4.8rem)',
    lineHeight: 1.05,
    letterSpacing: '-0.03em',
  },
  roleRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    flexWrap: 'wrap',
  },
  roleStatic: {
    fontFamily: 'Outfit',
    fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
    fontWeight: 700,
    color: 'var(--text-secondary)',
  },
  roleTyping: {
    fontFamily: 'Outfit',
    fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
    fontWeight: 800,
    minWidth: '200px',
  },
  quote: {
    fontSize: '0.98rem',
    color: 'var(--text-secondary)',
    fontStyle: 'italic',
    borderLeft: '3px solid var(--accent-3)',
    paddingLeft: '16px',
    lineHeight: 1.65,
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
    gap: '40px',
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
    fontSize: '2.2rem',
    lineHeight: 1,
  },
  statLabel: {
    fontSize: '0.78rem',
    color: 'var(--text-muted)',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    fontFamily: 'Be Vietnam Pro',
    fontWeight: 600,
  },
  ctas: {
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
    marginTop: '8px',
  },
  socialLinks: {
    display: 'flex',
    gap: '12px',
    marginTop: '4px',
  },
  // Right side
  heroRight: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    alignItems: 'center',
  },
  avatarContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatarRing: {
    position: 'relative',
    padding: '5px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, var(--accent-1), var(--accent-2), var(--accent-3), var(--accent-1))',
    backgroundSize: '300% 300%',
    animation: 'gradientRotate 6s linear infinite',
    boxShadow: '0 12px 40px rgba(6, 182, 212, 0.25)',
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
    fontSize: '2.8rem',
    background: 'var(--gradient-text)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  infoCard: {
    width: '100%',
    background: 'var(--bg-card)',
    backdropFilter: 'blur(24px)',
    border: '1px solid var(--border)',
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
    fontSize: '0.82rem',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    color: 'var(--text-muted)',
  },
  infoCardMain: {
    fontFamily: 'Outfit',
    fontWeight: 700,
    fontSize: '1rem',
    color: 'var(--text-primary)',
    lineHeight: 1.3,
  },
  infoCardSub: {
    fontSize: '0.85rem',
    color: 'var(--text-secondary)',
  },
  infoCardMeta: {
    display: 'flex',
    gap: '8px',
    fontSize: '0.8rem',
    color: 'var(--text-secondary)',
    flexWrap: 'wrap',
  },
  tabCard: {
    width: '100%',
    background: 'var(--bg-card)',
    backdropFilter: 'blur(24px)',
    border: '1px solid var(--border)',
    borderRadius: '24px',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    boxShadow: 'var(--shadow-card)',
  },
  tabHeader: {
    display: 'flex',
    background: 'rgba(15, 23, 42, 0.04)',
    borderRadius: '30px',
    padding: '4px',
    border: '1px solid rgba(15, 23, 42, 0.06)',
    gap: '4px',
  },
  tabBtn: {
    flex: 1,
    background: 'none',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
    fontFamily: 'Outfit',
    fontWeight: 700,
    fontSize: '0.82rem',
    padding: '10px 14px',
    transition: 'var(--transition)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    outline: 'none',
  },
  tabContent: {
    minHeight: '160px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  activityImageWrapper: {
    width: '100%',
    height: '150px',
    borderRadius: '12px',
    overflow: 'hidden',
    border: '1px solid var(--border)',
    background: 'var(--bg-secondary)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activityImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  activityCaption: {
    fontSize: '0.78rem',
    color: 'var(--text-secondary)',
    fontStyle: 'italic',
    textAlign: 'center',
    margin: '4px 0 0',
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
  competencyGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  competencyItem: {
    background: 'rgba(15, 23, 42, 0.02)',
    border: '1px solid var(--border)',
    borderRadius: '12px',
    padding: '12px 14px',
    display: 'flex',
    flexDirection: 'column',
    gap: '3px',
  },
  competencyHeader: {
    fontFamily: 'Outfit',
    fontWeight: 700,
    fontSize: '0.88rem',
    color: 'var(--accent-3)',
  },
  competencyText: {
    fontSize: '0.8rem',
    color: 'var(--text-secondary)',
    margin: 0,
    lineHeight: 1.45,
  },
  githubStatsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    marginTop: '4px',
  },
  githubStatImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '12px',
    border: '1px solid var(--border)',
  },
  carouselContainer: {
    position: 'relative',
    width: '100%',
    borderRadius: '12px',
    overflow: 'hidden',
  },
  carouselNavBtn: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'rgba(255, 255, 255, 0.8)',
    border: '1px solid var(--border)',
    width: '28px',
    height: '28px',
    borderRadius: '50%',
    color: 'var(--text-primary)',
    fontSize: '1.2rem',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 5,
    outline: 'none',
    transition: 'var(--transition)',
    paddingBottom: '3px',
  },
  carouselDots: {
    position: 'absolute',
    bottom: '8px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '6px',
    zIndex: 5,
  },
  carouselDot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    cursor: 'pointer',
    transition: 'background 0.2s',
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
    border: '2px solid var(--border-glow)',
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
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(8px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .fade-in {
    animation: fadeIn 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }
  .hero-layout {
    display: grid;
    grid-template-columns: 1fr 420px;
    gap: 60px;
    align-items: center;
  }
  @media (max-width: 1024px) {
    .hero-layout {
      grid-template-columns: 1fr !important;
      gap: 40px !important;
    }
  }
`;
document.head.appendChild(style);
