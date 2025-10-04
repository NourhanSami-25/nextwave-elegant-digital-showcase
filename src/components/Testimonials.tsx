import { Star } from "lucide-react";
import { useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechCorp",
    rating: 5,
    text: "NextWave transformed our brand identity completely. Their attention to detail and creative vision exceeded all expectations.",
    avatar: "SJ",
  },
  {
    name: "Michael Chen",
    role: "Marketing Director, Design Studio",
    rating: 5,
    text: "Working with NextWave was an absolute pleasure. They delivered a stunning website that perfectly captures our brand essence.",
    avatar: "MC",
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, Creative Co",
    rating: 5,
    text: "The team's professionalism and creativity are unmatched. They turned our vision into reality with elegant execution.",
    avatar: "ER",
  },
  {
    name: "David Park",
    role: "CMO, Brand Plus",
    rating: 5,
    text: "NextWave's strategic approach to our advertising campaign resulted in a 200% increase in engagement. Truly exceptional work.",
    avatar: "DP",
  },
  {
    name: "Lisa Thompson",
    role: "Director, Digital Hub",
    rating: 5,
    text: "Their photography services captured our products beautifully. The images tell our story better than words ever could.",
    avatar: "LT",
  },
];

export const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const scroll = () => {
      scrollPosition += scrollSpeed;
      if (scrollContainer.scrollWidth - scrollPosition <= scrollContainer.clientWidth) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
    };

    const intervalId = setInterval(scroll, 30);

    const handleMouseEnter = () => clearInterval(intervalId);
    const handleMouseLeave = () => {
      const newIntervalId = setInterval(scroll, 30);
      return () => clearInterval(newIntervalId);
    };

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearInterval(intervalId);
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section id="portfolio" className="py-20 bg-gradient-subtle overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by brands who value excellence and elegance
          </p>
        </div>
      </div>

      {/* Horizontal Scrolling Testimonials */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide px-4"
        style={{ scrollBehavior: "smooth" }}
      >
        {/* Duplicate testimonials for seamless loop */}
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-80 md:w-96 bg-card border-2 border-border rounded-2xl p-8 shadow-elegant hover:shadow-glow hover:border-accent transition-elegant group"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground text-xl font-heading font-bold shadow-soft">
                {testimonial.avatar}
              </div>
              <div>
                <h4 className="font-heading font-semibold text-foreground text-lg">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>

            <div className="flex gap-1 mb-4">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-accent text-accent group-hover:scale-110 transition-smooth"
                  style={{ transitionDelay: `${i * 50}ms` }}
                />
              ))}
            </div>

            <p className="text-muted-foreground leading-relaxed italic">
              "{testimonial.text}"
            </p>
          </div>
        ))}
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};
