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

/***/ "./components/JobForm.tsx":
/*!********************************!*\
  !*** ./components/JobForm.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ JobForm; }\n/* harmony export */ });\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"C:\\\\Users\\\\juni2\\\\projects\\\\\\uD3EC\\uD2B8\\uD3F4\\uB9AC\\uC624\\uC5D0 \\uC62C\\uB9B4 \\uD504\\uB85C\\uC81D\\uD2B8\\\\moijob\\\\moijob-client\\\\components\\\\JobForm.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\nconst Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].section.withConfig({\n  displayName: \"JobForm__Wrapper\",\n  componentId: \"sc-18s44eo-0\"\n})([\"width:100%;height:20rem;background-color:lightcoral;display:flex;flex-direction:column;justify-content:center;align-items:center;\"]);\n_c = Wrapper;\nconst TextBox = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"JobForm__TextBox\",\n  componentId: \"sc-18s44eo-1\"\n})([\"display:flex;align-items:center;p{margin-left:0.5rem;font-weight:bold;color:white;}\"]);\n_c2 = TextBox;\nconst Form = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].form.withConfig({\n  displayName: \"JobForm__Form\",\n  componentId: \"sc-18s44eo-2\"\n})([\"background-color:white;padding:1rem 2rem;width:60%;text-align:center;border-radius:2rem;display:flex;align-items:center;input{background-color:transparent;border:none;flex:80%;outline:none;text-align:center;}\"]);\n_c3 = Form;\nconst Img = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((next_image__WEBPACK_IMPORTED_MODULE_0___default())).withConfig({\n  displayName: \"JobForm__Img\",\n  componentId: \"sc-18s44eo-3\"\n})([\"width:10rem;height:10rem;\"]);\n_c4 = Img;\nfunction JobForm() {\n  _s();\n\n  const {\n    0: url,\n    1: setUrl\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n  const {\n    0: isLoading,\n    1: setIsLoading\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n\n  const handleChange = e => {\n    setUrl(e.target.value);\n  };\n\n  const handleSubmit = e => {\n    e.preventDefault();\n\n    if (!url) {\n      return;\n    }\n\n    fetch('http://localhost:3000/api/job', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        url\n      })\n    }).then(response => response.json()).then(data => console.log(data));\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Wrapper, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(TextBox, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Img, {\n        src: '/이모티콘.gif',\n        width: \"300\",\n        height: \"300\",\n        alt: \"imoticon\",\n        priority: true\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n        children: \"\\uCDE8\\uC900\\uC0DD \\uC5EC\\uB7EC\\uBD84 \\uBAA8\\uB450 \\uD654\\uC774\\uD305\\uC785\\uB2C8\\uB2E4!\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Form, {\n      onSubmit: handleSubmit,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"input\", {\n        type: \"text\",\n        value: url,\n        onChange: handleChange,\n        placeholder: '원하는 채용공고의 url을 알려주세요😁'\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n        children: \"Send\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 71,\n    columnNumber: 5\n  }, this);\n}\n\n_s(JobForm, \"WhfbIzLw17Bzl2Z3eEA/D4r1wFs=\");\n\n_c5 = JobForm;\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"Wrapper\");\n$RefreshReg$(_c2, \"TextBox\");\n$RefreshReg$(_c3, \"Form\");\n$RefreshReg$(_c4, \"Img\");\n$RefreshReg$(_c5, \"JobForm\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0pvYkZvcm0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUdBLE1BQU1JLE9BQU8sR0FBR0QsNEVBQUg7RUFBQTtFQUFBO0FBQUEseUlBQWI7S0FBTUM7QUFVTixNQUFNRSxPQUFPLEdBQUdILHdFQUFIO0VBQUE7RUFBQTtBQUFBLDJGQUFiO01BQU1HO0FBVU4sTUFBTUUsSUFBSSxHQUFHTCx5RUFBSDtFQUFBO0VBQUE7QUFBQSx3TkFBVjtNQUFNSztBQWlCTixNQUFNRSxHQUFHLEdBQUdQLDZEQUFNLENBQUNILG1EQUFELENBQVQ7RUFBQTtFQUFBO0FBQUEsaUNBQVQ7TUFBTVU7QUFLUyxTQUFTQyxPQUFULEdBQW1CO0VBQUE7O0VBQ2hDLE1BQU07SUFBQSxHQUFDQyxHQUFEO0lBQUEsR0FBTUM7RUFBTixJQUFnQlgsK0NBQVEsQ0FBQyxFQUFELENBQTlCO0VBQ0EsTUFBTTtJQUFBLEdBQUNZLFNBQUQ7SUFBQSxHQUFZQztFQUFaLElBQTRCYiwrQ0FBUSxDQUFDLEtBQUQsQ0FBMUM7O0VBQ0EsTUFBTWMsWUFBWSxHQUFJQyxDQUFELElBQTRDO0lBQy9ESixNQUFNLENBQUNJLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQU47RUFDRCxDQUZEOztFQUdBLE1BQU1DLFlBQVksR0FBSUgsQ0FBRCxJQUF5QztJQUM1REEsQ0FBQyxDQUFDSSxjQUFGOztJQUNBLElBQUksQ0FBQ1QsR0FBTCxFQUFVO01BQ1I7SUFDRDs7SUFDRFUsS0FBSyxDQUFDLCtCQUFELEVBQWtDO01BQ3JDQyxNQUFNLEVBQUUsTUFENkI7TUFFckNDLE9BQU8sRUFBRTtRQUFFLGdCQUFnQjtNQUFsQixDQUY0QjtNQUdyQ0MsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtRQUNuQmY7TUFEbUIsQ0FBZjtJQUgrQixDQUFsQyxDQUFMLENBT0dnQixJQVBILENBT1NDLFFBQUQsSUFBY0EsUUFBUSxDQUFDQyxJQUFULEVBUHRCLEVBUUdGLElBUkgsQ0FRU0csSUFBRCxJQUFVQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWixDQVJsQjtFQVNELENBZEQ7O0VBZ0JBLG9CQUNFLDhEQUFDLE9BQUQ7SUFBQSx3QkFDRSw4REFBQyxPQUFEO01BQUEsd0JBQ0UsOERBQUMsR0FBRDtRQUNFLEdBQUcsRUFBRSxXQURQO1FBRUUsS0FBSyxFQUFDLEtBRlI7UUFHRSxNQUFNLEVBQUMsS0FIVDtRQUlFLEdBQUcsRUFBQyxVQUpOO1FBS0UsUUFBUTtNQUxWO1FBQUE7UUFBQTtRQUFBO01BQUEsUUFERixlQVFFO1FBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLFFBUkY7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLFFBREYsZUFXRSw4REFBQyxJQUFEO01BQU0sUUFBUSxFQUFFWCxZQUFoQjtNQUFBLHdCQUNFO1FBQ0UsSUFBSSxFQUFDLE1BRFA7UUFFRSxLQUFLLEVBQUVSLEdBRlQ7UUFHRSxRQUFRLEVBQUVJLFlBSFo7UUFJRSxXQUFXLEVBQUU7TUFKZjtRQUFBO1FBQUE7UUFBQTtNQUFBLFFBREYsZUFPRTtRQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQVBGO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxRQVhGO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxRQURGO0FBdUJEOztHQTdDdUJMOztNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0pvYkZvcm0udHN4P2Q0NzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnksIHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSAnQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5JztcclxuXHJcbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuc2VjdGlvbmBcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDIwcmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmA7XHJcblxyXG5jb25zdCBUZXh0Qm94ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICB3aWR0aDogNjAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBpbnB1dCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGZsZXg6IDgwJTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgSW1nID0gc3R5bGVkKEltYWdlKWBcclxuICB3aWR0aDogMTByZW07XHJcbiAgaGVpZ2h0OiAxMHJlbTtcclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEpvYkZvcm0oKSB7XHJcbiAgY29uc3QgW3VybCwgc2V0VXJsXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgc2V0VXJsKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlOiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKCF1cmwpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvam9iJywge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICB1cmwsXHJcbiAgICAgIH0pLFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiBjb25zb2xlLmxvZyhkYXRhKSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxXcmFwcGVyPlxyXG4gICAgICA8VGV4dEJveD5cclxuICAgICAgICA8SW1nXHJcbiAgICAgICAgICBzcmM9eycv7J2066qo7Yuw7L2YLmdpZid9XHJcbiAgICAgICAgICB3aWR0aD1cIjMwMFwiXHJcbiAgICAgICAgICBoZWlnaHQ9XCIzMDBcIlxyXG4gICAgICAgICAgYWx0PVwiaW1vdGljb25cIlxyXG4gICAgICAgICAgcHJpb3JpdHlcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwPuy3qOykgOyDnSDsl6zrn6zrtoQg66qo65GQIO2ZlOydtO2MheyeheuLiOuLpCE8L3A+XHJcbiAgICAgIDwvVGV4dEJveD5cclxuICAgICAgPEZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICB2YWx1ZT17dXJsfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPXsn7JuQ7ZWY64qUIOyxhOyaqeqzteqzoOydmCB1cmzsnYQg7JWM66Ck7KO87IS47JqU8J+YgSd9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8YnV0dG9uPlNlbmQ8L2J1dHRvbj5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgPC9XcmFwcGVyPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkltYWdlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInN0eWxlZCIsIldyYXBwZXIiLCJzZWN0aW9uIiwiVGV4dEJveCIsImRpdiIsIkZvcm0iLCJmb3JtIiwiSW1nIiwiSm9iRm9ybSIsInVybCIsInNldFVybCIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/JobForm.tsx\n"));

/***/ })

});