const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  theme: 'vdoing', // 使用依赖包主题
  // theme: require.resolve('../../theme-vdoing'), // 使用本地主题

  title: "YiMo.一茉",
  description: '学习，分享，写作充实的快乐的生活，你知道的越多，你不知道的也就越多！',
  // base: '/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 代码行号
    extractHeaders: [ 'h2', 'h3', 'h4', 'h5', 'h6' ]
  },

  head,
  plugins,
  themeConfig,
}
