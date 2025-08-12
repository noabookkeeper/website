"use client";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-secondary-foreground text-white">
      {/* Main Footer */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Noa Bookkeeper</h3>
              <p className="text-white/80 leading-relaxed">
                Professional accounting and bookkeeping services for growing
                businesses. Accurate, reliable, and always on time.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <Linkedin className="size-5" />
                </a>
                <a
                  href="#"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <Twitter className="size-5" />
                </a>
                <a
                  href="#"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <Facebook className="size-5" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Services</h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Monthly Bookkeeping
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Property Management
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    House Flippers
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    CFO Advisory
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Payroll Management
                  </button>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Company</h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("how-it-works")}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    How It Works
                  </button>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Mail className="size-4 text-white/60" />
                  <a
                    href="mailto:hello@noabookkeeper.com"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    hello@noabookkeeper.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="size-4 text-white/60" />
                  <a
                    href="tel:+1234567890"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    +1 (234) 567-890
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="size-4 text-white/60 mt-1" />
                  <span className="text-white/80">
                    123 Business Ave
                    <br />
                    Suite 100
                    <br />
                    City, State 12345
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/80 text-sm">
              © 2024 Noa Bookkeeper. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors"
              >
                Imprint
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
