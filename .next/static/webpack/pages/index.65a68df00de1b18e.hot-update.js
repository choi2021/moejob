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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ JobItem; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/lib/index.mjs\");\n/* harmony import */ var _context_DBContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/DBContext */ \"./context/DBContext.tsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"C:\\\\Users\\\\juni2\\\\projects\\\\\\uD3EC\\uD2B8\\uD3F4\\uB9AC\\uC624\\uC5D0 \\uC62C\\uB9B4 \\uD504\\uB85C\\uC81D\\uD2B8\\\\moijob\\\\moijob-client\\\\components\\\\JobItem.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n  displayName: \"JobItem__Wrapper\",\n  componentId: \"sc-nc39g6-0\"\n})([\"width:100%;max-width:200px;height:20rem;display:flex;flex-direction:column;text-align:center;position:relative;cursor:pointer;\"]);\n_c = Wrapper;\nconst Badge = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n  displayName: \"JobItem__Badge\",\n  componentId: \"sc-nc39g6-1\"\n})([\"left:-10px;top:-10px;padding:0.25rem 0.5rem;background-color:lightblue;margin-right:0.5rem;font-size:0.8rem;border-radius:0.5rem;position:absolute;line-height:25px;\"]);\n_c2 = Badge;\nconst Box = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n  displayName: \"JobItem__Box\",\n  componentId: \"sc-nc39g6-2\"\n})([\"margin-top:0.5rem;display:flex;flex-direction:column;justify-content:center;align-items:center;h1{font-weight:bold;font-size:1rem;}\"]);\n_c3 = Box;\nconst Img = (0,styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((next_image__WEBPACK_IMPORTED_MODULE_1___default())).withConfig({\n  displayName: \"JobItem__Img\",\n  componentId: \"sc-nc39g6-3\"\n})([\"width:100%;height:auto;\"]);\n_c4 = Img;\nconst DeleteBtn = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].button.withConfig({\n  displayName: \"JobItem__DeleteBtn\",\n  componentId: \"sc-nc39g6-4\"\n})([\"right:-5px;top:-5px;font-size:1rem;position:absolute;padding:0;display:flex;justify-content:center;align-items:center;width:20px;height:20px;border-radius:50%;color:white;background-color:\", \";\"], props => props.theme.colors.black);\n_c5 = DeleteBtn;\nfunction JobItem(_ref) {\n  _s();\n\n  let {\n    job\n  } = _ref;\n  const {\n    name,\n    platform,\n    img,\n    checkPercentage\n  } = job;\n  const queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__.useQueryClient)();\n  const dbService = (0,_context_DBContext__WEBPACK_IMPORTED_MODULE_2__.useDBService)();\n  const {\n    mutate\n  } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__.useMutation)(async job => {\n    return dbService.removeJob(job);\n  }, {\n    onSuccess: () => {\n      queryClient.invalidateQueries(['jobs']);\n    },\n    onError: error => {\n      if (error instanceof axios__WEBPACK_IMPORTED_MODULE_7__.AxiosError) {\n        const {\n          response\n        } = error;\n\n        if (response) {\n          console.log(response);\n        }\n      }\n    }\n  });\n\n  const handleDelete = () => {\n    mutate(job);\n  };\n\n  const over50Percent = checkPercentage >= 0.5;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Wrapper, {\n    children: [over50Percent && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Badge, {\n      children: \"50% \\uC774\\uC0C1\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 25\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(DeleteBtn, {\n      onClick: handleDelete,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_8__.MdRemove, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n      href: `/jobs/${job.id}`,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Img, {\n        src: img,\n        alt: \"job\",\n        width: \"200\",\n        height: \"180\",\n        priority: true\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Box, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"h1\", {\n          children: name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 103,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"h3\", {\n          children: platform\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 104,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 95,\n    columnNumber: 5\n  }, this);\n}\n\n_s(JobItem, \"IYv4yzPeb3R+NAtpiif8u4h28Tc=\", false, function () {\n  return [_tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__.useQueryClient, _context_DBContext__WEBPACK_IMPORTED_MODULE_2__.useDBService, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__.useMutation];\n});\n\n_c6 = JobItem;\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"Wrapper\");\n$RefreshReg$(_c2, \"Badge\");\n$RefreshReg$(_c3, \"Box\");\n$RefreshReg$(_c4, \"Img\");\n$RefreshReg$(_c5, \"DeleteBtn\");\n$RefreshReg$(_c6, \"JobItem\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bUVBQ0ZDLDhEQUNDRjs7O01BSkdnQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0pvYkl0ZW0udHN4PzUwZjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHsgTW9kaWZpZWRKb2JUeXBlIH0gZnJvbSAnLi4vdHlwZXMvSm9idHlwZSc7XHJcbmltcG9ydCB7IE1kUmVtb3ZlIH0gZnJvbSAncmVhY3QtaWNvbnMvbWQnO1xyXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnlDbGllbnQgfSBmcm9tICdAdGFuc3RhY2svcmVhY3QtcXVlcnknO1xyXG5pbXBvcnQgeyB1c2VEQlNlcnZpY2UgfSBmcm9tICcuLi9jb250ZXh0L0RCQ29udGV4dCc7XHJcbmltcG9ydCB7IEF4aW9zRXJyb3IgfSBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogMjByZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5gO1xyXG5cclxuY29uc3QgQmFkZ2UgPSBzdHlsZWQuZGl2YFxyXG4gIGxlZnQ6IC0xMHB4O1xyXG4gIHRvcDogLTEwcHg7XHJcbiAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xyXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbmA7XHJcblxyXG5jb25zdCBCb3ggPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoMSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBJbWcgPSBzdHlsZWQoSW1hZ2UpYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuYDtcclxuXHJcbmNvbnN0IERlbGV0ZUJ0biA9IHN0eWxlZC5idXR0b25gXHJcbiAgcmlnaHQ6IC01cHg7XHJcbiAgdG9wOiAtNXB4O1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcGFkZGluZzogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5ibGFja307XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBKb2JJdGVtKHsgam9iIH06IHsgam9iOiBNb2RpZmllZEpvYlR5cGUgfSkge1xyXG4gIGNvbnN0IHsgbmFtZSwgcGxhdGZvcm0sIGltZywgY2hlY2tQZXJjZW50YWdlIH0gPSBqb2I7XHJcbiAgY29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xyXG4gIGNvbnN0IGRiU2VydmljZSA9IHVzZURCU2VydmljZSgpO1xyXG4gIGNvbnN0IHsgbXV0YXRlIH0gPSB1c2VNdXRhdGlvbihcclxuICAgIGFzeW5jIChqb2I6IE1vZGlmaWVkSm9iVHlwZSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGJTZXJ2aWNlLnJlbW92ZUpvYihqb2IpO1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgb25TdWNjZXNzOiAoKSA9PiB7XHJcbiAgICAgICAgcXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoWydqb2JzJ10pO1xyXG4gICAgICB9LFxyXG4gICAgICBvbkVycm9yOiAoZXJyb3IpID0+IHtcclxuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBBeGlvc0Vycm9yKSB7XHJcbiAgICAgICAgICBjb25zdCB7IHJlc3BvbnNlIH0gPSBlcnJvcjtcclxuICAgICAgICAgIGlmIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gICk7XHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gKCkgPT4ge1xyXG4gICAgbXV0YXRlKGpvYik7XHJcbiAgfTtcclxuICBjb25zdCBvdmVyNTBQZXJjZW50ID0gY2hlY2tQZXJjZW50YWdlID49IDAuNTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxXcmFwcGVyPlxyXG4gICAgICB7b3ZlcjUwUGVyY2VudCAmJiA8QmFkZ2U+NTAlIOydtOyDgTwvQmFkZ2U+fVxyXG4gICAgICA8RGVsZXRlQnRuIG9uQ2xpY2s9e2hhbmRsZURlbGV0ZX0+XHJcbiAgICAgICAgPE1kUmVtb3ZlIC8+XHJcbiAgICAgIDwvRGVsZXRlQnRuPlxyXG4gICAgICA8TGluayBocmVmPXtgL2pvYnMvJHtqb2IuaWR9YH0+XHJcbiAgICAgICAgPEltZyBzcmM9e2ltZ30gYWx0PVwiam9iXCIgd2lkdGg9XCIyMDBcIiBoZWlnaHQ9XCIxODBcIiBwcmlvcml0eSAvPlxyXG4gICAgICAgIDxCb3g+XHJcbiAgICAgICAgICA8aDE+e25hbWV9PC9oMT5cclxuICAgICAgICAgIDxoMz57cGxhdGZvcm19PC9oMz5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9XcmFwcGVyPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVkIiwiSW1hZ2UiLCJNZFJlbW92ZSIsInVzZU11dGF0aW9uIiwidXNlUXVlcnlDbGllbnQiLCJ1c2VEQlNlcnZpY2UiLCJBeGlvc0Vycm9yIiwiTGluayIsIldyYXBwZXIiLCJkaXYiLCJCYWRnZSIsIkJveCIsIkltZyIsIkRlbGV0ZUJ0biIsImJ1dHRvbiIsInByb3BzIiwidGhlbWUiLCJjb2xvcnMiLCJibGFjayIsIkpvYkl0ZW0iLCJqb2IiLCJuYW1lIiwicGxhdGZvcm0iLCJpbWciLCJjaGVja1BlcmNlbnRhZ2UiLCJxdWVyeUNsaWVudCIsImRiU2VydmljZSIsIm11dGF0ZSIsInJlbW92ZUpvYiIsIm9uU3VjY2VzcyIsImludmFsaWRhdGVRdWVyaWVzIiwib25FcnJvciIsImVycm9yIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlRGVsZXRlIiwib3ZlcjUwUGVyY2VudCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/JobItem.tsx\n"));

/***/ })

});