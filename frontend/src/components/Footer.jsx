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
    <footer className="bg-white border-t border-blue-100 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">

              <span className="font-bold text-xl text-black">SOLNEX</span>
            </div>
            <p className="text-gray-700 text-sm">
              Engineering the future with software intelligence - building enterprise-grade AI, ML, and Generative AI solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-black">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-700 hover:text-blue-700 text-sm transition-colors font-medium"
                  >
                    {item}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  to="/trainings"
                  onClick={handleTrainingsClick}
                  className="text-gray-700 hover:text-blue-700 text-sm transition-colors font-medium"
                >
                  Trainings
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-black">Services</h3>
            <ul className="space-y-2">
              {[
                'AI & ML Solutions',
                'Generative AI',
                'MLOps Engineering',
                'Business Automation',
                'Technical Training'
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-700 text-sm font-medium">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-black">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-600" />
                <span className="text-gray-700 text-sm">contact@solnex.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-600" />
                <span className="text-gray-700 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-blue-600" />
                <span className="text-gray-700 text-sm">Remote Support Available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-100 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 SOLNEX. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
