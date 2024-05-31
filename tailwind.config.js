/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "2xl": "1920px", // Extra extra large screens (e.g., large desktop monitors)
        xl: "1680px", // Extra large screens
        lg: "1440px", // Large screens (e.g., desktop monitors)
        md: "1024px", // Medium screens (e.g., tablets)
        sm: "640px", // Small screens (e.g., mobile phones)
        xs: "360px", // Extra small screens (e.g., small mobile phones)
      },
    },
  },
  plugins: [],
};
