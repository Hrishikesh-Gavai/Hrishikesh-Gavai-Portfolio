import React, { useRef } from 'react';
import { Award, CheckCircle, ExternalLink, Trophy, Star, Medal } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import MainScene from '../scenes/MainScene';

const CertificationsPage = () => {
  const { theme } = useTheme();
  const headerRef = useRef(null);
  const certsRef = useRef(null);
  const achievementRef = useRef(null);
  const achievementsListRef = useRef(null);

  const certifications = [
    {
      title: '100+ Google Cloud Arcade Skill Badges',
      issuer: 'Google Cloud',
      date: '2025',
      description: 'Comprehensive training across Google Cloud Platform services and products. Completed extensive hands-on labs and skill badges covering cloud architecture, DevOps, data analytics, and machine learning.',
      skills: ['Google Cloud Console', 'Cloud Architecture', 'DevOps', 'GCP Products'],
      icon: <Award className="w-12 h-12" style={{ color: `var(--primary-color)` }} />,
      link: 'https://www.skills.google/public_profiles/8d733648-3cb7-4533-8009-46cfea26c07e',
      featured: true,
    },
    {
      title: 'RDBMS PostgreSQL Training',
      issuer: 'EduPyramids',
      date: '2025',
      description: 'Advanced relational database management training with PostgreSQL. Achieved 92.50% score demonstrating expertise in database design, query optimization, and database administration.',
      skills: ['PostgreSQL', 'RDBMS', 'Database Design', 'SQL'],
      icon: <Trophy className="w-12 h-12" style={{ color: `var(--primary-color)` }} />,
      link: 'https://drive.google.com/file/d/1etaczZ6wduwp9sPlvnAX2nN_aOQATEyZ/view?usp=drive_link',
      featured: true,
    },
    {
      title: 'NPTEL Design Thinking Course',
      issuer: 'NPTEL',
      date: '2024',
      description: 'Successfully completed Design Thinking course with 94% grade. Applied design thinking methodologies and approaches to solve complex problems in computer engineering.',
      skills: ['Design Thinking', 'Problem Solving', 'Innovation', 'User-Centric Design'],
      icon: <Award className="w-12 h-12" style={{ color: `var(--primary-color)` }} />,
      link: 'https://drive.google.com/file/d/1-Q50-M8tF84G1_TnP2oPcMBi0scFGVNN/view?usp=drive_link',
      featured: true,
    },
    {
      title: 'Programming in C/C++',
      issuer: 'AICTPR',
      date: '2023',
      description: 'Achieved Grade A with 98% in comprehensive C/C++ programming certification. Demonstrated advanced proficiency in object-oriented programming, data structures, and algorithms.',
      skills: ['C', 'C++', 'OOP', 'Data Structures'],
      icon: <CheckCircle className="w-12 h-12" style={{ color: `var(--primary-color)` }} />,
      link: 'https://drive.google.com/file/d/1eLyLO0Lo816AJeHge5QYyYAIZViLwbg6/view?usp=drive_link',
      featured: true,
    },
    {
      title: 'NPTEL Programming in Java',
      issuer: 'NPTEL',
      date: '2025',
      description: 'Completed a comprehensive Java programming course covering object-oriented concepts, Java frameworks, and application development best practices, achieving a score of 94%.',
      skills: ['Java', 'OOP', 'Java Frameworks', 'Application Development'],
      icon: <Award className="w-12 h-12" style={{ color: `var(--primary-color)` }} />,
      link: 'https://drive.google.com/file/d/1vRRBGP06GnfkdhsJA7isPaJIlMi7U_Sz/view?usp=drive_link',
      featured: true,
    },
    {
      title: 'Generative AI Mastery Workshop',
      issuer: 'OpenAI Academy x NxtWave',
      date: '2025',
      description: "Completed intensive hands-on workshop on Generative AI fundamentals and OpenAI APIs. Learned to build GenAI applications using GPT-4o, Whisper, and DALL·E. Part of India's largest GenAI challenge with 28,000+ students across 813+ colleges nationwide.",
      skills: ['OpenAI APIs', 'GPT-4o', 'Generative AI', 'AI Agents', 'Prompt Engineering'],
      icon: <Trophy className="w-12 h-12" style={{ color: `var(--primary-color)` }} />,
      link: 'https://drive.google.com/file/d/165hRGE40LTQxe-ErsyRgQHbGwIYx8QyA/view?usp=drive_link',
      featured: true,
    },
    {
      title: 'Machine Learning Workshop (MLverse 2.0)',
      issuer: 'Techfest IIT Bombay',
      date: '2025',
      description: 'Attended a 2-day intensive offline workshop covering core Machine Learning concepts, Python for data analysis, supervised and unsupervised techniques, and an introduction to deep learning. Gained hands-on experience while visiting the IIT Bombay campus and engaging with participants from across the globe.',
      skills: ['Machine Learning', 'Python', 'Data Analysis', 'Supervised Learning', 'Unsupervised Learning', 'Deep Learning', 'Project Implementation'],
      icon: <Trophy className="w-12 h-12" style={{ color: `var(--primary-color)` }} />,
      link: 'https://drive.google.com/file/d/1g1hEhVqOjNJ_RMpCa2sddG9Nqfv1j_QB/view?usp=drive_link',
      featured: true,
    },
    {
      title: 'OpenAI Academy x NxtWave Regional Buildathon - Maharashtra',
      issuer: 'NxtWave',
      date: '2026',
      description: "Participated in a 2-day intensive state level hackathon making use of Generative AI. Learned to build GenAI applications using Gemini APIs. Part of India's largest GenAI challenge with 28,000+ students across 813+ colleges nationwide.",
      skills: ['Full Stack Development', 'Generative AI', 'MERN Stack', 'Project Implementation'],
      icon: <Trophy className="w-12 h-12" style={{ color: `var(--primary-color)` }} />,
      link: 'https://drive.google.com/file/d/1AGPhVQqOxbz6_UczYbPLlIjGt5mfr4h4/view?usp=drive_link',
      featured: true,
    }
  ];

  const achievements = [
    {
      title: '1st Rank at Institute Level Final Year Project Competition',
      description: 'Lead Developer for a Civil Engineering interdisciplinary final-year project, winning 1st place at the institute-level (AESTIMA).',
      icon: <Trophy className="w-8 h-8" style={{ color: `var(--primary-color)` }} />,
    },
    {
      title: 'IPR and Patent Filing (In Process)',
      description: 'Currently in the process of securing Intellectual Property Rights and patent for an innovative project solution (AESTIMA).',
      icon: <Trophy className="w-8 h-8" style={{ color: `var(--primary-color)` }} />,
    },
    {
      title: '2nd Rank at College Level PBL Project Competition',
      description: 'Secured 2nd place in college-level Project Based Learning competition, demonstrating innovation and technical excellence (ArogyaVatika).',
      icon: <Medal className="w-8 h-8" style={{ color: `var(--primary-color)` }} />,
    },
    {
      title: '2nd Rank at College Level DSA Project Competition',
      description: 'Secured 2nd place in a college-level Data Structures & Algorithms competition, demonstrating strong mastery of DSA concepts (ArogyaVatika).',
      icon: <Medal className="w-8 h-8" style={{ color: `var(--primary-color)` }} />,
    },
    {
      title: 'Google Cloud Arcade - Legend Tier',
      description: 'Achieved the prestigious Legend Tier status in Google Cloud Arcade Facilitator program, completing 120+ badges and 95+ arcade points.',
      icon: <Star className="w-8 h-8" style={{ color: `var(--primary-color)` }} />,
    },
    {
      title: 'Top 1% Ranking in NPTEL Course',
      description: 'Secured top 1% ranking among thousands of participants in a prestigious NPTEL online course.',
      icon: <Award className="w-8 h-8" style={{ color: `var(--primary-color)` }} />,
    },
    {
      title: 'OpenAI Academy x NxtWave Regional Buildathon - Maharashtra',
      description: 'Got Selected and Participated at the Largest Indian Gen AI Challenge',
      icon: <Star className="w-8 h-8" style={{ color: `var(--primary-color)` }} />,
    }  
  ];

  return (
    <div className={`relative min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 ${theme === 'dark' ? 'text-white' : 'text-darkText'}`}>
      {/* 3D Starfield Background */}
      <div className="fixed inset-0 z-0">
        <MainScene />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div ref={headerRef} className="text-center mb-16">
          <h1 className="section-header mb-6">CERTIFICATIONS</h1>
          <p className={`font-mono text-base sm:text-lg max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Professional certifications validating expertise across{' '}
            <span className="neon-text">Cloud Computing</span>,{' '}
            <span className="neon-text">Database Management</span>,{' '}
            <span className="neon-text">Programming</span>, and more
          </p>
        </div>

        <div ref={certsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-20">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`card p-6 hover:scale-105 transition-all duration-300 ${
                cert.featured ? 'border-2' : ''
              }`}
              style={cert.featured ? { borderColor: `var(--primary-color)` } : {}}
            >
              <div className="flex items-start justify-between mb-4">
                <div>{cert.icon}</div>
                {cert.featured && (
                  <span
                    className="px-2 py-1 text-xs font-bold uppercase rounded flex items-center space-x-1"
                    style={{
                      background: `var(--primary-color)`,
                      color: theme === 'dark' ? '#000000' : '#FFFFFF',
                    }}
                  >
                    <Star className="w-3 h-3" />
                    <span>Featured</span>
                  </span>
                )}
              </div>

              <h3 className="text-xl sm:text-2xl font-cyber font-bold neon-text mb-2">
                {cert.title}
              </h3>

              <p className="text-sm font-mono mb-1 neon-text">
                {cert.issuer}
              </p>
              <p className={`text-xs font-mono mb-4 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>
                {cert.date}
              </p>

              <p className={`font-mono text-sm leading-relaxed mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                {cert.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {cert.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 border text-xs font-mono uppercase rounded-md"
                    style={{
                      borderColor: 'var(--primary-color)',
                      backgroundColor: 'var(--primary-color)',
                      color: theme === 'dark' ? '#000000' : '#ffffff',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 font-mono text-sm transition-colors duration-300 neon-text"
              >
                <span>View Certificate</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div ref={achievementRef} className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-cyber font-bold neon-text uppercase mb-4">
              ACHIEVEMENTS
            </h2>
            <p className={`font-mono text-base sm:text-lg max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Recognition and milestones in academics, competitions, and professional development
            </p>
          </div>

          <div ref={achievementsListRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="card p-6 hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="mt-1">{achievement.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-cyber font-bold mb-2 neon-text">
                      {achievement.title}
                    </h3>
                    <p className={`font-mono text-sm leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Continuous Learning Section */}
        <div className="text-center">
          <div className="card p-8 inline-block max-w-2xl">
            <Trophy className="w-16 h-16 mx-auto mb-4" style={{ color: `var(--primary-color)` }} />
            <h3 className="text-2xl sm:text-3xl font-cyber font-bold neon-text mb-4">
              Continuous Learning
            </h3>
            <p className={`font-mono text-sm sm:text-base ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Always expanding skillset with new technologies, methodologies, and industry best practices.
              Committed to staying at the forefront of technological innovation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationsPage;
