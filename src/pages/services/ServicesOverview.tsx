import { useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Palette, Globe, Camera, Megaphone, PenTool } from "lucide-react";

// Import service images
import serviceAds from "@/assets/service-ads.jpg";
import serviceBranding from "@/assets/service-branding.jpg";
import serviceWeb from "@/assets/service-web.jpg";
import servicePhotography from "@/assets/service-photography.jpg";

const ServicesOverview = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: "advertising",
      title: "Advertising",
      description: "Strategic campaigns that capture attention and drive results through creative storytelling and targeted messaging.",
      icon: Megaphone,
      image: serviceAds,
      features: ["Campaign Strategy", "Creative Development", "Media Planning", "Performance Analytics"],
      slug: "advertising"
    },
    {
      id: "branding",
      title: "Branding",
      description: "Comprehensive brand identity development that creates lasting connections with your audience.",
      icon: Palette,
      image: serviceBranding,
      features: ["Brand Strategy", "Visual Identity", "Brand Guidelines", "Brand Positioning"],
      slug: "branding"
    },
    {
      id: "website-design",
      title: "Website Design",
      description: "Modern, responsive websites that deliver exceptional user experiences and drive conversions.",
      icon: Globe,
      image: serviceWeb,
      features: ["Responsive Design", "UX/UI Design", "Performance Optimization", "SEO Integration"],
      slug: "website-design"
    },
    {
      id: "logo-design",
      title: "Logo Design",
      description: "Distinctive logos that embody your brand's essence and create memorable first impressions.",
      icon: PenTool,
      image: serviceBranding,
      features: ["Concept Development", "Multiple Variations", "Brand Applications", "Usage Guidelines"],
      slug: "logo-design"
    },
    {
      id: "photography",
      title: "Photography",
      description: "Professional photography services that capture your brand's story through compelling visual narratives.",
      icon: Camera,
      image: servicePhotography,
      features: ["Product Photography", "Event Coverage", "Portrait Sessions", "Commercial Shoots"],
      slug: "photography"
    }
  ];

  const handleServiceClick = (slug: string) => {
    navigate(`/services/${slug}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6 animate-fade-in">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-slide-up">
              Comprehensive digital solutions designed to elevate your brand and drive meaningful results. 
              From strategic advertising to stunning visual design, we bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={service.id} 
                  className="group hover:shadow-elegant transition-all duration-300 cursor-pointer border-border/50 hover:border-primary/20 animate-scale-in h-[580px] flex flex-col"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => handleServiceClick(service.slug)}
                >
                  <CardHeader className="p-0 flex-shrink-0">
                    <div className="relative overflow-hidden rounded-t-lg h-48">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 flex items-center gap-2">
                        <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-white font-heading font-bold text-xl line-clamp-1">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3 flex-shrink-0">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3 mb-6 flex-1">
                      <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide">
                        Key Features
                      </h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                            <span className="line-clamp-1">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button 
                      className="w-full group/btn mt-auto"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleServiceClick(service.slug);
                      }}
                    >
                      View Projects
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help transform your brand and achieve your business goals.
          </p>
          <Button 
            size="lg" 
            className="px-8"
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              } else {
                navigate("/#contact");
              }
            }}
          >
            Get In Touch
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesOverview;