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
      iCielAlina: ["iCielAlina, sans-serif"],
      daysOne: ["daysOne, sans-serif"],
      lucyCat: ["lucyCat, sans-serif"],
    },
    extend: {
      colors: {
        "chipo-heading": "#fafafa",
        "chipo-text": "#f9ce75",
        "chipo-text-dark": "#2e2e2e",
        "chipo-hover-text": "#f6b42c",
        "chipo-bg-primary": "#2B3A55",
        "chipo-bg-hover": "#1e283b",
        "chipo-bg-second": "#3a3a3a",
        "chipo-border": "F0CAA3",
      },
      backgroundImage: {
        "hero-second": "url('/images/home/bg_hero_blue.webp')",
        "hero-shop": "url('/images/home/bg_hero.webp')",
        contact: "url('/images/home/bg-contact.webp')",
      },
    },
  },
  plugins: [],
};
