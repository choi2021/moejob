"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./service/DbService.ts":
/*!******************************!*\
  !*** ./service/DbService.ts ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DBServiceImpl\": function() { return /* binding */ DBServiceImpl; }\n/* harmony export */ });\n/* harmony import */ var C_Users_juni2_projects_moijob_moijob_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/database */ \"./node_modules/firebase/database/dist/index.esm.js\");\n\n\nclass DBServiceImpl {\n  constructor(app) {\n    this.app = app;\n\n    (0,C_Users_juni2_projects_moijob_moijob_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"db\", void 0);\n\n    this.db = (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.getDatabase)(this.app);\n  }\n\n  addJob(userId, job) {\n    return (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.set)((0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.ref)(this.db, `users/${userId}/jobs/${job.id}`), job);\n  }\n\n  updateJob(userId, job) {\n    return (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.set)((0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.ref)(this.db, `users/${userId}/jobs/${job.id}`), job);\n  }\n\n  getJobs(userId) {\n    const dbRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.ref)(this.db);\n    return (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.get)((0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.child)(dbRef, `users/${userId}/jobs`)).then(snapshot => {\n      if (snapshot.exists()) {\n        return snapshot.val();\n      } else {\n        return [];\n      }\n    }).catch(error => {\n      console.error(error);\n    });\n  }\n\n  removeJob(userId, job) {\n    return (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.remove)((0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.ref)(this.db, `users/${userId}/jobs/${job.id}`));\n  }\n\n}\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlL0RiU2VydmljZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7QUFZTyxNQUFNTSxhQUFOLENBQXlDO0VBRTlDQyxXQUFXLENBQVNDLEdBQVQsRUFBMkI7SUFBQSxLQUFsQkEsR0FBa0IsR0FBbEJBLEdBQWtCOztJQUFBOztJQUNwQyxLQUFLQyxFQUFMLEdBQVVULDhEQUFXLENBQUMsS0FBS1EsR0FBTixDQUFyQjtFQUNEOztFQUVERSxNQUFNLENBQUNDLE1BQUQsRUFBaUJDLEdBQWpCLEVBQXVDO0lBQzNDLE9BQU9WLHNEQUFHLENBQUNELHNEQUFHLENBQUMsS0FBS1EsRUFBTixFQUFXLFNBQVFFLE1BQU8sU0FBUUMsR0FBRyxDQUFDQyxFQUFHLEVBQXpDLENBQUosRUFBaURELEdBQWpELENBQVY7RUFDRDs7RUFFREUsU0FBUyxDQUFDSCxNQUFELEVBQWlCQyxHQUFqQixFQUF1QztJQUM5QyxPQUFPVixzREFBRyxDQUFDRCxzREFBRyxDQUFDLEtBQUtRLEVBQU4sRUFBVyxTQUFRRSxNQUFPLFNBQVFDLEdBQUcsQ0FBQ0MsRUFBRyxFQUF6QyxDQUFKLEVBQWlERCxHQUFqRCxDQUFWO0VBQ0Q7O0VBRURHLE9BQU8sQ0FBQ0osTUFBRCxFQUFpQjtJQUN0QixNQUFNSyxLQUFLLEdBQUdmLHNEQUFHLENBQUMsS0FBS1EsRUFBTixDQUFqQjtJQUNBLE9BQU9KLHNEQUFHLENBQUNELHdEQUFLLENBQUNZLEtBQUQsRUFBUyxTQUFRTCxNQUFPLE9BQXhCLENBQU4sQ0FBSCxDQUNKTSxJQURJLENBQ0VDLFFBQUQsSUFBYztNQUNsQixJQUFJQSxRQUFRLENBQUNDLE1BQVQsRUFBSixFQUF1QjtRQUNyQixPQUFPRCxRQUFRLENBQUNFLEdBQVQsRUFBUDtNQUNELENBRkQsTUFFTztRQUNMLE9BQU8sRUFBUDtNQUNEO0lBQ0YsQ0FQSSxFQVFKQyxLQVJJLENBUUdDLEtBQUQsSUFBVztNQUNoQkMsT0FBTyxDQUFDRCxLQUFSLENBQWNBLEtBQWQ7SUFDRCxDQVZJLENBQVA7RUFXRDs7RUFFREUsU0FBUyxDQUFDYixNQUFELEVBQWlCQyxHQUFqQixFQUF1QztJQUM5QyxPQUFPVCx5REFBTSxDQUFDRixzREFBRyxDQUFDLEtBQUtRLEVBQU4sRUFBVyxTQUFRRSxNQUFPLFNBQVFDLEdBQUcsQ0FBQ0MsRUFBRyxFQUF6QyxDQUFKLENBQWI7RUFDRDs7QUEvQjZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NlcnZpY2UvRGJTZXJ2aWNlLnRzPzQwOGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmlyZWJhc2VBcHAgfSBmcm9tICdmaXJlYmFzZS9hcHAnO1xyXG5pbXBvcnQge1xyXG4gIERhdGFiYXNlLFxyXG4gIGdldERhdGFiYXNlLFxyXG4gIHJlZixcclxuICBzZXQsXHJcbiAgcmVtb3ZlLFxyXG4gIGNoaWxkLFxyXG4gIGdldCxcclxufSBmcm9tICdmaXJlYmFzZS9kYXRhYmFzZSc7XHJcbmltcG9ydCB7IERCU2VydmljZSB9IGZyb20gJy4uL3R5cGVzL0RidHlwZXMnO1xyXG5pbXBvcnQgeyBNb2RpZmllZEpvYlR5cGUgfSBmcm9tICcuLi90eXBlcy9qb2J0eXBlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBEQlNlcnZpY2VJbXBsIGltcGxlbWVudHMgREJTZXJ2aWNlIHtcclxuICBkYjogRGF0YWJhc2U7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhcHA6IEZpcmViYXNlQXBwKSB7XHJcbiAgICB0aGlzLmRiID0gZ2V0RGF0YWJhc2UodGhpcy5hcHApO1xyXG4gIH1cclxuXHJcbiAgYWRkSm9iKHVzZXJJZDogc3RyaW5nLCBqb2I6IE1vZGlmaWVkSm9iVHlwZSkge1xyXG4gICAgcmV0dXJuIHNldChyZWYodGhpcy5kYiwgYHVzZXJzLyR7dXNlcklkfS9qb2JzLyR7am9iLmlkfWApLCBqb2IpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlSm9iKHVzZXJJZDogc3RyaW5nLCBqb2I6IE1vZGlmaWVkSm9iVHlwZSkge1xyXG4gICAgcmV0dXJuIHNldChyZWYodGhpcy5kYiwgYHVzZXJzLyR7dXNlcklkfS9qb2JzLyR7am9iLmlkfWApLCBqb2IpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Sm9icyh1c2VySWQ6IHN0cmluZykge1xyXG4gICAgY29uc3QgZGJSZWYgPSByZWYodGhpcy5kYik7XHJcbiAgICByZXR1cm4gZ2V0KGNoaWxkKGRiUmVmLCBgdXNlcnMvJHt1c2VySWR9L2pvYnNgKSlcclxuICAgICAgLnRoZW4oKHNuYXBzaG90KSA9PiB7XHJcbiAgICAgICAgaWYgKHNuYXBzaG90LmV4aXN0cygpKSB7XHJcbiAgICAgICAgICByZXR1cm4gc25hcHNob3QudmFsKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVKb2IodXNlcklkOiBzdHJpbmcsIGpvYjogTW9kaWZpZWRKb2JUeXBlKSB7XHJcbiAgICByZXR1cm4gcmVtb3ZlKHJlZih0aGlzLmRiLCBgdXNlcnMvJHt1c2VySWR9L2pvYnMvJHtqb2IuaWR9YCkpO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiZ2V0RGF0YWJhc2UiLCJyZWYiLCJzZXQiLCJyZW1vdmUiLCJjaGlsZCIsImdldCIsIkRCU2VydmljZUltcGwiLCJjb25zdHJ1Y3RvciIsImFwcCIsImRiIiwiYWRkSm9iIiwidXNlcklkIiwiam9iIiwiaWQiLCJ1cGRhdGVKb2IiLCJnZXRKb2JzIiwiZGJSZWYiLCJ0aGVuIiwic25hcHNob3QiLCJleGlzdHMiLCJ2YWwiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsInJlbW92ZUpvYiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./service/DbService.ts\n"));

/***/ })

});