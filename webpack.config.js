let path = require('path');
const webpack = require('webpack');
// let HtmlWebpackPlugin = require('html-webpack-plugin');
var babelpolyfill = require("babel-polyfill");
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const OpenBrowserPlugin = require('open-browser-webpack-plugin');
let isDev = process.env.NODE_ENV === 'development'; // 是否是开发环境
let a;
if (process.env.NODE_ENV === 'development') {
    a = JSON.stringify('development');
} else {
    a = JSON.stringify('production');
}
module.exports = {
    entry: './src/index.js',
    // entry:{
    // bundle: "./src/index.js",
    //   // vendor: ['react','react-dom','react-router-dom','react-router-redux','antd','redux','redux-thunk','redux-promise','axios'],
    //   // vendor: ['react','react-dom','react-router-dom','react-router-redux','antd','redux','redux-thunk','redux-promise','axios']
    // },
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.[hash:7].js',
        // publicPath: isDev ? 'http://localhost:8080/' : '/',
        publicPath: '/'
    },
    /* externals: {
         'react': 'React',

       },*/
    devtool: isDev ? 'cheap-module-eval-source-map' : undefined,
    // context: __dirname,
    devServer: {
        hot: true,
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新
        // host:'10.31.0.199',
        port: 8000,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        //如果请求的路径是以/api开头的话，会由这个服务来进行解析处理
        // proxy:{}
        proxy: {
            "/api": {
                target: "http://192.168.204.122:8082",
                changeOrigin: true,
                secure: true,
                pathRewrite: {'^/api': ''}
            },
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    "presets": [
                        "es2015", "stage-0", "react"
                    ],
                    "plugins": [
                        "transform-object-rest-spread",
                        "transform-class-properties",
                        ["import", {libraryName: "antd", style: "css"}]
                    ]
                }
            },
            {
                test: /\.less$/,
                loaders: ["style-loader", "css-loader", "less-loader"]
            },
            {
                test: /\.css$/,
                loaders: ["style-loader", "css-loader"]
            },
            {
                test: /\.(jpg|png|gif|eot|svg|woff2|wtf|ttf|woff)$/,
                loader: 'url-loader'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: a
            }

        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: '[name].bundle.[hash:7].js',
            minChunks: Infinity
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]
}
/*
 // new OpenBrowserPlugin({ url: `http://${"localhost"}:8080/` }),
      // new webpack.HotModuleReplacementPlugin(),
plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ]
 */