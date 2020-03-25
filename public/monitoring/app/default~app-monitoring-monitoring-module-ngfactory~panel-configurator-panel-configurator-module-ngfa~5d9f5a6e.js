(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-monitoring-monitoring-module-ngfactory~panel-configurator-panel-configurator-module-ngfa~5d9f5a6e"],{

/***/ "./node_modules/uuid/index.js":
/*!************************************!*\
  !*** ./node_modules/uuid/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var v1 = __webpack_require__(/*! ./v1 */ "./node_modules/uuid/v1.js");
var v4 = __webpack_require__(/*! ./v4 */ "./node_modules/uuid/v4.js");

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;


/***/ }),

/***/ "./node_modules/uuid/lib/bytesToUuid.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/bytesToUuid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([bth[buf[i++]], bth[buf[i++]], 
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]]]).join('');
}

module.exports = bytesToUuid;


/***/ }),

/***/ "./node_modules/uuid/lib/rng-browser.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/rng-browser.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),

/***/ "./node_modules/uuid/v1.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v1.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "./node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "./node_modules/uuid/lib/bytesToUuid.js");

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/broofa/node-uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [
        seedBytes[0] | 0x01,
        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
      ];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;


/***/ }),

/***/ "./node_modules/uuid/v4.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v4.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "./node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "./node_modules/uuid/lib/bytesToUuid.js");

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),

/***/ "./src/app/core/services/shortcut.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/services/shortcut.service.ts ***!
  \***************************************************/
/*! exports provided: ShortcutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShortcutService", function() { return ShortcutService; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};




var ShortcutService = /** @class */ (function () {
    function ShortcutService(document, eventManager) {
        this.document = document;
        this.eventManager = eventManager;
        /*
        * This is a Service that offers to bind a keyboard Shortcut.
        * It also keeps track of subscribe shortcuts so the user can see the
        * shortcuts hin can use
        */
        this.default = {
            element: this.document
        };
        this.keyBindings = [];
    }
    /* Method to get an Observable that fires whenever a desired key is pressed
    * @param binding that contains the Element of choice (mostly document anyway) the key and some metadata
    * @returns observable that fires whenever a key is pressed
    */
    ShortcutService.prototype.bindShortcut = function (binding) {
        var _this = this;
        var mBinding = __assign({}, this.default, binding);
        var event = "keydown." + mBinding.key;
        // Set Description for Shortcut overview
        var kbDescription = __assign({}, binding, { element: undefined });
        this.keyBindings = this.keyBindings.concat([kbDescription]);
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            var callback = function (e) {
                // e.preventDefault();
                observer.next(e);
            };
            var listenReference = _this.eventManager.addEventListener(mBinding.element, event, callback);
            return function () {
                // kills the actionlistener
                listenReference();
                _this.delteDescription(kbDescription);
            };
        });
    };
    // private Methode that removes shortcut when the observable is unsubscribed
    ShortcutService.prototype.delteDescription = function (description) {
        this.keyBindings = this.keyBindings.filter(function (k) { return k != description; });
    };
    ShortcutService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_2__["defineInjectable"]({ factory: function ShortcutService_Factory() { return new ShortcutService(_angular_core__WEBPACK_IMPORTED_MODULE_2__["inject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["inject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["EventManager"])); }, token: ShortcutService, providedIn: "root" });
    return ShortcutService;
}());



/***/ }),

/***/ "./src/app/monitoring/panel-configurator/store/actions/panel-increation.action.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/monitoring/panel-configurator/store/actions/panel-increation.action.ts ***!
  \****************************************************************************************/
/*! exports provided: ADD_CHART_TO_PANEL, DELETE_CHART_IN_PANEL, SET_NAME, SET_DESCRIPTION, SET_AUTH_SCOPE, FLUSH_STATE, SET_STATE_FOR_UPDATE, AddChartToPanel, DeleteChartInPanel, SetName, SetDescription, FlushState, SetAuthScope, SetStateForUpdate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_CHART_TO_PANEL", function() { return ADD_CHART_TO_PANEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_CHART_IN_PANEL", function() { return DELETE_CHART_IN_PANEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_NAME", function() { return SET_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_DESCRIPTION", function() { return SET_DESCRIPTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_AUTH_SCOPE", function() { return SET_AUTH_SCOPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FLUSH_STATE", function() { return FLUSH_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_STATE_FOR_UPDATE", function() { return SET_STATE_FOR_UPDATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddChartToPanel", function() { return AddChartToPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteChartInPanel", function() { return DeleteChartInPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetName", function() { return SetName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetDescription", function() { return SetDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlushState", function() { return FlushState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetAuthScope", function() { return SetAuthScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetStateForUpdate", function() { return SetStateForUpdate; });
var ADD_CHART_TO_PANEL = '[Panel Configurator] Add Chart to Panel';
var DELETE_CHART_IN_PANEL = '[Panel Configurator] Delete Chart in Panel';
var SET_NAME = '[Panel Configurator] Set Name';
var SET_DESCRIPTION = '[Panel Configurator] Set Description';
var SET_AUTH_SCOPE = '[Panel Configurator] Set AuthScope';
var FLUSH_STATE = '[Panel Configurator] Flush State';
var SET_STATE_FOR_UPDATE = '[Panel Configurator] Set State for Update';
var AddChartToPanel = /** @class */ (function () {
    function AddChartToPanel(payload) {
        this.payload = payload;
        this.type = ADD_CHART_TO_PANEL;
    }
    return AddChartToPanel;
}());

