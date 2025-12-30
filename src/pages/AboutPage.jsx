import React, { useRef } from 'react';
import { User, Briefcase, GraduationCap, Award, Code, Palette, Database, Cloud, Gamepad2, Cpu, Layout, Server, Users, Heart } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import MainScene from '../scenes/MainScene';

const AboutPage = () => {
  const { theme } = useTheme();
  const headerRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const positionRef = useRef(null);
  const skillsRef = useRef(null);
  const educationRef = useRef(null);
  const coCurricularRef = useRef(null);
  const extraCurricularRef = useRef(null);

  const skills = {
    programming: { icon: Cpu, techs: ['C', 'C++', 'Java', 'Python', 'JavaScript', 'TypeScript'] },
    frontend: { icon: Layout, techs: ['React.js', 'Three.js', 'HTML5', 'CSS3', 'Tailwind CSS'] },
    backend: { icon: Server, techs: ['Node.js', 'Express.js', 'Spring Boot', 'Django'] },
    databases: { icon: Database, techs: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase', 'Redis'] },
    aiml: { icon: Code, techs: ['TensorFlow', 'PyTorch', 'scikit-learn', 'Pandas', 'NumPy'] },
    cloud: { icon: Cloud, techs: ['Google Cloud', 'AWS', 'Docker', 'Git', 'GitHub'] },
    gamedev: { icon: Gamepad2, techs: ['Unity', 'Unreal Engine', 'Godot', 'Blender'] },
  };

  const education = [
    { title: 'B.Tech Computer Engineering', institution: 'KKWIEER - Third Year', grade: 'SGPA: 9.27' },
  ];

  const coCurricular = [
    'Managing social media for Debuggers\' Club, KKWIEER, enhancing engagement and visibility.',
    'Active participant in hackathons and project competitions, strengthening problem-solving and teamwork skills.',
    'Conducted seminars on Design Thinking for second-year students, promoting creative thinking.',
    'Volunteered for college-level management tasks, supporting events and coordination.',
    'Deploying a personalized website for the Computer Department, showcasing web development skills.',
  ];

  const extraCurricular = [
    'Passionate about cinema, direction, editing, and creative design, producing digital content for projects and events.',
    'Active in sports, arts, and cultural events, demonstrating initiative and communication skills.',
    'Engaged in community volunteering and event management, fostering leadership and teamwork.',
  ];

  return (
    <div className={`relative min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 ${theme === 'dark' ? 'text-white' : 'text-darkText'}`}>
      {/* 3D Starfield Background */}
      <div className="fixed inset-0 z-0">
        <MainScene />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <h1 className="section-header mb-6">ABOUT ME</h1>
          <p className={`font-mono text-base sm:text-lg max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Full-Stack Developer | AI/ML Enthusiast | Creative Technologist
          </p>
        </div>

        {/* Main Content Section - Image Left, Text Right */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-20 items-start">
          {/* Vertical Image - Left Side */}
          <div ref={imageRef} className="lg:col-span-4">
            <div 
              className="neon-border rounded-2xl overflow-hidden h-[500px] lg:h-[600px] w-full"
              style={{
                boxShadow: theme === 'dark' 
                  ? `0 0 25px rgba(var(--primary-color-rgb), 0.4)` 
                  : `0 0 15px rgba(var(--primary-color-rgb), 0.3)`,
              }}
            >
              <img
                src="/assets/images/Hrishikesh.jpg"
                alt="Hrishikesh Gavai"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Text Content - Right Side */}
          <div ref={contentRef} className="lg:col-span-8 space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <User className="w-8 h-8" style={{ color: `var(--primary-color)` }} />
              <h2 className="text-2xl sm:text-3xl font-cyber font-bold neon-text uppercase">
                Who Am I?
              </h2>
            </div>

            <p className={`text-base sm:text-lg leading-relaxed font-mono ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              Hi, I'm <span className="neon-text font-bold">Hrishikesh Gavai</span>, a{' '}
              <span className="neon-text font-bold">Computer Engineering undergrad (CSE '27)</span>{' '}
              blending software engineering, AI/ML, and digital creativity.
            </p>

            <p className={`text-base sm:text-lg leading-relaxed font-mono ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              I build full-stack applications using{' '}
              <span className="neon-text font-bold">
                Java, Python, React, Spring Boot, and Django
              </span>
              , with expertise in C, C++, HTML/CSS/JavaScript, and database management.
            </p>

            <p className={`text-base sm:text-lg leading-relaxed font-mono ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              Beyond code, I design, direct, and produce creative digital solutions, including{' '}
              <span className="neon-text font-bold">
                photography, social media content, digital marketing campaigns, and cinema-related projects
              </span>.
            </p>

            <p className={`text-base sm:text-lg leading-relaxed font-mono ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              I thrive at the intersection of{' '}
              <span className="neon-text font-bold">engineering, media, and storytelling</span>,
              turning complex problems into clear, actionable solutions.
            </p>

            <div className="flex flex-wrap gap-6 pt-6">
              <div className="flex items-center space-x-3 card px-6 py-3 rounded-xl">
                <Code className="w-6 h-6" style={{ color: `var(--primary-color)` }} />
                <span className="font-mono text-sm sm:text-base font-bold">Developer</span>
              </div>
              <div className="flex items-center space-x-3 card px-6 py-3 rounded-xl">
                <Palette className="w-6 h-6" style={{ color: `var(--primary-color)` }} />
                <span className="font-mono text-sm sm:text-base font-bold">Designer</span>
              </div>
            </div>
          </div>
        </section>

        {/* Positions & Education Section - Same Row */}
        <section className="mb-20">
          <div ref={positionRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Positions */}
            <div>
              <div className="flex items-center justify-center space-x-3 mb-8">
                <Award className="w-10 h-10" style={{ color: `var(--primary-color)` }} />
                <h2 className="text-3xl sm:text-4xl font-cyber font-bold neon-text uppercase">Positions</h2>
              </div>

              <div className="space-y-6">
                <div className="card p-8 text-center rounded-2xl">
                  <h3 className="text-xl sm:text-2xl font-cyber font-bold mb-4 neon-text">
                    Founder
                  </h3>
                  <p className={`font-mono text-base sm:text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    N.E.R.V
                  </p>
                </div>

                <div className="card p-8 text-center rounded-2xl">
                  <h3 className="text-xl sm:text-2xl font-cyber font-bold mb-4 neon-text">
                    Social Media Manager
                  </h3>
                  <p className={`font-mono text-base sm:text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Debuggers' Club, KKWIEER
                  </p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center justify-center space-x-3 mb-8">
                <GraduationCap className="w-10 h-10" style={{ color: `var(--primary-color)` }} />
                <h2 className="text-3xl sm:text-4xl font-cyber font-bold neon-text uppercase">Education</h2>
              </div>

              <div ref={educationRef} className="card p-8 rounded-2xl text-center">
                <h3 className="text-xl sm:text-2xl font-cyber font-bold mb-4 neon-text">
                  {education[0].title}
                </h3>
                <p className={`font-mono mb-3 text-base ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  {education[0].institution}
                </p>
                <p className="neon-text font-bold text-2xl sm:text-3xl">{education[0].grade}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section with Icons */}
        <section className="mb-20">
          <div className="flex items-center justify-center space-x-3 mb-12">
            <Briefcase className="w-10 h-10" style={{ color: `var(--primary-color)` }} />
            <h2 className="text-3xl sm:text-4xl font-cyber font-bold neon-text uppercase">Tech Stack</h2>
          </div>

          <div ref={skillsRef} className="space-y-6">
            {/* First 6 items in 3-column grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(skills).slice(0, 6).map(([category, { icon: Icon, techs }]) => (
                <div 
                  key={category} 
                  className="card p-6 rounded-2xl"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <Icon className="w-6 h-6" style={{ color: `var(--primary-color)` }} />
                    <h3 className="text-lg sm:text-xl font-cyber font-bold uppercase neon-text">
                      {category === 'aiml' ? 'AI/ML & Data Science' : category.replace(/([A-Z])/g, ' $1').trim()}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {techs.map((tech) => (
                      <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Gamedev centered in 3rd row */}
            <div className="flex justify-center">
              <div className="card p-6 rounded-2xl w-full md:w-1/2 lg:w-1/3">
                <div className="flex items-center space-x-3 mb-4">
                  <Gamepad2 className="w-6 h-6" style={{ color: `var(--primary-color)` }} />
                  <h3 className="text-lg sm:text-xl font-cyber font-bold uppercase neon-text">
                    Game Development
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skills.gamedev.techs.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Co-Curricular & Extra-Curricular Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Co-Curricular */}
            <div>
              <div className="flex items-center justify-center space-x-3 mb-8">
                <Users className="w-10 h-10" style={{ color: `var(--primary-color)` }} />
                <h2 className="text-3xl sm:text-4xl font-cyber font-bold neon-text uppercase">Co-Curricular</h2>
              </div>

              <div ref={coCurricularRef} className="space-y-4">
                {coCurricular.map((item, index) => (
                  <div key={index} className="card p-6 rounded-2xl">
                    <p className={`font-mono text-sm sm:text-base leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      • {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Extra-Curricular */}
            <div>
              <div className="flex items-center justify-center space-x-3 mb-8">
                <Heart className="w-10 h-10" style={{ color: `var(--primary-color)` }} />
                <h2 className="text-3xl sm:text-4xl font-cyber font-bold neon-text uppercase">Extra-Curricular</h2>
              </div>

              <div ref={extraCurricularRef} className="space-y-4">
                {extraCurricular.map((item, index) => (
                  <div key={index} className="card p-6 rounded-2xl">
                    <p className={`font-mono text-sm sm:text-base leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      • {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
