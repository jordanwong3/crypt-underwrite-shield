import Logo from "./Logo";
import { Zap, Lock, Globe, Mail, Phone, MapPin } from "lucide-react";
import { useEffect, useRef } from "react";

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = footer.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      footer.style.setProperty('--mouse-x', `${x}%`);
      footer.style.setProperty('--mouse-y', `${y}%`);
    };

    footer.addEventListener('mousemove', handleMouseMove);
    return () => footer.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <footer 
      ref={footerRef}
      className="relative bg-surface border-t border-border shield-grid overflow-hidden"
    >
      {/* Animated encrypted lights overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent-glow rounded-full animate-pulse opacity-60" />
        <div className="absolute top-3/4 left-1/2 w-1 h-1 bg-primary-glow rounded-full animate-pulse opacity-40 animation-delay-1000" />
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-accent rounded-full animate-pulse opacity-50 animation-delay-2000" />
        <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-primary rounded-full animate-pulse opacity-70 animation-delay-3000" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Logo className="mb-4" />
            <p className="text-muted-foreground mb-6 max-w-md">
              Private insurance underwriting with encrypted risk models. 
              Protecting your data while delivering precise actuarial analysis.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-sm text-accent">
                <Zap className="h-4 w-4" />
                <span>Encrypted</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-primary">
                <Lock className="h-4 w-4" />
                <span>Secure</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-accent-glow">
                <Globe className="h-4 w-4" />
                <span>Global</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Platform</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#dashboard" className="hover:text-foreground transition-colors">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#models" className="hover:text-foreground transition-colors">
                  Risk Models
                </a>
              </li>
              <li>
                <a href="#policies" className="hover:text-foreground transition-colors">
                  Policy Management
                </a>
              </li>
              <li>
                <a href="#analytics" className="hover:text-foreground transition-colors">
                  Analytics
                </a>
              </li>
              <li>
                <a href="#api" className="hover:text-foreground transition-colors">
                  API Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-3 w-3" />
                <a href="mailto:contact@secureunderwrite.com" className="hover:text-foreground transition-colors">
                  contact@secureunderwrite.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-3 w-3" />
                <a href="tel:+1-555-0123" className="hover:text-foreground transition-colors">
                  +1 (555) 012-3456
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-3 w-3" />
                <span>New York, NY</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 SecureUnderwrite. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#privacy" className="hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#security" className="hover:text-foreground transition-colors">
                Security
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;