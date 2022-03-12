module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#4661E6",
          secondary: "#AD1FEA",
          "secondary-focus": "#C75AF6",
          "primary-focus": "#7C91F9",
          accent: "#62bcfa",
          "success-content": "#373F68",
          "neutral-focus": "#656EA3",
          "base-100": "#ffffff",
          "base-300": "#F2F4FF",
          "base-200": "#F7F8FD",
          neutral: "#3A4374",
          info: "#647196",
          warning: "#F49F85",
          error: "#D73737",
          "error-content": "#E98888",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
