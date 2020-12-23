var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname, '/src'),
  entry: './entry.js',

  devServer: {
    publicPath: '/build/'
  },

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/build'),
    publicPath: 'http://localhost:8080/build/'
  },

  externals: ['tailwindcss'],

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
          {
            loader: 'postcss-loader', // For autoprefixer
            options: {
              postcssOptions: {
                ident: 'postcss',
                // eslint-disable-next-line global-require, @typescript-eslint/no-var-requires
                plugins: [require('tailwindcss'), require('autoprefixer')],
              },
            },
          },
          { loader: 'sass-loader'}
        ]
      }
    ]
  }
};
