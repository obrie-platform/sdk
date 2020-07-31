const path = require('path');

module.exports = {
    entry: './src/index',
    mode: "production",
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.js',
        publicPath: '/',
        libraryTarget: "umd",
        library: "obrieReact"
    },
    externals: {
        'react': 'umd React',
        '@obrie/sdk': 'umd obrieSdk',
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