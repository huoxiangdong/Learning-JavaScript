webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createApp;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App_vue__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(10);
throw new Error("Cannot find module \"./store\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vuex_router_sync__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vuex_router_sync___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vuex_router_sync__);
/**
 * @description: 文件或模块描述
 * @author: zengtiansheng
 * @update: 2018/3/2
 */






function createApp(ssrContext) {
    const router = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__router__["a" /* createRouter */])();
    const store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__store__["createStore"])();
    // 同步路由状态(route state)到 store
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_vuex_router_sync__["sync"])(store, router);
    const app = new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
        router,
        store,
        ssrContext,
        render: h => h(__WEBPACK_IMPORTED_MODULE_1__App_vue___default.a)
    });
    return { app, router, store };
}

/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            msg: ''
        };
    }
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            msg: ''
        };
    }
});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_es6_promise_auto__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_es6_promise_auto___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_es6_promise_auto__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app__ = __webpack_require__(5);
/**
 * @description: 文件或模块描述
 * @author: zengtiansheng
 * @update: 2018/3/2
 */
// import Vue from 'vue'



const { app, router, store } = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__app__["a" /* createApp */])();

router.onReady(() => {
  app.$mount('#app');
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createRouter;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_comp1_vue__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_comp1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__views_comp1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_comp2_vue__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_comp2_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__views_comp2_vue__);





__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

function createRouter() {
    return new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
        mode: 'history',
        scrollBehavior: () => ({ y: 0 }),
        routes: [{
            path: '/comp1',
            component: __WEBPACK_IMPORTED_MODULE_2__views_comp1_vue___default.a
        }, {
            path: '/comp2',
            component: __WEBPACK_IMPORTED_MODULE_3__views_comp2_vue___default.a
        }, { path: '/', redirect: '/comp1' }]
    });
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(true);
// imports


// module
exports.push([module.i, "\n.link {\n  margin: 10px;\n}\n", "", {"version":3,"sources":["/Volumes/DATA/workspace/Learning-JavaScript/服务端渲染-Vue-ssr/demo/src/src/App.vue","/Volumes/DATA/workspace/Learning-JavaScript/服务端渲染-Vue-ssr/demo/src/App.vue"],"names":[],"mappings":";AAWA;EACI,aAAA;CCVH","file":"App.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n.link\n    margin 10px\n",".link {\n  margin: 10px;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"comp2.vue","sourceRoot":""}]);

// exports


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"comp1.vue","sourceRoot":""}]);

// exports


/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(25)
}
var Component = __webpack_require__(1)(
  /* script */
  null,
  /* template */
  __webpack_require__(21),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Volumes/DATA/workspace/Learning-JavaScript/服务端渲染-Vue-ssr/demo/src/App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] App.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-46e720b8", Component.options)
  } else {
    hotAPI.reload("data-v-46e720b8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(27)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(7),
  /* template */
  __webpack_require__(23),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Volumes/DATA/workspace/Learning-JavaScript/服务端渲染-Vue-ssr/demo/src/views/comp1.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] comp1.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e4bff050", Component.options)
  } else {
    hotAPI.reload("data-v-e4bff050", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(26)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(8),
  /* template */
  __webpack_require__(22),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Volumes/DATA/workspace/Learning-JavaScript/服务端渲染-Vue-ssr/demo/src/views/comp2.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] comp2.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e4a3c14e", Component.options)
  } else {
    hotAPI.reload("data-v-e4a3c14e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('h1', [_vm._v("vue-ssr")]), _c('router-link', {
    staticClass: "link",
    attrs: {
      "to": "/comp1"
    }
  }, [_vm._v("to comp1")]), _c('router-link', {
    staticClass: "link",
    attrs: {
      "to": "/comp2"
    }
  }, [_vm._v("to comp2")]), _c('router-view', {
    staticClass: "view"
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-46e720b8", module.exports)
  }
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_vm._v("组件 2")])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-e4a3c14e", module.exports)
  }
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_vm._v("组件 1\n")])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-e4bff050", module.exports)
  }
}

/***/ }),
/* 24 */,
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(11);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("112a31e7", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-46e720b8\",\"scoped\":false,\"hasInlineConfig\":true}!../node_modules/stylus-loader/index.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./App.vue", function() {
     var newContent = require("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-46e720b8\",\"scoped\":false,\"hasInlineConfig\":true}!../node_modules/stylus-loader/index.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./App.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(12);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("0ba431aa", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e4a3c14e\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/stylus-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./comp2.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e4a3c14e\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/stylus-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./comp2.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(13);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("3d0f8360", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e4bff050\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/stylus-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./comp1.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e4bff050\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/stylus-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./comp1.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })
],[9]);
//# sourceMappingURL=app-38dee1b3f5c16bc8af20.js.map