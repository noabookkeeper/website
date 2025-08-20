import { CheckCircle } from "lucide-react";

const serviceBlocks = [
  {
    title: "Monthly Bookkeeping",
    subtitle: "Your books, reconciled and ready—month after month.",
    whatIncluded: [
      "Bank and credit card reconciliations",
      "Accounts payable and receivable management",
      "General ledger maintenance",
      "Monthly financial statement preparation",
      "Sales tax reporting and filing",
    ],
    whatYouGet: [
      "Always current financial records",
      "Monthly P&L and balance sheet",
      "Cash flow visibility",
      "Tax-ready documentation",
      "Peace of mind",
    ],
    whoItsFor: [
      "Small to medium businesses",
      "E-commerce companies",
      "Service-based businesses",
      "Growing startups",
    ],
  },
  {
    title: "Property Management Accounting",
    subtitle: "Rent rolls, owner statements, and expenses—accurately tracked.",
    whatIncluded: [
      "Tenant rent roll management",
      "Property expense tracking",
      "Owner distribution calculations",
      "Maintenance and repair categorization",
      "Trust accounting, track income and expense by property",
      "1099 preparation for contractors",
    ],
    whatYouGet: [
      "Detailed property performance reports",
      "Owner statements ready for distribution",
      "Expense optimization insights",
      "Streamlined tax preparation",
      "Compliance assurance",
    ],
    whoItsFor: [
      "Property management companies",
      "Real estate investors",
      "Landlords with multiple properties",
      "Property developers",
    ],
  },
  {
    title: "House Flippers",
    subtitle:
      "Track reno costs, profit margins, and timelines for every project.",
    whatIncluded: [
      "Project-based cost tracking",
      "Contractor and vendor management",
      "Material expense categorization",
      "Profit margin analysis",
      "Timeline and budget monitoring",
    ],
    whatYouGet: [
      "Real-time project profitability",
      "Cost control insights",
      "Tax-optimized expense tracking",
      "Project comparison reports",
      "Cash flow forecasting",
    ],
    whoItsFor: [
      "House flipping businesses",
      "Real estate developers",
      "Construction companies",
      "Renovation contractors",
    ],
  },
  {
    title: "CFO Advisory",
    subtitle: "Forecasts and strategy without a full-time hire.",
    whatIncluded: [
      "Monthly financial analysis",
      "Cash flow forecasting",
      "Budget planning and variance analysis",
      "KPI tracking and reporting",
      "Strategic planning support",
      "Process implementation",
    ],
    whatYouGet: [
      "Data-driven business insights",
      "Forward-looking financial planning",
      "Performance benchmarking",
      "Growth strategy support",
      "C-level financial expertise",
    ],
    whoItsFor: [
      "Growing businesses ($1M+ revenue)",
      "Startups seeking investment",
      "Companies planning expansion",
      "Businesses needing strategic guidance",
    ],
  },
];

export function ServiceBlocks() {
  return (
    <section 
      id="services"
      className="py-16 lg:py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Specialized Solutions for Your Industry
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We understand the unique accounting challenges of different business
            types and provide tailored solutions that fit your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-stretch mx-auto auto-rows-fr">
          {serviceBlocks.map((service, index) => (
            <div
              key={index}
              className="w-full h-full bg-white rounded-2xl p-10 lg:p-12 shadow-lg border border-gray-100 flex flex-col"
            >
              <div className="flex flex-col space-y-8 grow">
                <div className="space-y-4">
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl">
                    {service.subtitle}
                  </p>
                </div>

                <div className="space-y-6">
                  <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                    What&apos;s Included
                  </h4>
                  <ul className="flex flex-col space-y-3">
                    {service.whatIncluded.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle className="text-accent size-5 flex-shrink-0" />
                        <span className="text-base text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
