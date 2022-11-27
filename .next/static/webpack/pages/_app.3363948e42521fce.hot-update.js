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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DBServiceImpl\": function() { return /* binding */ DBServiceImpl; }\n/* harmony export */ });\n/* harmony import */ var C_Users_juni2_projects_moijob_moijob_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/database */ \"./node_modules/firebase/database/dist/index.esm.js\");\n/* harmony import */ var _variables_authVariable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../variables/authVariable */ \"./variables/authVariable.ts\");\n\n\n\nclass DBServiceImpl {\n  constructor(app) {\n    this.app = app;\n\n    (0,C_Users_juni2_projects_moijob_moijob_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"db\", void 0);\n\n    this.db = (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.getDatabase)(this.app);\n  }\n\n  addJob(job) {\n    const userId = localStorage.getItems(_variables_authVariable__WEBPACK_IMPORTED_MODULE_2__.UserId);\n    return (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.set)((0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.ref)(this.db, `users/${userId}/jobs/${job.id}`), job);\n  }\n\n  updateJob(job) {\n    const userId = localStorage.getItems(_variables_authVariable__WEBPACK_IMPORTED_MODULE_2__.UserId);\n    return (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.set)((0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.ref)(this.db, `users/${userId}/jobs/${job.id}`), job);\n  }\n\n  async getJobs() {\n    const userId = localStorage.getItems(_variables_authVariable__WEBPACK_IMPORTED_MODULE_2__.UserId);\n    console.log(userId);\n    const dbRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.ref)(this.db);\n    return (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.get)((0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.child)(dbRef, `users/${userId}/jobs`)).then(snapshot => {\n      if (snapshot.exists()) {\n        return snapshot.val();\n      } else {\n        return [];\n      }\n    }).catch(error => {\n      console.error(error);\n    });\n  }\n\n  removeJob(job) {\n    const userId = localStorage.getItems(_variables_authVariable__WEBPACK_IMPORTED_MODULE_2__.UserId);\n    return (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.remove)((0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.ref)(this.db, `users/${userId}/jobs/${job.id}`));\n  }\n\n}\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlL0RiU2VydmljZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBO0FBV0E7QUFFTyxNQUFNTyxhQUFOLENBQXlDO0VBRTlDQyxXQUFXLENBQVNDLEdBQVQsRUFBMkI7SUFBQSxLQUFsQkEsR0FBa0IsR0FBbEJBLEdBQWtCOztJQUFBOztJQUNwQyxLQUFLQyxFQUFMLEdBQVVWLDhEQUFXLENBQUMsS0FBS1MsR0FBTixDQUFyQjtFQUNEOztFQUVERSxNQUFNLENBQUNDLEdBQUQsRUFBdUI7SUFDM0IsTUFBTUMsTUFBTSxHQUFHQyxZQUFZLENBQUNDLFFBQWIsQ0FBc0JULDJEQUF0QixDQUFmO0lBQ0EsT0FBT0osc0RBQUcsQ0FBQ0Qsc0RBQUcsQ0FBQyxLQUFLUyxFQUFOLEVBQVcsU0FBUUcsTUFBTyxTQUFRRCxHQUFHLENBQUNJLEVBQUcsRUFBekMsQ0FBSixFQUFpREosR0FBakQsQ0FBVjtFQUNEOztFQUVESyxTQUFTLENBQUNMLEdBQUQsRUFBdUI7SUFDOUIsTUFBTUMsTUFBTSxHQUFHQyxZQUFZLENBQUNDLFFBQWIsQ0FBc0JULDJEQUF0QixDQUFmO0lBQ0EsT0FBT0osc0RBQUcsQ0FBQ0Qsc0RBQUcsQ0FBQyxLQUFLUyxFQUFOLEVBQVcsU0FBUUcsTUFBTyxTQUFRRCxHQUFHLENBQUNJLEVBQUcsRUFBekMsQ0FBSixFQUFpREosR0FBakQsQ0FBVjtFQUNEOztFQUVZLE1BQVBNLE9BQU8sR0FBdUI7SUFDbEMsTUFBTUwsTUFBTSxHQUFHQyxZQUFZLENBQUNDLFFBQWIsQ0FBc0JULDJEQUF0QixDQUFmO0lBQ0FhLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUCxNQUFaO0lBQ0EsTUFBTVEsS0FBSyxHQUFHcEIsc0RBQUcsQ0FBQyxLQUFLUyxFQUFOLENBQWpCO0lBQ0EsT0FBT0wsc0RBQUcsQ0FBQ0Qsd0RBQUssQ0FBQ2lCLEtBQUQsRUFBUyxTQUFRUixNQUFPLE9BQXhCLENBQU4sQ0FBSCxDQUNKUyxJQURJLENBQ0VDLFFBQUQsSUFBYztNQUNsQixJQUFJQSxRQUFRLENBQUNDLE1BQVQsRUFBSixFQUF1QjtRQUNyQixPQUFPRCxRQUFRLENBQUNFLEdBQVQsRUFBUDtNQUNELENBRkQsTUFFTztRQUNMLE9BQU8sRUFBUDtNQUNEO0lBQ0YsQ0FQSSxFQVFKQyxLQVJJLENBUUdDLEtBQUQsSUFBVztNQUNoQlIsT0FBTyxDQUFDUSxLQUFSLENBQWNBLEtBQWQ7SUFDRCxDQVZJLENBQVA7RUFXRDs7RUFFREMsU0FBUyxDQUFDaEIsR0FBRCxFQUF1QjtJQUM5QixNQUFNQyxNQUFNLEdBQUdDLFlBQVksQ0FBQ0MsUUFBYixDQUFzQlQsMkRBQXRCLENBQWY7SUFDQSxPQUFPSCx5REFBTSxDQUFDRixzREFBRyxDQUFDLEtBQUtTLEVBQU4sRUFBVyxTQUFRRyxNQUFPLFNBQVFELEdBQUcsQ0FBQ0ksRUFBRyxFQUF6QyxDQUFKLENBQWI7RUFDRDs7QUFwQzZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NlcnZpY2UvRGJTZXJ2aWNlLnRzPzQwOGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmlyZWJhc2VBcHAgfSBmcm9tICdmaXJlYmFzZS9hcHAnO1xyXG5pbXBvcnQge1xyXG4gIERhdGFiYXNlLFxyXG4gIGdldERhdGFiYXNlLFxyXG4gIHJlZixcclxuICBzZXQsXHJcbiAgcmVtb3ZlLFxyXG4gIGNoaWxkLFxyXG4gIGdldCxcclxufSBmcm9tICdmaXJlYmFzZS9kYXRhYmFzZSc7XHJcbmltcG9ydCB7IERCU2VydmljZSB9IGZyb20gJy4uL3R5cGVzL0RidHlwZXMnO1xyXG5pbXBvcnQgeyBKb2JUeXBlLCBNb2RpZmllZEpvYlR5cGUgfSBmcm9tICcuLi90eXBlcy9qb2J0eXBlJztcclxuaW1wb3J0IHsgVXNlcklkIH0gZnJvbSAnLi4vdmFyaWFibGVzL2F1dGhWYXJpYWJsZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgREJTZXJ2aWNlSW1wbCBpbXBsZW1lbnRzIERCU2VydmljZSB7XHJcbiAgZGI6IERhdGFiYXNlO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBwOiBGaXJlYmFzZUFwcCkge1xyXG4gICAgdGhpcy5kYiA9IGdldERhdGFiYXNlKHRoaXMuYXBwKTtcclxuICB9XHJcblxyXG4gIGFkZEpvYihqb2I6IE1vZGlmaWVkSm9iVHlwZSkge1xyXG4gICAgY29uc3QgdXNlcklkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW1zKFVzZXJJZCk7XHJcbiAgICByZXR1cm4gc2V0KHJlZih0aGlzLmRiLCBgdXNlcnMvJHt1c2VySWR9L2pvYnMvJHtqb2IuaWR9YCksIGpvYik7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVKb2Ioam9iOiBNb2RpZmllZEpvYlR5cGUpIHtcclxuICAgIGNvbnN0IHVzZXJJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtcyhVc2VySWQpO1xyXG4gICAgcmV0dXJuIHNldChyZWYodGhpcy5kYiwgYHVzZXJzLyR7dXNlcklkfS9qb2JzLyR7am9iLmlkfWApLCBqb2IpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ2V0Sm9icygpOiBQcm9taXNlPEpvYlR5cGVbXT4ge1xyXG4gICAgY29uc3QgdXNlcklkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW1zKFVzZXJJZCk7XHJcbiAgICBjb25zb2xlLmxvZyh1c2VySWQpO1xyXG4gICAgY29uc3QgZGJSZWYgPSByZWYodGhpcy5kYik7XHJcbiAgICByZXR1cm4gZ2V0KGNoaWxkKGRiUmVmLCBgdXNlcnMvJHt1c2VySWR9L2pvYnNgKSlcclxuICAgICAgLnRoZW4oKHNuYXBzaG90KSA9PiB7XHJcbiAgICAgICAgaWYgKHNuYXBzaG90LmV4aXN0cygpKSB7XHJcbiAgICAgICAgICByZXR1cm4gc25hcHNob3QudmFsKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVKb2Ioam9iOiBNb2RpZmllZEpvYlR5cGUpIHtcclxuICAgIGNvbnN0IHVzZXJJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtcyhVc2VySWQpO1xyXG4gICAgcmV0dXJuIHJlbW92ZShyZWYodGhpcy5kYiwgYHVzZXJzLyR7dXNlcklkfS9qb2JzLyR7am9iLmlkfWApKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImdldERhdGFiYXNlIiwicmVmIiwic2V0IiwicmVtb3ZlIiwiY2hpbGQiLCJnZXQiLCJVc2VySWQiLCJEQlNlcnZpY2VJbXBsIiwiY29uc3RydWN0b3IiLCJhcHAiLCJkYiIsImFkZEpvYiIsImpvYiIsInVzZXJJZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW1zIiwiaWQiLCJ1cGRhdGVKb2IiLCJnZXRKb2JzIiwiY29uc29sZSIsImxvZyIsImRiUmVmIiwidGhlbiIsInNuYXBzaG90IiwiZXhpc3RzIiwidmFsIiwiY2F0Y2giLCJlcnJvciIsInJlbW92ZUpvYiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./service/DbService.ts\n"));

/***/ })

});