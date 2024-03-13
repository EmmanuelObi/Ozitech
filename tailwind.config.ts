import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/common/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      matter: ["Matter", "Poppins", "sans-serif"],
      "matter-medium": ["Matter-medium", "Poppins", "sans-serif"],
      "matter-bold": ["Matter-bold", "Poppins", "sans-serif"],
      futura: ["Futura", "Poppins", "sans-serif"],
    },
    extend: {
      borderWidth: {
        1: "1px",
      },
      borderRadius: {
        contact: "44px",
      },
      colors: {
        "primary-blue": "#1452E4",
        "primary-grey": "#404241",
        "secondary-grey": "#6E717C",
        "line-border": "#E0E6ED",
        "nav-border": "#ECF7FF",
        "services-bg": "#EAF7FF",
        "work-card-bg": "#FAFAFA",
        "card-teal": "#C6CBFB",
        "card-blue": "#B5E1FB",
        "card-lime": "#C6FBEE",
        "services-grey": "#595E5C",
        "card-grey": "#9AA4B2",
        "pill-border": "#E0E0E0",
        "pill-grey": "#4B5565",
        "card-text": "#0D090D",
        "work-grey": "#4B5565",
        "card-border": "#323232",
        "placeholder-color": "#D1D1D6",
        "label-color": "#3F3F46",
        "contact-blue": "#1452E4",
        "contact-grey": "#CDD5DF",
        "footer-grey": "#EAECF0",
        "rights-grey": "#B9BCC8",
        "icon-grey": "#98A2B3",
        "footer-border": "#202939",
        "footer-bg": "#181A1A",
        "rights-bg": "#121313",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
