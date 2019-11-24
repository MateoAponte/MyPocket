const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const liveReloadPlugin = require('webpack-livereload-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const webpack = require('webpack');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = [
    {
        mode: devMode ? 'development' : 'production',
        devtool: devMode ? 'inline-source-map' : 'source-map',
        entry: {
            index: './src/main.js',
        },
        output: {
            path: __dirname + '/dist/',
            filename: 'bundle.js'
        },
        resolve: {
            extensions: ['.vue', '.js', '.scss'],
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
                },
                {
                    test: /\.(png|jpg|gif|svg)$/,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            name: '../img/[name].[ext]?[hash]'
                        }
                    }]
                },
            ],
        },
        optimization: {
            moduleIds: 'hashed',
            runtimeChunk: 'single',
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'all'
                    }
                }
            }
        },
        plugins: [
            new VueLoaderPlugin(),
            new HtmlWebpackPlugin({
                template: './src/index.html'
            }),
            new WebpackNotifierPlugin(),
            new liveReloadPlugin(),
            new webpack.HotModuleReplacementPlugin()
        ],
    },
]

