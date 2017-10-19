module.exports = {
    entry: './src/main.js',
    output: {
        path: './dist',
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        contentBase: './',
        historyApiFallback: true,
        port: 8080
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
        },
        {
            test: /\.css$/,
            loaders: ['style', 'css']
          }]
    }
}
