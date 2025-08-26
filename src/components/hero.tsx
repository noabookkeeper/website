"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle, TrendingUp, Shield, Sparkles } from "lucide-react";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-brand-beige to-muted py-20 lg:py-28 overflow-hidden">
      {/* Background blur effects - Mobile optimized */}
      <div className="absolute top-16 left-4 w-24 h-24 sm:w-32 sm:h-32 lg:w-48 lg:h-48 lg:top-20 lg:left-20 gradient-gold rounded-full opacity-60 blur-2xl"></div>
      <div className="absolute bottom-16 right-4 w-28 h-28 sm:w-36 sm:h-36 lg:w-56 lg:h-56 lg:bottom-24 lg:right-24 gradient-green rounded-full opacity-60 blur-2xl"></div>

      {/* Additional decorative blurs for desktop */}
      <div className="hidden lg:block absolute top-1/2 left-1/4 -translate-y-1/2 w-32 h-32 gradient-prosperity rounded-full opacity-30 blur-3xl"></div>
      <div className="hidden lg:block absolute top-1/3 right-1/3 w-20 h-20 gradient-gold rounded-full opacity-40 blur-xl"></div>
      <div className="hidden lg:block absolute bottom-1/3 left-1/3 w-24 h-24 gradient-green rounded-full opacity-35 blur-2xl"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-16">
          {/* Header Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold">
              <Sparkles className="size-4" />
              Premium Financial Services
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto">
              Elevate your{" "}
              <span className="text-primary font-bold">financial success</span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Expert bookkeeping that transforms chaos into clarity, empowering
              your business to reach new heights of prosperity.
            </p>
          </div>

          {/* Logo and Visual Element */}
          <div className="relative flex justify-center">
            <div className="relative">
              {/* Main Logo */}
              <div className="relative w-56 h-56 lg:w-72 lg:h-72 mx-auto mb-8">
                {/* Glowing background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-teal-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-orange-300 to-teal-500 rounded-full opacity-10 blur-2xl animate-pulse delay-1000"></div>
                
                {/* Logo container */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src="/logo.jpeg"
                    alt="FLOWCYCLE ACCOUNTING Logo"
                    width={250}
                    height={250}
                    className="w-full h-full object-contain drop-shadow-lg"
                    priority
                    quality={95}
                  />
                </div>
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 gradient-gold rounded-full flex items-center justify-center animate-bounce shadow-lg">
                <Sparkles className="text-white size-6" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 gradient-green rounded-full flex items-center justify-center animate-bounce shadow-lg">
                <Shield className="text-white size-6" />
              </div>
              <div className="absolute top-1/2 -left-12 -translate-y-1/2 w-10 h-10 bg-accent rounded-full flex items-center justify-center animate-pulse shadow-lg">
                <CheckCircle className="text-white size-5" />
              </div>
              <div className="absolute top-1/2 -right-12 -translate-y-1/2 w-10 h-10 bg-primary rounded-full flex items-center justify-center animate-pulse shadow-lg">
                <CheckCircle className="text-white size-5" />
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="gradient-prosperity hover:opacity-90 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <Sparkles className="size-5 mr-2" />
              Begin Your Journey
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("services")}
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:-translate-y-1"
            >
              Explore Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
