import { useLocation, useNavigate } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BreadcrumbItem {
  label: string;
  path: string;
  isActive?: boolean;
}

const Breadcrumb = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [
      { label: 'Home', path: '/' }
    ];

    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      
      // Convert slug to readable format
      let label = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      // Special cases for known routes
      if (segment === 'services' && index === 0) {
        label = 'Services';
      } else if (pathSegments[0] === 'services' && index === 1) {
        // This is a service detail page
        const serviceLabels: { [key: string]: string } = {
          'advertising': 'Advertising',
          'branding': 'Branding',
          'website-design': 'Website Design',
          'logo-design': 'Logo Design',
          'photography': 'Photography'
        };
        label = serviceLabels[segment] || label;
      }

      breadcrumbs.push({
        label,
        path: currentPath,
        isActive: index === pathSegments.length - 1
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  // Don't show breadcrumbs on home page
  if (location.pathname === '/') {
    return null;
  }

  return (
    <nav className="bg-muted/30 border-b border-border/50">
      <div className="container mx-auto px-4 py-3">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbs.map((item, index) => (
            <li key={item.path} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-muted-foreground mx-2" />
              )}
              
              {item.isActive ? (
                <span className="text-foreground font-medium flex items-center gap-1">
                  {index === 0 && <Home className="w-4 h-4" />}
                  {item.label}
                </span>
              ) : (
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-auto p-1 text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => navigate(item.path)}
                >
                  <span className="flex items-center gap-1">
                    {index === 0 && <Home className="w-4 h-4" />}
                    {item.label}
                  </span>
                </Button>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;