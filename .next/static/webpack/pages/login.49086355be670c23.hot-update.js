"use strict";
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PlatformBtns; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_fc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fc */ \"./node_modules/react-icons/fc/index.esm.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/AuthContext */ \"./context/AuthContext.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _variables_authVariable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables/authVariable */ \"./variables/authVariable.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"C:\\\\Users\\\\juni2\\\\projects\\\\\\uD3EC\\uD2B8\\uD3F4\\uB9AC\\uC624\\uC5D0 \\uC62C\\uB9B4 \\uD504\\uB85C\\uC81D\\uD2B8\\\\moijob\\\\moijob-client\\\\components\\\\PlatformBtns.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n  displayName: \"PlatformBtns__Wrapper\",\n  componentId: \"sc-g043s1-0\"\n})([\"margin-top:0.5rem;display:flex;span{color:#888;}button{margin:0 0.5rem;display:flex;flex-direction:column;align-items:center;font-size:0.8rem;}svg{width:2rem;height:2rem;}\"]);\n_c = Wrapper;\nconst PLATFORM = {\n  GOOGLE: 'google',\n  GITHUB: 'github'\n};\nfunction PlatformBtns() {\n  _s();\n\n  const {\n    push\n  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n  const authService = (0,_context_AuthContext__WEBPACK_IMPORTED_MODULE_1__.useAuth)();\n\n  const handleClick = e => {\n    const {\n      name\n    } = e.currentTarget;\n\n    if (name === PLATFORM.GOOGLE || name === PLATFORM.GITHUB) {\n      authService.OAuthSignIn(name).then(userData => {\n        return userData.user.getIdToken();\n      }).then(token => {\n        localStorage.setItem(_variables_authVariable__WEBPACK_IMPORTED_MODULE_3__.AccessToken, token);\n        push('/');\n      }).catch(error => console.log(error));\n    }\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Wrapper, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"button\", {\n      name: PLATFORM.GOOGLE,\n      onClick: handleClick,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_icons_fc__WEBPACK_IMPORTED_MODULE_6__.FcGoogle, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"span\", {\n        children: \"Google\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"button\", {\n      name: PLATFORM.GITHUB,\n      onClick: handleClick,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_7__.AiFillGithub, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"span\", {\n        children: \"Github\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 58,\n    columnNumber: 5\n  }, this);\n}\n\n_s(PlatformBtns, \"Yqwb/hsITkkBvYovFWJhKXX89MQ=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter, _context_AuthContext__WEBPACK_IMPORTED_MODULE_1__.useAuth];\n});\n\n_c2 = PlatformBtns;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Wrapper\");\n$RefreshReg$(_c2, \"PlatformBtns\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1BsYXRmb3JtQnRucy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBR0EsTUFBTU8sT0FBTyxHQUFHSix3RUFBSDtFQUFBO0VBQUE7QUFBQSxtTEFBYjtLQUFNSTtBQXVCTixNQUFNRSxRQUFzQixHQUFHO0VBQzdCQyxNQUFNLEVBQUUsUUFEcUI7RUFFN0JDLE1BQU0sRUFBRTtBQUZxQixDQUEvQjtBQUtlLFNBQVNDLFlBQVQsR0FBd0I7RUFBQTs7RUFDckMsTUFBTTtJQUFFQztFQUFGLElBQVdSLHNEQUFTLEVBQTFCO0VBQ0EsTUFBTVMsV0FBVyxHQUFHViw2REFBTyxFQUEzQjs7RUFDQSxNQUFNVyxXQUFXLEdBQUlDLENBQUQsSUFBNEM7SUFDOUQsTUFBTTtNQUFFQztJQUFGLElBQVdELENBQUMsQ0FBQ0UsYUFBbkI7O0lBQ0EsSUFBSUQsSUFBSSxLQUFLUixRQUFRLENBQUNDLE1BQWxCLElBQTRCTyxJQUFJLEtBQUtSLFFBQVEsQ0FBQ0UsTUFBbEQsRUFBMEQ7TUFDeERHLFdBQVcsQ0FDUkssV0FESCxDQUNlRixJQURmLEVBRUdHLElBRkgsQ0FFU0MsUUFBRCxJQUE4QjtRQUNsQyxPQUFPQSxRQUFRLENBQUNDLElBQVQsQ0FBY0MsVUFBZCxFQUFQO01BQ0QsQ0FKSCxFQUtHSCxJQUxILENBS1NJLEtBQUQsSUFBVztRQUNmQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUJwQixnRUFBckIsRUFBa0NrQixLQUFsQztRQUNBWCxJQUFJLENBQUMsR0FBRCxDQUFKO01BQ0QsQ0FSSCxFQVNHYyxLQVRILENBU1VDLEtBQUQsSUFBV0MsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVosQ0FUcEI7SUFVRDtFQUNGLENBZEQ7O0VBZUEsb0JBQ0UsOERBQUMsT0FBRDtJQUFBLHdCQUNFO01BQVEsSUFBSSxFQUFFbkIsUUFBUSxDQUFDQyxNQUF2QjtNQUErQixPQUFPLEVBQUVLLFdBQXhDO01BQUEsd0JBQ0UsOERBQUMsb0RBQUQ7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQURGLGVBRUU7UUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUEsUUFGRjtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFERixlQUtFO01BQVEsSUFBSSxFQUFFTixRQUFRLENBQUNFLE1BQXZCO01BQStCLE9BQU8sRUFBRUksV0FBeEM7TUFBQSx3QkFDRSw4REFBQyx3REFBRDtRQUFBO1FBQUE7UUFBQTtNQUFBLFFBREYsZUFFRTtRQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQUZGO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxRQUxGO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxRQURGO0FBWUQ7O0dBOUJ1Qkg7VUFDTFAsb0RBQ0dEOzs7TUFGRVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QbGF0Zm9ybUJ0bnMudHN4P2NjYWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRmNHb29nbGUgfSBmcm9tICdyZWFjdC1pY29ucy9mYyc7XHJcbmltcG9ydCB7IEFpRmlsbEdpdGh1YiB9IGZyb20gJ3JlYWN0LWljb25zL2FpJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICcuLi9jb250ZXh0L0F1dGhDb250ZXh0JztcclxuaW1wb3J0IHsgT0F1dGhUeXBlIH0gZnJvbSAnLi4vdHlwZXMvQXV0aHR5cGVzJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBBY2Nlc3NUb2tlbiB9IGZyb20gJy4uL3ZhcmlhYmxlcy9hdXRoVmFyaWFibGUnO1xyXG5pbXBvcnQgeyBVc2VyQ3JlZGVudGlhbCB9IGZyb20gJ2ZpcmViYXNlL2F1dGgnO1xyXG5cclxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgc3BhbiB7XHJcbiAgICBjb2xvcjogIzg4ODtcclxuICB9XHJcbiAgYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMCAwLjVyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICB9XHJcbiAgc3ZnIHtcclxuICAgIHdpZHRoOiAycmVtO1xyXG4gICAgaGVpZ2h0OiAycmVtO1xyXG4gIH1cclxuYDtcclxuXHJcbnR5cGUgUGxhdGZvcm1UeXBlID0ge1xyXG4gIFtrZXk6IHN0cmluZ106IE9BdXRoVHlwZTtcclxufTtcclxuXHJcbmNvbnN0IFBMQVRGT1JNOiBQbGF0Zm9ybVR5cGUgPSB7XHJcbiAgR09PR0xFOiAnZ29vZ2xlJyxcclxuICBHSVRIVUI6ICdnaXRodWInLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGxhdGZvcm1CdG5zKCkge1xyXG4gIGNvbnN0IHsgcHVzaCB9ID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgYXV0aFNlcnZpY2UgPSB1c2VBdXRoKCk7XHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHtcclxuICAgIGNvbnN0IHsgbmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0O1xyXG4gICAgaWYgKG5hbWUgPT09IFBMQVRGT1JNLkdPT0dMRSB8fCBuYW1lID09PSBQTEFURk9STS5HSVRIVUIpIHtcclxuICAgICAgYXV0aFNlcnZpY2VcclxuICAgICAgICAuT0F1dGhTaWduSW4obmFtZSlcclxuICAgICAgICAudGhlbigodXNlckRhdGE6IFVzZXJDcmVkZW50aWFsKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gdXNlckRhdGEudXNlci5nZXRJZFRva2VuKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigodG9rZW4pID0+IHtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKEFjY2Vzc1Rva2VuLCB0b2tlbik7XHJcbiAgICAgICAgICBwdXNoKCcvJyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxXcmFwcGVyPlxyXG4gICAgICA8YnV0dG9uIG5hbWU9e1BMQVRGT1JNLkdPT0dMRX0gb25DbGljaz17aGFuZGxlQ2xpY2t9PlxyXG4gICAgICAgIDxGY0dvb2dsZSAvPlxyXG4gICAgICAgIDxzcGFuPkdvb2dsZTwvc3Bhbj5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gbmFtZT17UExBVEZPUk0uR0lUSFVCfSBvbkNsaWNrPXtoYW5kbGVDbGlja30+XHJcbiAgICAgICAgPEFpRmlsbEdpdGh1YiAvPlxyXG4gICAgICAgIDxzcGFuPkdpdGh1Yjwvc3Bhbj5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L1dyYXBwZXI+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJGY0dvb2dsZSIsIkFpRmlsbEdpdGh1YiIsInN0eWxlZCIsInVzZUF1dGgiLCJ1c2VSb3V0ZXIiLCJBY2Nlc3NUb2tlbiIsIldyYXBwZXIiLCJkaXYiLCJQTEFURk9STSIsIkdPT0dMRSIsIkdJVEhVQiIsIlBsYXRmb3JtQnRucyIsInB1c2giLCJhdXRoU2VydmljZSIsImhhbmRsZUNsaWNrIiwiZSIsIm5hbWUiLCJjdXJyZW50VGFyZ2V0IiwiT0F1dGhTaWduSW4iLCJ0aGVuIiwidXNlckRhdGEiLCJ1c2VyIiwiZ2V0SWRUb2tlbiIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/PlatformBtns.tsx\n"));

/***/ })

});