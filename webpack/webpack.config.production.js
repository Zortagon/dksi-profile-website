const { merge } = require("webpack-merge");
const commonConfiguration = require("./webpack.config.js");

module.exports = merge([
    commonConfiguration,
    {
        mode: "production",
        output: {
            filename: "js/[name][contenthash].js",
            assetModuleFilename: "img/[hash][ext]",
            environment: {
                arrowFunction: false,
            },
        },
    },
]);
