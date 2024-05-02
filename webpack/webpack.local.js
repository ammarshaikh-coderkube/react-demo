const webpack = require("webpack");
const path = require("path");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  cache: false,
  devServer: {
    port: 8888,
    hot: true,
    //enable hot module replacement
    historyApiFallback: true,
    open: true,
    //enable t open app in browser
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Methods": "*",
      "Cache-Control": "no-store",
    },
    // client: {
    //   overlay: false,
    // },
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    }),
    new webpack.DefinePlugin({
      process: {
        env: {
          NODE_ENV: JSON.stringify("development"),
          REACT_APP_TYPE: JSON.stringify("development"),
        },
      },
    }),
    new ReactRefreshWebpackPlugin(),
  ],
};
