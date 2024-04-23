const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {

    mode: 'development',
    entry: path.resolve(__dirname, '../src/index.js'),
    output: {
        path:  path.resolve(__dirname,'../build'),
        filename: 'js/[name].[hash].bundle.js'
    },
    module: {
        rules:[
            {
                test: /\.(mjs|js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                // 将 JS 字符串生成为 style 节点
                'style-loader',
                // 将 CSS 转化成 CommonJS 模块
                'css-loader',
                // 将 Sass 编译成 CSS
                'sass-loader',
            ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html'),
            title:'首页'
        })
    ],
    resolve: {
        extensions: ['.mjs', '.js', '.jsx'],
    },

}