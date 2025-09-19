import { Shield, Lock, Zap } from "lucide-react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const Logo = ({ className = "", size = "md" }: LogoProps) => {
  const sizeClasses = {
    sm: "h-6 w-6",
    md: "h-8 w-8", 
    lg: "h-10 w-10",
  };

  const textSizes = {
    sm: "text-sm",
    md: "text-lg",
    lg: "text-xl",
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`${sizeClasses[size]} bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center`}>
        <Zap className="h-5 w-5 text-white" />
      </div>
      <div className="flex flex-col">
        <span className={`font-bold text-foreground ${textSizes[size]} leading-tight`}>
          Crypt Underwrite Shield
        </span>
        <span className="text-xs text-muted-foreground uppercase tracking-wider">
          FHE Encrypted
        </span>
      </div>
    </div>
  );
};

export default Logo;