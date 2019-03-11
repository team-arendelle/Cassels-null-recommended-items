// const webpack = require('webpack');
// const path = require('path');
// const SRC_DIR = path.join(__dirname, './client');
// const PORT = 8000;

// module.exports = {
//   mode: 'development',
//   entry: [`${SRC_DIR}/index.jsx`],
//   output: {
//     filename: 'bundle.js',
//     path: path.join(__dirname, './client/dist'), // output directory for main bundle file
//   },
//   module: {
//     rules: [
//       {
//         use: /\.jsx?/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//         },
//       },
//       {
//         test: /\.css$/,
//         use: [
//           'style-loader',
//           'css-loader'
//         ],
//         exclude: /\.module\.css$/
//       },
//       {
//         test: /\.scss$/,
//         use: [
//           'style-loader',
//           {
//             // CSS MODULES Setup
//             loader: 'css-loader',
//             options: {
//               modules: true,
//               sourceMap: true, // enable source maps for easier debugging during development
//               localIdentName: '[local]__[hash:base64:5]', // hash to use for local css classes (to essentially namespace styles)
//             },
//           },
//           {
//             loader: 'sass-loader',
//             options: {
//               sourceMap: true,
//             },
//           },
//         ],
//       },
//     ],
//   },
//   resolve: {
//     modules: ['node_modules', `${SRC_DIR}`], // directories to look for modules when importing (including the SRC_DIR allows you to import files relative to 'src' -- no need to '../../../component' !!) 
//     extensions: ['.js', '.jsx', '.scss', '.css', '.js', '.json'],
//   },
//   devtool: 'inline-sourcemap',
//   target: 'web',
//   devServer: {
//     proxy: {
//       "/api/recommendations": "http://3.17.185.179:3000"
//     },
//     host: '0.0.0.0',
//     port: process.env.PORT || PORT,
//     compress: true, // compress bundle in memory for faster loads during development
//     contentBase: path.join(__dirname, './public'), // the base directory to start the application from
//   },
// };

var path = require('path');
var SRC_DIR = path.join(__dirname, '/client');
var DIST_DIR = path.join(__dirname, '/client/dist');
var CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: ['babel-polyfill', `${SRC_DIR}/index.jsx`]
  },
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  }, 
  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx?$/],
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: { 
          presets: ['env', 'react', 'stage-0']
        }
      }
    ]
  },
  plugins: [
    new CompressionPlugin()
  ]
};