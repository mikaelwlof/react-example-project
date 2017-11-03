var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');
const context = path.resolve(__dirname, './src');

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  devServer: {
      historyApiFallback: true,
      contentBase: './src/client/',
      hot: true,
      host: 'my.env'
  },
  plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default']
      })

  ],
  module : {
    rules: [
      {
        test : /\.(js|jsx)$/,
        include : APP_DIR,
        use: [
          {loader : 'babel-loader', query: { presets:[ 'es2015', 'react', 'stage-2' ], retainLines: true}}
        ]
      },
      {
        test: /\.css$/,
        exclude: /src/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'}
        ]
      },
      {
        test: /\.css$/,
        include: /src/,
        use: [
          {loader: 'style-loader', query: {localIdentName: '[name]__[local]___[hash:base64:5]'}},
          {loader: 'css-loader', query: { modules: true, localIdentName: '[name]__[local]___[hash:base64:5]'}}
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: '[path][name].[ext]'
            }
          }
        ]
      }
    ]
  }
};

module.exports = config;
