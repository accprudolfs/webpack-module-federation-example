const webpack = require('webpack')
const { merge } = require('webpack-merge')
const common = require('../webpack.common')

const { ModuleFederationPlugin } = webpack.container

module.exports = merge(common, {
  plugins: [
    new ModuleFederationPlugin({
      name: 'login',
      filename: 'remoteEntry.js',
      exposes: {
        './Login': './Login.js',
      },
      shared: [
        {
          react: { singleton: true, eager: true, },
          'react-dom': { singleton: true, eager: true, },
        },
      ],
    }),
  ],
})