const webpack = require("webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  mode: "production",
  // devtool: "source-map",
  // performance: {
  //   hints: false,
  //   maxEntrypointSize: 512000,
  //   maxAssetSize: 512000,
  // },
  plugins: [
    new webpack.ProvidePlugin({
      process: "process/browser",
      compress: {
        // remove warnings
        warnings: false,
        // Drop console statements
        drop_console: true,
      },
      Buffer: ["buffer", "Buffer"],
    }),
    new webpack.DefinePlugin({
      process: {
        env: {
          NODE_ENV: JSON.stringify("production"),
          REACT_APP_TYPE: JSON.stringify("production"),
          BASE_URL: JSON.stringify("http://16.16.122.7:3030")
        },
      },
    }),
    new ReactRefreshWebpackPlugin(),
  ],
};
