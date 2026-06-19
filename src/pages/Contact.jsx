import React, { useRef, useEffect } from 'react';
import { personalInfo } from '../data/projects';
import { LinkedInIcon, GitHubIcon, TableauIcon, GmailIcon } from '../components/BrandIcons';

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

const CONTACTS = [
  {
    icon: <LinkedInIcon size={22} />,
    iconColor: '#0A66C2',
    label: 'LinkedIn',
    value: 'duy-nguyen24122005',
    href: personalInfo.linkedin,
    desc: 'Connect professionally',
    gradient: 'linear-gradient(135deg, rgba(10,102,194,0.15), rgba(10,102,194,0.04))',
    border: 'rgba(10,102,194,0.3)',
    glowColor: 'rgba(10,102,194,0.25)',
  },
  {
    icon: <GitHubIcon size={22} />,
    iconColor: '#ffffff',
    label: 'GitHub',
    value: 'HoangDiine',
    href: personalInfo.github,
    desc: 'Source code & projects',
    gradient: 'linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))',
    border: 'rgba(255,255,255,0.1)',
    glowColor: 'rgba(255,255,255,0.1)',
  },
  {
    icon: <TableauIcon size={22} />,
    iconColor: '#E97627',
    label: 'Tableau Public',
    value: 'duy.nguyen8847',
    href: personalInfo.tableau,
    desc: 'Dashboards & visualizations',
    gradient: 'linear-gradient(135deg, rgba(233,118,39,0.15), rgba(233,118,39,0.04))',
    border: 'rgba(233,118,39,0.3)',
    glowColor: 'rgba(233,118,39,0.25)',
  },
  {
    icon: <GmailIcon size={22} />,
    iconColor: '#EA4335',
    label: 'Gmail',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    desc: 'Send a direct message',
    gradient: 'linear-gradient(135deg, rgba(234,67,53,0.15), rgba(234,67,53,0.04))',
    border: 'rgba(234,67,53,0.3)',
    glowColor: 'rgba(234,67,53,0.25)',
  },
];

function ContactItem({ c }) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <a
      href={c.href}
      target={c.href.startsWith('mailto') ? '_self' : '_blank'}
      rel="noreferrer"
      style={{
        ...styles.contactItem,
        background: c.gradient,
        borderColor: hovered ? c.border.replace('0.3', '0.6') : c.border,
        transform: hovered ? 'translateX(8px)' : 'translateX(0)',
        boxShadow: hovered ? `0 8px 32px ${c.glowColor}` : 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ ...styles.contactIconWrap, color: hovered ? c.iconColor : 'var(--text-secondary)' }}>
        {c.icon}
      </div>
      <div style={styles.contactInfo}>
        <div style={styles.contactLabel}>{c.label}</div>
        <div style={styles.contactValue}>{c.value}</div>
        <div style={styles.contactDesc}>{c.desc}</div>
      </div>
      <svg
        style={{ ...styles.arrow, color: hovered ? c.iconColor : 'var(--text-muted)', transform: hovered ? 'translateX(3px) translateY(-3px)' : 'none' }}
        width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      >
        <line x1="7" y1="17" x2="17" y2="7"/>
        <polyline points="7 7 17 7 17 17"/>
      </svg>
    </a>
  );
}

export default function Contact() {
  const titleRef = useReveal();

  return (
    <section id="contact" className="section" style={{ position: 'relative' }}>
      <div style={styles.bgGlow} />

      <div className="container">
        {/* Title */}
        <div ref={titleRef} className="reveal section-title-wrapper">
          <h2>
            Let's{' '}
            <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subtitle">
            Tôi luôn sẵn sàng cho các cơ hội mới, hợp tác dự án hoặc đơn giản là một cuộc trò chuyện về data.
          </p>
          <div className="section-line" />
        </div>

        <div style={styles.layout}>
          {/* Left: Intro */}
          <div style={styles.introCard}>
            <div style={styles.introGlow} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={styles.introEmoji}>👋</div>
              <h3 style={styles.introTitle}>Sẵn sàng hợp tác</h3>
              <p style={styles.introText}>
                Tôi đang tìm kiếm cơ hội thực tập hoặc full-time trong lĩnh vực Data Analytics,
                Business Analysis, hoặc Data Engineering. Hãy liên hệ nếu bạn có dự án thú vị
                hoặc muốn cùng nhau giải quyết bài toán dữ liệu!
              </p>

              <div style={styles.availability}>
                <span style={styles.availDot} />
                <span style={{ color: '#6ed69a', fontSize: '0.875rem', fontWeight: 600 }}>
                  Available for opportunities
                </span>
              </div>

              <div style={styles.locationRow}>
                <span style={{ fontSize: '1.1rem' }}>📍</span>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                  Đà Nẵng, Việt Nam
                </span>
              </div>
            </div>
          </div>

          {/* Right: Contact Links */}
          <div style={styles.contactsList}>
            {CONTACTS.map((c) => (
              <ContactItem key={c.label} c={c} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  bgGlow: {
    position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)',
    width: '600px', height: '300px',
    background: 'radial-gradient(ellipse, rgba(14,165,233,0.08) 0%, transparent 70%)',
    pointerEvents: 'none',
  },
  layout: {
    display: 'grid', gridTemplateColumns: '1fr 1.2fr',
    gap: '32px', alignItems: 'start',
  },
  introCard: {
    position: 'relative',
    background: 'rgba(9,18,40,0.85)', backdropFilter: 'blur(20px)',
    border: '1px solid rgba(14,165,233,0.15)', borderRadius: '24px',
    padding: '36px', overflow: 'hidden',
  },
  introGlow: {
    position: 'absolute', top: 0, left: 0, right: 0, height: '200px',
    background: 'radial-gradient(ellipse at top, rgba(14,165,233,0.1), transparent 70%)',
    pointerEvents: 'none',
  },
  introEmoji: { fontSize: '2.5rem', marginBottom: '16px' },
  introTitle: {
    fontFamily: 'Outfit', fontWeight: 800, fontSize: '1.5rem',
    marginBottom: '16px', color: 'var(--text-primary)',
  },
  introText: {
    color: 'var(--text-secondary)', fontSize: '0.9rem',
    lineHeight: 1.75, marginBottom: '24px',
  },
  availability: { display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' },
  availDot: {
    width: '8px', height: '8px', borderRadius: '50%',
    background: '#2ecc71', boxShadow: '0 0 10px #2ecc71',
    flexShrink: 0, display: 'inline-block',
  },
  locationRow: { display: 'flex', alignItems: 'center', gap: '8px' },
  contactsList: { display: 'flex', flexDirection: 'column', gap: '12px' },
  contactItem: {
    display: 'flex', alignItems: 'center', gap: '16px',
    padding: '18px 22px', borderRadius: '16px',
    border: '1px solid', textDecoration: 'none',
    color: 'var(--text-primary)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  contactIconWrap: {
    width: '48px', height: '48px', borderRadius: '14px',
    background: 'rgba(255,255,255,0.06)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    flexShrink: 0, transition: 'color 0.25s',
  },
  contactInfo: { flex: 1, display: 'flex', flexDirection: 'column', gap: '2px' },
  contactLabel: { fontFamily: 'Outfit', fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)' },
  contactValue: { fontSize: '0.82rem', color: 'var(--text-secondary)', fontFamily: 'Inter' },
  contactDesc: { fontSize: '0.75rem', color: 'var(--text-muted)' },
  arrow: { flexShrink: 0, transition: 'all 0.3s' },
};
