import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
// Advertising PNGs
import advertisingCampaign from "@/assets/advertising-campaign.png";
import seasonalPromotion from "@/assets/seasonal-promotion.png";
import influencerCollaboration from "@/assets/influencer-collaboration.png";

// Branding PNGs
import brandIdentity from "@/assets/brand-identity.png";
import packagingDesign from "@/assets/packaging-design.png";
import logoDesign from "@/assets/logo-design.png";

// Web Design PNGs
import responsiveWebsite from "@/assets/responsive-website.png";
import ecommercePlatform from "@/assets/e-commerce-platform.png";
import mobileApp from "@/assets/mobile-app.png";

// Photography PNGs
import portraitSession from "@/assets/portrait-session.png";
import eventCoverage from "@/assets/event-coverage.png";
import productPhotography from "@/assets/product-photography.png";

type Project = {
  title: string;
  description: string;
  purpose: string;
  date: string;
  image: string;
};

const dataByService: Record<string, { title: string; projects: Project[] }> = {
  advertising: {
    title: "Advertising",
    projects: [
      {
        title: "Launch Campaign A",
        description: "Multi-channel campaign increasing brand awareness across social and display.",
        purpose: "Drive engagement and conversions",
        date: "2024-03-12",
        image: advertisingCampaign,
      },
      {
        title: "Seasonal Promo",
        description: "Targeted ads for seasonal product line with refined messaging.",
        purpose: "Boost sales during peak season",
        date: "2024-06-20",
        image: seasonalPromotion,
      },
      {
        title: "Influencer Collab",
        description: "Partnered content strategy amplifying reach and authenticity.",
        purpose: "Expand audience and trust",
        date: "2024-09-05",
        image: influencerCollaboration,
      },
    ],
  },
  branding: {
    title: "Branding",
    projects: [
      {
        title: "Identity Refresh",
        description: "Updated visual system and tone to align with growth vision.",
        purpose: "Modernize and clarify brand",
        date: "2024-02-10",
        image: brandIdentity,
      },
      {
        title: "Packaging Suite",
        description: "Elegant packaging concepts reinforcing premium perception.",
        purpose: "Elevate shelf presence",
        date: "2024-04-18",
        image: packagingDesign,
      },
      {
        title: "Brand Guidelines",
        description: "Comprehensive usage and voice guidelines for consistency.",
        purpose: "Unify brand execution",
        date: "2024-08-01",
        image: logoDesign,
      },
    ],
  },
  "website-design": {
    title: "Website Design",
    projects: [
      {
        title: "Responsive Redesign",
        description: "Optimized UX and performance with a graceful visual refresh.",
        purpose: "Improve engagement and conversion",
        date: "2024-01-22",
        image: responsiveWebsite,
      },
      {
        title: "E-commerce Build",
        description: "Streamlined shopping experience and checkout flow.",
        purpose: "Increase online sales",
        date: "2024-05-14",
        image: ecommercePlatform,
      },
      {
        title: "Portfolio Site",
        description: "Minimal showcase with refined motion and accessibility.",
        purpose: "Present work elegantly",
        date: "2024-07-30",
        image: mobileApp,
      },
    ],
  },
  "logo-design": {
    title: "Logo Design",
    projects: [
      {
        title: "Signature Mark",
        description: "Crafted bespoke symbol reflecting brand ethos.",
        purpose: "Anchor visual identity",
        date: "2024-02-28",
        image: logoDesign,
      },
      {
        title: "Monogram Set",
        description: "Versatile logotype variations for diverse contexts.",
        purpose: "Ensure flexible usage",
        date: "2024-06-03",
        image: brandIdentity,
      },
      {
        title: "Event Badge",
        description: "Limited edition mark for annual summit.",
        purpose: "Create memorability",
        date: "2024-09-19",
        image: packagingDesign,
      },
    ],
  },
  photography: {
    title: "Photography",
    projects: [
      {
        title: "Editorial Shoot",
        description: "On-location narrative capturing brand lifestyle.",
        purpose: "Tell visual stories",
        date: "2024-03-07",
        image: eventCoverage,
      },
      {
        title: "Product Set",
        description: "Studio lighting for crisp, inviting product showcases.",
        purpose: "Elevate product appeal",
        date: "2024-05-25",
        image: productPhotography,
      },
      {
        title: "Portrait Series",
        description: "Team portraits with warm, elegant tone.",
        purpose: "Humanize brand",
        date: "2024-08-12",
        image: portraitSession,
      },
    ],
  },
};

const ServicePage = () => {
  const { slug } = useParams();
  const [selected, setSelected] = useState<Project | null>(null);

  const service = useMemo(() => {
    if (!slug) return null;
    return dataByService[slug];
  }, [slug]);

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />

      <section className="container mx-auto px-4 pt-28 pb-16">
        <div className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-din font-bold text-foreground">
            {service?.title ?? "Services"}
          </h1>
          <p className="mt-3 text-muted-foreground">Explore featured projects for this service</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(service?.projects ?? []).map((p) => (
            <Dialog key={p.title}>
              <DialogTrigger asChild>
                <Card className="group cursor-pointer transition-elegant hover:shadow-elegant">
                  <CardHeader>
                    <CardTitle className="text-xl">{p.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <AspectRatio ratio={16 / 10} className="overflow-hidden rounded-md border">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="h-full w-full object-cover transition-smooth group-hover:scale-105"
                      />
                    </AspectRatio>
                  </CardContent>
                </Card>
              </DialogTrigger>

              <DialogContent className="max-w-5xl p-0 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr]">
                  {/* Left: Details */}
                  <div className="p-8 bg-gradient-to-br from-background via-background/95 to-muted/20">
                    <DialogHeader className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-8 bg-gradient-to-b from-primary to-accent rounded-full"></div>
                        <div>
                          <DialogTitle className="text-3xl font-din font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                            {p.title}
                          </DialogTitle>
                          <DialogDescription className="mt-1">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                              {service?.title}
                            </span>
                          </DialogDescription>
                        </div>
                      </div>
                    </DialogHeader>
                    
                    <div className="mt-8 space-y-6">
                      <div className="group">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                          <span className="font-semibold text-foreground text-sm uppercase tracking-wide">Description</span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-muted/30 group-hover:border-primary/30 transition-colors">
                          {p.description}
                        </p>
                      </div>
                      
                      <div className="group">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                          <span className="font-semibold text-foreground text-sm uppercase tracking-wide">Purpose</span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-muted/30 group-hover:border-accent/30 transition-colors">
                          {p.purpose}
                        </p>
                      </div>
                      
                      <div className="group">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary/60"></div>
                          <span className="font-semibold text-foreground text-sm uppercase tracking-wide">Project Date</span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-muted/30 group-hover:border-primary/20 transition-colors font-mono">
                          {new Date(p.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-muted/20">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className="w-1 h-1 rounded-full bg-primary animate-pulse"></div>
                        <span>Project showcase by NextWave Digital</span>
                      </div>
                    </div>
                  </div>

                  {/* Center Divider with NextWave logo */}
                  <div className="hidden md:flex items-center justify-center px-4">
                    <div className="relative h-full">
                      <Separator orientation="vertical" className="h-full" />
                      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-background border border-border rounded-full px-4 py-2 shadow-soft">
                        <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent font-din font-bold">
                          NextWave
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Large image */}
                  <div className="bg-card p-6 border-l md:border-l-0 md:border-t flex items-center justify-center">
                    <AspectRatio ratio={16 / 10} className="overflow-hidden rounded-md border ml-6">
                      <img src={p.image} alt={p.title} className="h-full w-full object-cover" />
                    </AspectRatio>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicePage;