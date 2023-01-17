const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
// const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const smp = new SpeedMeasurePlugin();

let mode = 'development'; // По умолчанию режим development
if (process.env.NODE_ENV === 'production') { // Режим production, если
  // при запуске вебпака было указано --mode=production
  mode = 'production';
}

const backendUrl = 'http://localhost:8080'

const plugins = [
  new HtmlWebpackPlugin({
    template: './public/index.html', // Данный html будет использован как шаблон
  }),
  new webpack.ProgressPlugin(),
  // new CleanWebpackPlugin()
];

module.exports = smp.wrap({
  mode,
  plugins,

  entry: {
    main: './src/index.tsx'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].js",
    publicPath: '/'
  },

  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts']
  },

  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },

  watchOptions: {
    poll: 1000
  },
  target: 'web',
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    port: 8081,
  },

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
            cacheDirectory: true
          },
        },
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      { test: /\.css$/i,
        use: ['style-loader', 'css-loader',  'postcss-loader']
      },
      {
        test: /\.(mp4|png|jpe?g|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            cacheDirectory: true,
          },

        },
      }
    ],
  }
})