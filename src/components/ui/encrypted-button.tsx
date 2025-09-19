import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const encryptedButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg transition-all duration-300",
        encrypted: "bg-gradient-to-r from-accent to-accent-glow text-accent-foreground hover:from-accent-glow hover:to-accent shadow-lg hover:shadow-xl border border-accent/20 transition-all duration-300 hover:scale-105",
        secure: "bg-surface border border-primary/20 text-foreground hover:bg-primary/10 hover:border-primary/40 transition-all duration-300",
        ghost: "hover:bg-accent/10 hover:text-accent-foreground border border-transparent hover:border-accent/20 transition-all duration-300",
        outline: "border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface EncryptedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof encryptedButtonVariants> {
  asChild?: boolean;
}

const EncryptedButton = React.forwardRef<HTMLButtonElement, EncryptedButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(encryptedButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
EncryptedButton.displayName = "EncryptedButton";

export { EncryptedButton, encryptedButtonVariants };