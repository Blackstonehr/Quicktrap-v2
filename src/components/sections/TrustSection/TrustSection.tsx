import Container from "../../layout/Container";

interface CertificationBadge {
  name: string;
  description: string;
  icon?: string;
}

interface TrustSectionProps {
  certifications?: CertificationBadge[];
}

export default function TrustSection({ certifications }: TrustSectionProps) {
  const defaultCertifications = certifications || [
    {
      name: "AASHTO",
      description: "Compliant with American Association of State Highway and Transportation Officials standards"
    },
    {
      name: "ISO 9001",
      description: "Quality Management System Certified"
    },
    {
      name: "EPA",
      description: "Environmental Protection Agency Approved"
    },
    {
      name: "Municipal",
      description: "Meets Municipal Engineering Standards"
    }
  ];

  return (
    <section className="py-16 bg-concrete border-y border-steel/10">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-graphite mb-3">
            Trusted by Municipalities Nationwide
          </h2>
          <p className="text-steel text-lg max-w-2xl mx-auto">
            Our solutions meet the highest industry standards and certifications
          </p>
        </div>

        {/* Certification Badges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {defaultCertifications.map((cert, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-lg p-6 border-2 border-steel/10 hover:border-brand-accent/30 transition-all duration-300 hover:shadow-lg"
            >
              {/* Badge Icon/Circle */}
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-brand-accent/10 to-brand-accent/5 flex items-center justify-center border-2 border-brand-accent/20 group-hover:border-brand-accent/40 transition-all">
                <div className="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>

              {/* Badge Name */}
              <h3 className="text-xl font-bold text-graphite text-center mb-2">
                {cert.name}
              </h3>

              {/* Badge Description */}
              <p className="text-sm text-steel text-center leading-relaxed">
                {cert.description}
              </p>

              {/* Hover Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Optional: Client Logos Section */}
        <div className="mt-16 pt-12 border-t border-steel/10">
          <p className="text-center text-sm text-steel font-medium tracking-wider uppercase mb-8">
            Serving Leading Municipalities
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {/* Placeholder for client logos - replace with actual logos */}
            {[1, 2, 3, 4, 5].map((i) => (
              <div 
                key={i} 
                className="w-32 h-16 bg-steel/10 rounded flex items-center justify-center text-steel/40 text-xs font-medium"
              >
                Client Logo {i}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
