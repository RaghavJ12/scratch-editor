const { merge } = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common.js");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

process.env["NODE_ENV"] = "production";

module.exports = merge([
  common,
  {
    mode: "production",
    devtool: false,
    output: {
   
      path: path.resolve(__dirname, 'dist'), // this will open index.html file in dist folder by default
      filename: "[name].[contenthash].bundle.js",
      
    },
    plugins: [
      new HtmlWebpackPlugin({
        template:  path.resolve('./dist/index.html'),
      }),
    ],
    optimization: {
      minimize: true,
      minimizer: [
        // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
        // `...`,
        new CssMinimizerPlugin(),
      ],
    },
  },
]);
