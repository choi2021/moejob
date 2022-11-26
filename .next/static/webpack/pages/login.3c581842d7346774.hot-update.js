/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./components/PlatformBtns.tsx":
/*!*************************************!*\
  !*** ./components/PlatformBtns.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PlatformBtns; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_fc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fc */ \"./node_modules/react-icons/fc/index.esm.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/AuthContext */ \"./context/AuthContext.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_authLogin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/authLogin */ \"./utils/authLogin.ts\");\n/* harmony import */ var _utils_authLogin__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_utils_authLogin__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"C:\\\\Users\\\\juni2\\\\projects\\\\\\uD3EC\\uD2B8\\uD3F4\\uB9AC\\uC624\\uC5D0 \\uC62C\\uB9B4 \\uD504\\uB85C\\uC81D\\uD2B8\\\\moijob\\\\moijob-client\\\\components\\\\PlatformBtns.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n  displayName: \"PlatformBtns__Wrapper\",\n  componentId: \"sc-g043s1-0\"\n})([\"margin-top:0.5rem;display:flex;span{color:#888;}button{margin:0 0.5rem;display:flex;flex-direction:column;align-items:center;font-size:0.8rem;}svg{width:2rem;height:2rem;}\"]);\n_c = Wrapper;\nconst PLATFORM = {\n  GOOGLE: 'google',\n  GITHUB: 'github'\n};\nfunction PlatformBtns() {\n  _s();\n\n  const authService = (0,_context_AuthContext__WEBPACK_IMPORTED_MODULE_1__.useAuthService)();\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n\n  const handleClick = e => {\n    const {\n      name\n    } = e.currentTarget;\n\n    if (name === PLATFORM.GOOGLE || name === PLATFORM.GITHUB) {\n      (0,_utils_authLogin__WEBPACK_IMPORTED_MODULE_3__.OAuthLogin)(name, authService, router);\n    }\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Wrapper, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"button\", {\n      name: PLATFORM.GOOGLE,\n      onClick: handleClick,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_icons_fc__WEBPACK_IMPORTED_MODULE_6__.FcGoogle, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"span\", {\n        children: \"Google\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"button\", {\n      name: PLATFORM.GITHUB,\n      onClick: handleClick,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_7__.AiFillGithub, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"span\", {\n        children: \"Github\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 49,\n    columnNumber: 5\n  }, this);\n}\n\n_s(PlatformBtns, \"rej/1augUCuV7aB7JRRPwGgLm9E=\", false, function () {\n  return [_context_AuthContext__WEBPACK_IMPORTED_MODULE_1__.useAuthService, next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];\n});\n\n_c2 = PlatformBtns;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Wrapper\");\n$RefreshReg$(_c2, \"PlatformBtns\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1BsYXRmb3JtQnRucy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOztBQUVBLE1BQU1PLE9BQU8sR0FBR0osd0VBQUg7RUFBQTtFQUFBO0FBQUEsbUxBQWI7S0FBTUk7QUF1Qk4sTUFBTUUsUUFBc0IsR0FBRztFQUM3QkMsTUFBTSxFQUFFLFFBRHFCO0VBRTdCQyxNQUFNLEVBQUU7QUFGcUIsQ0FBL0I7QUFLZSxTQUFTQyxZQUFULEdBQXdCO0VBQUE7O0VBQ3JDLE1BQU1DLFdBQVcsR0FBR1Qsb0VBQWMsRUFBbEM7RUFDQSxNQUFNVSxNQUFNLEdBQUdULHNEQUFTLEVBQXhCOztFQUNBLE1BQU1VLFdBQVcsR0FBSUMsQ0FBRCxJQUE0QztJQUM5RCxNQUFNO01BQUVDO0lBQUYsSUFBV0QsQ0FBQyxDQUFDRSxhQUFuQjs7SUFDQSxJQUFJRCxJQUFJLEtBQUtSLFFBQVEsQ0FBQ0MsTUFBbEIsSUFBNEJPLElBQUksS0FBS1IsUUFBUSxDQUFDRSxNQUFsRCxFQUEwRDtNQUN4REwsNERBQVUsQ0FBQ1csSUFBRCxFQUFPSixXQUFQLEVBQW9CQyxNQUFwQixDQUFWO0lBQ0Q7RUFDRixDQUxEOztFQU1BLG9CQUNFLDhEQUFDLE9BQUQ7SUFBQSx3QkFDRTtNQUFRLElBQUksRUFBRUwsUUFBUSxDQUFDQyxNQUF2QjtNQUErQixPQUFPLEVBQUVLLFdBQXhDO01BQUEsd0JBQ0UsOERBQUMsb0RBQUQ7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQURGLGVBRUU7UUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUEsUUFGRjtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFERixlQUtFO01BQVEsSUFBSSxFQUFFTixRQUFRLENBQUNFLE1BQXZCO01BQStCLE9BQU8sRUFBRUksV0FBeEM7TUFBQSx3QkFDRSw4REFBQyx3REFBRDtRQUFBO1FBQUE7UUFBQTtNQUFBLFFBREYsZUFFRTtRQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQUZGO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxRQUxGO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxRQURGO0FBWUQ7O0dBckJ1Qkg7VUFDRlIsa0VBQ0xDOzs7TUFGT08iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QbGF0Zm9ybUJ0bnMudHN4P2NjYWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRmNHb29nbGUgfSBmcm9tICdyZWFjdC1pY29ucy9mYyc7XHJcbmltcG9ydCB7IEFpRmlsbEdpdGh1YiB9IGZyb20gJ3JlYWN0LWljb25zL2FpJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IE9BdXRoVHlwZSB9IGZyb20gJy4uL3R5cGVzL0F1dGh0eXBlcyc7XHJcbmltcG9ydCB7IHVzZUF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vY29udGV4dC9BdXRoQ29udGV4dCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgQWNjZXNzVG9rZW4gfSBmcm9tICcuLi92YXJpYWJsZXMvYXV0aFZhcmlhYmxlJztcclxuaW1wb3J0IHsgT0F1dGhMb2dpbiB9IGZyb20gJy4uL3V0aWxzL2F1dGhMb2dpbic7XHJcblxyXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tdG9wOiAwLjVyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBzcGFuIHtcclxuICAgIGNvbG9yOiAjODg4O1xyXG4gIH1cclxuICBidXR0b24ge1xyXG4gICAgbWFyZ2luOiAwIDAuNXJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIH1cclxuICBzdmcge1xyXG4gICAgd2lkdGg6IDJyZW07XHJcbiAgICBoZWlnaHQ6IDJyZW07XHJcbiAgfVxyXG5gO1xyXG5cclxudHlwZSBQbGF0Zm9ybVR5cGUgPSB7XHJcbiAgW2tleTogc3RyaW5nXTogT0F1dGhUeXBlO1xyXG59O1xyXG5cclxuY29uc3QgUExBVEZPUk06IFBsYXRmb3JtVHlwZSA9IHtcclxuICBHT09HTEU6ICdnb29nbGUnLFxyXG4gIEdJVEhVQjogJ2dpdGh1YicsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQbGF0Zm9ybUJ0bnMoKSB7XHJcbiAgY29uc3QgYXV0aFNlcnZpY2UgPSB1c2VBdXRoU2VydmljZSgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB7XHJcbiAgICBjb25zdCB7IG5hbWUgfSA9IGUuY3VycmVudFRhcmdldDtcclxuICAgIGlmIChuYW1lID09PSBQTEFURk9STS5HT09HTEUgfHwgbmFtZSA9PT0gUExBVEZPUk0uR0lUSFVCKSB7XHJcbiAgICAgIE9BdXRoTG9naW4obmFtZSwgYXV0aFNlcnZpY2UsIHJvdXRlcik7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPFdyYXBwZXI+XHJcbiAgICAgIDxidXR0b24gbmFtZT17UExBVEZPUk0uR09PR0xFfSBvbkNsaWNrPXtoYW5kbGVDbGlja30+XHJcbiAgICAgICAgPEZjR29vZ2xlIC8+XHJcbiAgICAgICAgPHNwYW4+R29vZ2xlPC9zcGFuPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiBuYW1lPXtQTEFURk9STS5HSVRIVUJ9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cclxuICAgICAgICA8QWlGaWxsR2l0aHViIC8+XHJcbiAgICAgICAgPHNwYW4+R2l0aHViPC9zcGFuPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvV3JhcHBlcj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkZjR29vZ2xlIiwiQWlGaWxsR2l0aHViIiwic3R5bGVkIiwidXNlQXV0aFNlcnZpY2UiLCJ1c2VSb3V0ZXIiLCJPQXV0aExvZ2luIiwiV3JhcHBlciIsImRpdiIsIlBMQVRGT1JNIiwiR09PR0xFIiwiR0lUSFVCIiwiUGxhdGZvcm1CdG5zIiwiYXV0aFNlcnZpY2UiLCJyb3V0ZXIiLCJoYW5kbGVDbGljayIsImUiLCJuYW1lIiwiY3VycmVudFRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/PlatformBtns.tsx\n"));

/***/ }),

/***/ "./utils/authLogin.ts":
/*!****************************!*\
  !*** ./utils/authLogin.ts ***!
  \****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ })

});