"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/ImageChangeOnScroll",{

/***/ "./src/ImageToggleOnScroll.js":
/*!************************************!*\
  !*** ./src/ImageToggleOnScroll.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst ImageToggleOnScroll = (param)=>{\n    let { primaryImg, secondaryImg } = param;\n    _s();\n    const imageRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const isInView = ()=>{\n        const rect = imageRef.current.getBoundingClientRect();\n        return rect.top >= 0 && rect.bottom <= window.innerHeight;\n    };\n    const [inView, setInview] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"scroll\", scrollHandler);\n        return ()=>{\n            window.removeEventListener(\"scroll\", scrollHandler);\n        };\n    }, []);\n    const scrollHandler = ()=>{\n        setInview(isInView());\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        src: inView ? secondaryImg : primaryImg,\n        alt: \"\",\n        ref: imageRef\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\KINGSLEY\\\\Desktop\\\\ReactWithAndela\\\\hooks-project\\\\src\\\\ImageToggleOnScroll.js\",\n        lineNumber: 24,\n        columnNumber: 10\n    }, undefined);\n};\n_s(ImageToggleOnScroll, \"TKve3ZeTTp7lEi17LGTvJRiY6sA=\");\n_c = ImageToggleOnScroll;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageToggleOnScroll);\nvar _c;\n$RefreshReg$(_c, \"ImageToggleOnScroll\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvSW1hZ2VUb2dnbGVPblNjcm9sbC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTJEO0FBRTNELE1BQU1JLHNCQUFzQjtRQUFDLEVBQUVDLFVBQVUsRUFBRUMsWUFBWSxFQUFFOztJQUN2RCxNQUFNQyxXQUFXTCw2Q0FBTUEsQ0FBQztJQUV4QixNQUFNTSxXQUFXO1FBQ2YsTUFBTUMsT0FBT0YsU0FBU0csT0FBTyxDQUFDQyxxQkFBcUI7UUFDbkQsT0FBT0YsS0FBS0csR0FBRyxJQUFJLEtBQUtILEtBQUtJLE1BQU0sSUFBSUMsT0FBT0MsV0FBVztJQUMzRDtJQUVBLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHZCwrQ0FBUUEsQ0FBQztJQUVyQ0YsZ0RBQVNBLENBQUM7UUFDUmEsT0FBT0ksZ0JBQWdCLENBQUMsVUFBVUM7UUFDbEMsT0FBTztZQUNMTCxPQUFPTSxtQkFBbUIsQ0FBQyxVQUFVRDtRQUN2QztJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1BLGdCQUFnQjtRQUNwQkYsVUFBVVQ7SUFDWjtJQUVBLHFCQUFPLDhEQUFDYTtRQUFJQyxLQUFLTixTQUFTVixlQUFlRDtRQUFZa0IsS0FBSTtRQUFHQyxLQUFLakI7Ozs7OztBQUNuRTtHQXRCTUg7S0FBQUE7QUF3Qk4sK0RBQWVBLG1CQUFtQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvSW1hZ2VUb2dnbGVPblNjcm9sbC5qcz9jYzcwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEltYWdlVG9nZ2xlT25TY3JvbGwgPSAoeyBwcmltYXJ5SW1nLCBzZWNvbmRhcnlJbWcgfSkgPT4ge1xyXG4gIGNvbnN0IGltYWdlUmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICBjb25zdCBpc0luVmlldyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJlY3QgPSBpbWFnZVJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgcmV0dXJuIHJlY3QudG9wID49IDAgJiYgcmVjdC5ib3R0b20gPD0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IFtpblZpZXcsIHNldEludmlld10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBzY3JvbGxIYW5kbGVyKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHNjcm9sbEhhbmRsZXIpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHNjcm9sbEhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRJbnZpZXcoaXNJblZpZXcoKSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIDxpbWcgc3JjPXtpblZpZXcgPyBzZWNvbmRhcnlJbWcgOiBwcmltYXJ5SW1nfSBhbHQ9XCJcIiByZWY9e2ltYWdlUmVmfSAvPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlVG9nZ2xlT25TY3JvbGw7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiSW1hZ2VUb2dnbGVPblNjcm9sbCIsInByaW1hcnlJbWciLCJzZWNvbmRhcnlJbWciLCJpbWFnZVJlZiIsImlzSW5WaWV3IiwicmVjdCIsImN1cnJlbnQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJib3R0b20iLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImluVmlldyIsInNldEludmlldyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY3JvbGxIYW5kbGVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImltZyIsInNyYyIsImFsdCIsInJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ImageToggleOnScroll.js\n"));

/***/ })

});