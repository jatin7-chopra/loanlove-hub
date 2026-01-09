import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IndianRupee } from "lucide-react";

interface EMICalculatorProps {
  compact?: boolean;
}

const EMICalculator = ({ compact = false }: EMICalculatorProps) => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(10.5);
  const [tenure, setTenure] = useState(24);

  const calculateEMI = () => {
    const principal = loanAmount;
    const monthlyRate = interestRate / 100 / 12;
    const months = tenure;

    if (monthlyRate === 0) {
      return principal / months;
    }

    const emi =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);

    return emi;
  };

  const emi = calculateEMI();
  const totalPayment = emi * tenure;
  const totalInterest = totalPayment - loanAmount;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  if (compact) {
    return (
      <Card className="bg-card border-border">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg flex items-center gap-2">
            <IndianRupee className="h-5 w-5 text-primary" />
            Quick EMI Calculator
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-muted-foreground">Loan Amount</span>
              <span className="font-medium">{formatCurrency(loanAmount)}</span>
            </div>
            <Slider
              value={[loanAmount]}
              onValueChange={(value) => setLoanAmount(value[0])}
              min={50000}
              max={5000000}
              step={10000}
              className="w-full"
            />
          </div>

          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-muted-foreground">Interest Rate</span>
              <span className="font-medium">{interestRate}%</span>
            </div>
            <Slider
              value={[interestRate]}
              onValueChange={(value) => setInterestRate(value[0])}
              min={5}
              max={25}
              step={0.1}
              className="w-full"
            />
          </div>

          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-muted-foreground">Tenure (Months)</span>
              <span className="font-medium">{tenure} months</span>
            </div>
            <Slider
              value={[tenure]}
              onValueChange={(value) => setTenure(value[0])}
              min={6}
              max={84}
              step={1}
              className="w-full"
            />
          </div>

          <div className="pt-4 border-t">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Monthly EMI</p>
              <p className="text-2xl font-bold text-primary">{formatCurrency(emi)}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2">
          <IndianRupee className="h-6 w-6 text-primary" />
          EMI Calculator
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Sliders */}
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm mb-3">
                <span className="font-medium">Loan Amount</span>
                <span className="font-semibold text-primary">{formatCurrency(loanAmount)}</span>
              </div>
              <Slider
                value={[loanAmount]}
                onValueChange={(value) => setLoanAmount(value[0])}
                min={50000}
                max={10000000}
                step={10000}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>₹50K</span>
                <span>₹1Cr</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-3">
                <span className="font-medium">Interest Rate (% p.a.)</span>
                <span className="font-semibold text-primary">{interestRate}%</span>
              </div>
              <Slider
                value={[interestRate]}
                onValueChange={(value) => setInterestRate(value[0])}
                min={5}
                max={30}
                step={0.1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>5%</span>
                <span>30%</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-3">
                <span className="font-medium">Loan Tenure</span>
                <span className="font-semibold text-primary">{tenure} months ({(tenure / 12).toFixed(1)} years)</span>
              </div>
              <Slider
                value={[tenure]}
                onValueChange={(value) => setTenure(value[0])}
                min={6}
                max={360}
                step={6}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>6 months</span>
                <span>30 years</span>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-4">
            <div className="bg-primary/5 rounded-lg p-6 text-center">
              <p className="text-sm text-muted-foreground mb-1">Monthly EMI</p>
              <p className="text-4xl font-bold text-primary">{formatCurrency(emi)}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-muted/50 rounded-lg p-4 text-center">
                <p className="text-xs text-muted-foreground mb-1">Total Interest</p>
                <p className="text-lg font-semibold text-accent">{formatCurrency(totalInterest)}</p>
              </div>
              <div className="bg-muted/50 rounded-lg p-4 text-center">
                <p className="text-xs text-muted-foreground mb-1">Total Payment</p>
                <p className="text-lg font-semibold">{formatCurrency(totalPayment)}</p>
              </div>
            </div>

            {/* Visual breakdown */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Principal</span>
                <span className="font-medium">{formatCurrency(loanAmount)}</span>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary transition-all"
                  style={{ width: `${(loanAmount / totalPayment) * 100}%` }}
                />
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Interest</span>
                <span className="font-medium">{formatCurrency(totalInterest)}</span>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-accent transition-all"
                  style={{ width: `${(totalInterest / totalPayment) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EMICalculator;
