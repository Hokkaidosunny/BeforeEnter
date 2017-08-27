const path = require('path');

module.exports = {
  entry: path.join(__dirname, './src/onEnter.js'),
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'onEnter.js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      loader: 'babel-loader'
    }]
  },
  externals: {
    'react': 'React'
  }
};
