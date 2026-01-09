import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, CheckCircle2, FileText, AlertCircle, ArrowRight, Calculator, TrendingDown } from "lucide-react";
import Layout from "@/components/layout/Layout";

const HomeLoans = () => {
  const features = [
    "Loan amount from ₹10 Lakhs to ₹5 Crores",
    "Interest rates starting from 8.5% p.a.",
    "Tenure up to 30 years",
    "Up to 90% of property value financed",
    "Tax benefits under Section 80C & 24",
    "Balance transfer facility available",
    "Top-up loan facility",
    "No prepayment charges on floating rate",
  ];

  const eligibilityCriteria = [
    { label: "Age", value: "21 to 65 years" },
    { label: "Income", value: "Minimum ₹35,000/month" },
    { label: "Employment", value: "Salaried or Self-employed" },
    { label: "Credit Score", value: "750 and above" },
    { label: "Work Experience", value: "Minimum 2 years" },
  ];

  const documents = {
    salaried: [
      "PAN Card & Aadhaar Card",
      "Last 6 months salary slips",
      "Last 2 years Form 16",
      "Last 6 months bank statements",
      "Property documents",
      "Address proof",
    ],
    selfEmployed: [
      "PAN Card & Aadhaar Card",
      "Last 3 years ITR with computation",
      "Business proof documents",
      "Last 12 months bank statements",
      "Property documents",
      "GST returns (if applicable)",
    ],
  };

  const loanTypes = [
    { type: "Home Purchase", description: "For buying a new or resale property" },
    { type: "Home Construction", description: "For constructing a house on your plot" },
    { type: "Home Improvement", description: "For renovation and repair work" },
    { type: "Plot Purchase", description: "For buying a residential plot" },
    { type: "Balance Transfer", description: "Transfer existing loan for lower rates" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-green-600 py-12 lg:py-16">
        <div className="container text-white">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center">
              <Home className="h-7 w-7" />
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold">Home Loans</h1>
          </div>
          <p className="text-lg opacity-90 max-w-2xl mb-6">
            Turn your dream of owning a home into reality with our affordable home loans. 
            Enjoy attractive interest rates and long repayment tenure.
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
              <p className="text-2xl font-bold text-primary">8.5%</p>
              <p className="text-sm text-muted-foreground">Starting Interest Rate</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">₹5 Crores</p>
              <p className="text-sm text-muted-foreground">Maximum Loan Amount</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">30 Years</p>
              <p className="text-sm text-muted-foreground">Maximum Tenure</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">90%</p>
              <p className="text-sm text-muted-foreground">Loan to Value Ratio</p>
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

              {/* Loan Types */}
              <Card>
                <CardHeader>
                  <CardTitle>Types of Home Loans</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {loanTypes.map((loan, index) => (
                      <div key={index} className="bg-muted/50 rounded-lg p-4">
                        <h4 className="font-semibold mb-1">{loan.type}</h4>
                        <p className="text-sm text-muted-foreground">{loan.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Tax Benefits */}
              <Card className="border-success/50 bg-success/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-success">
                    <TrendingDown className="h-5 w-5" />
                    Tax Benefits on Home Loan
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Section 24 - Interest Deduction</h4>
                      <p className="text-sm text-muted-foreground">
                        Claim up to ₹2 Lakhs per year on interest paid for self-occupied property. 
                        No limit for rented property.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Section 80C - Principal Deduction</h4>
                      <p className="text-sm text-muted-foreground">
                        Claim up to ₹1.5 Lakhs per year on principal repayment along with other 
                        80C investments.
                      </p>
                    </div>
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
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">For Salaried Individuals</h4>
                      <ul className="space-y-2">
                        {documents.salaried.map((doc, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="h-4 w-4 text-success mt-0.5" />
                            {doc}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">For Self-Employed</h4>
                      <ul className="space-y-2">
                        {documents.selfEmployed.map((doc, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="h-4 w-4 text-success mt-0.5" />
                            {doc}
                          </li>
                        ))}
                      </ul>
                    </div>
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
                    Plan your home loan with our easy EMI calculator
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
                    Talk to our home loan experts for personalized assistance
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
          <h2 className="text-2xl font-bold mb-4">Ready to Buy Your Dream Home?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get pre-approved for a home loan and start your home buying journey with confidence
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link to="/calculators#eligibility">Get Pre-Approved</Link>
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

export default HomeLoans;
