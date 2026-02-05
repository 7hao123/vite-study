import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
export type A = {
  name: string;
  age: number;
};
createApp(App).mount("#app");
