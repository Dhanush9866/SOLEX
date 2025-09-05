
const Leadership = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-100 to-blue-300 text-gray-900 py-16 dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 dark:text-white">Leadership</h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto dark:text-gray-300">
              Meet the visionary leaders driving innovation and excellence at SOLNEX
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 dark:text-white">Our Leadership Philosophy</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
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
            <div className="bg-gray-100 dark:bg-[#23272f] rounded-lg p-8">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop" 
                alt="Leadership team" 
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Leadership;
