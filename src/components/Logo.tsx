import logoImage from "@/assets/logo.png";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const Logo = ({ className = "", size = "md" }: LogoProps) => {
  const sizeClasses = {
    sm: "h-8 w-auto",
    md: "h-12 w-auto",
    lg: "h-16 w-auto",
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img 
        src={logoImage} 
        alt="SecureUnderwrite - Private Insurance Platform" 
        className={`${sizeClasses[size]} object-contain`}
      />
      <div className="flex flex-col">
        <span className="font-bold text-foreground text-lg leading-tight">
          SecureUnderwrite
        </span>
        <span className="text-xs text-muted-foreground uppercase tracking-wider">
          Private Insurance
        </span>
      </div>
    </div>
  );
};

export default Logo;