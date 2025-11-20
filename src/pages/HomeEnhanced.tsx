import HeroEnhanced from "../components/sections/Hero/HeroEnhanced";
import TrustSection from "../components/sections/TrustSection/TrustSection";
import Container from "../components/layout/Container";
import FeatureCardEnhanced from "../components/sections/Features/FeatureCardEnhanced";

const features = [
  {
    title: "Superior Flow Management",
    desc: "Engineered flow-path design prevents blockages while maximizing throughput, ensuring optimal stormwater drainage performance.",
    icon: "/images/icons/icon_flow.png",
  },
  {
    title: "Easy Installation",
    desc: "Simple installation process that integrates seamlessly with existing infrastructure, reducing downtime and labor costs.",
    icon: "/images/icons/icon_installation.png",
  },
  {
    title: "Durable Construction",
    desc: "Industrial-grade materials withstand harsh weather and demanding loads, providing long-term reliability and minimal maintenance.",
    icon: "/images/icons/icon_structural.png",
  },
  {
    title: "Environmentally Friendly",
    desc: "Designed to protect waterways by preventing pollutants from entering storm systems, meeting environmental compliance standards.",
    icon: "/images/icons/icon_environment.png",
  },
];

export default function HomeEnhanced() {
  return (
    <>
      {/* Enhanced Hero Section */}
      <HeroEnhanced
        title="Keep Storm Lines Open"
        subtitle="Advanced stormwater management solutions engineered to protect your infrastructure and ensure reliable drainage performance."
        ctaText="Request a Quote"
        ctaSecondaryText="View Products"
        image="/images/hero_aerial.png"
        stats={[
          { value: "500+", label: "Installations" },
          { value: "50+", label: "Municipalities" },
          { value: "15", label: "Years Experience" },
          { value: "99.9%", label: "Uptime" }
        ]}
      />

      {/* Trust & Credibility Section */}
      <TrustSection />

      {/* Enhanced Features Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 40px,
              rgba(0,0,0,0.1) 40px,
              rgba(0,0,0,0.1) 41px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 40px,
              rgba(0,0,0,0.1) 40px,
              rgba(0,0,0,0.1) 41px
            )`
          }}
        />

        <Container className="relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-accent/10 border border-brand-accent/20 mb-4">
              <span className="text-sm font-bold text-brand-accent tracking-wide uppercase">
                Key Benefits
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-graphite mb-4">
              Why Choose Quicktrap?
            </h2>
            <p className="text-xl text-steel max-w-2xl mx-auto">
              Engineered for performance, designed for reliability, trusted by municipalities nationwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <FeatureCardEnhanced 
                key={feature.title} 
                {...feature} 
                index={index}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-24 bg-gradient-to-br from-graphite via-graphite to-brand-accent/20 relative overflow-hidden">
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 40px,
              rgba(255,255,255,0.1) 40px,
              rgba(255,255,255,0.1) 41px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 40px,
              rgba(255,255,255,0.1) 40px,
              rgba(255,255,255,0.1) 41px
            )`
          }}
        />

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Protect Your Infrastructure?
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Join hundreds of municipalities that trust Quicktrap for reliable stormwater management. 
              Our team of experts is ready to help you find the perfect solution.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/contact" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-accent text-white font-bold text-lg rounded-sm shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
              >
                Get Started Today
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a 
                href="/case-studies" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold text-lg rounded-sm hover:bg-white/20 transition-all shadow-xl"
              >
                View Case Studies
              </a>
            </div>

            {/* Contact Info */}
            <div className="mt-16 pt-12 border-t border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white/90">
                <div>
                  <div className="text-sm font-medium uppercase tracking-wider mb-2 text-white/70">
                    Call Us
                  </div>
                  <div className="text-xl font-bold">
                    1-800-QUICKTRAP
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium uppercase tracking-wider mb-2 text-white/70">
                    Email
                  </div>
                  <div className="text-xl font-bold">
                    info@quicktrap.com
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium uppercase tracking-wider mb-2 text-white/70">
                    Response Time
                  </div>
                  <div className="text-xl font-bold">
                    24-48 Hours
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
