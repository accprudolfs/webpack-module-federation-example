const { merge } = require('webpack-merge')
const TerserJSPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const purgeCSS = require('@fullhuman/postcss-purgecss')
const config = require('./webpack.config')

module.exports = merge(config, {
  devtool: 'source-map',
  optimization: {
    minimizer: [new TerserJSPlugin({}), new CssMinimizerPlugin({})],
  },
  plugins: [
    // purgeCSS({
    //   content: [
    //     './App.js',
    //   ],
    //   css: ['./main.css'],
    // }),
  ],
})
