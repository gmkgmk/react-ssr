const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");
const extractTextPlugin = require("extract-text-webpack-plugin");

const paths = {
  cilentJs: path.resolve(__dirname, "src/index.js"),
  cilentDist: path.resolve(__dirname, "public"),
  srcPath: path.resolve(__dirname, "src"),
  staticPath: path.resolve(__dirname, "static"),
  
};

const clientConfig = {
  devtool: "cheap-module-source-map",
  target: "web",
  entry: paths.cilentJs,
  output: {
    path: paths.cilentDist,
    pathinfo: true,
    filename: "js/bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        enforce: "pre",
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: function test(filePath) {
          return /\.css$/.test(filePath) && !/\.p\.css$/.test(filePath);
        },
        use: extractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader"]
        })
      },
      {
        test: /\.p\.css$/,
        use: extractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader?modules", "postcss-loader"]
        })
      },
      {
        test: /\.(png|jpe?g|gif|eot|svg|ttf|woff|woff2|otf)/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "/images/[name].[ext]",
            }
          }
        ]
      }
    ]
  },
  resolve: {
    modules: ["node_modules","static"],
    extensions: [".web.js", ".js", ".json", ".web.jsx", ".jsx"],
    alias: {
      src: paths.srcPath,
      static: paths.staticPath,
    }
  },
  plugins: [
    new extractTextPlugin({
      filename: "/css/[name].css"
    })
  ]
};
module.exports = clientConfig;
