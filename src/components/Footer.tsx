import type { PortfolioConfig } from '../types';

export interface FooterProps {
  socialLinks: PortfolioConfig['socialLinks'];
}

export default function Footer({ socialLinks }: FooterProps) {
  return (
    <footer style={{ borderTop: '1px solid rgba(125, 211, 252, 0.16)', padding: '1.25rem 0 2rem' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
        <p style={{ margin: 0, color: '#94a3b8' }}>© 2026 Uzair Zia. Built with React and Vite.</p>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <a href={socialLinks.github} target="_blank" rel="noreferrer" style={{ color: '#7dd3fc' }}>GitHub</a>
          <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" style={{ color: '#7dd3fc' }}>LinkedIn</a>
          <a href={socialLinks.vercel} target="_blank" rel="noreferrer" style={{ color: '#7dd3fc' }}>Vercel</a>
        </div>
      </div>
    </footer>
  );
}
