import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';

interface NavLinkProps {
  to: string;
  label: string;
  isActive: boolean;
  onClick?: () => void;
  isMobile?: boolean;
}

const NavLink = ({ to, label, isActive, onClick, isMobile = false }: NavLinkProps) => {
  if (isMobile) {
    return (
      <Link
        to={to}
        onClick={onClick}
        className={`block px-4 py-3 rounded-lg text-base font-medium transition-all ${
          isActive
            ? 'bg-brand-accent/10 text-brand-accent'
            : 'text-graphite hover:bg-gray-50'
        }`}
      >
        <div className="flex items-center justify-between">
          {label}
          {isActive && <ChevronRight className="w-4 h-4" />}
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={to}
      className={`relative px-4 py-2 text-sm font-medium transition-colors ${
        isActive ? 'text-brand-accent' : 'text-graphite hover:text-brand-accent'
      }`}
    >
      {label}
      {isActive && (
        <motion.div
          layoutId="navbar-indicator"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-accent rounded-full"
          initial={false}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      )}
    </Link>
  );
};

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/product', label: 'Product' },
    { path: '/installation', label: 'Installation' },
    { path: '/data-certifications', label: 'Data & Certifications' },
    { path: '/case-studies', label: 'Case Studies' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 z-50">
            <span className="text-2xl font-bold tracking-tighter text-graphite">
              Quick<span className="text-brand-accent">trap</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                label={link.label}
                isActive={location.pathname === link.path}
              />
            ))}
            <Link
              to="/contact"
              className="ml-4 px-5 py-2 bg-brand-accent text-white rounded-full text-sm font-medium hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-graphite z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-0 left-0 right-0 bg-white shadow-xl md:hidden pt-20 pb-6 px-4 border-b border-gray-100"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  label={link.label}
                  isActive={location.pathname === link.path}
                  onClick={() => setIsOpen(false)}
                  isMobile={true}
                />
              ))}
              <div className="pt-4 mt-4 border-t border-gray-100">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center px-5 py-3 bg-brand-accent text-white rounded-lg font-medium shadow-md active:scale-95 transition-transform"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
