import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Heart, Award, Clock, Shield, Mail, Phone, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in everything we do, delivering top-quality support and training."
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "We maintain the highest standards of integrity and transparency in all our interactions."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of collaboration and work closely with our clients to achieve success."
    },
    {
      icon: Award,
      title: "Innovation",
      description: "We continuously innovate our methods and approaches to stay ahead in the rapidly evolving tech industry."
    }
  ];

  const stats = [
    { number: 100, label: "Enterprise Clients", suffix: "+" },
    { number: 500, label: "AI Projects Delivered", suffix: "+" },
    { number: 25, label: "AI Experts", suffix: "+" },
    { number: 8, label: "Years of Experience", suffix: "+" }
  ];

  // Animated count up for stats
  const [counts, setCounts] = useState(stats.map(() => 0));
  useEffect(() => {
    const intervals = stats.map((stat, i) => {
      const increment = Math.max(1, Math.floor(stat.number / 60));
      return setInterval(() => {
        setCounts(prev => {
          const next = [...prev];
          if (next[i] < stat.number) {
            next[i] = Math.min(stat.number, next[i] + increment);
          }
          return next;
        });
      }, 16);
    });
    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-100 to-blue-300 text-gray-900 py-16 dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 dark:text-white">About SOLNEX</h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 max-w-2xl mx-auto dark:text-gray-300 relative">
              <span className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full opacity-60"></span>
              SOLNEX INC is a technology-driven company focused on delivering Al-powered software, cloud solutions, and digital transformation services.
              We bring together expertise in Artificial
              Intelligence, Data & Analytics, and Software
              Engineering to help enterprises build scalable, intelligent, and future-ready systems
            </p>
          </div>
        </div>
      </section>

      
      

      {/* Story Section */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 dark:text-white">Our Story</h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-600 dark:text-gray-300">
                <p>
                  SOLNEX was founded with a vision to pioneer responsible and future-ready AI innovations. 
                  We recognized the transformative potential of artificial intelligence and machine learning 
                  in reshaping how businesses operate and compete in the digital age.
                </p>
                <p>
                  Starting as a team of AI researchers and industry experts, we began by developing 
                  cutting-edge machine learning solutions. Our approach was different – we didn't just 
                  implement off-the-shelf AI, but built custom, enterprise-grade solutions that drive 
                  real business value and competitive advantage.
                </p>
                <p>
                  Today, SOLNEX has grown into a leading AI solutions provider, helping enterprises 
                  across multiple industries harness the power of AI, ML, and Generative AI to achieve 
                  automation, efficiency, and innovation in their operations.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 dark:bg-[#23272f] rounded-lg p-4 sm:p-6 md:p-8">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop" 
                alt="Team collaboration" 
                className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Values Section */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 dark:text-white">Our Values</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="border-black dark:border-white text-center hover:shadow-2xl transition-shadow hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer bg-white dark:bg-[#23272f]">
                  <CardHeader>
                    <div className="mx-auto bg-blue-100 p-2 sm:p-3 rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center mb-3 sm:mb-4">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-blue-400" />
                    </div>
                    <CardTitle className="text-base sm:text-lg md:text-xl text-blue-700 font-semibold dark:text-blue-300">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Founder's Note */}
      <section className="py-8 sm:py-12 md:py-16 bg-white text-gray-900 dark:bg-[#23272f] dark:text-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-black dark:text-white">Founder's Note</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mb-6 sm:mb-8 dark:text-gray-300">
              Our mission is to pioneer the future of AI-powered business transformation.
            </p>
          </div>
          <div className="bg-white/10 dark:bg-white/5 rounded-lg p-4 sm:p-6 md:p-8">
            <blockquote className="text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 dark:text-gray-300">
              "Having worked in the AI and machine learning industry for over a decade, I've witnessed firsthand 
              the transformative potential of artificial intelligence in reshaping business operations. 
              SOLNEX was born from my passion to democratize access to cutting-edge AI solutions 
              and create innovative technologies that drive real business value.
              <br /><br />
              Our success is measured not just by the number of AI projects we've delivered, 
              but by the business transformations we've enabled and the competitive advantages 
              we've created for our clients. Every successful implementation motivates us to continue 
              pushing the boundaries of what's possible with AI and machine learning."
            </blockquote>
            <div className="flex items-center justify-center space-x-3 sm:space-x-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/20 dark:bg-white/10 rounded-full flex items-center justify-center">
                <Users className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-base sm:text-lg dark:text-white">SaiReddy</div>
                <div className="text-sm sm:text-base text-blue-200">Founder & Chief AI Officer</div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;




