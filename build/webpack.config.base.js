/*
这个插件是必须的！ 它的职责是将你定义过的其它规则复制并应用到 .vue 文件里相应语言的块。
例如，如果你有一条匹配 /\.js$/ 的规则，那么它会应用到 .vue 文件里的 <script> 块。
*/
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  module: {
    rules: [
      { test: /\.(js|vue)$/, use: ['eslint-loader'], enforce: 'pre', exclude: /node_modules/ },
      // 它会应用到普通的 `.js` 文件
      // 以及 `.vue` 文件中的 `<script>` 块
      { test: /\.js$/, use: ['babel-loader'], exclude: /node_modules/ },
      { test: /\.vue$/, use: ['vue-loader'] },
      // 它会应用到普通的 `.css` 文件
      // 以及 `.vue` 文件中的 `<style>` 块
      { test: /\.css$/, use: ['vue-style-loader', 'css-loader'] }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue']
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}
