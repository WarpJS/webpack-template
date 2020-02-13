const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  plugins: [
    new CleanWebpackPlugin(), // clean output for each build
    new HtmlWebpackPlugin({
      template: 'src/index.html' // define html template
    }),
    new CopyPlugin([
      { from: 'public', to: '.' } // copy assets to output
    ]),
  ]
}
