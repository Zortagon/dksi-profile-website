const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
    const environment = env.production ? "production" : "development";
    return {
        mode: environment,
        entry: path.resolve("src/assets/js/index.js"),
        output: {
            path: path.resolve("public"),
            filename:
                environment === "production"
                    ? "js/[name][contenthash].js"
                    : "js/[name].js",
            assetModuleFilename: "static/[hash][ext]",
            clean: true,
            environment: {
                arrowFunction: !(environment === "production"),
            },
        },
        resolve: {
            alias: {
                jquery: "jquery/dist/jquery.slim.js",
            },
        },
        devtool: environment === "production" ? undefined : false,
        plugins: [
            new MiniCssExtractPlugin({
                filename:
                    environment === "production"
                        ? "css/[name][contenthash].css"
                        : "css/[name].css",
            }),
            new HTMLWebpackPlugin({
                title: "ICT Solutions for Businesses · PT Dua Kawan Sejahtera Indonesia",
                content: {
                    news: [
                        "[New] Introducing cutting-edge telemedicine equipment solutions! More Information ->",
                        "[Unveiling Latest Products] PT DKSI and ViewSonic showcase new innovations at E-Katalog exhibition ->",
                    ],
                },
                template: "src/index.html",
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.(?:js|mjs|cjs)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                ["@babel/preset-env", { targets: "defaults" }],
                            ],
                        },
                    },
                },
                {
                    test: /\.html$/i,
                    loader: "html-loader",
                },
                {
                    test: /\.css$/i,
                    use: [
                        MiniCssExtractPlugin.loader,
                        "css-loader",
                        "postcss-loader",
                    ],
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: "asset/resource",
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
        optimization: {
            minimize: true,
        },
    };
};
