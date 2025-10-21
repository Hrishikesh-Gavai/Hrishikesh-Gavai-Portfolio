import React from 'react';
import { Github, Linkedin, Mail, MapPin, Code } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();

  // More precise mobile detection - only actual mobile devices, not tablets or desktop browsers in responsive mode
  const isMobile = () => {
    const ua = navigator.userAgent;
    return /Android.*Mobile|iPhone|iPod/i.test(ua) && !(/iPad|Tablet/i.test(ua)) && window.innerWidth < 768;
  };

  const socialLinks = [
    { icon: Github, url: 'https://github.com/Hrishikesh-Gavai', name: 'GitHub' },
    { icon: Linkedin, url: 'https://in.linkedin.com/in/hrishikesh-gavai', name: 'LinkedIn' },
    { 
      icon: Mail, 
      url: isMobile() 
        ? 'mailto:hrishikeshgavai@gmail.com' 
        : 'https://mail.google.com/mail/?view=cm&fs=1&to=hrishikeshgavai@gmail.com', 
      name: 'Email' 
    }
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer
      className={`relative border-t-2 py-12 mt-20 ${
        theme === 'dark'
          ? 'bg-amoled'
          : 'bg-lightBg'
      }`}
      style={{ borderColor: `var(--primary-color)` }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-cyber font-bold neon-text mb-4 uppercase tracking-wider">
              Hrishikesh Gavai
            </h3>
            <p className={`font-mono text-sm leading-relaxed mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Computer Engineering undergrad passionate about AI/ML, Full-Stack Development, and Creative Technology.
            </p>
            <div className={`flex items-center space-x-2 mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              <MapPin className="w-4 h-4" />
              <span className="font-mono text-sm">Nashik, Maharashtra</span>
            </div>
            <div className={`flex items-center space-x-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              <Mail className="w-4 h-4" />
              <span className="font-mono text-sm">hrishikeshgavai@gmail.com</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-cyber font-bold neon-text mb-4 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    className={`font-mono text-sm transition-colors duration-300 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}
                    onMouseEnter={(e) => e.target.style.color = `var(${theme === 'dark' ? '--primary-color' : '--secondary-color'})`}
                    onMouseLeave={(e) => e.target.style.color = theme === 'dark' ? '#9ca3af' : '#4b5563'}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="text-xl font-cyber font-bold neon-text mb-4 uppercase tracking-wider">
              Connect With Me
            </h3>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map(({ icon: Icon, url, name }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-300 hover:scale-110"
                  style={{ color: `var(--primary-color)` }}
                  aria-label={name}
                >
                  <Icon size={28} />
                </a>
              ))}
            </div>
            <p className={`font-mono text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Open to collaborations, internships, and exciting tech projects.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className={`border-t mb-6 ${theme === 'dark' ? 'border-gray-800' : 'border-gray-300'}`}></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="neon-text font-cyber font-bold text-xs sm:text-sm uppercase tracking-wider text-center md:text-left">
            &copy; 2025 Hrishikesh Gavai | All Rights Reserved
          </p>
          <div className={`flex items-center space-x-2 font-mono text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}`}>
            <Code className="w-4 h-4" />
            <span>Built with React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
