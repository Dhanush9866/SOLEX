
const Leadership = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-gray-900 dark:text-white">
       {/* Background Image */}
       <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('/leadership.jpg')`,
            filter: 'blur(1px)'
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30" />
        
        {/* Content */}
        <div className="relative z-10 flex items-center justify-center min-h-[600px]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Leadership</h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto font-medium">
              Meet the visionary leaders driving innovation and excellence at SOLNEX
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Content */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 dark:text-white">Our Leadership Philosophy</h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-600 dark:text-gray-300">
                <p>
                  At SOLNEX, leadership means driving innovation with a clear vision, empowering teams to excel, 
                  and building trust with our clients and partners. Our leadership team combines technology expertise, 
                  industry experience, and entrepreneurial spirit to position SOLNEX as a global force in AI and 
                  digital transformation.
                </p>
                <p>
                  Guided by strong values and forward-thinking strategy, our leaders are committed to fostering 
                  an environment where creativity thrives, excellence is the standard, and every team member 
                  has the opportunity to make a meaningful impact.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 dark:bg-[#23272f] rounded-lg p-4 sm:p-6 md:p-8">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop" 
                alt="Leadership team" 
                className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Leadership;
