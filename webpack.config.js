module.exports = {
  entry: './src/client/index.js',
  output: {
    path: __dirname + '/src/server/public',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/
      }
    ]
  },
};
