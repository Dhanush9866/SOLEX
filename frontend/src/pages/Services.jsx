import { Button } from "@/components/ui/button";
import { CheckCircle, ChevronRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

const Services = () => {
  // removed process steps section per request

  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("ai");
  const [isAiMlExpanded, setIsAiMlExpanded] = useState(false);

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
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 dark:text-white">
              Our AI Solutions
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto dark:text-gray-300">
              Explore our comprehensive range of AI and ML solutions designed to transform your business operations.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Layout (Sidebar + Content Grid) */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Solutions</h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li>
                  <a
                    href="#ai"
                    onClick={(e)=>{e.preventDefault(); setActiveCategory("ai");}}
                    className={`hover:text-blue-700 dark:hover:text-blue-300 ${activeCategory==="ai"?"font-semibold text-blue-700 dark:text-blue-300":""}`}
                  >
                    Artificial Intelligence
                  </a>
                </li>
                <li>
                  <a
                    href="#data"
                    onClick={(e)=>{e.preventDefault(); setActiveCategory("data");}}
                    className={`hover:text-blue-700 dark:hover:text-blue-300 ${activeCategory==="data"?"font-semibold text-blue-700 dark:text-blue-300":""}`}
                  >
                    Data & Analytics
                  </a>
                </li>
                <li>
                  <a
                    href="#software"
                    onClick={(e)=>{e.preventDefault(); setActiveCategory("software");}}
                    className={`hover:text-blue-700 dark:hover:text-blue-300 ${activeCategory==="software"?"font-semibold text-blue-700 dark:text-blue-300":""}`}
                  >
                    Software Engineering & Development
                  </a>
                </li>
              </ul>
            </aside>

            {/* Content Grid - only show active category */}
            <div id="top-content" className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-10">
              {activeCategory === "ai" && (
              <div id="ai">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 dark:text-white">Artificial Intelligence</h3>
                <div className="space-y-3">
                  {/* AI/ML Solutions - Expandable */}
                  <div className="border-b border-gray-200 dark:border-gray-700 pb-3">
                    <button
                      onClick={() => setIsAiMlExpanded(!isAiMlExpanded)}
                      className="flex items-center justify-between w-full text-left hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      <div className="flex items-center space-x-2">
                        <ChevronRight 
                          className={`w-4 h-4 text-green-600 transition-transform duration-200 ${
                            isAiMlExpanded ? 'rotate-90' : ''
                          }`} 
                        />
                        <span className="text-blue-700 dark:text-blue-300 font-medium">AI/ML Solutions</span>
                      </div>
                    </button>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 ml-6">
                      Comprehensive artificial intelligence and machine learning solutions to transform your business operations and drive innovation.
                    </p>
                    
                    {/* Expanded sub-solutions */}
                    {isAiMlExpanded && (
                      <div className="mt-4 ml-6 space-y-2">
                        <div className="text-gray-700 dark:text-gray-300">
                          <a href="#gen-ai" className="hover:underline hover:text-blue-700 dark:hover:text-blue-300">Generative AI</a>
                        </div>
                        <div className="text-gray-700 dark:text-gray-300">
                          <a href="#mlops" className="hover:underline hover:text-blue-700 dark:hover:text-blue-300">MLOps</a>
                        </div>
                        <div className="text-gray-700 dark:text-gray-300">
                          <a href="#business-automation" className="hover:underline hover:text-blue-700 dark:hover:text-blue-300">Business Automation with AI</a>
                        </div>
                        <div className="text-gray-700 dark:text-gray-300">
                          <a href="#rnd-ai" className="hover:underline hover:text-blue-700 dark:hover:text-blue-300">R&D in AI</a>
                        </div>
                        <div className="text-gray-700 dark:text-gray-300">
                          <a href="#cyber-ai" className="hover:underline hover:text-blue-700 dark:hover:text-blue-300">Cyber Security</a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              )}
              {activeCategory === "data" && (
              <div id="data">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 dark:text-white">Data & Analytics</h3>
                <ul className="space-y-3 text-blue-700 dark:text-blue-300">
                  <li><a href="#bi" className="hover:underline">Business Intelligence</a></li>
                  <li><a href="#data-eng" className="hover:underline">Data Engineering</a></li>
                  <li><a href="#data-science" className="hover:underline">Data Science</a></li>
                </ul>
              </div>
              )}
              {activeCategory === "software" && (
              <div id="software">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 dark:text-white">Software Engineering & Development</h3>
                <ul className="space-y-3 text-blue-700 dark:text-blue-300">
                  <li><a href="#app-dev" className="hover:underline">Application Development</a></li>
                  <li><a href="#full-stack" className="hover:underline">Full Stack Development</a></li>
                  <li><a href="#cloud-api" className="hover:underline">Cloud & API Development</a></li>
                  <li><a href="#qe" className="hover:underline">Quality Engineering</a></li>
                </ul>
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

export default Services;
