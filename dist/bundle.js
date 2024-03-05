/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    box-sizing: border-box;
}

*,
*::before,
*::after {
    box-sizing: border-box;
    background-color: rgb(0 255 255);
}

body,
p {
    padding: 0;
    margin: 0;
}

body {
    display: grid;
    grid-template-rows: 1fr 7fr;
}

body>header>.toolbar {
    font-size: clamp(1.1rem, 5vw, 1.2rem);
    margin: 1em 0;
    text-align: center;
}

body>header>.toolbar>span {
    margin-left: 1em;
}

#create-project,
#create-todo,
#all-projects,
body>header>.toolbar>span>select[name='project'] {
    font-size: inherit;
    padding: 0.5em 1em;
    background-color: rgb(222 184 135);
    border: none;
    box-shadow: 2px 2px 2px rgb(0 0 0 / 0.3);
    border-radius: 5px;
}

body>header>.toolbar>span>select[name='project'] {
    margin-left: 0.25em;
}

body>header>.toolbar>span>select[name='project']:focus {
    outline: 2px solid rgb(117 72 72);
}

#create-project,
#create-todo,
#all-projects {
    background-color: slategrey;
    color: rgb(0, 255, 255);
    cursor: pointer;
    margin-left: 0.5em;
}

#all-projects {
    background-color: rgb(222 184 135);
    border: none;
    color: rgb(0 0 0);
}

.container {
    background-color: rgba(190, 201, 223, 0.836);
    margin: 0 1em;
    padding: 1em;
    font-size: 1.2rem;
    border-radius: 20px;
    border: 1px solid rgb(0 0 0/0.3);
}

.toolbar>span>dialog {
    background-color: rgb(214, 214, 214);
    border: none;
    border-radius: 15px;
    width: clamp(320px, 25vw, 420px);
    position: relative;
    padding: 1rem;
}

.toolbar>span>dialog::backdrop {
    background-color: rgb(0 0 0 / 0.5);
}

dialog>form>.field {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

dialog>form>.field>*:last-child {
    flex: 1;
}

dialog>form>.field>input,
dialog>form>.field>select,
dialog>form>.field>textarea {
    padding: 0.2em;
    padding-left: 0.5ch;
    border: 2px solid rgb(0 0 0 / 0.5);
    width: 100%;
    background-color: rgb(0 255 255);
}

.create-form-buttons>button {
    border: none;
    color: rgb(0 255 255);
    background-color: rgb(116, 105, 95);
    padding: 0.3em 1em;
    box-shadow: 2px 2px 2px rgb(0 0 0 / 0.3);
    cursor: pointer;
}

.create-form-buttons>button:hover {
    color: rgb(3, 236, 236);
    background-color: rgb(94, 85, 77);
}

.create-form-buttons>button:hover:active {
    color: rgb(4, 189, 189);
    background-color: rgb(70, 63, 57);
}

dialog>form>.field>input,
dialog>form>.field>select,
dialog>form>.field>textarea,
.create-form-buttons>button {
    font-size: inherit;
    border-radius: 7px;
}

dialog>form>.field>label {
    margin-bottom: 0.25em;
}

#project-name {
    margin-bottom: 0.7em;
}

dialog>form {
    background-color: rgb(214, 214, 214);
}

dialog>form * {
    background-color: inherit;
}

.create-form-buttons {
    display: flex;
    justify-content: space-between;
}

.close-modal {
    background-color: rgb(92, 68, 45);
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    padding: 0.4em;
    border: none;
    box-shadow: 2px 2px 2px rgb(0 0 0 / 0.3);
    border-radius: 100%;
    position: absolute;
    top: 0.7rem;
    right: 0.7rem;
    cursor: pointer;
}

.close-modal>svg {
    background-color: inherit;
    fill: rgb(0 255 255);
    width: 1.1em;
    height: 1.1em;
}

#create-todo+dialog {
    width: max-content;
}

#create-todo+dialog>form {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 15px;
}

#create-todo+dialog>form>.field:nth-child(1) {
    grid-column: 1/3;
}

#create-todo+dialog>form>.field:nth-child(2) {
    grid-column: 3/5;
}

#create-todo+dialog>form>.field:nth-child(4) {
    grid-column: 1/4;
    grid-row: 2/4;
    margin-bottom: 0;
}

#create-todo+dialog>form>.field:nth-child(4)>textarea {
    margin-bottom: 0;
}

#create-todo+dialog>form>.field:nth-child(5) {
    grid-column: 4/6;
}

#create-todo+dialog>form>.create-form-buttons {
    grid-column: 4/6;
}

body>.container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-template-rows: repeat(auto-fit, minmax(50px, min-content));
    gap: 15px;
}

body>.container>.project,
body>.container>.todo {
    padding: 1em;
    display: flex;
    border-radius: 5px;
    box-shadow: 2px 2px 2px rgb(0 0 0 / 0.3);
}

body>.container>.project {
    background-color: rgb(204, 197, 177);
    color: rgb(0, 0, 43);
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
}

body>.container>.project *,
body>.container>.todo * {
    background-color: inherit;
    color: inherit;
}

body>.container>.todo {
    background-color: rgb(218, 62, 82);
    color: rgb(255 255 255);
    padding: 1em;
    display: flex;
    flex-direction: column;
    height: min-content;
}

body>.container>.todo>header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
}

body>.container>.todo>header>.twin {
    padding: 0 0.5em;
    display: flex;
    border: 1px solid white;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
}

body>.container>.todo>header>.twin>.priority {
    border-right: 1px solid white;
    padding-right: 0.5em;
}

body>.container>.todo>header>.twin>.title {
    padding-left: 0.5em;
}

body>.container>.todo>.description {
    margin: 1em 0;
    padding: 0.5em;
    background-color: rgb(226, 108, 123);
    color: rgb(0, 0, 43);
    border-radius: 5px;
    box-shadow: inset 0 0 5px rgb(0 0 0 / 0.5);
    overflow-wrap: break-word;
    display: none;
}

body>.container>.todo>.description>.show-more,
body>.container>.todo>.description>.show-less {
    color: rgb(62, 62, 78);
    font-size: 0.8em;
    text-decoration: underline;
    cursor: pointer;
}

body>.container>.todo>.description>.show-more:hover,
body>.container>.todo>.description>.show-less:hover {
    text-decoration: none;
}

body>.container>.todo>.description>.rest {
    display: none;
}

body>.container>.todo>.description>.show-less {
    display: none;
}

body>.container>.todo>.buttons {
    display: flex;
    justify-content: space-around;
}

body>.container>.todo>.buttons>button {
    background-color: rgb(59, 59, 59);
    color: rgb(240, 248, 255);
    border: none;
    padding: 0.25em 0.5em;
    border-radius: 5px;
    font-size: inherit;
    cursor: pointer;
}

body>.container>.todo>.buttons>button:last-child {
    background-color: rgb(196, 44, 44);
}

body>.container>.todo>.buttons>button:active {
    background-color: rgb(95, 25, 25);
}

body>.container>.todo>.buttons.hide {
    display: none;
}

body>.container>.todo.hobby {
    background-color: rgb(151, 194, 96);
    color: rgb(75, 34, 34);
}

body>.container>.todo.hobby>.description {
    background-color: rgb(134, 170, 87);
    color: rgb(255 255 255);
}

body>.container>.todo.chore {
    background-color: rgb(209, 221, 42);
    color: rgb(71, 47, 47);
}

body>.container>.todo.chore>.description {
    background-color: rgb(172, 182, 34);
    color: rgb(255 255 255);
}

body>.container>.todo.important {
    background-color: rgb(243, 147, 159);
    color: rgb(0, 0, 43);
}

