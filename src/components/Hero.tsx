import type { PortfolioConfig } from '../types';

export interface HeroProps {
  hero: PortfolioConfig['hero'];
  socialLinks: PortfolioConfig['socialLinks'];
}

export default function Hero({ hero, socialLinks }: HeroProps) {
  return (
    <section id="home" className="container" style={{ padding: '4.5rem 0 2.5rem' }}>
      <div className="glass-panel" style={{ borderRadius: '2rem', padding: 'clamp(1.5rem, 3vw, 2.5rem)', display: 'grid', gap: '1.25rem' }}>
        <span className="chip">AI Agents • Full-Stack • Retail Operations</span>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.6rem)', lineHeight: 1.1, margin: 0 }}>
          {hero.headline}
        </h1>
        <p style={{ fontSize: '1.05rem', color: '#cbd5e1', maxWidth: '760px', margin: 0 }}>
          {hero.subheadline}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '0.25rem' }}>
          <a href={hero.resumeUrl} target="_blank" rel="noreferrer" style={{ padding: '0.8rem 1rem', borderRadius: '999px', background: '#38bdf8', color: '#020617', fontWeight: 700 }}>
            View Resume
          </a>
          <a href={socialLinks.github} target="_blank" rel="noreferrer" style={{ padding: '0.8rem 1rem', borderRadius: '999px', border: '1px solid rgba(125, 211, 252, 0.35)', color: '#e0f2fe' }}>
            Explore GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
