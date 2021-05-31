const path = require("path");

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: isProd ? "production" : "development",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          envName: isProd ? "production" : "development",
          babelrc: false,
          cacheCompression: isProd,
          cacheDirectory: true,
          compact: isProd,
        },
      },
    ],
  },
  resolve: {
    extensions: [".mjs", ".js", ".ts", ".tsx"],
  },
};
