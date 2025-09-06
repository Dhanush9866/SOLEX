import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showLinks, setShowLinks] = useState({
    section1: false,
    section2: false,
    section3: false,
    section4: false
  });

  const slides = [
    {
      id: 1,
      image: "/AI.jpg",
      title: "Engineering the Future with Software Intelligence",
      subtitle: "Building enterprise-grade AI, ML, and Generative AI solutions for tomorrow's digital leaders.",
      // overlay: "from-blue-900/80 to-purple-900/80"
    },
    {
      id: 2,
      image: "/AI1.jpg",
      title: "AI-Powered Business Transformation",
      subtitle: "Revolutionize your operations with cutting-edge machine learning and automation solutions.",
      // overlay: "from-green-900/80 to-blue-900/80"
    },
    {
      id: 3,
      image: "/AI2.jpg",
      title: "Next-Generation Cloud Solutions",
      subtitle: "Scalable, secure, and intelligent cloud infrastructure for modern enterprises.",
      // overlay: "from-purple-900/80 to-indigo-900/80"
    },
    {
      id: 4,
      image: "/AI3.jpg",
      title: "Expert AI Training & Support",
      subtitle: "Empower your team with world-class AI education and 24/7 technical assistance.",
      // overlay: "from-indigo-900/80 to-blue-900/80"
    }
  ];

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const toggleLinks = (section) => {
    setShowLinks(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Slideshow Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ 
                backgroundImage: `url(${slide.image})`,
                filter: 'blur(4px)'
              }}
            />
            
            {/* Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.overlay}`} />
            
            {/* Content */}
            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                <div className="space-y-8">
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-fade-in">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in-delay">
                    {slide.subtitle}
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? "bg-white scale-125" 
                  : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
          <div 
            className="h-full bg-white transition-all duration-500 ease-linear"
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          />
        </div>
      </section>


      {/* AI Solutions Layout */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section 1: General AI */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Left Content */}
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Artificial Intelligence</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                AI is transforming the way industries operate. From intelligent automation to deep insights, SOLNEX delivers cutting-edge AI solutions across multiple domains-powering decision-making increasing efficiency, and enabling a smarter future.
              </p>
              <div className="mt-4">
                <button 
                  onClick={() => toggleLinks('section1')}
                  className="inline-flex items-center px-4 py-2 text-sm font-semibold text-blue-600 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 hover:text-blue-800 hover:border-blue-300 cursor-pointer transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <span className="mr-2">🔗</span>
                  Links
                  <span className="ml-2 transform transition-transform duration-200">
                    {showLinks.section1 ? '▲' : '▼'}
                  </span>
                </button>
                {showLinks.section1 && (
                  <div className="mt-3 space-y-2">
                    <div className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer transition-colors duration-200">
                      • Medical image Analysis
                    </div>
                    <div className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer transition-colors duration-200">
                      • EHR Mining
                    </div>
                    <div className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer transition-colors duration-200">
                      • Disease prediction Models
                    </div>
                    <div className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer transition-colors duration-200">
                      • Time series forecasting
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Right Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Healthcare Data Analytics Card */}
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
                <div className="relative overflow-hidden">
                  <img
                    src="/placeholder.svg"
                    alt="Healthcare Data Analytics"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Healthcare | Data Analytics</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-2">
                    Empowering precision, saving lives
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    SOLNEX leverages AI to enhance diagnostics, predict patient outcomes, and personalize treatment plans
                  </p>
                </div>
              </div>

              {/* AI in Medical Imaging Diagnosis Card */}
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
                <div className="relative overflow-hidden">
                  <img
                    src="/main1.jpg"
                    alt="AI in Medical Imaging Diagnosis"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">AI in Medical Imaging & Diagnosis</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-2">
                    AI is revolutionizing healthcare by enhancing diagnostic accuracy, predicting patient outcomes, and personalizing treatments.
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    From early cancer detection to robotic-assisted surgery. AI is transforming medical care delivery
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Separator Line */}
          <div className="border-t border-gray-400 my-16"></div>

          {/* Section 2: Financial Operations */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Left Content */}
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">AI in Financial Operations</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                AI-driven fraud detection, automated trading systems, and Credit scoring models. Are streaming the financial sector With NLP-powered chatbots and predictive analytics, banks Deliver smarter, faster and safer services.
              </p>
              <div className="mt-4">
                <button 
                  onClick={() => toggleLinks('section2')}
                  className="inline-flex items-center px-4 py-2 text-sm font-semibold text-blue-600 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 hover:text-blue-800 hover:border-blue-300 cursor-pointer transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <span className="mr-2">🔗</span>
                  Links
                  <span className="ml-2 transform transition-transform duration-200">
                    {showLinks.section2 ? '▲' : '▼'}
                  </span>
                </button>
                {showLinks.section2 && (
                  <div className="mt-3 space-y-2">
                    <div className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer transition-colors duration-200">
                      • Fraud Detection Algorithms
                    </div>
                    <div className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer transition-colors duration-200">
                      • Credit Risk Scoring
                    </div>
                    <div className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer transition-colors duration-200">
                      • Anomaly detection
                    </div>
                    <div className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer transition-colors duration-200">
                      • Time series forecasting for market trends
                    </div>
                    <div className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer transition-colors duration-200">
                      • Document Analysis
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Financial AI Powered Insights Card */}
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
              <div className="relative overflow-hidden">
                <img
                    src="/placeholder.svg"
                    alt="Financial AI Powered Insights"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Financial | AI-Powered Insights</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Detect fraud, predict market trends and automate investment decisions with SOLNEX's AI-powered financial analytics
                  </p>
                </div>
              </div>

              {/* AI Customer Story Card */}
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
                <div className="relative overflow-hidden">
                  <img
                    src="/main2.jpg"
                    alt="AI Customer Story"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">AI Customer Story</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    A large bank has introduced a new AI- Powered virtual assistant to provide personalized customer support at scale
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Separator Line */}
          <div className="border-t border-gray-400 my-16"></div>

          {/* Section 3: Automotive */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Left Content */}
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">AI in Automotive</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                AI-Powered self-driving cars, predictive maintenance and smart manufacturing are revolutionizing the automotive industry. From autonomous vehicles to intelligent systems, AI enhances safety, efficiency, and innovation.
              </p>
              <div className="mt-4">
                <button 
                  onClick={() => toggleLinks('section3')}
                  className="inline-flex items-center px-4 py-2 text-sm font-semibold text-blue-600 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 hover:text-blue-800 hover:border-blue-300 cursor-pointer transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <span className="mr-2">🔗</span>
                  Links
                  <span className="ml-2 transform transition-transform duration-200">
                    {showLinks.section3 ? '▲' : '▼'}
                  </span>
                </button>
                {showLinks.section3 && (
                  <div className="mt-3 space-y-2">
                    <div className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer transition-colors duration-200">
                      • Computer vision
                    </div>
                    <div className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer transition-colors duration-200">
                      • Predictive maintenance
                    </div>
                    <div className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer transition-colors duration-200">
                      • Sensor Data analysis
                    </div>
                    <div className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer transition-colors duration-200">
                      • Object Detection & Tracking
                    </div>
                    <div className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer transition-colors duration-200">
                      • Traffic flow Optimization
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Right Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Autonomous Mobility Card */}
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
              <div className="relative overflow-hidden">
                <img
                    src="/placeholder.svg"
                    alt="Autonomous Mobility"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Autonomous Mobility</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    From self-driving cars to predictive Maintenance in fleets. AI enables safety And smarter mobility solutions. Automotive use AI to optimize traffic flow
                  </p>
                </div>
              </div>

              {/* Predictive Maintenance with AI Card */}
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
                <div className="relative overflow-hidden">
                  <img
                    src="/main3.jpg"
                    alt="Predictive Maintenance with AI"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Predictive maintenance with AI</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    applying machine learning models and real-time analytics, businesses can optimize servicing schedules, reduce downtime, and extend the life of machinery and vehicles.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Separator Line */}
          <div className="border-t border-gray-400 my-16"></div>

          {/* Section 4: Retail & E-Commerce */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Content */}
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Retail & E-Commerce AI</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Recommendation engines, demand forecasting, and Personalized shopping assistants powered by AI are Reshaping E-commerce, Retailers optimize supply chain.
              </p>
              <div className="mt-4">
                <button 
                  onClick={() => toggleLinks('section4')}
                  className="inline-flex items-center px-4 py-2 text-sm font-semibold text-blue-600 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 hover:text-blue-800 hover:border-blue-300 cursor-pointer transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <span className="mr-2">🔗</span>
                  Links
                  <span className="ml-2 transform transition-transform duration-200">
                    {showLinks.section4 ? '▲' : '▼'}
                  </span>
                </button>
                {showLinks.section4 && (
                  <div className="mt-3 space-y-2">
                    <div className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer transition-colors duration-200">
                      • Recommendation systems
                    </div>
                    <div className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer transition-colors duration-200">
                      • Customer segmentation
                    </div>
                    <div className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer transition-colors duration-200">
                      • Demand forecasting
                    </div>
                    <div className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer transition-colors duration-200">
                      • Chatbots & Virtual shopping Assistants
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Right Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* AI Powered Industrial Automation Card */}
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
              <div className="relative overflow-hidden">
                <img
                    src="/placeholder.svg"
                    alt="AI Powered Industrial Automation"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">AI-Powered Industrial Automation</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    AI-powered product recommendations and Personalized marketing is enhancing the online retail experience
                  </p>
                </div>
              </div>

              {/* Personalized Shopping Card */}
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
                <div className="relative overflow-hidden">
                  <img
                    src="/main4.jpg"
                    alt="Personalized Shopping"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Personalized shopping</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    AI-powered recommendation engines analyze user behavior and suggest products tailored to individual preferences, increasing conversion rates
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
