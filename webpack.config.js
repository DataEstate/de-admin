const HtmlWebPackPlugin = require("html-webpack-plugin");
const fs = require("fs");
const path = require("path");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = () => {
  const NODE_ENV = process.env.NODE_ENV;

  const currentPath = path.join(__dirname);
  const basePath = currentPath + "/.env";
  const envPath = basePath + (NODE_ENV !== undefined ? `.${NODE_ENV}` : "");

  const finalPath = fs.existsSync(envPath) ? envPath : basePath;

  return {
    entry: {
      index: "./src/index.js"
    },
    output: {
      path: path.resolve(__dirname, "public"),
      publicPath: "/"
    },
    devServer: {
      port: 9001,
      historyApiFallback: true,
      proxy: {
        "/api": "http://localhost:3000"
      }
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader"
            }
          ]
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"]
        },
        {
          test: /\.scss$/,
          use: ["style-loader", "css-loader", "sass-loader"]
        }
      ]
    },
    resolve: {
      extensions: [".js", ".jsx"]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
      }),
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "style.css"
      })
    ]
  };
};
