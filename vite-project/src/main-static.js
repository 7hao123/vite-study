import { createApp } from "vue";
import { currentComponent } from "./router.js";
import "./style.css";

// 创建 Vue 应用
const app = createApp({
  setup() {
    return {
      currentComponent,
    };
  },
  template: `<component :is="currentComponent" />`,
});

// 挂载应用
app.mount("#app");
