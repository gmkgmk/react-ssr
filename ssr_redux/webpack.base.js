const extractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  plugins: [new extractTextPlugin({ filename: "[name].css" })]
};
