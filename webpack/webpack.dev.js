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
    new HtmlWebpackPlugin({
      template: 'src/dateBasedData-chart.html',
      filename: 'dateBasedData-chart.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      template: 'src/columns-moving-bullets.html',
      filename: 'columns-moving-bullets.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      template: 'src/micro-sparklines-chart.html',
      filename: 'micro-sparklines-chart.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      template: 'src/radial-line-graph.html',
      filename: 'radial-line-graph.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      template: 'src/plotting-chart.html',
      filename: 'plotting-chart.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      template: 'src/drill-treemap.html',
      filename: 'drill-treemap.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      template: 'src/forest-plot.html',
      filename: 'forest-plot.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      template: 'src/scatter-chart.html',
      filename: 'scatter-chart.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      template: 'src/stacked-area-chart.html',
      filename: 'stacked-area-chart.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      template: 'src/partitioned-bar-chart.html',
      filename: 'partitioned-bar-chart.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      template: 'src/column-chart.html',
      filename: 'column-chart.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      template: 'src/clustered-bar-chart.html',
      filename: 'clustered-bar-chart.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      template: 'src/force-directed-tree.html',
      filename: 'force-directed-tree.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      template: 'src/polar-chart.html',
      filename: 'polar-chart.html',
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
