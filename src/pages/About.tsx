import React, { useState, useEffect, useRef } from 'react';
import { 
  Users, 
  Target, 
  Heart, 
  Lightbulb, 
  Award, 
  Zap,
  TrendingUp,
  Globe,
  Star
} from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { BackToTop } from '../components/BackToTop';
import { useLanguage } from '../contexts/LanguageContext';

// Custom hook for intersection observer
const useIntersectionObserver = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return [ref, isVisible] as const;
};

// Animated counter component
const AnimatedCounter = ({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [ref, isVisible] = useIntersectionObserver(0.5);

  useEffect(() => {
    if (isVisible && !hasStarted) {
      setHasStarted(true);
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        setCount(Math.floor(progress * end));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isVisible, hasStarted, end, duration]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-accent">
      {count}{suffix}
    </div>
  );
};

const About = () => {
  const { t } = useLanguage();
  const [introRef, introVisible] = useIntersectionObserver(0.3);
  const [statsRef, statsVisible] = useIntersectionObserver(0.3);
  const [goalsRef, goalsVisible] = useIntersectionObserver(0.3);

  const stats = [
    { label: 'Projects Completed', value: 150, suffix: '+', icon: Target },
    { label: 'Happy Clients', value: 120, suffix: '+', icon: Users },
    { label: 'Subscribers', value: 5000, suffix: '+', icon: Heart }
  ];

  const leftValues = [
    {
      title: 'Innovation',
      description: 'We push creative boundaries to deliver cutting-edge solutions that set new industry standards.',
      icon: Lightbulb
    },
    {
      title: 'Excellence',
      description: 'Every project reflects our commitment to quality, attention to detail, and professional craftsmanship.',
      icon: Award
    },
    {
      title: 'Growth',
      description: 'We believe in continuous learning and evolution, both for our team and our clients\' success.',
      icon: TrendingUp
    }
  ];

  const rightValues = [
    {
      title: 'Collaboration',
      description: 'We work closely with our clients as partners, ensuring their vision becomes our shared mission.',
      icon: Users
    },
    {
      title: 'Impact',
      description: 'Our goal is to create meaningful digital experiences that drive real business results.',
      icon: Zap
    },
    {
      title: 'Global Vision',
      description: 'We think globally while acting locally, bringing world-class solutions to every project.',
      icon: Globe
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
            {t('aboutPage.hero.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('aboutPage.hero.description')}
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 mx-10">
        <div className="max-w-7xl mx-auto px-4">
          <div 
            ref={introRef}
            className={`transition-all duration-1000 ${
              introVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
                    {t('aboutPage.story.title')}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    {t('aboutPage.story.paragraph1')}
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {t('aboutPage.story.paragraph2')}
                  </p>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="bg-card p-8 rounded-2xl shadow-soft">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                      <Target className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-foreground">{t('aboutPage.mission.title')}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('aboutPage.mission.description')}
                  </p>
                </div>
                
                <div className="bg-card p-8 rounded-2xl shadow-soft">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <Star className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-foreground">{t('aboutPage.vision.title')}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('aboutPage.vision.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5">
        <div className="max-w-7xl mx-auto px-4">
          <div 
            ref={statsRef}
            className={`transition-all duration-1000 delay-300 ${
              statsVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
                {t('aboutPage.impact.title')}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('aboutPage.impact.subtitle')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div 
                    key={index}
                    className="text-center p-8 bg-card rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-300"
                  >
                    <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-accent/30">
                      <IconComponent className="w-8 h-8 text-accent" />
                    </div>
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    <p className="text-lg font-medium text-foreground mt-2">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Goals Section with Wavy Line */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div 
            ref={goalsRef}
            className={`transition-all duration-1000 delay-500 ${
              goalsVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
                {t('aboutPage.values.title')}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('aboutPage.values.subtitle')}
              </p>
            </div>
            
            <div className="relative">
              {/* Wavy Line SVG */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <svg 
                  width="100%" 
                  height="200" 
                  viewBox="0 0 1200 200" 
                  className="animate-float"
                  style={{
                    animation: 'float 6s ease-in-out infinite'
                  }}
                >
                  <defs>
                    <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="hsl(330 26% 52%)" stopOpacity="0.3" />
                      <stop offset="50%" stopColor="hsl(38 61% 76%)" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="hsl(330 26% 52%)" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                  <path 
                    d="M0,100 Q300,50 600,100 T1200,100" 
                    stroke="url(#waveGradient)" 
                    strokeWidth="3" 
                    fill="none"
                    className="drop-shadow-sm"
                  />
                </svg>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
                {/* Left Side Values */}
                <div className="space-y-8">
                  {leftValues.map((value, index) => {
                    const IconComponent = value.icon;
                    return (
                      <div 
                        key={index}
                        className="bg-card p-6 rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-6 h-6 text-accent" />
                          </div>
                          <div>
                            <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                              {value.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                              {value.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                {/* Right Side Values */}
                <div className="space-y-8">
                  {rightValues.map((value, index) => {
                    const IconComponent = value.icon;
                    return (
                      <div 
                        key={index}
                        className="bg-card p-6 rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                              {value.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                              {value.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(5px) rotate(-1deg); }
        }
      `}</style>
    </div>
  );
};

export default About;