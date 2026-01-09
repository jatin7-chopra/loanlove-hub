import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const loanLinks = [
    { name: "Personal Loans", path: "/loans/personal" },
    { name: "Home Loans", path: "/loans/home" },
    { name: "Business Loans", path: "/loans/business" },
    { name: "Vehicle Loans", path: "/loans/vehicle" },
  ];

  const quickLinks = [
    { name: "EMI Calculator", path: "/calculators" },
    { name: "Eligibility Checker", path: "/calculators#eligibility" },
    { name: "Compare Loans", path: "/calculators#compare" },
    { name: "Interest Rates", path: "/calculators#rates" },
  ];

  const companyLinks = [
    { name: "About Us", path: "/about" },
    { name: "Resources & Blog", path: "/resources" },
    { name: "FAQs", path: "/resources#faq" },
    { name: "Contact Us", path: "/about#contact" },
  ];

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">L</span>
              </div>
              <span className="font-bold text-xl">LoanWise</span>
            </div>
            <p className="text-sm text-primary-foreground/70">
              Your trusted partner for all financial solutions. We provide transparent, 
              hassle-free loans with competitive interest rates.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="h-9 w-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="h-9 w-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="h-9 w-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="h-9 w-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Loan Products */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Loan Products</h3>
            <ul className="space-y-2">
              {loanLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="h-4 w-4 mt-1 text-accent" />
                <div>
                  <p className="text-sm font-medium">Toll Free</p>
                  <a href="tel:1800-123-4567" className="text-sm text-primary-foreground/70 hover:text-primary-foreground">
                    1800-123-4567
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-4 w-4 mt-1 text-accent" />
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <a href="mailto:support@loanwise.com" className="text-sm text-primary-foreground/70 hover:text-primary-foreground">
                    support@loanwise.com
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-1 text-accent" />
                <div>
                  <p className="text-sm font-medium">Head Office</p>
                  <p className="text-sm text-primary-foreground/70">
                    123 Financial District,<br />
                    Mumbai, Maharashtra 400001
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-primary-foreground/70">
              © {currentYear} LoanWise. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm text-primary-foreground/70 hover:text-primary-foreground">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-primary-foreground/70 hover:text-primary-foreground">
                Terms of Service
              </Link>
              <Link to="/disclaimer" className="text-sm text-primary-foreground/70 hover:text-primary-foreground">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
