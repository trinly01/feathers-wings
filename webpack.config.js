const path = require('path');

module.exports = {
  mode: 'production',
  entry: './feathers-wings.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index.js',
    library: 'wings',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: 'babel-loader',
      },
      {
        test: /\.(aff|dic)$/i,
        use: 'raw-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
};
