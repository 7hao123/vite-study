vite介绍

可以使用.env.xxx  然后在命令里面 通过vite --mode xxx来使用特定的环境变量

热更新
热更新是框架相关的  HMR API
if(import.meta.hot){
    import.meta.hot.accept = (()=>{
        newModule.render()
    })
}

glob-import 批量引入

vite 预编译  
1.vite对引入的依赖，再第一次启动之前会进行预编译放到.vite/deps,之后直接读就行了（缓存）
2.预编译的过程中把cjs to esm   
3.bundle files together 比如说把lodash弄成一个
可以配置 optimizeDeps来预编译

如果修改vite.config vite会重启
第三方库的js一般都有cache vite我们本地文件强制no cache

几个打包器进行比较
rollup 是JavaScript打包器
webpack 也是javascript打包器
esbuild是编译器（parse+transformer）+轻量bundler
webpack借助 babel-loader来parser+transformer生成ast转换

vite插件的hooks
options 
buildStart
当启动dev-server的时候调用
vite 插件开发 
resolveId 找到对应的文件源码
load   进行加载
transform 对源码进行转换