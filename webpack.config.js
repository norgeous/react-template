var path = require('path');
var webpack = require('webpack');
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        'babel-polyfill',
        'webpack-dev-server/client?http://0.0.0.0:3000',
        'webpack/hot/only-dev-server',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: 'app.[hash].js'
    },
    devtool: 'eval',
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.join(__dirname, 'src'),
                loader: 'babel-loader',
                query: {
                    "presets": ["es2015", "stage-0", "react"],
                    "plugins": ["react-hot-loader/babel", 'transform-decorators-legacy']
                }
            }, {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }, {
                test: /\.scss$/,
                loader: "style!css!postcss!resolve-url!sass?sourceMap"
            }, {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&minetype=application/font-woff" 
            }, {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader" 
            }
        ]
    },
    resolveLoader : {
        modules : ['node_modules', __dirname + './node_modules'],
        moduleExtensions : ["-loader"]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            hash: false,
            template: './index.hbs'
        }),
        new webpack.LoaderOptionsPlugin({
            test: /\.scss$/,
            debug: true,
            options:  {
                postcss: function() {
                    return [precss, autoprefixer];
                },
                context: path.join(__dirname, 'src'),
                output: {
                    path: path.join(__dirname, 'dist')
                }
            }
        })
    ],
};
