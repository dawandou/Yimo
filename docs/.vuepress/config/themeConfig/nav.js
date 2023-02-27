// nav
module.exports = [
  { text: '首页', link: '/' },
  { text: '导航站', link: '/nav/' },
  {
    text: 'Java基础', link: '/java/',
    items: [
      { text: 'Java基础知识', link: '/base-java/'},
      { text: 'Java进阶', link: '/progress-java/'},
      { text: '设计模式', link: '/design-model/'},
    ]
  },
  {
    text: 'Java框架', link: '/frame/',
    items: [
      { text: 'Spring', link: '/spring/'},
      { text: 'SpringMVC', link: '/spring-mvc/'},
      { text: 'SpringBoot', link: '/spring-boot/'},
      { text: 'SpringCloud', link: '/spring-cloud/'},
    ]
  },
  {
    text: '数据库', link: '/data/',
    items: [
      { text: 'Redis', link: '/redis/'},
      { text: 'MySQL', link: '/mysql/'},
    ]
  },
  {
    text: '前端', link: '/web/',
    items: [
      { text: 'HTML', link: '/html/'},
      { text: 'CSS', link: '/css/'},
      { text: 'Vue2', link: '/vue2/'},
      { text: 'Vue3', link: '/vue3/'},
      { text: 'uni-app', link: '/uni-app/'},
    ]
  },
  {
    text: '项目教程', link: '/project/',
    items: [
      { text: '博客实战教程', link: '/blog/'},
      { text: '图书馆实战教程', link: '/library/'},
    ]
  },
  {
    text: '中间件', link: '/middleware/',
    items: [
      { text: '网关', link: '/gateway/'},
      { text: '数据缓存', link: '/cache/'},
      { text: '搜索', link: '/search/'},
      { text: '注册中心', link: '/registry/'},
      { text: '消息队列', link: '/info/'},
      { text: 'RPC框架', link: '/rpc/'},
    ]
  },
  {
    text: '运维', link: '/devops/',
    items: [
      { text: 'Nginx', link: '/nginx/'},
      { text: 'Docker', link: '/docker/'},
      { text: 'Gitlab', link: '/gitlab/'},
      { text: 'Kafka', link: '/kafka/'},
      { text: 'Linux', link: '/linux/'},
    ]
  },  
  {
    text: '面试', link: '/interview/',
    items: [
      { text: '每日一更', link: '/oneday/'},
      { text: 'Java基础', link: '/javaview/'},
      { text: '前端基础', link: '/webview/'},
    ]
  },
  {
    text: '更多', link: '/more/',
    items: [
      { text: '友链', link: '/friends/'},
      { text: '学习分享', link: '/studyshare/'},
    ]
  },
  {
    text: '生活与我',
    items: [
      { text: '生活', link: '/life/'},
      { text: '关于', link: '/me/'},
    ]
  },
  {
    text: '本站索引',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ]
  },
  
]
