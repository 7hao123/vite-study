import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateStaticSite() {
  const { createServer } = await import("vite");

  // 创建 Vite 服务器用于 SSR
  const vite = await createServer({
    server: { middlewareMode: true },
    appType: "custom",
  });

  // 读取 HTML 模板
  const template = fs.readFileSync(
    path.resolve(__dirname, "index.html"),
    "utf-8"
  );

  // 定义要生成的路由
  const routes = ["/", "/about"];

  // 创建输出目录
  const outDir = path.resolve(__dirname, "dist-static");
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  console.log("🚀 开始生成静态站点...\n");

  for (const route of routes) {
    try {
      // 转换 HTML
      let html = await vite.transformIndexHtml(route, template);

      // 加载服务端入口
      const { render } = await vite.ssrLoadModule("/src/entry-server.js");

      // 执行 SSR 渲染
      const appHtml = await render(route);

      // 替换占位符
      html = html.replace("<!--ssr-outlet-->", appHtml);

      // 确定输出文件路径
      let filePath;
      if (route === "/") {
        filePath = path.resolve(outDir, "index.html");
      } else {
        const dir = path.resolve(outDir, route.slice(1));
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true });
        }
        filePath = path.resolve(dir, "index.html");
      }

      // 写入文件
      fs.writeFileSync(filePath, html);
      console.log(`✅ 已生成: ${route} -> ${filePath}`);
    } catch (e) {
      console.error(`❌ 生成失败: ${route}`, e);
    }
  }

  // 复制静态资源（如果有的话）
  const publicDir = path.resolve(__dirname, "public");
  if (fs.existsSync(publicDir)) {
    fs.cpSync(publicDir, outDir, { recursive: true });
    console.log("\n📦 已复制静态资源");
  }

  await vite.close();
  console.log("\n🎉 静态站点生成完成！输出目录: dist-static");
}

generateStaticSite().catch(console.error);
