import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, Shield, TrendingUp, Users, Globe, Zap, GraduationCap, Home, Film, Utensils, Plane, ShieldCheck } from 'lucide-react';

const Industries = () => {
  const industryData = [
    {
      name: "Financial Services",
      icon: Shield,
      description: "Transform banking, insurance, and fintech with AI-powered risk assessment, fraud detection, and personalized financial services.",
      benefits: ["Enhanced security & compliance", "Automated risk management", "Personalized customer experiences", "Real-time fraud detection"]
    },
    {
      name: "Healthcare & Life Sciences",
      icon: Users,
      description: "Revolutionize patient care with AI-driven diagnostics, drug discovery, and personalized medicine solutions.",
      benefits: ["Improved diagnostic accuracy", "Faster drug discovery", "Personalized treatment plans", "Operational efficiency"]
    },
    {
      name: "Manufacturing",
      icon: Building2,
      description: "Optimize production with smart manufacturing, predictive maintenance, and quality control automation.",
      benefits: ["Predictive maintenance", "Quality optimization", "Supply chain efficiency", "Cost reduction"]
    },
    {
      name: "Retail",
      icon: TrendingUp,
      description: "Enhance customer experience with AI-powered recommendations, inventory management, and demand forecasting.",
      benefits: ["Personalized recommendations", "Inventory optimization", "Customer behavior insights", "Omnichannel integration"]
    },
    {
      name: "Telecommunications",
      icon: Globe,
      description: "Modernize networks with AI-driven network optimization, customer service automation, and predictive analytics.",
      benefits: ["Network optimization", "Customer service automation", "Predictive analytics", "5G readiness"]
    },
    {
      name: "Automotive",
      icon: Zap,
      description: "Accelerate innovation with autonomous driving, connected vehicles, and manufacturing automation.",
      benefits: ["Autonomous driving", "Connected vehicles", "Manufacturing automation", "Safety enhancement"]
    },
    {
      name: "Energy",
      icon: Zap,
      description: "Optimize energy production and distribution with smart grid solutions and renewable energy management.",
      benefits: ["Smart grid optimization", "Renewable energy management", "Predictive maintenance", "Energy efficiency"]
    },
    {
      name: "Infrastructure",
      icon: Building2,
      description: "Build smarter cities with IoT integration, predictive maintenance, and intelligent transportation systems.",
      benefits: ["IoT integration", "Predictive maintenance", "Smart transportation", "Resource optimization"]
    },
    {
      name: "Higher Education",
      icon: GraduationCap,
      description: "Transform learning with AI-powered personalized education, administrative automation, and research tools.",
      benefits: ["Personalized learning", "Administrative automation", "Research acceleration", "Student engagement"]
    },
    {
      name: "Smart Cities",
      icon: Home,
      description: "Create sustainable urban environments with intelligent infrastructure, traffic management, and public services.",
      benefits: ["Intelligent infrastructure", "Traffic management", "Public service optimization", "Sustainability"]
    },
    {
      name: "Media & Entertainment",
      icon: Film,
      description: "Enhance content creation with AI-powered recommendation engines, content analysis, and audience insights.",
      benefits: ["Content recommendations", "Audience insights", "Content optimization", "Personalization"]
    },
    {
      name: "Restaurants",
      icon: Utensils,
      description: "Optimize operations with AI-driven inventory management, customer preferences, and operational efficiency.",
      benefits: ["Inventory optimization", "Customer preferences", "Operational efficiency", "Cost reduction"]
    },
    {
      name: "Aviation & Travel",
      icon: Plane,
      description: "Enhance safety and efficiency with predictive maintenance, route optimization, and customer service automation.",
      benefits: ["Predictive maintenance", "Route optimization", "Safety enhancement", "Customer service"]
    },
    {
      name: "Insurance",
      icon: ShieldCheck,
      description: "Transform risk assessment with AI-powered underwriting, claims processing, and fraud detection.",
      benefits: ["AI-powered underwriting", "Claims automation", "Fraud detection", "Risk assessment"]
    }
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

      {/* Industries Grid */}
      <section className="py-16 bg-gray-50 dark:bg-[#23272f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4 dark:text-white">Transforming Industries with AI</h2>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              Discover how our solutions are revolutionizing operations across various sectors
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industryData.map((industry) => {
              const IconComponent = industry.icon;
              return (
                <Card key={industry.name} className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-black dark:border-white bg-white dark:bg-[#23272f] text-gray-900 dark:text-gray-100">
                  <CardHeader className="text-center">
                    <div className="mx-auto bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl dark:text-white">{industry.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 dark:text-gray-300 text-center">
                      {industry.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-blue-700 dark:text-blue-300 mb-2">Key Benefits:</h4>
                      <ul className="space-y-1">
                        {industry.benefits.map((benefit, index) => (
                          <li key={index} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
