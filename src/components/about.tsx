import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pattern-prosperity opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 gradient-green rounded-full opacity-10 blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
            About
          </h2>
          <p className="text-xl text-primary font-semibold">
            A dedicated CPA partner
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
              {/* Placeholder for now - replace with actual image */}
              
              
              <Image
                src="/noa-picture.jpg"
                alt="Noa El Baz Bismuth, CPA"
                className="object-cover w-full h-full"
                width={500}
                height={500}
                priority
              />
              
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 gradient-gold rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 gradient-prosperity rounded-full opacity-15 blur-2xl"></div>
          </div>
          
          {/* Content Section */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Meet Your CPA Partner
              </h3>
              
              <div className="prose prose-lg text-gray-600 leading-relaxed space-y-4">
                <p>
                  <span className="font-semibold text-primary">Noa El Baz Bismuth, CPA</span> — 
                  8 years of experience in accounting and taxes. I help founders, property managers, 
                  landlords, and small businesses keep clean books, stay compliant, and make confident decisions.
                </p>
                
                <p>
                  With a deep understanding of the unique challenges facing growing businesses, 
                  I provide personalized accounting solutions that scale with your success. 
                  From monthly bookkeeping to strategic financial guidance, I&apos;m here to ensure 
                  your financial foundation is solid and your business thrives.
                </p>
              </div>
            </div>
            
            {/* Key highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-gray-700 font-medium">8+ Years Experience</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-gray-700 font-medium">Licensed CPA</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-gray-700 font-medium">Small Business Focus</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-gray-700 font-medium">Property Management Expert</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
