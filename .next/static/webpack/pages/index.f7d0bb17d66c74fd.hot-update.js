"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/JobItem.tsx":
/*!********************************!*\
  !*** ./components/JobItem.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ JobItem; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"C:\\\\Users\\\\juni2\\\\projects\\\\\\uD3EC\\uD2B8\\uD3F4\\uB9AC\\uC624\\uC5D0 \\uC62C\\uB9B4 \\uD504\\uB85C\\uC81D\\uD2B8\\\\moijob\\\\moijob-client\\\\components\\\\JobItem.tsx\";\n\n\n\n\nconst Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"JobItem__Wrapper\",\n  componentId: \"sc-nc39g6-0\"\n})([\"border:2px solid gray;width:100%;height:300px;max-width:200px;margin:0 1rem;display:flex;flex-direction:column;\"]);\n_c = Wrapper;\nconst Img = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((next_image__WEBPACK_IMPORTED_MODULE_1___default())).withConfig({\n  displayName: \"JobItem__Img\",\n  componentId: \"sc-nc39g6-1\"\n})([\"width:100%;\"]);\n_c2 = Img;\nfunction JobItem(_ref) {\n  let {\n    job\n  } = _ref;\n  const {\n    name,\n    platform,\n    img\n  } = job;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Wrapper, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Img, {\n      src: img,\n      alt: \"job\",\n      width: \"200\",\n      height: \"200\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n      children: \"a\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 5\n  }, this);\n}\n_c3 = JobItem;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Wrapper\");\n$RefreshReg$(_c2, \"Img\");\n$RefreshReg$(_c3, \"JobItem\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0pvYkl0ZW0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTs7QUFFQSxNQUFNRyxPQUFPLEdBQUdGLHdFQUFIO0VBQUE7RUFBQTtBQUFBLHVIQUFiO0tBQU1FO0FBU04sTUFBTUUsR0FBRyxHQUFHSiw2REFBTSxDQUFDQyxtREFBRCxDQUFUO0VBQUE7RUFBQTtBQUFBLG1CQUFUO01BQU1HO0FBSVMsU0FBU0MsT0FBVCxPQUE0QztFQUFBLElBQTNCO0lBQUVDO0VBQUYsQ0FBMkI7RUFDekQsTUFBTTtJQUFFQyxJQUFGO0lBQVFDLFFBQVI7SUFBa0JDO0VBQWxCLElBQTBCSCxHQUFoQztFQUNBLG9CQUNFLDhEQUFDLE9BQUQ7SUFBQSx3QkFDRSw4REFBQyxHQUFEO01BQUssR0FBRyxFQUFFRyxHQUFWO01BQWUsR0FBRyxFQUFDLEtBQW5CO01BQXlCLEtBQUssRUFBQyxLQUEvQjtNQUFxQyxNQUFNLEVBQUM7SUFBNUM7TUFBQTtNQUFBO01BQUE7SUFBQSxRQURGLGVBRUU7TUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFGRjtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsUUFERjtBQU1EO01BUnVCSiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0pvYkl0ZW0udHN4PzUwZjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSm9iVHlwZSB9IGZyb20gJy4uL3R5cGVzL2pvYnR5cGUnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5cclxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgYm9yZGVyOiAycHggc29saWQgZ3JheTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIG1heC13aWR0aDogMjAwcHg7XHJcbiAgbWFyZ2luOiAwIDFyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5gO1xyXG5jb25zdCBJbWcgPSBzdHlsZWQoSW1hZ2UpYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSm9iSXRlbSh7IGpvYiB9OiB7IGpvYjogSm9iVHlwZSB9KSB7XHJcbiAgY29uc3QgeyBuYW1lLCBwbGF0Zm9ybSwgaW1nIH0gPSBqb2I7XHJcbiAgcmV0dXJuIChcclxuICAgIDxXcmFwcGVyPlxyXG4gICAgICA8SW1nIHNyYz17aW1nfSBhbHQ9J2pvYicgd2lkdGg9JzIwMCcgaGVpZ2h0PScyMDAnIC8+XHJcbiAgICAgIDxwPmE8L3A+XHJcbiAgICA8L1dyYXBwZXI+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZWQiLCJJbWFnZSIsIldyYXBwZXIiLCJkaXYiLCJJbWciLCJKb2JJdGVtIiwiam9iIiwibmFtZSIsInBsYXRmb3JtIiwiaW1nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/JobItem.tsx\n"));

/***/ })

});