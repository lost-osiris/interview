const { resolve } = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DevServerConf = require('./webpack.devServer.js')

module.exports = {
  context: resolve(__dirname, 'src'),
  entry: {
    main: [
      'react-hot-loader/patch',
      './Dev.js'
    ]
  },
  output: {
    path: __dirname + '/dist/',
    publicPath: '/',
    filename: '[name].[hash].js'
  },
  // devtool: 'cheap-eval-source-map',
  devtool: 'eval',
  devServer: DevServerConf,
  resolve: {
    alias: {
      '~': resolve(__dirname, "./src/"),
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          },
        ]
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development'),
      }
    }),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({title: 'Interview', template: '../template.html', }),
  ],
  performance: {
    hints: false
  }
}
