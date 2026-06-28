import React, { useEffect, useRef } from 'react';
import { skills } from '../data/projects';

const SKILL_ICONS = {
  "Business Analysis": "🧠",
  "Analytics & Automation": "📈",
  "Visualization & BI": "🎨",
  "Data Engineering": "🏗️",
};

const ACCENT_COLORS = {
  "Business Analysis": { glow: "rgba(245,158,11,0.12)", border: "rgba(245,158,11,0.22)", badge: "rgba(245,158,11,0.06)", badgeText: "#b45309" },
  "Analytics & Automation": { glow: "rgba(6,182,212,0.12)", border: "rgba(6,182,212,0.22)", badge: "rgba(6,182,212,0.06)", badgeText: "#0369a1" },
  "Visualization & BI": { glow: "rgba(6,182,212,0.10)", border: "rgba(6,182,212,0.20)", badge: "rgba(6,182,212,0.04)", badgeText: "#0e7490" },
  "Data Engineering": { glow: "rgba(79,70,229,0.12)", border: "rgba(79,70,229,0.22)", badge: "rgba(79,70,229,0.06)", badgeText: "#4338ca" },
};

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      },
      { threshold: 0.15 }
    );
    const el = ref.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, []);
  return ref;
}

function SkillGroup({ groupName, data, delay }) {
  const ref = useReveal();
  const color = ACCENT_COLORS[groupName];

  return (
    <div
      ref={ref}
      className="reveal skill-card"
      style={{
        ...styles.skillCard,
        borderColor: color.border,
        transitionDelay: `${delay}ms`,
      }}
    >
      {/* Glow background */}
      <div style={{ ...styles.cardGlow, background: `radial-gradient(circle at top left, ${color.glow}, transparent 70%)` }} />

      <div style={styles.cardContent}>
        <div style={styles.groupHeader}>
          <span style={styles.groupIcon}>{data.icon}</span>
          <h3 style={styles.groupName}>{groupName}</h3>
        </div>

        <div style={styles.badgesGrid}>
          {data.items.map((item) => (
            <span
              key={item}
              className="skill-badge-item"
              style={{
                ...styles.badge,
                background: color.badge,
                color: color.badgeText,
                borderColor: color.border,
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  const titleRef = useReveal();

  return (
    <section id="skills" className="section" style={{ position: 'relative' }}>
      {/* Subtle bg gradient */}
      <div style={styles.bgAccent} />

      <div className="container">
        {/* Section Title */}
        <div ref={titleRef} className="reveal section-title-wrapper">
          <h2>
            Tech Stack &{' '}
            <span className="gradient-text">Core Skills</span>
          </h2>
          <p className="section-subtitle">
            Từ phân tích nghiệp vụ đến kỹ thuật dữ liệu — công cụ và phương pháp tôi dùng để giải quyết bài toán thực tế.
          </p>
          <div className="section-line" />
        </div>

        {/* Skills Grid */}
        <div style={styles.grid}>
          {Object.entries(skills).map(([groupName, data], i) => (
            <SkillGroup
              key={groupName}
              groupName={groupName}
              data={data}
              delay={i * 100}
            />
          ))}
        </div>

        {/* Tech Logos Strip */}
        <div style={styles.logoStrip}>
          <p style={styles.logoLabel}>Also working with</p>
          <div style={styles.logos}>
            {['Python', 'SQL', 'R', 'Docker', 'GCP', 'Apache Spark', 'Hadoop', 'LangGraph', 'Selenium'].map((tech) => (
              <span key={tech} className="tech-logo-chip" style={styles.logoChip}>{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  bgAccent: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '800px',
    height: '400px',
    background: 'radial-gradient(ellipse, rgba(79,70,229,0.05) 0%, transparent 70%)',
    pointerEvents: 'none',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '24px',
  },
  skillCard: {
    position: 'relative',
    background: 'var(--bg-card)',
    backdropFilter: 'blur(24px)',
    border: '1px solid',
    borderRadius: '24px',
    overflow: 'hidden',
    transition: 'var(--transition)',
    boxShadow: 'var(--shadow-card)',
  },
  cardGlow: {
    position: 'absolute',
    inset: 0,
    pointerEvents: 'none',
  },
  cardContent: {
    position: 'relative',
    zIndex: 1,
    padding: '28px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  groupHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  groupIcon: {
    fontSize: '2rem',
    lineHeight: 1,
  },
  groupName: {
    fontFamily: 'Outfit',
    fontWeight: 800,
    fontSize: '1.15rem',
    color: 'var(--text-primary)',
  },
  badgesGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
  },
  badge: {
    padding: '6px 14px',
    borderRadius: '50px',
    fontSize: '0.8rem',
    fontWeight: 700,
    fontFamily: 'Outfit',
    border: '1px solid',
    letterSpacing: '0.02em',
    transition: 'var(--transition)',
    cursor: 'default',
  },
  logoStrip: {
    marginTop: '64px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
  },
  logoLabel: {
    fontSize: '0.8rem',
    color: 'var(--text-muted)',
    textTransform: 'uppercase',
    letterSpacing: '0.12em',
    fontFamily: 'Outfit',
    fontWeight: 700,
  },
  logos: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px',
    justifyContent: 'center',
  },
  logoChip: {
    padding: '8px 18px',
    borderRadius: '50px',
    background: 'rgba(15,23,42,0.02)',
    border: '1px solid var(--border)',
    color: 'var(--text-secondary)',
    fontSize: '0.85rem',
    fontFamily: 'Outfit',
    fontWeight: 700,
    transition: 'var(--transition)',
  },
};

// Inject custom styles for hover effects and animations
const skillStyle = document.createElement('style');
skillStyle.textContent = `
  .skill-card:hover {
    transform: translateY(-6px);
    border-color: var(--border-hover) !important;
    box-shadow: var(--shadow-hover) !important;
  }
  .skill-badge-item:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(15,23,42,0.05);
  }
  .tech-logo-chip:hover {
    background: rgba(79, 70, 229, 0.08) !important;
    border-color: var(--border-hover) !important;
    color: var(--accent-2) !important;
    transform: translateY(-2px);
  }
`;
if (!document.getElementById('skills-custom-style')) {
  skillStyle.id = 'skills-custom-style';
  document.head.appendChild(skillStyle);
}
