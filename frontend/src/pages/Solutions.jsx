import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

const Solutions = () => {
  // removed process steps section per request

  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("ai");

  const handleTrainingsClick = (e) => {
    if (!isAuthenticated) {
      e.preventDefault();
      // Navigate to login page with state indicating user wants to access trainings
      navigate('/login', { state: { fromTrainings: true } });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-100 to-blue-300 text-gray-900 py-16 dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 dark:text-white">
              Our AI Solutions
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 max-w-2xl mx-auto dark:text-gray-300">
              Explore our comprehensive range of AI and ML solutions designed to transform your business operations.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Layout (Sidebar + Content Grid) */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
            {/* Sidebar */}
            <aside className="md:col-span-1 space-y-3 sm:space-y-4 md:space-y-6">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 dark:text-white">Solutions</h3>
              <ul className="space-y-1 sm:space-y-2 md:space-y-3 text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300">
                <li>
                  <a
                    href="#ai"
                    onClick={(e)=>{e.preventDefault(); setActiveCategory("ai");}}
                    className={`hover:text-blue-700 dark:hover:text-blue-300 text-xs sm:text-sm ${activeCategory==="ai"?"font-semibold text-blue-700 dark:text-blue-300":""}`}
                  >
                    Artificial Intelligence
                  </a>
                </li>
                <li>
                  <a
                    href="#data"
                    onClick={(e)=>{e.preventDefault(); setActiveCategory("data");}}
                    className={`hover:text-blue-700 dark:hover:text-blue-300 text-xs sm:text-sm ${activeCategory==="data"?"font-semibold text-blue-700 dark:text-blue-300":""}`}
                  >
                    Data & Analytics
                  </a>
                </li>
                <li>
                  <a
                    href="#software"
                    onClick={(e)=>{e.preventDefault(); setActiveCategory("software");}}
                    className={`hover:text-blue-700 dark:hover:text-blue-300 text-xs sm:text-sm ${activeCategory==="software"?"font-semibold text-blue-700 dark:text-blue-300":""}`}
                  >
                    Software Engineering & Development
                  </a>
                </li>
              </ul>
            </aside>

            {/* Content Grid - only show active category */}
            <div id="top-content" className="md:col-span-3">
              {activeCategory === "ai" && (
              <div id="ai">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 dark:text-white">Artificial Intelligence</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                  <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 h-32 flex flex-col justify-center">
                    <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1 text-sm">AI & ML Solutions</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-xs leading-tight">ML-driven innovations empower organizations to achieve automation and efficiency.</p>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 h-32 flex flex-col justify-center">
                    <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1 text-sm">Generative AI</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-xs leading-tight">Empower enterprises to adapt next-Generation MLOps and accelerate time-to-market.</p>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 h-32 flex flex-col justify-center">
                    <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1 text-sm">MLOps</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-xs leading-tight">Reduce operational costs and maximize business values through automated ML workflows.</p>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 h-32 flex flex-col justify-center">
                    <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1 text-sm">Business Automation with AI</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-xs leading-tight">Enable organizations to achieve faster execution with high accuracy and precision.</p>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 h-32 flex flex-col justify-center">
                    <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1 text-sm">R&D in AI</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-xs leading-tight">Company invests heavily in AI research and development to pioneer next-generation solutions.</p>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 h-32 flex flex-col justify-center">
                    <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1 text-sm">Cyber Security</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-xs leading-tight">Business protect critical assets with AI-powered security solutions and threat detection.</p>
                  </div>
                </div>
              </div>
              )}
              {activeCategory === "data" && (
              <div id="data">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 dark:text-white">Data & Analytics</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                  <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 h-32 flex flex-col justify-center">
                    <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1 text-sm">Business Intelligence</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-xs leading-tight">Deliver business intelligence solutions that transform raw data into clear insights.</p>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 h-32 flex flex-col justify-center">
                    <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1 text-sm">Data Engineering</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-xs leading-tight">Empower organizations to unlock the full potential of their data infrastructure.</p>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 h-32 flex flex-col justify-center">
                    <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1 text-sm">Data Science</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-xs leading-tight">The power of Data Science to extract valuable insights and predict outcomes.</p>
                  </div>
                </div>
              </div>
              )}
              {activeCategory === "software" && (
              <div id="software">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 dark:text-white">Software Engineering & Development</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                  <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 h-32 flex flex-col justify-center">
                    <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1 text-sm">Application Development</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-xs leading-tight">Deliver end-to-end application development services that bring ideas to life with scalable solutions.</p>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 h-32 flex flex-col justify-center">
                    <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1 text-sm">Full Stack Development</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-xs leading-tight">End-to-end full stack solutions empower enterprise to accelerate innovation and digital growth.</p>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 h-32 flex flex-col justify-center">
                    <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1 text-sm">Cloud & API Development</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-xs leading-tight">Create solutions that are reliable, interoperable, and future ready for modern businesses.</p>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 h-32 flex flex-col justify-center">
                    <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1 text-sm">Quality Engineering</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-xs leading-tight">Leveraging modern frameworks, test automation and AI-driven quality assurance.</p>
                  </div>
                </div>
              </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section removed */}

      {/* Detailed Service Sections removed */}

      {/* CTA Section removed */}
    </div>
  );
};

export default Solutions;
