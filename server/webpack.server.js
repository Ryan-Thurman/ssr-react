const path = require('path')
const merge = require('webpack-merge')
const baseconfig = require('./webpack.base.js')
const webpackNodeExternals = require('webpack-node-externals')

const serverConfig = {
    // Inform webpack this is a bundle for Node not the browser
    target: 'node',
    // Give webpack the root file
    entry: './src/index.js',
    // Tell webpack where to place the bundle file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    externals: [webpackNodeExternals()]
}

module.exports = merge(baseconfig, serverConfig)