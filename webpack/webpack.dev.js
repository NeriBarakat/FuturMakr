const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-eval-source-map',
  output: {
    chunkFilename: '[name].chunk.js',
  },
  devServer: {
    inline: true,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      template: 'src/login.html',
      filename: 'login.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      template: 'src/forgotPassword.html',
      filename: 'forgotPassword.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      template: 'src/forgotPasswordConfirmation.html',
      filename: 'forgotPasswordConfirmation.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      template: 'src/dashboard.html',
      filename: 'dashboard.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      template: 'src/courses.html',
      filename: 'courses.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      template: 'src/charts.html',
      filename: 'charts.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      template: 'src/pathway-chart.html',
      filename: 'pathway-chart.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      template: 'src/solidGauge-chart.html',
      filename: 'solidGauge-chart.html',
      chunks: ['main'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
});
