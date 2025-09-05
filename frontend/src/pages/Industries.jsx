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
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 dark:text-white">Industries We Serve</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto dark:text-gray-300">
              We partner with organizations across diverse industries to transform their operations with cutting-edge AI, ML, and automation solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Layout (Sidebar + Content Grid) */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Industries</h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                {industries.map((industry, index) => (
                  <li key={index}>
                    <a
                      href={`#${industry.toLowerCase().replace(/\s+/g, '-')}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveIndustry(industry.toLowerCase().replace(/\s+/g, '-'));
                      }}
                      className={`hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-2 ${
                        activeIndustry === industry.toLowerCase().replace(/\s+/g, '-')
                          ? "font-semibold text-blue-700 dark:text-blue-300"
                          : ""
                      }`}
                    >
                      {activeIndustry === industry.toLowerCase().replace(/\s+/g, '-') && (
                        <span className="text-green-600">›</span>
                      )}
                      {industry}
                    </a>
                  </li>
                ))}
              </ul>
            </aside>

            {/* Content Grid - only show active industry */}
            <div className="lg:col-span-3">
              {activeIndustry === "financial-services" && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 dark:text-white">Financial Services</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400">Coming Soon....</p>
                </div>
              )}
              {activeIndustry === "healthcare-&-life-sciences" && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 dark:text-white">Healthcare & Life Sciences</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400">Coming Soon....</p>
                </div>
              )}
              {activeIndustry === "manufacturing" && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 dark:text-white">Manufacturing</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400">Coming Soon....</p>
                </div>
              )}
              {activeIndustry === "retail" && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 dark:text-white">Retail</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400">Coming Soon....</p>
                </div>
              )}
              {activeIndustry === "telecommunications" && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 dark:text-white">Telecommunications</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400">Coming Soon....</p>
                </div>
              )}
              {activeIndustry === "automotive" && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 dark:text-white">Automotive</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400">Coming Soon....</p>
                </div>
              )}
              {activeIndustry === "energy" && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 dark:text-white">Energy</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400">Coming Soon....</p>
                </div>
              )}
              {activeIndustry === "infrastructure" && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 dark:text-white">Infrastructure</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400">Coming Soon....</p>
                </div>
              )}
              {activeIndustry === "higher-education" && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 dark:text-white">Higher Education</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400">Coming Soon....</p>
                </div>
              )}
              {activeIndustry === "smart-cities" && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 dark:text-white">Smart Cities</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400">Coming Soon....</p>
                </div>
              )}
              {activeIndustry === "media-&-entertainment" && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 dark:text-white">Media & Entertainment</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400">Coming Soon....</p>
                </div>
              )}
              {activeIndustry === "restaurants" && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 dark:text-white">Restaurants</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400">Coming Soon....</p>
                </div>
              )}
              {activeIndustry === "aviation-&-travel" && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 dark:text-white">Aviation & Travel</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400">Coming Soon....</p>
                </div>
              )}
              {activeIndustry === "insurance" && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 dark:text-white">Insurance</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400">Coming Soon....</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
