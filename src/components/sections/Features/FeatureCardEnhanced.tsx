interface FeatureCardProps {
  title: string;
  desc: string;
  icon: string;
  index?: number;
}

export default function FeatureCardEnhanced({ title, desc, icon, index = 0 }: FeatureCardProps) {
  return (
    <div className="group relative bg-white rounded-lg p-8 border-2 border-steel/10 hover:border-brand-accent/30 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      {/* Number Badge */}
      <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-brand-accent to-brand-accent/80 flex items-center justify-center shadow-lg">
        <span className="text-white font-bold text-lg">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      {/* Icon Container with Enhanced Styling */}
      <div className="relative mb-6">
        <div className="h-20 w-20 rounded-xl bg-gradient-to-br from-brand-accent/20 to-brand-accent/5 flex items-center justify-center border-2 border-brand-accent/20 group-hover:border-brand-accent/40 transition-all group-hover:scale-110 duration-300">
          <div className="h-16 w-16 rounded-lg bg-gradient-to-br from-brand-accent/10 to-transparent flex items-center justify-center">
            <img 
              src={icon} 
              className="h-10 w-10 opacity-90 group-hover:opacity-100 transition-opacity" 
              alt="" 
            />
          </div>
        </div>
        
        {/* Decorative Corner Accent */}
        <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-2 border-b-2 border-brand-accent/20 group-hover:border-brand-accent/40 transition-colors" />
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-graphite mb-3 group-hover:text-brand-accent transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-steel text-base leading-relaxed">
        {desc}
      </p>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </div>
  );
}
