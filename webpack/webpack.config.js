const path = require("path");

module.exports = {
    entry: path.resolve("src/js/index.js"),
    output: {
        path: path.resolve("public"),
        filename: "main.js",
    },
};
