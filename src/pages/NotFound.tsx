import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, ArrowLeft, Search, Mail } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const popularPages = [
    { name: "Home", path: "/", icon: Home },
    { name: "Services", path: "/services", icon: Search },
    { name: "Advertising", path: "/services/advertising", icon: Search },
    { name: "Branding", path: "/services/branding", icon: Search },
    { name: "Website Design", path: "/services/website-design", icon: Search },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="flex min-h-screen items-center justify-center pt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            {/* 404 Animation */}
            <div className="mb-8 animate-fade-in">
              <h1 className="text-8xl md:text-9xl font-heading font-bold text-primary/20 mb-4">
                404
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
            </div>

            {/* Error Message */}
            <div className="mb-8 animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Page Not Found
              </h2>
              <p className="text-lg text-muted-foreground mb-2">
                Sorry, we couldn't find the page you're looking for.
              </p>
              <p className="text-sm text-muted-foreground/80">
                The page <code className="bg-muted px-2 py-1 rounded text-xs">{location.pathname}</code> doesn't exist.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-scale-in">
              <Button 
                onClick={() => navigate(-1)}
                variant="outline"
                size="lg"
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Go Back
              </Button>
              <Button 
                onClick={() => navigate("/")}
                size="lg"
                className="flex items-center gap-2"
              >
                <Home className="w-4 h-4" />
                Return Home
              </Button>
            </div>

            {/* Popular Pages */}
            <Card className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Popular Pages
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {popularPages.map((page) => {
                    const IconComponent = page.icon;
                    return (
                      <Button
                        key={page.path}
                        variant="ghost"
                        className="justify-start h-auto p-3 text-left"
                        onClick={() => navigate(page.path)}
                      >
                        <IconComponent className="w-4 h-4 mr-3 text-muted-foreground" />
                        <span>{page.name}</span>
                      </Button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Contact Support */}
            <div className="mt-8 animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <p className="text-sm text-muted-foreground mb-3">
                Still can't find what you're looking for?
              </p>
              <Button 
                variant="link" 
                className="text-primary hover:text-primary/80"
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  } else {
                    navigate("/#contact");
                  }
                }}
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
