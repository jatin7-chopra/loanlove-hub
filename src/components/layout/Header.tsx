import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const loanTypes = [
    { name: "Personal Loans", path: "/loans/personal" },
    { name: "Home Loans", path: "/loans/home" },
    { name: "Business Loans", path: "/loans/business" },
    { name: "Vehicle Loans", path: "/loans/vehicle" },
  ];

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Calculators", path: "/calculators" },
    { name: "Resources", path: "/resources" },
    { name: "About Us", path: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg gradient-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">L</span>
          </div>
          <span className="font-bold text-xl text-foreground">LoanWise</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Home
          </Link>

          {/* Loans Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Loans <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              <DropdownMenuItem asChild>
                <Link to="/loans" className="w-full cursor-pointer">
                  All Loans
                </Link>
              </DropdownMenuItem>
              {loanTypes.map((loan) => (
                <DropdownMenuItem key={loan.path} asChild>
                  <Link to={loan.path} className="w-full cursor-pointer">
                    {loan.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {navLinks.slice(1).map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive(link.path) ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Contact & CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="tel:1800-123-4567"
            className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary"
          >
            <Phone className="mr-2 h-4 w-4" />
            1800-123-4567
          </a>
          <Button asChild>
            <Link to="/calculators">Check Eligibility</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-card">
          <nav className="container py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-2 text-sm font-medium transition-colors ${
                  isActive(link.path) ? "text-primary" : "text-muted-foreground"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="border-t pt-3 mt-3">
              <p className="text-xs text-muted-foreground mb-2">Loan Types</p>
              {loanTypes.map((loan) => (
                <Link
                  key={loan.path}
                  to={loan.path}
                  className="block py-2 text-sm text-muted-foreground hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {loan.name}
                </Link>
              ))}
            </div>
            <div className="border-t pt-3 mt-3 space-y-3">
              <a
                href="tel:1800-123-4567"
                className="flex items-center text-sm font-medium text-primary"
              >
                <Phone className="mr-2 h-4 w-4" />
                1800-123-4567
              </a>
              <Button className="w-full" asChild>
                <Link to="/calculators">Check Eligibility</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
