const path = require("path");

module.exports = {
    mode: "development",
    entry: path.resolve("src/js/index.js"),
    output: {
        path: path.resolve("public"),
        filename: "js/[name].js",
        assetModuleFilename: "img/[name][ext]",
        clean: true,
    },
    resolve: {
        alias: {
            jquery: "jquery/dist/jquery.slim.js",
        },
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "public"),
        },
        compress: true,
        hot: true,
        port: 5500,
    },
};
