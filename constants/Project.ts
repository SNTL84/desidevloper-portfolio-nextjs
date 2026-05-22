export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  github: string;
  live?: string;
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'SNTL84 BackOffice OS',
    description:
      'Full AI-powered back-office operating system for founders — task routing, automation, and business intelligence in one dashboard.',
    tags: ['Next.js', 'n8n', 'Supabase', 'AI', 'TypeScript'],
    github: 'https://github.com/SNTL84/sntl84-backoffice-os',
    featured: true,
  },
  {
    id: 2,
    title: 'AI Lead Enrichment Agent',
    description:
      'Automated lead intelligence pipeline — scrapes, enriches, and scores B2B leads using Claude AI and n8n workflows.',
    tags: ['n8n', 'Claude AI', 'Google Sheets', 'Automation'],
    github: 'https://github.com/SNTL84/ai-lead-enrichment-agent',
    featured: true,
  },
  {
    id: 3,
    title: 'AI Hiring Intel System',
    description:
      'Smart recruitment automation — JD parsing, candidate scoring, and outreach orchestration powered by LLMs.',
    tags: ['AI', 'TypeScript', 'n8n', 'Supabase'],
    github: 'https://github.com/SNTL84/sntl84-hiring-system',
    featured: true,
  },
  {
    id: 4,
    title: 'CoHost Virtual Assistant v3',
    description:
      'AI-powered virtual cohost for content creators — automates captions, replies, and scheduling across platforms.',
    tags: ['AI', 'Next.js', 'Automation', 'Social Media'],
    github: 'https://github.com/SNTL84/sntl84-cohost-virtual-assistant-v3',
  },
  {
    id: 5,
    title: 'Multilingual Statement Generator',
    description:
      'AI tool that generates professional business statements in 10+ languages, built for global founders.',
    tags: ['AI', 'HTML', 'JavaScript', 'LLM'],
    github: 'https://github.com/SNTL84/SNTL84-multilingual-statement-generator',
    live: 'https://sntl84.github.io/SNTL84-multilingual-statement-generator/',
  },
  {
    id: 6,
    title: 'Real Estate Claude Agent',
    description:
      'Conversational AI agent for real estate — property Q&A, lead capture, and automated follow-up sequences.',
    tags: ['Claude AI', 'n8n', 'Real Estate', 'Automation'],
    github: 'https://github.com/SNTL84/real-estate-claude-agent',
  },
];
