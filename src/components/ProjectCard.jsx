import React, { useState } from 'react';

const TAG_COLORS = {
  "Python": { bg: "rgba(55,118,171,0.2)", color: "#4ea8de", border: "rgba(55,118,171,0.4)" },
  "BPMN": { bg: "rgba(29,78,216,0.2)", color: "#93c5fd", border: "rgba(29,78,216,0.4)" },
  "K-Means": { bg: "rgba(14,165,233,0.15)", color: "#67e8f9", border: "rgba(14,165,233,0.4)" },
  "Association Rules": { bg: "rgba(34,211,238,0.15)", color: "#a5f3fc", border: "rgba(34,211,238,0.4)" },
  "Tableau": { bg: "rgba(233,118,39,0.2)", color: "#f0a56c", border: "rgba(233,118,39,0.4)" },
  "KPI Analysis": { bg: "rgba(46,204,113,0.15)", color: "#6ed69a", border: "rgba(46,204,113,0.4)" },
  "WordPress": { bg: "rgba(33,117,155,0.2)", color: "#7dcde6", border: "rgba(33,117,155,0.4)" },
  "WooCommerce": { bg: "rgba(127,84,179,0.2)", color: "#b59adb", border: "rgba(127,84,179,0.4)" },
  "HubSpot CRM": { bg: "rgba(255,122,89,0.15)", color: "#ffab93", border: "rgba(255,122,89,0.4)" },
  "Looker Studio": { bg: "rgba(66,133,244,0.15)", color: "#7ab4f7", border: "rgba(66,133,244,0.4)" },
  "Funnel Analysis": { bg: "rgba(14,165,233,0.15)", color: "#67e8f9", border: "rgba(14,165,233,0.4)" },
  "LangGraph": { bg: "rgba(65,41,145,0.25)", color: "#a08cf0", border: "rgba(65,41,145,0.5)" },
  "Gemini AI": { bg: "rgba(66,133,244,0.15)", color: "#7ab4f7", border: "rgba(66,133,244,0.4)" },
  "Django": { bg: "rgba(9,46,32,0.3)", color: "#6fc9a2", border: "rgba(9,46,32,0.6)" },
  "React": { bg: "rgba(97,218,251,0.12)", color: "#61DAFB", border: "rgba(97,218,251,0.3)" },
  "SSE Streaming": { bg: "rgba(14,165,233,0.15)", color: "#67e8f9", border: "rgba(14,165,233,0.4)" },
  "Power BI": { bg: "rgba(242,200,17,0.15)", color: "#F2C811", border: "rgba(242,200,17,0.4)" },
  "Excel": { bg: "rgba(33,115,70,0.2)", color: "#6ed69a", border: "rgba(33,115,70,0.4)" },
  "Financial Analysis": { bg: "rgba(29,78,216,0.2)", color: "#93c5fd", border: "rgba(29,78,216,0.4)" },
  "Ratio Analysis": { bg: "rgba(14,165,233,0.15)", color: "#67e8f9", border: "rgba(14,165,233,0.4)" },
  "Trend Analysis": { bg: "rgba(52,152,219,0.15)", color: "#7ec8f0", border: "rgba(52,152,219,0.4)" },
  "SQL Server": { bg: "rgba(204,41,39,0.2)", color: "#e87170", border: "rgba(204,41,39,0.4)" },
  "ERD Design": { bg: "rgba(29,78,216,0.2)", color: "#93c5fd", border: "rgba(29,78,216,0.4)" },
  "Stored Procedures": { bg: "rgba(14,165,233,0.15)", color: "#67e8f9", border: "rgba(14,165,233,0.4)" },
  "Database Security": { bg: "rgba(46,204,113,0.15)", color: "#6ed69a", border: "rgba(46,204,113,0.4)" },
  "GCP": { bg: "rgba(66,133,244,0.15)", color: "#7ab4f7", border: "rgba(66,133,244,0.4)" },
  "PostgreSQL": { bg: "rgba(51,103,145,0.15)", color: "#6eb2e6", border: "rgba(51,103,145,0.4)" },
  "BigQuery": { bg: "rgba(0,162,232,0.15)", color: "#3fc7fa", border: "rgba(0,162,232,0.4)" },
  "MCP": { bg: "rgba(46,204,113,0.15)", color: "#6ed69a", border: "rgba(46,204,113,0.4)" },
  "Google ADK": { bg: "rgba(244,180,0,0.12)", color: "#f7ca40", border: "rgba(244,180,0,0.35)" },
};

function getTagStyle(tag) {
  return TAG_COLORS[tag] || { bg: "rgba(14,165,233,0.12)", color: "#67e8f9", border: "rgba(14,165,233,0.3)" };
}

