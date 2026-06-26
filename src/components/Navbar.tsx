import { useMemo } from 'react';
import type { PortfolioConfig } from '../types';

export interface NavbarProps {
  socialLinks: PortfolioConfig['socialLinks'];
}

export default function Navbar({ socialLinks }: NavbarProps) {
  const links = useMemo(
    () => [
      { href: '#projects', label: 'Projects' },
      { href: '#skills', label: 'Skills' },
      { href: '#contact', label: 'Contact' },
      { href: '#case-studies', label: 'Case Studies' },
    ],
    []
  );

  return (
    <header className="container" style={{ paddingTop: '1rem' }}>
      <nav className="glass-panel" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 1.25rem', borderRadius: '999px', marginTop: '0.5rem' }}>
        <a href="#home" style={{ fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#7dd3fc' }}>
          Uzair Zia
        </a>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          {links.map((link) => (
            <a key={link.href} href={link.href} style={{ color: '#e2e8f0' }}>
              {link.label}
            </a>
          ))}
          <a href={socialLinks.github} target="_blank" rel="noreferrer" className="link-icon" aria-label="GitHub">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.92.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.38-3.88-1.38-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.95.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.94 10.94 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.63 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.4-5.25 5.68.41.36.77 1.07.77 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/></svg>
          </a>
        </div>
      </nav>
    </header>
  );
}
