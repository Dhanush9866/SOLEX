import { useState } from 'react';

const Industries = () => {
  const [activeIndustry, setActiveIndustry] = useState("financial-services");

  const industries = [
    "Financial Services",
    "Healthcare & Life Sciences", 
    "Manufacturing",
    "Retail",
    "Telecommunications",
    "Automotive",
    "Energy",
    "Infrastructure",
    "Higher Education",
    "Smart Cities",
    "Media & Entertainment",
    "Restaurants",
    "Aviation & Travel",
    "Insurance"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-100 to-blue-300 text-gray-900 py-16 dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 dark:text-white">Industries We Serve</h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto dark:text-gray-300">
              We partner with organizations across diverse industries to transform their operations with cutting-edge AI, ML, and automation solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Text Layout */}
      <section className="py-8 sm:py-12 md:py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 md:gap-16">
            {/* Column 1 */}
            <div className="space-y-6 sm:space-y-8">
              <div className="cursor-pointer" onClick={() => setActiveIndustry("financial-services")}>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center group">
                  <span>Financial Services</span>
                  <span className="text-blue-600 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors duration-200 cursor-pointer ml-2" onClick={(e) => {
                    e.stopPropagation();
                    // TODO: Navigate to detailed Financial Services page
                    console.log("Navigate to Financial Services page");
                  }}>
                    &gt;
                  </span>
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  Transform banking and financial operations with AI-powered risk assessment, fraud detection, and automated trading systems.
                </p>
              </div>
              
              <div className="cursor-pointer" onClick={() => setActiveIndustry("healthcare-&-life-sciences")}>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center items-center group">
                  <span>Healthcare & Life Sciences</span>
                  <span className="text-blue-600 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors duration-200 cursor-pointer ml-2" onClick={(e) => {
                    e.stopPropagation();
                    console.log("Navigate to Healthcare & Life Sciences page");
                  }}>
                    &gt;
                  </span>
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  Revolutionize patient care with AI-driven diagnostics, drug discovery, and personalized treatment recommendations.
                </p>
              </div>
              
              <div className="cursor-pointer" onClick={() => setActiveIndustry("manufacturing")}>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center items-center group">
                  <span>Manufacturing</span>
                  <span className="text-blue-600 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors duration-200 cursor-pointer ml-2" onClick={(e) => {
                    e.stopPropagation();
                    console.log("Navigate to Manufacturing page");
                  }}>
                    &gt;
                  </span>
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  Optimize production processes with predictive maintenance, quality control, and intelligent supply chain management.
                </p>
                </div>
              
              <div className="cursor-pointer" onClick={() => setActiveIndustry("retail")}>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center items-center group">
                  <span>Retail</span>
                  <span className="text-blue-600 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors duration-200 cursor-pointer ml-2" onClick={(e) => {
                    e.stopPropagation();
                    console.log("Navigate to Retail page");
                  }}>
                    &gt;
                  </span>
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  Enhance customer experience with personalized recommendations, inventory optimization, and demand forecasting.
                </p>
                </div>
              
              <div className="cursor-pointer" onClick={() => setActiveIndustry("telecommunications")}>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center items-center group">
                  <span>Telecommunications</span>
                  <span className="text-blue-600 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors duration-200 cursor-pointer ml-2" onClick={(e) => {
                    e.stopPropagation();
                    console.log("Navigate to Telecommunications page");
                  }}>
                    &gt;
                  </span>
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  Improve network performance with AI-driven optimization, predictive maintenance, and intelligent customer service.
                </p>
                </div>
                </div>

            {/* Column 2 */}
            <div className="space-y-6 sm:space-y-8">
              <div className="cursor-pointer" onClick={() => setActiveIndustry("automotive")}>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center items-center group">
                  <span>Automotive</span>
                  <span className="text-blue-600 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors duration-200 cursor-pointer ml-2" onClick={(e) => {
                    e.stopPropagation();
                    console.log("Navigate to Automotive page");
                  }}>
                    &gt;
                  </span>
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  Drive innovation in autonomous vehicles, smart manufacturing, and connected car technologies.
                </p>
                </div>
              
              <div className="cursor-pointer" onClick={() => setActiveIndustry("energy")}>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center items-center group">
                  <span>Energy</span>
                  <span className="text-blue-600 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors duration-200 cursor-pointer ml-2" onClick={(e) => {
                    e.stopPropagation();
                    console.log("Navigate to Energy page");
                  }}>
                    &gt;
                  </span>
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  Optimize energy production and distribution with smart grid management and renewable energy forecasting.
                </p>
                </div>
              
              <div className="cursor-pointer" onClick={() => setActiveIndustry("infrastructure")}>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center items-center group">
                  <span>Infrastructure</span>
                  <span className="text-blue-600 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors duration-200 cursor-pointer ml-2" onClick={(e) => {
                    e.stopPropagation();
                    console.log("Navigate to Infrastructure page");
                  }}>
                    &gt;
                  </span>
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  Build smarter cities with AI-powered traffic management, resource optimization, and predictive maintenance.
                </p>
                </div>
              
              <div className="cursor-pointer" onClick={() => setActiveIndustry("higher-education")}>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center items-center group">
                  <span>Higher Education</span>
                  <span className="text-blue-600 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors duration-200 cursor-pointer ml-2" onClick={(e) => {
                    e.stopPropagation();
                    console.log("Navigate to Higher Education page");
                  }}>
                    &gt;
                  </span>
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  Transform learning experiences with personalized education, automated grading, and intelligent tutoring systems.
                </p>
                </div>
              
              <div className="cursor-pointer" onClick={() => setActiveIndustry("smart-cities")}>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center items-center group">
                  <span>Smart Cities</span>
                  <span className="text-blue-600 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors duration-200 cursor-pointer ml-2" onClick={(e) => {
                    e.stopPropagation();
                    console.log("Navigate to Smart Cities page");
                  }}>
                    &gt;
                  </span>
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  Create sustainable urban environments with AI-driven resource management and citizen services.
                </p>
                </div>
                </div>

            {/* Column 3 */}
            <div className="space-y-6 sm:space-y-8">
              <div className="cursor-pointer" onClick={() => setActiveIndustry("media-&-entertainment")}>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center items-center group">
                  <span>Media & Entertainment</span>
                  <span className="text-blue-600 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors duration-200 cursor-pointer ml-2" onClick={(e) => {
                    e.stopPropagation();
                    console.log("Navigate to Media & Entertainment page");
                  }}>
                    &gt;
                  </span>
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  Enhance content creation and distribution with AI-powered recommendation engines and automated content generation.
                </p>
                </div>
              
              <div className="cursor-pointer" onClick={() => setActiveIndustry("restaurants")}>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center items-center group">
                  <span>Restaurants</span>
                  <span className="text-blue-600 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors duration-200 cursor-pointer ml-2" onClick={(e) => {
                    e.stopPropagation();
                    console.log("Navigate to Restaurants page");
                  }}>
                    &gt;
                  </span>
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  Optimize operations with demand forecasting, menu optimization, and automated customer service solutions.
                </p>
                </div>
              
              <div className="cursor-pointer" onClick={() => setActiveIndustry("aviation-&-travel")}>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center items-center group">
                  <span>Aviation & Travel</span>
                  <span className="text-blue-600 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors duration-200 cursor-pointer ml-2" onClick={(e) => {
                    e.stopPropagation();
                    console.log("Navigate to Aviation & Travel page");
                  }}>
                    &gt;
                  </span>
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  Improve safety and efficiency with predictive maintenance, route optimization, and personalized travel experiences.
                </p>
                </div>
              
              <div className="cursor-pointer" onClick={() => setActiveIndustry("insurance")}>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center items-center group">
                  <span>Insurance</span>
                  <span className="text-blue-600 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors duration-200 cursor-pointer ml-2" onClick={(e) => {
                    e.stopPropagation();
                    console.log("Navigate to Insurance page");
                  }}>
                    &gt;
                  </span>
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  Streamline claims processing and risk assessment with AI-powered fraud detection and automated underwriting.
                </p>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
