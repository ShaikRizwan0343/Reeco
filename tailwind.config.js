/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      "2xl": "1440px",
      // => @media (min-width: 1280px) { ... }
      "3xl": "1920px",

      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      white: "#FFFFFF",
      snow: "#FFFAFA",
      honeydew: "#F0FFF0",
      mintcream: "#F5FFFA",
      ghostwhite: "#F8F8FF",
      gray: "#999999",
      green: "#1E633F",
      body: "#FBFBFB",
      red: "#F66D44",
      success: "#3DCA72",
      black: "#0A0A0A",
    },
    boxShadow: {
      card: "0px 0px 0px 1px rgba(0, 0, 0, 0.15)",
    },
  },
  plugins: [],
};
