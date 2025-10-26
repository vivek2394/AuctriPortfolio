import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function ScrollHeader() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

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
      setMenuOpen(false); // close mobile menu
    }
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-between items-center px-4 md:px-8 max-w-7xl mx-auto animate-fadeInUp">
      {/* Logo */}
      <button
        onClick={() => scrollToSection('home')}
        className="w-14 h-14 md:w-16 md:h-16 bg-gray-900 rounded-full flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-emerald-400/50 transition-all duration-300"
      >
        <span className="text-emerald-400 text-3xl md:text-3xl font-bold">a</span>
        <span className="text-emerald-400 text-xl md:text-xl">*</span>
      </button>

      {/* Hamburger for mobile */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 rounded-md bg-white shadow-md hover:shadow-xl transition-shadow">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Navigation */}
      <nav
        className={`absolute top-full right-4 md:static md:flex md:gap-2 bg-white md:bg-transparent shadow-md md:shadow-none rounded-xl md:rounded-none p-4 md:p-0 transition-all duration-300 ${
          menuOpen ? 'block' : 'hidden md:flex'
        }`}
      >
        {['home', 'work', 'about', 'contact'].map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className={`px-6 py-3 rounded-full transition-all duration-300 mb-2 md:mb-0 w-full md:w-auto ${
              activeSection === section
                ? 'bg-gray-900 text-emerald-400'
                : 'text-gray-900 hover:bg-gray-100 hover:scale-105'
            }`}
          >
            {section === 'about' ? 'About us' : section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </nav>
    </header>
  );
}