body>.container>.todo.important>.description {
    background-color: rgb(201, 124, 133);
    color: rgb(255 255 255);
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    box-sizing: border-box;\n}\n\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n    background-color: rgb(0 255 255);\n}\n\nbody,\np {\n    padding: 0;\n    margin: 0;\n}\n\nbody {\n    display: grid;\n    grid-template-rows: 1fr 7fr;\n}\n\nbody>header>.toolbar {\n    font-size: clamp(1.1rem, 5vw, 1.2rem);\n    margin: 1em 0;\n    text-align: center;\n}\n\nbody>header>.toolbar>span {\n    margin-left: 1em;\n}\n\n#create-project,\n#create-todo,\n#all-projects,\nbody>header>.toolbar>span>select[name='project'] {\n    font-size: inherit;\n    padding: 0.5em 1em;\n    background-color: rgb(222 184 135);\n    border: none;\n    box-shadow: 2px 2px 2px rgb(0 0 0 / 0.3);\n    border-radius: 5px;\n}\n\nbody>header>.toolbar>span>select[name='project'] {\n    margin-left: 0.25em;\n}\n\nbody>header>.toolbar>span>select[name='project']:focus {\n    outline: 2px solid rgb(117 72 72);\n}\n\n#create-project,\n#create-todo,\n#all-projects {\n    background-color: slategrey;\n    color: rgb(0, 255, 255);\n    cursor: pointer;\n    margin-left: 0.5em;\n}\n\n#all-projects {\n    background-color: rgb(222 184 135);\n    border: none;\n    color: rgb(0 0 0);\n}\n\n.container {\n    background-color: rgba(190, 201, 223, 0.836);\n    margin: 0 1em;\n    padding: 1em;\n    font-size: 1.2rem;\n    border-radius: 20px;\n    border: 1px solid rgb(0 0 0/0.3);\n}\n\n.toolbar>span>dialog {\n    background-color: rgb(214, 214, 214);\n    border: none;\n    border-radius: 15px;\n    width: clamp(320px, 25vw, 420px);\n    position: relative;\n    padding: 1rem;\n}\n\n.toolbar>span>dialog::backdrop {\n    background-color: rgb(0 0 0 / 0.5);\n}\n\ndialog>form>.field {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n}\n\ndialog>form>.field>*:last-child {\n    flex: 1;\n}\n\ndialog>form>.field>input,\ndialog>form>.field>select,\ndialog>form>.field>textarea {\n    padding: 0.2em;\n    padding-left: 0.5ch;\n    border: 2px solid rgb(0 0 0 / 0.5);\n    width: 100%;\n    background-color: rgb(0 255 255);\n}\n\n.create-form-buttons>button {\n    border: none;\n    color: rgb(0 255 255);\n    background-color: rgb(116, 105, 95);\n    padding: 0.3em 1em;\n    box-shadow: 2px 2px 2px rgb(0 0 0 / 0.3);\n    cursor: pointer;\n}\n\n.create-form-buttons>button:hover {\n    color: rgb(3, 236, 236);\n    background-color: rgb(94, 85, 77);\n}\n\n.create-form-buttons>button:hover:active {\n    color: rgb(4, 189, 189);\n    background-color: rgb(70, 63, 57);\n}\n\ndialog>form>.field>input,\ndialog>form>.field>select,\ndialog>form>.field>textarea,\n.create-form-buttons>button {\n    font-size: inherit;\n    border-radius: 7px;\n}\n\ndialog>form>.field>label {\n    margin-bottom: 0.25em;\n}\n\n#project-name {\n    margin-bottom: 0.7em;\n}\n\ndialog>form {\n    background-color: rgb(214, 214, 214);\n}\n\ndialog>form * {\n    background-color: inherit;\n}\n\n.create-form-buttons {\n    display: flex;\n    justify-content: space-between;\n}\n\n.close-modal {\n    background-color: rgb(92, 68, 45);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    outline: none;\n    padding: 0.4em;\n    border: none;\n    box-shadow: 2px 2px 2px rgb(0 0 0 / 0.3);\n    border-radius: 100%;\n    position: absolute;\n    top: 0.7rem;\n    right: 0.7rem;\n    cursor: pointer;\n}\n\n.close-modal>svg {\n    background-color: inherit;\n    fill: rgb(0 255 255);\n    width: 1.1em;\n    height: 1.1em;\n}\n\n#create-todo+dialog {\n    width: max-content;\n}\n\n#create-todo+dialog>form {\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    gap: 15px;\n}\n\n#create-todo+dialog>form>.field:nth-child(1) {\n    grid-column: 1/3;\n}\n\n#create-todo+dialog>form>.field:nth-child(2) {\n    grid-column: 3/5;\n}\n\n#create-todo+dialog>form>.field:nth-child(4) {\n    grid-column: 1/4;\n    grid-row: 2/4;\n    margin-bottom: 0;\n}\n\n#create-todo+dialog>form>.field:nth-child(4)>textarea {\n    margin-bottom: 0;\n}\n\n#create-todo+dialog>form>.field:nth-child(5) {\n    grid-column: 4/6;\n}\n\n#create-todo+dialog>form>.create-form-buttons {\n    grid-column: 4/6;\n}\n\nbody>.container {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n    grid-template-rows: repeat(auto-fit, minmax(50px, min-content));\n    gap: 15px;\n}\n\nbody>.container>.project,\nbody>.container>.todo {\n    padding: 1em;\n    display: flex;\n    border-radius: 5px;\n    box-shadow: 2px 2px 2px rgb(0 0 0 / 0.3);\n}\n\nbody>.container>.project {\n    background-color: rgb(204, 197, 177);\n    color: rgb(0, 0, 43);\n    justify-content: space-between;\n    align-items: center;\n    cursor: pointer;\n}\n\nbody>.container>.project *,\nbody>.container>.todo * {\n    background-color: inherit;\n    color: inherit;\n}\n\nbody>.container>.todo {\n    background-color: rgb(218, 62, 82);\n    color: rgb(255 255 255);\n    padding: 1em;\n    display: flex;\n    flex-direction: column;\n    height: min-content;\n}\n\nbody>.container>.todo>header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    cursor: pointer;\n}\n\nbody>.container>.todo>header>.twin {\n    padding: 0 0.5em;\n    display: flex;\n    border: 1px solid white;\n    justify-content: space-between;\n    align-items: center;\n    border-radius: 5px;\n}\n\nbody>.container>.todo>header>.twin>.priority {\n    border-right: 1px solid white;\n    padding-right: 0.5em;\n}\n\nbody>.container>.todo>header>.twin>.title {\n    padding-left: 0.5em;\n}\n\nbody>.container>.todo>.description {\n    margin: 1em 0;\n    padding: 0.5em;\n    background-color: rgb(226, 108, 123);\n    color: rgb(0, 0, 43);\n    border-radius: 5px;\n    box-shadow: inset 0 0 5px rgb(0 0 0 / 0.5);\n    overflow-wrap: break-word;\n    display: none;\n}\n\nbody>.container>.todo>.description>.show-more,\nbody>.container>.todo>.description>.show-less {\n    color: rgb(62, 62, 78);\n    font-size: 0.8em;\n    text-decoration: underline;\n    cursor: pointer;\n}\n\nbody>.container>.todo>.description>.show-more:hover,\nbody>.container>.todo>.description>.show-less:hover {\n    text-decoration: none;\n}\n\nbody>.container>.todo>.description>.rest {\n    display: none;\n}\n\nbody>.container>.todo>.description>.show-less {\n    display: none;\n}\n\nbody>.container>.todo>.buttons {\n    display: flex;\n    justify-content: space-around;\n}\n\nbody>.container>.todo>.buttons>button {\n    background-color: rgb(59, 59, 59);\n    color: rgb(240, 248, 255);\n    border: none;\n    padding: 0.25em 0.5em;\n    border-radius: 5px;\n    font-size: inherit;\n    cursor: pointer;\n}\n\nbody>.container>.todo>.buttons>button:last-child {\n    background-color: rgb(196, 44, 44);\n}\n\nbody>.container>.todo>.buttons>button:active {\n    background-color: rgb(95, 25, 25);\n}\n\nbody>.container>.todo>.buttons.hide {\n    display: none;\n}\n\nbody>.container>.todo.hobby {\n    background-color: rgb(151, 194, 96);\n    color: rgb(75, 34, 34);\n}\n\nbody>.container>.todo.hobby>.description {\n    background-color: rgb(134, 170, 87);\n    color: rgb(255 255 255);\n}\n\nbody>.container>.todo.chore {\n    background-color: rgb(209, 221, 42);\n    color: rgb(71, 47, 47);\n}\n\nbody>.container>.todo.chore>.description {\n    background-color: rgb(172, 182, 34);\n    color: rgb(255 255 255);\n}\n\nbody>.container>.todo.important {\n    background-color: rgb(243, 147, 159);\n    color: rgb(0, 0, 43);\n}\n\nbody>.container>.todo.important>.description {\n    background-color: rgb(201, 124, 133);\n    color: rgb(255 255 255);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/container.js":
/*!*************************************!*\
  !*** ./src/components/container.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addContainerComponent: () => (/* binding */ addContainerComponent),
/* harmony export */   addTODOComponentToContainer: () => (/* binding */ addTODOComponentToContainer),
/* harmony export */   changeContainerTo: () => (/* binding */ changeContainerTo)
/* harmony export */ });
const body = document.body;
const todoContainerComponents = [];

const addContainerComponent = () => {
    const container = document.createElement('div');
    container.classList.add('container');
    todoContainerComponents.push(container);
};

const addTODOComponentToContainer = (projectIndex, todoComponent) => {
    todoContainerComponents[projectIndex].appendChild(todoComponent);
}

const changeContainerTo = (projectIndex) => {
    const currentContainer = document.querySelector('.container');
    body.replaceChild(todoContainerComponents[projectIndex], currentContainer);
};



/***/ }),

/***/ "./src/components/project.js":
/*!***********************************!*\
  !*** ./src/components/project.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProjectComponent: () => (/* binding */ addProjectComponent),
/* harmony export */   getNewProjectComponent: () => (/* binding */ getNewProjectComponent),
/* harmony export */   getNewProjectOptionElement: () => (/* binding */ getNewProjectOptionElement),
/* harmony export */   switchToAllProjects: () => (/* binding */ switchToAllProjects),
/* harmony export */   updateProjectComponentTODOCount: () => (/* binding */ updateProjectComponentTODOCount)
/* harmony export */ });
/* harmony import */ var _handlers_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../handlers/project */ "./src/handlers/project.js");


const body = document.body;

const projectComponents = [];
const projectComponentContainer = document.createElement('div');
projectComponentContainer.classList.add('container');


const getNewProjectOptionElement = (name, projectIndex) => {
    const projectOption = document.createElement('option');
    projectOption.textContent = name;
    projectOption.value = projectIndex;
    return projectOption;
};

const getNewProjectComponent = (project, projectIndex) => {
    const projectComponent = document.createElement('div');
    projectComponent.classList.add('project');
    projectComponent.addEventListener('click', () => {
        _handlers_project__WEBPACK_IMPORTED_MODULE_0__.changeCurrentProject(projectIndex);
    });

    const name = document.createElement('span');
    name.classList.add('name');
    name.textContent = project.getName();

    const numOfTODOs = document.createElement('span');
    numOfTODOs.classList.add('num-of-todos');
    numOfTODOs.textContent = project.getTODOs().length + ' TO-DO(s)';
    projectComponent.append(name, numOfTODOs);
    return projectComponent;
};

const addProjectComponent = (projectComponent) => {
    projectComponents.push(projectComponent);
    projectComponentContainer.appendChild(projectComponent);
};

const updateProjectComponentTODOCount = (projectIndex, newTODOCount) => {
    projectComponents[projectIndex].querySelector('.num-of-todos')
        .textContent = newTODOCount + ' TO-DO(s)'
};

const switchToAllProjects = () => {
    const currentContainer = document.querySelector('.container');
    if (currentContainer === projectComponentContainer) return;
    body.replaceChild(projectComponentContainer, currentContainer);
    _handlers_project__WEBPACK_IMPORTED_MODULE_0__.unsetProjectSelection();
};



/***/ }),

/***/ "./src/components/todo.js":
/*!********************************!*\
  !*** ./src/components/todo.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getNewTODOComponent: () => (/* binding */ getNewTODOComponent)
/* harmony export */ });
/* harmony import */ var _handlers_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../handlers/todo */ "./src/handlers/todo.js");


const toggleExpansion = (todo) => {
    const description = todo.querySelector('.description');
    const buttons = todo.querySelector('.buttons');
    const computedStyleDisplay = window.getComputedStyle(description).display;
    description.style.display = computedStyleDisplay === 'none' ? 'block' : 'none';
    buttons.classList.toggle('hide');
};

const getClassForPriority = (priority) => {
    switch (priority) {
        case 1: return 'hobby';
        case 2: return 'chore';
        default: return 'important';
    }
};

const getNewHeaderComponent = (todo) => {
    const priority = document.createElement('span');
    priority.classList.add('priority');
    priority.textContent = todo.getPriority();

    const title = document.createElement('span');
    title.classList.add('title');
    title.textContent = todo.getName();

    const twin = document.createElement('span');
    twin.classList.add('twin');
    twin.append(priority, title);

    const dueDate = document.createElement('span');
    dueDate.classList.add('due-date');
    dueDate.textContent = todo.getDueDate();

    const header = document.createElement('header');
    header.append(twin, dueDate);
    header.addEventListener('click', () => {
        toggleExpansion(header.parentElement);
    });

    return header;
};

const getNewDescriptionComponent = (descriptionTxt) => {
    const description = document.createElement('p');
    description.classList.add('description');
    if (descriptionTxt.length <= 25) {
        description.textContent = descriptionTxt;
        return description;
    }
    const introTxt = descriptionTxt.slice(0, 26);

    const rest = document.createElement('span');
    rest.classList.add('rest');
    rest.textContent = descriptionTxt.slice(26, descriptionTxt.length);

    const showMore = document.createElement('span');
    showMore.classList.add('show-more');
    showMore.textContent = '...show more';
    showMore.addEventListener('click', () => {
        const parent = showMore.parentElement;
        const restElem = parent.querySelector('.rest');
        const showLess = parent.querySelector('.show-less');
        restElem.style.display = 'inline';
        showMore.style.display = 'none';
        showLess.style.display = 'inline';
    });

    const showLess = document.createElement('span');
    showLess.classList.add('show-less');
    showLess.textContent = '...show less';
    showLess.addEventListener('click', () => {
        const parent = showLess.parentElement;
        const restElem = parent.querySelector('.rest');
        const showMore = parent.querySelector('.show-more');
        restElem.style.display = 'none';
        showLess.style.display = 'none';
        showMore.style.display = 'inline';
    });

    description.append(introTxt, showMore, rest, showLess);
    return description;
};

const getNewButtonsComponent = (projectIndex, todoIndex) => {
    const buttons = document.createElement('div');
    buttons.classList.add('buttons');
    buttons.classList.add('hide');

    const editBtn = document.createElement('button');
    editBtn.setAttribute('type', 'button');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', () => {
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('type', 'button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
        buttons.parentElement.remove();
        _handlers_todo__WEBPACK_IMPORTED_MODULE_0__.deleteTODO(projectIndex, todoIndex);
    });

    buttons.append(editBtn, deleteBtn);
    return buttons;
};

const getNewTODOComponent = (projectIndex, todo, todoIndex) => {
    const todoComponent = document.createElement('div');
    todoComponent.classList.add('todo');
    todoComponent.classList.add(
        getClassForPriority(todo.getPriority())
    );
    todoComponent.setAttribute('data-index', todoIndex);

    const header = getNewHeaderComponent(todo);
    const description = getNewDescriptionComponent(todo.getDescription());
    const buttons = getNewButtonsComponent(projectIndex, todoIndex)

    todoComponent.append(header, description, buttons);
    return todoComponent;
};



