// export default {
//   input: "index.js",
//   output: {
//     file: "dist.js",
//     format: "iife",
//   },
// };
import json from "@rollup/plugin-json";
// 识别并且加载第三方依赖
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import alias from "@rollup/plugin-alias";
export default [
  {
    input: "index.js",
    external: ["react"],
    plugins: [commonjs(), resolve(), alias(), json()],
    output: {
      file: "dist/dist.esm.js",
      format: "es",
    },
  },
  {
    input: "index.js",
    plugins: [commonjs(), resolve(), json()],
    output: {
      file: "dist/dist2.es.js",
    },
  },
];
