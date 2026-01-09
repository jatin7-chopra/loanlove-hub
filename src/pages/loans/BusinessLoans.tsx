import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, CheckCircle2, FileText, AlertCircle, ArrowRight, Calculator, Briefcase, TrendingUp } from "lucide-react";
import Layout from "@/components/layout/Layout";

const BusinessLoans = () => {
  const features = [
    "Loan amount from ₹5 Lakhs to ₹50 Lakhs",
    "Interest rates starting from 12% p.a.",
    "Flexible tenure from 12 to 60 months",
    "Collateral-free options available",
    "Quick disbursement within 48 hours",
    "Minimal documentation for existing businesses",
    "Overdraft facility available",
    "Working capital and term loan options",
  ];

  const eligibilityCriteria = [
    { label: "Business Age", value: "Minimum 2 years" },
    { label: "Annual Turnover", value: "Minimum ₹20 Lakhs" },
    { label: "Age of Applicant", value: "21 to 65 years" },
    { label: "Credit Score", value: "700 and above" },
    { label: "Profitability", value: "2 years of profits" },
  ];

  const documents = [
    "PAN Card of business and proprietor",
    "Aadhaar Card of proprietor/partners/directors",
    "Business registration documents",
    "Last 3 years ITR with computation",
    "Last 3 years audited financials",
    "Last 12 months bank statements",
    "GST registration and returns",
    "Address proof of business premises",
  ];

  const loanTypes = [
    { 
      icon: Briefcase,
      type: "Working Capital Loan", 
      description: "Meet day-to-day operational expenses and manage cash flow gaps",
      amount: "Up to ₹50 Lakhs"
    },
    { 
      icon: TrendingUp,
      type: "Term Loan", 
      description: "Long-term financing for business expansion and growth",
      amount: "Up to ₹50 Lakhs"
    },
    { 
      icon: Building2,
      type: "Equipment Financing", 
      description: "Purchase machinery, equipment, and business assets",
      amount: "Up to ₹40 Lakhs"
    },
    { 
      icon: Calculator,
      type: "Business Line of Credit", 
      description: "Revolving credit facility for flexible borrowing",
      amount: "Up to ₹25 Lakhs"
    },
  ];

  const businessTypes = [
    "Sole Proprietorship",
    "Partnership Firm",
    "Private Limited Company",
    "LLP",
    "Traders & Retailers",
    "Manufacturers",
    "Service Providers",
    "Professionals",
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-purple-600 py-12 lg:py-16">
        <div className="container text-white">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center">
              <Building2 className="h-7 w-7" />
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold">Business Loans</h1>
          </div>
          <p className="text-lg opacity-90 max-w-2xl mb-6">
            Fuel your business growth with our flexible financing solutions. 
            Quick approval, minimal documentation, and competitive rates.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/calculators">Calculate EMI</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10" asChild>
              <Link to="/calculators#eligibility">Check Eligibility</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-8 bg-background border-b">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">12%</p>
              <p className="text-sm text-muted-foreground">Starting Interest Rate</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">₹50 Lakhs</p>
              <p className="text-sm text-muted-foreground">Maximum Loan Amount</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">60 Months</p>
              <p className="text-sm text-muted-foreground">Maximum Tenure</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">48 Hours</p>
              <p className="text-sm text-muted-foreground">Quick Disbursement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Loan Types */}
              <Card>
                <CardHeader>
                  <CardTitle>Types of Business Loans</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {loanTypes.map((loan, index) => (
                      <div key={index} className="bg-muted/50 rounded-lg p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                            <loan.icon className="h-5 w-5 text-purple-600" />
                          </div>
                          <h4 className="font-semibold">{loan.type}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{loan.description}</p>
                        <p className="text-sm font-medium text-primary">{loan.amount}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Features */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    Key Features & Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-success mt-1 shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Eligible Business Types */}
              <Card>
                <CardHeader>
                  <CardTitle>Eligible Business Types</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {businessTypes.map((type, index) => (
                      <div key={index} className="bg-muted/50 rounded-lg p-3 text-center text-sm">
                        {type}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Documents Required */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    Documents Required
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {documents.map((doc, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-success mt-1 shrink-0" />
                        <span className="text-sm">{doc}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              {/* Eligibility Criteria */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-primary" />
                    Eligibility Criteria
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {eligibilityCriteria.map((criteria, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                        <span className="text-sm text-muted-foreground">{criteria.label}</span>
                        <span className="text-sm font-medium">{criteria.value}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-4" asChild>
                    <Link to="/calculators#eligibility">Check Your Eligibility</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* EMI Calculator Card */}
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6 text-center">
                  <Calculator className="h-12 w-12 mx-auto mb-4 opacity-90" />
                  <h3 className="text-xl font-bold mb-2">Calculate Your EMI</h3>
                  <p className="text-sm opacity-90 mb-4">
                    Plan your business loan with our easy EMI calculator
                  </p>
                  <Button variant="secondary" className="w-full" asChild>
                    <Link to="/calculators">
                      Calculate Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Card */}
              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold mb-2">Need Help?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Talk to our business loan experts for personalized assistance
                  </p>
                  <p className="text-xl font-bold text-primary">1800-123-4567</p>
                  <p className="text-xs text-muted-foreground mt-1">Toll Free | 9 AM - 6 PM</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-muted/30">
        <div className="container text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Grow Your Business?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get the funding you need to take your business to the next level
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link to="/calculators#eligibility">Check Eligibility</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/loans">View Other Loans</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BusinessLoans;
