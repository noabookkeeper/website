"use client";

import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Sparkles, Loader2, Mail, Phone, MapPin } from "lucide-react";
import { submitContactForm } from "./actions";

interface ContactFormData {
  email: string;
  message: string;
}

export function ContactForm() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [formData, setFormData] = useState<ContactFormData>({
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    startTransition(async () => {
      try {
        const result = await submitContactForm(formData);
        
        if (result.success) {
          setIsSubmitted(true);
        } else {
          setError(result.error || "An error occurred. Please try again.");
        }
      } catch (error) {
        console.error("Form submission error:", error);
        setError("An unexpected error occurred. Please try again.");
      }
    });
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-16 lg:py-24 bg-secondary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-12 shadow-sm border border-gray-100">
            <div className="space-y-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="text-white size-8" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Thank You!</h2>
              <p className="text-lg text-gray-600">
                We&apos;ve received your request and will get back to you within
                24 hours with a personalized response and next steps.
              </p>
              <Button
                onClick={() => scrollToSection("services")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Learn More About Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="py-20 lg:py-32 bg-secondary relative overflow-hidden pattern-prosperity"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold">
            <Sparkles className="size-4" />
            Begin Your Journey
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
            Ready to{" "}
            <span className="text-primary font-bold">
              elevate your finances?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Share your vision with us, and we&apos;ll craft a personalized
            roadmap to transform your financial landscape into one of prosperity
            and growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900 rounded-3xl p-8 text-white h-full">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="size-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <a
                      href="tel:+19292419509"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      +1 (929) 241-9509
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="size-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a
                      href="mailto:contact@flowcycleaccounting.com"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      contact@flowcycleaccounting.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="size-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <address className="text-gray-300 not-italic">
                      Joshua Tree, California<br />
                      United States
                    </address>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-700">
                <p className="text-gray-400 text-sm">
                  We typically respond within 24 hours. For urgent matters, please call us directly.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-8 lg:p-12 prosperity-shadow border border-accent/10 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-40 h-40 gradient-gold rounded-full opacity-5 blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 gradient-green rounded-full opacity-5 blur-xl"></div>
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Email Address */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-900"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Additional Information */}
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-900"
              >
                Additional Information (Optional)
              </label>
              <textarea
                id="message"
                rows={6}
                value={formData.message}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, message: e.target.value }))
                }
                placeholder="Tell us about your business, specific needs, or any questions you have..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <div className="text-center">
              <Button
                type="submit"
                size="lg"
                disabled={isPending}
                className="gradient-prosperity hover:opacity-90 text-white px-12 py-6 text-xl font-semibold prosperity-shadow hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isPending ? (
                  <>
                    <Loader2 className="size-5 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Sparkles className="size-5 mr-2" />
                    Begin My Prosperity Journey
                  </>
                )}
              </Button>
              <p className="text-sm text-gray-500 mt-4">
                We&apos;ll respond within 24 hours with your custom quote
              </p>
            </div>
          </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 