import _ from "lodash";

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");
  // 执行这一行需要引入 lodash（目前通过 script 脚本引入）
  // lodash 现在使用 import 引入
  element.innerHTML = _.join(["Hello", "webpack"], " ");

  btn.innerHTML = "Click me and check the console!";

  element.appendChild(btn);
  return element;
}

document.body.appendChild(component());
