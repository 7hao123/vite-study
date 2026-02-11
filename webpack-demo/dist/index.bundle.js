"use strict";
(self["webpackChunktest_wepack"] = self["webpackChunktest_wepack"] || []).push([["index"],{

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/.pnpm/lodash@4.17.23/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);


function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");
  // 执行这一行需要引入 lodash（目前通过 script 脚本引入）
  // lodash 现在使用 import 引入
  element.innerHTML = lodash__WEBPACK_IMPORTED_MODULE_0___default().join(["Hello", "webpack"], " ");

  btn.innerHTML = "Click me and check the console!";

  element.appendChild(btn);
  return element;
}

document.body.appendChild(component());


/***/ }

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isa0RBQU07QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3Qtd2VwYWNrLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcclxuXHJcbmZ1bmN0aW9uIGNvbXBvbmVudCgpIHtcclxuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIC8vIOaJp+ihjOi/meS4gOihjOmcgOimgeW8leWFpSBsb2Rhc2jvvIjnm67liY3pgJrov4cgc2NyaXB0IOiEmuacrOW8leWFpe+8iVxyXG4gIC8vIGxvZGFzaCDnjrDlnKjkvb/nlKggaW1wb3J0IOW8leWFpVxyXG4gIGVsZW1lbnQuaW5uZXJIVE1MID0gXy5qb2luKFtcIkhlbGxvXCIsIFwid2VicGFja1wiXSwgXCIgXCIpO1xyXG5cclxuICBidG4uaW5uZXJIVE1MID0gXCJDbGljayBtZSBhbmQgY2hlY2sgdGhlIGNvbnNvbGUhXCI7XHJcblxyXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnRuKTtcclxuICByZXR1cm4gZWxlbWVudDtcclxufVxyXG5cclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb21wb25lbnQoKSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==