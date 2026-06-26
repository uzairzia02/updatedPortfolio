import type { PortfolioConfig } from '../types';
import ProjectCard from './ProjectCard';

export interface ProjectMatrixProps {
  projects: PortfolioConfig['projects'];
}

export default function ProjectMatrix({ projects }: ProjectMatrixProps) {
  return (
    <section id="projects" className="container" style={{ padding: '1rem 0 2.5rem' }}>
      <h2 className="section-title">Selected Projects</h2>
      <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
