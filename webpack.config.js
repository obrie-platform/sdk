const path = require('path');

module.exports = {
    entry: './src/index',
    mode: "production",
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'main.js',
        publicPath: '/',
        libraryTarget: "umd",
        library: "obrieSdk"
    },
    externals: {
        'react': 'umd React'
    },
    // target: "node",
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                },
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
    }
};