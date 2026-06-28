import React, { useState, useEffect, useCallback } from 'react';

// ── Tag Colors ──
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

// ────────────────────────────────────────────────
//  LIGHTBOX – fullscreen image viewer
// ────────────────────────────────────────────────
function Lightbox({ images, initialIndex, onClose }) {
  const [idx, setIdx] = useState(initialIndex);
  const [imgError, setImgError] = useState({});
  const [loaded, setLoaded] = useState(false);

  const prev = useCallback(() => { setLoaded(false); setIdx(i => (i - 1 + images.length) % images.length); }, [images.length]);
  const next = useCallback(() => { setLoaded(false); setIdx(i => (i + 1) % images.length); }, [images.length]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose, prev, next]);

  const img = images[idx];

  return (
    <div style={lbStyles.backdrop} onClick={onClose}>
      {/* Close */}
      <button style={lbStyles.closeBtn} onClick={onClose} aria-label="Close lightbox">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>

      {/* Prev */}
      {images.length > 1 && (
        <button style={{ ...lbStyles.navBtn, left: 20 }} onClick={e => { e.stopPropagation(); prev(); }} aria-label="Previous">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>
      )}

      {/* Main Image */}
      <div style={lbStyles.imgWrap} onClick={e => e.stopPropagation()}>
        {!loaded && !imgError[idx] && (
          <div style={lbStyles.loader}>
            <div style={lbStyles.spinner} />
          </div>
        )}
        {imgError[idx] ? (
          <div style={lbStyles.errorBox}>
            <span style={{ fontSize: '4rem' }}>📊</span>
            <p style={{ color: 'rgba(255,255,255,0.5)', marginTop: 12 }}>Image not available</p>
          </div>
        ) : (
          <img
            key={img.src}
            src={img.src}
            alt={img.caption}
            style={{ ...lbStyles.mainImg, opacity: loaded ? 1 : 0 }}
            onLoad={() => setLoaded(true)}
            onError={() => { setImgError(p => ({ ...p, [idx]: true })); setLoaded(true); }}
          />
        )}
      </div>

      {/* Next */}
      {images.length > 1 && (
        <button style={{ ...lbStyles.navBtn, right: 20 }} onClick={e => { e.stopPropagation(); next(); }} aria-label="Next">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </button>
      )}

      {/* Caption + Counter */}
      <div style={lbStyles.footer} onClick={e => e.stopPropagation()}>
        <span style={lbStyles.counter}>{idx + 1} / {images.length}</span>
        <p style={lbStyles.caption}>{img.caption}</p>
        <span style={{ width: 60 }} />
      </div>

      {/* Thumbnails strip */}
      {images.length > 1 && (
        <div style={lbStyles.thumbStrip} onClick={e => e.stopPropagation()}>
          {images.map((im, i) => (
            <button
              key={i}
              onClick={() => { setLoaded(false); setIdx(i); }}
              style={{
                ...lbStyles.thumb,
                borderColor: i === idx ? '#0ea5e9' : 'rgba(255,255,255,0.15)',
                transform: i === idx ? 'scale(1.1)' : 'scale(1)',
              }}
            >
              {imgError[i]
                ? <div style={{ fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>📊</div>
                : <img src={im.src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 6 }} onError={() => setImgError(p => ({ ...p, [i]: true }))} />
              }
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

const lbStyles = {
  backdrop: {
    position: 'fixed', inset: 0, zIndex: 3000,
    background: 'rgba(0,0,0,0.95)',
    backdropFilter: 'blur(8px)',
    display: 'flex', flexDirection: 'column',
    alignItems: 'center', justifyContent: 'center',
    animation: 'fadeInBackdrop 0.2s ease',
  },
  closeBtn: {
    position: 'absolute', top: 20, right: 20, zIndex: 10,
    width: 46, height: 46, borderRadius: 12,
    background: 'rgba(255,255,255,0.08)',
    border: '1px solid rgba(255,255,255,0.15)',
    color: '#fff', cursor: 'pointer',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    transition: 'all 0.2s',
  },
  navBtn: {
    position: 'absolute', top: '50%', transform: 'translateY(-50%)',
    width: 52, height: 52, borderRadius: 12,
    background: 'rgba(14,165,233,0.15)',
    border: '1px solid rgba(14,165,233,0.35)',
    color: '#fff', cursor: 'pointer',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    transition: 'all 0.2s', zIndex: 10,
  },
  imgWrap: {
    flex: 1,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    width: '100%', maxWidth: 1100, padding: '20px 80px',
    position: 'relative',
  },
  loader: {
    position: 'absolute',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  spinner: {
    width: 36, height: 36, borderRadius: '50%',
    border: '3px solid rgba(14,165,233,0.2)',
    borderTop: '3px solid #0ea5e9',
    animation: 'spinLoader 0.8s linear infinite',
  },
  mainImg: {
    maxWidth: '100%', maxHeight: 'calc(100vh - 200px)',
    objectFit: 'contain', borderRadius: 12,
    transition: 'opacity 0.3s ease',
    boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
  },
  errorBox: {
    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
    minHeight: 300,
  },
  footer: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    width: '100%', maxWidth: 900, padding: '8px 24px',
    flexShrink: 0,
  },
  counter: {
    background: 'rgba(6,182,212,0.15)', border: '1px solid rgba(6,182,212,0.35)',
    borderRadius: 20, padding: '4px 14px',
    fontSize: '0.8rem', fontFamily: 'Outfit', fontWeight: 700, color: '#38bdf8',
    whiteSpace: 'nowrap', flexShrink: 0, minWidth: 60, textAlign: 'center',
  },
  caption: {
    textAlign: 'center', color: 'rgba(255,255,255,0.6)',
    fontSize: '0.875rem', fontStyle: 'italic', flex: 1, margin: '0 16px',
  },
  thumbStrip: {
    display: 'flex', gap: 10, padding: '12px 24px 20px',
    overflowX: 'auto', maxWidth: '100vw', flexShrink: 0,
    justifyContent: 'center',
  },
  thumb: {
    width: 90, height: 62, borderRadius: 8, overflow: 'hidden',
    border: '2px solid', cursor: 'pointer',
    background: 'rgba(255,255,255,0.08)',
    transition: 'all 0.2s', padding: 0, flexShrink: 0,
  },
};

// ────────────────────────────────────────────────
//  IMAGE GALLERY (inside modal left column)
// ────────────────────────────────────────────────
function ImageGallery({ images, onLightbox }) {
  const [current, setCurrent] = useState(0);
  const [imgError, setImgError] = useState({});
  const [hovered, setHovered] = useState(false);

  const prev = useCallback((e) => { e.stopPropagation(); setCurrent(c => (c - 1 + images.length) % images.length); }, [images.length]);
  const next = useCallback((e) => { e.stopPropagation(); setCurrent(c => (c + 1) % images.length); }, [images.length]);

  if (!images || images.length === 0) return null;
  const img = images[current];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {/* Main Image – clickable for lightbox */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: 380,
          borderRadius: 16,
          overflow: 'hidden',
          background: 'rgba(9,18,40,0.8)',
          border: `1px solid ${hovered ? 'rgba(14,165,233,0.45)' : 'rgba(14,165,233,0.15)'}`,
          cursor: 'zoom-in',
          transition: 'border-color 0.25s',
        }}
        onClick={() => !imgError[current] && onLightbox(current)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {imgError[current] ? (
          <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, rgba(29,78,216,0.15), rgba(14,165,233,0.08))' }}>
            <span style={{ fontSize: '3rem' }}>📊</span>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: 8 }}>Image not available</p>
          </div>
        ) : (
          <img
            key={img.src}
            src={img.src}
            alt={img.caption}
            style={{
              width: '100%', height: '100%', objectFit: 'cover', display: 'block',
              transition: 'transform 0.4s ease',
              transform: hovered ? 'scale(1.03)' : 'scale(1)',
            }}
            onError={() => setImgError(p => ({ ...p, [current]: true }))}
          />
        )}

        {/* Zoom hint overlay */}
        {!imgError[current] && (
          <div style={{
            position: 'absolute', inset: 0,
            background: 'rgba(5,11,24,0.45)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            opacity: hovered ? 1 : 0,
            transition: 'opacity 0.25s',
          }}>
            <div style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
              background: 'rgba(14,165,233,0.2)', backdropFilter: 'blur(8px)',
              border: '1px solid rgba(14,165,233,0.4)',
              borderRadius: 16, padding: '14px 24px',
            }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent-2)" strokeWidth="2.5">
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                <line x1="11" y1="8" x2="11" y2="14"/>
                <line x1="8" y1="11" x2="14" y2="11"/>
              </svg>
              <span style={{ color: 'var(--accent-2)', fontSize: '0.8rem', fontFamily: 'Outfit', fontWeight: 800 }}>
                Click để xem toàn màn hình
              </span>
            </div>
          </div>
        )}

        {/* Prev / Next arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              style={{ position: 'absolute', top: '50%', left: 10, transform: 'translateY(-50%)', ...arrowStyle }}
              aria-label="Previous"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
            </button>
            <button
              onClick={next}
              style={{ position: 'absolute', top: '50%', right: 10, transform: 'translateY(-50%)', ...arrowStyle }}
              aria-label="Next"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </button>
          </>
        )}

        {/* Counter badge */}
        {images.length > 1 && (
          <div style={{
            position: 'absolute', bottom: 10, right: 12,
            background: 'rgba(3,7,18,0.85)', backdropFilter: 'blur(8px)',
            border: '1px solid var(--border)',
            borderRadius: 20, padding: '3px 11px',
            fontSize: '0.75rem', color: '#38bdf8',
            fontFamily: 'Outfit', fontWeight: 700,
          }}>
            {current + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Caption */}
      <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.78rem', fontStyle: 'italic', lineHeight: 1.4, margin: 0 }}>
        {img.caption}
      </p>

      {/* Thumbnails – bigger */}
      {images.length > 1 && (
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {images.map((im, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                flex: '1 1 80px', minWidth: 80, height: 62,
                borderRadius: 10, overflow: 'hidden', padding: 0,
                border: `2px solid ${i === current ? 'var(--accent-2)' : 'rgba(255,255,255,0.05)'}`,
                background: 'rgba(3,7,18,0.7)',
                transition: 'var(--transition)',
                opacity: i === current ? 1 : 0.6,
                transform: i === current ? 'scale(1.05)' : 'scale(1)',
                cursor: 'pointer',
              }}
            >
              {imgError[i]
                ? <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>📊</div>
                : <img src={im.src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={() => setImgError(p => ({ ...p, [i]: true }))} />
              }
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

const arrowStyle = {
  background: 'rgba(3,7,18,0.75)', border: '1px solid var(--border)',
  borderRadius: 10, width: 34, height: 34,
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  color: '#fff', cursor: 'pointer', backdropFilter: 'blur(8px)',
  transition: 'var(--transition)', zIndex: 2,
};

// ────────────────────────────────────────────────
//  PROJECT MODAL
// ────────────────────────────────────────────────
export default function ProjectModal({ project, onClose }) {
  const [lightboxIdx, setLightboxIdx] = useState(null); // null = closed

  const handleBackdrop = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape' && lightboxIdx === null) onClose(); };
    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose, lightboxIdx]);

  if (!project) return null;
  const fc = project.fullContent;

  return (
    <>
      {/* ── Lightbox (on top) ── */}
      {lightboxIdx !== null && (
        <Lightbox
          images={project.images}
          initialIndex={lightboxIdx}
          onClose={() => setLightboxIdx(null)}
        />
      )}

      {/* ── Modal ── */}
      <div style={styles.backdrop} onClick={handleBackdrop}>
        <div style={styles.modal} onClick={e => e.stopPropagation()}>

          {/* Header */}
          <div style={styles.header}>
            <div style={styles.headerLeft}>
              <span style={styles.categoryBadge}>{project.category}</span>
              <h2 style={styles.title}>{project.title}</h2>
              <div style={styles.tagRow}>
                {project.tags.map(tag => {
                  const ts = getTagStyle(tag);
                  return (
                    <span key={tag} style={{ ...styles.tag, background: ts.bg, color: ts.color, borderColor: ts.border }}>
                      {tag}
                    </span>
                  );
                })}
              </div>
            </div>
            <button onClick={onClose} style={styles.closeBtn} aria-label="Close modal">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>

          {/* Body – 2 columns */}
          <div className="project-modal-body" style={styles.body}>

            {/* LEFT: Gallery + Links */}
            <div style={styles.leftCol}>
              <ImageGallery
                images={project.images}
                onLightbox={(idx) => setLightboxIdx(idx)}
              />

              {/* Action links */}
              <div style={styles.linkBox}>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" style={styles.linkBtn}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    View on GitHub
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer" className="btn-gradient" style={{ padding: '9px 20px', fontSize: '0.875rem' }}>
                    <span>↗ {project.demoLabel || 'View Demo'}</span>
                  </a>
                )}
              </div>
            </div>

            {/* RIGHT: Content */}
            <div style={styles.rightCol}>
              {fc?.overview && (
                <div style={styles.section}>
                  <h3 style={styles.sectionTitle}><span>📋</span> Tổng quan</h3>
                  <p style={styles.overviewText}>{fc.overview}</p>
                </div>
              )}

              {fc?.objectives?.length > 0 && (
                <div style={styles.section}>
                  <h3 style={styles.sectionTitle}><span>🎯</span> Mục tiêu</h3>
                  <ul style={styles.list}>
                    {fc.objectives.map((obj, i) => (
                      <li key={i} style={styles.listItem}>
                        <span style={styles.listDot}>▸</span><span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {fc?.methodology?.length > 0 && (
                <div style={styles.section}>
                  <h3 style={styles.sectionTitle}><span>⚙️</span> Luồng phân tích</h3>
                  <div style={styles.steps}>
                    {fc.methodology.map((step, i) => (
                      <div key={i} style={styles.stepCard}>
                        <div style={styles.stepNum}>{step.step}</div>
                        <div>
                          <div style={styles.stepTitle}>{step.title}</div>
                          <div style={styles.stepDesc}>{step.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {fc?.results?.length > 0 && (
                <div style={styles.section}>
                  <h3 style={styles.sectionTitle}><span>✅</span> Kết quả nổi bật</h3>
                  <ul style={styles.list}>
                    {fc.results.map((res, i) => (
                      <li key={i} style={styles.listItem}>
                        <span style={{ ...styles.listDot, color: 'var(--accent-2)' }}>✓</span><span>{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {fc?.skills?.length > 0 && (
                <div style={styles.section}>
                  <h3 style={styles.sectionTitle}><span>💡</span> Năng lực thể hiện</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {fc.skills.map((s, i) => (
                      <span key={i} style={styles.skillChip}>{s}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

// ── Styles ──
const styles = {
  backdrop: {
    position: 'fixed', inset: 0,
    background: 'rgba(15, 23, 42, 0.4)',
    backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
    zIndex: 2000,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    padding: '24px 16px',
    animation: 'fadeInBackdrop 0.25s ease',
  },
  modal: {
    background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
    border: '1px solid var(--border)',
    borderRadius: 28,
    width: '100%',
    maxWidth: 1140,
    maxHeight: '92vh',
    display: 'flex', flexDirection: 'column',
    overflow: 'hidden',
    boxShadow: '0 40px 100px rgba(15, 23, 42, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.03)',
    animation: 'slideUpModal 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
  },
  header: {
    display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
    gap: 16, padding: '24px 32px 20px',
    borderBottom: '1px solid var(--border)', flexShrink: 0,
  },
  headerLeft: { display: 'flex', flexDirection: 'column', gap: 10, flex: 1 },
  categoryBadge: {
    display: 'inline-block', padding: '4px 14px', borderRadius: 50,
    background: 'rgba(14,165,233,0.1)', border: '1px solid var(--border)',
    color: '#0284c7', fontSize: '0.72rem', fontWeight: 700,
    fontFamily: 'Outfit', letterSpacing: '0.06em', textTransform: 'uppercase', width: 'fit-content',
  },
  title: {
    fontFamily: 'Outfit', fontWeight: 800,
    fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
    color: 'var(--text-primary)', lineHeight: 1.25, margin: 0,
  },
  tagRow: { display: 'flex', flexWrap: 'wrap', gap: 6 },
  tag: {
    padding: '4px 12px', borderRadius: 50,
    fontSize: '0.72rem', fontWeight: 700, fontFamily: 'Outfit',
    border: '1px solid', letterSpacing: '0.02em',
  },
  closeBtn: {
    width: 38, height: 38, borderRadius: 10,
    background: 'rgba(15, 23, 42, 0.04)', border: '1px solid rgba(15, 23, 42, 0.08)',
    color: 'var(--text-secondary)', cursor: 'pointer',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    flexShrink: 0, transition: 'var(--transition)', marginTop: 2,
  },
  body: {
    display: 'grid',
    gridTemplateColumns: '480px 1fr',
    gap: 0, overflow: 'hidden', flex: 1,
  },
  leftCol: {
    padding: '24px',
    display: 'flex', flexDirection: 'column', gap: 16,
    borderRight: '1px solid var(--border)', overflowY: 'auto',
  },
  rightCol: {
    padding: '24px 32px',
    overflowY: 'auto',
    display: 'flex', flexDirection: 'column', gap: 24,
  },
  linkBox: { display: 'flex', gap: 12, flexWrap: 'wrap' },
  linkBtn: {
    display: 'inline-flex', alignItems: 'center', gap: 8,
    padding: '10px 20px', borderRadius: 50,
    border: '1px solid var(--border)', background: 'rgba(15, 23, 42, 0.02)',
    color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: 700,
    fontFamily: 'Outfit', textDecoration: 'none', transition: 'var(--transition)',
  },
  section: { display: 'flex', flexDirection: 'column', gap: 12 },
  sectionTitle: {
    fontFamily: 'Outfit', fontWeight: 700, fontSize: '0.98rem', color: 'var(--text-primary)',
    display: 'flex', alignItems: 'center', gap: 8, margin: 0,
  },
  overviewText: { color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.75, margin: 0, fontFamily: 'Be Vietnam Pro' },
  list: { listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, margin: 0, padding: 0 },
  listItem: {
    display: 'flex', alignItems: 'flex-start', gap: 8,
    fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6,
    fontFamily: 'Be Vietnam Pro',
  },
  listDot: { color: 'var(--accent-2)', flexShrink: 0, marginTop: 1, fontWeight: 700 },
  steps: { display: 'flex', flexDirection: 'column', gap: 12 },
  stepCard: {
    display: 'flex', gap: 16, padding: '16px 20px',
    background: 'rgba(79,70,229,0.03)', border: '1px solid rgba(79,70,229,0.08)',
    borderRadius: 14, alignItems: 'flex-start',
  },
  stepNum: {
    fontFamily: 'Outfit', fontWeight: 800, fontSize: '1.25rem',
    background: 'var(--gradient)',
    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
    flexShrink: 0, lineHeight: 1,
  },
  stepTitle: { fontFamily: 'Outfit', fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: 4 },
  stepDesc: { fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.6, fontFamily: 'Be Vietnam Pro' },
  skillChip: {
    padding: '8px 16px', borderRadius: 8,
    background: 'rgba(6, 182, 212, 0.05)', border: '1px solid var(--border)',
    color: '#0891b2', fontSize: '0.82rem',
    fontFamily: 'Outfit', fontWeight: 700, lineHeight: 1.4,
  },
};

// ── Inject keyframes ──
const modalStyle = document.createElement('style');
modalStyle.textContent = `
  @keyframes fadeInBackdrop {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes slideUpModal {
    from { opacity: 0; transform: scale(0.95) translateY(24px); }
    to { opacity: 1; transform: scale(1) translateY(0); }
  }
  @keyframes spinLoader {
    to { transform: rotate(360deg); }
  }
  @media (max-width: 900px) {
    .project-modal-body { grid-template-columns: 1fr !important; }
  }
`;
if (!document.getElementById('modal-style')) {
  modalStyle.id = 'modal-style';
  document.head.appendChild(modalStyle);
}
