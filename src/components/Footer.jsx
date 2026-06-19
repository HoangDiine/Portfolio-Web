import React from 'react';
import { personalInfo } from '../data/projects';
import { GitHubIcon, LinkedInIcon, TableauIcon, GmailIcon } from './BrandIcons';

const SOCIALS = [
  {
    label: 'GitHub',
    href: personalInfo.github,
    icon: <GitHubIcon size={20} />,
    color: '#ffffff',
  },
  {
    label: 'LinkedIn',
    href: personalInfo.linkedin,
    icon: <LinkedInIcon size={20} />,
    color: '#0A66C2',
  },
  {
    label: 'Tableau Public',
    href: personalInfo.tableau,
    icon: <TableauIcon size={20} />,
    color: '#E97627',
  },
  {
    label: 'Gmail',
    href: `mailto:${personalInfo.email}`,
    icon: <GmailIcon size={20} />,
    color: '#EA4335',
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <div className="glow-divider" />
      <div className="container" style={styles.inner}>
        {/* Left: Branding */}
        <div style={styles.left}>
          <span className="gradient-text" style={styles.name}>
            Nguyễn Hoàng Duy
          </span>
          <p style={styles.role}>Data Analyst · Business Analyst · Data Engineer</p>
          <p style={styles.quote}>
            "Translating complex business problems into actionable insights."
          </p>
        </div>

        {/* Right: Socials */}
        <div style={styles.right}>
          <p style={styles.connectLabel}>Connect</p>
          <div style={styles.socials}>
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('mailto') ? '_self' : '_blank'}
                rel="noreferrer"
                title={s.label}
                style={styles.socialBtn}
                onMouseEnter={e => {
                  e.currentTarget.style.color = s.color;
                  e.currentTarget.style.borderColor = s.color + '55';
                  e.currentTarget.style.background = s.color + '18';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = `0 8px 24px ${s.color}40`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = 'var(--text-secondary)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div style={styles.bottom}>
        <span>© {year} Nguyễn Hoàng Duy. Crafted with ❤️ + React</span>
        <span style={{ color: 'var(--text-muted)' }}>Da Nang, Vietnam</span>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    background: 'rgba(5,11,24,0.98)',
    paddingTop: '60px',
  },
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '40px',
    flexWrap: 'wrap',
    paddingTop: '48px',
    paddingBottom: '40px',
  },
  left: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    maxWidth: '400px',
  },
  name: {
    fontFamily: 'Outfit',
    fontWeight: 800,
    fontSize: '1.4rem',
  },
  role: {
    color: 'var(--text-secondary)',
    fontSize: '0.875rem',
    fontWeight: 500,
  },
  quote: {
    color: 'var(--text-muted)',
    fontSize: '0.825rem',
    fontStyle: 'italic',
    marginTop: '4px',
  },
  right: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    alignItems: 'flex-end',
  },
  connectLabel: {
    color: 'var(--text-muted)',
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    fontFamily: 'Outfit',
    fontWeight: 600,
  },
  socials: {
    display: 'flex',
    gap: '10px',
  },
  socialBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '44px',
    height: '44px',
    borderRadius: '12px',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.07)',
    color: 'var(--text-secondary)',
    transition: 'all 0.25s ease',
    textDecoration: 'none',
  },
  bottom: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '16px 24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '8px',
    borderTop: '1px solid rgba(255,255,255,0.04)',
    color: 'var(--text-secondary)',
    fontSize: '0.825rem',
  },
};
