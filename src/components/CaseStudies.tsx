import type { PortfolioConfig } from '../types';

export interface CaseStudyProps {
  caseStudies: PortfolioConfig['experienceCaseStudies'];
}

export default function CaseStudies({ caseStudies }: CaseStudyProps) {
  return (
    <section id="case-studies" className="container" style={{ padding: '1rem 0 3rem' }}>
      <h2 className="section-title">Experience Highlights</h2>
      <div style={{ display: 'grid', gap: '1rem' }}>
        {caseStudies.map((study) => (
          <article key={study.id} className="glass-panel" style={{ borderRadius: '1.25rem', padding: '1.2rem' }}>
            <h3 style={{ marginTop: 0, color: '#7dd3fc' }}>{study.title}</h3>
            <p style={{ margin: '0.3rem 0', color: '#e2e8f0' }}><strong>Problem:</strong> {study.problem}</p>
            <p style={{ margin: '0.3rem 0', color: '#e2e8f0' }}><strong>Solution:</strong> {study.solution}</p>
            <p style={{ margin: '0.3rem 0', color: '#38bdf8' }}><strong>Impact:</strong> {study.impact}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
