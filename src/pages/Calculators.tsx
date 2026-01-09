import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, CheckCircle2, BarChart3, User, Home, Building2, Car } from "lucide-react";
import Layout from "@/components/layout/Layout";
import EMICalculator from "@/components/calculators/EMICalculator";

const Calculators = () => {
  const [eligibility, setEligibility] = useState({ income: "", age: "", loanType: "" });
  const [eligibilityResult, setEligibilityResult] = useState<string | null>(null);

  const checkEligibility = () => {
    const income = parseInt(eligibility.income) || 0;
    const age = parseInt(eligibility.age) || 0;
    if (age >= 21 && age <= 60 && income >= 25000) {
      const maxLoan = income * 40;
      setEligibilityResult(`Congratulations! You may be eligible for a loan up to ₹${maxLoan.toLocaleString("en-IN")}`);
    } else {
      setEligibilityResult("Based on the information provided, you may not meet our minimum eligibility criteria.");
    }
  };

  const loanRates = [
    { icon: User, type: "Personal Loan", rate: "10.5% - 24%", processing: "Up to 2%", tenure: "1-7 years" },
    { icon: Home, type: "Home Loan", rate: "8.5% - 12%", processing: "Up to 1%", tenure: "5-30 years" },
    { icon: Building2, type: "Business Loan", rate: "12% - 26%", processing: "Up to 2.5%", tenure: "1-5 years" },
    { icon: Car, type: "Vehicle Loan", rate: "9.5% - 16%", processing: "Up to 2%", tenure: "1-7 years" },
  ];

  return (
    <Layout>
      <section className="gradient-primary py-12">
        <div className="container text-primary-foreground text-center">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">Loan Calculators & Tools</h1>
          <p className="text-lg opacity-90">Plan your finances with our interactive tools</p>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container space-y-12">
          <EMICalculator />

          <Card id="eligibility">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="h-6 w-6 text-primary" />
                Eligibility Checker
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4">
                <div>
                  <Label>Monthly Income (₹)</Label>
                  <Input type="number" placeholder="e.g., 50000" value={eligibility.income} onChange={(e) => setEligibility({ ...eligibility, income: e.target.value })} />
                </div>
                <div>
                  <Label>Age (Years)</Label>
                  <Input type="number" placeholder="e.g., 30" value={eligibility.age} onChange={(e) => setEligibility({ ...eligibility, age: e.target.value })} />
                </div>
                <div>
                  <Label>Loan Type</Label>
                  <Select value={eligibility.loanType} onValueChange={(v) => setEligibility({ ...eligibility, loanType: v })}>
                    <SelectTrigger><SelectValue placeholder="Select loan" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="personal">Personal Loan</SelectItem>
                      <SelectItem value="home">Home Loan</SelectItem>
                      <SelectItem value="business">Business Loan</SelectItem>
                      <SelectItem value="vehicle">Vehicle Loan</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-end">
                  <Button onClick={checkEligibility} className="w-full">Check Eligibility</Button>
                </div>
              </div>
              {eligibilityResult && (
                <div className={`mt-4 p-4 rounded-lg ${eligibilityResult.includes("Congratulations") ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"}`}>
                  {eligibilityResult}
                </div>
              )}
            </CardContent>
          </Card>

          <Card id="rates">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-6 w-6 text-primary" />
                Current Interest Rates
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {loanRates.map((loan, i) => (
                  <div key={i} className="bg-muted/50 rounded-lg p-4 text-center">
                    <loan.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <h4 className="font-semibold mb-2">{loan.type}</h4>
                    <p className="text-2xl font-bold text-success">{loan.rate}</p>
                    <p className="text-xs text-muted-foreground mt-2">Processing: {loan.processing}</p>
                    <p className="text-xs text-muted-foreground">Tenure: {loan.tenure}</p>
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

export default Calculators;
