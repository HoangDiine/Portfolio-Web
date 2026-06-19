import React, { useEffect, useRef } from 'react';
import { skills } from '../data/projects';

const SKILL_ICONS = {
  "Business Analysis": "🧠",
  "Analytics & Automation": "📈",
  "Visualization & BI": "🎨",
  "Data Engineering": "🏗️",
};

const ACCENT_COLORS = {
  "Business Analysis": { glow: "rgba(29,78,216,0.25)", border: "rgba(29,78,216,0.4)", badge: "rgba(29,78,216,0.15)", badgeText: "#93c5fd" },
  "Analytics & Automation": { glow: "rgba(14,165,233,0.22)", border: "rgba(14,165,233,0.38)", badge: "rgba(14,165,233,0.12)", badgeText: "#67e8f9" },
  "Visualization & BI": { glow: "rgba(34,211,238,0.2)", border: "rgba(34,211,238,0.35)", badge: "rgba(34,211,238,0.1)", badgeText: "#a5f3fc" },
  "Data Engineering": { glow: "rgba(59,130,246,0.22)", border: "rgba(59,130,246,0.38)", badge: "rgba(59,130,246,0.12)", badgeText: "#bfdbfe" },
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
      className="reveal"
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
              <span key={tech} style={styles.logoChip}>{tech}</span>
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
    background: 'radial-gradient(ellipse, rgba(138,35,135,0.06) 0%, transparent 70%)',
    pointerEvents: 'none',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '24px',
  },
  skillCard: {
    position: 'relative',
    background: 'rgba(14,14,26,0.7)',
    backdropFilter: 'blur(20px)',
    border: '1px solid',
    borderRadius: '20px',
    overflow: 'hidden',
    transition: 'all 0.6s ease',
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
    fontWeight: 700,
    fontSize: '1.1rem',
    color: 'var(--text-primary)',
  },
  badgesGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
  },
  badge: {
    padding: '5px 14px',
    borderRadius: '50px',
    fontSize: '0.8rem',
    fontWeight: 600,
    fontFamily: 'Outfit',
    border: '1px solid',
    letterSpacing: '0.02em',
    transition: 'all 0.2s',
    cursor: 'default',
  },
  logoStrip: {
    marginTop: '56px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '16px',
  },
  logoLabel: {
    fontSize: '0.8rem',
    color: 'var(--text-muted)',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    fontFamily: 'Outfit',
    fontWeight: 600,
  },
  logos: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    justifyContent: 'center',
  },
  logoChip: {
    padding: '6px 16px',
    borderRadius: '50px',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
    color: 'var(--text-muted)',
    fontSize: '0.82rem',
    fontFamily: 'Outfit',
    fontWeight: 500,
    transition: 'all 0.2s',
  },
};
