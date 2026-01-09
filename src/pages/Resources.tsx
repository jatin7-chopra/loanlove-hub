import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FileText, HelpCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";

const Resources = () => {
  const faqs = [
    { q: "What documents are required for a loan?", a: "Basic documents include PAN Card, Aadhaar Card, income proof (salary slips or ITR), bank statements, and address proof. Additional documents may vary by loan type." },
    { q: "How long does loan approval take?", a: "Personal and vehicle loans are typically approved within 24-48 hours. Home loans may take 3-7 working days due to property verification." },
    { q: "What is the minimum credit score required?", a: "A credit score of 700+ is preferred. However, eligibility varies by loan type and other factors like income and employment." },
    { q: "Can I prepay my loan?", a: "Yes, most loans can be prepaid after a certain period (usually 6-12 months). Some loans may have prepayment charges." },
    { q: "What is the difference between fixed and floating interest rates?", a: "Fixed rates remain constant throughout the tenure, while floating rates change based on market conditions and RBI policies." },
  ];

  const articles = [
    { title: "How to Improve Your Credit Score", desc: "Tips to boost your CIBIL score for better loan eligibility" },
    { title: "Home Loan Tax Benefits Explained", desc: "Understanding Section 80C and 24 deductions" },
    { title: "Personal Loan vs Credit Card", desc: "Which option is better for your financial needs?" },
    { title: "EMI Planning Guide", desc: "How to plan your EMIs without straining your budget" },
  ];

  return (
    <Layout>
      <section className="gradient-primary py-12">
        <div className="container text-primary-foreground text-center">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">Resources & FAQs</h1>
          <p className="text-lg opacity-90">Helpful guides and answers to common questions</p>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container grid lg:grid-cols-2 gap-8">
          <Card id="faq">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <HelpCircle className="h-6 w-6 text-primary" /> FAQs
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <FileText className="h-6 w-6 text-primary" /> Articles & Guides
              </h2>
              <div className="space-y-4">
                {articles.map((article, i) => (
                  <div key={i} className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors cursor-pointer">
                    <h3 className="font-semibold mb-1">{article.title}</h3>
                    <p className="text-sm text-muted-foreground">{article.desc}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Resources;