/***/ }),

/***/ "./src/handlers/modal.js":
/*!*******************************!*\
  !*** ./src/handlers/modal.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeCreateProjectDialog: () => (/* binding */ closeCreateProjectDialog),
/* harmony export */   closeCreateTODODialog: () => (/* binding */ closeCreateTODODialog),
/* harmony export */   setupEventListeners: () => (/* binding */ setupEventListeners)
/* harmony export */ });

const createProjectDialog = document.querySelector('#create-project+dialog');
const createTODODialog = document.querySelector('#create-todo+dialog');
const createProjectBtn = document.querySelector('#create-project');
const createTODOBtn = document.querySelector('#create-todo');
const closeCreateProjectDialogBtn = document.querySelector('#create-project+dialog>form>.close-modal');
const closeCreateTODODialogBtn = document.querySelector('#create-todo+dialog>form>.close-modal');

const closeCreateProjectDialog = () => {
    createProjectDialog.close();
};

const closeCreateTODODialog = () => {
    createTODODialog.close();
};

const setupEventListeners = () => {
    createProjectBtn.addEventListener('click', () => {
        createProjectDialog.showModal();
    });
    closeCreateProjectDialogBtn.addEventListener('click', closeCreateProjectDialog);

    createTODOBtn.addEventListener('click', () => {
        createTODODialog.showModal();
    });
    closeCreateTODODialogBtn.addEventListener('click', closeCreateTODODialog);
};



/***/ }),

/***/ "./src/handlers/project.js":
/*!*********************************!*\
  !*** ./src/handlers/project.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTODOToProject: () => (/* binding */ addTODOToProject),
/* harmony export */   changeCurrentProject: () => (/* binding */ changeCurrentProject),
/* harmony export */   createProject: () => (/* binding */ createProject),
/* harmony export */   deleteTODOOfProject: () => (/* binding */ deleteTODOOfProject),
/* harmony export */   setupEventListeners: () => (/* binding */ setupEventListeners),
/* harmony export */   unsetProjectSelection: () => (/* binding */ unsetProjectSelection)
/* harmony export */ });
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/container */ "./src/components/container.js");
/* harmony import */ var _components_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/project */ "./src/components/project.js");
/* harmony import */ var _model_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/project */ "./src/model/project.js");




const todoCreateProjectSelectElement = document.querySelector("#create-todo-project-name");
const projectSelectEle = document.querySelector("#select-project");
const allProjectsEle = document.querySelector("#all-projects");


const createProject = (name) => {
    const project = _model_project__WEBPACK_IMPORTED_MODULE_2__.getNewProject(name);
    _model_project__WEBPACK_IMPORTED_MODULE_2__.addProject(project);
    const projectIndex = _model_project__WEBPACK_IMPORTED_MODULE_2__.getNumOfProjects() - 1;

    projectSelectEle.appendChild(
        _components_project__WEBPACK_IMPORTED_MODULE_1__.getNewProjectOptionElement(name, projectIndex)
    );
    todoCreateProjectSelectElement.appendChild(
        _components_project__WEBPACK_IMPORTED_MODULE_1__.getNewProjectOptionElement(name, projectIndex)
    );

    _components_container__WEBPACK_IMPORTED_MODULE_0__.addContainerComponent();

    const projectComponent = _components_project__WEBPACK_IMPORTED_MODULE_1__.getNewProjectComponent(
        project,
        projectIndex
    );
    _components_project__WEBPACK_IMPORTED_MODULE_1__.addProjectComponent(projectComponent);
};

const changeCurrentProject = (projectIndex) => {
    projectSelectEle.selectedIndex = projectIndex;
    _components_container__WEBPACK_IMPORTED_MODULE_0__.changeContainerTo(projectIndex);
};

const setupEventListeners = () => {
    projectSelectEle.addEventListener('change',
        () => _components_container__WEBPACK_IMPORTED_MODULE_0__.changeContainerTo(projectSelectEle.value)
    );
    allProjectsEle.addEventListener('click', () => {
        _components_project__WEBPACK_IMPORTED_MODULE_1__.switchToAllProjects();
    });
};

const unsetProjectSelection = () => {
    projectSelectEle.selectedIndex = -1;
};

const addTODOToProject = (todo, projectIndex) => {
    const project = _model_project__WEBPACK_IMPORTED_MODULE_2__.getProject(projectIndex);
    project.addTODO(todo);
    _components_project__WEBPACK_IMPORTED_MODULE_1__.updateProjectComponentTODOCount(projectIndex, project.getNumOfTODOs());
    return project.getNumOfTODOs() - 1;
};

const deleteTODOOfProject = (projectIndex, todoIndex) => {
    const project = _model_project__WEBPACK_IMPORTED_MODULE_2__.getProject(projectIndex);
    project.removeTODO(todoIndex);
    _components_project__WEBPACK_IMPORTED_MODULE_1__.updateProjectComponentTODOCount(projectIndex, project.getNumOfTODOs());
};

createProject('Default');



/***/ }),

/***/ "./src/handlers/projectForm.js":
/*!*************************************!*\
  !*** ./src/handlers/projectForm.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setupEventListeners: () => (/* binding */ setupEventListeners)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/handlers/project.js");


const projectForm = document.querySelector('#create-project+dialog>form');
const projectNameElement = projectForm.querySelector('#project-name');

const setupEventListeners = () => {
    projectForm.addEventListener('submit', () => {
        _project__WEBPACK_IMPORTED_MODULE_0__.createProject(projectNameElement.value);
        projectForm.reset();
    });
};



/***/ }),

/***/ "./src/handlers/todo.js":
/*!******************************!*\
  !*** ./src/handlers/todo.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTODO: () => (/* binding */ createTODO),
/* harmony export */   deleteTODO: () => (/* binding */ deleteTODO)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/handlers/project.js");
/* harmony import */ var _model_todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/todo */ "./src/model/todo.js");
/* harmony import */ var _components_todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/todo */ "./src/components/todo.js");
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/container */ "./src/components/container.js");






const createTODO = (name, projectIndex, priority, description, dueDate) => {
    // dueDate = format(dueDate);
    const todo = _model_todo__WEBPACK_IMPORTED_MODULE_1__.getNewTODO(name, priority, description, '2.2.23');
    const todoIndex = _project__WEBPACK_IMPORTED_MODULE_0__.addTODOToProject(todo, projectIndex);
    _components_container__WEBPACK_IMPORTED_MODULE_3__.addTODOComponentToContainer(projectIndex,
        _components_todo__WEBPACK_IMPORTED_MODULE_2__.getNewTODOComponent(projectIndex, todo, todoIndex)
    );
};

const deleteTODO = (projectIndex, todoIndex) => {
    _project__WEBPACK_IMPORTED_MODULE_0__.deleteTODOOfProject(projectIndex, todoIndex);
};

createTODO('Art Work', 0, 1, 'document.querySelector("#select-project")', new Date());
createTODO('Music', 0, 2, 'document.querySelector("#select-project")', new Date());
createTODO('Study', 0, 3, 'document.querySelector("#select-project")', new Date());



/***/ }),

/***/ "./src/handlers/todoForm.js":
/*!**********************************!*\
  !*** ./src/handlers/todoForm.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setupEventListeners: () => (/* binding */ setupEventListeners)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/handlers/todo.js");


const todoForm = document.querySelector('#create-todo+dialog>form');
const todoNameEle = document.querySelector('#todo-name');
const projectSelectEle = document.querySelector('#create-todo-project-name');
const todoPriorityEle = document.querySelector('#create-todo-priority');
const todoDescriptionEle = document.querySelector('#create-todo-description');
const todoDueDateEle = document.querySelector('#create-todo-due-date');

const setupEventListeners = () => {
    todoForm.addEventListener('submit', () => {
        _todo__WEBPACK_IMPORTED_MODULE_0__.createTODO(
            todoNameEle.value,
            projectSelectEle.value,
            todoPriorityEle.value,
            todoDescriptionEle.value,
            todoDueDateEle.value,
        );
        todoForm.reset();
    });
};



/***/ }),

/***/ "./src/model/project.js":
/*!******************************!*\
  !*** ./src/model/project.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProject: () => (/* binding */ addProject),
/* harmony export */   getNewProject: () => (/* binding */ getNewProject),
/* harmony export */   getNumOfProjects: () => (/* binding */ getNumOfProjects),
/* harmony export */   getProject: () => (/* binding */ getProject)
/* harmony export */ });
const projects = [];

const getNewProject = (name) => {
    const getName = () => name;
    const TODOs = [];
    const addTODO = (todo) => {
        TODOs.push(todo);
    };
    const removeTODO = (index) => {
        TODOs[index] = null;
    };
    const getTODOs = () => TODOs;
    const getNumOfTODOs = () => TODOs.reduce((acc, curr) => {
        if (curr != null) ++acc;
        return acc;
    }, 0);
    return { getName, addTODO, getTODOs, removeTODO, getNumOfTODOs };
};

const getProject = (index) => {
    return projects[index];
};

const addProject = (project) => {
    projects.push(project);
};

const getNumOfProjects = () => projects.length;



/***/ }),

/***/ "./src/model/todo.js":
/*!***************************!*\
  !*** ./src/model/todo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getNewTODO: () => (/* binding */ getNewTODO)
/* harmony export */ });
const getNewTODO = (name, priority, description, dueDate) => {
    const getName = () => name;
    const getPriority = () => priority;
    const getDescription = () => description;
    const getDueDate = () => dueDate;
    return { getName, getPriority, getDescription, getDueDate };
};



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _handlers_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/modal */ "./src/handlers/modal.js");
/* harmony import */ var _handlers_projectForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlers/projectForm */ "./src/handlers/projectForm.js");
/* harmony import */ var _handlers_todoForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handlers/todoForm */ "./src/handlers/todoForm.js");
/* harmony import */ var _handlers_project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./handlers/project */ "./src/handlers/project.js");
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/container */ "./src/components/container.js");







