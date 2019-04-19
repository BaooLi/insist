// options:{fix:true}
// js-Beautify 格式化插件
/*
批量引入lodash
new webpack.ProvidePlugin({
"_":"lodash"
})
require("expose-loader?_!loadsh");
require("expose-loader?libraryName!./file.js"); 把导出的变量挂到全局上，window上
弊端：script 引入 cdn 会往windos上挂一个window._
cdn已经帮我们挂过了，在文件中不需要引入了


代码发生变化之后重新打包，监控源文件的变化，源文件发生改变后悔自动重新打包
dev-Server:{ proxy：xxx}
有些时候需要重写路径，需要修改配置，写在外面
webpack-dev-server 本质上是一个开放服务器，相当于express
before(app){
    app.get('/api/users',function(req,res){
    res.json([
    a:2,
    b:3
    ])
    })
}


 */
