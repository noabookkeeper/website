"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Star } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    monthlyPrice: 299,
    annualPrice: 3229, // 10% discount
    description: "Perfect for small businesses and startups",
    features: [
      "Monthly bookkeeping & reconciliation",
      "Basic financial reports (P&L, Balance Sheet)",
      "Expense categorization",
      "Bank reconciliation (2 accounts)",
      "Email support",
      "Quarterly business review",
    ],
    addOns: [
      "Additional bank accounts (+€50/month each)",
      "Payroll processing (+€100/month)",
      "Sales tax filing (+€75/month)",
    ],
    popular: false,
  },
  {
    name: "Growth",
    monthlyPrice: 599,
    annualPrice: 6469, // 10% discount
    description: "Ideal for growing businesses with complex needs",
    features: [
      "Everything in Starter",
      "Accounts payable & receivable management",
      "Monthly financial analysis",
      "Cash flow forecasting",
      "Unlimited bank account reconciliation",
      "Priority support",
      "Monthly business review call",
      "Basic tax preparation support",
    ],
    addOns: [
      "CFO advisory hours (+€150/hour)",
      "Property management reporting (+€200/month)",
      "Custom reporting (+€100/month)",
    ],
    popular: true,
  },
  {
    name: "Pro",
    monthlyPrice: 999,
    annualPrice: 10789, // 10% discount
    description: "Comprehensive solution for established businesses",
    features: [
      "Everything in Growth",
      "Advanced financial reporting & KPIs",
      "Budget planning & variance analysis",
      "Multi-entity consolidation",
      "Dedicated account manager",
      "Weekly check-ins",
      "Audit preparation support",
      "Strategic planning sessions",
    ],
    addOns: [
      "Additional entities (+€300/month each)",
      "Advanced forecasting models (+€250/month)",
      "Board reporting packages (+€200/month)",
    ],
    popular: false,
  },
  {
    name: "Custom",
    monthlyPrice: null,
    annualPrice: null,
    description: "Tailored solutions for enterprise clients",
    features: [
      "Custom service package",
      "Dedicated team assignment",
      "Advanced integrations",
      "Custom reporting solutions",
      "On-site support available",
      "SLA guarantees",
      "Executive advisory services",
    ],
    addOns: [],
    popular: false,
  },
];

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fixed-fee plans that scale with your business. No surprises, no
            hidden costs.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 pt-8">
            <span
              className={`${
                !isAnnual ? "text-gray-900 font-semibold" : "text-gray-500"
              }`}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isAnnual ? "bg-[--brand-green]" : "bg-gray-200"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
            <span
              className={`${
                isAnnual ? "text-gray-900 font-semibold" : "text-gray-500"
              }`}
            >
              Annual
            </span>
            <span className="bg-[--brand-gold] text-white px-2 py-1 rounded-full text-xs font-semibold">
              Save 10%
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl border-2 p-8 ${
                plan.popular
                  ? "border-[--brand-green] bg-[--brand-green]/5"
                  : "border-gray-200 bg-white"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[--brand-green] text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="size-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-gray-900">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{plan.description}</p>
                </div>

                <div className="space-y-1">
                  {plan.monthlyPrice ? (
                    <>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold text-gray-900">
                          €
                          {isAnnual
                            ? Math.round(plan.annualPrice / 12)
                            : plan.monthlyPrice}
                        </span>
                        <span className="text-gray-500">/month</span>
                      </div>
                      {isAnnual && (
                        <p className="text-sm text-[--brand-green] font-medium">
                          €{plan.annualPrice} billed annually
                        </p>
                      )}
                    </>
                  ) : (
                    <div className="text-3xl font-bold text-gray-900">
                      Custom
                    </div>
                  )}
                </div>

                <Button
                  onClick={scrollToContact}
                  className={`w-full ${
                    plan.popular
                      ? "bg-[--brand-green] hover:bg-[--brand-green-dark] text-white"
                      : "bg-gray-900 hover:bg-gray-800 text-white"
                  }`}
                >
                  {plan.monthlyPrice
                    ? "Start with Free Quote"
                    : "Contact Sales"}
                </Button>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">
                    What&apos;s included:
                  </h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="text-[--brand-green] size-4 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {plan.addOns.length > 0 && (
                  <div className="space-y-4 pt-4 border-t border-gray-200">
                    <h4 className="font-semibold text-gray-900 text-sm">
                      Add-ons available:
                    </h4>
                    <ul className="space-y-2">
                      {plan.addOns.map((addOn, idx) => (
                        <li key={idx} className="text-xs text-gray-600">
                          • {addOn}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Not sure which plan is right for you?
          </p>
          <Button
            variant="outline"
            onClick={scrollToContact}
            className="border-[--brand-green] text-[--brand-green] hover:bg-[--brand-green] hover:text-white"
          >
            Get a Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
