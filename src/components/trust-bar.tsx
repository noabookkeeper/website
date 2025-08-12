import { Star } from "lucide-react";

export function TrustBar() {
  return (
    <section className="bg-white py-12 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">
            Trusted by growing businesses
          </p>

          {/* Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center space-y-2">
              <div className="flex justify-center items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-[--brand-gold] size-5 fill-current"
                  />
                ))}
              </div>
              <div className="text-2xl font-bold text-gray-900">5.0 Rating</div>
              <div className="text-gray-600">Based on 150+ reviews</div>
            </div>

            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-[--brand-green]">
                500+
              </div>
              <div className="text-gray-600">Businesses served</div>
            </div>

            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-[--brand-green]">
                &lt;24h
              </div>
              <div className="text-gray-600">Average response time</div>
            </div>
          </div>

          {/* Client Logos Placeholder */}
          <div className="pt-8 border-t border-gray-100">
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="bg-gray-200 h-12 w-32 rounded flex items-center justify-center">
                <span className="text-gray-500 text-sm font-medium">
                  Client Logo
                </span>
              </div>
              <div className="bg-gray-200 h-12 w-32 rounded flex items-center justify-center">
                <span className="text-gray-500 text-sm font-medium">
                  Client Logo
                </span>
              </div>
              <div className="bg-gray-200 h-12 w-32 rounded flex items-center justify-center">
                <span className="text-gray-500 text-sm font-medium">
                  Client Logo
                </span>
              </div>
              <div className="bg-gray-200 h-12 w-32 rounded flex items-center justify-center">
                <span className="text-gray-500 text-sm font-medium">
                  Client Logo
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
