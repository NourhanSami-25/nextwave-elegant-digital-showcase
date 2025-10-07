import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  MessageCircle,
  User,
  MessageSquare
} from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const contactFormRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleViewOurWork = () => {
    navigate('/portfolio');
  };

  const handleStartProject = () => {
    if (contactFormRef.current) {
      contactFormRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: '123 Business Street, Suite 100\nNew York, NY 10001',
      color: 'text-primary'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (555) 123-4567\n+1 (555) 987-6543',
      color: 'text-accent'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'hello@nextwave.com\nsupport@nextwave.com',
      color: 'text-primary'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: 'Mon - Fri: 9:00 AM - 6:00 PM\nSat: 10:00 AM - 4:00 PM',
      color: 'text-accent'
    }
  ];

  const handleWhatsAppClick = () => {
    const phoneNumber = '1234567890'; // Replace with actual WhatsApp number
    const message = 'Hello! I would like to get in touch with NextWave.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        {/* Background with overlay using theme colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-accent/60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/30 to-primary/20"></div>
        <div className="absolute inset-0 bg-foreground/20"></div>
        
        {/* Animated background elements with theme colors */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary to-accent rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-accent to-primary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-r from-primary/80 to-accent/80 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 text-center">

          
          <h1 className="text-5xl md:text-7xl font-din font-bold text-background mb-6 leading-tight">
            Get In <span className="bg-gradient-to-r from-accent via-background to-accent bg-clip-text text-transparent">Touch</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-background/80 max-w-4xl mx-auto leading-relaxed">
            Ready to transform your vision into reality? Our creative team is here to bring your ideas to life with stunning design and innovative solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <button 
              onClick={handleStartProject}
              className="px-8 py-4 bg-gradient-to-r from-accent to-primary text-foreground font-semibold rounded-full hover:from-accent/90 hover:to-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Start Your Project
            </button>
            <button 
              onClick={handleViewOurWork}
              className="px-8 py-4 bg-background/10 backdrop-blur-sm text-background font-semibold rounded-full border border-background/20 hover:bg-background/20 transition-all duration-300"
            >
              View Our Work
            </button>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section ref={contactFormRef} className="py-20 bg-gradient-subtle relative overflow-hidden">
        {/* Background decorative elements with theme colors */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full filter blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16">
            
            {/* Contact Form - Left Side (3/5 width) */}
            <div className="lg:col-span-3 space-y-8">
              <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-3xl p-8 shadow-elegant relative overflow-hidden">
                {/* Form background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-card/90 via-primary/5 to-accent/5 rounded-3xl"></div>
                
                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h2 className="text-3xl font-din font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      Send us a Message
                    </h2>
                  </div>
                  <p className="text-muted-foreground mb-8">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-foreground font-semibold">
                          <User className="w-4 h-4 inline mr-2 text-primary" />
                          Name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                          className="bg-background/70 border-border focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 placeholder-muted-foreground shadow-sm rounded-xl py-4"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-foreground font-semibold">
                          <Mail className="w-4 h-4 inline mr-2 text-primary" />
                          Email
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          required
                          className="bg-background/70 border-border focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 placeholder-muted-foreground shadow-sm rounded-xl py-4"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-foreground font-semibold">
                        <MessageSquare className="w-4 h-4 inline mr-2 text-primary" />
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What's this about?"
                        required
                        className="bg-background/70 border-border focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 placeholder-muted-foreground shadow-sm rounded-xl py-4"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-foreground font-semibold">
                        <MessageCircle className="w-4 h-4 inline mr-2 text-primary" />
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your project and how we can help bring your vision to life..."
                        rows={8}
                        required
                        className="bg-background/70 border-border focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none placeholder-muted-foreground shadow-sm rounded-xl py-4"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-primary via-accent to-primary text-primary-foreground font-bold py-4 px-6 rounded-xl hover:from-primary/90 hover:via-accent/90 hover:to-primary/90 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl shadow-primary/25"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </div>
            </div>

            {/* Map and Contact Info - Right Side (2/5 width) */}
            <div className="lg:col-span-2 space-y-8">

              {/* Google Maps */}
              <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 relative">
                <div className="absolute inset-0 bg-gradient-subtle rounded-3xl"></div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878459418!3d40.74844097932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sus!4v1647834539122!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-[300px] relative z-10"
                  title="NextWave Office Location"
                />
              </div>

              {/* Contact Info Cards - Compact 2x2 Grid */}
              <div className="grid grid-cols-2 gap-3">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-lg bg-card/80 backdrop-blur-sm border border-border/50 p-4 transition-all duration-300 hover:shadow-lg hover:bg-card/90"
                    >
                      <div className="flex items-start gap-3">
                        <div className={`flex-shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-md bg-primary/10 ${info.color} group-hover:bg-primary/20 transition-colors duration-300`}>
                           <IconComponent className="w-4 h-4" />
                         </div>
                         <div className="min-w-0 flex-1">
                           <h3 className="font-medium text-foreground text-sm mb-1 truncate">
                             {info.title}
                           </h3>
                           <p className="text-muted-foreground text-xs leading-relaxed whitespace-pre-line">
                             {info.details}
                           </p>
                         </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <button
          onClick={handleWhatsAppClick}
          className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-full shadow-2xl hover:shadow-3xl shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300 transform hover:scale-110 flex items-center justify-center group relative overflow-hidden"
          aria-label="Contact us on WhatsApp"
        >
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Pulse animation */}
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
          
          <MessageCircle className="w-7 h-7 relative z-10" />
          
          <div className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-card/95 backdrop-blur-sm text-foreground px-4 py-2 rounded-xl text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0 shadow-lg border border-border whitespace-nowrap">
             <span className="flex items-center gap-2">
               <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
               Chat with us on WhatsApp
             </span>
             {/* Arrow */}
             <div className="absolute top-1/2 -left-1 transform -translate-y-1/2 w-2 h-2 bg-card rotate-45 border-l border-b border-border"></div>
           </div>
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;