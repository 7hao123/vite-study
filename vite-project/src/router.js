import { reactive, computed } from "vue";
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";

// 路由配置
const routes = {
  "/": Home,
  "/about": About,
};

// 路由状态
const state = reactive({
  currentRoute: window.__INITIAL_ROUTE__ || window.location.pathname,
});

// 当前组件
export const currentComponent = computed(() => {
  return routes[state.currentRoute] || Home;
});

// 导航函数
export function navigate(path) {
  state.currentRoute = path;
  window.history.pushState({}, "", path);
}

// 监听浏览器返回按钮
window.addEventListener("popstate", () => {
  state.currentRoute = window.location.pathname;
});

// 导出路由器
export const router = {
  currentComponent,
  navigate,
  currentRoute: computed(() => state.currentRoute),
};
