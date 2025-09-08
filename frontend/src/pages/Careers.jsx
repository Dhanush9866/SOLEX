import { Users } from 'lucide-react';

const Careers = () => {

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('/careers.jpg')`,
            filter: 'blur(1px)'
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30" />
        
        {/* Content */}
        <div className="relative z-10 flex items-center justify-center min-h-[600px]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Careers at SOLNEX</h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto font-medium">
              Join our team and help shape the future of AI and technology
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 dark:text-white">Why Work With Us</h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-600 dark:text-gray-300">
                <p>
                  At SOLNEX, we believe our people are our greatest strength. We offer an environment where 
                  innovation, collaboration, and learning thrive. By joining us, you become part of a team 
                  that is shaping the future with Artificial Intelligence, Data, and Software Engineering solutions.
                </p>
                <p>
                  We provide opportunities to work on cutting-edge technologies, grow your skills with continuous 
                  learning programs, and contribute to impactful projects across industries. If you are passionate 
                  about solving real-world problems and want to build a career that makes a difference, SOLNEX 
                  is the place for you.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 dark:bg-[#23272f] rounded-lg p-4 sm:p-6 md:p-8">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop" 
                alt="Team collaboration" 
                className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Careers;
