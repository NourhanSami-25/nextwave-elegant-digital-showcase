import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Info */}
          <div className="space-y-4 animate-fade-in">
            <h3 className="text-3xl font-heading font-bold">NextWave</h3>
            <p className="text-background/80 leading-relaxed">
              Elevating brands through elegant design and strategic creativity.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 rounded-lg bg-background/10 hover:bg-accent hover:text-accent-foreground transition-smooth"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-background/10 hover:bg-accent hover:text-accent-foreground transition-smooth"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-background/10 hover:bg-accent hover:text-accent-foreground transition-smooth"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-background/10 hover:bg-accent hover:text-accent-foreground transition-smooth"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 animate-fade-in">
            <h4 className="text-xl font-heading font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-left text-background/80 hover:text-accent transition-smooth"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left text-background/80 hover:text-accent transition-smooth"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-left text-background/80 hover:text-accent transition-smooth"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-background/80 hover:text-accent transition-smooth"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-background/80 hover:text-accent transition-smooth"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in">
            <h4 className="text-xl font-heading font-semibold mb-4">Get in Touch</h4>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50 focus:border-accent"
              />
              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50 focus:border-accent"
              />
              <Textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                rows={4}
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50 focus:border-accent resize-none"
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
        <div className="pt-8 border-t border-background/20 text-center text-background/60">
          <p>© 2025 NextWave. All rights reserved. Crafted with elegance.</p>
        </div>
      </div>
    </footer>
  );
};
