import React, { useState } from 'react';

const TAG_COLORS = {
  "Python": { bg: "rgba(55,118,171,0.08)", color: "#2c5e85", border: "rgba(55,118,171,0.2)" },
  "BPMN": { bg: "rgba(29,78,216,0.08)", color: "#1d4ed8", border: "rgba(29,78,216,0.2)" },
  "K-Means": { bg: "rgba(14,165,233,0.08)", color: "#0369a1", border: "rgba(14,165,233,0.2)" },
  "Association Rules": { bg: "rgba(34,211,238,0.08)", color: "#0891b2", border: "rgba(34,211,238,0.2)" },
  "Tableau": { bg: "rgba(233,118,39,0.08)", color: "#c2410c", border: "rgba(233,118,39,0.2)" },
  "KPI Analysis": { bg: "rgba(46,204,113,0.08)", color: "#15803d", border: "rgba(46,204,113,0.2)" },
  "WordPress": { bg: "rgba(33,117,155,0.08)", color: "#1d6688", border: "rgba(33,117,155,0.2)" },
  "WooCommerce": { bg: "rgba(127,84,179,0.08)", color: "#6d28d9", border: "rgba(127,84,179,0.2)" },
  "HubSpot CRM": { bg: "rgba(255,122,89,0.08)", color: "#c2410c", border: "rgba(255,122,89,0.2)" },
  "Looker Studio": { bg: "rgba(66,133,244,0.08)", color: "#1d4ed8", border: "rgba(66,133,244,0.2)" },
  "Funnel Analysis": { bg: "rgba(14,165,233,0.08)", color: "#0369a1", border: "rgba(14,165,233,0.2)" },
  "LangGraph": { bg: "rgba(65,41,145,0.08)", color: "#5b21b6", border: "rgba(65,41,145,0.2)" },
  "Gemini AI": { bg: "rgba(66,133,244,0.08)", color: "#1d4ed8", border: "rgba(66,133,244,0.2)" },
  "Django": { bg: "rgba(9,46,32,0.08)", color: "#15803d", border: "rgba(9,46,32,0.2)" },
  "React": { bg: "rgba(14,165,233,0.08)", color: "#0369a1", border: "rgba(14,165,233,0.2)" },
  "SSE Streaming": { bg: "rgba(14,165,233,0.08)", color: "#0369a1", border: "rgba(14,165,233,0.2)" },
  "Power BI": { bg: "rgba(217,119,6,0.08)", color: "#b45309", border: "rgba(217,119,6,0.2)" },
  "Excel": { bg: "rgba(33,115,70,0.08)", color: "#15803d", border: "rgba(33,115,70,0.2)" },
  "Financial Analysis": { bg: "rgba(29,78,216,0.08)", color: "#1d4ed8", border: "rgba(29,78,216,0.2)" },
  "Ratio Analysis": { bg: "rgba(14,165,233,0.08)", color: "#0369a1", border: "rgba(14,165,233,0.2)" },
  "Trend Analysis": { bg: "rgba(52,152,219,0.08)", color: "#1d4ed8", border: "rgba(52,152,219,0.2)" },
  "SQL Server": { bg: "rgba(204,41,39,0.08)", color: "#b91c1c", border: "rgba(204,41,39,0.2)" },
  "ERD Design": { bg: "rgba(29,78,216,0.08)", color: "#1d4ed8", border: "rgba(29,78,216,0.2)" },
  "Stored Procedures": { bg: "rgba(14,165,233,0.08)", color: "#0369a1", border: "rgba(14,165,233,0.2)" },
  "Database Security": { bg: "rgba(46,204,113,0.08)", color: "#15803d", border: "rgba(46,204,113,0.2)" },
  "GCP": { bg: "rgba(66,133,244,0.08)", color: "#1d4ed8", border: "rgba(66,133,244,0.2)" },
  "PostgreSQL": { bg: "rgba(51,103,145,0.08)", color: "#2c5e85", border: "rgba(51,103,145,0.2)" },
  "BigQuery": { bg: "rgba(0,162,232,0.08)", color: "#0369a1", border: "rgba(0,162,232,0.2)" },
  "MCP": { bg: "rgba(46,204,113,0.08)", color: "#15803d", border: "rgba(46,204,113,0.2)" },
  "Google ADK": { bg: "rgba(217,119,6,0.08)", color: "#b45309", border: "rgba(217,119,6,0.2)" },
};

function getTagStyle(tag) {
  return TAG_COLORS[tag] || { bg: "rgba(14,165,233,0.08)", color: "#0369a1", border: "rgba(14,165,233,0.2)" };
}

