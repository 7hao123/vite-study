const HtmlWebpackPlugin = require("html-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const path = require("path");
const { stat } = require("fs");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
    print: "./src/print.js",
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  optimization: {
    runtimeChunk: "single",
  },
  plugins: [
    new HtmlWebpackPlugin({ title: "Development" }),
    new WebpackManifestPlugin({
      fileName: "manifest.json",
    }),
  ],
};
