module.exports = [
  ["/", "主页"],
  {
    title: "JAVA",
    collapsable: false,
    children: require('./java/java.js'),
  },
  {
    title: "Install",
    collapsable: false,
    children: require('./install/install.js'),
  },
  {
    title: "PostgreSQL",
    collapsable: true,
    children: require('./postgres/postgres.js'),
  },
  {
    title: "VUE",
    collapsable: true,
    children: require('./vue/vue.js'),
  },
];
