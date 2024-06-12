/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    maxWidth: {
      container: "1106px",
    },
    extend: {
      fontFamily: {
        "custom-light": ["Nunito-Regular", "sans-serif"],
        "custom-regular": ["NunitoSans-SemiBold", "sans-serif"],
        "custom-bold": ["NunitoSans-Bold", "sans-serif"],
        "custom-extra-bold": ["NunitoSans-ExtraBold", "sans-serif"],
      },
      colors: {
        "blue-darkest": "#00274c",
        "blue-dark": "#36384e",
        "blue-light": "#36c",
        "blue-light-hover": "#1e47b7",
        "blue-lightest": "#eff3fb",
        "blue-light-2": "#84d7dc",
        "grey-dark": "#9f9f9f",
        "grey-light": "#767676",
        'red-dark': "#dc143c"
      },
      fontSize: {
        "heading-1": ["48px", "1.3"],
        "heading-1-mobile": ["36px", "1.3"],
        "heading-2": ["32px", "1.3"],
        "heading-3": ["28px", "1.3"],
        "heading-4": ["24px", "1.3"],
        "heading-5": ["20px", "1.3"],
        "heading-6": ["18px", "1.3"],
        para: ["16px", "1.5"],
        small: ["14px", "1.4"],
        "x-small": ["12px", "1.3"],
        //New typography size ends
      },
    }
  },
  plugins: [],
};
