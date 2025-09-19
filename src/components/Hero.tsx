import { EncryptedButton } from "./ui/encrypted-button";
import { Shield, TrendingUp, Lock, Eye } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Animated background grid */}
      <div className="absolute inset-0 shield-grid opacity-30" />
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="text-foreground">Underwrite Safely,</span>
            <br />
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Underwrite Privately
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Advanced risk models and premium quotes encrypted until acceptance. 
            Professional actuarial tools with zero-knowledge privacy protection.
          </p>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 p-4 rounded-lg bg-surface border border-card-border">
              <Shield className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium">Encrypted Models</span>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 rounded-lg bg-surface border border-card-border">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Risk Analytics</span>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 rounded-lg bg-surface border border-card-border">
              <Lock className="h-5 w-5 text-accent-glow" />
              <span className="text-sm font-medium">Private Quotes</span>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <EncryptedButton variant="encrypted" size="lg" className="text-base px-8">
              Access Dashboard
            </EncryptedButton>
            <EncryptedButton variant="outline" size="lg" className="text-base px-8 items-center gap-2">
              <Eye className="h-4 w-4" />
              View Demo
            </EncryptedButton>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">Trusted by leading insurance providers</p>
            <div className="flex items-center justify-center gap-8 opacity-60">
              <div className="h-8 w-24 bg-muted rounded-md" />
              <div className="h-8 w-24 bg-muted rounded-md" />
              <div className="h-8 w-24 bg-muted rounded-md" />
              <div className="h-8 w-24 bg-muted rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;