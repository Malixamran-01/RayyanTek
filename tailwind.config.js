/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B132B",
        secondary: "#1C2541",
        accent: "#3A506B",
        highlight: "#5BC0BE",
        background: "#FFFFFF",
        textPrimary: "#0B132B",
        textSecondary: "#6B7280",
      },
      fontFamily: {
        heading: ["Poppins", "ui-sans-serif", "system-ui", "-apple-system"],
        body: ["Inter", "ui-sans-serif", "system-ui", "-apple-system"],
      },
      borderRadius: {
        '2xl': '1rem',
      },
      boxShadow: {
        'soft': '0 10px 25px -10px rgba(0,0,0,0.15)',
        'lift': '0 20px 35px -15px rgba(0,0,0,0.25)'
      },
    },
  },
  plugins: [],
}


