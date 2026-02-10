import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import testPlugin from "./plugins/test-plugin2";
// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), testPlugin("post"), testPlugin(), testPlugin("pre")],
  server: {
    port: 4000, // 指定端口
    strictPort: true, // 端口被占用时直接报错，不自动尝试下一个端口
  },
});
