import React, { useRef } from 'react';
import { ExternalLink, Github, Rocket, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import MainScene from '../scenes/MainScene';

const ProjectsPage = () => {
  const { theme } = useTheme();
  const headerRef = useRef(null);
  const projectsRef = useRef(null);

  const projects = [
    {
      title: 'ArogyaVatika',
      year: '2025',
      description: 'A Climate-Smart Virtual Herbal Garden bridging ancient AYUSH wisdom with modern AI. Developed a digital platform that preserves traditional herbal knowledge and empowers users to plan, grow, and manage personalized herbal gardens with AI-driven optimization, carbon offset estimation, interactive 3D plant models, and eco-friendly tutorials.',
      tech: ['React', 'CSS', 'AI', 'Database Management', '3D Modeling'],
      image: 'https://images.unsplash.com/photo-1698920566422-9edaefd69381?w=1920&q=95&auto=format',
      github: 'https://github.com/Hrishikesh-Gavai/ArogyaVatika.git',
      demo: 'https://arogyavatika.vercel.app',
      featured: true,
    },
    {
      title: 'Joint Audio Language Model (ALM)',
      year: '2025',
      description: 'Currently developing a context-aware audio AI that processes and reasons over both speech and non-speech sounds. Built on a hybrid AR-NAR Transformer backbone, it integrates speech recognition, audio event detection, and paralinguistic analysis via cross-modal fusion and reasoning modules for real-time inference.',
      tech: ['React', 'CSS', 'Audio Engineering', 'Machine Learning', 'Transformer'],
      image: 'https://images.unsplash.com/photo-1578083386368-dcb6d17181da?w=1920&q=95&auto=format',
      github: 'https://github.com/Hrishikesh-Gavai#',
      demo: 'https://github.com/Hrishikesh-Gavai#',
      featured: true,
    },
    {
      title: 'TatRakshak',
      year: '2025',
      description: 'Integrated Platform for Crowdsourced Ocean Hazard Reporting. A unified, citizen-powered platform combining crowd reports, social media signals, and official INCOIS data to create a real-time "digital twin" of India\'s coastline with AI-driven media verification and severity scoring.',
      tech: ['React', 'CSS', 'AI', 'NLP', 'Crowdsourcing', 'Database'],
      image: 'https://images.unsplash.com/photo-1668269403127-40de9812e3ae?w=1920&q=95&auto=format',
      github: 'https://github.com/Hrishikesh-Gavai',
      demo: 'https://github.com/Hrishikesh-Gavai',
      featured: true,
    },
    {
      title: 'PulseSynopsis',
      year: '2025',
      description: 'A real-time news intelligence platform that delivers AI-powered summaries, multi-perspective analysis, and interactive visualizations to help users understand complex stories faster.',
      tech: ['React', 'Typescript', 'Tailwind CSS', 'Vite', 'React Router', 'shadcn/ui', 'Analytics', 'Web Designing'],
      image: 'https://images.unsplash.com/photo-1624562368700-223d7856489f?w=1920&q=95&auto=format',
      github: 'https://github.com/Hrishikesh-Gavai/PulseSynopsis.git',
      demo: 'https://pulse-synopsis.vercel.app',
      featured: true,
    },
    {
      title: 'UniMail – KKWIEER',
      year: '2025',
      description: 'A professional institutional email management system built for K. K. Wagh Institute of Engineering Education and Research as a DBMS project. UniMail provides a secure, database-driven platform for composing, storing, and translating institutional emails with Hindi/Marathi support, PDF management, and Gmail integration — all in a modern glassmorphism UI.',
      tech: ['PostgreSQL', 'Supabase', 'DBMS', 'React', 'Gmail', 'Translation'],
      image: 'https://images.unsplash.com/photo-1731963094554-c5c981ccdefd?w=1920&q=95&auto=format',
      github: 'https://github.com/Hrishikesh-Gavai/UniMail-KKWIEER.git',
      demo: 'https://unimail-kkwieer.vercel.app',
      featured: true,
    },
    {
      title: 'Answer Sheet Analyzer',
      year: '2024',
      description: 'An AI-driven platform that transforms traditional grading by providing fast, consistent, and insightful evaluations of student answer sheets. The system scans and auto-evaluates responses against model solutions, generates qualitative feedback and performance analytics.',
      tech: ['Python', 'OCR', 'Machine Learning', 'HTML', 'JavaScript', 'CSS'],
      image: 'https://images.unsplash.com/photo-1569098272587-7af816a8293c?w=1920&q=95&auto=format',
      github: 'https://github.com/Hrishikesh-Gavai/ANSWER-SHEET-ANALYZER.git',
      demo: 'https://github.com/Hrishikesh-Gavai/ANSWER-SHEET-ANALYZER.git',
      featured: false,
    },
    {
      title: 'StudyQuest',
      year: '2024',
      description: 'AI-Powered Personalized Learning Platform with gamification features including EXP, levels, and progress tracking. Features AI-driven scheduling, personalized content recommendations, and interactive chat guidance with external resources like YouTube, quizzes, and reminders.',
      tech: ['Python', 'HTML', 'JavaScript', 'CSS', 'AI'],
      image: 'https://images.unsplash.com/photo-1619296330981-b882d7e93425?w=1920&q=95&auto=format',
      github: 'https://github.com/Hrishikesh-Gavai/STUDY-QUEST.git',
      demo: 'https://github.com/Hrishikesh-Gavai/STUDY-QUEST.git',
      featured: false,
    },
    {
      title: 'NERV-TRANSLATE',
      year: '2023',
      description: 'AI-Powered Audio/Video Dubbing Platform enabling seamless multilingual dubbing and voice synchronization for videos. Features precise control over pitch, tone, and timing, allowing creators to bring characters to life while breaking language barriers.',
      tech: ['Python', 'Audio/Video Processing', 'Translation', 'AI'],
      image: 'https://images.unsplash.com/photo-1482442120256-9c03866de390?w=1920&q=95&auto=format',
      github: 'https://github.com/Hrishikesh-Gavai/NERV-TRANSLATE.git',
      demo: 'https://github.com/Hrishikesh-Gavai/NERV-TRANSLATE.git',
      featured: false,
    },
  ];

  return (
    <div className={`relative min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 ${theme === 'dark' ? 'text-white' : 'text-darkText'}`}>
      {/* 3D Starfield Background */}
      <div className="fixed inset-0 z-0">
        <MainScene />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div ref={headerRef} className="text-center mb-16">
          <h1 className="section-header mb-6">PROJECTS</h1>
          <p className={`font-mono text-base sm:text-lg max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            A collection of innovative solutions spanning{' '}
            <span className="neon-text">AI/ML</span>,{' '}
            <span className="neon-text">Climate Tech</span>,{' '}
            <span className="neon-text">EdTech</span>, and{' '}
            <span className="neon-text">Disaster Management</span>
          </p>
        </div>

        <div ref={projectsRef} className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`card p-0 overflow-hidden hover:scale-[1.02] transition-transform duration-300 ${
                project.featured ? 'border-2' : ''
              }`}
              style={project.featured ? { borderColor: `var(--primary-color)` } : {}}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="image-glitch h-64 lg:h-auto overflow-hidden order-2 lg:order-1">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 sm:p-8 flex flex-col justify-between order-1 lg:order-2">
                  <div>
                    <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                      <h3 className="text-2xl sm:text-3xl font-cyber font-bold neon-text">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <span
                          className="flex items-center space-x-1 px-3 py-1 text-xs font-bold uppercase rounded"
                          style={{
                            background: `var(--primary-color)`,
                            color: theme === 'dark' ? '#000000' : '#FFFFFF',
                          }}
                        >
                          <Sparkles className="w-3 h-3" />
                          <span>Featured</span>
                        </span>
                      )}
                    </div>

                    <p className="text-sm font-mono mb-4 neon-text">
                      {project.year}
                    </p>

                    <p className={`font-mono leading-relaxed mb-6 text-sm sm:text-base ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="tech-badge text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="red-button px-10 py-3 text-sm flex-1 sm:flex-initial min-w-[140px]"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                    {project.demo !== '#' && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="red-button px-10 py-3 text-sm flex-1 sm:flex-initial min-w-[140px]"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="https://github.com/Hrishikesh-Gavai"
            target="_blank"
            rel="noopener noreferrer"
            className="red-button px-12 py-3"
          >
            <Rocket className="w-5 h-5" />
            <span>View More on GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
