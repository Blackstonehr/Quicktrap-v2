import Container from "../../layout/Container";
import Button from "../../ui/Button";

interface HeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaSecondaryText?: string;
  image: string;
  stats?: {
    label: string;
    value: string;
  }[];
}

export default function HeroEnhanced({ 
  title, 
  subtitle, 
  ctaText, 
  ctaSecondaryText,
  image,
  stats 
}: HeroProps) {
  const defaultStats = stats || [
    { value: "500+", label: "Installations" },
    { value: "50+", label: "Municipalities" },
    { value: "15", label: "Years Experience" },
    { value: "99.9%", label: "Uptime" }
  ];

  return (
    <div className="relative w-full min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image with Enhanced Overlay */}
      <img 
        src={image} 
        className="absolute inset-0 h-full w-full object-cover" 
        alt="" 
      />
      <div className="absolute inset-0 bg-gradient-to-br from-graphite/70 via-graphite/50 to-graphite/70" />
      
      {/* Subtle Pattern Overlay */}
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
      
      {/* Bottom Accent Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-brand-accent/20 to-transparent" />

      <Container className="relative z-10 pt-48 pb-36">
        {/* Main Content */}
        <div className="max-w-4xl">
          {/* Eyebrow Text */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
            <span className="text-sm font-medium text-white/90 tracking-wide">
              ENGINEERED STORMWATER SOLUTIONS
            </span>
          </div>

          {/* Hero Title */}
          <h1 className="text-hero font-bold text-white drop-shadow-2xl leading-[1.05] tracking-tight">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="mt-8 text-xl md:text-2xl text-white/90 max-w-2xl drop-shadow-lg leading-relaxed">
              {subtitle}
            </p>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-12">
            {ctaText && (
              <Button 
                className="text-lg px-8 py-4 shadow-2xl hover:scale-105 transition-transform" 
                href="#features"
              >
                {ctaText}
              </Button>
            )}
            {ctaSecondaryText && (
              <button className="inline-flex items-center gap-2 px-8 py-4 rounded-sm bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold text-lg hover:bg-white/20 transition-all shadow-xl">
                {ctaSecondaryText}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Trust Indicators / Stats Bar */}
        <div className="mt-20 pt-12 border-t border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {defaultStats.map((stat, index) => (
              <div key={index} className="text-center md:text-left">
                <div className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-white/80 font-medium tracking-wide uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 text-white/60 animate-bounce">
          <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  );
}
