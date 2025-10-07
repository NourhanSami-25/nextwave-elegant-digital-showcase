import { Users, Award, Target } from "lucide-react";
import teamPhoto from "@/assets/team-photo.jpg";

export const About = () => {
  
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-din font-bold text-foreground mb-4">
            About NextWave
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate creators dedicated to transforming your digital presence with innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Team Photo */}
          <div className="animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-20 animate-pulse" />
              <div className="relative aspect-square rounded-full overflow-hidden border-8 border-accent shadow-elegant">
                <img
                  src={teamPhoto}
                  alt="NextWave Team"
                  className="w-full h-full object-cover transition-elegant hover:scale-110"
                />
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-3xl font-din font-semibold text-foreground">
              Who We Are
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              NextWave is a dynamic digital agency that specializes in creating exceptional online experiences. Our team of creative professionals combines artistic vision with technical expertise to deliver solutions that not only look stunning but also drive real business results.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe in the power of collaboration and work closely with our clients to understand their unique challenges and goals. Every project is an opportunity to push creative boundaries and set new standards in digital excellence.
            </p>

            <div className="flex flex-wrap gap-20 pt-4">
              <div className="text-center">
                <div className="text-4xl font-din font-bold text-primary mb-1">
                  150+
                </div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-din font-bold text-primary mb-1">
                  50+
                </div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-din font-bold text-primary mb-1">
                  12
                </div>
                <div className="text-sm text-muted-foreground">Team Members</div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};
