import { Header } from "../components/header";
import { Hero } from "../components/hero";
import { About } from "../components/about";
import { ServicesOverview } from "../components/services-overview";
import { HowItWorks } from "../components/how-it-works";
import { ServiceBlocks } from "../components/service-blocks";
import { ContactForm } from "../components/contact-form";
import { Footer } from "../components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ServiceBlocks />
        <ServicesOverview />
        <HowItWorks />
        <About />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
