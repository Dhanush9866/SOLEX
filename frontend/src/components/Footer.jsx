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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">

          {/* Company Information */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="font-semibold text-base sm:text-lg text-black pb-1 relative">
              <span className="relative z-10">Company Information</span>
              <div className="absolute bottom-0 left-0 w-3/4 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
            </h3>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <Link to="/about" className="text-gray-700 hover:text-blue-700 text-xs sm:text-sm transition-all duration-300 hover:translate-x-1 flex items-center group">
                  <span className="w-1 h-1 bg-blue-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  About SOLNEX
                </Link>
              </li>
              <li>
                <Link to="/vision" className="text-gray-700 hover:text-blue-700 text-xs sm:text-sm transition-all duration-300 hover:translate-x-1 flex items-center group">
                  <span className="w-1 h-1 bg-blue-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Our Vision
                </Link>
              </li>
              <li>
                <Link to="/leadership" className="text-gray-700 hover:text-blue-700 text-xs sm:text-sm transition-all duration-300 hover:translate-x-1 flex items-center group">
                  <span className="w-1 h-1 bg-blue-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Leadership
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-700 hover:text-blue-700 text-xs sm:text-sm transition-all duration-300 hover:translate-x-1 flex items-center group">
                  <span className="w-1 h-1 bg-blue-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-700 hover:text-blue-700 text-xs sm:text-sm transition-all duration-300 hover:translate-x-1 flex items-center group">
                  <span className="w-1 h-1 bg-blue-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="font-semibold text-base sm:text-lg text-black">Resources</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <Link to="/blog" className="text-gray-700 hover:text-blue-700 text-xs sm:text-sm transition-all duration-300 hover:translate-x-1 flex items-center group">
                  <span className="w-1 h-1 bg-green-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-700 hover:text-blue-700 text-xs sm:text-sm transition-all duration-300 hover:translate-x-1 flex items-center group">
                  <span className="w-1 h-1 bg-green-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Event & Webinars
                </Link>
              </li>
              <li>
                <Link to="/docs" className="text-gray-700 hover:text-blue-700 text-xs sm:text-sm transition-all duration-300 hover:translate-x-1 flex items-center group">
                  <span className="w-1 h-1 bg-green-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Developer Docs
                </Link>
              </li>
            </ul>
          </div>

          {/* Helpful Resources */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="font-semibold text-base sm:text-lg text-black">Helpful Resources</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <Link to="/trainings" onClick={handleTrainingsClick} className="text-gray-700 hover:text-blue-700 text-xs sm:text-sm transition-all duration-300 hover:translate-x-1 flex items-center group">
                  <span className="w-1 h-1 bg-purple-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Technical Training
                </Link>
              </li>
              <li>
                <Link to="/trainings" onClick={handleTrainingsClick} className="text-gray-700 hover:text-blue-700 text-xs sm:text-sm transition-all duration-300 hover:translate-x-1 flex items-center group">
                  <span className="w-1 h-1 bg-purple-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Technical for IT professionals
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-700 hover:text-blue-700 text-xs sm:text-sm transition-all duration-300 hover:translate-x-1 flex items-center group">
                  <span className="w-1 h-1 bg-purple-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Future carrier
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-700 hover:text-blue-700 text-xs sm:text-sm transition-all duration-300 hover:translate-x-1 flex items-center group">
                  <span className="w-1 h-1 bg-purple-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Professional services for all Technologies
                </Link>
              </li>
              <li>
                <Link to="/docs" className="text-gray-700 hover:text-blue-700 text-xs sm:text-sm transition-all duration-300 hover:translate-x-1 flex items-center group">
                  <span className="w-1 h-1 bg-purple-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Documentation Developer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-gray-500 text-xs sm:text-sm">
            © 2025 SOLNEX. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
