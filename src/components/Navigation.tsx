import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Moon, Sun, Globe, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/contexts/LanguageContext";

export const Navigation = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const navigate = useNavigate();

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const services = [
    { key: "advertising", name: t("services.advertising.title") },
    { key: "branding", name: t("services.branding.title") },
    { key: "websiteDesign", name: t("services.websiteDesign.title") },
    { key: "logoDesign", name: t("services.logoDesign.title") },
    { key: "photography", name: t("services.photography.title") },
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
            className="text-2xl font-heading font-bold text-primary hover:opacity-80 transition-smooth"
          >
            NextWave
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              {t("nav.home")}
            </button>

            <DropdownMenu>
              <DropdownMenuTrigger className="text-foreground hover:text-primary transition-smooth font-medium">
                {t("nav.services")}
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-popover border-border shadow-elegant">
                <DropdownMenuItem
                  onClick={() => {
                    navigate('/services');
                    setIsMenuOpen(false);
                  }}
                  className="cursor-pointer hover:bg-accent transition-smooth font-semibold text-primary border-b border-border"
                >
                  {t("nav.viewAllServices")}
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
              {t("nav.portfolio")}
            </button>

            <button
              onClick={() => navigate("/about")}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              {t("nav.about")}
            </button>

            <button
              onClick={() => navigate("/contact")}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              {t("nav.contact")}
            </button>
          </div>

          {/* Right Section - Language & Theme Toggle */}
          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center rounded-lg border-2 border-border overflow-hidden shadow-soft">
              <button
                onClick={() => setLanguage(language === "en" ? "ar" : "en")}
                className="flex items-center gap-1 px-4 py-2 bg-muted hover:bg-accent transition-smooth text-sm font-medium"
              >
                <Globe className="w-4 h-4" />
                {language === "en" ? "EN" : "AR"}
              </button>
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
                {t("nav.home")}
              </button>
              <button
                onClick={() => {
                  navigate("/services");
                  setIsMenuOpen(false);
                }}
                className="text-left text-foreground hover:text-primary transition-smooth font-medium py-2"
              >
                {t("nav.services")}
              </button>
              <button
                onClick={() => {
                  navigate("/portfolio");
                  setIsMenuOpen(false);
                }}
                className="text-left text-foreground hover:text-primary transition-smooth font-medium py-2"
              >
                {t("nav.portfolio")}
              </button>
              <button
                onClick={() => {
                  navigate("/about");
                  setIsMenuOpen(false);
                }}
                className="text-left text-foreground hover:text-primary transition-smooth font-medium py-2"
              >
                {t("nav.about")}
              </button>
              <button
                onClick={() => {
                  navigate("/contact");
                  setIsMenuOpen(false);
                }}
                className="text-left text-foreground hover:text-primary transition-smooth font-medium py-2"
              >
                {t("nav.contact")}
              </button>

              <div className="flex items-center gap-2 pt-2 border-t border-border">
                <Button
                  variant="elegant"
                  size="sm"
                  onClick={() => setLanguage(language === "en" ? "ar" : "en")}
                >
                  <Globe className="w-4 h-4 mr-2" />
                  {language === "en" ? "EN" : "AR"}
                </Button>
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
