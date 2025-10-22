import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-8 left-0 right-0 z-50 flex justify-between items-center px-8 max-w-7xl mx-auto">
      <Link to="/" className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center hover:scale-105 transition-transform">
        <span className="text-emerald-400 text-3xl font-bold">a</span>
        <span className="text-emerald-400 text-xl">*</span>
      </Link>

      <nav className="bg-white rounded-full shadow-xl px-2 py-2">
        <div className="flex gap-2">
          <Link
            to="/"
            className={`px-8 py-3 rounded-full transition-colors ${
              isActive('/') ? 'bg-gray-900 text-emerald-400' : 'text-gray-900 hover:bg-gray-100'
            }`}
          >
            Home
          </Link>
          <Link
            to="/work"
            className={`px-8 py-3 rounded-full transition-colors ${
              isActive('/work') ? 'bg-gray-900 text-emerald-400' : 'text-gray-900 hover:bg-gray-100'
            }`}
          >
            Work
          </Link>
          <Link
            to="/about"
            className={`px-8 py-3 rounded-full transition-colors ${
              isActive('/about') ? 'bg-gray-900 text-emerald-400' : 'text-gray-900 hover:bg-gray-100'
            }`}
          >
            About us
          </Link>
          <Link
            to="/contact"
            className={`px-8 py-3 rounded-full transition-colors ${
              isActive('/contact') ? 'bg-gray-900 text-emerald-400' : 'text-gray-900 hover:bg-gray-100'
            }`}
          >
            Contact us
          </Link>
        </div>
      </nav>
    </header>
  );
}
