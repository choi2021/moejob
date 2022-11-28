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

/***/ "./components/Navbar.tsx":
/*!*******************************!*\
  !*** ./components/Navbar.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Navbar; }\n/* harmony export */ });\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/AuthContext */ \"./context/AuthContext.tsx\");\n/* harmony import */ var _variables_authVariable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../variables/authVariable */ \"./variables/authVariable.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"C:\\\\Users\\\\juni2\\\\projects\\\\\\uD3EC\\uD2B8\\uD3F4\\uB9AC\\uC624\\uC5D0 \\uC62C\\uB9B4 \\uD504\\uB85C\\uC81D\\uD2B8\\\\moijob\\\\moijob-client\\\\components\\\\Navbar.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].nav.withConfig({\n  displayName: \"Navbar__Wrapper\",\n  componentId: \"sc-1lcf8pc-0\"\n})([\"position:fixed;border-bottom:gray 1px solid;\"]);\n_c = Wrapper;\nconst Layout = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].nav.withConfig({\n  displayName: \"Navbar__Layout\",\n  componentId: \"sc-1lcf8pc-1\"\n})([\"margin:auto;max-width:1000px;display:flex;align-items:center;justify-content:space-between;height:3rem;padding:1rem;a{font-size:1.6rem;font-weight:bold;color:lightcoral;}\"]);\n_c2 = Layout;\nconst Btns = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n  displayName: \"Navbar__Btns\",\n  componentId: \"sc-1lcf8pc-2\"\n})([\"display:flex;align-items:center;button{font-weight:bold;padding:0.5rem;&:hover{color:lightcoral;}}\"]);\n_c3 = Btns;\nfunction Navbar() {\n  _s();\n\n  const {\n    push\n  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  const authService = (0,_context_AuthContext__WEBPACK_IMPORTED_MODULE_3__.useAuthService)();\n\n  const onSignOut = () => {\n    authService.signOut().then(() => {\n      localStorage.removeItem(_variables_authVariable__WEBPACK_IMPORTED_MODULE_4__.AccessToken);\n      push('/login');\n    }).catch(error => console.log(error));\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Wrapper, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Layout, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {\n        href: \"/\",\n        children: \"\\uBAA8\\uC73C\\uC7A1\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Btns, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"button\", {\n          onClick: onSignOut,\n          children: \"\\uB85C\\uADF8\\uC544\\uC6C3\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 53,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Navbar, \"PJuze/gN4aiyjLxY9ZzkiCK5Mm8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter, _context_AuthContext__WEBPACK_IMPORTED_MODULE_3__.useAuthService];\n});\n\n_c4 = Navbar;\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"Wrapper\");\n$RefreshReg$(_c2, \"Layout\");\n$RefreshReg$(_c3, \"Btns\");\n$RefreshReg$(_c4, \"Navbar\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmJhci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1NLE9BQU8sR0FBR0gsd0VBQUg7RUFBQTtFQUFBO0FBQUEsb0RBQWI7S0FBTUc7QUFLTixNQUFNRSxNQUFNLEdBQUdMLHdFQUFIO0VBQUE7RUFBQTtBQUFBLGtMQUFaO01BQU1LO0FBZU4sTUFBTUMsSUFBSSxHQUFHTix3RUFBSDtFQUFBO0VBQUE7QUFBQSwwR0FBVjtNQUFNTTtBQVlTLFNBQVNFLE1BQVQsR0FBa0I7RUFBQTs7RUFDL0IsTUFBTTtJQUFFQztFQUFGLElBQVdYLHNEQUFTLEVBQTFCO0VBQ0EsTUFBTVksV0FBVyxHQUFHVCxvRUFBYyxFQUFsQzs7RUFDQSxNQUFNVSxTQUFTLEdBQUcsTUFBTTtJQUN0QkQsV0FBVyxDQUNSRSxPQURILEdBRUdDLElBRkgsQ0FFUSxNQUFNO01BQ1ZDLFlBQVksQ0FBQ0MsVUFBYixDQUF3QmIsZ0VBQXhCO01BQ0FPLElBQUksQ0FBQyxRQUFELENBQUo7SUFDRCxDQUxILEVBTUdPLEtBTkgsQ0FNVUMsS0FBRCxJQUFXQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWixDQU5wQjtFQU9ELENBUkQ7O0VBU0Esb0JBQ0UsOERBQUMsT0FBRDtJQUFBLHVCQUNFLDhEQUFDLE1BQUQ7TUFBQSx3QkFDRSw4REFBQyxrREFBRDtRQUFNLElBQUksRUFBQyxHQUFYO1FBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLFFBREYsZUFFRSw4REFBQyxJQUFEO1FBQUEsdUJBQ0U7VUFBUSxPQUFPLEVBQUVOLFNBQWpCO1VBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BREY7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQUZGO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQURGO0lBQUE7SUFBQTtJQUFBO0VBQUEsUUFERjtBQVVEOztHQXRCdUJIO1VBQ0xWLG9EQUNHRzs7O01BRkVPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2YmFyLnRzeD8xYjgzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHVzZUF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vY29udGV4dC9BdXRoQ29udGV4dCc7XHJcbmltcG9ydCB7IEFjY2Vzc1Rva2VuIH0gZnJvbSAnLi4vdmFyaWFibGVzL2F1dGhWYXJpYWJsZSc7XHJcblxyXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLm5hdmBcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogZ3JheSAxcHggc29saWQ7XHJcbmA7XHJcblxyXG5jb25zdCBMYXlvdXQgPSBzdHlsZWQubmF2YFxyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGhlaWdodDogM3JlbTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGEge1xyXG4gICAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiBsaWdodGNvcmFsO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEJ0bnMgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBidXR0b24ge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgY29sb3I6IGxpZ2h0Y29yYWw7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2YmFyKCkge1xyXG4gIGNvbnN0IHsgcHVzaCB9ID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgYXV0aFNlcnZpY2UgPSB1c2VBdXRoU2VydmljZSgpO1xyXG4gIGNvbnN0IG9uU2lnbk91dCA9ICgpID0+IHtcclxuICAgIGF1dGhTZXJ2aWNlXHJcbiAgICAgIC5zaWduT3V0KClcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKEFjY2Vzc1Rva2VuKTtcclxuICAgICAgICBwdXNoKCcvbG9naW4nKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8V3JhcHBlcj5cclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPuuqqOycvOyeoTwvTGluaz5cclxuICAgICAgICA8QnRucz5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25TaWduT3V0fT7roZzqt7jslYTsm4M8L2J1dHRvbj5cclxuICAgICAgICA8L0J0bnM+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgPC9XcmFwcGVyPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsInN0eWxlZCIsInVzZUF1dGhTZXJ2aWNlIiwiQWNjZXNzVG9rZW4iLCJXcmFwcGVyIiwibmF2IiwiTGF5b3V0IiwiQnRucyIsImRpdiIsIk5hdmJhciIsInB1c2giLCJhdXRoU2VydmljZSIsIm9uU2lnbk91dCIsInNpZ25PdXQiLCJ0aGVuIiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Navbar.tsx\n"));

/***/ })

});