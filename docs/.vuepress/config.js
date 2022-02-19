module.exports = {
  // https://v1.vuepress.vuejs.org/zh/config/#base 配置文档

  title: "harrison's 知识文档", // 网站标题 同时也会显示在导航栏
  description: "harrison的个人网站", // 会以meta标签渲染到当前页面的HTML中
  head: [
    // 注入到当前页面的 HTML <head> 中的标签
    // ["link", { rel: "icon", href: "/logo.jpg" }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/blog/', // 这是部署到github相关的配置
  // host
  // port:8080,
  // dest  // 制定vuepress build的输出目录
  markdown: {
    lineNumbers: false, // 代码块显示行号
  },
  themeConfig: {
    nav: [
      // 单项 text：显示文字，link：指向链接
      // 这里的'/' 指的是 docs文件夹路径
      // [以 '/' 结尾的默认指向该路径下README.md文件]
      {
        text:'前端',link:'/FrontEnd/'
      },
    ],
    sidebar: {
      '/FrontEnd/':[
        ['/FrontEnd/','前端'],
        {
          title:'测试指导',
          children:[
            ['/FrontEnd/Test/my','my']
          ]
        }
      ]
    },

    sidebarDepth: 4, // 侧边栏显示2级
    lastUpdated: "Last Updated", // 文档更新时间：每个文件git最后提交的时间
  },
};
