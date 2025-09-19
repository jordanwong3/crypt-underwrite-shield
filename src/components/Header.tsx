import Logo from "./Logo";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Shield, Lock } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Logo />
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/dashboard" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Dashboard
            </a>
            <a href="/risk-models" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Risk Models
            </a>
            <a href="/policies" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Policies
            </a>
            <a href="/analytics" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Analytics
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2 text-xs text-muted-foreground">
              <Shield className="h-4 w-4 text-accent" />
              <span>FHE Encrypted</span>
            </div>
            
            <div className="hidden sm:flex items-center space-x-2 text-xs text-muted-foreground">
              <Lock className="h-3 w-3" />
              <span>Private Mode</span>
            </div>

            <ConnectButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;