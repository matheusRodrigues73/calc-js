const path = require("path");
const miniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    compress: true,
    port: 4000,
  },
  entry: "./pages/main.jsx",
};
