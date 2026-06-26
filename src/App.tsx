import { useMemo } from 'react';
import { portfolioConfig } from './config/portfolioConfig';
import { designTokens } from './config/designTokens';
import { TechGridProvider } from './context/TechGridContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechGrid from './components/TechGrid';
import ProjectMatrix from './components/ProjectMatrix';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import CaseStudies from './components/CaseStudies';
import Footer from './components/Footer';

function App() {
  const theme = useMemo(() => ({
    background: designTokens.color.background,
    card: designTokens.color.card,
    accentBlue: designTokens.color.accent.blue,
    accentMint: designTokens.color.accent.mint,
  }), []);

  return (
    <TechGridProvider>
      <div style={{ background: theme.background, color: '#f8fafc' }}>
        <Navbar socialLinks={portfolioConfig.socialLinks} />
        <main>
          <Hero hero={portfolioConfig.hero} socialLinks={portfolioConfig.socialLinks} />
          <AboutSection profile={portfolioConfig.profile} education={portfolioConfig.education} experience={portfolioConfig.experience} />
          <TechGrid skillsGrid={portfolioConfig.skillsGrid} />
          <ProjectMatrix projects={portfolioConfig.projects} />
          <ContactSection profile={portfolioConfig.profile} socialLinks={portfolioConfig.socialLinks} />
          <CaseStudies caseStudies={portfolioConfig.experienceCaseStudies} />
        </main>
        <Footer socialLinks={portfolioConfig.socialLinks} />
      </div>
    </TechGridProvider>
  );
}

export default App;
