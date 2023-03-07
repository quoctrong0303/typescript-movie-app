/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
    darkMode: "class",
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        screens: {
            xs: "350px",
            ...defaultTheme.screens,
        },
        extend: {
            colors: {},
            fontFamily: {
                montserrat: ["Montserrat", "sans-serif"],
                poppins: ["Poppins", "sans-serif"],
            },
            fontSize: {
                xxs: ".65rem",
            },
            keyframes: {
                "fade-in": {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
            },
            animation: {
                "fade-in": "fade-in 1s ease-out",
            },
        },
    },
    plugins: [require("flowbite/plugin")],
};
