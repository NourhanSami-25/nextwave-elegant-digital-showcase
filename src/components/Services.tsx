import { useState, useEffect } from "react";
import { Camera, Palette, Globe, Megaphone, Sparkles } from "lucide-react";
import CameraMockup from "./CameraMockup";
// Using local high-quality PNG images
import serviceAdvertising from '../assets/advertising-campaign.png';
import serviceBranding from '../assets/brand-identity.png';
import serviceWebsite from '../assets/responsive-website.png';
import servicePhotography from '../assets/product-photography.png';
import { useLanguage } from "@/contexts/LanguageContext";

export const Services = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  const services = [
    {
      icon: Megaphone,
      title: t('services.advertising.title'),
      description: t('services.advertising.description'),
      image: serviceAdvertising,
    },
    {
      icon: Palette,
      title: t('services.branding.title'),
      description: t('services.branding.description'),
      image: serviceBranding,
    },
    {
      icon: Globe,
      title: t('services.websiteDesign.title'),
      description: t('services.websiteDesign.description'),
      image: serviceWebsite,
    },
    {
      icon: Sparkles,
      title: t('services.logoDesign.title'),
      description: t('services.logoDesign.description'),
      image: serviceBranding,
    },
    {
      icon: Camera,
      title: t('services.photography.title'),
      description: t('services.photography.description'),
      image: servicePhotography,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const activeService = services[activeIndex];
  const Icon = activeService.icon;

  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            {t('services.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Camera Mockup Side */}
          <div className="relative animate-scale-in order-2 lg:order-1">
            <div className="relative">
                <CameraMockup
                  image={activeService.image}
                  alt={activeService.title}
                  className="transform transition-all duration-700 hover:scale-105 hover:rotate-1"
                />
              
              {/* Camera Flash Effect */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-8 left-8 w-2 h-2 bg-red-500 rounded-full animate-pulse opacity-80"></div>
                <div className="absolute top-8 right-8 w-1 h-1 bg-green-400 rounded-full animate-pulse opacity-60"></div>
              </div>
              
              {/* Floating Camera Info */}
              <div className="absolute -top-4 -right-4 bg-black/80 text-white px-3 py-1 rounded-full text-xs font-mono backdrop-blur-sm">
                {activeService.title.toUpperCase()}
              </div>
            </div>

            {/* Enhanced service indicators with camera theme */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-3 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full">
              {services.map((service, index) => {
                const ServiceIcon = service.icon;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`p-2 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? "bg-primary text-primary-foreground shadow-lg scale-110"
                        : "bg-white/20 text-white/70 hover:bg-white/30 hover:text-white"
                    }`}
                    aria-label={`View ${service.title} service`}
                    title={service.title}
                  >
                    <ServiceIcon className="w-4 h-4" />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-6 lg:space-y-8 order-1 lg:order-2">
            <div className="animate-fade-in">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-xl bg-primary/10 text-primary shadow-soft">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-heading font-semibold text-foreground">
                  {activeService.title}
                </h3>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {activeService.description}
              </p>
            </div>

            {/* Service List */}
            <div className="space-y-3">
              {services.map((service, index) => {
                const ServiceIcon = service.icon;
                return (
                  <button
                    key={service.title}
                    onClick={() => setActiveIndex(index)}
                    className={`w-full text-left p-4 rounded-lg transition-elegant ${
                      index === activeIndex
                        ? "bg-primary text-primary-foreground shadow-elegant"
                        : "bg-card hover:bg-accent/50 border border-border"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <ServiceIcon className="w-5 h-5" />
                      <span className="font-medium">{service.title}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
