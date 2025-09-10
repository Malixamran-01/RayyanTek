import React from "react";

export function Textarea({ className = "", rows = 4, ...props }) {
  const classes = `w-full px-3 py-2 rounded-md border border-slate-300 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`;
  return <textarea rows={rows} className={classes} {...props} />;
}

export default Textarea;