var DeleteChartInPanel = /** @class */ (function () {
    function DeleteChartInPanel(payload) {
        this.payload = payload;
        this.type = DELETE_CHART_IN_PANEL;
    }
    return DeleteChartInPanel;
}());

var SetName = /** @class */ (function () {
    function SetName(payload) {
        this.payload = payload;
        this.type = SET_NAME;
    }
    return SetName;
}());

var SetDescription = /** @class */ (function () {
    function SetDescription(payload) {
        this.payload = payload;
        this.type = SET_DESCRIPTION;
    }
    return SetDescription;
}());

var FlushState = /** @class */ (function () {
    function FlushState() {
        this.type = FLUSH_STATE;
    }
    return FlushState;
}());

var SetAuthScope = /** @class */ (function () {
    function SetAuthScope(payload) {
        this.payload = payload;
        this.type = SET_AUTH_SCOPE;
    }
    return SetAuthScope;
}());

var SetStateForUpdate = /** @class */ (function () {
    function SetStateForUpdate(payload) {
        this.payload = payload;
        this.type = SET_STATE_FOR_UPDATE;
    }
    return SetStateForUpdate;
}());



/***/ }),

/***/ "./src/app/monitoring/panel-configurator/store/reducers/index.ts":
/*!***********************************************************************!*\
  !*** ./src/app/monitoring/panel-configurator/store/reducers/index.ts ***!
  \***********************************************************************/
/*! exports provided: reducers, getPanelState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPanelState", function() { return getPanelState; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _panel_increation_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./panel-increation.reducer */ "./src/app/monitoring/panel-configurator/store/reducers/panel-increation.reducer.ts");


var reducers = {
    panelIncreation: _panel_increation_reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"]
};
var getPanelState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('panel');


/***/ }),

/***/ "./src/app/monitoring/panel-configurator/store/reducers/panel-increation.reducer.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/monitoring/panel-configurator/store/reducers/panel-increation.reducer.ts ***!
  \******************************************************************************************/
/*! exports provided: initialState, reducer, getCharts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCharts", function() { return getCharts; });
/* harmony import */ var _actions_panel_increation_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/panel-increation.action */ "./src/app/monitoring/panel-configurator/store/actions/panel-increation.action.ts");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_1__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


var initialState = {
    charts: {},
    name: '',
    description: '',
    authScope: {},
    onEdit: false
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    var _a;
    switch (action.type) {
        case _actions_panel_increation_action__WEBPACK_IMPORTED_MODULE_0__["ADD_CHART_TO_PANEL"]: {
            return __assign({}, state, { charts: __assign({}, state.charts, (_a = {}, _a[uuid__WEBPACK_IMPORTED_MODULE_1__["v4"]()] = { oreder: undefined, chart: action.payload, size: undefined }, _a)) });
        }
        case _actions_panel_increation_action__WEBPACK_IMPORTED_MODULE_0__["DELETE_CHART_IN_PANEL"]: {
            var charts = __assign({}, state.charts);
            delete charts[action.payload];
            return __assign({}, state, { charts: charts });
        }
        case _actions_panel_increation_action__WEBPACK_IMPORTED_MODULE_0__["SET_NAME"]: {
            return __assign({}, state, { name: action.payload });
        }
        case _actions_panel_increation_action__WEBPACK_IMPORTED_MODULE_0__["SET_DESCRIPTION"]: {
            return __assign({}, state, { description: action.payload });
        }
        case _actions_panel_increation_action__WEBPACK_IMPORTED_MODULE_0__["SET_AUTH_SCOPE"]: {
            return __assign({}, state, { authScope: action.payload });
        }
        case _actions_panel_increation_action__WEBPACK_IMPORTED_MODULE_0__["FLUSH_STATE"]: {
            return initialState;
        }
        case _actions_panel_increation_action__WEBPACK_IMPORTED_MODULE_0__["SET_STATE_FOR_UPDATE"]: {
            var _b = action.payload, id = _b.id, authScope = _b.authScope, charts = _b.charts, name_1 = _b.name, description = _b.description;
            // deconstruct from ChartsInPanel Datatype to normal Chart Datatype
            var newCharts = charts.reduce(function (prev, curr, index, arr) {
                var _a, _b;
                if (index == 0) {
                    return _a = {}, _a[uuid__WEBPACK_IMPORTED_MODULE_1__["v4"]()] = curr, _a;
                }
                return __assign({}, prev, (_b = {}, _b[uuid__WEBPACK_IMPORTED_MODULE_1__["v4"]()] = curr, _b));
            }, {});
            return {
                id: id,
                authScope: authScope,
                charts: newCharts,
                name: name_1,
                description: description,
                onEdit: true
            };
        }
    }
    return state;
}
var getCharts = function (state) { return state.charts; };


