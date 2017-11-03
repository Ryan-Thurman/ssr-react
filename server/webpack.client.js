const path = require('path')

module.exports = {
    // Give webpack the root file
    entry: './src/client/client.js',
    // Tell webpack where to place the bundle file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
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