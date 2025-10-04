import teamPhoto from "@/assets/team-photo.jpg";

const clients = [
  { name: "TechCorp", logo: "TC" },
  { name: "Design Studio", logo: "DS" },
  { name: "Creative Co", logo: "CC" },
  { name: "Brand Plus", logo: "BP" },
  { name: "Digital Hub", logo: "DH" },
  { name: "Vision Agency", logo: "VA" },
];

export const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            About NextWave
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A passionate team dedicated to bringing your vision to life
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
            <h3 className="text-3xl font-heading font-semibold text-foreground">
              Crafting Excellence Since 2020
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At NextWave, we believe in the power of elegant design and
              strategic thinking. Our multidisciplinary team combines creativity
              with technical expertise to deliver solutions that not only look
              beautiful but drive real results.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We've had the privilege of partnering with forward-thinking brands
              across industries, helping them tell their stories and connect with
              their audiences in meaningful ways.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="text-center">
                <div className="text-4xl font-heading font-bold text-primary mb-1">
                  150+
                </div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-heading font-bold text-primary mb-1">
                  50+
                </div>
                <div className="text-sm text-muted-foreground">Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-heading font-bold text-primary mb-1">
                  12
                </div>
                <div className="text-sm text-muted-foreground">Team Members</div>
              </div>
            </div>
          </div>
        </div>

        {/* Client Logos */}
        <div className="animate-fade-in">
          <h3 className="text-2xl font-heading font-semibold text-center text-foreground mb-8">
            Trusted by Leading Brands
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {clients.map((client) => (
              <div
                key={client.name}
                className="aspect-square flex items-center justify-center bg-card border-2 border-border rounded-xl shadow-soft hover:shadow-elegant hover:border-accent transition-elegant group"
              >
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-primary group-hover:scale-110 transition-smooth">
                    {client.logo}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {client.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
