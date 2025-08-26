"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle, TrendingUp, Shield, Sparkles, ArrowRight, Star } from "lucide-react";
import { useState, useEffect } from "react";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-brand-beige via-brand-pearl to-muted py-16 sm:py-20 lg:py-32 overflow-hidden min-h-screen flex items-center">
      {/* Enhanced Background Effects */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 140, 66, 0.1) 0%, transparent 50%)`
        }}
      />
      
      {/* Improved blur effects with better positioning */}
      <div className="absolute top-20 left-8 w-32 h-32 sm:w-40 sm:h-40 lg:w-56 lg:h-56 gradient-gold rounded-full opacity-40 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-8 w-36 h-36 sm:w-44 sm:h-44 lg:w-64 lg:h-64 gradient-green rounded-full opacity-40 blur-3xl animate-pulse delay-1000"></div>

      {/* Desktop-only decorative elements */}
      <div className="hidden lg:block absolute top-1/2 left-1/4 -translate-y-1/2 w-40 h-40 gradient-prosperity rounded-full opacity-20 blur-3xl animate-pulse delay-500"></div>
      <div className="hidden lg:block absolute top-1/3 right-1/3 w-24 h-24 gradient-gold rounded-full opacity-30 blur-2xl animate-pulse delay-1500"></div>
      <div className="hidden lg:block absolute bottom-1/3 left-1/3 w-32 h-32 gradient-green rounded-full opacity-25 blur-3xl animate-pulse delay-2000"></div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 pattern-prosperity opacity-5"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center space-y-12 lg:space-y-16">
          {/* Enhanced Header Content */}
          <div className={`space-y-6 lg:space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

            {/* Enhanced typography */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight max-w-5xl mx-auto">
              Elevate your{" "}
              <span className="relative">
                <span className="text-primary font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  financial success
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full opacity-60"></div>
              </span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto font-medium">
              Expert bookkeeping that transforms chaos into clarity, empowering
              your business to reach new heights of{" "}
              <span className="text-primary font-semibold">prosperity</span>.
            </p>
          </div>

          {/* Enhanced Logo Section */}
          <div className={`relative flex justify-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative group">
              {/* Main Logo Container */}
              <div className="relative w-64 h-64 lg:w-80 lg:h-80 mx-auto mb-8">
                {/* Enhanced glowing effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-accent to-teal-600 rounded-full opacity-15 blur-3xl animate-pulse group-hover:opacity-25 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-orange-300 via-gold-400 to-teal-500 rounded-full opacity-10 blur-2xl animate-pulse delay-1000 group-hover:opacity-20 transition-opacity duration-500"></div>
                
                {/* Logo container with hover effects */}
                <div className="relative w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/logo.png"
                    alt="FLOWCYCLE ACCOUNTING Logo"
                    width={500}
                    height={500}
                    className="w-full h-full object-contain drop-shadow-2xl group-hover:drop-shadow-[0_25px_50px_rgba(30,77,92,0.3)] transition-all duration-500"
                    priority
                  />
                </div>

                {/* Enhanced floating elements with better positioning */}
                <div className="absolute -top-8 -right-8 w-14 h-14 gradient-gold rounded-full flex items-center justify-center animate-bounce shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="text-white size-7" />
                </div>
                <div className="absolute -bottom-8 -left-8 w-14 h-14 gradient-green rounded-full flex items-center justify-center animate-bounce shadow-xl group-hover:scale-110 transition-transform duration-300 delay-500">
                  <Shield className="text-white size-7" />
                </div>
                <div className="absolute top-1/2 -left-16 -translate-y-1/2 w-12 h-12 bg-accent rounded-full flex items-center justify-center animate-pulse shadow-xl group-hover:scale-110 transition-transform duration-300 delay-200">
                  <CheckCircle className="text-white size-6" />
                </div>
                <div className="absolute top-1/2 -right-16 -translate-y-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center animate-pulse shadow-xl group-hover:scale-110 transition-transform duration-300 delay-700">
                  <TrendingUp className="text-white size-6" />
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced CTAs */}
          <div className={`flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="group gradient-prosperity hover:opacity-90 text-white px-10 py-5 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 prosperity-shadow"
            >
              <Sparkles className="size-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
              Begin Your Journey
              <ArrowRight className="size-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("services")}
              className="group border-2 border-primary text-primary hover:bg-primary hover:text-white px-10 py-5 text-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Explore Services
              <ArrowRight className="size-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>

          
        </div>
      </div>
    </section>
  );
}
