import React, { useState, useEffect, useRef } from 'react';
import { projects, CATEGORIES } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('visible'); },
      { threshold: 0.1 }
    );
    const el = ref.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, []);
  return ref;
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleProjects, setVisibleProjects] = useState(projects);
  const [selectedProject, setSelectedProject] = useState(null);
  const titleRef = useReveal();

  useEffect(() => {
    const filtered = activeCategory === 'All'
      ? projects
      : projects.filter(p => p.category === activeCategory);
    setVisibleProjects(filtered);
  }, [activeCategory]);

  const openProject = (project) => setSelectedProject(project);
  const closeProject = () => setSelectedProject(null);

  return (
    <>
      <section id="projects" className="section" style={{ position: 'relative' }}>
        {/* BG decorations */}
        <div style={styles.bgLeft} />
        <div style={styles.bgRight} />

        <div className="container">
          {/* Title */}
          <div ref={titleRef} className="reveal section-title-wrapper">
            <h2>
              Featured{' '}
              <span className="gradient-text">Projects</span>
            </h2>
            <p className="section-subtitle">
              Tổng hợp các dự án thực tế — từ phân tích dữ liệu đến xây dựng hệ thống và AI Agent.
              <br />
              <span style={{ color: '#0ea5e9', fontSize: '0.9rem', fontStyle: 'italic' }}>
                ✨ Nhấn vào card để xem chi tiết
              </span>
            </p>
            <div className="section-line" />
          </div>

          {/* Filter Tabs */}
          <div className="filter-tabs">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`filter-tab ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div style={styles.grid}>
            {visibleProjects.map((project, i) => (
              <div
                key={project.id}
                style={{ animationDelay: `${i * 80}ms` }}
                className="project-card-anim"
              >
                <ProjectCard
                  project={project}
                  onClick={() => openProject(project)}
                />
              </div>
            ))}
          </div>

          {visibleProjects.length === 0 && (
            <div style={styles.empty}>
              <span style={{ fontSize: '3rem' }}>🔍</span>
              <p>Không có dự án trong danh mục này.</p>
            </div>
          )}

          {/* GitHub CTA */}
          <div style={styles.githubCta}>
            <div style={styles.ctaCard}>
              <div>
                <h3 style={styles.ctaTitle}>Xem thêm trên GitHub</h3>
                <p style={styles.ctaDesc}>Tất cả source code, notebooks và tài liệu dự án đều có trên GitHub của tôi.</p>
              </div>
              <a
                href="https://github.com/HoangDiine"
                target="_blank"
                rel="noreferrer"
                className="btn-gradient"
                style={{ flexShrink: 0 }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeProject} />
      )}
    </>
  );
}

const styles = {
  bgLeft: {
    position: 'absolute', top: 0, left: 0,
    width: 400, height: 400,
    background: 'radial-gradient(circle, rgba(29,78,216,0.08) 0%, transparent 70%)',
    pointerEvents: 'none',
  },
  bgRight: {
    position: 'absolute', bottom: 0, right: 0,
    width: 400, height: 400,
    background: 'radial-gradient(circle, rgba(14,165,233,0.07) 0%, transparent 70%)',
    pointerEvents: 'none',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
    gap: 24,
  },
  empty: {
    display: 'flex', flexDirection: 'column', alignItems: 'center',
    gap: 16, padding: 60, color: 'var(--text-muted)', textAlign: 'center',
  },
  githubCta: { marginTop: 60 },
  ctaCard: {
    display: 'flex', alignItems: 'center',
    justifyContent: 'space-between', gap: 24,
    padding: '32px 40px',
    background: 'rgba(9,18,40,0.7)', backdropFilter: 'blur(20px)',
    border: '1px solid rgba(14,165,233,0.18)', borderRadius: 20,
    flexWrap: 'wrap',
  },
  ctaTitle: { fontFamily: 'Outfit', fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-primary)', margin: '0 0 6px' },
  ctaDesc: { fontSize: '0.875rem', color: 'var(--text-secondary)', maxWidth: 480, margin: 0 },
};

// Inject card animation CSS
const cardStyle = document.createElement('style');
cardStyle.textContent = `
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .project-card-anim { animation: fadeInUp 0.5s ease both; }
  @media (max-width: 768px) {
    #projects .container > div[style*="grid"] {
      grid-template-columns: 1fr !important;
    }
  }
`;
if (!document.getElementById('projects-style')) {
  cardStyle.id = 'projects-style';
  document.head.appendChild(cardStyle);
}
