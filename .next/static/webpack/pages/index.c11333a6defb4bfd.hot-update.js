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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ JobForm; }\n/* harmony export */ });\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"C:\\\\Users\\\\juni2\\\\projects\\\\\\uD3EC\\uD2B8\\uD3F4\\uB9AC\\uC624\\uC5D0 \\uC62C\\uB9B4 \\uD504\\uB85C\\uC81D\\uD2B8\\\\moijob\\\\moijob-client\\\\components\\\\JobForm.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\nconst Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].section.withConfig({\n  displayName: \"JobForm__Wrapper\",\n  componentId: \"sc-18s44eo-0\"\n})([\"width:100%;height:20rem;background-color:lightcoral;display:flex;flex-direction:column;justify-content:center;align-items:center;\"]);\n_c = Wrapper;\nconst TextBox = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"JobForm__TextBox\",\n  componentId: \"sc-18s44eo-1\"\n})([\"display:flex;align-items:center;p{margin-left:0.5rem;font-weight:bold;color:white;}\"]);\n_c2 = TextBox;\nconst Form = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].form.withConfig({\n  displayName: \"JobForm__Form\",\n  componentId: \"sc-18s44eo-2\"\n})([\"background-color:white;padding:1rem 2rem;width:60%;text-align:center;border-radius:2rem;display:flex;align-items:center;input{background-color:transparent;border:none;flex:80%;outline:none;text-align:center;}\"]);\n_c3 = Form;\nconst Img = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((next_image__WEBPACK_IMPORTED_MODULE_0___default())).withConfig({\n  displayName: \"JobForm__Img\",\n  componentId: \"sc-18s44eo-3\"\n})([\"width:10rem;height:10rem;\"]);\n_c4 = Img;\nfunction JobForm() {\n  _s();\n\n  const {\n    0: url,\n    1: setUrl\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n\n  const handleChange = e => {\n    setUrl(e.target.value);\n  };\n\n  const handleSubmit = e => {\n    e.preventDefault();\n    fetch('http://localhost:3000/api/job', {\n      method: 'POST',\n      body: JSON.stringify({\n        url,\n        platform: 'wanted'\n      })\n    }).then(console.log);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Wrapper, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(TextBox, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Img, {\n        src: '/이모티콘.gif',\n        width: \"300\",\n        height: \"300\",\n        alt: \"imoticon\",\n        priority: true\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n        children: \"\\uCDE8\\uC900\\uC0DD \\uC5EC\\uB7EC\\uBD84 \\uBAA8\\uB450 \\uD654\\uC774\\uD305\\uC785\\uB2C8\\uB2E4!\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Form, {\n      onSubmit: handleSubmit,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"input\", {\n        type: \"text\",\n        value: url,\n        onChange: handleChange,\n        placeholder: '원하는 채용공고의 url을 알려주세요😁'\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n        children: \"Send\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 63,\n    columnNumber: 5\n  }, this);\n}\n\n_s(JobForm, \"ZV/BRor2ecoM1gSD+06O4c7I8qc=\");\n\n_c5 = JobForm;\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"Wrapper\");\n$RefreshReg$(_c2, \"TextBox\");\n$RefreshReg$(_c3, \"Form\");\n$RefreshReg$(_c4, \"Img\");\n$RefreshReg$(_c5, \"JobForm\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0pvYkZvcm0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUdBLE1BQU1JLE9BQU8sR0FBR0QsNEVBQUg7RUFBQTtFQUFBO0FBQUEseUlBQWI7S0FBTUM7QUFVTixNQUFNRSxPQUFPLEdBQUdILHdFQUFIO0VBQUE7RUFBQTtBQUFBLDJGQUFiO01BQU1HO0FBVU4sTUFBTUUsSUFBSSxHQUFHTCx5RUFBSDtFQUFBO0VBQUE7QUFBQSx3TkFBVjtNQUFNSztBQWlCTixNQUFNRSxHQUFHLEdBQUdQLDZEQUFNLENBQUNILG1EQUFELENBQVQ7RUFBQTtFQUFBO0FBQUEsaUNBQVQ7TUFBTVU7QUFLUyxTQUFTQyxPQUFULEdBQW1CO0VBQUE7O0VBQ2hDLE1BQU07SUFBQSxHQUFDQyxHQUFEO0lBQUEsR0FBTUM7RUFBTixJQUFnQlgsK0NBQVEsQ0FBQyxFQUFELENBQTlCOztFQUNBLE1BQU1ZLFlBQVksR0FBSUMsQ0FBRCxJQUE0QztJQUMvREYsTUFBTSxDQUFDRSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFOO0VBQ0QsQ0FGRDs7RUFJQSxNQUFNQyxZQUFZLEdBQUlILENBQUQsSUFBeUM7SUFDNURBLENBQUMsQ0FBQ0ksY0FBRjtJQUNBQyxLQUFLLENBQUMsK0JBQUQsRUFBa0M7TUFDckNDLE1BQU0sRUFBRSxNQUQ2QjtNQUVyQ0MsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtRQUFFWixHQUFGO1FBQU9hLFFBQVEsRUFBRTtNQUFqQixDQUFmO0lBRitCLENBQWxDLENBQUwsQ0FHR0MsSUFISCxDQUdRQyxPQUFPLENBQUNDLEdBSGhCO0VBSUQsQ0FORDs7RUFRQSxvQkFDRSw4REFBQyxPQUFEO0lBQUEsd0JBQ0UsOERBQUMsT0FBRDtNQUFBLHdCQUNFLDhEQUFDLEdBQUQ7UUFDRSxHQUFHLEVBQUUsV0FEUDtRQUVFLEtBQUssRUFBQyxLQUZSO1FBR0UsTUFBTSxFQUFDLEtBSFQ7UUFJRSxHQUFHLEVBQUMsVUFKTjtRQUtFLFFBQVE7TUFMVjtRQUFBO1FBQUE7UUFBQTtNQUFBLFFBREYsZUFRRTtRQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQVJGO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxRQURGLGVBV0UsOERBQUMsSUFBRDtNQUFNLFFBQVEsRUFBRVYsWUFBaEI7TUFBQSx3QkFDRTtRQUNFLElBQUksRUFBQyxNQURQO1FBRUUsS0FBSyxFQUFFTixHQUZUO1FBR0UsUUFBUSxFQUFFRSxZQUhaO1FBSUUsV0FBVyxFQUFFO01BSmY7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQURGLGVBT0U7UUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUEsUUFQRjtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFYRjtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsUUFERjtBQXVCRDs7R0FyQ3VCSDs7TUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Kb2JGb3JtLnRzeD9kNDc0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5LCB1c2VRdWVyeUNsaWVudCB9IGZyb20gJ0B0YW5zdGFjay9yZWFjdC1xdWVyeSc7XHJcblxyXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAyMHJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gO1xyXG5cclxuY29uc3QgVGV4dEJveCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHAge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEZvcm0gPSBzdHlsZWQuZm9ybWBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxcmVtIDJyZW07XHJcbiAgd2lkdGg6IDYwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaW5wdXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBmbGV4OiA4MCU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEltZyA9IHN0eWxlZChJbWFnZSlgXHJcbiAgd2lkdGg6IDEwcmVtO1xyXG4gIGhlaWdodDogMTByZW07XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBKb2JGb3JtKCkge1xyXG4gIGNvbnN0IFt1cmwsIHNldFVybF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBzZXRVcmwoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlOiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvam9iJywge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB1cmwsIHBsYXRmb3JtOiAnd2FudGVkJyB9KSxcclxuICAgIH0pLnRoZW4oY29uc29sZS5sb2cpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8V3JhcHBlcj5cclxuICAgICAgPFRleHRCb3g+XHJcbiAgICAgICAgPEltZ1xyXG4gICAgICAgICAgc3JjPXsnL+ydtOuqqO2LsOy9mC5naWYnfVxyXG4gICAgICAgICAgd2lkdGg9XCIzMDBcIlxyXG4gICAgICAgICAgaGVpZ2h0PVwiMzAwXCJcclxuICAgICAgICAgIGFsdD1cImltb3RpY29uXCJcclxuICAgICAgICAgIHByaW9yaXR5XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cD7st6jspIDsg50g7Jes65+s67aEIOuqqOuRkCDtmZTsnbTtjIXsnoXri4jri6QhPC9wPlxyXG4gICAgICA8L1RleHRCb3g+XHJcbiAgICAgIDxGb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgdmFsdWU9e3VybH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj17J+ybkO2VmOuKlCDssYTsmqnqs7Xqs6DsnZggdXJs7J2EIOyVjOugpOyjvOyEuOyalPCfmIEnfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGJ1dHRvbj5TZW5kPC9idXR0b24+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgIDwvV3JhcHBlcj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJzdHlsZWQiLCJXcmFwcGVyIiwic2VjdGlvbiIsIlRleHRCb3giLCJkaXYiLCJGb3JtIiwiZm9ybSIsIkltZyIsIkpvYkZvcm0iLCJ1cmwiLCJzZXRVcmwiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwbGF0Zm9ybSIsInRoZW4iLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/JobForm.tsx\n"));

/***/ })

});