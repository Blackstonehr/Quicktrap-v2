import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 relative overflow-hidden">
      <div className="blueprint-grid absolute inset-0 opacity-30 pointer-events-none" />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <span className="text-2xl font-bold tracking-tighter text-graphite">
                Quick<span className="text-brand-accent">trap</span>
              </span>
            </Link>
            <p className="text-sm text-steel leading-relaxed mb-6">
              Advanced stormwater management solutions engineered for municipal and commercial excellence. Protecting our waterways, one trap at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-graphite uppercase tracking-wider mb-6">Product</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/product" className="text-sm text-steel hover:text-brand-accent transition-colors flex items-center group">
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Specifications
                </Link>
              </li>
              <li>
                <Link to="/installation" className="text-sm text-steel hover:text-brand-accent transition-colors flex items-center group">
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Installation Guide
                </Link>
              </li>
              <li>
                <Link to="/data-certifications" className="text-sm text-steel hover:text-brand-accent transition-colors flex items-center group">
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Certifications
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-bold text-graphite uppercase tracking-wider mb-6">Resources</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/case-studies" className="text-sm text-steel hover:text-brand-accent transition-colors flex items-center group">
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-steel hover:text-brand-accent transition-colors flex items-center group">
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bold text-graphite uppercase tracking-wider mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-steel">
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-3 text-brand-accent shrink-0" />
                <span>info@quicktrap.ca</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 text-brand-accent shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-brand-accent shrink-0" />
                <span>
                  123 Industrial Way,<br />
                  Vancouver, BC V6B 1A1
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-steel">
          <p>&copy; {currentYear} Quicktrap. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-brand-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
