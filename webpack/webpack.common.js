const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
module.exports = {
  entry: path.resolve(__dirname, "..", "./src/index.js"),
  resolve: {
    fullySpecified: false,
    fallback: {
      fs: false,
      net: false,
      util: false,
      tty: require.resolve("tty-browserify"),
      vm: require.resolve("vm-browserify"),
      stream: require.resolve("stream-browserify"),
      assert: require.resolve("assert"),
      http: require.resolve("stream-http"),
      https: require.resolve("https-browserify"),
      domain: require.resolve("domain-browser"),
      console: require.resolve("console-browserify"),
      zlib: require.resolve("browserify-zlib"),
      os: require.resolve("os-browserify"),
      url: require.resolve("url"),
    },
    extensions: [".js", ".jsx", ".node"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [{ loader: "babel-loader" }],
      },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/i, type: "asset/resource" },
      { test: /\.(woff(2)?|eot|ttf|otf|svg|webp)$/, type: "asset/inline" },
      { test: /\.node$/, use: "node-loader" },
    ],
  },
  output: {
    path: path.resolve(__dirname, "..", "./build"),
    filename: "index.js",
    publicPath: "/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "..", "./public/index.html"),
    }),
    new FaviconsWebpackPlugin({ logo: "./public/logo192.png" }),
  ],
};