export default function ProjectCard({ project, onClick }) {
  const [imgError, setImgError] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <article
      style={{
        ...styles.card,
        transform: hovered ? 'translateY(-8px) scale(1.01)' : 'translateY(0) scale(1)',
        borderColor: hovered ? 'var(--border-hover)' : 'var(--border)',
        boxShadow: hovered ? 'var(--shadow-hover)' : 'var(--shadow-card)',
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
              transform: hovered ? 'scale(1.08)' : 'scale(1)',
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
          opacity: hovered ? 1 : 0.65,
        }} />

        {/* Category Badge */}
        <span style={styles.categoryBadge}>{project.category}</span>

        {/* "View Details" pill – appears on hover */}
        <div style={{
          ...styles.viewDetailsPill,
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateY(0) translateX(-50%)' : 'translateY(8px) translateX(-50%)',
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
            <span style={{ ...styles.tag, background: 'rgba(15,23,42,0.04)', color: 'var(--text-secondary)', borderColor: 'var(--border)' }}>
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
          <span style={{ ...styles.clickHint, opacity: hovered ? 0.95 : 0.6 }}>
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
                style={{ padding: '7px 18px', fontSize: '0.8rem', fontFamily: 'Outfit', fontWeight: 700 }}
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
    background: 'var(--bg-card)',
    backdropFilter: 'blur(24px)',
    border: '1px solid var(--border)',
    borderRadius: 24,
    overflow: 'hidden',
    transition: 'var(--transition)',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: 'var(--shadow-card)',
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
    transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
    display: 'block',
  },
  imageFallback: {
    width: '100%', height: '100%',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    background: 'linear-gradient(135deg, rgba(79,70,229,0.15), rgba(6,182,212,0.1))',
  },
  imageOverlay: {
    position: 'absolute', inset: 0,
    background: 'linear-gradient(to top, rgba(3,7,18,0.95) 0%, rgba(3,7,18,0.2) 60%, transparent 100%)',
    transition: 'opacity 0.3s',
  },
  categoryBadge: {
    position: 'absolute', top: 12, right: 12,
    padding: '5px 14px', borderRadius: 50,
    background: 'rgba(3,7,18,0.85)', backdropFilter: 'blur(10px)',
    border: '1px solid var(--border)',
    color: '#38bdf8', fontSize: '0.72rem', fontWeight: 700,
    fontFamily: 'Outfit', letterSpacing: '0.05em', textTransform: 'uppercase',
  },
  viewDetailsPill: {
    position: 'absolute',
    bottom: 12, left: '50%', transform: 'translateX(-50%)',
    display: 'flex', alignItems: 'center', gap: 6,
    padding: '6px 16px',
    background: 'var(--accent-2)',
    backdropFilter: 'blur(8px)',
    borderRadius: 50,
    color: '#fff',
    fontSize: '0.78rem', fontWeight: 700, fontFamily: 'Outfit',
    transition: 'var(--transition)',
    whiteSpace: 'nowrap',
    pointerEvents: 'none',
  },
  content: {
    padding: '20px 24px 24px',
    display: 'flex', flexDirection: 'column', gap: 12,
    flex: 1,
  },
  title: {
    fontFamily: 'Outfit', fontWeight: 800,
    fontSize: '1.125rem', color: 'var(--text-primary)', lineHeight: 1.3, margin: 0,
  },
  description: {
    color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.65, margin: 0,
    fontFamily: 'Be Vietnam Pro',
  },
  tags: { display: 'flex', flexWrap: 'wrap', gap: 6 },
  tag: {
    padding: '4px 12px', borderRadius: 50,
    fontSize: '0.72rem', fontWeight: 700,
    fontFamily: 'Outfit', border: '1px solid', letterSpacing: '0.02em',
  },
  highlights: { listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6, margin: 0, padding: 0 },
  highlightItem: {
    display: 'flex', gap: 8,
    fontSize: '0.8rem', color: 'var(--text-secondary)',
    lineHeight: 1.5, alignItems: 'flex-start',
    fontFamily: 'Be Vietnam Pro',
  },
  dot: { color: 'var(--accent-2)', flexShrink: 0, marginTop: 1, fontSize: '0.72rem' },
  actions: {
    display: 'flex', alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap', gap: 8,
    marginTop: 'auto', paddingTop: 8,
  },
  clickHint: {
    display: 'flex', alignItems: 'center', gap: 5,
    fontSize: '0.75rem', color: 'var(--accent-2)',
    fontFamily: 'Outfit', fontWeight: 700,
    transition: 'opacity 0.2s',
  },
  btnGhost: {
    display: 'inline-flex', alignItems: 'center', gap: 5,
    padding: '7px 16px', borderRadius: 50,
    border: '1px solid var(--border)',
    background: 'rgba(15,23,42,0.02)',
    color: 'var(--text-secondary)',
    fontSize: '0.78rem', fontWeight: 700, fontFamily: 'Outfit',
    transition: 'var(--transition)', textDecoration: 'none',
  },
};
