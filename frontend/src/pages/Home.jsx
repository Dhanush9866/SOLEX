import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

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

  const handleCardClick = (industry) => {
    // Navigate to solutions page with industry filter
    navigate(`/solutions?industry=${industry.toLowerCase()}`);
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

      {/* Industry Cards Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering cutting-edge AI and technology solutions across diverse sectors
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Healthcare Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-500 ease-out transform animate-fade-in-up cursor-pointer" 
                 style={{ animationDelay: '0.1s' }}
                 onClick={() => handleCardClick('healthcare')}>
              <div className="h-48 bg-cover bg-center bg-no-repeat transition-transform duration-500 hover:scale-110" 
                   style={{ backgroundImage: 'url(/main1.jpg)' }}>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 transition-colors duration-300 hover:text-blue-600">Healthcare</h3>
                <p className="text-gray-600 transition-all duration-300">
                  AI is revolutionizing healthcare by enhancing diagnostic accuracy, predicting patient outcomes, and personalizing treatments. From early cancer detection to robotic-assisted surgery, AI is transforming medical care delivery.
                </p>
              </div>
            </div>

            {/* Financial Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-500 ease-out transform animate-fade-in-up cursor-pointer" 
                 style={{ animationDelay: '0.2s' }}
                 onClick={() => handleCardClick('financial')}>
              <div className="h-48 bg-cover bg-center bg-no-repeat transition-transform duration-500 hover:scale-110" 
                   style={{ backgroundImage: 'url(/main2.jpg)' }}>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 transition-colors duration-300 hover:text-blue-600">Financial</h3>
                <p className="text-gray-600 transition-all duration-300">
                  A large bank has introduced a new AI-Powered virtual assistant to provide personalized customer support at scale.
                </p>
              </div>
            </div>

            {/* Automotive Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-500 ease-out transform animate-fade-in-up cursor-pointer" 
                 style={{ animationDelay: '0.3s' }}
                 onClick={() => handleCardClick('automotive')}>
              <div className="h-48 bg-cover bg-center bg-no-repeat transition-transform duration-500 hover:scale-110" 
                   style={{ backgroundImage: 'url(/main3.jpg)' }}>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 transition-colors duration-300 hover:text-blue-600">Automotive</h3>
                <p className="text-gray-600 transition-all duration-300">
                  Applying machine learning models and real-time analytics, businesses can optimize servicing schedules, reduce downtime, and extend the life of machinery and vehicles.
                </p>
              </div>
            </div>

            {/* E-commerce Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-500 ease-out transform animate-fade-in-up cursor-pointer" 
                 style={{ animationDelay: '0.4s' }}
                 onClick={() => handleCardClick('ecommerce')}>
              <div className="h-48 bg-cover bg-center bg-no-repeat transition-transform duration-500 hover:scale-110" 
                   style={{ backgroundImage: 'url(/main4.jpg)' }}>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 transition-colors duration-300 hover:text-blue-600">E-commerce</h3>
                <p className="text-gray-600 transition-all duration-300">
                  AI-powered recommendation engines analyze user behavior and suggest products tailored to individual preferences, increasing conversion rates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
