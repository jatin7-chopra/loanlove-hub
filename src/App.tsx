import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Loans from "./pages/Loans";
import PersonalLoans from "./pages/loans/PersonalLoans";
import HomeLoans from "./pages/loans/HomeLoans";
import BusinessLoans from "./pages/loans/BusinessLoans";
import VehicleLoans from "./pages/loans/VehicleLoans";
import Calculators from "./pages/Calculators";
import Resources from "./pages/Resources";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/loans" element={<Loans />} />
          <Route path="/loans/personal" element={<PersonalLoans />} />
          <Route path="/loans/home" element={<HomeLoans />} />
          <Route path="/loans/business" element={<BusinessLoans />} />
          <Route path="/loans/vehicle" element={<VehicleLoans />} />
          <Route path="/calculators" element={<Calculators />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
