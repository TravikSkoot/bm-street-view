const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: '/js/main.js', // Dein Einstiegspunkt
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html', // Dein HTML-Template
            filename: 'index.html', // Der Name der Ausgabe-HTML-Datei
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/, // Für alle .css-Dateien
                use: ['style-loader', 'css-loader'], // Verwendet style-loader und css-loader
            },
            {
                test: /\.(png|svg|jpg|gif)$/, // Für Bild-Dateiformate
                use: ['file-loader'], // Verwendet file-loader
            },
        ],
    },
};
