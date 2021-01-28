const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css?$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  
  plugins: [new HtmlWebpackPlugin({ 
    template: path.resolve(__dirname, 'public/index.html'),
    filename: 'index.html' 
  })]
}