import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

export default ({ Vue, options, router, siteData }) => {
  // 引入elementui，可以直接在md文件中使用elementui样式
  Vue.use(Element);
};