/***/ }),

/***/ "./src/app/monitoring/panel-configurator/store/selectors/panel-increation.selector.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/monitoring/panel-configurator/store/selectors/panel-increation.selector.ts ***!
  \********************************************************************************************/
/*! exports provided: getPanelIncreationState, getPanelIncreationCharts, getPanelNameAndDescription, buildFunctionalPanel, panelReadyForBuild, getPanelOnEdit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPanelIncreationState", function() { return getPanelIncreationState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPanelIncreationCharts", function() { return getPanelIncreationCharts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPanelNameAndDescription", function() { return getPanelNameAndDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildFunctionalPanel", function() { return buildFunctionalPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "panelReadyForBuild", function() { return panelReadyForBuild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPanelOnEdit", function() { return getPanelOnEdit; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/index */ "./src/app/monitoring/panel-configurator/store/reducers/index.ts");
/* harmony import */ var _reducers_panel_increation_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/panel-increation.reducer */ "./src/app/monitoring/panel-configurator/store/reducers/panel-increation.reducer.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



var getPanelIncreationState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_reducers_index__WEBPACK_IMPORTED_MODULE_1__["getPanelState"], function (state) { return state.panelIncreation; });
var getPanelIncreationCharts = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getPanelIncreationState, _reducers_panel_increation_reducer__WEBPACK_IMPORTED_MODULE_2__["getCharts"]);
var getPanelNameAndDescription = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getPanelIncreationState, function (state) {
    return { name: state.name, description: state.description };
});
var buildFunctionalPanel = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getPanelIncreationState, function (state) {
    state.charts;
    var charts = constructChartInPanel(deconstructCharts(state.charts));
    var panel = {
        authScope: state.authScope,
        charts: charts,
        name: state.name,
        description: state.description
    };
    panel = state.id ? __assign({}, panel, { id: state.id }) : panel;
    return panel;
});
var panelReadyForBuild = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getPanelIncreationState, function (state) {
    return state.authScope.orgId &&
        state.authScope.spaceId &&
        !!state.name;
});
var getPanelOnEdit = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getPanelIncreationState, function (state) { return state.onEdit; });
function deconstructCharts(obj) {
    return Array.from(new Map(Object.entries(obj))[Symbol.iterator]()).map(function (k) { return k[1]; });
}
function constructChartInPanel(arr) {
    return arr.map(function (chart, order) {
        var size = chart.size ? chart.size : 100;
        return { order: order, chart: chart.chart, size: size };
    });
}


/***/ }),

/***/ "./src/app/monitoring/shared/store/selectors/panel.selector.ts":
/*!*********************************************************************!*\
  !*** ./src/app/monitoring/shared/store/selectors/panel.selector.ts ***!
  \*********************************************************************/
/*! exports provided: getPanelState, getAllPanels, getPanelById, getPanelViewModelById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPanelState", function() { return getPanelState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllPanels", function() { return getAllPanels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPanelById", function() { return getPanelById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPanelViewModelById", function() { return getPanelViewModelById; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/index */ "./src/app/monitoring/shared/store/reducers/index.ts");
/* harmony import */ var _reducers_panel_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/panel.reducer */ "./src/app/monitoring/shared/store/reducers/panel.reducer.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



var getPanelState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_reducers_index__WEBPACK_IMPORTED_MODULE_1__["getSharedModuleState"], function (state) {
    return state.panels;
});
var getAllPanels = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getPanelState, _reducers_panel_reducer__WEBPACK_IMPORTED_MODULE_2__["getPanels"]);
var getPanelById = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAllPanels, function (panels, id) {
    return panels.filter(function (k) { return k.id == id; })[0];
});
var getPanelViewModelById = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAllPanels, function (panels, id) {
    var panel = panels.filter(function (k) { return k.id == id; })[0];
    if (!panel || !panel.charts) {
        return {};
    }
    var charts = panel.charts.reduce(function (prev, next, i, arr) {
        if (i == 0) {
            return [[next]];
        }
        else {
            // The Max Size per Row ist 12, so we create a new line wenever the line is filled
            var arr_1 = prev[prev.length - 1].slice();
            var size = arr_1.slice().reduce(function (prev, curr) { return (prev += curr.size); }, 0);
            if (size + next.size > 12) {
                return prev.concat([[next]]);
            }
            else {
                return prev.splice(prev.length - 2).concat([arr_1.concat([next])]);
            }
        }
    }, [[]]);
    return __assign({}, panel, { charts: charts });
});


/***/ })

}]);
//# sourceMappingURL=default~app-monitoring-monitoring-module-ngfactory~panel-configurator-panel-configurator-module-ngfa~5d9f5a6e.js.map