interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export default function ButtonEnhanced({ 
  children, 
  href, 
  className = "",
  variant = 'primary',
  size = 'md'
}: ButtonProps) {
  
  // Size variants
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  // Style variants
  const variants = {
    primary: `
      bg-brand-accent text-white font-bold
      hover:bg-brand-accent/90 
      shadow-xl hover:shadow-2xl
      border-2 border-brand-accent
      hover:border-brand-accent/90
      relative overflow-hidden
      before:absolute before:inset-0 
      before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
      before:-translate-x-full hover:before:translate-x-full
      before:transition-transform before:duration-700
    `,
    secondary: `
      bg-graphite text-white font-bold
      hover:bg-graphite/90
      shadow-lg hover:shadow-xl
      border-2 border-graphite
      hover:border-graphite/90
    `,
    outline: `
      bg-transparent text-brand-accent font-bold
      border-2 border-brand-accent
      hover:bg-brand-accent hover:text-white
      shadow-md hover:shadow-lg
    `
  };

  const base = `
    inline-flex items-center justify-center gap-2
    rounded-sm
    transition-all duration-300
    transform hover:scale-105
    active:scale-95
    ${sizes[size]}
    ${variants[variant]}
    ${className}
  `;

  if (href) {
    return (
      <a href={href} className={base}>
        {children}
      </a>
    );
  }

  return (
    <button className={base}>
      {children}
    </button>
  );
}
