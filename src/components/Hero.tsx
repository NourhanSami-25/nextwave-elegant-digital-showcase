import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

export const Hero = () => {
  
  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/70 dark:bg-background/80 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center mt-20">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-din font-bold mb-6 text-foreground">
            <span className="inline-block transition-elegant hover:scale-110 cursor-default">
              Next
            </span>
            <span className="inline-block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-scale-in transition-elegant hover:scale-110 cursor-default">
              Wave
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto font-light">
            Crafting Digital Excellence Through Innovation and Design
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="gradient"
              size="lg"
              onClick={scrollToServices}
              className="group"
            >
              Explore Our Services
            </Button>
            <Button
              variant="elegant"
              size="lg"
              onClick={() => {
                const element = document.getElementById("contact");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get In Touch
            </Button>
          </div>

          {/* Animated scroll indicator */}
          <div className="flex justify-center mt-20 animate-bounce">
            <ArrowDown className="w-6 h-6 text-accent" />
          </div>
        </div>
      </div>
    </section>
  );
};
