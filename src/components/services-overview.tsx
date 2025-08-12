import {
  Calculator,
  FileText,
  CreditCard,
  Users,
  BarChart3,
  Building2,
  Home,
  Hammer,
  Calendar,
  TrendingUp,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: Calculator,
    title: "Monthly Bookkeeping & Reconciliation",
    description: "Your books, reconciled and ready—month after month.",
  },
  {
    icon: FileText,
    title: "Catch-Up & Cleanup",
    description: "Behind on bookkeeping? We'll get you current—fast.",
  },
  {
    icon: CreditCard,
    title: "Invoicing, AP/AR & Expense Management",
    description: "Invoice out, pay bills on time, stay cash-flow positive.",
  },
  {
    icon: Users,
    title: "Payroll Management",
    description: "Payslips and filings—handled.",
  },
  {
    icon: BarChart3,
    title: "Financial Reporting",
    description: "See what matters—profit, runway, margins.",
  },
  {
    icon: Building2,
    title: "Property Management Accounting",
    description:
      "Rent rolls, owner statements, and expenses—accurately tracked.",
  },
  {
    icon: Home,
    title: "Landlords",
    description: "Rental income, expenses, and tenant management simplified.",
  },
  {
    icon: Hammer,
    title: "House Flippers",
    description:
      "Track reno costs, profit margins, and timelines for every project.",
  },
  {
    icon: Calendar,
    title: "Year-End & Audit Prep",
    description: "Audit-ready packs that save everyone time.",
  },
  {
    icon: TrendingUp,
    title: "CFO Advisory",
    description: "Forecasts and strategy without a full-time hire.",
  },
];

export function ServicesOverview() {
  return (
    <section
      id="services"
      className="py-20 lg:py-32 bg-secondary relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pattern-prosperity opacity-30"></div>
      <div className="absolute top-0 right-0 w-96 h-96 gradient-gold rounded-full opacity-10 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold">
            <Sparkles className="size-4" />
            Comprehensive Solutions
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
            Services that{" "}
            <span className="text-primary font-bold">amplify success</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From foundational bookkeeping to strategic financial guidance, we
            provide the expertise your business needs to flourish and prosper.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isFeature = index % 3 === 1; // Highlight every second card

            return (
              <div
                key={index}
                className={`group relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                  isFeature
                    ? "bg-white prosperity-shadow border-2 border-accent/20"
                    : "bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl border border-gray-100"
                }`}
              >
                {isFeature && (
                  <div className="absolute -top-3 -right-3 w-6 h-6 gradient-gold rounded-full flex items-center justify-center">
                    <Sparkles className="text-white size-3" />
                  </div>
                )}

                <div className="space-y-6">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                      isFeature ? "gradient-prosperity" : "gradient-green"
                    }`}
                  >
                    <Icon className="text-white size-8" strokeWidth={1.5} />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Decorative accent */}
                  <div
                    className={`w-12 h-1 rounded-full ${
                      isFeature ? "gradient-gold" : "bg-primary"
                    }`}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
