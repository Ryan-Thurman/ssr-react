const path = require('path')
const merge = require('webpack-merge')
const baseconfig = require('./webpack.base.js')

const clientConfig = {
    // Give webpack the root file
    entry: './src/client/client.js',
    // Tell webpack where to place the bundle file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    }
}

module.exports = merge(baseconfig, clientConfig)