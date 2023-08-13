const path = require("path");

module.exports = {
    mode: "development",
    entry: path.resolve("src/js/index.js"),
    output: {
        path: path.resolve("public"),
        filename: "js/[name].js",
        clean: true,
    },
};
