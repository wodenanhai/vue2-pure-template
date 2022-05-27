const webpack = require("webpack");
module.exports = {
    publicPath: './',
    lintOnSave: false,
    runtimeCompiler: true,
    transpileDependencies: true,
    devServer: {
        headers: {
            // 开发模式, 允许跨域配置
            'Access-Control-Allow-Origin': '*',
        },
        proxy: { // 配置跨域
            '/xmjyh': {
                //要访问的跨域的api的域名
                target: 'http://192.168.1.245:20060/xmjyh/',
                ws: true,
                changOrigin: true,
            }
        },
    },
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                jQuery: "jquery",
                $: "jquery",
                "windows.jQuery": "jquery",
            })
        ]
    }
}
