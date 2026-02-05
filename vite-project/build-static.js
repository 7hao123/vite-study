import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { build } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 定义页面路由
const pages = {
  index: { path: "/", entry: "index.html" },
  about: { path: "/about", entry: "about.html" },
};

async function buildStaticSite() {
  console.log("🚀 开始构建静态站点...\n");

  const outDir = path.resolve(__dirname, "dist-static");

  // 清空输出目录
  if (fs.existsSync(outDir)) {
    fs.rmSync(outDir, { recursive: true });
  }

  // 第一步：为每个页面创建临时 HTML 文件
  console.log("📝 创建页面入口文件...");
  const tempFiles = [];

  for (const [name, config] of Object.entries(pages)) {
    const htmlContent = `<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${name === "index" ? "首页" : "关于"} - Static Site</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module">
      window.__INITIAL_ROUTE__ = "${config.path}";
    </script>
    <script type="module" src="/src/main-static.js"></script>
  </body>
</html>`;

    const tempPath = path.resolve(__dirname, config.entry);
    fs.writeFileSync(tempPath, htmlContent);
    tempFiles.push(tempPath);
    console.log(`  ✓ ${config.entry}`);
  }

  // 第二步：使用 Vite 构建（多页面应用）
  console.log("\n🔨 开始 Vite 构建...");

  const input = {};
  for (const [name, config] of Object.entries(pages)) {
    input[name] = path.resolve(__dirname, config.entry);
  }

  try {
    await build({
      build: {
        outDir,
        emptyOutDir: true,
        rollupOptions: {
          input,
        },
      },
    });

    console.log("\n✅ Vite 构建完成");

    // 第三步：重组文件结构
    console.log("\n📦 重组文件结构...");

    // 将 about.html 移动到 about/index.html
    const aboutHtml = path.join(outDir, "about.html");
    if (fs.existsSync(aboutHtml)) {
      const aboutDir = path.join(outDir, "about");
      if (!fs.existsSync(aboutDir)) {
        fs.mkdirSync(aboutDir, { recursive: true });
      }
      fs.renameSync(aboutHtml, path.join(aboutDir, "index.html"));
      console.log("  ✓ about.html -> about/index.html");
    }

    // 清理临时文件
    console.log("\n🧹 清理临时文件...");
    for (const tempFile of tempFiles) {
      if (fs.existsSync(tempFile)) {
        fs.unlinkSync(tempFile);
        console.log(`  ✓ 删除 ${path.basename(tempFile)}`);
      }
    }

    console.log("\n🎉 静态站点构建完成！");
    console.log(`📁 输出目录: ${outDir}`);
    console.log("\n可以使用以下命令预览:");
    console.log("  npm run preview:static");
  } catch (error) {
    console.error("\n❌ 构建失败:", error);

    // 清理临时文件
    for (const tempFile of tempFiles) {
      if (fs.existsSync(tempFile)) {
        fs.unlinkSync(tempFile);
      }
    }
    process.exit(1);
  }
}

buildStaticSite().catch(console.error);
