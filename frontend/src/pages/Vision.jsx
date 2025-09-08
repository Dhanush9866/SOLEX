
const Vision = () => {

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('/vision.jpg')`,
            filter: 'blur(1px)'
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30" />
        
        {/* Content */}
        <div className="relative z-10 flex items-center justify-center min-h-[600px]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Vision</h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto font-medium">
              Shaping the future of technology and business transformation
            </p>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 dark:text-white">Our Vision</h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-600 dark:text-gray-300">
                <p className="text-sm sm:text-base md:text-lg font-medium text-blue-700 dark:text-blue-300">
                  Our vision is to become a global leader in Artificial Intelligence, Data, and Digital Solutions, 
                  empowering enterprises and individuals to leverage technology for smarter decisions, intelligent 
                  automation, and sustainable growth.
                </p>
                <p>
                  We aim to build future-ready innovations that bridge the gap between business and technology, 
                  transforming industries and creating lasting impact worldwide.
                </p>
                <p>
                  Through our commitment to excellence, innovation, and responsible AI development, we envision 
                  a world where technology serves humanity's greatest needs and enables unprecedented progress 
                  across all sectors.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 dark:bg-[#23272f] rounded-lg p-4 sm:p-6 md:p-8">
              <img 
                src="/AI4.jpg" 
                alt="Vision and future" 
                className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="w-full h-48 sm:h-56 md:h-64 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-lg flex items-center justify-center" style={{display: 'none'}}>
                <div className="text-center text-gray-600 dark:text-gray-300">
                  <div className="text-2xl sm:text-3xl md:text-4xl mb-2">🚀</div>
                  <div className="text-sm sm:text-base md:text-lg font-medium">Vision & Future</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Vision;
