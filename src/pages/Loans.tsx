import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Home, Building2, Car, ArrowRight, CheckCircle2, FileText, Clock, Percent } from "lucide-react";
import Layout from "@/components/layout/Layout";

const Loans = () => {
  const loanTypes = [
    {
      icon: User,
      title: "Personal Loans",
      description: "Quick unsecured loans for all your personal needs including medical emergencies, travel, education, or any other expenses.",
      features: ["No collateral required", "Quick disbursement", "Flexible tenure", "Minimal documentation"],
      rate: "10.5% - 24%",
      maxAmount: "₹25 Lakhs",
      tenure: "12 - 84 months",
      path: "/loans/personal",
      color: "bg-blue-500",
    },
    {
      icon: Home,
      title: "Home Loans",
      description: "Make your dream of owning a home a reality with our affordable home loans featuring attractive interest rates and long repayment tenure.",
      features: ["Low interest rates", "Up to 90% financing", "Tax benefits", "Balance transfer facility"],
      rate: "8.5% - 12%",
      maxAmount: "₹5 Crores",
      tenure: "Up to 30 years",
      path: "/loans/home",
      color: "bg-green-500",
    },
    {
      icon: Building2,
      title: "Business Loans",
      description: "Fuel your business growth with our flexible business financing solutions designed for entrepreneurs and established businesses.",
      features: ["Working capital loans", "Equipment financing", "Expansion funding", "Overdraft facilities"],
      rate: "12% - 26%",
      maxAmount: "₹50 Lakhs",
      tenure: "12 - 60 months",
      path: "/loans/business",
      color: "bg-purple-500",
    },
    {
      icon: Car,
      title: "Vehicle Loans",
      description: "Drive your dream vehicle with our easy financing options for new cars, used cars, two-wheelers, and commercial vehicles.",
      features: ["New & used vehicle financing", "Low down payment", "Quick approval", "Insurance bundled"],
      rate: "9.5% - 16%",
      maxAmount: "₹1 Crore",
      tenure: "12 - 84 months",
      path: "/loans/vehicle",
      color: "bg-orange-500",
    },
  ];

  const processSteps = [
    {
      step: 1,
      title: "Check Eligibility",
      description: "Use our eligibility checker to see if you qualify for the loan",
      icon: CheckCircle2,
    },
    {
      step: 2,
      title: "Submit Documents",
      description: "Upload required documents online for quick verification",
      icon: FileText,
    },
    {
      step: 3,
      title: "Get Approval",
      description: "Receive approval within 24-48 hours of application",
      icon: Clock,
    },
    {
      step: 4,
      title: "Receive Funds",
      description: "Money disbursed directly to your bank account",
      icon: Percent,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-primary py-12 lg:py-16">
        <div className="container text-primary-foreground text-center">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">Our Loan Products</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Explore our comprehensive range of loan products designed to meet all your financial needs
          </p>
        </div>
      </section>

      {/* Loan Types */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="space-y-8">
            {loanTypes.map((loan, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-3 gap-6">
                    {/* Main Info */}
                    <div className="lg:col-span-2 p-6 lg:p-8">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`w-14 h-14 rounded-xl ${loan.color} flex items-center justify-center shrink-0`}>
                          <loan.icon className="h-7 w-7 text-white" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold mb-2">{loan.title}</h2>
                          <p className="text-muted-foreground">{loan.description}</p>
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-3 mt-6">
                        {loan.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-success shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6">
                        <Button asChild>
                          <Link to={loan.path}>
                            Learn More <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>

                    {/* Quick Facts */}
                    <div className="bg-muted/50 p-6 lg:p-8 flex flex-col justify-center">
                      <h3 className="font-semibold mb-4 text-lg">Quick Facts</h3>
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Interest Rate</p>
                          <p className="text-xl font-bold text-success">{loan.rate} p.a.</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Maximum Amount</p>
                          <p className="text-xl font-bold">{loan.maxAmount}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Tenure</p>
                          <p className="text-lg font-semibold">{loan.tenure}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Simple Application Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get your loan approved in 4 simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-border" />
                )}
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link to="/calculators">
                <CheckCircle2 className="mr-2 h-5 w-5" />
                Check Your Eligibility
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Loans;
