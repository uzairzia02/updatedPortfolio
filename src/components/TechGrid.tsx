import { useContext } from 'react';
import TechGridContext from '../context/TechGridContext';
import type { PortfolioConfig } from '../types';

export interface TechGridProps {
  skillsGrid: PortfolioConfig['skillsGrid'];
}

export default function TechGrid({ skillsGrid }: TechGridProps) {
  const { state, dispatch } = useContext(TechGridContext);

  const visibleSkills = state.activeCluster === 'All'
    ? skillsGrid
    : skillsGrid.filter((cluster) => cluster.categoryName.toLowerCase().includes(state.activeCluster));

  return (
    <section id="skills" className="container" style={{ padding: '1rem 0 2.5rem' }}>
      <h2 className="section-title">Core Expertise</h2>
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
        {['All', 'ai-agents', 'fullstack-hr', 'retail-ops'].map((cluster) => (
          <button
            key={cluster}
            type="button"
            onClick={() => dispatch({ type: 'SET_CLUSTER', payload: cluster as 'All' | 'ai-agents' | 'fullstack-hr' | 'retail-ops' })}
            style={{ padding: '0.7rem 0.95rem', borderRadius: '999px', border: state.activeCluster === cluster ? '1px solid #38bdf8' : '1px solid rgba(125, 211, 252, 0.22)', background: state.activeCluster === cluster ? 'rgba(56, 189, 248, 0.16)' : 'rgba(15, 23, 42, 0.7)', color: '#f8fafc', cursor: 'pointer' }}
          >
            {cluster === 'All' ? 'All' : cluster.replace('-', ' ')}
          </button>
        ))}
      </div>
      <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
        {visibleSkills.map((cluster) => (
          <article key={cluster.categoryName} className="glass-panel card-hover" style={{ borderRadius: '1.25rem', padding: '1.1rem' }}>
            <h3 style={{ marginTop: 0, color: '#7dd3fc' }}>{cluster.categoryName}</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {cluster.skills.map((skill) => (
                <span key={skill} className="chip">{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
