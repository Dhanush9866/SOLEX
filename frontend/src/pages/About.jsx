import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Heart, Award, Clock, Shield, Mail, Phone, MapPin, HelpCircle } from 'lucide-react';
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
              Engineering the future with software intelligence - building enterprise-grade AI, ML, and Generative AI solutions.
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

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50 dark:bg-[#23272f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-black dark:border-white text-center hover:shadow-2xl transition-shadow hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer bg-white dark:bg-[#23272f]">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center text-blue-700 font-semibold dark:text-blue-300">
                  <Target className="h-6 w-6 mr-3 text-blue-400" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed dark:text-gray-300">
                  To pioneer responsible and future-ready AI innovations including explainable AI 
                  and AI-powered business automation. We empower enterprises to achieve automation, 
                  efficiency, and competitive advantage in today's data-driven world.
                </p>
              </CardContent>
            </Card>

            <Card className="border-black dark:border-white text-center hover:shadow-2xl transition-shadow hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer bg-white dark:bg-[#23272f]">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center text-blue-700 font-semibold dark:text-blue-300">
                  <Heart className="h-6 w-6 mr-3 text-blue-400" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed dark:text-gray-300">
                  To be the leading AI solutions provider that transforms how enterprises operate 
                  and compete in the digital age. We envision a world where every organization 
                  can harness the power of AI to achieve unprecedented levels of efficiency, 
                  innovation, and growth.
                </p>
              </CardContent>
            </Card>
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
                <div className="font-semibold text-lg dark:text-white">Dr. Sarah Chen</div>
                <div className="text-blue-200">Founder & Chief AI Officer</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 dark:text-white">
              Why Enterprises Choose SOLNEX
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Clock className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-blue-700 dark:text-blue-300">24/7 AI Support</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Our AI experts are available around the clock to provide technical assistance and optimization.
              </p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-blue-700 dark:text-blue-300">Proven AI Expertise</h3>
              <p className="text-gray-700 dark:text-gray-300">
                With hundreds of successful AI implementations, our solutions are tested and proven effective.
              </p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-blue-700 dark:text-blue-300">Expert AI Team</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Our AI specialists are industry veterans with decades of combined experience in machine learning and AI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Link */}
      <div className="flex justify-center py-12">
        <div className="relative w-full max-w-xl">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-[#23272f] dark:to-blue-900 border border-blue-200 dark:border-blue-700 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-950 mb-4 shadow">
              <HelpCircle className="h-8 w-8 text-blue-500" />
            </div>
            <h3 className="font-bold text-2xl mb-2 text-blue-800 dark:text-blue-200">Have Questions?</h3>
            <p className="text-gray-700 mb-6 dark:text-gray-300">
              Check out our frequently asked questions for quick answers to common inquiries.
            </p>
            <a
              href="/?scroll=faq"
              className="inline-block px-8 py-3 rounded-lg bg-blue-700 text-white font-semibold shadow-md hover:bg-blue-800 transition-colors border-2 border-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 dark:border-blue-500 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              View FAQ
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
