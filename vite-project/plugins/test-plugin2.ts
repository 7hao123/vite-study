import { config } from "process";

export default (enforce?: "pre" | "post") => {
  return {
    name: "test",
    enforce,
    config(userConfig) {
      return {
        resolve: {
          alias: {
            "@aaa": "/src/styles",
          },
        },
      };
    },
    // configResolved(resolvedConfig) {
    //   console.log("configResolved", resolvedConfig.resolve);
    // },
    configureServer(server) {
      //   console.log("configureServer", server);
      server.middlewares.use((req, res, next) => {
        if (req.url === "/test") {
          res.end("hello test");
        } else {
          next();
        }
      });
    },
  };
};
