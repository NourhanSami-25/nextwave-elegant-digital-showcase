import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 300);
    };

    // Check initial scroll position
    toggleVisibility();
    
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <Button
      onClick={scrollToTop}
      variant="gradient"
      size="icon"
      className="fixed bottom-8 right-8 z-[9999] shadow-glow animate-scale-in hover:scale-110 transition-all duration-300"
      aria-label="Back to top"
      style={{
        background: 'linear-gradient(135deg, hsl(330 26% 52%) 0%, hsl(38 61% 76%) 100%)',
        boxShadow: '0 0 30px hsl(38 61% 76% / 0.3), 0 4px 20px -4px hsl(330 26% 52% / 0.3)'
      }}
    >
      <ArrowUp className="w-5 h-5 text-white" />
    </Button>
  );
};
