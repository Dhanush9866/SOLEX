import { Users } from 'lucide-react';

const Careers = () => {

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-100 to-blue-300 text-gray-900 py-16 dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 dark:text-white">Careers at SOLNEX</h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 max-w-2xl mx-auto dark:text-gray-300">
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
