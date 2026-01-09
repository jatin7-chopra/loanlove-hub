import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  User, 
  Home, 
  Building2, 
  Car, 
  ArrowRight, 
  CheckCircle2,
  TrendingUp,
  Shield,
  Clock,
  Users,
  Star
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import EMICalculator from "@/components/calculators/EMICalculator";

const Index = () => {
  const loanTypes = [
    {
      icon: User,
      title: "Personal Loans",
      description: "Quick personal loans for your immediate needs with minimal documentation.",
      rate: "10.5%",
      maxAmount: "₹25 Lakhs",
      path: "/loans/personal",
      color: "bg-blue-500",
    },
    {
      icon: Home,
      title: "Home Loans",
      description: "Make your dream home a reality with attractive interest rates.",
      rate: "8.5%",
      maxAmount: "₹5 Crores",
      path: "/loans/home",
      color: "bg-green-500",
    },
    {
      icon: Building2,
      title: "Business Loans",
      description: "Fuel your business growth with flexible financing options.",
      rate: "12%",
      maxAmount: "₹50 Lakhs",
      path: "/loans/business",
      color: "bg-purple-500",
    },
    {
      icon: Car,
      title: "Vehicle Loans",
      description: "Drive your dream car home with easy EMI options.",
      rate: "9.5%",
      maxAmount: "₹1 Crore",
      path: "/loans/vehicle",
      color: "bg-orange-500",
    },
  ];

  const features = [
    {
      icon: TrendingUp,
      title: "Competitive Rates",
      description: "Enjoy the lowest interest rates in the market starting from 8.5% p.a.",
    },
    {
      icon: Clock,
      title: "Quick Approval",
      description: "Get your loan approved within 24-48 hours with minimal documentation.",
    },
    {
      icon: Shield,
      title: "100% Secure",
      description: "Your data is protected with bank-grade security and encryption.",
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Dedicated relationship managers to guide you through the process.",
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Business Owner",
      content: "LoanWise helped me get a business loan in just 3 days. The process was smooth and the interest rate was very competitive.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      role: "IT Professional",
      content: "I was able to buy my dream home thanks to their excellent home loan rates. The EMI calculator helped me plan my finances perfectly.",
      rating: 5,
    },
    {
      name: "Amit Patel",
      role: "Doctor",
      content: "Quick personal loan approval when I needed it most. Highly recommend their services for anyone looking for hassle-free loans.",
      rating: 5,
    },
  ];

  const stats = [
    { value: "10,000+", label: "Happy Customers" },
    { value: "₹500Cr+", label: "Loans Disbursed" },
    { value: "24 Hours", label: "Quick Approval" },
    { value: "4.8/5", label: "Customer Rating" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-primary py-16 lg:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-primary-foreground animate-fade-in">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Your Trusted Partner for All Financial Solutions
              </h1>
              <p className="text-lg lg:text-xl opacity-90 mb-8">
                Get instant loans with competitive interest rates, minimal documentation, 
                and quick approval. Start your journey towards financial freedom today.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/loans">Explore Loans</Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10" asChild>
                  <Link to="/calculators">Calculate EMI</Link>
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap gap-6 mt-10 pt-6 border-t border-primary-foreground/20">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm opacity-80">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick EMI Calculator */}
            <div className="animate-fade-in lg:animate-slide-in">
              <EMICalculator compact />
            </div>
          </div>
        </div>
      </section>

      {/* Loan Types Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Loan Products</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from our wide range of loan products designed to meet all your financial needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {loanTypes.map((loan, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-lg ${loan.color} flex items-center justify-center mb-4`}>
                    <loan.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{loan.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{loan.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Starting Rate</span>
                      <span className="font-semibold text-success">{loan.rate} p.a.</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Max Amount</span>
                      <span className="font-semibold">{loan.maxAmount}</span>
                    </div>
                  </div>

                  <Link 
                    to={loan.path}
                    className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all"
                  >
                    Learn More <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button size="lg" asChild>
              <Link to="/loans">View All Loan Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose LoanWise?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We make borrowing simple, transparent, and hassle-free
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interest Rates Quick View */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Current Interest Rates</h2>
            <p className="text-muted-foreground">Transparent rates with no hidden charges</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-muted">
                      <tr>
                        <th className="text-left p-4 font-semibold">Loan Type</th>
                        <th className="text-center p-4 font-semibold">Interest Rate</th>
                        <th className="text-center p-4 font-semibold">Processing Fee</th>
                        <th className="text-center p-4 font-semibold">Max Tenure</th>
                        <th className="text-right p-4 font-semibold">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {loanTypes.map((loan, index) => (
                        <tr key={index} className="border-t border-border">
                          <td className="p-4">
                            <div className="flex items-center gap-3">
                              <div className={`w-8 h-8 rounded ${loan.color} flex items-center justify-center`}>
                                <loan.icon className="h-4 w-4 text-white" />
                              </div>
                              <span className="font-medium">{loan.title}</span>
                            </div>
                          </td>
                          <td className="text-center p-4">
                            <span className="text-success font-semibold">{loan.rate}</span> onwards
                          </td>
                          <td className="text-center p-4">Up to 2%</td>
                          <td className="text-center p-4">{loan.title.includes("Home") ? "30 Years" : "7 Years"}</td>
                          <td className="text-right p-4">
                            <Button variant="outline" size="sm" asChild>
                              <Link to={loan.path}>Apply Now</Link>
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-muted-foreground">Trusted by thousands of satisfied customers</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.content}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-primary">
        <div className="container text-center text-primary-foreground">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Check your eligibility in just 2 minutes and get the best loan offers tailored for you
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/calculators">
                <CheckCircle2 className="mr-2 h-5 w-5" />
                Check Eligibility
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link to="/about#contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
