import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
export const Navigation = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const services = [
    { key: "advertising", name: "Advertising" },
    { key: "branding", name: "Branding" },
    { key: "websiteDesign", name: "Website Design" },
    { key: "logoDesign", name: "Logo Design" },
    { key: "photography", name: "Photography" },
  ];

  const toSlug = (name: string) =>
    name
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    } else {
      // If element doesn't exist (not on home page), navigate to home first
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border shadow-soft">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="text-2xl font-din font-bold text-primary hover:opacity-80 transition-smooth"
          >
            NextWave
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Home
            </button>

            <DropdownMenu>
              <DropdownMenuTrigger className="text-foreground hover:text-primary transition-smooth font-medium">
                Services
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-popover border-border shadow-elegant">
                <DropdownMenuItem
                  onClick={() => {
                    navigate('/services');
                    setIsMenuOpen(false);
                  }}
                  className="cursor-pointer hover:bg-accent transition-smooth font-semibold text-primary border-b border-border"
                >
                  View All Services
                </DropdownMenuItem>
                {services.map((service) => (
                  <DropdownMenuItem
                    key={service.key}
                    onClick={() => {
                      navigate(`/services/${toSlug(service.name)}`);
                      setIsMenuOpen(false);
                    }}
                    className="cursor-pointer hover:bg-accent transition-smooth"
                  >
                    {service.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <button
              onClick={() => navigate("/portfolio")}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Portfolio
            </button>

            <button
              onClick={() => navigate("/about")}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              About Us
            </button>

            <button
              onClick={() => navigate("/contact")}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Contact
            </button>
          </div>

          {/* Right Section - Theme Toggle */}
          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center rounded-lg border-2 border-border overflow-hidden shadow-soft">
              <button
                onClick={toggleTheme}
                className="flex items-center gap-1 px-4 py-2 bg-muted hover:bg-accent transition-smooth"
              >
                {isDark ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-left text-foreground hover:text-primary transition-smooth font-medium py-2"
              >
                Home
              </button>
              <button
                onClick={() => {
                  navigate("/services");
                  setIsMenuOpen(false);
                }}
                className="text-left text-foreground hover:text-primary transition-smooth font-medium py-2"
              >
                Services
              </button>
              <button
                onClick={() => {
                  navigate("/portfolio");
                  setIsMenuOpen(false);
                }}
                className="text-left text-foreground hover:text-primary transition-smooth font-medium py-2"
              >
                Portfolio
              </button>
              <button
                onClick={() => {
                  navigate("/about");
                  setIsMenuOpen(false);
                }}
                className="text-left text-foreground hover:text-primary transition-smooth font-medium py-2"
              >
                About Us
              </button>
              <button
                onClick={() => {
                  navigate("/contact");
                  setIsMenuOpen(false);
                }}
                className="text-left text-foreground hover:text-primary transition-smooth font-medium py-2"
              >
                Contact
              </button>

              <div className="flex items-center gap-2 pt-2 border-t border-border">
                <Button variant="elegant" size="sm" onClick={toggleTheme}>
                  {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
