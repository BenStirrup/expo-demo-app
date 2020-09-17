const path = require("path");
const webpack = require("webpack");
const dotenv = require("dotenv");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const rootDir = path.join(__dirname, "..");
const webpackEnv = process.env.NODE_ENV || "development";

module.exports = () => {
  const envPath = path.resolve(rootDir, ".env");
  const parsedEnv = dotenv.config({ path: envPath }).parsed;
  const envKeys = Object.keys(parsedEnv).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(parsedEnv[next]);
    return prev;
  }, {});

  return {
    mode: webpackEnv,
    target: "web",
    entry: {
      app: path.join(rootDir, "./index.web.ts"),
    },
    output: {
      path: path.resolve(rootDir, "dist"),
      filename: "app-[hash].bundle.js",
    },
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.(tsx|ts|jsx|js|mjs)$/,
          exclude: /node_modules/,
          loader: "ts-loader",
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "./index.html"),
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin(envKeys),
    ],
    resolve: {
      extensions: [
        ".web.tsx",
        ".web.ts",
        ".tsx",
        ".ts",
        ".web.jsx",
        ".web.js",
        ".jsx",
        ".js",
      ], // read files in fillowing order
      alias: Object.assign({
        "react-native$": "react-native-web",
      }),
    },
  };
};
