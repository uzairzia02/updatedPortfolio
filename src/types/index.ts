export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  demoUrl?: string;
  youtubeUrl?: string;
  category: 'ai-agents' | 'fullstack-hr' | 'retail-ops';
  metricsHighlight?: string;
}

export interface SkillCluster {
  categoryName: string;
  skills: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  problem: string;
  solution: string;
  impact: string;
}

export interface ProfileContact {
  phone: string;
  email: string;
  linkedin: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  field?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface PortfolioConfig {
  hero: {
    headline: string;
    subheadline: string;
    resumeUrl: string;
  };
  profile: {
    summary: string;
    contact: ProfileContact;
  };
  education: EducationItem[];
  experience: ExperienceItem[];
  skillsGrid: SkillCluster[];
  projects: ProjectItem[];
  experienceCaseStudies: CaseStudy[];
  socialLinks: {
    github: string;
    linkedin: string;
    vercel: string;
  };
}
