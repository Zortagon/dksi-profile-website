const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

// Check if current environment is "development" or "production"
const isDevelopment = () =>
    process.env.NODE_ENV.replace(/\s/g, "") === "development";

module.exports = {
    mode: "development",
    entry: path.resolve("src/js/index.js"),
    output: {
        path: path.resolve("public"),
        filename: isDevelopment()
            ? "js/[name].js"
            : "js/[name][contenthash].js",
        assetModuleFilename: isDevelopment()
            ? "img/[name][ext]"
            : "img/[name][contenthash][ext]",
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
            filename: isDevelopment()
                ? "css/[name].css"
                : "css/[name][contenthash].css",
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
