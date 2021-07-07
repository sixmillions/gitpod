module.exports = {
  title: "Millions Note", // 设置网站标题
  description: "个人学习笔记", // 描述
  head: [
    // 注入html的head标签。每个标签可以用 [tagName, { attrName: attrValue }
    ["link", { rel: "icon", href: `/favicon.ico` }],
  ],
  dest: "./dist", // 设置输出目录
  port: 8080, // 端口
  evergreen: true,
  themeConfig: {
    // 主题配置
    nav: require("./public/js/nav.js"), // 导航栏单独配置--.js可以省略
    sidebarDepth: 6, // 侧边栏深度 3显示h1 h2 h3
    sidebar: require("./public/js/sidebar.js"), //侧边栏单独配置
    plugins: [
      [
        "@vuepress/search",
        {
          searchMaxSuggestions: 10,
        },
      ],
    ],
  },
};
