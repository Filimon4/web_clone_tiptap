/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{jsx, js}"],
  theme: {
    fontFamily: {
      poly: [
        "Polysans median",
        "sans-serif"
      ]
    },
    extend: {
      fontFamily: {
        'sans': [
          "Polysans median",
          "sans-serif"
        ]
      },
    },
    fontSize: {
      "s": "0.6rem",
      "xs": "0.8rem",
      "sm": "1.3rem",
      "xl": ["1.55rem", "1.4"],
      "6xl": ["5.5rem", '1'],
      "7xl": ["7rem", '0.95']
    },
    colors: {
      "nav": "rgba(255, 255, 255, .85)",
      "body": "rgb(245 245 244)",
      "nav-bar": "rgb(34 34 34)",
      "card": "rgb(245 245 244)",
      "white": "rgb(255,255,255)",
      "footer-bag": "rgb(26 25 25)",
      "halfwhite": "rgba(255,255,255,0.6)"
    },
  },
  plugins: [],
}

