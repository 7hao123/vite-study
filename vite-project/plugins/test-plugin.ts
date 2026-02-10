export default (enforce?: "pre" | "post") => {
  return {
    name: "test",
    enforce,
    // buildStart devServer没启动之前调用
    buildStart() {
      console.log("buildStart", enforce);
    },
    // 告诉文件在哪里
    resolveId() {
      console.log("resolveId", enforce);
    },
    load() {
      console.log("load", enforce);
    },
  };
};
