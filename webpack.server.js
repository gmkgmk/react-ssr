const webpack = require("webpack");
const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");
const webpackNodeExternals = require("webpack-node-externals");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const paths = {
  serverJs: path.resolve(__dirname, "app/server.js"),
  serverDist: path.resolve(__dirname, "build"),
  srcPath: path.resolve(__dirname, "src"),
  staticPath: path.resolve(__dirname, "static")
};

let plugins = [new ExtractTextPlugin("[name].css")];

if (process.env.NODE_ENV === "analyse") {
  plugins.push(new BundleAnalyzerPlugin()); //模块监控模块
}

const config = {
  target: "node",
  entry: {
    server: paths.serverJs
  },
  output: {
    path: paths.serverDist,
    filename: "bundle.js"
  },
  externals: [webpackNodeExternals()],
  node: {
    __dirname: false,
    __filename: false
  },
  resolve: {
    modules: ["node_modules", "app", "static"],
    extensions: ["*", ".js", ".json"],
    alias: {
      src: paths.srcPath,
      static: paths.staticPath,
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        enforce: "pre",
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          query: {
            plugins: [
              [
                "import",
                {
                  libraryName: "antd",
                  style: false
                }
              ]
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "css-loader/locals",
            options: {
              modules: true
            }
          },
          "postcss-loader"
        ]
      },
      {
        test: /\.(png|jpe?g|gif|mp3|woff|woff2|ttf|eot|svg)(\?.*)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "/images/[name].[ext]",
              // Don't emit file again
              emitFile: false
            }
          }
        ]
      }
    ]
  },
  plugins
};
module.exports = config;
