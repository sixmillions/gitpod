module.exports = [
  // 添加导航栏--一个对象就是一个选项
  { text: "Home", link: "/" }, // 导航--一个选项
  {
    // 这里是下拉列表展现形式。
    text: "BLOG",
    link: "/blog/",
    items: [
      { text: "Java", link: "/blog/java/" },
      { text: "Install", link: "/blog/install/" },
      { text: "Vue", link: "/blog/vue/" },
    ],
  },
  {
    text: "面试",
    link: "/interview/",
    items: [
      { text: "JAVA", link: "/interview/java/" }, // 需要带上斜杠，不然就会找interview下面java.md，带上斜杠找的是java/README.md
      { text: "VUE", link: "/interview/vue/" },
    ],
  },
  {
    text: "外链",
    items: [
      { text: "Github", link: "https://github.com/sixmillions" },
      { text: "百度", link: "https://www.baidu.com" },
    ],
  },
];
