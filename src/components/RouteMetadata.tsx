import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

interface RouteMetadata {
  title: string;
  description: string;
  keywords?: string;
}

const routeMetadata: Record<string, RouteMetadata> = {
  "/": {
    title: "NextWave - Digital Marketing & Design Agency",
    description: "Transform your brand with NextWave's comprehensive digital marketing and design services. Expert advertising, branding, web design, and photography solutions.",
    keywords: "digital marketing, web design, branding, advertising, photography, logo design"
  },
  "/services": {
    title: "Our Services - NextWave Digital Agency",
    description: "Explore NextWave's full range of digital services including advertising, branding, website design, logo design, and professional photography.",
    keywords: "digital services, advertising, branding, web design, logo design, photography"
  },
  "/services/advertising": {
    title: "Advertising Services - NextWave",
    description: "Professional advertising solutions to boost your brand visibility and drive results. Creative campaigns that convert.",
    keywords: "advertising, marketing campaigns, brand promotion, digital advertising"
  },
  "/services/branding": {
    title: "Branding Services - NextWave",
    description: "Complete branding solutions to establish your unique brand identity. From strategy to visual design.",
    keywords: "branding, brand identity, brand strategy, visual identity"
  },
  "/services/website-design": {
    title: "Website Design Services - NextWave",
    description: "Modern, responsive website design that engages users and drives conversions. Custom web solutions.",
    keywords: "website design, web development, responsive design, user experience"
  },
  "/services/logo-design": {
    title: "Logo Design Services - NextWave",
    description: "Professional logo design that captures your brand essence. Memorable logos that make an impact.",
    keywords: "logo design, brand logo, graphic design, visual identity"
  },
  "/services/photography": {
    title: "Photography Services - NextWave",
    description: "Professional photography services for your business needs. High-quality images that tell your story.",
    keywords: "photography, professional photography, business photography, product photography"
  }
};

const RouteMetadata = () => {
  const location = useLocation();
  const params = useParams();

  useEffect(() => {
    let currentPath = location.pathname;
    
    // Handle dynamic routes
    if (params.slug && currentPath.includes('/services/')) {
      currentPath = `/services/${params.slug}`;
    }

    const metadata = routeMetadata[currentPath] || routeMetadata["/"];
    
    // Update document title
    document.title = metadata.title;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', metadata.description);
    
    // Update meta keywords
    if (metadata.keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', metadata.keywords);
    }

    // Update Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', metadata.title);

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', metadata.description);

  }, [location.pathname, params.slug]);

  return null;
};

export default RouteMetadata;