import { createSSRApp } from "vue";
import { renderToString } from "vue/server-renderer";
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";

// 简单的路由映射
const routes = {
  "/": Home,
  "/about": About,
};

export async function render(url) {
  // 获取当前路由对应的组件
  const component = routes[url] || Home;

  const app = createSSRApp(component);

  // Render the app to HTML string
  const html = await renderToString(app);

  return html;
}
