import React from "react";

export function Badge({ className = "", variant = "default", children }) {
  const variants = {
    default: "bg-slate-900 text-white",
    outline: "border border-slate-300 text-slate-700",
    secondary: "bg-slate-100 text-slate-900",
  };
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium ${variants[variant] || variants.default} ${className}`}>
      {children}
    </span>
  );
}

export default Badge;


