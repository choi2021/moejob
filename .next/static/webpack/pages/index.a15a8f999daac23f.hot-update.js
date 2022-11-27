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

/***/ "./components/JobList.tsx":
/*!********************************!*\
  !*** ./components/JobList.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ JobList; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _context_DBContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/DBContext */ \"./context/DBContext.tsx\");\n/* harmony import */ var _JobItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./JobItem */ \"./components/JobItem.tsx\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/lib/index.mjs\");\n/* harmony import */ var _variables_authVariable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables/authVariable */ \"./variables/authVariable.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"C:\\\\Users\\\\juni2\\\\projects\\\\\\uD3EC\\uD2B8\\uD3F4\\uB9AC\\uC624\\uC5D0 \\uC62C\\uB9B4 \\uD504\\uB85C\\uC81D\\uD2B8\\\\moijob\\\\moijob-client\\\\components\\\\JobList.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].ul.withConfig({\n  displayName: \"JobList__Wrapper\",\n  componentId: \"sc-1kuyqbr-0\"\n})([\"width:100%;height:100%;display:grid;grid-template-columns:repeat(4,1fr);\"]);\n_c = Wrapper;\nfunction JobList() {\n  _s();\n\n  const id = localStorage.getItem(_variables_authVariable__WEBPACK_IMPORTED_MODULE_3__.UserId);\n  const dbService = (0,_context_DBContext__WEBPACK_IMPORTED_MODULE_1__.useDBService)();\n  const {} = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__.useQuery)(['jobs', () => {\n    dbService.getJobs(id);\n  }]);\n  const {\n    0: jobs,\n    1: setJobs\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {}, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Wrapper, {\n    children: jobs.map(job => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_JobItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      job: job\n    }, job.id, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }, this))\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 5\n  }, this);\n}\n\n_s(JobList, \"iLnyR2xOJ70MChse7gO1oOck7W4=\", false, function () {\n  return [_context_DBContext__WEBPACK_IMPORTED_MODULE_1__.useDBService, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__.useQuery];\n});\n\n_c2 = JobList;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Wrapper\");\n$RefreshReg$(_c2, \"JobList\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0pvYkxpc3QudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNUSxPQUFPLEdBQUdMLHVFQUFIO0VBQUE7RUFBQTtBQUFBLGdGQUFiO0tBQU1LO0FBT1MsU0FBU0UsT0FBVCxHQUFtQjtFQUFBOztFQUNoQyxNQUFNQyxFQUFFLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQk4sMkRBQXJCLENBQVg7RUFDQSxNQUFNTyxTQUFTLEdBQUdWLGdFQUFZLEVBQTlCO0VBQ0EsTUFBTSxLQUFLRSwrREFBUSxDQUFDLENBQ2xCLE1BRGtCLEVBRWxCLE1BQU07SUFDSlEsU0FBUyxDQUFDQyxPQUFWLENBQWtCSixFQUFsQjtFQUNELENBSmlCLENBQUQsQ0FBbkI7RUFNQSxNQUFNO0lBQUEsR0FBQ0ssSUFBRDtJQUFBLEdBQU9DO0VBQVAsSUFBa0JoQiwrQ0FBUSxDQUFZLEVBQVosQ0FBaEM7RUFDQUMsZ0RBQVMsQ0FBQyxNQUFNLENBQUUsQ0FBVCxFQUFXLEVBQVgsQ0FBVDtFQUNBLG9CQUNFLDhEQUFDLE9BQUQ7SUFBQSxVQUNHYyxJQUFJLENBQUNFLEdBQUwsQ0FBVUMsR0FBRCxpQkFDUiw4REFBQyxnREFBRDtNQUFzQixHQUFHLEVBQUVBO0lBQTNCLEdBQWNBLEdBQUcsQ0FBQ1IsRUFBbEI7TUFBQTtNQUFBO01BQUE7SUFBQSxRQUREO0VBREg7SUFBQTtJQUFBO0lBQUE7RUFBQSxRQURGO0FBT0Q7O0dBbEJ1QkQ7VUFFSk4sOERBQ1BFOzs7TUFIV0kiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Kb2JMaXN0LnRzeD8xZjY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB1c2VEQlNlcnZpY2UgfSBmcm9tICcuLi9jb250ZXh0L0RCQ29udGV4dCc7XHJcbmltcG9ydCB7IEpvYlR5cGUgfSBmcm9tICcuLi90eXBlcy9qb2J0eXBlJztcclxuaW1wb3J0IEpvYkl0ZW0gZnJvbSAnLi9Kb2JJdGVtJztcclxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAdGFuc3RhY2svcmVhY3QtcXVlcnknO1xyXG5pbXBvcnQgeyBVc2VySWQgfSBmcm9tICcuLi92YXJpYWJsZXMvYXV0aFZhcmlhYmxlJztcclxuXHJcbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQudWxgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEpvYkxpc3QoKSB7XHJcbiAgY29uc3QgaWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShVc2VySWQpO1xyXG4gIGNvbnN0IGRiU2VydmljZSA9IHVzZURCU2VydmljZSgpO1xyXG4gIGNvbnN0IHt9ID0gdXNlUXVlcnkoW1xyXG4gICAgJ2pvYnMnLFxyXG4gICAgKCkgPT4ge1xyXG4gICAgICBkYlNlcnZpY2UuZ2V0Sm9icyhpZCk7XHJcbiAgICB9LFxyXG4gIF0pO1xyXG4gIGNvbnN0IFtqb2JzLCBzZXRKb2JzXSA9IHVzZVN0YXRlPEpvYlR5cGVbXT4oW10pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7fSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8V3JhcHBlcj5cclxuICAgICAge2pvYnMubWFwKChqb2IpID0+IChcclxuICAgICAgICA8Sm9iSXRlbSBrZXk9e2pvYi5pZH0gam9iPXtqb2J9IC8+XHJcbiAgICAgICkpfVxyXG4gICAgPC9XcmFwcGVyPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzdHlsZWQiLCJ1c2VEQlNlcnZpY2UiLCJKb2JJdGVtIiwidXNlUXVlcnkiLCJVc2VySWQiLCJXcmFwcGVyIiwidWwiLCJKb2JMaXN0IiwiaWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZGJTZXJ2aWNlIiwiZ2V0Sm9icyIsImpvYnMiLCJzZXRKb2JzIiwibWFwIiwiam9iIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/JobList.tsx\n"));

/***/ })

});