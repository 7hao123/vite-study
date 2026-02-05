import fs from "fs";
import path from "path";
import express from "express";

const isProd = true;
const app = express();

let render;
let template;

if (isProd) {
  // ====== 生产环境 ======
  template = fs.readFileSync(path.resolve("dist/client/index.html"), "utf-8");

  render = (await import("./dist/server/entry-server.js")).render;

  app.use("/assets", express.static(path.resolve("dist/client/assets")));
} else {
  // ====== 开发环境 ======
  const { createServer } = await import("vite");

  const vite = await createServer({
    server: { middlewareMode: true },
    appType: "custom",
  });

  app.use(vite.middlewares);

  app.use(async (req, res, next) => {
    try {
      const url = req.originalUrl;

      let devTemplate = fs.readFileSync("index.html", "utf-8");
      devTemplate = await vite.transformIndexHtml(url, devTemplate);

      const devRender = (await vite.ssrLoadModule("/src/entry-server.js"))
        .render;

      const html = devTemplate.replace(
        "<!--ssr-outlet-->",
        await devRender(url),
      );

      res.status(200).set({ "Content-Type": "text/html" }).end(html);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}

if (isProd) {
  app.get(/.*/, async (req, res) => {
    const html = template.replace(
      "<!--ssr-outlet-->",
      await render(req.originalUrl),
    );

    res.status(200).set({ "Content-Type": "text/html" }).end(html);
  });
}

app.listen(4000);
