import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Users, Phone, Mail, MapPin } from "lucide-react";
import Layout from "@/components/layout/Layout";

const About = () => {
  return (
    <Layout>
      <section className="gradient-primary py-12">
        <div className="container text-primary-foreground text-center">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">About LoanWise</h1>
          <p className="text-lg opacity-90">Your trusted partner for financial solutions</p>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground">
              At LoanWise, we believe everyone deserves access to fair and transparent financial solutions. 
              Our mission is to simplify the borrowing process and help you achieve your financial goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Shield, title: "Trusted", desc: "Bank-grade security and transparent processes" },
              { icon: Award, title: "Award Winning", desc: "Recognized for customer service excellence" },
              { icon: Users, title: "10,000+ Customers", desc: "Trusted by thousands across India" },
            ].map((item, i) => (
              <Card key={i}>
                <CardContent className="p-6 text-center">
                  <item.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card id="contact">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-muted-foreground">1800-123-4567 (Toll Free)</p>
                    <p className="text-sm text-muted-foreground">Mon-Sat, 9 AM - 6 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-muted-foreground">support@loanwise.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <h4 className="font-semibold">Head Office</h4>
                    <p className="text-muted-foreground">123 Financial District, Mumbai 400001</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default About;
