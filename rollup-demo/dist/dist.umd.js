(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('react')) :
	typeof define === 'function' && define.amd ? define(['react'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.React));
})(this, (function (React) { 'use strict';

	console.log("heelo rollup");
	console.log(React);

}));
