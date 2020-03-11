/*
child_process模块是nodejs的一个子进程模块，可以用来创建一个子进程，并执行一些任务。
执行一些什么任务呢？shell命令知道吧，有了child_process模块，就可以直接在js里面调用shell命令去完成一些非常酷炫的操作了！！
举个栗子，GitHub、码云等git代码托管网站，都会有个webHook功能，当push了新的代码后，
服务器可以开辟一个接口去接受这个webHook的请求，并进行git pull、npm run build等命令，从而达到自动化部署的目的！
*/
const { exec } = require('child_process')

/*
# 转码结果输出到标准输出
$ babel example.js

# 转码结果写入一个文件
# --out-file 或 -o 参数指定输出文件
$ babel example.js --out-file compiled.js
# 或者
$ babel example.js -o compiled.js

# 整个目录转码
# --out-dir 或 -d 参数指定输出目录
$ babel src --out-dir lib
# 或者
$ babel src -d lib

# -s 参数生成source map文件
$ babel src -d lib -s
*/

/*
rimraf ./es && babel ./src -d ./es
使用webpack build文件项目时每次都会生成一个dist目录，有时需要把dist目录里的所以旧文件全部删掉，
除了可以使用rm -rf /dist/命令删除外，还可以使用rimraf /dist/命令；
rimraf 的作用：以包的形式包装rm -rf命令，用来删除文件和文件夹的，不管文件夹是否为空，都可删除；
*/
exec('npm run build:es', error => {
  console.log(error || 'Build es success!')
})

/*
rimraf ./cjs && babel ./src -d ./cjs --plugins @babel/plugin-transform-modules-commonjs
commonjs模块规范。
每一个文件就是一个模块，拥有自己独立的作用域，变量，以及方法等，对其他的模块都不可见。

CommonJS规范规定
每个模块内部，module变量代表当前模块。
这个变量是一个对象，它的exports属性（即module.exports）是对外的接口。
加载某个模块，其实是加载该模块的module.exports属性。
require方法用于加载模块。

CommonJS模块的特点如下。
所有代码都运行在模块作用域，不会污染全局作用域。
模块可以多次加载，但是只会在第一次加载时运行一次，然后运行结果就被缓存了，以后再加载，就直接读取缓存结果。
要想让模块再次运行，必须清除缓存。
模块加载的顺序，按照其在代码中出现的顺序。
*/
exec('npm run build:cjs', error => {
  console.log(error || 'Build cjs success!')
})

/*
rimraf ./dist && webpack --config ./build/webpack.config.prod.js --progress

*/
exec('npm run build:umd', error => {
  console.log(error || 'Build umd success!')
})

// exec('npm run build:demo', error => {
//   console.log(error || 'Build demo success!')
// })
