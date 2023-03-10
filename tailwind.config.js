module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screen: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      montserrat: ["Montserrat, sans-serif"],
      daysOne: ["daysOne, sans-serif"],
    },
    extend: {
      colors: {
        "flaex-primary": "#BF83FF",
        "flaex-heading": "#fafafa",
        "flaex-text": "#f9ce75",
        "flaex-text-dark": "#2e2e2e",
        "flaex-hover-text": "#f6b42c",
        "flaex-bg-primary": "#2B3A55",
        "flaex-bg-hover": "#1e283b",
        "flaex-bg-second": "#3a3a3a",
        "flaex-border": "#C4C4C4",
        "flaex-border-table": "#F5F5F5",
        "flaex-green": "#00E833",
        "flaex-red": "#FF1D1D",
        "flaex-button": "#BD905A",
      },
      backgroundImage: {
        hero: "url('/images/home/bg_hero_blue.webp')",
      },
    },
  },
  plugins: [],
};
