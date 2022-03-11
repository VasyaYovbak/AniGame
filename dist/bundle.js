/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/authentication/logout.js":
/*!******************************************!*\
  !*** ./scripts/authentication/logout.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cookieService_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cookieService.mjs */ "./scripts/cookieService.mjs");


function logout() {
  fetch('http://127.0.0.1:2012/logout', {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': "Bearer ".concat(_cookieService_mjs__WEBPACK_IMPORTED_MODULE_0__.getAuthToken())
    },
    method: "POST"
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    _cookieService_mjs__WEBPACK_IMPORTED_MODULE_0__.clearCookie('access_token');
    window.location.replace('/AniGame/login.html');
  });
}

document.querySelector('.nav-elements').querySelector('#logout').addEventListener('click', logout);

/***/ }),

/***/ "./scripts/navigation.js":
/*!*******************************!*\
  !*** ./scripts/navigation.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cookieService_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cookieService.mjs */ "./scripts/cookieService.mjs");


if (_cookieService_mjs__WEBPACK_IMPORTED_MODULE_0__.getAuthToken() === null) {
  document.querySelector('#logout').setAttribute('hidden', true);
} else {
  document.querySelector('#login').setAttribute('hidden', true);
}

/***/ }),

/***/ "./style.scss":
/*!********************!*\
  !*** ./style.scss ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./variables.scss":
/*!************************!*\
  !*** ./variables.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./scripts/cookieService.mjs":
/*!***********************************!*\
  !*** ./scripts/cookieService.mjs ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearCookie": () => (/* binding */ clearCookie),
/* harmony export */   "getAuthToken": () => (/* binding */ getAuthToken),
/* harmony export */   "getCookie": () => (/* binding */ getCookie),
/* harmony export */   "setCookie": () => (/* binding */ setCookie)
/* harmony export */ });
function setCookie(name, value, minutes) {
  var expires = '';

  if (minutes) {
    var date = new Date();
    date.setTime(date.getTime() + minutes * 60 * 1000);
    expires = '; expires=' + date.toUTCString();
  }

  document.cookie = name + '=' + (value || '') + expires + '; path=/';
}

function getCookie(name) {
  var nameEQ = name + '=';
  var ca = document.cookie.split(';');

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];

    while (c.charAt(0) === ' ') {
      c = c.substring(1, c.length);
    }

    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }

  return null;
}

function clearCookie(name) {
  var date = new Date();
  date.setTime(date.getTime() + 1);
  var expires = '; expires=' + date.toUTCString();
  document.cookie = name + '=' + '' + expires + '; path=/';
}

function getAuthToken() {
  return getCookie('access_token');
}



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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cookieService_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cookieService.mjs */ "./scripts/cookieService.mjs");
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation */ "./scripts/navigation.js");
/* harmony import */ var _authentication_logout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication/logout */ "./scripts/authentication/logout.js");
/* harmony import */ var _variables_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../variables.scss */ "./variables.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../style.scss */ "./style.scss");





})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map