var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname, '/src'),
  entry: './entry.js',

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/build'),
    publicPath: 'http://localhost:8080/build/'
  },

  module: {
    rules: [
      { test: /\.js$/, 
        loader: 'babel-loader', 
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/react',
            { 'plugins': ['@babel/plugin-proposal-class-properties'] }
          ]
        },
        exclude: /node_modules/ },
      { test: /\.scss$/, 
        use: [
          { loader: 'style-loader' }, 
          { loader: 'css-loader' },
          { loader: 'sass-loader'}
        ]
      }
    ]
  }
};
