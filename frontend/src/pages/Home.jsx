import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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
              Our Industry Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored technology solutions for diverse industries, driving innovation and growth across sectors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Healthcare Card */}
            <div 
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden cursor-pointer"
              onClick={() => {
                // TODO: Add route for Healthcare
                console.log('Healthcare card clicked');
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src="/main1.jpg"
                  alt="Healthcare Solutions"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Healthcare</h3>
                <p className="text-gray-600 leading-relaxed">
                  AI is revolutionizing healthcare by enhancing diagnostic accuracy, predicting patient outcomes, and personalizing treatments. From early cancer detection to robotic-assisted surgery, AI is transforming medical care delivery.
                </p>
              </div>
            </div>

            {/* Financial Card */}
            <div 
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden cursor-pointer"
              onClick={() => {
                // TODO: Add route for Financial
                console.log('Financial card clicked');
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src="/main2.jpg"
                  alt="Financial Solutions"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Financial</h3>
                <p className="text-gray-600 leading-relaxed">
                  A large bank has introduced a new AI-Powered virtual assistant to provide personalized customer support at scale.
                </p>
              </div>
            </div>

            {/* Automotive Card */}
            <div 
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden cursor-pointer"
              onClick={() => {
                // TODO: Add route for Automotive
                console.log('Automotive card clicked');
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src="/main3.jpg"
                  alt="Automotive Solutions"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Automotive</h3>
                <p className="text-gray-600 leading-relaxed">
                  Applying machine learning models and real-time analytics, businesses can optimize servicing schedules, reduce downtime, and extend the life of machinery and vehicles.
                </p>
              </div>
            </div>

            {/* Retail & E-commerce Card */}
            <div 
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden cursor-pointer"
              onClick={() => {
                // TODO: Add route for Retail & E-commerce
                console.log('Retail & E-commerce card clicked');
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src="/main4.jpg"
                  alt="E-commerce Solutions"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Retail & E-commerce</h3>
                <p className="text-gray-600 leading-relaxed">
                  AI-powered recommendation engines analyze user behavior and suggest products tailored to individual preferences, increasing conversion rates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the content can go here */}
    </div>
  );
};

export default Home;
