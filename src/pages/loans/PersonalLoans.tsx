import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, CheckCircle2, FileText, AlertCircle, ArrowRight, Calculator } from "lucide-react";
import Layout from "@/components/layout/Layout";

const PersonalLoans = () => {
  const features = [
    "Loan amount from ₹50,000 to ₹25 Lakhs",
    "Attractive interest rates starting from 10.5% p.a.",
    "Flexible tenure from 12 to 84 months",
    "No collateral or security required",
    "Quick approval within 24 hours",
    "Minimal documentation",
    "No prepayment charges after 12 months",
    "Balance transfer facility available",
  ];

  const eligibilityCriteria = [
    { label: "Age", value: "21 to 60 years" },
    { label: "Income", value: "Minimum ₹25,000/month" },
    { label: "Employment", value: "Salaried or Self-employed" },
    { label: "Credit Score", value: "700 and above" },
    { label: "Work Experience", value: "Minimum 1 year" },
  ];

  const documents = {
    salaried: [
      "PAN Card & Aadhaar Card",
      "Last 3 months salary slips",
      "Last 6 months bank statements",
      "Address proof",
      "Passport size photographs",
    ],
    selfEmployed: [
      "PAN Card & Aadhaar Card",
      "Business proof documents",
      "Last 2 years ITR",
      "Last 12 months bank statements",
      "Address proof",
    ],
  };

  const useCases = [
    "Medical emergencies",
    "Wedding expenses",
    "Home renovation",
    "Debt consolidation",
    "Education expenses",
    "Travel & vacation",
    "Gadgets & electronics",
    "Any personal needs",
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-blue-600 py-12 lg:py-16">
        <div className="container text-white">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center">
              <User className="h-7 w-7" />
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold">Personal Loans</h1>
          </div>
          <p className="text-lg opacity-90 max-w-2xl mb-6">
            Get instant personal loans with minimal documentation and quick approval. 
            Fulfill your dreams without any collateral.
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
              <p className="text-2xl font-bold text-primary">10.5%</p>
              <p className="text-sm text-muted-foreground">Starting Interest Rate</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">₹25 Lakhs</p>
              <p className="text-sm text-muted-foreground">Maximum Loan Amount</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">84 Months</p>
              <p className="text-sm text-muted-foreground">Maximum Tenure</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">24 Hours</p>
              <p className="text-sm text-muted-foreground">Quick Approval</p>
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

              {/* Use Cases */}
              <Card>
                <CardHeader>
                  <CardTitle>What Can You Use It For?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {useCases.map((useCase, index) => (
                      <div key={index} className="bg-muted/50 rounded-lg p-3 text-center text-sm">
                        {useCase}
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
                    Plan your loan with our easy EMI calculator
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
                    Talk to our loan experts for personalized assistance
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
          <h2 className="text-2xl font-bold mb-4">Ready to Apply for a Personal Loan?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get instant approval and have funds in your account within 24 hours
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

export default PersonalLoans;
