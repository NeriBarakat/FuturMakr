const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-eval-source-map',
  stats: 'errors-only',
  bail: true,
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'js/[name].bundle.js',
  },
  optimization: {
    minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin()],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style/[name].bundle.css',
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      chunks: ['main'],
      minify: false,
    }),
    new HtmlWebpackPlugin({
      template: 'src/login.html',
      filename: 'login.html',
      chunks: ['main'],
      minify: false,
    }),
    new HtmlWebpackPlugin({
      template: 'src/forgotPassword.html',
      filename: 'forgotPassword.html',
      chunks: ['main'],
      minify: false,
    }),
    new HtmlWebpackPlugin({
      template: 'src/forgotPasswordConfirmation.html',
      filename: 'forgotPasswordConfirmation.html',
      chunks: ['main'],
      minify: false,
    }),
    new HtmlWebpackPlugin({
      template: 'src/dashboard.html',
      filename: 'dashboard.html',
      chunks: ['main'],
      minify: false,
    }),
    new HtmlWebpackPlugin({
      template: 'src/courses.html',
      filename: 'courses.html',
      chunks: ['main'],
      minify: false,
    }),
    new HtmlWebpackPlugin({
      template: 'src/charts.html',
      filename: 'charts.html',
      chunks: ['main'],
      minify: false,
    }),
    new HtmlWebpackPlugin({
      template: 'src/solidGauge-chart.html',
      filename: 'solidGauge-chart.html',
      chunks: ['main'],
      minify: false,
    }),
    new HtmlWebpackPlugin({
      template: 'src/pathway-chart.html',
      filename: 'pathway-chart.html',
      chunks: ['main'],
      minify: false,
    }),
    new HtmlWebpackPlugin({
      template: 'src/dateBasedData-chart.html',
      filename: 'dateBasedData-chart.html',
      chunks: ['main'],
      minify: false,
    }),
    new HtmlWebpackPlugin({
      template: 'src/columns-moving-bullets.html',
      filename: 'columns-moving-bullets.html',
      chunks: ['main'],
      minify: false,
    }),
    new HtmlWebpackPlugin({
      template: 'src/micro-sparklines-chart.html',
      filename: 'micro-sparklines-chart.html',
      chunks: ['main'],
      minify: false,
    }),
    new HtmlWebpackPlugin({
      template: 'src/radial-line-graph.html',
      filename: 'radial-line-graph.html',
      chunks: ['main'],
      minify: false,
    }),
    new HtmlWebpackPlugin({
      template: 'src/plotting-chart.html',
      filename: 'plotting-chart.html',
      chunks: ['main'],
      minify: false,
    }),
    new HtmlWebpackPlugin({
      template: 'src/drill-treemap.html',
      filename: 'drill-treemap.html',
      chunks: ['main'],
      minify: false,
    }),
    new HtmlWebpackPlugin({
      template: 'src/forest-plot.html',
      filename: 'forest-plot.html',
      chunks: ['main'],
      minify: false,
    }),
    new HtmlWebpackPlugin({
      template: 'src/scatter-chart.html',
      filename: 'scatter-chart.html',
      chunks: ['main'],
      minify: false,
    }),
    new HtmlWebpackPlugin({
      template: 'src/stacked-area-chart.html',
      filename: 'stacked-area-chart.html',
      chunks: ['main'],
      minify: false,
    }),
    new HtmlWebpackPlugin({
      template: 'src/partitioned-bar-chart.html',
      filename: 'partitioned-bar-chart.html',
      chunks: ['main'],
      minify: false,
    }),
    new HtmlWebpackPlugin({
      template: 'src/column-chart.html',
      filename: 'column-chart.html',
      chunks: ['main'],
      minify: false,
    }),
    new HtmlWebpackPlugin({
      template: 'src/clustered-bar-chart.html',
      filename: 'clustered-bar-chart.html',
      chunks: ['main'],
      minify: false,
    }),
    new HtmlWebpackPlugin({
      template: 'src/force-directed-tree.html',
      filename: 'force-directed-tree.html',
      chunks: ['main'],
      minify: false,
    }),
    new HtmlWebpackPlugin({
      template: 'src/polar-chart.html',
      filename: 'polar-chart.html',
      chunks: ['main'],
      minify: false,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../', // path to director where assets folder is located
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 2,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
});
