import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, User2, Menu, X } from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 shadow-lg backdrop-blur-sm' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="text-2xl font-bold text-white">
              Abhinav<span className="text-emerald-400">.</span>
            </a>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="nav-link">
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-slate-800 rounded-lg mt-2 p-4 animate-fade-in">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block py-2 text-gray-100 hover:text-emerald-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <header className="min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl animate-fade-in">
            <h1 id="about" className="text-6xl font-bold mb-6">
              Hi, I'm Abhinav Singh
              <span className="text-emerald-400">.</span>
            </h1>
            <p className="text-xl mb-8 text-gray-300">
            Machine Learning Enthusiast & Full Stack developer | Currently exploring Web3 and Deep Learning
            </p>
            <div className="flex gap-4">
              <a 
                href="#contact" 
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                Contact Me
              </a>
              <a 
                href="#projects" 
                className="border-2 border-emerald-500 text-emerald-400 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-500 hover:text-white transition-all transform hover:scale-105"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 mb-12 animate-slide-in">
            <Code2 className="w-8 h-8 text-emerald-400" />
            <h2 className="text-3xl font-bold text-white">Skills & Technologies</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                name: 'Web Development', 
                skills: ['JavaScript', 'React', 'Node.js', 'Express', 'Socket.io', 'Spring Boot','MERN Stack']
              },
              { 
                name: 'Programming Languages', 
                skills: ['Java', 'C++', 'C', 'Python'] 
              },
              { 
                name: 'Databases', 
                skills: ['MongoDB', 'SQL'] 
              },
              { 
                name: 'Machine Learning', 
                skills: ['NumPy', 'Pandas', 'Scikit-learn', 'Matplotlib'] 
              },
              { 
                name: 'Currently Learning', 
                skills: ['Deep Learning', 'Solidity', 'Blockchain', 'Web3'] 
              },
            ].map((category, index) => (
              <div 
                key={category.name} 
                className="bg-slate-700 p-6 rounded-xl shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h3 className="text-xl font-semibold mb-4 text-white">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="bg-slate-600 text-emerald-400 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 mb-12 animate-slide-in">
            <Briefcase className="w-8 h-8 text-emerald-400" />
            <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'NexTalk',
                description: 'A full-stack chat application built with Socket.io, React, and Node.js enabling real-time communication between users.',
                image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?auto=format&fit=crop&q=80&w=800',
                tech: ['React', 'Node.js', 'Express.js' ,'Socket.io', 'MongoDB'],
                link: 'https://github.com/SinghAbhinav04/NexTalk'
              },
              {
                title: 'House Price Prediction',
                description: 'Machine learning model to predict house prices using advanced regression techniques and data analysis.',
                image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=800',
                tech: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib','Numpy'],
                link: 'https://github.com/SinghAbhinav04/House-Price-Prediction'
              },
              {
                title: 'Expense Tracker',
                description: 'A web application to track personal expenses with detailed analytics and budget planning features.',
                image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800',
                tech: ['React', 'Java SpringBoot', 'MongoDB'],
                link: 'https://github.com/SinghAbhinav04/Expense-Tracker-App'
              },
              {
                title: 'Todo List Application',
                description: 'A feature-rich todo list application with task categorization and priority management.',
                image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=800',
                tech: ['React'],
                link: 'https://singhabhinav04.github.io/to-do-list/'
              }
            ].map((project, index) => (
              <div 
                key={project.title} 
                className="bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-slate-700 text-emerald-400 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link}
                    className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    View Project <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 mb-12 animate-slide-in">
            <User2 className="w-8 h-8 text-emerald-400" />
            <h2 className="text-3xl font-bold text-white">Let's Connect</h2>
          </div>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-gray-300 mb-8">
              I'm passionate about building innovative solutions and always excited to collaborate on new projects.
              Feel free to reach out through any of the following channels:
            </p>
            <div className="flex justify-center gap-6">
              <a 
                href="https://github.com/SinghAbhinav04" 
                className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-all transform hover:scale-110"
              >
                <Github className="w-6 h-6" />
                <span>GitHub</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/singhabhinav04/" 
                className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-all transform hover:scale-110"
              >
                <Linkedin className="w-6 h-6" />
                <span>LinkedIn</span>
              </a>
              <a 
                href="mailto:heysinghabhinav@gmail.com" 
                className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-all transform hover:scale-110"
              >
                <Mail className="w-6 h-6" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-gray-400 py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© {new Date().getFullYear()} Abhinav Singh. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;