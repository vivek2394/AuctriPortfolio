import { useState, useEffect } from 'react';

export default function ScrollHeader() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'work', 'about', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-8 left-0 right-0 z-50 flex justify-between items-center px-8 max-w-7xl mx-auto animate-fadeInUp">
      <button
        onClick={() => scrollToSection('home')}
        className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-emerald-400/50 transition-all duration-300"
      >
        <span className="text-emerald-400 text-3xl font-bold">a</span>
        <span className="text-emerald-400 text-xl">*</span>
      </button>

      <nav className="bg-white rounded-full shadow-xl px-2 py-2 hover:shadow-2xl transition-shadow duration-300">
        <div className="flex gap-2">
          <button
            onClick={() => scrollToSection('home')}
            className={`px-8 py-3 rounded-full transition-all duration-300 ${
              activeSection === 'home' ? 'bg-gray-900 text-emerald-400' : 'text-gray-900 hover:bg-gray-100 hover:scale-105'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('work')}
            className={`px-8 py-3 rounded-full transition-all duration-300 ${
              activeSection === 'work' ? 'bg-gray-900 text-emerald-400' : 'text-gray-900 hover:bg-gray-100 hover:scale-105'
            }`}
          >
            Work
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className={`px-8 py-3 rounded-full transition-all duration-300 ${
              activeSection === 'about' ? 'bg-gray-900 text-emerald-400' : 'text-gray-900 hover:bg-gray-100 hover:scale-105'
            }`}
          >
            About us
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className={`px-8 py-3 rounded-full transition-all duration-300 ${
              activeSection === 'contact' ? 'bg-gray-900 text-emerald-400' : 'text-gray-900 hover:bg-gray-100 hover:scale-105'
            }`}
          >
            Contact us
          </button>
        </div>
      </nav>
    </header>
  );
}
