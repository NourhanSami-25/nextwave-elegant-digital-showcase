import React, { useState } from 'react';
import { 
  Palette, 
  Monitor, 
  Camera, 
  Megaphone, 
  Star,
  Sparkles,
  Zap,
  Target,
  Eye,
  Heart
} from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { BackToTop } from '../components/BackToTop';

// Portfolio data
const portfolioItems = [
  {
    id: 1,
    category: 'branding',
    name: 'Luxury Brand Identity',
    description: 'Complete brand identity design for premium lifestyle brand',
    image: '/src/assets/brand-identity.png',
    tags: ['Logo Design', 'Brand Guidelines', 'Color Palette'],
    client: 'Luxe Living Co.',
    year: '2024'
  },
  {
    id: 2,
    category: 'websites',
    name: 'E-commerce Platform',
    description: 'Modern responsive website with seamless user experience',
    image: '/src/assets/e-commerce-platform.png',
    tags: ['Web Design', 'UX/UI', 'E-commerce'],
    client: 'Fashion Forward',
    year: '2024'
  },
  {
    id: 3,
    category: 'advertising',
    name: 'Digital Campaign',
    description: 'Multi-platform advertising campaign with stunning visuals',
    image: '/src/assets/advertising-campaign.png',
    tags: ['Digital Ads', 'Social Media', 'Campaign'],
    client: 'TechStart Inc.',
    year: '2023'
  },
  {
    id: 4,
    category: 'logos',
    name: 'Modern Logo Design',
    description: 'Minimalist logo design for tech startup',
    image: '/src/assets/logo-design.png',
    tags: ['Logo', 'Branding', 'Identity'],
    client: 'InnovateTech',
    year: '2024'
  },
  {
    id: 5,
    category: 'photography',
    name: 'Product Photography',
    description: 'Professional product photography for e-commerce',
    image: '/src/assets/product-photography.png',
    tags: ['Photography', 'Product', 'Commercial'],
    client: 'Artisan Goods',
    year: '2023'
  },
  {
    id: 6,
    category: 'websites',
    name: 'Mobile App Design',
    description: 'Intuitive mobile application interface design',
    image: '/src/assets/mobile-app.png',
    tags: ['Mobile', 'App Design', 'UX/UI'],
    client: 'HealthTech Solutions',
    year: '2024'
  }
];

const categories = [
  { id: 'all', name: 'All Work', icon: Star },
  { id: 'branding', name: 'Branding', icon: Palette },
  { id: 'websites', name: 'Websites', icon: Monitor },
  { id: 'advertising', name: 'Advertising', icon: Megaphone },
  { id: 'logos', name: 'Logos', icon: Sparkles },
  { id: 'photography', name: 'Photography', icon: Camera }
];

const tickerItems = [
  'Brands', 'Advertisements', 'Websites', 'Logos', 'Photography', 
  'Mobile Apps', 'E-commerce', 'Campaigns', 'Identity Design', 'Digital Marketing'
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/src/assets/hero-bg.jpg')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
            Our <span className="text-accent">Portfolio</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in-delay">
            Discover our creative journey through stunning designs, innovative solutions, and impactful campaigns
          </p>
          <div className="flex items-center justify-center gap-4 animate-fade-in-delay-2">
            <Eye className="w-6 h-6 text-accent" />
            <span className="text-lg">Explore Our Work</span>
            <Heart className="w-6 h-6 text-accent" />
          </div>
        </div>
      </section>

      {/* Scrolling Ticker */}
      <section className="bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 backdrop-blur-sm py-6 overflow-hidden border-y border-border/20">
        <div className="ticker-container">
          <div className="ticker-scroll flex items-center gap-8 animate-scroll-left">
            {/* First set */}
            {tickerItems.map((item, index) => (
              <div key={`first-${index}`} className="flex items-center gap-8 whitespace-nowrap">
                <span className="text-accent text-lg font-semibold tracking-wide">{item}</span>
                <Zap className="w-5 h-5 text-primary/70 flex-shrink-0" />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {tickerItems.map((item, index) => (
              <div key={`second-${index}`} className="flex items-center gap-8 whitespace-nowrap">
                <span className="text-accent text-lg font-semibold tracking-wide">{item}</span>
                <Zap className="w-5 h-5 text-primary/70 flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Content */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-gradient-primary text-accent shadow-elegant'
                      : 'bg-card hover:bg-card/80 text-foreground hover:shadow-soft border border-border/50'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  {category.name}
                </button>
              );
            })}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedItem(item)}
              >
                <div className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-500 transform hover:-translate-y-2 h-[480px] flex flex-col">
                  {/* Image */}
                  <div className="relative overflow-hidden h-64 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {item.name}
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mt-auto">
                      <span className="font-medium">{item.client}</span>
                      <span className="font-medium">{item.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-6">
          <div className="bg-card rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
            <div className="relative">
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 z-10 w-12 h-12 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/40 transition-colors text-xl font-light"
              >
                ×
              </button>
              
              {/* Split View Layout */}
               <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[500px]">
                {/* Left Side - Project Details */}
                 <div className="lg:col-span-2 p-8 lg:p-12 flex flex-col justify-center bg-gradient-subtle">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
                        {selectedItem.name}
                      </h2>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {selectedItem.description}
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">Purpose</h4>
                        <p className="text-foreground font-medium">Enhanced brand visibility and engagement</p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">Client</h4>
                          <p className="text-foreground font-medium">{selectedItem.client}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">Date</h4>
                          <p className="text-foreground font-medium">{selectedItem.year}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Project Tags</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedItem.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium border border-accent/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-4 pt-4">
                      <button
                        onClick={() => setSelectedItem(null)}
                        className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 shadow-soft"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Right Side - Large Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <BackToTop />

      {/* Custom Styles */}
      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-scroll-left {
          animation: scrollLeft 30s linear infinite;
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }

        .animate-fade-in-delay {
          animation: fadeIn 1s ease-out 0.3s both;
        }

        .animate-fade-in-delay-2 {
          animation: fadeIn 1s ease-out 0.6s both;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out both;
        }

        .ticker-container {
          width: 100%;
        }

        .ticker-scroll {
          width: calc(100% * 2);
        }
      `}</style>
    </div>
  );
};

export default Portfolio;