/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ts-graph.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/graph/ts-edge-reg.ts":
/*!**********************************!*\
  !*** ./src/graph/ts-edge-reg.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EdgeRegisry = /** @class */ (function () {
    function EdgeRegisry() {
    }
    return EdgeRegisry;
}());
exports.EdgeRegisry = EdgeRegisry;


/***/ }),

/***/ "./src/graph/ts-graph.ts":
/*!*******************************!*\
  !*** ./src/graph/ts-graph.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ts_vertex_1 = __webpack_require__(/*! ./ts-vertex */ "./src/graph/ts-vertex.ts");
var GraphModel = /** @class */ (function () {
    function GraphModel(context) {
        this.context = context;
        var vert = new ts_vertex_1.Vertex(context);
        vert.create();
        this.context.svg.appendChild(vert.el);
        vert.moveTo(10, 10);
    }
    GraphModel.prototype.addVertex = function (type, id, x, y) {
    };
    GraphModel.prototype.addEdge = function () {
    };
    GraphModel.prototype.removeEdge = function () {
    };
    GraphModel.prototype.removeVetrex = function () {
    };
    return GraphModel;
}());
exports.GraphModel = GraphModel;


/***/ }),

/***/ "./src/graph/ts-vertex-reg.ts":
/*!************************************!*\
  !*** ./src/graph/ts-vertex-reg.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TSVertexRegistry = /** @class */ (function () {
    function TSVertexRegistry(ctx) {
        this.ctx = ctx;
        this._reg = new Map();
    }
    TSVertexRegistry.prototype.register = function (type, template) {
    };
    TSVertexRegistry.prototype.get = function (type) {
    };
    return TSVertexRegistry;
}());
exports.TSVertexRegistry = TSVertexRegistry;


/***/ }),

/***/ "./src/graph/ts-vertex.ts":
/*!********************************!*\
  !*** ./src/graph/ts-vertex.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ts_point_1 = __webpack_require__(/*! ../util/ts-point */ "./src/util/ts-point.ts");
var Vertex = /** @class */ (function () {
    function Vertex(ctx) {
        this.ctx = ctx;
        this.el = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    }
    Vertex.prototype.create = function (typeName) {
        if (typeName === void 0) { typeName = 'default'; }
        this.position = new ts_point_1.Point();
        this.size = new ts_point_1.Point(1, 1);
    };
    Vertex.prototype.moveTo = function (x, y) {
        if (y === void 0) { y = 0; }
        if (typeof x === 'number') {
            this.position.x = x;
            this.position.y = y;
        }
        else {
            this.position = x.clone();
        }
        this.applyTransform();
    };
    Vertex.prototype.scale = function (x, y) {
        if (y === void 0) { y = null; }
        if (typeof x === 'number') {
            this.size.x = x;
            if (y) {
                this.size.y = y;
            }
            else {
                this.size.y = x;
            }
        }
        else {
            this.size = x.clone();
        }
        this.applyTransform();
    };
    Vertex.prototype.applyTransform = function () {
        this.el.setAttributeNS(null, 'transform', "translate(" + this.position.toString() + ") scale(" + this.size.toString() + ")");
    };
    return Vertex;
}());
exports.Vertex = Vertex;


/***/ }),

/***/ "./src/ts-context.ts":
/*!***************************!*\
  !*** ./src/ts-context.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ts_vertex_reg_1 = __webpack_require__(/*! ./graph/ts-vertex-reg */ "./src/graph/ts-vertex-reg.ts");
var ts_edge_reg_1 = __webpack_require__(/*! ./graph/ts-edge-reg */ "./src/graph/ts-edge-reg.ts");
var Context = /** @class */ (function () {
    function Context(svg) {
        this.svg = svg;
        this.vertexReg = new ts_vertex_reg_1.TSVertexRegistry();
        this.edgeReg = new ts_edge_reg_1.EdgeRegisry();
        this.createGroups();
    }
    Context.prototype.createGroups = function () {
        this.edgeGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        this.vertexGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        this.overlay = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        this.svg.appendChild(this.edgeGroup);
        this.svg.appendChild(this.vertexGroup);
        this.svg.appendChild(this.overlay);
        this.edgeGroup.setAttributeNS(null, 'id', 'edgeGroup');
        this.vertexGroup.setAttributeNS(null, 'id', 'vertexGroup');
        this.overlay.setAttributeNS(null, 'id', 'overlay');
    };
    Context.prototype.addVertexElement = function (el) {
        this.vertexGroup.appendChild(el);
    };
    Context.prototype.addEdgeElement = function (el) {
        this.edgeGroup.appendChild(el);
    };
    Context.prototype.addOverlay = function (el) {
    };
    return Context;
}());
exports.Context = Context;


