import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  Users,
  UserCheck,
  Code,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "@/data";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { apiService } from "../services/api";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const iconMap = {
    briefcase: Briefcase,
    users: Users,
    "user-check": UserCheck,
    code: Code,
  };

  const processSteps = [
    {
      step: "1",
      title: "AI Strategy Assessment",
      description:
        "We analyze your business needs and develop a comprehensive AI strategy tailored to your objectives.",
    },
    {
      step: "2",
      title: "Solution Design",
      description:
        "Our AI experts design custom solutions that align with your technology stack and business goals.",
    },
    {
      step: "3",
      title: "Implementation & Training",
      description:
        "We implement the AI solutions and provide comprehensive training for your team.",
    },
    {
      step: "4",
      title: "Optimization & Support",
      description:
        "We continuously monitor, optimize, and support your AI systems to ensure maximum performance.",
    },
  ];

  const [selectedServiceId, setSelectedServiceId] = useState(null);
  const [formStates, setFormStates] = useState({});
  const [submittingId, setSubmittingId] = useState(null);

  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleChange = (serviceId, e) => {
    setFormStates((prev) => ({
      ...prev,
      [serviceId]: {
        ...prev[serviceId],
        [e.target.name]: e.target.value,
      },
    }));
  };

  const handleSubmit = async (service, e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      setSelectedServiceId(null);
      navigate('/register', { state: { fromServiceInquiry: true } });
      return;
    }
    setSubmittingId(service.id);
    try {
      await apiService.submitServiceInquiry({
        ...formStates[service.id],
        serviceId: service.id,
        serviceTitle: service.title,
        servicePricing: service.pricing,
      });
      setSubmittingId(null);
      setSelectedServiceId(null);
      setFormStates((prev) => ({ ...prev, [service.id]: { name: '', email: '', phone: '' } }));
      alert('Inquiry submitted!');
    } catch (error) {
      setSubmittingId(null);
      alert('Failed to submit inquiry. Please try again.');
    }
  };

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

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = iconMap[service.icon];
              const form = formStates[service.id] || { name: '', email: '', phone: '' };
              return (
                <Dialog key={service.id} open={selectedServiceId === service.id} onOpenChange={(open) => setSelectedServiceId(open ? service.id : null)}>
                  <Card
                    className="hover:shadow-lg transition-shadow h-full hover:shadow-2xl transition-shadow hover:scale-105 transition-transform durtion-300 ease-in-out cursor-pointer flex flex-col bg-white dark:bg-[#23272f] text-gray-900 dark:text-gray-100"
                  >
                    <CardHeader className="flex-shrink-0">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="bg-blue-100 p-3 rounded-lg">
                          <Icon className="h-6 w-6 text-blue-400" />
                        </div>
                        <div>
                          <CardTitle className="text-xl text-blue-700 font-semibold dark:text-blue-300">
                            {service.title}
                          </CardTitle>
                          <Badge variant="outline" className="mt-1">
                            {service.pricing}
                          </Badge>
                        </div>
                      </div>
                      <CardDescription className="text-base dark:text-gray-300">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <div className="space-y-3 mb-6 flex-1">
                        {service.features.map((feature, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <DialogTrigger asChild>
                        <Button className="w-full mt-auto">
                          Get Started <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                    </CardContent>
                  </Card>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Service Inquiry</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={(e) => handleSubmit(service, e)} className="space-y-4">
                      <div>
                        <div className="font-semibold text-blue-700 dark:text-blue-300">{service.title}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">{service.pricing}</div>
                      </div>
                      <Input name="name" placeholder="Your Name" value={form.name} onChange={(e) => handleChange(service.id, e)} required />
                      <Input name="email" type="email" placeholder="Your Email" value={form.email} onChange={(e) => handleChange(service.id, e)} required />
                      <Input name="phone" placeholder="Your Phone" value={form.phone} onChange={(e) => handleChange(service.id, e)} required />
                      <DialogFooter>
                        <Button type="submit" disabled={submittingId === service.id} className="w-full">
                          {submittingId === service.id ? 'Submitting...' : 'Submit Inquiry'}
                        </Button>
                        <DialogClose asChild>
                          <Button type="button" variant="outline" className="w-full">Cancel</Button>
                        </DialogClose>
                      </DialogFooter>
                    </form>
                  </DialogContent>
                </Dialog>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50 dark:bg-[#23272f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 dark:text-white">
              Our AI Implementation Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              A systematic approach to ensure successful AI transformation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-300 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold mb-3 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm dark:text-gray-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Job Support Detail */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 dark:text-white">
                AI & ML Solutions
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Our AI & ML solutions empower organizations to achieve automation, 
                  efficiency, and competitive advantage in today's data-driven world. 
                  We deliver custom machine learning models and predictive analytics 
                  that drive real business value.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Custom ML model development
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Predictive analytics implementation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Data preprocessing & feature engineering
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Model optimization & performance tuning
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-100 dark:bg-[#23272f] rounded-lg p-8">
              <img
                src="/course-images/AIML.png"
                alt="AI & ML Solutions"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Proxy Interview Detail */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-gray-100 dark:bg-[#23272f] rounded-lg p-8">
              <img
                src="/course-images/Java-Full-Stack.png"
                alt="Generative AI Solutions"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 dark:text-white">
                Generative AI Solutions
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  We empower enterprises to adopt next-generation automation and 
                  customer engagement strategies, accelerating innovation and business 
                  growth through cutting-edge generative AI technologies.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Large Language Model integration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Custom AI application development
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    RAG system implementation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    AI-powered automation workflows
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Mentorship Detail */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 dark:text-white">
                MLOps Engineering
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  We help enterprises accelerate time-to-market, reduce operational 
                  costs, and maximize business value from their AI and ML initiatives 
                  through comprehensive MLOps infrastructure and automation.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    MLOps infrastructure setup
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    CI/CD pipeline development
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Model versioning & tracking
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Monitoring & observability
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-100 dark:bg-[#23272f] rounded-lg p-8">
              <img
                src="/course-images/Devops.png"
                alt="MLOps Engineering"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white dark:bg-[#23272f] text-gray-900 dark:text-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-700 mb-8 dark:text-gray-300">
            Contact us today to learn more about how our AI solutions can transform
            your business operations and drive competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white font-bold dark:bg-green-700 dark:hover:bg-green-800"
              asChild
            >
              <Link to="/contact">Get Started Now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-blue-700 border-blue-700 hover:bg-blue-50 font-bold dark:bg-[#23272f] dark:text-blue-300 dark:border-blue-300 dark:hover:bg-[#2a2f3a]"
              asChild
            >
              <Link to="/trainings" onClick={handleTrainingsClick}>View AI Training Programs</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
