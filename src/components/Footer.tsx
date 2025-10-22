import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Twitter, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-8">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                <span className="text-emerald-400 text-2xl font-bold">a</span>
                <span className="text-emerald-400 text-lg">*</span>
              </div>
              <span className="text-xl font-semibold">Auctri Studio</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              crafting a digital presence that commands attention, builds trust, and drives success. Let's redefine your industry's future—one click, one connection, one triumph at a time.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 bg-white text-gray-900 rounded flex items-center justify-center hover:bg-emerald-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white text-gray-900 rounded flex items-center justify-center hover:bg-emerald-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white text-gray-900 rounded flex items-center justify-center hover:bg-emerald-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div className="flex gap-16">
            <div>
              <h3 className="font-semibold mb-4">Sitemap</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/" className="hover:text-emerald-400 transition-colors">Home</Link></li>
                <li><Link to="/work" className="hover:text-emerald-400 transition-colors">Work</Link></li>
                <li><Link to="/about" className="hover:text-emerald-400 transition-colors">About us</Link></li>
                <li><Link to="/contact" className="hover:text-emerald-400 transition-colors">Contact us</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/privacy" className="hover:text-emerald-400 transition-colors">Privacy policy</Link></li>
                <li><Link to="/terms" className="hover:text-emerald-400 transition-colors">Terms of services</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-emerald-400 transition-colors group"
          >
            <span>Back to top</span>
            <ArrowUp size={16} className="group-hover:translate-y-[-4px] transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
