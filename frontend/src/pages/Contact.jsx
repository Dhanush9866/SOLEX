import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useForm } from '@/hooks/useForm';
import { useToast } from '@/hooks/use-toast';
import { apiService } from '@/services/api';
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Contact = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  
  const { values, errors, isSubmitting, handleChange, handleSubmit, reset } = useForm(
    {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    },
    {
      name: { required: true, minLength: 2 },
      email: { required: true, email: true },
      phone: { required: true, phone: true },
      subject: { required: true },
      message: { required: true, minLength: 10 }
    }
  );

  const subjects = [
    'General Inquiry',
    'Technical Support',
    'Training & Mentorship',
    'Business / Partnership',
    'Product Demo Request',
    'Feedback / Suggestions',
    'Shedule a demo',
    'Product/Service Enquiry',
  ];

  const onSubmit = async (formData) => {
    if (!isAuthenticated) {
      navigate('/register', { state: { fromContact: true } });
      return;
    }
    try {
      await apiService.submitContact(formData);
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      reset();
    } catch (error) {
      toast({
        title: "Failed to Send",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('/contactus.jpg')`,
            filter: 'blur(1px)'
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30" />
        
        {/* Content */}
        <div className="relative z-10 flex items-center justify-center min-h-[600px]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto font-medium">
              We’re here to empower your tech journey. Whether you need expert guidance, enterprise solutions, training, or technical support — our team at SOLNEX is ready to help you every step of the way
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            {/* Contact Form */}
            <div>
              <Card className="bg-white dark:bg-[#23272f] text-gray-900 dark:text-gray-100">
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl md:text-2xl text-blue-700 font-semibold dark:text-blue-300">Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit(onSubmit);
                  }} className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="dark:text-gray-300">Full Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          value={values.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          className={errors.name ? 'border-red-500' : 'placeholder-gray-400 dark:placeholder-white'}
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="dark:text-gray-300">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={values.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          className={errors.email ? 'border-red-500' : 'placeholder-gray-400 dark:placeholder-white'}
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="dark:text-gray-300">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={values.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        className={errors.phone ? 'border-red-500' : 'placeholder-gray-400 dark:placeholder-white'}
                      />
                      {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label className="dark:text-gray-300">Subject *</Label>
                      <Select value={values.subject} onValueChange={(value) => handleChange('subject', value)}>
                        <SelectTrigger className={errors.subject ? 'border-red-500' : 'placeholder-gray-400 dark:placeholder-white'}>
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          {subjects.map((subject) => (
                            <SelectItem key={subject} value={subject}>{subject}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="dark:text-gray-300">Message *</Label>
                      <textarea
                        id="message"
                        rows={6}
                        value={values.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 ${errors.message ? 'border-red-500' : 'placeholder-gray-400 dark:placeholder-white border-gray-300 dark:border-white'} bg-white dark:bg-[#181b20] text-gray-900 dark:text-white`}
                        placeholder="Tell us how we can help you..."
                      />
                      {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-bold dark:bg-green-700 dark:hover:bg-green-800" 
                      disabled={isSubmitting}
                      size="lg"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-4 sm:mb-6 dark:text-white">Get in Touch</h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed dark:text-gray-300">
                  We’re here to support your success in the tech world. Whether you need product guidance, enterprise solutions, or technical assistance, our expert team is committed to helping you at every step
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg mb-1 text-blue-700 dark:text-blue-300">Email Support</h3>
                    <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">solnexx.official@gmail.com</p>
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-blue-700 dark:text-blue-300">Phone Support</h3>
                    <p className="text-gray-700 dark:text-gray-300">97017961957</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Mon-Fri: 9 AM - 6 PM EST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-blue-700 dark:text-blue-300">Business Hours</h3>
                    <p className="text-gray-700 dark:text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-700 dark:text-gray-300">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-gray-700 dark:text-gray-300">Sunday: Closed</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-blue-700 dark:text-blue-300">Service Area</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                    🌐 Operating Globally</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Headquarters

SOLNEX Pvt Ltd, <br />
D. No: 5-12/1, Near Tech Valley Towers,<br />
Madhurawada IT Park, Visakhapatnam – 530048,<br />
Andhra Pradesh, India.
</p>
                  </div>
                </div>
              </div>

             
            </div>
          </div>
        </div>
      </section>

      {/* Info Banner */}
      <section className="py-8 sm:py-10 md:py-12 bg-blue-100 dark:bg-[#23272f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-blue-700 dark:text-blue-300">We're Here to Help!</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300">
            Our average response time is under 2 hours during business hours. For urgent matters, please contact us via phone or email.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
