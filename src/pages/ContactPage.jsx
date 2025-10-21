import React, { useRef, useState } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, MessageCircle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import MainScene from '../scenes/MainScene';

const ContactPage = () => {
  const { theme } = useTheme();
  const headerRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Detect mobile device
  const isMobile = () => {
    const ua = navigator.userAgent;
    return /Android.*Mobile|iPhone|iPod/i.test(ua) && !(/iPad|Tablet/i.test(ua)) && window.innerWidth < 768;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let emailLink;
    
    if (isMobile()) {
      // Mobile: Use mailto link to open Gmail app
      emailLink = `mailto:hrishikeshgavai@gmail.com?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = emailLink;
    } else {
      // Desktop: Open Gmail web compose
      emailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=hrishikeshgavai@gmail.com&su=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.open(emailLink, '_blank');
    }
    
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const socialLinks = [
    { icon: Github, url: 'https://github.com/Hrishikesh-Gavai', name: 'GitHub' },
    { icon: Linkedin, url: 'https://linkedin.com/in/hrishikesh-gavai', name: 'LinkedIn' },
  ];

  // Email link based on device
  const getEmailLink = () => {
    return isMobile() ? 'mailto:hrishikeshgavai@gmail.com' : 'https://mail.google.com/mail/?view=cm&fs=1&to=hrishikeshgavai@gmail.com';
  };

  return (
    <div className={`relative min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 ${theme === 'dark' ? 'text-white' : 'text-darkText'}`}>
      {/* 3D Starfield Background */}
      <div className="fixed inset-0 z-0">
        <MainScene />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div ref={headerRef} className="text-center mb-16">
          <h1 className="section-header mb-6">GET IN TOUCH</h1>
          <p className={`font-mono text-base sm:text-lg max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Open to <span className="neon-text">internships</span>,{' '}
            <span className="neon-text">collaborations</span>, and{' '}
            <span className="neon-text">discussions</span> about tech, AI, and digital media
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div ref={formRef} className="card p-6 sm:p-8 rounded-lg">
            <div className="flex items-center space-x-3 mb-6">
              <MessageCircle className="w-8 h-8" style={{ color: `var(--primary-color)` }} />
              <h2 className="text-2xl sm:text-3xl font-cyber font-bold neon-text uppercase">
                Send Message
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-mono mb-2 uppercase neon-text">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border font-mono focus:outline-none transition-all duration-300 ${
                    theme === 'dark' ? 'bg-amoled text-white' : 'bg-white text-darkText'
                  }`}
                  style={{
                    borderColor: `var(--primary-color)`,
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = `var(--accent-color)`;
                    e.target.style.boxShadow = `0 0 10px rgba(var(--primary-color-rgb), 0.5)`;
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = `var(--primary-color)`;
                    e.target.style.boxShadow = 'none';
                  }}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-mono mb-2 uppercase neon-text">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border font-mono focus:outline-none transition-all duration-300 ${
                    theme === 'dark' ? 'bg-amoled text-white' : 'bg-white text-darkText'
                  }`}
                  style={{
                    borderColor: `var(--primary-color)`,
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = `var(--accent-color)`;
                    e.target.style.boxShadow = `0 0 10px rgba(var(--primary-color-rgb), 0.5)`;
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = `var(--primary-color)`;
                    e.target.style.boxShadow = 'none';
                  }}
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-mono mb-2 uppercase neon-text">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border font-mono focus:outline-none transition-all duration-300 ${
                    theme === 'dark' ? 'bg-amoled text-white' : 'bg-white text-darkText'
                  }`}
                  style={{
                    borderColor: `var(--primary-color)`,
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = `var(--accent-color)`;
                    e.target.style.boxShadow = `0 0 10px rgba(var(--primary-color-rgb), 0.5)`;
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = `var(--primary-color)`;
                    e.target.style.boxShadow = 'none';
                  }}
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-sm font-mono mb-2 uppercase neon-text">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className={`w-full px-4 py-3 border font-mono focus:outline-none transition-all duration-300 resize-none ${
                    theme === 'dark' ? 'bg-amoled text-white' : 'bg-white text-darkText'
                  }`}
                  style={{
                    borderColor: `var(--primary-color)`,
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = `var(--accent-color)`;
                    e.target.style.boxShadow = `0 0 10px rgba(var(--primary-color-rgb), 0.5)`;
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = `var(--primary-color)`;
                    e.target.style.boxShadow = 'none';
                  }}
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="red-button w-full"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', minHeight: '56px' }}
              >
                <Send className="w-5 h-5" style={{ flexShrink: 0 }} />
                <span>Send via Gmail</span>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div ref={infoRef} className="space-y-6">
            <div className="card p-6 rounded-lg flex items-start space-x-4 transition-transform duration-300 hover:scale-105">
              <Mail className="w-8 h-8 flex-shrink-0 mt-1" style={{ color: `var(--primary-color)` }} />
              <div>
                <h3 className="text-lg sm:text-xl font-cyber font-bold mb-2 uppercase neon-text">
                  Email
                </h3>
                <a
                  href={getEmailLink()}
                  target={isMobile() ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className={`font-mono transition-colors duration-300 text-sm sm:text-base ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}
                  style={{ textDecoration: 'none' }}
                  onMouseEnter={(e) => e.target.style.color = `var(--primary-color)`}
                  onMouseLeave={(e) => e.target.style.color = theme === 'dark' ? '#d1d5db' : '#374151'}
                >
                  hrishikeshgavai@gmail.com
                </a>
              </div>
            </div>

            <div className="card p-6 rounded-lg flex items-start space-x-4 transition-transform duration-300 hover:scale-105">
              <MapPin className="w-8 h-8 flex-shrink-0 mt-1" style={{ color: `var(--primary-color)` }} />
              <div>
                <h3 className="text-lg sm:text-xl font-cyber font-bold mb-2 uppercase neon-text">
                  Location
                </h3>
                <p className={`font-mono text-sm sm:text-base ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Nashik, Maharashtra, India
                </p>
              </div>
            </div>

            <div className="card p-6 rounded-lg">
              <h3 className="text-lg sm:text-xl font-cyber font-bold mb-4 uppercase neon-text">
                Social Links
              </h3>
              <div className="flex space-x-6">
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
                    <Icon size={32} />
                  </a>
                ))}
              </div>
            </div>

            <div className={`card p-6 rounded-lg ${theme === 'dark' ? 'bg-gradient-to-br from-darkGray to-amoled' : 'bg-gradient-to-br from-lightGray to-lightBg'}`}>
              <h3 className="text-xl sm:text-2xl font-cyber font-bold neon-text mb-3 uppercase">
                Open to Opportunities
              </h3>
              <p className={`font-mono leading-relaxed text-sm sm:text-base ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Looking for internships in <span className="neon-text font-bold">AI/ML</span>,{' '}
                <span className="neon-text font-bold">Full-Stack Development</span>,{' '}
                <span className="neon-text font-bold">Systems Design</span>, and{' '}
                <span className="neon-text font-bold">Creative Direction</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
