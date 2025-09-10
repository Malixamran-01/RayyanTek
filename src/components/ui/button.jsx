import React from "react";

export function Button({ className = "", children, variant = "default", size = "md", ...props }) {
  const base = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  const variants = {
    default: "bg-slate-900 text-white hover:bg-slate-800",
    outline: "border border-slate-300 text-slate-700 hover:bg-slate-100",
    ghost: "text-slate-700 hover:bg-slate-100",
    secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200",
  };
  const sizes = {
    sm: "h-8 px-3 text-sm",
    md: "h-10 px-4",
    lg: "h-12 px-6 text-lg",
  };
  const classes = `${base} ${variants[variant] || variants.default} ${sizes[size] || sizes.md} ${className}`;
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

export default Button;