export default function ProjectCard({ project, onClick }) {
  const [imgError, setImgError] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <article
      style={{
        ...styles.card,
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        borderColor: hovered ? 'rgba(14,165,233,0.4)' : 'rgba(255,255,255,0.06)',
        boxShadow: hovered ? '0 20px 60px rgba(14,165,233,0.18)' : 'none',
        cursor: 'pointer',
      }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onClick?.(); }}
    >
      {/* Image */}
      <div style={styles.imageWrapper}>
        {!imgError ? (
          <img
            src={project.image}
            alt={project.title}
            style={{
              ...styles.image,
              transform: hovered ? 'scale(1.07)' : 'scale(1)',
            }}
            onError={() => setImgError(true)}
          />
        ) : (
          <div style={styles.imageFallback}>
            <span style={{ fontSize: '3rem' }}>📊</span>
          </div>
        )}
        <div style={{
          ...styles.imageOverlay,
          opacity: hovered ? 1 : 0.6,
        }} />

        {/* Category Badge */}
        <span style={styles.categoryBadge}>{project.category}</span>

        {/* "View Details" pill – appears on hover */}
        <div style={{
          ...styles.viewDetailsPill,
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateY(0)' : 'translateY(8px)',
        }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          View Details
        </div>
      </div>

      {/* Content */}
      <div style={styles.content}>
        <h3 style={styles.title}>{project.title}</h3>
        <p style={styles.description}>{project.description}</p>

        {/* Tags */}
        <div style={styles.tags}>
          {project.tags.slice(0, 4).map((tag) => {
            const ts = getTagStyle(tag);
            return (
              <span key={tag} style={{ ...styles.tag, background: ts.bg, color: ts.color, borderColor: ts.border }}>
                {tag}
              </span>
            );
          })}
          {project.tags.length > 4 && (
            <span style={{ ...styles.tag, background: 'rgba(255,255,255,0.05)', color: 'var(--text-muted)', borderColor: 'rgba(255,255,255,0.1)' }}>
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        {/* Highlights */}
        <ul style={styles.highlights}>
          {project.highlights.map((h, i) => (
            <li key={i} style={styles.highlightItem}>
              <span style={styles.dot}>▸</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>

        {/* Footer Actions */}
        <div style={styles.actions}>
          {/* Click hint */}
          <span style={{ ...styles.clickHint, opacity: hovered ? 0.9 : 0.5 }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            Click để xem chi tiết
          </span>

          <div style={{ display: 'flex', gap: 8 }}>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                style={styles.btnGhost}
                onClick={e => e.stopPropagation()}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                GitHub
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="btn-gradient"
                style={{ padding: '7px 16px', fontSize: '0.8rem' }}
                onClick={e => e.stopPropagation()}
              >
                <span>↗ {project.demoLabel || 'Demo'}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

const styles = {
  card: {
    background: 'rgba(9,18,40,0.65)',
    backdropFilter: 'blur(20px)',
    border: '1px solid',
    borderRadius: 20,
    overflow: 'hidden',
    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
    display: 'flex',
    flexDirection: 'column',
  },
  imageWrapper: {
    position: 'relative',
    height: 210,
    overflow: 'hidden',
    flexShrink: 0,
  },
  image: {
    width: '100%', height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease',
    display: 'block',
  },
  imageFallback: {
    width: '100%', height: '100%',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    background: 'linear-gradient(135deg, rgba(29,78,216,0.2), rgba(14,165,233,0.1))',
  },
  imageOverlay: {
    position: 'absolute', inset: 0,
    background: 'linear-gradient(to top, rgba(5,11,24,0.9) 0%, rgba(5,11,24,0.2) 60%, transparent 100%)',
    transition: 'opacity 0.3s',
  },
  categoryBadge: {
    position: 'absolute', top: 12, right: 12,
    padding: '4px 12px', borderRadius: 50,
    background: 'rgba(5,11,24,0.75)', backdropFilter: 'blur(10px)',
    border: '1px solid rgba(14,165,233,0.4)',
    color: '#67e8f9', fontSize: '0.7rem', fontWeight: 700,
    fontFamily: 'Outfit', letterSpacing: '0.05em', textTransform: 'uppercase',
  },
  viewDetailsPill: {
    position: 'absolute',
    bottom: 12, left: '50%', transform: 'translateX(-50%)',
    display: 'flex', alignItems: 'center', gap: 6,
    padding: '6px 16px',
    background: 'rgba(14,165,233,0.9)',
    backdropFilter: 'blur(8px)',
    borderRadius: 50,
    color: '#fff',
    fontSize: '0.78rem', fontWeight: 700, fontFamily: 'Outfit',
    transition: 'all 0.3s ease',
    whiteSpace: 'nowrap',
    pointerEvents: 'none',
  },
  content: {
    padding: '18px 22px 20px',
    display: 'flex', flexDirection: 'column', gap: 10,
    flex: 1,
  },
  title: {
    fontFamily: 'Outfit', fontWeight: 700,
    fontSize: '1.05rem', color: '#EFF6FF', lineHeight: 1.3, margin: 0,
  },
  description: {
    color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.65, margin: 0,
  },
  tags: { display: 'flex', flexWrap: 'wrap', gap: 6 },
  tag: {
    padding: '3px 10px', borderRadius: 50,
    fontSize: '0.71rem', fontWeight: 600,
    fontFamily: 'Outfit', border: '1px solid', letterSpacing: '0.02em',
  },
  highlights: { listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 5, margin: 0, padding: 0 },
  highlightItem: {
    display: 'flex', gap: 7,
    fontSize: '0.8rem', color: 'var(--text-secondary)',
    lineHeight: 1.5, alignItems: 'flex-start',
  },
  dot: { color: '#0ea5e9', flexShrink: 0, marginTop: 1, fontSize: '0.72rem' },
  actions: {
    display: 'flex', alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap', gap: 8,
    marginTop: 'auto', paddingTop: 6,
  },
  clickHint: {
    display: 'flex', alignItems: 'center', gap: 5,
    fontSize: '0.75rem', color: '#67e8f9',
    fontFamily: 'Outfit', fontWeight: 500,
    transition: 'opacity 0.2s',
  },
  btnGhost: {
    display: 'inline-flex', alignItems: 'center', gap: 5,
    padding: '7px 14px', borderRadius: 50,
    border: '1px solid rgba(255,255,255,0.12)',
    background: 'rgba(255,255,255,0.04)',
    color: 'rgba(255,255,255,0.7)',
    fontSize: '0.78rem', fontWeight: 600, fontFamily: 'Outfit',
    transition: 'all 0.2s', textDecoration: 'none',
  },
};
