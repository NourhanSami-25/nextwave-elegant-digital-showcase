import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleNavigation = (path: string, sectionId?: string) => {
    if (location.pathname === path && sectionId) {
      // If we're already on the page, just scroll to the section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to the page
      navigate(path);
      // If there's a section ID, scroll to it after navigation
      if (sectionId) {
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    }
  };

  return (
    <footer id="contact" className="bg-gradient-to-br from-deep-charcoal via-deep-charcoal/95 to-deep-charcoal/90 dark:from-deep-charcoal dark:via-deep-charcoal/98 dark:to-deep-charcoal/95 text-warm-ivory py-16 border-t border-champagne-gold/20 shadow-luxury">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Info */}
          <div className="space-y-4 animate-fade-in">
            <h3 className="text-3xl font-din font-bold">NextWave</h3>
            <p className="text-warm-ivory/80 leading-relaxed">
              Elevating brands through elegant design and strategic creativity.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 rounded-lg bg-champagne-gold/10 hover:bg-champagne-gold/20 hover:text-champagne-gold transition-smooth border border-champagne-gold/20"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-champagne-gold/10 hover:bg-champagne-gold/20 hover:text-champagne-gold transition-smooth border border-champagne-gold/20"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-champagne-gold/10 hover:bg-champagne-gold/20 hover:text-champagne-gold transition-smooth border border-champagne-gold/20"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-champagne-gold/10 hover:bg-champagne-gold/20 hover:text-champagne-gold transition-smooth border border-champagne-gold/20"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 animate-fade-in">
            <h4 className="text-xl font-din font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <button
                onClick={() => handleNavigation("/", "hero")}
                className="text-left text-warm-ivory/80 hover:text-champagne-gold transition-smooth"
              >
                Home
              </button>
              <button
                onClick={() => handleNavigation("/services")}
                className="text-left text-warm-ivory/80 hover:text-champagne-gold transition-smooth"
              >
                Services
              </button>
              <button
                onClick={() => handleNavigation("/portfolio")}
                className="text-left text-warm-ivory/80 hover:text-champagne-gold transition-smooth"
              >
                Portfolio
              </button>
              <button
                onClick={() => handleNavigation("/about")}
                className="text-left text-warm-ivory/80 hover:text-champagne-gold transition-smooth"
              >
                About Us
              </button>
              <button
                onClick={() => handleNavigation("/contact")}
                className="text-left text-warm-ivory/80 hover:text-champagne-gold transition-smooth"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in">
            <h4 className="text-xl font-din font-semibold mb-4">Get in Touch</h4>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="bg-warm-ivory/5 border-champagne-gold/30 text-warm-ivory placeholder:text-warm-ivory/50 focus:border-champagne-gold focus:ring-champagne-gold/20"
              />
              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="bg-warm-ivory/5 border-champagne-gold/30 text-warm-ivory placeholder:text-warm-ivory/50 focus:border-champagne-gold focus:ring-champagne-gold/20"
              />
              <Textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                rows={4}
                className="bg-warm-ivory/5 border-champagne-gold/30 text-warm-ivory placeholder:text-warm-ivory/50 focus:border-champagne-gold focus:ring-champagne-gold/20 resize-none"
              />
              <Button
                type="submit"
                variant="gradient"
                className="w-full"
              >
                <Mail className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-champagne-gold/20 text-center text-warm-ivory/60">
          <p>© 2025 NextWave. All rights reserved. Crafted with elegance.</p>
        </div>
      </div>
    </footer>
  );
};
