export type Theme = 'dark' | 'light';

export interface SkillItem {
  name: string;
  level: number; // 0-100
  icon: string; // react-icons key, resolved in the SkillIcon component
}

export interface SkillGroup {
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools';
  items: SkillItem[];
}

export interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  challenges: string;
  learnings: string;
  githubUrl?: string;
  liveUrl?: string;
  category: 'Full Stack' | 'Frontend' | 'Backend' | 'API';
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  type: 'Internship' | 'Freelance' | 'Full-time' | 'Goal';
  description: string;
  highlights: string[];
  current?: boolean;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  year: string;
  url?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  status: 'coming-soon' | 'published';
  url?: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface GithubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  fork: boolean;
}

export interface GithubEvent {
  id: string;
  type: string;
  repo: { name: string };
  created_at: string;
  payload?: {
    commits?: { message: string }[];
  };
}

export interface StatItem {
  label: string;
  value: number;
  suffix?: string;
}
