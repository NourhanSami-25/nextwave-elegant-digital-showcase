import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ServicePage from "./pages/services/ServicePage";
import ServicesOverview from "./pages/services/ServicesOverview";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import RouteLoader from "./components/RouteLoader";
import Breadcrumb from "./components/Breadcrumb";
import PageTransition from "./components/PageTransition";
import RouteMetadata from "./components/RouteMetadata";
import { useScrollRestoration } from "./hooks/use-scroll-restoration";
import { LanguageProvider } from "./contexts/LanguageContext";

const queryClient = new QueryClient();

// Layout wrapper component
const AppLayout = ({ children }: { children: React.ReactNode }) => {
  useScrollRestoration();
  
  return (
    <>
      <RouteMetadata />
      <RouteLoader />
      <Breadcrumb />
      <PageTransition>
        {children}
      </PageTransition>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppLayout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<ServicesOverview />} />
              <Route path="/services/:slug" element={<ServicePage />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              {/* 404 Route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AppLayout>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
