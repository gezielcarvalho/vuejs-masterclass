/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        "brand-gray-1": "#DADCE0",
        "brand-blue-1": "#1967D2",
        "brand-green-1": "#137333",
        primary: "#4D7CFE",
        secondary: "#F0F2F7",
        tertiary: "#F9FAFE",
        dark: "#1E2026",
        light: "#F9FAFE",
        gray: {
          100: "#F0F2F7",
          200: "#D9DBE9",
          300: "#B7B9CC",
          400: "#8C90B6",
          500: "#6C7293",
          600: "#4D5066",
          700: "#33364A",
          800: "#1E2026",
          900: "#0D0E11"
        }
      },
      boxShadow: {
        blue: "0 0 3px 3px #4285f4",
        "brand-md": "0px 8px 16px rgba(0, 0, 0, 0.08)",
        "brand-lg": "0px 16px 24px rgba(0, 0, 0, 0.1)",
        "brand-xl": "0px 24px 32px rgba(0, 0, 0, 0.1)"
      }
    }
  },
  plugins: []
};
