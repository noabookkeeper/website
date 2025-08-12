import { MessageSquare, Calendar, FileCheck, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Kickoff",
    description:
      "We understand your business, systems, and goals in a comprehensive onboarding session.",
  },
  {
    icon: Calendar,
    title: "Monthly Tasks",
    description:
      "Regular bookkeeping, reconciliations, and expense management on a fixed schedule.",
  },
  {
    icon: FileCheck,
    title: "Close & Report",
    description:
      "Monthly financial reports delivered on time with insights and recommendations.",
  },
  {
    icon: TrendingUp,
    title: "Optimize",
    description:
      "Ongoing advisory to improve cash flow, reduce costs, and plan for growth.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-20 lg:py-32 bg-white relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 gradient-green rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 gradient-gold rounded-full opacity-5 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
            Your path to{" "}
            <span className="text-primary font-bold">financial clarity</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A refined, systematic approach that transforms your financial chaos
            into organized prosperity, step by elegant step.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            // const isLastStep = index === steps.length - 1;

            return (
              <div key={index} className="relative group cursor-pointer">
                <div className="text-center space-y-8">
                  {/* Enhanced icon design */}
                  <div className="relative flex items-center justify-center">
                    <div className="w-24 h-24 gradient-prosperity rounded-2xl flex items-center justify-center prosperity-shadow group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                      <Icon
                        className="text-white size-12 group-hover:scale-110 transition-transform duration-300"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-700 leading-relaxed text-lg transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Enhanced number badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 gradient-gold rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {index + 1}
                </div>

                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10 transform group-hover:scale-105"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
