import type { PortfolioConfig } from '../types';

export interface ContactSectionProps {
  profile: PortfolioConfig['profile'];
  socialLinks: PortfolioConfig['socialLinks'];
}

export default function ContactSection({ profile, socialLinks }: ContactSectionProps) {
  return (
    <section id="contact" className="container" style={{ padding: '1rem 0 3rem' }}>
      <h2 className="section-title">Contact</h2>
      <div className="glass-panel" style={{ borderRadius: '1.5rem', padding: '1.4rem', display: 'grid', gap: '1rem' }}>
        <div style={{ display: 'grid', gap: '0.75rem' }}>
          <a href={`tel:${profile.contact.phone}`} style={{ color: '#f8fafc', fontSize: '1rem' }}>
            Phone: {profile.contact.phone}
          </a>
          <a href={`mailto:${profile.contact.email}`} style={{ color: '#f8fafc', fontSize: '1rem' }}>
            Email: {profile.contact.email}
          </a>
          <a href={profile.contact.linkedin} target="_blank" rel="noreferrer" style={{ color: '#7dd3fc', fontSize: '1rem' }}>
            LinkedIn: {profile.contact.linkedin}
          </a>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <a href={socialLinks.github} target="_blank" rel="noreferrer" style={{ padding: '0.7rem 0.95rem', borderRadius: '999px', background: 'rgba(56, 189, 248, 0.14)', color: '#e0f2fe' }}>
            GitHub
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" style={{ padding: '0.7rem 0.95rem', borderRadius: '999px', background: 'rgba(56, 189, 248, 0.14)', color: '#e0f2fe' }}>
            LinkedIn
          </a>
          <a href={socialLinks.vercel} target="_blank" rel="noreferrer" style={{ padding: '0.7rem 0.95rem', borderRadius: '999px', background: 'rgba(56, 189, 248, 0.14)', color: '#e0f2fe' }}>
            Vercel
          </a>
        </div>
      </div>
    </section>
  );
}
