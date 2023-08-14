const { merge } = require("webpack-merge");
const commonConfiguration = require("./webpack.config.js");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge([
    commonConfiguration,
    {
        mode: "production",
        output: {
            environment: {
                arrowFunction: false,
            },
        },
    },
]);
