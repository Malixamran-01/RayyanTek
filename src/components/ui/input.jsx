import React from "react";

export function Input({ className = "", ...props }) {
  const classes = `w-full h-10 px-3 rounded-md border border-slate-300 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`;
  return <input className={classes} {...props} />;
}

export default Input;


