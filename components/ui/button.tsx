import * as React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
  size?: "default" | "sm" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className = "", variant = "primary", size = "default", ...props },
    ref
  ) => {
    const baseClasses = "btn";
    const variantClasses = variant === "primary" ? "btn-primary" : "btn-ghost";
    const sizeClasses =
      size === "sm"
        ? "px-3 py-1.5 text-xs"
        : size === "lg"
        ? "px-6 py-3 text-base"
        : "px-4 py-2 text-sm";

    return (
      <button
        className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
