rollup 是开源类库打包工具
只能识别esm  需要通过resolve node插件
打包默认tree shaking  没有用到的代码会去掉
rollup -i index.js --file dist.js
--dir 输出到某个目录
--environment 通过process.env.Mode这些
多种打包格式的话，导出一个数组
由于react 是cjs ，所以不能直接打包