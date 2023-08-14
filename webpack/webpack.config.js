const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
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
    plugins: [
        new HTMLWebpackPlugin({ template: "src/index.html" }),
        new MiniCSSExtractPlugin({
            filename: "css/[name].css",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    MiniCSSExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                ],
            },
        ],
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
