const path = require('path')

module.exports = {
    // Inform webpack this is a bundle for Node not the browser
    target: 'node',
    // Give webpack the root file
    entry: './src/index.js',
    // Tell webpack where to place the bundle file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    // Run babel on the files
    module: {
        rules: [{
            test: /\.js?$/,
            loaders: 'babel-loader',
            exclude: /node_modules/,
            options: {
                presets: [
                    'react',
                    'stage-0', ['env', {
                        targets: {
                            browsers: [
                                'last 2 versions'
                            ]
                        }
                    }]
                ]
            }
        }]
    }
}