module.exports = (context) => ({
    plugins: {
        "tailwindcss/nesting": {},
        tailwindcss: {},
        "postcss-preset-env": {
            browsers: [">0.3%", "last 2 version", "not dead"],
        },
        ...(context.env === "production" ? { cssnano: {} } : {}),
    },
});
