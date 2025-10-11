// tailwind.config.js
module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
      extend: {},
    },
    daisyui: {
      themes: ["light", "dark"], // enable light + dark themes
    },
    plugins: [require("daisyui")],
  }
  