/***/ }),

/***/ "./src/ts-graph.ts":
/*!*************************!*\
  !*** ./src/ts-graph.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ts_graph_1 = __webpack_require__(/*! ./graph/ts-graph */ "./src/graph/ts-graph.ts");
var ts_context_1 = __webpack_require__(/*! ./ts-context */ "./src/ts-context.ts");
var GraphApp = /** @class */ (function () {
    function GraphApp(element) {
        if (typeof element === 'string') {
            this.element = document.querySelector(element);
        }
        else {
            this.element = element;
        }
        if (!element) {
            throw new Error('Could not find the DOM Element');
        }
        this.init();
    }
    GraphApp.prototype.init = function () {
        this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        this.element.appendChild(this.svg);
        this.graphContext = new ts_context_1.Context(this.svg);
        this.graph = new ts_graph_1.GraphModel(this.graphContext);
    };
    return GraphApp;
}());
exports.GraphApp = GraphApp;
window['tsGraph'] = GraphApp;


/***/ }),

/***/ "./src/util/ts-point.ts":
/*!******************************!*\
  !*** ./src/util/ts-point.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Point = /** @class */ (function () {
    function Point(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    Point.prototype.clone = function () {
        return new Point(this.x, this.y);
    };
    Point.prototype.toString = function () {
        return this.x + " " + this.y;
    };
    return Point;
}());
exports.Point = Point;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyYXBoL3RzLWVkZ2UtcmVnLnRzIiwid2VicGFjazovLy8uL3NyYy9ncmFwaC90cy1ncmFwaC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGgvdHMtdmVydGV4LXJlZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGgvdHMtdmVydGV4LnRzIiwid2VicGFjazovLy8uL3NyYy90cy1jb250ZXh0LnRzIiwid2VicGFjazovLy8uL3NyYy90cy1ncmFwaC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC90cy1wb2ludC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUNQYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELGtCQUFrQixtQkFBTyxDQUFDLDZDQUFhO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUNyQmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ2JhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsaUJBQWlCLG1CQUFPLENBQUMsZ0RBQWtCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxzQkFBc0I7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsT0FBTztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixVQUFVO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQzdDYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELHNCQUFzQixtQkFBTyxDQUFDLDJEQUF1QjtBQUNyRCxvQkFBb0IsbUJBQU8sQ0FBQyx1REFBcUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDaENhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsaUJBQWlCLG1CQUFPLENBQUMsaURBQWtCO0FBQzNDLG1CQUFtQixtQkFBTyxDQUFDLHlDQUFjO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7Ozs7Ozs7Ozs7OztBQzFCYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQSwyQkFBMkIsT0FBTztBQUNsQywyQkFBMkIsT0FBTztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCIsImZpbGUiOiJ0cy1ncmFwaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3RzLWdyYXBoLnRzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIEVkZ2VSZWdpc3J5ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gRWRnZVJlZ2lzcnkoKSB7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gRWRnZVJlZ2lzcnk7XHJcbn0oKSk7XHJcbmV4cG9ydHMuRWRnZVJlZ2lzcnkgPSBFZGdlUmVnaXNyeTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHRzX3ZlcnRleF8xID0gcmVxdWlyZShcIi4vdHMtdmVydGV4XCIpO1xyXG52YXIgR3JhcGhNb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEdyYXBoTW9kZWwoY29udGV4dCkge1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICAgICAgdmFyIHZlcnQgPSBuZXcgdHNfdmVydGV4XzEuVmVydGV4KGNvbnRleHQpO1xyXG4gICAgICAgIHZlcnQuY3JlYXRlKCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnN2Zy5hcHBlbmRDaGlsZCh2ZXJ0LmVsKTtcclxuICAgICAgICB2ZXJ0Lm1vdmVUbygxMCwgMTApO1xyXG4gICAgfVxyXG4gICAgR3JhcGhNb2RlbC5wcm90b3R5cGUuYWRkVmVydGV4ID0gZnVuY3Rpb24gKHR5cGUsIGlkLCB4LCB5KSB7XHJcbiAgICB9O1xyXG4gICAgR3JhcGhNb2RlbC5wcm90b3R5cGUuYWRkRWRnZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIH07XHJcbiAgICBHcmFwaE1vZGVsLnByb3RvdHlwZS5yZW1vdmVFZGdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgfTtcclxuICAgIEdyYXBoTW9kZWwucHJvdG90eXBlLnJlbW92ZVZldHJleCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIH07XHJcbiAgICByZXR1cm4gR3JhcGhNb2RlbDtcclxufSgpKTtcclxuZXhwb3J0cy5HcmFwaE1vZGVsID0gR3JhcGhNb2RlbDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFRTVmVydGV4UmVnaXN0cnkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBUU1ZlcnRleFJlZ2lzdHJ5KGN0eCkge1xyXG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xyXG4gICAgICAgIHRoaXMuX3JlZyA9IG5ldyBNYXAoKTtcclxuICAgIH1cclxuICAgIFRTVmVydGV4UmVnaXN0cnkucHJvdG90eXBlLnJlZ2lzdGVyID0gZnVuY3Rpb24gKHR5cGUsIHRlbXBsYXRlKSB7XHJcbiAgICB9O1xyXG4gICAgVFNWZXJ0ZXhSZWdpc3RyeS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKHR5cGUpIHtcclxuICAgIH07XHJcbiAgICByZXR1cm4gVFNWZXJ0ZXhSZWdpc3RyeTtcclxufSgpKTtcclxuZXhwb3J0cy5UU1ZlcnRleFJlZ2lzdHJ5ID0gVFNWZXJ0ZXhSZWdpc3RyeTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHRzX3BvaW50XzEgPSByZXF1aXJlKFwiLi4vdXRpbC90cy1wb2ludFwiKTtcclxudmFyIFZlcnRleCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFZlcnRleChjdHgpIHtcclxuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcclxuICAgICAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdnJyk7XHJcbiAgICB9XHJcbiAgICBWZXJ0ZXgucHJvdG90eXBlLmNyZWF0ZSA9IGZ1bmN0aW9uICh0eXBlTmFtZSkge1xyXG4gICAgICAgIGlmICh0eXBlTmFtZSA9PT0gdm9pZCAwKSB7IHR5cGVOYW1lID0gJ2RlZmF1bHQnOyB9XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IG5ldyB0c19wb2ludF8xLlBvaW50KCk7XHJcbiAgICAgICAgdGhpcy5zaXplID0gbmV3IHRzX3BvaW50XzEuUG9pbnQoMSwgMSk7XHJcbiAgICB9O1xyXG4gICAgVmVydGV4LnByb3RvdHlwZS5tb3ZlVG8gPSBmdW5jdGlvbiAoeCwgeSkge1xyXG4gICAgICAgIGlmICh5ID09PSB2b2lkIDApIHsgeSA9IDA7IH1cclxuICAgICAgICBpZiAodHlwZW9mIHggPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IHg7XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSA9IHk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uID0geC5jbG9uZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFwcGx5VHJhbnNmb3JtKCk7XHJcbiAgICB9O1xyXG4gICAgVmVydGV4LnByb3RvdHlwZS5zY2FsZSA9IGZ1bmN0aW9uICh4LCB5KSB7XHJcbiAgICAgICAgaWYgKHkgPT09IHZvaWQgMCkgeyB5ID0gbnVsbDsgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgeCA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgdGhpcy5zaXplLnggPSB4O1xyXG4gICAgICAgICAgICBpZiAoeSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaXplLnkgPSB5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaXplLnkgPSB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNpemUgPSB4LmNsb25lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXBwbHlUcmFuc2Zvcm0oKTtcclxuICAgIH07XHJcbiAgICBWZXJ0ZXgucHJvdG90eXBlLmFwcGx5VHJhbnNmb3JtID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3RyYW5zZm9ybScsIFwidHJhbnNsYXRlKFwiICsgdGhpcy5wb3NpdGlvbi50b1N0cmluZygpICsgXCIpIHNjYWxlKFwiICsgdGhpcy5zaXplLnRvU3RyaW5nKCkgKyBcIilcIik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFZlcnRleDtcclxufSgpKTtcclxuZXhwb3J0cy5WZXJ0ZXggPSBWZXJ0ZXg7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciB0c192ZXJ0ZXhfcmVnXzEgPSByZXF1aXJlKFwiLi9ncmFwaC90cy12ZXJ0ZXgtcmVnXCIpO1xyXG52YXIgdHNfZWRnZV9yZWdfMSA9IHJlcXVpcmUoXCIuL2dyYXBoL3RzLWVkZ2UtcmVnXCIpO1xyXG52YXIgQ29udGV4dCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENvbnRleHQoc3ZnKSB7XHJcbiAgICAgICAgdGhpcy5zdmcgPSBzdmc7XHJcbiAgICAgICAgdGhpcy52ZXJ0ZXhSZWcgPSBuZXcgdHNfdmVydGV4X3JlZ18xLlRTVmVydGV4UmVnaXN0cnkoKTtcclxuICAgICAgICB0aGlzLmVkZ2VSZWcgPSBuZXcgdHNfZWRnZV9yZWdfMS5FZGdlUmVnaXNyeSgpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlR3JvdXBzKCk7XHJcbiAgICB9XHJcbiAgICBDb250ZXh0LnByb3RvdHlwZS5jcmVhdGVHcm91cHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5lZGdlR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ2cnKTtcclxuICAgICAgICB0aGlzLnZlcnRleEdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdnJyk7XHJcbiAgICAgICAgdGhpcy5vdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdnJyk7XHJcbiAgICAgICAgdGhpcy5zdmcuYXBwZW5kQ2hpbGQodGhpcy5lZGdlR3JvdXApO1xyXG4gICAgICAgIHRoaXMuc3ZnLmFwcGVuZENoaWxkKHRoaXMudmVydGV4R3JvdXApO1xyXG4gICAgICAgIHRoaXMuc3ZnLmFwcGVuZENoaWxkKHRoaXMub3ZlcmxheSk7XHJcbiAgICAgICAgdGhpcy5lZGdlR3JvdXAuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2lkJywgJ2VkZ2VHcm91cCcpO1xyXG4gICAgICAgIHRoaXMudmVydGV4R3JvdXAuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2lkJywgJ3ZlcnRleEdyb3VwJyk7XHJcbiAgICAgICAgdGhpcy5vdmVybGF5LnNldEF0dHJpYnV0ZU5TKG51bGwsICdpZCcsICdvdmVybGF5Jyk7XHJcbiAgICB9O1xyXG4gICAgQ29udGV4dC5wcm90b3R5cGUuYWRkVmVydGV4RWxlbWVudCA9IGZ1bmN0aW9uIChlbCkge1xyXG4gICAgICAgIHRoaXMudmVydGV4R3JvdXAuYXBwZW5kQ2hpbGQoZWwpO1xyXG4gICAgfTtcclxuICAgIENvbnRleHQucHJvdG90eXBlLmFkZEVkZ2VFbGVtZW50ID0gZnVuY3Rpb24gKGVsKSB7XHJcbiAgICAgICAgdGhpcy5lZGdlR3JvdXAuYXBwZW5kQ2hpbGQoZWwpO1xyXG4gICAgfTtcclxuICAgIENvbnRleHQucHJvdG90eXBlLmFkZE92ZXJsYXkgPSBmdW5jdGlvbiAoZWwpIHtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQ29udGV4dDtcclxufSgpKTtcclxuZXhwb3J0cy5Db250ZXh0ID0gQ29udGV4dDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHRzX2dyYXBoXzEgPSByZXF1aXJlKFwiLi9ncmFwaC90cy1ncmFwaFwiKTtcclxudmFyIHRzX2NvbnRleHRfMSA9IHJlcXVpcmUoXCIuL3RzLWNvbnRleHRcIik7XHJcbnZhciBHcmFwaEFwcCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEdyYXBoQXBwKGVsZW1lbnQpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgZmluZCB0aGUgRE9NIEVsZW1lbnQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICB9XHJcbiAgICBHcmFwaEFwcC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuc3ZnKTtcclxuICAgICAgICB0aGlzLmdyYXBoQ29udGV4dCA9IG5ldyB0c19jb250ZXh0XzEuQ29udGV4dCh0aGlzLnN2Zyk7XHJcbiAgICAgICAgdGhpcy5ncmFwaCA9IG5ldyB0c19ncmFwaF8xLkdyYXBoTW9kZWwodGhpcy5ncmFwaENvbnRleHQpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBHcmFwaEFwcDtcclxufSgpKTtcclxuZXhwb3J0cy5HcmFwaEFwcCA9IEdyYXBoQXBwO1xyXG53aW5kb3dbJ3RzR3JhcGgnXSA9IEdyYXBoQXBwO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgUG9pbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBQb2ludCh4LCB5KSB7XHJcbiAgICAgICAgaWYgKHggPT09IHZvaWQgMCkgeyB4ID0gMDsgfVxyXG4gICAgICAgIGlmICh5ID09PSB2b2lkIDApIHsgeSA9IDA7IH1cclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICB9XHJcbiAgICBQb2ludC5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLngsIHRoaXMueSk7XHJcbiAgICB9O1xyXG4gICAgUG9pbnQucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnggKyBcIiBcIiArIHRoaXMueTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gUG9pbnQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuUG9pbnQgPSBQb2ludDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==