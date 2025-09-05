
const Vision = () => {

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-100 to-blue-300 text-gray-900 py-16 dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 dark:text-white">Our Vision</h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto dark:text-gray-300">
              Shaping the future of technology and business transformation
            </p>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 dark:text-white">Our Vision</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p className="text-lg font-medium text-blue-700 dark:text-blue-300">
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
            <div className="bg-gray-100 dark:bg-[#23272f] rounded-lg p-8">
              <img 
                src="/AI4.jpg" 
                alt="Vision and future" 
                className="w-full h-64 object-cover rounded-lg"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-lg flex items-center justify-center" style={{display: 'none'}}>
                <div className="text-center text-gray-600 dark:text-gray-300">
                  <div className="text-4xl mb-2">🚀</div>
                  <div className="text-lg font-medium">Vision & Future</div>
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
