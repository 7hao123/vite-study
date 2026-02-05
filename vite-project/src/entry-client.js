import { createSSRApp } from "vue";
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import "./style.css";

// 简单的路由映射
const routes = {
  "/": Home,
  "/about": About,
};

// 获取当前路由对应的组件
const currentPath = window.location.pathname;
const component = routes[currentPath] || Home;

const app = createSSRApp(component);

// Mount the app to the DOM (hydration mode)
app.mount("#app");
