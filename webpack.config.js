const path = require('path');
var CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, './client/src/index.jsx'),
  },
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: [
              'babel-plugin-react-generate-property',
              '@babel/plugin-transform-runtime',
            ],
          },
        },
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, './client/dist'),
    filename: 'bundle.js',
  },
  resolve: { extensions: ['.jsx', '.js'] },
  plugins: [new CompressionPlugin()],
};
