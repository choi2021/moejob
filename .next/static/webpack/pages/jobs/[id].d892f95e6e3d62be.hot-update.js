"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/jobs/[id]",{

/***/ "./pages/jobs/[id].tsx":
/*!*****************************!*\
  !*** ./pages/jobs/[id].tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ index; }\n/* harmony export */ });\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _components_DetailJob__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/DetailJob */ \"./components/DetailJob.tsx\");\n/* harmony import */ var _components_JobList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/JobList */ \"./components/JobList.tsx\");\n/* harmony import */ var _components_MainLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/MainLayout */ \"./components/MainLayout.tsx\");\n/* harmony import */ var _context_DBContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context/DBContext */ \"./context/DBContext.tsx\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/lib/index.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\nvar _jsxFileName = \"C:\\\\Users\\\\juni2\\\\projects\\\\\\uD3EC\\uD2B8\\uD3F4\\uB9AC\\uC624\\uC5D0 \\uC62C\\uB9B4 \\uD504\\uB85C\\uC81D\\uD2B8\\\\moijob\\\\moijob-client\\\\pages\\\\jobs\\\\[id].tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst JobListBox = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].section.withConfig({\n  displayName: \"id__JobListBox\",\n  componentId: \"sc-1jlly0m-0\"\n})([\"max-width:1000px;\"]);\n_c = JobListBox;\nfunction index() {\n  _s();\n\n  const {\n    query\n  } = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();\n  const dbService = (0,_context_DBContext__WEBPACK_IMPORTED_MODULE_5__.useDBService)();\n  const {\n    id\n  } = query;\n  const jobId = typeof id === 'string' ? id : id?.join() || '';\n  const {\n    data,\n    isLoading\n  } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__.useQuery)(['jobs'], () => {\n    return dbService.getJobs();\n  }, {\n    select: data => {\n      return data[jobId];\n    }\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_MainLayout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_DetailJob__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(JobListBox, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_JobList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 5\n  }, this);\n}\n\n_s(index, \"Dh6UEe/dMVQBy0zQ4P5cxVN0d3M=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter, _context_DBContext__WEBPACK_IMPORTED_MODULE_5__.useDBService, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__.useQuery];\n});\n\nvar _c;\n\n$RefreshReg$(_c, \"JobListBox\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9qb2JzL1tpZF0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1RLFVBQVUsR0FBR04sNEVBQUg7RUFBQTtFQUFBO0FBQUEseUJBQWhCO0tBQU1NO0FBSVMsU0FBU0UsS0FBVCxHQUFpQjtFQUFBOztFQUM5QixNQUFNO0lBQUVDO0VBQUYsSUFBWVgsc0RBQVMsRUFBM0I7RUFDQSxNQUFNWSxTQUFTLEdBQUdOLGdFQUFZLEVBQTlCO0VBQ0EsTUFBTTtJQUFFTztFQUFGLElBQVNGLEtBQWY7RUFDQSxNQUFNRyxLQUFLLEdBQUcsT0FBT0QsRUFBUCxLQUFjLFFBQWQsR0FBeUJBLEVBQXpCLEdBQThCQSxFQUFFLEVBQUVFLElBQUosTUFBYyxFQUExRDtFQUNBLE1BQU07SUFBRUMsSUFBRjtJQUFRQztFQUFSLElBQXNCViwrREFBUSxDQUNsQyxDQUFDLE1BQUQsQ0FEa0MsRUFFbEMsTUFBTTtJQUNKLE9BQU9LLFNBQVMsQ0FBQ00sT0FBVixFQUFQO0VBQ0QsQ0FKaUMsRUFLbEM7SUFDRUMsTUFBTSxFQUFHSCxJQUFELElBQTRCO01BQ2xDLE9BQU9BLElBQUksQ0FBQ0YsS0FBRCxDQUFYO0lBQ0Q7RUFISCxDQUxrQyxDQUFwQztFQVdBLG9CQUNFLDhEQUFDLDhEQUFEO0lBQUEsd0JBQ0UsOERBQUMsNkRBQUQ7TUFBQTtNQUFBO01BQUE7SUFBQSxRQURGLGVBRUUsOERBQUMsVUFBRDtNQUFBLHVCQUNFLDhEQUFDLDJEQUFEO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFERjtNQUFBO01BQUE7TUFBQTtJQUFBLFFBRkY7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLFFBREY7QUFRRDs7R0F4QnVCSjtVQUNKVixvREFDQU0sOERBR1VDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2pvYnMvW2lkXS50c3g/YWE1NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgRGV0YWlsSm9iIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRGV0YWlsSm9iJztcclxuaW1wb3J0IEpvYkxpc3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Kb2JMaXN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL01haW5MYXlvdXQnO1xyXG5pbXBvcnQgeyB1c2VEQlNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb250ZXh0L0RCQ29udGV4dCc7XHJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5JztcclxuXHJcbmNvbnN0IEpvYkxpc3RCb3ggPSBzdHlsZWQuc2VjdGlvbmBcclxuICBtYXgtd2lkdGg6IDEwMDBweDtcclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluZGV4KCkge1xyXG4gIGNvbnN0IHsgcXVlcnkgfSA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGRiU2VydmljZSA9IHVzZURCU2VydmljZSgpO1xyXG4gIGNvbnN0IHsgaWQgfSA9IHF1ZXJ5O1xyXG4gIGNvbnN0IGpvYklkID0gdHlwZW9mIGlkID09PSAnc3RyaW5nJyA/IGlkIDogaWQ/LmpvaW4oKSB8fCAnJztcclxuICBjb25zdCB7IGRhdGEsIGlzTG9hZGluZyB9ID0gdXNlUXVlcnkoXHJcbiAgICBbJ2pvYnMnXSxcclxuICAgICgpID0+IHtcclxuICAgICAgcmV0dXJuIGRiU2VydmljZS5nZXRKb2JzKCk7XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzZWxlY3Q6IChkYXRhOiBNb2RpZmllZEpvYnNUeXBlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGRhdGFbam9iSWRdO1xyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gICk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxEZXRhaWxKb2IgLz5cclxuICAgICAgPEpvYkxpc3RCb3g+XHJcbiAgICAgICAgPEpvYkxpc3QgLz5cclxuICAgICAgPC9Kb2JMaXN0Qm94PlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiUmVhY3QiLCJzdHlsZWQiLCJEZXRhaWxKb2IiLCJKb2JMaXN0IiwiTGF5b3V0IiwidXNlREJTZXJ2aWNlIiwidXNlUXVlcnkiLCJKb2JMaXN0Qm94Iiwic2VjdGlvbiIsImluZGV4IiwicXVlcnkiLCJkYlNlcnZpY2UiLCJpZCIsImpvYklkIiwiam9pbiIsImRhdGEiLCJpc0xvYWRpbmciLCJnZXRKb2JzIiwic2VsZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/jobs/[id].tsx\n"));

/***/ })

});