"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(user)/detail/[id]/page",{

/***/ "(app-pages-browser)/./src/app/(user)/detail/[id]/page.jsx":
/*!*********************************************!*\
  !*** ./src/app/(user)/detail/[id]/page.jsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _app_components_CalenderComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/components/CalenderComponent */ \"(app-pages-browser)/./src/app/components/CalenderComponent.jsx\");\n/* harmony import */ var _app_serverAction_bookingAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/serverAction/bookingAction */ \"(app-pages-browser)/./src/app/serverAction/bookingAction.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst DynamicProduct = ()=>{\n    _s();\n    const [record, setRecord] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [selecetedDates, setSelectedDates] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams)();\n    const { id } = params;\n    console.log(\"dynamic ClientId:\", id);\n    const dynamicProductHandler = async ()=>{\n        try {\n            const response = await fetch(\"http://localhost:3000/api/admin/product/\".concat(id));\n            const newData = await response.json();\n            console.log(\"dynamic data:\", newData);\n            setRecord(newData.data);\n        } catch (error) {\n            console.error(\"Error fetching dynamic product data:\", error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dynamicProductHandler();\n    }, []);\n    const bookingHandler = async ()=>{\n        if (!selecetedDates) {\n            alert(\"Please select booking dates\");\n            return;\n        }\n        const bookingDetails = {\n            record,\n            selecetedDates\n        };\n        try {\n            const respones = await (0,_app_serverAction_bookingAction__WEBPACK_IMPORTED_MODULE_5__.bookingAction)(bookingDetails);\n            if (respones.success) {\n                alert(\"booking \");\n            }\n        } catch (error) {}\n    };\n    const handleDateSelect = (dates)=>{\n        setSelectedDates(dates);\n        console.log(\"dates coming from calenderComp:\", dates);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_CalenderComponent__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                onDatesSelect: handleDateSelect\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Udayk\\\\Desktop\\\\resort-booking-app\\\\my-app\\\\src\\\\app\\\\(user)\\\\detail\\\\[id]\\\\page.jsx\",\n                lineNumber: 57,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                href: \"/\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    align: \"center\",\n                    children: \"Go Back\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Udayk\\\\Desktop\\\\resort-booking-app\\\\my-app\\\\src\\\\app\\\\(user)\\\\detail\\\\[id]\\\\page.jsx\",\n                    lineNumber: 59,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Udayk\\\\Desktop\\\\resort-booking-app\\\\my-app\\\\src\\\\app\\\\(user)\\\\detail\\\\[id]\\\\page.jsx\",\n                lineNumber: 58,\n                columnNumber: 13\n            }, undefined),\n            record ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"singleSection\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"singleLeft\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: record.title\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Udayk\\\\Desktop\\\\resort-booking-app\\\\my-app\\\\src\\\\app\\\\(user)\\\\detail\\\\[id]\\\\page.jsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Udayk\\\\Desktop\\\\resort-booking-app\\\\my-app\\\\src\\\\app\\\\(user)\\\\detail\\\\[id]\\\\page.jsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: (record === null || record === void 0 ? void 0 : record.image) ? record.image : \"/default-image.jpg\",\n                                    alt: record.title || \"Product Image\",\n                                    className: \"singleImage\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Udayk\\\\Desktop\\\\resort-booking-app\\\\my-app\\\\src\\\\app\\\\(user)\\\\detail\\\\[id]\\\\page.jsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Udayk\\\\Desktop\\\\resort-booking-app\\\\my-app\\\\src\\\\app\\\\(user)\\\\detail\\\\[id]\\\\page.jsx\",\n                            lineNumber: 64,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"singleCenter\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"singlePrice\",\n                                    children: [\n                                        \"Rs.\",\n                                        record.price\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Udayk\\\\Desktop\\\\resort-booking-app\\\\my-app\\\\src\\\\app\\\\(user)\\\\detail\\\\[id]\\\\page.jsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"singleDesc\",\n                                    children: record.desc\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Udayk\\\\Desktop\\\\resort-booking-app\\\\my-app\\\\src\\\\app\\\\(user)\\\\detail\\\\[id]\\\\page.jsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"\",\n                                    children: record.amen.map((item, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"singleAmen\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    children: \"*\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Udayk\\\\Desktop\\\\resort-booking-app\\\\my-app\\\\src\\\\app\\\\(user)\\\\detail\\\\[id]\\\\page.jsx\",\n                                                    lineNumber: 80,\n                                                    columnNumber: 41\n                                                }, undefined),\n                                                \" \",\n                                                item\n                                            ]\n                                        }, i, true, {\n                                            fileName: \"C:\\\\Users\\\\Udayk\\\\Desktop\\\\resort-booking-app\\\\my-app\\\\src\\\\app\\\\(user)\\\\detail\\\\[id]\\\\page.jsx\",\n                                            lineNumber: 79,\n                                            columnNumber: 37\n                                        }, undefined))\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Udayk\\\\Desktop\\\\resort-booking-app\\\\my-app\\\\src\\\\app\\\\(user)\\\\detail\\\\[id]\\\\page.jsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"offer\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: \"*\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Udayk\\\\Desktop\\\\resort-booking-app\\\\my-app\\\\src\\\\app\\\\(user)\\\\detail\\\\[id]\\\\page.jsx\",\n                                            lineNumber: 85,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            children: [\n                                                \"Discount \",\n                                                record.offer\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Udayk\\\\Desktop\\\\resort-booking-app\\\\my-app\\\\src\\\\app\\\\(user)\\\\detail\\\\[id]\\\\page.jsx\",\n                                            lineNumber: 86,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Udayk\\\\Desktop\\\\resort-booking-app\\\\my-app\\\\src\\\\app\\\\(user)\\\\detail\\\\[id]\\\\page.jsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"singleBtn\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"\",\n                                        onClick: bookingHandler,\n                                        children: \"Book Now\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Udayk\\\\Desktop\\\\resort-booking-app\\\\my-app\\\\src\\\\app\\\\(user)\\\\detail\\\\[id]\\\\page.jsx\",\n                                        lineNumber: 89,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Udayk\\\\Desktop\\\\resort-booking-app\\\\my-app\\\\src\\\\app\\\\(user)\\\\detail\\\\[id]\\\\page.jsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Udayk\\\\Desktop\\\\resort-booking-app\\\\my-app\\\\src\\\\app\\\\(user)\\\\detail\\\\[id]\\\\page.jsx\",\n                            lineNumber: 74,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Udayk\\\\Desktop\\\\resort-booking-app\\\\my-app\\\\src\\\\app\\\\(user)\\\\detail\\\\[id]\\\\page.jsx\",\n                    lineNumber: 63,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Udayk\\\\Desktop\\\\resort-booking-app\\\\my-app\\\\src\\\\app\\\\(user)\\\\detail\\\\[id]\\\\page.jsx\",\n                lineNumber: 62,\n                columnNumber: 17\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Loading product details...\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Udayk\\\\Desktop\\\\resort-booking-app\\\\my-app\\\\src\\\\app\\\\(user)\\\\detail\\\\[id]\\\\page.jsx\",\n                lineNumber: 97,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Udayk\\\\Desktop\\\\resort-booking-app\\\\my-app\\\\src\\\\app\\\\(user)\\\\detail\\\\[id]\\\\page.jsx\",\n        lineNumber: 56,\n        columnNumber: 9\n    }, undefined);\n};\n_s(DynamicProduct, \"5xcHS46PHLjxG4N8L+GNB6zp+G4=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams\n    ];\n});\n_c = DynamicProduct;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DynamicProduct);\nvar _c;\n$RefreshReg$(_c, \"DynamicProduct\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvKHVzZXIpL2RldGFpbC9baWRdL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFa0Q7QUFDUDtBQUNmO0FBQ3NDO0FBQ0Y7QUFFaEUsTUFBTU8saUJBQWlCOztJQUNuQixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR1AsK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDUSxnQkFBZ0JDLGlCQUFpQixHQUFHVCwrQ0FBUUEsQ0FBQztJQUVwRCxNQUFNVSxTQUFTVCwwREFBU0E7SUFDeEIsTUFBTSxFQUFFVSxFQUFFLEVBQUUsR0FBR0Q7SUFFZkUsUUFBUUMsR0FBRyxDQUFDLHFCQUFxQkY7SUFFakMsTUFBTUcsd0JBQXdCO1FBQzFCLElBQUk7WUFDQSxNQUFNQyxXQUFXLE1BQU1DLE1BQU0sMkNBQThDLE9BQUhMO1lBQ3hFLE1BQU1NLFVBQVUsTUFBTUYsU0FBU0csSUFBSTtZQUNuQ04sUUFBUUMsR0FBRyxDQUFDLGlCQUFpQkk7WUFDN0JWLFVBQVVVLFFBQVFFLElBQUk7UUFDMUIsRUFBRSxPQUFPQyxPQUFPO1lBQ1pSLFFBQVFRLEtBQUssQ0FBQyx3Q0FBd0NBO1FBQzFEO0lBQ0o7SUFFQXJCLGdEQUFTQSxDQUFDO1FBQ05lO0lBQ0osR0FBRyxFQUFFO0lBRUwsTUFBTU8saUJBQWlCO1FBQ25CLElBQUcsQ0FBQ2IsZ0JBQWU7WUFDakJjLE1BQU07WUFDTjtRQUNGO1FBRUUsTUFBTUMsaUJBQWlCO1lBQUNqQjtZQUFRRTtRQUFjO1FBQ2xELElBQUk7WUFDRixNQUFNZ0IsV0FBUyxNQUFNcEIsOEVBQWFBLENBQUNtQjtZQUNuQyxJQUFHQyxTQUFTQyxPQUFPLEVBQUM7Z0JBQ2hCSCxNQUFNO1lBQ1Y7UUFDRixFQUFFLE9BQU9GLE9BQU8sQ0FFaEI7SUFFRjtJQUNBLE1BQU1NLG1CQUFtQixDQUFDQztRQUN0QmxCLGlCQUFpQmtCO1FBQ2pCZixRQUFRQyxHQUFHLENBQUMsbUNBQW1DYztJQUNuRDtJQUVBLHFCQUNJLDhEQUFDQzs7MEJBQ0csOERBQUN6Qix5RUFBaUJBO2dCQUFDMEIsZUFBZUg7Ozs7OzswQkFDbEMsOERBQUN4QixpREFBSUE7Z0JBQUM0QixNQUFLOzBCQUNQLDRFQUFDQztvQkFBRUMsT0FBTTs4QkFBUzs7Ozs7Ozs7Ozs7WUFFckIxQix1QkFDRyw4REFBQ3NCO2dCQUFJSyxXQUFVOzBCQUNYLDRFQUFDTDtvQkFBSUssV0FBVTs7c0NBQ1gsOERBQUNMOzRCQUFJSyxXQUFVOzs4Q0FDWCw4REFBQ0w7b0NBQUlLLFdBQVU7OENBQ1gsNEVBQUNDO2tEQUFJNUIsT0FBTzZCLEtBQUs7Ozs7Ozs7Ozs7OzhDQUVyQiw4REFBQ0M7b0NBQ0dDLEtBQUsvQixDQUFBQSxtQkFBQUEsNkJBQUFBLE9BQVFnQyxLQUFLLElBQUdoQyxPQUFPZ0MsS0FBSyxHQUFHO29DQUNwQ0MsS0FBS2pDLE9BQU82QixLQUFLLElBQUk7b0NBQ3JCRixXQUFVOzs7Ozs7Ozs7Ozs7c0NBR2xCLDhEQUFDTDs0QkFBSUssV0FBVTs7OENBQ1gsOERBQUNMO29DQUFJSyxXQUFVOzt3Q0FBYzt3Q0FBSTNCLE9BQU9rQyxLQUFLOzs7Ozs7OzhDQUM3Qyw4REFBQ1Q7b0NBQUVFLFdBQVU7OENBQWMzQixPQUFPbUMsSUFBSTs7Ozs7OzhDQUN0Qyw4REFBQ2I7b0NBQUlLLFdBQVU7OENBQ1YzQixPQUFPb0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsa0JBQ3BCLDhEQUFDakI7NENBQUlLLFdBQVU7OzhEQUNYLDhEQUFDYTs4REFBSzs7Ozs7O2dEQUFRO2dEQUFFRjs7MkNBRGFDOzs7Ozs7Ozs7OzhDQUt6Qyw4REFBQ2pCO29DQUFJSyxXQUFVOztzREFDWCw4REFBQ2E7c0RBQUs7Ozs7OztzREFDTiw4REFBQ0M7O2dEQUFPO2dEQUFVekMsT0FBTzBDLEtBQUs7Ozs7Ozs7Ozs7Ozs7OENBRWxDLDhEQUFDcEI7b0NBQUlLLFdBQVU7OENBQ1gsNEVBQUNjO3dDQUFPZCxXQUFVO3dDQUFHZ0IsU0FBUzVCO2tEQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQVE5RCw4REFBQ1U7MEJBQUU7Ozs7Ozs7Ozs7OztBQUluQjtHQTVGTTFCOztRQUlhSixzREFBU0E7OztLQUp0Qkk7QUE4Rk4sK0RBQWVBLGNBQWNBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC8odXNlcikvZGV0YWlsL1tpZF0vcGFnZS5qc3g/MTNkYiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBDYWxlbmRlckNvbXBvbmVudCBmcm9tICdAL2FwcC9jb21wb25lbnRzL0NhbGVuZGVyQ29tcG9uZW50J1xyXG5pbXBvcnQgeyBib29raW5nQWN0aW9uIH0gZnJvbSAnQC9hcHAvc2VydmVyQWN0aW9uL2Jvb2tpbmdBY3Rpb24nXHJcblxyXG5jb25zdCBEeW5hbWljUHJvZHVjdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtyZWNvcmQsIHNldFJlY29yZF0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW3NlbGVjZXRlZERhdGVzLCBzZXRTZWxlY3RlZERhdGVzXSA9IHVzZVN0YXRlKG51bGwpXHJcblxyXG4gICAgY29uc3QgcGFyYW1zID0gdXNlUGFyYW1zKCk7XHJcbiAgICBjb25zdCB7IGlkIH0gPSBwYXJhbXNcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcImR5bmFtaWMgQ2xpZW50SWQ6XCIsIGlkKVxyXG5cclxuICAgIGNvbnN0IGR5bmFtaWNQcm9kdWN0SGFuZGxlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2FkbWluL3Byb2R1Y3QvJHtpZH1gKVxyXG4gICAgICAgICAgICBjb25zdCBuZXdEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZHluYW1pYyBkYXRhOlwiLCBuZXdEYXRhKVxyXG4gICAgICAgICAgICBzZXRSZWNvcmQobmV3RGF0YS5kYXRhKVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBkeW5hbWljIHByb2R1Y3QgZGF0YTpcIiwgZXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZHluYW1pY1Byb2R1Y3RIYW5kbGVyKClcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGNvbnN0IGJvb2tpbmdIYW5kbGVyID0gYXN5bmMoKT0+e1xyXG4gICAgICAgIGlmKCFzZWxlY2V0ZWREYXRlcyl7XHJcbiAgICAgICAgICBhbGVydChcIlBsZWFzZSBzZWxlY3QgYm9va2luZyBkYXRlc1wiKVxyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGNvbnN0IGJvb2tpbmdEZXRhaWxzID0ge3JlY29yZCwgc2VsZWNldGVkRGF0ZXN9XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uZXM9YXdhaXQgYm9va2luZ0FjdGlvbihib29raW5nRGV0YWlscylcclxuICAgICAgICBpZihyZXNwb25lcy5zdWNjZXNzKXtcclxuICAgICAgICAgICAgYWxlcnQoXCJib29raW5nIFwiKVxyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZURhdGVTZWxlY3QgPSAoZGF0ZXMpID0+IHtcclxuICAgICAgICBzZXRTZWxlY3RlZERhdGVzKGRhdGVzKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGF0ZXMgY29taW5nIGZyb20gY2FsZW5kZXJDb21wOlwiLCBkYXRlcylcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxDYWxlbmRlckNvbXBvbmVudCBvbkRhdGVzU2VsZWN0PXtoYW5kbGVEYXRlU2VsZWN0fSAvPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgPHAgYWxpZ249XCJjZW50ZXJcIj5HbyBCYWNrPC9wPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIHtyZWNvcmQgPyAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2luZ2xlU2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZUxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPntyZWNvcmQudGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cmVjb3JkPy5pbWFnZSA/IHJlY29yZC5pbWFnZSA6IFwiL2RlZmF1bHQtaW1hZ2UuanBnXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtyZWNvcmQudGl0bGUgfHwgXCJQcm9kdWN0IEltYWdlXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2luZ2xlSW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2luZ2xlQ2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZVByaWNlXCI+UnMue3JlY29yZC5wcmljZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNpbmdsZURlc2NcIj57cmVjb3JkLmRlc2N9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVjb3JkLmFtZW4ubWFwKChpdGVtLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2luZ2xlQW1lblwiIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4qPC9zcGFuPiB7aXRlbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2ZmZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4qPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+RGlzY291bnQge3JlY29yZC5vZmZlcn08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGVCdG5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIlwiIG9uQ2xpY2s9e2Jvb2tpbmdIYW5kbGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQm9vayBOb3dcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPHA+TG9hZGluZyBwcm9kdWN0IGRldGFpbHMuLi48L3A+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IER5bmFtaWNQcm9kdWN0XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUGFyYW1zIiwiTGluayIsIkNhbGVuZGVyQ29tcG9uZW50IiwiYm9va2luZ0FjdGlvbiIsIkR5bmFtaWNQcm9kdWN0IiwicmVjb3JkIiwic2V0UmVjb3JkIiwic2VsZWNldGVkRGF0ZXMiLCJzZXRTZWxlY3RlZERhdGVzIiwicGFyYW1zIiwiaWQiLCJjb25zb2xlIiwibG9nIiwiZHluYW1pY1Byb2R1Y3RIYW5kbGVyIiwicmVzcG9uc2UiLCJmZXRjaCIsIm5ld0RhdGEiLCJqc29uIiwiZGF0YSIsImVycm9yIiwiYm9va2luZ0hhbmRsZXIiLCJhbGVydCIsImJvb2tpbmdEZXRhaWxzIiwicmVzcG9uZXMiLCJzdWNjZXNzIiwiaGFuZGxlRGF0ZVNlbGVjdCIsImRhdGVzIiwiZGl2Iiwib25EYXRlc1NlbGVjdCIsImhyZWYiLCJwIiwiYWxpZ24iLCJjbGFzc05hbWUiLCJoMiIsInRpdGxlIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJwcmljZSIsImRlc2MiLCJhbWVuIiwibWFwIiwiaXRlbSIsImkiLCJzcGFuIiwiYnV0dG9uIiwib2ZmZXIiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/(user)/detail/[id]/page.jsx\n"));

/***/ })

});