_handlers_modal__WEBPACK_IMPORTED_MODULE_1__.setupEventListeners();
_handlers_projectForm__WEBPACK_IMPORTED_MODULE_2__.setupEventListeners();
_handlers_todoForm__WEBPACK_IMPORTED_MODULE_3__.setupEventListeners();
_handlers_project__WEBPACK_IMPORTED_MODULE_4__.setupEventListeners();
_components_container__WEBPACK_IMPORTED_MODULE_5__.changeContainerTo(0);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLE9BQU8sT0FBTyxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFFBQVEsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxPQUFPLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sT0FBTyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFFBQVEsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sTUFBTSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxX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Ozs7Ozs7O0FDQXFCO0FBQzRCO0FBQ1k7QUFDTjtBQUNGO0FBQ1E7O0FBRTdELGdFQUFnQztBQUNoQyxzRUFBc0M7QUFDdEMsbUVBQW1DO0FBQ25DLGtFQUFrQztBQUNsQyxvRUFBb0MsSSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvdG9kby5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL2hhbmRsZXJzL21vZGFsLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvaGFuZGxlcnMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL2hhbmRsZXJzL3Byb2plY3RGb3JtLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvaGFuZGxlcnMvdG9kby5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL2hhbmRsZXJzL3RvZG9Gb3JtLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvbW9kZWwvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL21vZGVsL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvcC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAgMjU1IDI1NSk7XG59XG5cbmJvZHksXG5wIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbn1cblxuYm9keSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA3ZnI7XG59XG5cbmJvZHk+aGVhZGVyPi50b29sYmFyIHtcbiAgICBmb250LXNpemU6IGNsYW1wKDEuMXJlbSwgNXZ3LCAxLjJyZW0pO1xuICAgIG1hcmdpbjogMWVtIDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5ib2R5PmhlYWRlcj4udG9vbGJhcj5zcGFuIHtcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xufVxuXG4jY3JlYXRlLXByb2plY3QsXG4jY3JlYXRlLXRvZG8sXG4jYWxsLXByb2plY3RzLFxuYm9keT5oZWFkZXI+LnRvb2xiYXI+c3Bhbj5zZWxlY3RbbmFtZT0ncHJvamVjdCddIHtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgcGFkZGluZzogMC41ZW0gMWVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjIgMTg0IDEzNSk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggMnB4IHJnYigwIDAgMCAvIDAuMyk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG5ib2R5PmhlYWRlcj4udG9vbGJhcj5zcGFuPnNlbGVjdFtuYW1lPSdwcm9qZWN0J10ge1xuICAgIG1hcmdpbi1sZWZ0OiAwLjI1ZW07XG59XG5cbmJvZHk+aGVhZGVyPi50b29sYmFyPnNwYW4+c2VsZWN0W25hbWU9J3Byb2plY3QnXTpmb2N1cyB7XG4gICAgb3V0bGluZTogMnB4IHNvbGlkIHJnYigxMTcgNzIgNzIpO1xufVxuXG4jY3JlYXRlLXByb2plY3QsXG4jY3JlYXRlLXRvZG8sXG4jYWxsLXByb2plY3RzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzbGF0ZWdyZXk7XG4gICAgY29sb3I6IHJnYigwLCAyNTUsIDI1NSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1hcmdpbi1sZWZ0OiAwLjVlbTtcbn1cblxuI2FsbC1wcm9qZWN0cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMiAxODQgMTM1KTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IHJnYigwIDAgMCk7XG59XG5cbi5jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTkwLCAyMDEsIDIyMywgMC44MzYpO1xuICAgIG1hcmdpbjogMCAxZW07XG4gICAgcGFkZGluZzogMWVtO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDAgMCAwLzAuMyk7XG59XG5cbi50b29sYmFyPnNwYW4+ZGlhbG9nIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE0LCAyMTQsIDIxNCk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgd2lkdGg6IGNsYW1wKDMyMHB4LCAyNXZ3LCA0MjBweCk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDFyZW07XG59XG5cbi50b29sYmFyPnNwYW4+ZGlhbG9nOjpiYWNrZHJvcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAgMCAwIC8gMC41KTtcbn1cblxuZGlhbG9nPmZvcm0+LmZpZWxkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbmRpYWxvZz5mb3JtPi5maWVsZD4qOmxhc3QtY2hpbGQge1xuICAgIGZsZXg6IDE7XG59XG5cbmRpYWxvZz5mb3JtPi5maWVsZD5pbnB1dCxcbmRpYWxvZz5mb3JtPi5maWVsZD5zZWxlY3QsXG5kaWFsb2c+Zm9ybT4uZmllbGQ+dGV4dGFyZWEge1xuICAgIHBhZGRpbmc6IDAuMmVtO1xuICAgIHBhZGRpbmctbGVmdDogMC41Y2g7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDAgMCAwIC8gMC41KTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCAyNTUgMjU1KTtcbn1cblxuLmNyZWF0ZS1mb3JtLWJ1dHRvbnM+YnV0dG9uIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IHJnYigwIDI1NSAyNTUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTYsIDEwNSwgOTUpO1xuICAgIHBhZGRpbmc6IDAuM2VtIDFlbTtcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDJweCByZ2IoMCAwIDAgLyAwLjMpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNyZWF0ZS1mb3JtLWJ1dHRvbnM+YnV0dG9uOmhvdmVyIHtcbiAgICBjb2xvcjogcmdiKDMsIDIzNiwgMjM2KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTQsIDg1LCA3Nyk7XG59XG5cbi5jcmVhdGUtZm9ybS1idXR0b25zPmJ1dHRvbjpob3ZlcjphY3RpdmUge1xuICAgIGNvbG9yOiByZ2IoNCwgMTg5LCAxODkpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3MCwgNjMsIDU3KTtcbn1cblxuZGlhbG9nPmZvcm0+LmZpZWxkPmlucHV0LFxuZGlhbG9nPmZvcm0+LmZpZWxkPnNlbGVjdCxcbmRpYWxvZz5mb3JtPi5maWVsZD50ZXh0YXJlYSxcbi5jcmVhdGUtZm9ybS1idXR0b25zPmJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cblxuZGlhbG9nPmZvcm0+LmZpZWxkPmxhYmVsIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjI1ZW07XG59XG5cbiNwcm9qZWN0LW5hbWUge1xuICAgIG1hcmdpbi1ib3R0b206IDAuN2VtO1xufVxuXG5kaWFsb2c+Zm9ybSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNCwgMjE0LCAyMTQpO1xufVxuXG5kaWFsb2c+Zm9ybSAqIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xufVxuXG4uY3JlYXRlLWZvcm0tYnV0dG9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5jbG9zZS1tb2RhbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkyLCA2OCwgNDUpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHBhZGRpbmc6IDAuNGVtO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDJweCByZ2IoMCAwIDAgLyAwLjMpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMC43cmVtO1xuICAgIHJpZ2h0OiAwLjdyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2xvc2UtbW9kYWw+c3ZnIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICAgIGZpbGw6IHJnYigwIDI1NSAyNTUpO1xuICAgIHdpZHRoOiAxLjFlbTtcbiAgICBoZWlnaHQ6IDEuMWVtO1xufVxuXG4jY3JlYXRlLXRvZG8rZGlhbG9nIHtcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG59XG5cbiNjcmVhdGUtdG9kbytkaWFsb2c+Zm9ybSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xuICAgIGdhcDogMTVweDtcbn1cblxuI2NyZWF0ZS10b2RvK2RpYWxvZz5mb3JtPi5maWVsZDpudGgtY2hpbGQoMSkge1xuICAgIGdyaWQtY29sdW1uOiAxLzM7XG59XG5cbiNjcmVhdGUtdG9kbytkaWFsb2c+Zm9ybT4uZmllbGQ6bnRoLWNoaWxkKDIpIHtcbiAgICBncmlkLWNvbHVtbjogMy81O1xufVxuXG4jY3JlYXRlLXRvZG8rZGlhbG9nPmZvcm0+LmZpZWxkOm50aC1jaGlsZCg0KSB7XG4gICAgZ3JpZC1jb2x1bW46IDEvNDtcbiAgICBncmlkLXJvdzogMi80O1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbiNjcmVhdGUtdG9kbytkaWFsb2c+Zm9ybT4uZmllbGQ6bnRoLWNoaWxkKDQpPnRleHRhcmVhIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4jY3JlYXRlLXRvZG8rZGlhbG9nPmZvcm0+LmZpZWxkOm50aC1jaGlsZCg1KSB7XG4gICAgZ3JpZC1jb2x1bW46IDQvNjtcbn1cblxuI2NyZWF0ZS10b2RvK2RpYWxvZz5mb3JtPi5jcmVhdGUtZm9ybS1idXR0b25zIHtcbiAgICBncmlkLWNvbHVtbjogNC82O1xufVxuXG5ib2R5Pi5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzAwcHgsIDFmcikpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNTBweCwgbWluLWNvbnRlbnQpKTtcbiAgICBnYXA6IDE1cHg7XG59XG5cbmJvZHk+LmNvbnRhaW5lcj4ucHJvamVjdCxcbmJvZHk+LmNvbnRhaW5lcj4udG9kbyB7XG4gICAgcGFkZGluZzogMWVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggMnB4IHJnYigwIDAgMCAvIDAuMyk7XG59XG5cbmJvZHk+LmNvbnRhaW5lcj4ucHJvamVjdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNCwgMTk3LCAxNzcpO1xuICAgIGNvbG9yOiByZ2IoMCwgMCwgNDMpO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYm9keT4uY29udGFpbmVyPi5wcm9qZWN0ICosXG5ib2R5Pi5jb250YWluZXI+LnRvZG8gKiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICBjb2xvcjogaW5oZXJpdDtcbn1cblxuYm9keT4uY29udGFpbmVyPi50b2RvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE4LCA2MiwgODIpO1xuICAgIGNvbG9yOiByZ2IoMjU1IDI1NSAyNTUpO1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcbn1cblxuYm9keT4uY29udGFpbmVyPi50b2RvPmhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmJvZHk+LmNvbnRhaW5lcj4udG9kbz5oZWFkZXI+LnR3aW4ge1xuICAgIHBhZGRpbmc6IDAgMC41ZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbmJvZHk+LmNvbnRhaW5lcj4udG9kbz5oZWFkZXI+LnR3aW4+LnByaW9yaXR5IHtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVlbTtcbn1cblxuYm9keT4uY29udGFpbmVyPi50b2RvPmhlYWRlcj4udHdpbj4udGl0bGUge1xuICAgIHBhZGRpbmctbGVmdDogMC41ZW07XG59XG5cbmJvZHk+LmNvbnRhaW5lcj4udG9kbz4uZGVzY3JpcHRpb24ge1xuICAgIG1hcmdpbjogMWVtIDA7XG4gICAgcGFkZGluZzogMC41ZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNiwgMTA4LCAxMjMpO1xuICAgIGNvbG9yOiByZ2IoMCwgMCwgNDMpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4IHJnYigwIDAgMCAvIDAuNSk7XG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG5ib2R5Pi5jb250YWluZXI+LnRvZG8+LmRlc2NyaXB0aW9uPi5zaG93LW1vcmUsXG5ib2R5Pi5jb250YWluZXI+LnRvZG8+LmRlc2NyaXB0aW9uPi5zaG93LWxlc3Mge1xuICAgIGNvbG9yOiByZ2IoNjIsIDYyLCA3OCk7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmJvZHk+LmNvbnRhaW5lcj4udG9kbz4uZGVzY3JpcHRpb24+LnNob3ctbW9yZTpob3ZlcixcbmJvZHk+LmNvbnRhaW5lcj4udG9kbz4uZGVzY3JpcHRpb24+LnNob3ctbGVzczpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5ib2R5Pi5jb250YWluZXI+LnRvZG8+LmRlc2NyaXB0aW9uPi5yZXN0IHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG5ib2R5Pi5jb250YWluZXI+LnRvZG8+LmRlc2NyaXB0aW9uPi5zaG93LWxlc3Mge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbmJvZHk+LmNvbnRhaW5lcj4udG9kbz4uYnV0dG9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuYm9keT4uY29udGFpbmVyPi50b2RvPi5idXR0b25zPmJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU5LCA1OSwgNTkpO1xuICAgIGNvbG9yOiByZ2IoMjQwLCAyNDgsIDI1NSk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDAuMjVlbSAwLjVlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYm9keT4uY29udGFpbmVyPi50b2RvPi5idXR0b25zPmJ1dHRvbjpsYXN0LWNoaWxkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk2LCA0NCwgNDQpO1xufVxuXG5ib2R5Pi5jb250YWluZXI+LnRvZG8+LmJ1dHRvbnM+YnV0dG9uOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk1LCAyNSwgMjUpO1xufVxuXG5ib2R5Pi5jb250YWluZXI+LnRvZG8+LmJ1dHRvbnMuaGlkZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuYm9keT4uY29udGFpbmVyPi50b2RvLmhvYmJ5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUxLCAxOTQsIDk2KTtcbiAgICBjb2xvcjogcmdiKDc1LCAzNCwgMzQpO1xufVxuXG5ib2R5Pi5jb250YWluZXI+LnRvZG8uaG9iYnk+LmRlc2NyaXB0aW9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM0LCAxNzAsIDg3KTtcbiAgICBjb2xvcjogcmdiKDI1NSAyNTUgMjU1KTtcbn1cblxuYm9keT4uY29udGFpbmVyPi50b2RvLmNob3JlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA5LCAyMjEsIDQyKTtcbiAgICBjb2xvcjogcmdiKDcxLCA0NywgNDcpO1xufVxuXG5ib2R5Pi5jb250YWluZXI+LnRvZG8uY2hvcmU+LmRlc2NyaXB0aW9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTcyLCAxODIsIDM0KTtcbiAgICBjb2xvcjogcmdiKDI1NSAyNTUgMjU1KTtcbn1cblxuYm9keT4uY29udGFpbmVyPi50b2RvLmltcG9ydGFudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MywgMTQ3LCAxNTkpO1xuICAgIGNvbG9yOiByZ2IoMCwgMCwgNDMpO1xufVxuXG5ib2R5Pi5jb250YWluZXI+LnRvZG8uaW1wb3J0YW50Pi5kZXNjcmlwdGlvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMSwgMTI0LCAxMzMpO1xuICAgIGNvbG9yOiByZ2IoMjU1IDI1NSAyNTUpO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG1KQUFtSjtJQUNuSixzQkFBc0I7QUFDMUI7O0FBRUE7OztJQUdJLHNCQUFzQjtJQUN0QixnQ0FBZ0M7QUFDcEM7O0FBRUE7O0lBRUksVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTs7OztJQUlJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWix3Q0FBd0M7SUFDeEMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBOzs7SUFHSSwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDRDQUE0QztJQUM1QyxhQUFhO0lBQ2IsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZ0NBQWdDO0lBQ2hDLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxPQUFPO0FBQ1g7O0FBRUE7OztJQUdJLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsa0NB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MUI7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLHVCQUF1QjtBQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCAyNTUgMjU1KTtcXG59XFxuXFxuYm9keSxcXG5wIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgN2ZyO1xcbn1cXG5cXG5ib2R5PmhlYWRlcj4udG9vbGJhciB7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMS4xcmVtLCA1dncsIDEuMnJlbSk7XFxuICAgIG1hcmdpbjogMWVtIDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuYm9keT5oZWFkZXI+LnRvb2xiYXI+c3BhbiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxZW07XFxufVxcblxcbiNjcmVhdGUtcHJvamVjdCxcXG4jY3JlYXRlLXRvZG8sXFxuI2FsbC1wcm9qZWN0cyxcXG5ib2R5PmhlYWRlcj4udG9vbGJhcj5zcGFuPnNlbGVjdFtuYW1lPSdwcm9qZWN0J10ge1xcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XFxuICAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMiAxODQgMTM1KTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDJweCByZ2IoMCAwIDAgLyAwLjMpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbmJvZHk+aGVhZGVyPi50b29sYmFyPnNwYW4+c2VsZWN0W25hbWU9J3Byb2plY3QnXSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjI1ZW07XFxufVxcblxcbmJvZHk+aGVhZGVyPi50b29sYmFyPnNwYW4+c2VsZWN0W25hbWU9J3Byb2plY3QnXTpmb2N1cyB7XFxuICAgIG91dGxpbmU6IDJweCBzb2xpZCByZ2IoMTE3IDcyIDcyKTtcXG59XFxuXFxuI2NyZWF0ZS1wcm9qZWN0LFxcbiNjcmVhdGUtdG9kbyxcXG4jYWxsLXByb2plY3RzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2xhdGVncmV5O1xcbiAgICBjb2xvcjogcmdiKDAsIDI1NSwgMjU1KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXJnaW4tbGVmdDogMC41ZW07XFxufVxcblxcbiNhbGwtcHJvamVjdHMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIyIDE4NCAxMzUpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiByZ2IoMCAwIDApO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTAsIDIwMSwgMjIzLCAwLjgzNik7XFxuICAgIG1hcmdpbjogMCAxZW07XFxuICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigwIDAgMC8wLjMpO1xcbn1cXG5cXG4udG9vbGJhcj5zcGFuPmRpYWxvZyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTQsIDIxNCwgMjE0KTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICB3aWR0aDogY2xhbXAoMzIwcHgsIDI1dncsIDQyMHB4KTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4udG9vbGJhcj5zcGFuPmRpYWxvZzo6YmFja2Ryb3Age1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCAwIDAgLyAwLjUpO1xcbn1cXG5cXG5kaWFsb2c+Zm9ybT4uZmllbGQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuZGlhbG9nPmZvcm0+LmZpZWxkPio6bGFzdC1jaGlsZCB7XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbmRpYWxvZz5mb3JtPi5maWVsZD5pbnB1dCxcXG5kaWFsb2c+Zm9ybT4uZmllbGQ+c2VsZWN0LFxcbmRpYWxvZz5mb3JtPi5maWVsZD50ZXh0YXJlYSB7XFxuICAgIHBhZGRpbmc6IDAuMmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNWNoO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMCAwIDAgLyAwLjUpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAgMjU1IDI1NSk7XFxufVxcblxcbi5jcmVhdGUtZm9ybS1idXR0b25zPmJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHJnYigwIDI1NSAyNTUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTE2LCAxMDUsIDk1KTtcXG4gICAgcGFkZGluZzogMC4zZW0gMWVtO1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDJweCByZ2IoMCAwIDAgLyAwLjMpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jcmVhdGUtZm9ybS1idXR0b25zPmJ1dHRvbjpob3ZlciB7XFxuICAgIGNvbG9yOiByZ2IoMywgMjM2LCAyMzYpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTQsIDg1LCA3Nyk7XFxufVxcblxcbi5jcmVhdGUtZm9ybS1idXR0b25zPmJ1dHRvbjpob3ZlcjphY3RpdmUge1xcbiAgICBjb2xvcjogcmdiKDQsIDE4OSwgMTg5KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDcwLCA2MywgNTcpO1xcbn1cXG5cXG5kaWFsb2c+Zm9ybT4uZmllbGQ+aW5wdXQsXFxuZGlhbG9nPmZvcm0+LmZpZWxkPnNlbGVjdCxcXG5kaWFsb2c+Zm9ybT4uZmllbGQ+dGV4dGFyZWEsXFxuLmNyZWF0ZS1mb3JtLWJ1dHRvbnM+YnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxufVxcblxcbmRpYWxvZz5mb3JtPi5maWVsZD5sYWJlbCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuMjVlbTtcXG59XFxuXFxuI3Byb2plY3QtbmFtZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuN2VtO1xcbn1cXG5cXG5kaWFsb2c+Zm9ybSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTQsIDIxNCwgMjE0KTtcXG59XFxuXFxuZGlhbG9nPmZvcm0gKiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi5jcmVhdGUtZm9ybS1idXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uY2xvc2UtbW9kYWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTIsIDY4LCA0NSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBwYWRkaW5nOiAwLjRlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDJweCByZ2IoMCAwIDAgLyAwLjMpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMC43cmVtO1xcbiAgICByaWdodDogMC43cmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jbG9zZS1tb2RhbD5zdmcge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBmaWxsOiByZ2IoMCAyNTUgMjU1KTtcXG4gICAgd2lkdGg6IDEuMWVtO1xcbiAgICBoZWlnaHQ6IDEuMWVtO1xcbn1cXG5cXG4jY3JlYXRlLXRvZG8rZGlhbG9nIHtcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcbn1cXG5cXG4jY3JlYXRlLXRvZG8rZGlhbG9nPmZvcm0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbiNjcmVhdGUtdG9kbytkaWFsb2c+Zm9ybT4uZmllbGQ6bnRoLWNoaWxkKDEpIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG59XFxuXFxuI2NyZWF0ZS10b2RvK2RpYWxvZz5mb3JtPi5maWVsZDpudGgtY2hpbGQoMikge1xcbiAgICBncmlkLWNvbHVtbjogMy81O1xcbn1cXG5cXG4jY3JlYXRlLXRvZG8rZGlhbG9nPmZvcm0+LmZpZWxkOm50aC1jaGlsZCg0KSB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzQ7XFxuICAgIGdyaWQtcm93OiAyLzQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblxcbiNjcmVhdGUtdG9kbytkaWFsb2c+Zm9ybT4uZmllbGQ6bnRoLWNoaWxkKDQpPnRleHRhcmVhIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuXFxuI2NyZWF0ZS10b2RvK2RpYWxvZz5mb3JtPi5maWVsZDpudGgtY2hpbGQoNSkge1xcbiAgICBncmlkLWNvbHVtbjogNC82O1xcbn1cXG5cXG4jY3JlYXRlLXRvZG8rZGlhbG9nPmZvcm0+LmNyZWF0ZS1mb3JtLWJ1dHRvbnMge1xcbiAgICBncmlkLWNvbHVtbjogNC82O1xcbn1cXG5cXG5ib2R5Pi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMDBweCwgMWZyKSk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNTBweCwgbWluLWNvbnRlbnQpKTtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG5ib2R5Pi5jb250YWluZXI+LnByb2plY3QsXFxuYm9keT4uY29udGFpbmVyPi50b2RvIHtcXG4gICAgcGFkZGluZzogMWVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMnB4IHJnYigwIDAgMCAvIDAuMyk7XFxufVxcblxcbmJvZHk+LmNvbnRhaW5lcj4ucHJvamVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDQsIDE5NywgMTc3KTtcXG4gICAgY29sb3I6IHJnYigwLCAwLCA0Myk7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5ib2R5Pi5jb250YWluZXI+LnByb2plY3QgKixcXG5ib2R5Pi5jb250YWluZXI+LnRvZG8gKiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG5ib2R5Pi5jb250YWluZXI+LnRvZG8ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE4LCA2MiwgODIpO1xcbiAgICBjb2xvcjogcmdiKDI1NSAyNTUgMjU1KTtcXG4gICAgcGFkZGluZzogMWVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbn1cXG5cXG5ib2R5Pi5jb250YWluZXI+LnRvZG8+aGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJvZHk+LmNvbnRhaW5lcj4udG9kbz5oZWFkZXI+LnR3aW4ge1xcbiAgICBwYWRkaW5nOiAwIDAuNWVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbmJvZHk+LmNvbnRhaW5lcj4udG9kbz5oZWFkZXI+LnR3aW4+LnByaW9yaXR5IHtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgd2hpdGU7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDAuNWVtO1xcbn1cXG5cXG5ib2R5Pi5jb250YWluZXI+LnRvZG8+aGVhZGVyPi50d2luPi50aXRsZSB7XFxuICAgIHBhZGRpbmctbGVmdDogMC41ZW07XFxufVxcblxcbmJvZHk+LmNvbnRhaW5lcj4udG9kbz4uZGVzY3JpcHRpb24ge1xcbiAgICBtYXJnaW46IDFlbSAwO1xcbiAgICBwYWRkaW5nOiAwLjVlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNiwgMTA4LCAxMjMpO1xcbiAgICBjb2xvcjogcmdiKDAsIDAsIDQzKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4IHJnYigwIDAgMCAvIDAuNSk7XFxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmJvZHk+LmNvbnRhaW5lcj4udG9kbz4uZGVzY3JpcHRpb24+LnNob3ctbW9yZSxcXG5ib2R5Pi5jb250YWluZXI+LnRvZG8+LmRlc2NyaXB0aW9uPi5zaG93LWxlc3Mge1xcbiAgICBjb2xvcjogcmdiKDYyLCA2MiwgNzgpO1xcbiAgICBmb250LXNpemU6IDAuOGVtO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5ib2R5Pi5jb250YWluZXI+LnRvZG8+LmRlc2NyaXB0aW9uPi5zaG93LW1vcmU6aG92ZXIsXFxuYm9keT4uY29udGFpbmVyPi50b2RvPi5kZXNjcmlwdGlvbj4uc2hvdy1sZXNzOmhvdmVyIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5ib2R5Pi5jb250YWluZXI+LnRvZG8+LmRlc2NyaXB0aW9uPi5yZXN0IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuYm9keT4uY29udGFpbmVyPi50b2RvPi5kZXNjcmlwdGlvbj4uc2hvdy1sZXNzIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuYm9keT4uY29udGFpbmVyPi50b2RvPi5idXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbmJvZHk+LmNvbnRhaW5lcj4udG9kbz4uYnV0dG9ucz5idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTksIDU5LCA1OSk7XFxuICAgIGNvbG9yOiByZ2IoMjQwLCAyNDgsIDI1NSk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogMC4yNWVtIDAuNWVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5ib2R5Pi5jb250YWluZXI+LnRvZG8+LmJ1dHRvbnM+YnV0dG9uOmxhc3QtY2hpbGQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk2LCA0NCwgNDQpO1xcbn1cXG5cXG5ib2R5Pi5jb250YWluZXI+LnRvZG8+LmJ1dHRvbnM+YnV0dG9uOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5NSwgMjUsIDI1KTtcXG59XFxuXFxuYm9keT4uY29udGFpbmVyPi50b2RvPi5idXR0b25zLmhpZGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5ib2R5Pi5jb250YWluZXI+LnRvZG8uaG9iYnkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUxLCAxOTQsIDk2KTtcXG4gICAgY29sb3I6IHJnYig3NSwgMzQsIDM0KTtcXG59XFxuXFxuYm9keT4uY29udGFpbmVyPi50b2RvLmhvYmJ5Pi5kZXNjcmlwdGlvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzQsIDE3MCwgODcpO1xcbiAgICBjb2xvcjogcmdiKDI1NSAyNTUgMjU1KTtcXG59XFxuXFxuYm9keT4uY29udGFpbmVyPi50b2RvLmNob3JlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOSwgMjIxLCA0Mik7XFxuICAgIGNvbG9yOiByZ2IoNzEsIDQ3LCA0Nyk7XFxufVxcblxcbmJvZHk+LmNvbnRhaW5lcj4udG9kby5jaG9yZT4uZGVzY3JpcHRpb24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTcyLCAxODIsIDM0KTtcXG4gICAgY29sb3I6IHJnYigyNTUgMjU1IDI1NSk7XFxufVxcblxcbmJvZHk+LmNvbnRhaW5lcj4udG9kby5pbXBvcnRhbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQzLCAxNDcsIDE1OSk7XFxuICAgIGNvbG9yOiByZ2IoMCwgMCwgNDMpO1xcbn1cXG5cXG5ib2R5Pi5jb250YWluZXI+LnRvZG8uaW1wb3J0YW50Pi5kZXNjcmlwdGlvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDEsIDEyNCwgMTMzKTtcXG4gICAgY29sb3I6IHJnYigyNTUgMjU1IDI1NSk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcbmNvbnN0IHRvZG9Db250YWluZXJDb21wb25lbnRzID0gW107XG5cbmNvbnN0IGFkZENvbnRhaW5lckNvbXBvbmVudCA9ICgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG4gICAgdG9kb0NvbnRhaW5lckNvbXBvbmVudHMucHVzaChjb250YWluZXIpO1xufTtcblxuY29uc3QgYWRkVE9ET0NvbXBvbmVudFRvQ29udGFpbmVyID0gKHByb2plY3RJbmRleCwgdG9kb0NvbXBvbmVudCkgPT4ge1xuICAgIHRvZG9Db250YWluZXJDb21wb25lbnRzW3Byb2plY3RJbmRleF0uYXBwZW5kQ2hpbGQodG9kb0NvbXBvbmVudCk7XG59XG5cbmNvbnN0IGNoYW5nZUNvbnRhaW5lclRvID0gKHByb2plY3RJbmRleCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG4gICAgYm9keS5yZXBsYWNlQ2hpbGQodG9kb0NvbnRhaW5lckNvbXBvbmVudHNbcHJvamVjdEluZGV4XSwgY3VycmVudENvbnRhaW5lcik7XG59O1xuXG5leHBvcnQgeyBhZGRDb250YWluZXJDb21wb25lbnQsIGFkZFRPRE9Db21wb25lbnRUb0NvbnRhaW5lciwgY2hhbmdlQ29udGFpbmVyVG8gfTsiLCJpbXBvcnQgKiBhcyBQcm9qZWN0SGFuZGxlciBmcm9tICcuLi9oYW5kbGVycy9wcm9qZWN0JztcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG5cbmNvbnN0IHByb2plY3RDb21wb25lbnRzID0gW107XG5jb25zdCBwcm9qZWN0Q29tcG9uZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5wcm9qZWN0Q29tcG9uZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuXG5cbmNvbnN0IGdldE5ld1Byb2plY3RPcHRpb25FbGVtZW50ID0gKG5hbWUsIHByb2plY3RJbmRleCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBwcm9qZWN0T3B0aW9uLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICBwcm9qZWN0T3B0aW9uLnZhbHVlID0gcHJvamVjdEluZGV4O1xuICAgIHJldHVybiBwcm9qZWN0T3B0aW9uO1xufTtcblxuY29uc3QgZ2V0TmV3UHJvamVjdENvbXBvbmVudCA9IChwcm9qZWN0LCBwcm9qZWN0SW5kZXgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0Q29tcG9uZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdENvbXBvbmVudC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG4gICAgcHJvamVjdENvbXBvbmVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgUHJvamVjdEhhbmRsZXIuY2hhbmdlQ3VycmVudFByb2plY3QocHJvamVjdEluZGV4KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbmFtZS5jbGFzc0xpc3QuYWRkKCduYW1lJyk7XG4gICAgbmFtZS50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0TmFtZSgpO1xuXG4gICAgY29uc3QgbnVtT2ZUT0RPcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBudW1PZlRPRE9zLmNsYXNzTGlzdC5hZGQoJ251bS1vZi10b2RvcycpO1xuICAgIG51bU9mVE9ET3MudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldFRPRE9zKCkubGVuZ3RoICsgJyBUTy1ETyhzKSc7XG4gICAgcHJvamVjdENvbXBvbmVudC5hcHBlbmQobmFtZSwgbnVtT2ZUT0RPcyk7XG4gICAgcmV0dXJuIHByb2plY3RDb21wb25lbnQ7XG59O1xuXG5jb25zdCBhZGRQcm9qZWN0Q29tcG9uZW50ID0gKHByb2plY3RDb21wb25lbnQpID0+IHtcbiAgICBwcm9qZWN0Q29tcG9uZW50cy5wdXNoKHByb2plY3RDb21wb25lbnQpO1xuICAgIHByb2plY3RDb21wb25lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdENvbXBvbmVudCk7XG59O1xuXG5jb25zdCB1cGRhdGVQcm9qZWN0Q29tcG9uZW50VE9ET0NvdW50ID0gKHByb2plY3RJbmRleCwgbmV3VE9ET0NvdW50KSA9PiB7XG4gICAgcHJvamVjdENvbXBvbmVudHNbcHJvamVjdEluZGV4XS5xdWVyeVNlbGVjdG9yKCcubnVtLW9mLXRvZG9zJylcbiAgICAgICAgLnRleHRDb250ZW50ID0gbmV3VE9ET0NvdW50ICsgJyBUTy1ETyhzKSdcbn07XG5cbmNvbnN0IHN3aXRjaFRvQWxsUHJvamVjdHMgPSAoKSA9PiB7XG4gICAgY29uc3QgY3VycmVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcbiAgICBpZiAoY3VycmVudENvbnRhaW5lciA9PT0gcHJvamVjdENvbXBvbmVudENvbnRhaW5lcikgcmV0dXJuO1xuICAgIGJvZHkucmVwbGFjZUNoaWxkKHByb2plY3RDb21wb25lbnRDb250YWluZXIsIGN1cnJlbnRDb250YWluZXIpO1xuICAgIFByb2plY3RIYW5kbGVyLnVuc2V0UHJvamVjdFNlbGVjdGlvbigpO1xufTtcblxuZXhwb3J0IHsgZ2V0TmV3UHJvamVjdENvbXBvbmVudCwgYWRkUHJvamVjdENvbXBvbmVudCwgc3dpdGNoVG9BbGxQcm9qZWN0cywgdXBkYXRlUHJvamVjdENvbXBvbmVudFRPRE9Db3VudCwgZ2V0TmV3UHJvamVjdE9wdGlvbkVsZW1lbnQgfTsiLCJpbXBvcnQgKiBhcyBUT0RPSGFuZGxlciBmcm9tICcuLi9oYW5kbGVycy90b2RvJztcblxuY29uc3QgdG9nZ2xlRXhwYW5zaW9uID0gKHRvZG8pID0+IHtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHRvZG8ucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uJyk7XG4gICAgY29uc3QgYnV0dG9ucyA9IHRvZG8ucXVlcnlTZWxlY3RvcignLmJ1dHRvbnMnKTtcbiAgICBjb25zdCBjb21wdXRlZFN0eWxlRGlzcGxheSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRlc2NyaXB0aW9uKS5kaXNwbGF5O1xuICAgIGRlc2NyaXB0aW9uLnN0eWxlLmRpc3BsYXkgPSBjb21wdXRlZFN0eWxlRGlzcGxheSA9PT0gJ25vbmUnID8gJ2Jsb2NrJyA6ICdub25lJztcbiAgICBidXR0b25zLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcbn07XG5cbmNvbnN0IGdldENsYXNzRm9yUHJpb3JpdHkgPSAocHJpb3JpdHkpID0+IHtcbiAgICBzd2l0Y2ggKHByaW9yaXR5KSB7XG4gICAgICAgIGNhc2UgMTogcmV0dXJuICdob2JieSc7XG4gICAgICAgIGNhc2UgMjogcmV0dXJuICdjaG9yZSc7XG4gICAgICAgIGRlZmF1bHQ6IHJldHVybiAnaW1wb3J0YW50JztcbiAgICB9XG59O1xuXG5jb25zdCBnZXROZXdIZWFkZXJDb21wb25lbnQgPSAodG9kbykgPT4ge1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5Jyk7XG4gICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSB0b2RvLmdldFByaW9yaXR5KCk7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gdG9kby5nZXROYW1lKCk7XG5cbiAgICBjb25zdCB0d2luID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHR3aW4uY2xhc3NMaXN0LmFkZCgndHdpbicpO1xuICAgIHR3aW4uYXBwZW5kKHByaW9yaXR5LCB0aXRsZSk7XG5cbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGR1ZURhdGUuY2xhc3NMaXN0LmFkZCgnZHVlLWRhdGUnKTtcbiAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gdG9kby5nZXREdWVEYXRlKCk7XG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBoZWFkZXIuYXBwZW5kKHR3aW4sIGR1ZURhdGUpO1xuICAgIGhlYWRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdG9nZ2xlRXhwYW5zaW9uKGhlYWRlci5wYXJlbnRFbGVtZW50KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBoZWFkZXI7XG59O1xuXG5jb25zdCBnZXROZXdEZXNjcmlwdGlvbkNvbXBvbmVudCA9IChkZXNjcmlwdGlvblR4dCkgPT4ge1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJyk7XG4gICAgaWYgKGRlc2NyaXB0aW9uVHh0Lmxlbmd0aCA8PSAyNSkge1xuICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uVHh0O1xuICAgICAgICByZXR1cm4gZGVzY3JpcHRpb247XG4gICAgfVxuICAgIGNvbnN0IGludHJvVHh0ID0gZGVzY3JpcHRpb25UeHQuc2xpY2UoMCwgMjYpO1xuXG4gICAgY29uc3QgcmVzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICByZXN0LmNsYXNzTGlzdC5hZGQoJ3Jlc3QnKTtcbiAgICByZXN0LnRleHRDb250ZW50ID0gZGVzY3JpcHRpb25UeHQuc2xpY2UoMjYsIGRlc2NyaXB0aW9uVHh0Lmxlbmd0aCk7XG5cbiAgICBjb25zdCBzaG93TW9yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzaG93TW9yZS5jbGFzc0xpc3QuYWRkKCdzaG93LW1vcmUnKTtcbiAgICBzaG93TW9yZS50ZXh0Q29udGVudCA9ICcuLi5zaG93IG1vcmUnO1xuICAgIHNob3dNb3JlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBzaG93TW9yZS5wYXJlbnRFbGVtZW50O1xuICAgICAgICBjb25zdCByZXN0RWxlbSA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKCcucmVzdCcpO1xuICAgICAgICBjb25zdCBzaG93TGVzcyA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKCcuc2hvdy1sZXNzJyk7XG4gICAgICAgIHJlc3RFbGVtLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJztcbiAgICAgICAgc2hvd01vcmUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgc2hvd0xlc3Muc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnO1xuICAgIH0pO1xuXG4gICAgY29uc3Qgc2hvd0xlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgc2hvd0xlc3MuY2xhc3NMaXN0LmFkZCgnc2hvdy1sZXNzJyk7XG4gICAgc2hvd0xlc3MudGV4dENvbnRlbnQgPSAnLi4uc2hvdyBsZXNzJztcbiAgICBzaG93TGVzcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gc2hvd0xlc3MucGFyZW50RWxlbWVudDtcbiAgICAgICAgY29uc3QgcmVzdEVsZW0gPSBwYXJlbnQucXVlcnlTZWxlY3RvcignLnJlc3QnKTtcbiAgICAgICAgY29uc3Qgc2hvd01vcmUgPSBwYXJlbnQucXVlcnlTZWxlY3RvcignLnNob3ctbW9yZScpO1xuICAgICAgICByZXN0RWxlbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBzaG93TGVzcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBzaG93TW9yZS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSc7XG4gICAgfSk7XG5cbiAgICBkZXNjcmlwdGlvbi5hcHBlbmQoaW50cm9UeHQsIHNob3dNb3JlLCByZXN0LCBzaG93TGVzcyk7XG4gICAgcmV0dXJuIGRlc2NyaXB0aW9uO1xufTtcblxuY29uc3QgZ2V0TmV3QnV0dG9uc0NvbXBvbmVudCA9IChwcm9qZWN0SW5kZXgsIHRvZG9JbmRleCkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidXR0b25zLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbnMnKTtcbiAgICBidXR0b25zLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcblxuICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBlZGl0QnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICBlZGl0QnRuLnRleHRDb250ZW50ID0gJ0VkaXQnO1xuICAgIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgfSk7XG5cbiAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkZWxldGVCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xuICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgYnV0dG9ucy5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICBUT0RPSGFuZGxlci5kZWxldGVUT0RPKHByb2plY3RJbmRleCwgdG9kb0luZGV4KTtcbiAgICB9KTtcblxuICAgIGJ1dHRvbnMuYXBwZW5kKGVkaXRCdG4sIGRlbGV0ZUJ0bik7XG4gICAgcmV0dXJuIGJ1dHRvbnM7XG59O1xuXG5jb25zdCBnZXROZXdUT0RPQ29tcG9uZW50ID0gKHByb2plY3RJbmRleCwgdG9kbywgdG9kb0luZGV4KSA9PiB7XG4gICAgY29uc3QgdG9kb0NvbXBvbmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9Db21wb25lbnQuY2xhc3NMaXN0LmFkZCgndG9kbycpO1xuICAgIHRvZG9Db21wb25lbnQuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgZ2V0Q2xhc3NGb3JQcmlvcml0eSh0b2RvLmdldFByaW9yaXR5KCkpXG4gICAgKTtcbiAgICB0b2RvQ29tcG9uZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIHRvZG9JbmRleCk7XG5cbiAgICBjb25zdCBoZWFkZXIgPSBnZXROZXdIZWFkZXJDb21wb25lbnQodG9kbyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBnZXROZXdEZXNjcmlwdGlvbkNvbXBvbmVudCh0b2RvLmdldERlc2NyaXB0aW9uKCkpO1xuICAgIGNvbnN0IGJ1dHRvbnMgPSBnZXROZXdCdXR0b25zQ29tcG9uZW50KHByb2plY3RJbmRleCwgdG9kb0luZGV4KVxuXG4gICAgdG9kb0NvbXBvbmVudC5hcHBlbmQoaGVhZGVyLCBkZXNjcmlwdGlvbiwgYnV0dG9ucyk7XG4gICAgcmV0dXJuIHRvZG9Db21wb25lbnQ7XG59O1xuXG5leHBvcnQgeyBnZXROZXdUT0RPQ29tcG9uZW50IH07IiwiXG5jb25zdCBjcmVhdGVQcm9qZWN0RGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZS1wcm9qZWN0K2RpYWxvZycpO1xuY29uc3QgY3JlYXRlVE9ET0RpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGUtdG9kbytkaWFsb2cnKTtcbmNvbnN0IGNyZWF0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlLXByb2plY3QnKTtcbmNvbnN0IGNyZWF0ZVRPRE9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlLXRvZG8nKTtcbmNvbnN0IGNsb3NlQ3JlYXRlUHJvamVjdERpYWxvZ0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGUtcHJvamVjdCtkaWFsb2c+Zm9ybT4uY2xvc2UtbW9kYWwnKTtcbmNvbnN0IGNsb3NlQ3JlYXRlVE9ET0RpYWxvZ0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGUtdG9kbytkaWFsb2c+Zm9ybT4uY2xvc2UtbW9kYWwnKTtcblxuY29uc3QgY2xvc2VDcmVhdGVQcm9qZWN0RGlhbG9nID0gKCkgPT4ge1xuICAgIGNyZWF0ZVByb2plY3REaWFsb2cuY2xvc2UoKTtcbn07XG5cbmNvbnN0IGNsb3NlQ3JlYXRlVE9ET0RpYWxvZyA9ICgpID0+IHtcbiAgICBjcmVhdGVUT0RPRGlhbG9nLmNsb3NlKCk7XG59O1xuXG5jb25zdCBzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIGNyZWF0ZVByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNyZWF0ZVByb2plY3REaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgfSk7XG4gICAgY2xvc2VDcmVhdGVQcm9qZWN0RGlhbG9nQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VDcmVhdGVQcm9qZWN0RGlhbG9nKTtcblxuICAgIGNyZWF0ZVRPRE9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNyZWF0ZVRPRE9EaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgfSk7XG4gICAgY2xvc2VDcmVhdGVUT0RPRGlhbG9nQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VDcmVhdGVUT0RPRGlhbG9nKTtcbn07XG5cbmV4cG9ydCB7IHNldHVwRXZlbnRMaXN0ZW5lcnMsIGNsb3NlQ3JlYXRlUHJvamVjdERpYWxvZywgY2xvc2VDcmVhdGVUT0RPRGlhbG9nIH07IiwiaW1wb3J0ICogYXMgQ29udGFpbmVyQ29tcG9uZW50IGZyb20gXCIuLi9jb21wb25lbnRzL2NvbnRhaW5lclwiO1xuaW1wb3J0ICogYXMgUHJvamVjdENvbXBvbmVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9wcm9qZWN0XCI7XG5pbXBvcnQgKiBhcyBQcm9qZWN0TW9kZWwgZnJvbSBcIi4uL21vZGVsL3Byb2plY3RcIjtcblxuY29uc3QgdG9kb0NyZWF0ZVByb2plY3RTZWxlY3RFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjcmVhdGUtdG9kby1wcm9qZWN0LW5hbWVcIik7XG5jb25zdCBwcm9qZWN0U2VsZWN0RWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxlY3QtcHJvamVjdFwiKTtcbmNvbnN0IGFsbFByb2plY3RzRWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhbGwtcHJvamVjdHNcIik7XG5cblxuY29uc3QgY3JlYXRlUHJvamVjdCA9IChuYW1lKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdCA9IFByb2plY3RNb2RlbC5nZXROZXdQcm9qZWN0KG5hbWUpO1xuICAgIFByb2plY3RNb2RlbC5hZGRQcm9qZWN0KHByb2plY3QpO1xuICAgIGNvbnN0IHByb2plY3RJbmRleCA9IFByb2plY3RNb2RlbC5nZXROdW1PZlByb2plY3RzKCkgLSAxO1xuXG4gICAgcHJvamVjdFNlbGVjdEVsZS5hcHBlbmRDaGlsZChcbiAgICAgICAgUHJvamVjdENvbXBvbmVudC5nZXROZXdQcm9qZWN0T3B0aW9uRWxlbWVudChuYW1lLCBwcm9qZWN0SW5kZXgpXG4gICAgKTtcbiAgICB0b2RvQ3JlYXRlUHJvamVjdFNlbGVjdEVsZW1lbnQuYXBwZW5kQ2hpbGQoXG4gICAgICAgIFByb2plY3RDb21wb25lbnQuZ2V0TmV3UHJvamVjdE9wdGlvbkVsZW1lbnQobmFtZSwgcHJvamVjdEluZGV4KVxuICAgICk7XG5cbiAgICBDb250YWluZXJDb21wb25lbnQuYWRkQ29udGFpbmVyQ29tcG9uZW50KCk7XG5cbiAgICBjb25zdCBwcm9qZWN0Q29tcG9uZW50ID0gUHJvamVjdENvbXBvbmVudC5nZXROZXdQcm9qZWN0Q29tcG9uZW50KFxuICAgICAgICBwcm9qZWN0LFxuICAgICAgICBwcm9qZWN0SW5kZXhcbiAgICApO1xuICAgIFByb2plY3RDb21wb25lbnQuYWRkUHJvamVjdENvbXBvbmVudChwcm9qZWN0Q29tcG9uZW50KTtcbn07XG5cbmNvbnN0IGNoYW5nZUN1cnJlbnRQcm9qZWN0ID0gKHByb2plY3RJbmRleCkgPT4ge1xuICAgIHByb2plY3RTZWxlY3RFbGUuc2VsZWN0ZWRJbmRleCA9IHByb2plY3RJbmRleDtcbiAgICBDb250YWluZXJDb21wb25lbnQuY2hhbmdlQ29udGFpbmVyVG8ocHJvamVjdEluZGV4KTtcbn07XG5cbmNvbnN0IHNldHVwRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgcHJvamVjdFNlbGVjdEVsZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLFxuICAgICAgICAoKSA9PiBDb250YWluZXJDb21wb25lbnQuY2hhbmdlQ29udGFpbmVyVG8ocHJvamVjdFNlbGVjdEVsZS52YWx1ZSlcbiAgICApO1xuICAgIGFsbFByb2plY3RzRWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBQcm9qZWN0Q29tcG9uZW50LnN3aXRjaFRvQWxsUHJvamVjdHMoKTtcbiAgICB9KTtcbn07XG5cbmNvbnN0IHVuc2V0UHJvamVjdFNlbGVjdGlvbiA9ICgpID0+IHtcbiAgICBwcm9qZWN0U2VsZWN0RWxlLnNlbGVjdGVkSW5kZXggPSAtMTtcbn07XG5cbmNvbnN0IGFkZFRPRE9Ub1Byb2plY3QgPSAodG9kbywgcHJvamVjdEluZGV4KSA9PiB7XG4gICAgY29uc3QgcHJvamVjdCA9IFByb2plY3RNb2RlbC5nZXRQcm9qZWN0KHByb2plY3RJbmRleCk7XG4gICAgcHJvamVjdC5hZGRUT0RPKHRvZG8pO1xuICAgIFByb2plY3RDb21wb25lbnQudXBkYXRlUHJvamVjdENvbXBvbmVudFRPRE9Db3VudChwcm9qZWN0SW5kZXgsIHByb2plY3QuZ2V0TnVtT2ZUT0RPcygpKTtcbiAgICByZXR1cm4gcHJvamVjdC5nZXROdW1PZlRPRE9zKCkgLSAxO1xufTtcblxuY29uc3QgZGVsZXRlVE9ET09mUHJvamVjdCA9IChwcm9qZWN0SW5kZXgsIHRvZG9JbmRleCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSBQcm9qZWN0TW9kZWwuZ2V0UHJvamVjdChwcm9qZWN0SW5kZXgpO1xuICAgIHByb2plY3QucmVtb3ZlVE9ETyh0b2RvSW5kZXgpO1xuICAgIFByb2plY3RDb21wb25lbnQudXBkYXRlUHJvamVjdENvbXBvbmVudFRPRE9Db3VudChwcm9qZWN0SW5kZXgsIHByb2plY3QuZ2V0TnVtT2ZUT0RPcygpKTtcbn07XG5cbmNyZWF0ZVByb2plY3QoJ0RlZmF1bHQnKTtcblxuZXhwb3J0IHsgY3JlYXRlUHJvamVjdCwgY2hhbmdlQ3VycmVudFByb2plY3QsIHNldHVwRXZlbnRMaXN0ZW5lcnMsIHVuc2V0UHJvamVjdFNlbGVjdGlvbiwgYWRkVE9ET1RvUHJvamVjdCwgZGVsZXRlVE9ET09mUHJvamVjdCB9OyIsImltcG9ydCAqIGFzIFByb2plY3RIYW5kbGVyIGZyb20gJy4vcHJvamVjdCc7XG5cbmNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZS1wcm9qZWN0K2RpYWxvZz5mb3JtJyk7XG5jb25zdCBwcm9qZWN0TmFtZUVsZW1lbnQgPSBwcm9qZWN0Rm9ybS5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1uYW1lJyk7XG5cbmNvbnN0IHNldHVwRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgcHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKCkgPT4ge1xuICAgICAgICBQcm9qZWN0SGFuZGxlci5jcmVhdGVQcm9qZWN0KHByb2plY3ROYW1lRWxlbWVudC52YWx1ZSk7XG4gICAgICAgIHByb2plY3RGb3JtLnJlc2V0KCk7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgeyBzZXR1cEV2ZW50TGlzdGVuZXJzIH07IiwiaW1wb3J0ICogYXMgUHJvamVjdEhhbmRsZXIgZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCAqIGFzIFRPRE9Nb2RhbCBmcm9tICcuLi9tb2RlbC90b2RvJztcbmltcG9ydCAqIGFzIFRPRE9Db21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50cy90b2RvJztcbmltcG9ydCAqIGFzIENvbnRhaW5lckNvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRhaW5lcidcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJztcblxuY29uc3QgY3JlYXRlVE9ETyA9IChuYW1lLCBwcm9qZWN0SW5kZXgsIHByaW9yaXR5LCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSkgPT4ge1xuICAgIC8vIGR1ZURhdGUgPSBmb3JtYXQoZHVlRGF0ZSk7XG4gICAgY29uc3QgdG9kbyA9IFRPRE9Nb2RhbC5nZXROZXdUT0RPKG5hbWUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbiwgJzIuMi4yMycpO1xuICAgIGNvbnN0IHRvZG9JbmRleCA9IFByb2plY3RIYW5kbGVyLmFkZFRPRE9Ub1Byb2plY3QodG9kbywgcHJvamVjdEluZGV4KTtcbiAgICBDb250YWluZXJDb21wb25lbnQuYWRkVE9ET0NvbXBvbmVudFRvQ29udGFpbmVyKHByb2plY3RJbmRleCxcbiAgICAgICAgVE9ET0NvbXBvbmVudC5nZXROZXdUT0RPQ29tcG9uZW50KHByb2plY3RJbmRleCwgdG9kbywgdG9kb0luZGV4KVxuICAgICk7XG59O1xuXG5jb25zdCBkZWxldGVUT0RPID0gKHByb2plY3RJbmRleCwgdG9kb0luZGV4KSA9PiB7XG4gICAgUHJvamVjdEhhbmRsZXIuZGVsZXRlVE9ET09mUHJvamVjdChwcm9qZWN0SW5kZXgsIHRvZG9JbmRleCk7XG59O1xuXG5jcmVhdGVUT0RPKCdBcnQgV29yaycsIDAsIDEsICdkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlbGVjdC1wcm9qZWN0XCIpJywgbmV3IERhdGUoKSk7XG5jcmVhdGVUT0RPKCdNdXNpYycsIDAsIDIsICdkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlbGVjdC1wcm9qZWN0XCIpJywgbmV3IERhdGUoKSk7XG5jcmVhdGVUT0RPKCdTdHVkeScsIDAsIDMsICdkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlbGVjdC1wcm9qZWN0XCIpJywgbmV3IERhdGUoKSk7XG5cbmV4cG9ydCB7IGNyZWF0ZVRPRE8sIGRlbGV0ZVRPRE8gfTsiLCJpbXBvcnQgKiBhcyBUb2RvSGFuZGxlciBmcm9tICcuL3RvZG8nO1xuXG5jb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGUtdG9kbytkaWFsb2c+Zm9ybScpO1xuY29uc3QgdG9kb05hbWVFbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1uYW1lJyk7XG5jb25zdCBwcm9qZWN0U2VsZWN0RWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZS10b2RvLXByb2plY3QtbmFtZScpO1xuY29uc3QgdG9kb1ByaW9yaXR5RWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZS10b2RvLXByaW9yaXR5Jyk7XG5jb25zdCB0b2RvRGVzY3JpcHRpb25FbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlLXRvZG8tZGVzY3JpcHRpb24nKTtcbmNvbnN0IHRvZG9EdWVEYXRlRWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZS10b2RvLWR1ZS1kYXRlJyk7XG5cbmNvbnN0IHNldHVwRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgdG9kb0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKCkgPT4ge1xuICAgICAgICBUb2RvSGFuZGxlci5jcmVhdGVUT0RPKFxuICAgICAgICAgICAgdG9kb05hbWVFbGUudmFsdWUsXG4gICAgICAgICAgICBwcm9qZWN0U2VsZWN0RWxlLnZhbHVlLFxuICAgICAgICAgICAgdG9kb1ByaW9yaXR5RWxlLnZhbHVlLFxuICAgICAgICAgICAgdG9kb0Rlc2NyaXB0aW9uRWxlLnZhbHVlLFxuICAgICAgICAgICAgdG9kb0R1ZURhdGVFbGUudmFsdWUsXG4gICAgICAgICk7XG4gICAgICAgIHRvZG9Gb3JtLnJlc2V0KCk7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgeyBzZXR1cEV2ZW50TGlzdGVuZXJzIH07IiwiY29uc3QgcHJvamVjdHMgPSBbXTtcblxuY29uc3QgZ2V0TmV3UHJvamVjdCA9IChuYW1lKSA9PiB7XG4gICAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IG5hbWU7XG4gICAgY29uc3QgVE9ET3MgPSBbXTtcbiAgICBjb25zdCBhZGRUT0RPID0gKHRvZG8pID0+IHtcbiAgICAgICAgVE9ET3MucHVzaCh0b2RvKTtcbiAgICB9O1xuICAgIGNvbnN0IHJlbW92ZVRPRE8gPSAoaW5kZXgpID0+IHtcbiAgICAgICAgVE9ET3NbaW5kZXhdID0gbnVsbDtcbiAgICB9O1xuICAgIGNvbnN0IGdldFRPRE9zID0gKCkgPT4gVE9ET3M7XG4gICAgY29uc3QgZ2V0TnVtT2ZUT0RPcyA9ICgpID0+IFRPRE9zLnJlZHVjZSgoYWNjLCBjdXJyKSA9PiB7XG4gICAgICAgIGlmIChjdXJyICE9IG51bGwpICsrYWNjO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIDApO1xuICAgIHJldHVybiB7IGdldE5hbWUsIGFkZFRPRE8sIGdldFRPRE9zLCByZW1vdmVUT0RPLCBnZXROdW1PZlRPRE9zIH07XG59O1xuXG5jb25zdCBnZXRQcm9qZWN0ID0gKGluZGV4KSA9PiB7XG4gICAgcmV0dXJuIHByb2plY3RzW2luZGV4XTtcbn07XG5cbmNvbnN0IGFkZFByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgIHByb2plY3RzLnB1c2gocHJvamVjdCk7XG59O1xuXG5jb25zdCBnZXROdW1PZlByb2plY3RzID0gKCkgPT4gcHJvamVjdHMubGVuZ3RoO1xuXG5leHBvcnQgeyBnZXROZXdQcm9qZWN0LCBnZXRQcm9qZWN0LCBhZGRQcm9qZWN0LCBnZXROdW1PZlByb2plY3RzIH07IiwiY29uc3QgZ2V0TmV3VE9ETyA9IChuYW1lLCBwcmlvcml0eSwgZGVzY3JpcHRpb24sIGR1ZURhdGUpID0+IHtcbiAgICBjb25zdCBnZXROYW1lID0gKCkgPT4gbmFtZTtcbiAgICBjb25zdCBnZXRQcmlvcml0eSA9ICgpID0+IHByaW9yaXR5O1xuICAgIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCkgPT4gZGVzY3JpcHRpb247XG4gICAgY29uc3QgZ2V0RHVlRGF0ZSA9ICgpID0+IGR1ZURhdGU7XG4gICAgcmV0dXJuIHsgZ2V0TmFtZSwgZ2V0UHJpb3JpdHksIGdldERlc2NyaXB0aW9uLCBnZXREdWVEYXRlIH07XG59O1xuXG5leHBvcnQgeyBnZXROZXdUT0RPIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgKiBhcyBNb2RhbEhhbmRsZXIgZnJvbSAnLi9oYW5kbGVycy9tb2RhbCc7XG5pbXBvcnQgKiBhcyBQcm9qZWN0RnJvbUhhbmRsZXIgZnJvbSAnLi9oYW5kbGVycy9wcm9qZWN0Rm9ybSc7XG5pbXBvcnQgKiBhcyBUb2RvRm9ybUhhbmRsZXIgZnJvbSAnLi9oYW5kbGVycy90b2RvRm9ybSc7XG5pbXBvcnQgKiBhcyBQcm9qZWN0SGFuZGxlciBmcm9tICcuL2hhbmRsZXJzL3Byb2plY3QnO1xuaW1wb3J0ICogYXMgQ29udGFpbmVyQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9jb250YWluZXInO1xuXG5Nb2RhbEhhbmRsZXIuc2V0dXBFdmVudExpc3RlbmVycygpO1xuUHJvamVjdEZyb21IYW5kbGVyLnNldHVwRXZlbnRMaXN0ZW5lcnMoKTtcblRvZG9Gb3JtSGFuZGxlci5zZXR1cEV2ZW50TGlzdGVuZXJzKCk7XG5Qcm9qZWN0SGFuZGxlci5zZXR1cEV2ZW50TGlzdGVuZXJzKCk7XG5Db250YWluZXJDb21wb25lbnQuY2hhbmdlQ29udGFpbmVyVG8oMCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9