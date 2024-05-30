/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "360px", // Extra small screens (e.g., small mobile phones)
        sm: "640px", // Small screens (e.g., mobile phones)
        md: "768px", // Medium screens (e.g., tablets)
        lg: "1024px", // Large screens (e.g., laptops)
        xl: "1280px", // Extra large screens (e.g., desktops)
        "2xl": "1536px", // 2XL screens
      },
    },
  },
  plugins: [],
};
