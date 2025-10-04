import { useState, useEffect } from "react";
import { Camera, Palette, Globe, Megaphone, Sparkles } from "lucide-react";
import servicePhotography from "@/assets/service-photography.jpg";
import serviceWeb from "@/assets/service-web.jpg";
import serviceBranding from "@/assets/service-branding.jpg";
import serviceAds from "@/assets/service-ads.jpg";

const services = [
  {
    icon: Megaphone,
    title: "Advertising",
    description:
      "Strategic campaigns that captivate audiences and drive meaningful engagement across all platforms.",
    image: serviceAds,
  },
  {
    icon: Palette,
    title: "Branding",
    description:
      "Crafting unique brand identities that resonate with your audience and stand the test of time.",
    image: serviceBranding,
  },
  {
    icon: Globe,
    title: "Website Design",
    description:
      "Beautiful, responsive websites that combine aesthetics with seamless user experiences.",
    image: serviceWeb,
  },
  {
    icon: Sparkles,
    title: "Logo Design",
    description:
      "Distinctive logos that embody your brand's essence and leave lasting impressions.",
    image: serviceBranding,
  },
  {
    icon: Camera,
    title: "Photography",
    description:
      "Professional photography that tells your brand's story through stunning visual narratives.",
    image: servicePhotography,
  },
];

export const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to elevate your brand
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative animate-scale-in">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-elegant border-4 border-accent/20">
              <img
                src={activeService.image}
                alt={activeService.title}
                className="w-full h-full object-cover transition-elegant hover:scale-105"
              />
            </div>

            {/* Floating service indicators */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-smooth ${
                    index === activeIndex
                      ? "bg-primary shadow-glow scale-125"
                      : "bg-muted hover:bg-accent"
                  }`}
                  aria-label={`View service ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
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
