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
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 dark:text-white">About SOLNEX</h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto dark:text-gray-300">
            

SOLNEX INC is a technology-driven company focused on delivering Al-powered software, cloud solutions, and digital transformation services.
We bring together expertise in Artificial
Intelligence, Data & Analytics, and Software
Engineering to help enterprises build scalable, intelligent, and future-ready systems
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 dark:bg-[#23272f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-700 mb-2 dark:text-blue-300">
                  {counts[index]}{stat.suffix}
                </div>
                <div className="text-gray-700 dark:text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 dark:text-white">Our Story</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
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
            <div className="bg-gray-100 dark:bg-[#23272f] rounded-lg p-8">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop" 
                alt="Team collaboration" 
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 dark:text-white">Our Values</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="border-black dark:border-white text-center hover:shadow-2xl transition-shadow hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer bg-white dark:bg-[#23272f]">
                  <CardHeader>
                    <div className="mx-auto bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-blue-400" />
                    </div>
                    <CardTitle className="text-xl text-blue-700 font-semibold dark:text-blue-300">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 dark:text-gray-300">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Founder's Note */}
      <section className="py-16 bg-white text-gray-900 dark:bg-[#23272f] dark:text-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">Founder's Note</h2>
            <p className="text-xl text-gray-700 mb-8 dark:text-gray-300">
              Our mission is to pioneer the future of AI-powered business transformation.
            </p>
          </div>
          <div className="bg-white/10 dark:bg-white/5 rounded-lg p-8">
            <blockquote className="text-lg leading-relaxed mb-6 dark:text-gray-300">
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
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 bg-white/20 dark:bg-white/10 rounded-full flex items-center justify-center">
                <Users className="h-8 w-8" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-lg dark:text-white">SaiReddy</div>
                <div className="text-blue-200">Founder & Chief AI Officer</div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;




