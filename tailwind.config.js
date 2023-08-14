const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import("tailwindcss").Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", ...defaultTheme.fontFamily.sans],
                mono: ["JetBrains Mono", ...defaultTheme.fontFamily.mono],
                display: ["Epilogue", defaultTheme.fontFamily.sans],
            },
            colors: {
                "wash-me": "#f9fafe",
                "trapped-darkness": "#0b1f2a",
                goldie: "#ca9d42",
                birdseye: "#aa823c",
                "aged-antics": "#85682c",
                "bark-brown": "#705628",
            },
        },
    },
    plugins: [],
};
