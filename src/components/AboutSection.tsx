import type { PortfolioConfig } from '../types';

export interface AboutSectionProps {
  profile: PortfolioConfig['profile'];
  education: PortfolioConfig['education'];
  experience: PortfolioConfig['experience'];
}

export default function AboutSection({ profile, education, experience }: AboutSectionProps) {
  return (
    <section id="about" className="container" style={{ padding: '1rem 0 2.5rem' }}>
      <h2 className="section-title">About & Profile</h2>
      <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
        <article className="glass-panel" style={{ borderRadius: '1.25rem', padding: '1.2rem' }}>
          <h3 style={{ marginTop: 0, color: '#7dd3fc' }}>Professional Summary</h3>
          <p style={{ margin: 0, color: '#e2e8f0' }}>{profile.summary}</p>
        </article>

        <article className="glass-panel" style={{ borderRadius: '1.25rem', padding: '1.2rem' }}>
          <h3 style={{ marginTop: 0, color: '#7dd3fc' }}>Contact</h3>
          <div style={{ display: 'grid', gap: '0.6rem' }}>
            <a href={`tel:${profile.contact.phone}`} style={{ color: '#f8fafc' }}>Phone: {profile.contact.phone}</a>
            <a href={`mailto:${profile.contact.email}`} style={{ color: '#f8fafc' }}>Email: {profile.contact.email}</a>
            <a href={profile.contact.linkedin} target="_blank" rel="noreferrer" style={{ color: '#7dd3fc' }}>LinkedIn Profile</a>
          </div>
        </article>
      </div>

      <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', marginTop: '1rem' }}>
        <article className="glass-panel" style={{ borderRadius: '1.25rem', padding: '1.2rem' }}>
          <h3 style={{ marginTop: 0, color: '#7dd3fc' }}>Education</h3>
          <div style={{ display: 'grid', gap: '0.8rem' }}>
            {education.map((item) => (
              <div key={`${item.degree}-${item.institution}`}>
                <div style={{ fontWeight: 700, color: '#f8fafc' }}>{item.degree}</div>
                <div style={{ color: '#cbd5e1' }}>{item.institution}</div>
                {item.field ? <div style={{ color: '#7dd3fc' }}>{item.field}</div> : null}
              </div>
            ))}
          </div>
        </article>

        <article className="glass-panel" style={{ borderRadius: '1.25rem', padding: '1.2rem' }}>
          <h3 style={{ marginTop: 0, color: '#7dd3fc' }}>Work Experience</h3>
          <div style={{ display: 'grid', gap: '0.8rem' }}>
            {experience.map((item) => (
              <div key={`${item.role}-${item.company}`}>
                <div style={{ fontWeight: 700, color: '#f8fafc' }}>{item.role}</div>
                <div style={{ color: '#cbd5e1' }}>{item.company}</div>
                <div style={{ color: '#7dd3fc' }}>{item.period}</div>
                <p style={{ margin: '0.3rem 0 0', color: '#e2e8f0' }}>{item.description}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
