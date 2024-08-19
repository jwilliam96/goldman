import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        'custom-purple': '#a855f7',
        'custom-pink': '#ec4899',
        'purple-santi': '#832eff',
        'pink-santi': '#fe4ff2',
        "fondo-purple": "#A42DA6",
        "autor": "#d73cbe"
      },

      screens: {
        "ss": "440px"
      },

      dropShadow: {
        "sombraImage": "1px 5px 8px #000"
      }
    },
  },
  plugins: [],
};
export default config;
