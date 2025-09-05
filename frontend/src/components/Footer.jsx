import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const Footer = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleTrainingsClick = (e) => {
    if (!isAuthenticated) {
      e.preventDefault();
      // Navigate to login page with state indicating user wants to access trainings
      navigate('/login', { state: { fromTrainings: true } });
    }
  };

  return (
    <footer className="bg-white border-t border-gray-200 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="/logo.png" 
                  alt="SOLNEX Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-bold text-2xl text-black">SOLNEX</span>
            </div>
            <p className="text-gray-700 text-sm">
              Engineering the future with software intelligence - building enterprise-grade AI, ML, and Generative AI solutions.
            </p>
          </div>

          {/* Company Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-black">Company Information</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-700 hover:text-blue-700 text-sm transition-colors">
                  About SOLNEX
                </Link>
              </li>
              <li>
                <Link to="/vision" className="text-gray-700 hover:text-blue-700 text-sm transition-colors">
                  Our Vision
                </Link>
              </li>
              <li>
                <Link to="/leadership" className="text-gray-700 hover:text-blue-700 text-sm transition-colors">
                  Leadership
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-700 hover:text-blue-700 text-sm transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-700 hover:text-blue-700 text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-black">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog" className="text-gray-700 hover:text-blue-700 text-sm transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-700 hover:text-blue-700 text-sm transition-colors">
                  Event & Webinars
                </Link>
              </li>
              <li>
                <Link to="/docs" className="text-gray-700 hover:text-blue-700 text-sm transition-colors">
                  Developer Docs
                </Link>
              </li>
            </ul>
          </div>

          {/* Helpful Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-black">Helpful Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/trainings" onClick={handleTrainingsClick} className="text-gray-700 hover:text-blue-700 text-sm transition-colors">
                  Technical Training
                </Link>
              </li>
              <li>
                <Link to="/trainings" onClick={handleTrainingsClick} className="text-gray-700 hover:text-blue-700 text-sm transition-colors">
                  Technical for IT professionals
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-700 hover:text-blue-700 text-sm transition-colors">
                  Future carrier
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-700 hover:text-blue-700 text-sm transition-colors">
                  Professional services for all Technologies
                </Link>
              </li>
              <li>
                <Link to="/docs" className="text-gray-700 hover:text-blue-700 text-sm transition-colors">
                  Documentation Developer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 SOLNEX. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
