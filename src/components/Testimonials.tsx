import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    rating: 5,
    text: "NextWave transformed our brand identity completely. Their attention to detail and creative vision exceeded our expectations.",
    avatar: "SJ",
    photo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'%3E%3Cdefs%3E%3ClinearGradient id='grad1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23d4a574;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23a67c52;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx='32' cy='32' r='32' fill='url(%23grad1)'/%3E%3Ccircle cx='32' cy='26' r='10' fill='%23fff' opacity='0.9'/%3E%3Cpath d='M20 50 Q32 42 44 50 L44 64 L20 64 Z' fill='%23fff' opacity='0.9'/%3E%3C/svg%3E"
  },
  {
    name: "Michael Chen",
    role: "CEO, TechStart",
    rating: 5,
    text: "The website they designed for us increased our conversion rate by 40%. Absolutely phenomenal work and professional service.",
    avatar: "MC",
    photo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'%3E%3Cdefs%3E%3ClinearGradient id='grad2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%236366f1;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%234338ca;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx='32' cy='32' r='32' fill='url(%23grad2)'/%3E%3Ccircle cx='32' cy='26' r='10' fill='%23fff' opacity='0.9'/%3E%3Cpath d='M20 50 Q32 42 44 50 L44 64 L20 64 Z' fill='%23fff' opacity='0.9'/%3E%3C/svg%3E"
  },
  {
    name: "Emily Rodriguez",
    role: "Creative Director",
    rating: 5,
    text: "Working with NextWave was a game-changer. They brought our vision to life with elegance and sophistication. They are very trusted ",
    avatar: "ER",
    photo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'%3E%3Cdefs%3E%3ClinearGradient id='grad3' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23ec4899;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23be185d;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx='32' cy='32' r='32' fill='url(%23grad3)'/%3E%3Ccircle cx='32' cy='26' r='10' fill='%23fff' opacity='0.9'/%3E%3Cpath d='M20 50 Q32 42 44 50 L44 64 L20 64 Z' fill='%23fff' opacity='0.9'/%3E%3C/svg%3E"
  },
  {
    name: "David Thompson",
    role: "Founder, GreenTech",
    rating: 5,
    text: "Their photography services captured our products beautifully. The quality and creativity are unmatched in the industry.",
    avatar: "DT",
    photo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'%3E%3Cdefs%3E%3ClinearGradient id='grad4' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2310b981;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23047857;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx='32' cy='32' r='32' fill='url(%23grad4)'/%3E%3Ccircle cx='32' cy='26' r='10' fill='%23fff' opacity='0.9'/%3E%3Cpath d='M20 50 Q32 42 44 50 L44 64 L20 64 Z' fill='%23fff' opacity='0.9'/%3E%3C/svg%3E"
  },
  {
    name: "Lisa Wang",
    role: "Brand Manager",
    rating: 5,
    text: "NextWave's advertising campaigns delivered exceptional results. Our brand awareness increased significantly.",
    avatar: "LW",
    photo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'%3E%3Cdefs%3E%3ClinearGradient id='grad5' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23f59e0b;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23d97706;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx='32' cy='32' r='32' fill='url(%23grad5)'/%3E%3Ccircle cx='32' cy='26' r='10' fill='%23fff' opacity='0.9'/%3E%3Cpath d='M20 50 Q32 42 44 50 L44 64 L20 64 Z' fill='%23fff' opacity='0.9'/%3E%3C/svg%3E"
  },
  {
    name: "James Miller",
    role: "Product Manager",
    rating: 5,
    text: "The logo design they created perfectly represents our company values. It's modern, memorable, and timeless.",
    avatar: "JM",
    photo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'%3E%3Cdefs%3E%3ClinearGradient id='grad6' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%238b5cf6;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%235b21b6;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx='32' cy='32' r='32' fill='url(%23grad6)'/%3E%3Ccircle cx='32' cy='26' r='10' fill='%23fff' opacity='0.9'/%3E%3Cpath d='M20 50 Q32 42 44 50 L44 64 L20 64 Z' fill='%23fff' opacity='0.9'/%3E%3C/svg%3E"
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover why brands trust NextWave to elevate their digital presence
          </p>
        </div>

        {/* Testimonials Horizontal Scroll */}
        <div className="relative overflow-hidden hover-pause-container">
          <div className="testimonials-scroll flex gap-6 animate-scroll-right">
            {/* First set of testimonials */}
            {testimonials.map((testimonial, index) => (
              <div
                key={`first-${testimonial.name}`}
                className="flex-shrink-0 w-80 group"
              >
                <div className="bg-card/80 backdrop-blur-sm rounded-xl p-4 shadow-soft hover:shadow-elegant transition-elegant border border-border/50 h-full">
                  {/* Avatar and Info */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="relative">
                      <div className="w-10 h-10 rounded-full overflow-hidden shadow-soft ring-2 ring-accent/20 group-hover:scale-110 transition-elegant">
                        <img 
                          src={testimonial.photo} 
                          alt={`${testimonial.name} profile`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-accent rounded-full border-2 border-card"></div>
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground text-sm">{testimonial.name}</h4>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-foreground mb-4 leading-relaxed font-body text-sm">
                    "{testimonial.text}"
                  </p>

                  {/* Rating */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-accent text-accent"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {testimonials.map((testimonial, index) => (
              <div
                key={`second-${testimonial.name}`}
                className="flex-shrink-0 w-80 group"
              >
                <div className="bg-card/80 backdrop-blur-sm rounded-xl p-4 shadow-soft hover:shadow-elegant transition-elegant border border-border/50 h-full">
                  {/* Avatar and Info */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="relative">
                      <div className="w-10 h-10 rounded-full overflow-hidden shadow-soft ring-2 ring-accent/20 group-hover:scale-110 transition-elegant">
                        <img 
                          src={testimonial.photo} 
                          alt={`${testimonial.name} profile`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-accent rounded-full border-2 border-card"></div>
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground text-sm">{testimonial.name}</h4>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-foreground mb-4 leading-relaxed font-body text-sm">
                    "{testimonial.text}"
                  </p>

                  {/* Rating */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-accent text-accent"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Accent */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full border border-primary/20">
            <Star className="w-5 h-5 fill-accent text-accent" />
            <span className="text-primary font-heading font-semibold">
              Trusted by 200+ brands worldwide
            </span>
            <Star className="w-5 h-5 fill-accent text-accent" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scrollRight {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-right {
            animation: scrollRight 30s linear infinite;
          }

          .hover-pause-container:hover .testimonials-scroll {
            animation-play-state: paused;
          }

          .testimonials-scroll {
            width: calc(320px * 12 + 24px * 11);
          }
      `}</style>
    </section>
  );
};


