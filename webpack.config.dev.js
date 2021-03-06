const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/index.js',
    output:{
        path:__dirname+'/dist',
        publicpath:'',
        assetModuleFilename: 'asset/[hash][ext][query]'
        },
    module:{
        rules: [
            {
                test: /[.]scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpeg|jpg|gif|svg|woff|woff2|eot|ttf|otf)$/,
                type: 'asset/resource'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html              '
        })
    ],
    mode:'production'
    
}