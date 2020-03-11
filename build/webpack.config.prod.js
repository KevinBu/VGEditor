const path = require('path')
const webpack = require('webpack')
// 如果配置文件被分成了许多不同的部分，那么必须以某种方式来组合他们，通常就是合并数组和对象，webpack-merge很好的做到了这一点。
// webpack-merge做了两件事：它允许连接数组并合并对象，而不是覆盖组合。
const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.config.base')

module.exports = merge(webpackBaseConfig, {
  mode: 'production',
  entry: {
    bundle: path.resolve(__dirname, '..', 'src/index.js')
  },
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: '[name].js',
    library: 'VGEditor',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.ProgressPlugin(
      function handler(percentage, msg) {
        console.log((percentage.toFixed(2) * 100) + '%', msg)
      })
  ],
  devtool: 'cheap-module-source-map',
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  }
})
