const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const liveReloadPlugin = require('webpack-livereload-plugin');
const browserSyncWebpackPlugin = require('browser-sync-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/main.js',
    },
    output: {
        path: __dirname + '/dist/',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.vue', '.js', '.scss', '.jpg', '.jpeg', '.png', '.svg'],
        alias: {
            '@Components': path.resolve(__dirname, 'src/components/'),
            '@Router': path.resolve(__dirname, 'src/router/'),
            '@Views': path.resolve(__dirname, 'src/views/'), 
            '@Store': path.resolve(__dirname, 'src/store/'),
            '@Assets': path.resolve(__dirname, 'src/assets/'),
            '@Scripts': path.resolve(__dirname, 'src/scripts/'),
            '@Styles': path.resolve(__dirname, 'src/assets/scss/'),
        },
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader', options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader', options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
       new liveReloadPlugin(),
       new webpack.HotModuleReplacementPlugin()
    ],
}

