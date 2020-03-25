(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-monitoring-chart-configurator-chart-configurator-module-ngfactory~app-monitoring-monitor~6910fe15"],{

/***/ "./node_modules/@angular/cdk/esm5/bidi.es5.js":
/*!****************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/bidi.es5.js ***!
  \****************************************************/
/*! exports provided: Directionality, DIR_DOCUMENT, Dir, BidiModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Directionality", function() { return Directionality; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIR_DOCUMENT", function() { return DIR_DOCUMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dir", function() { return Dir; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BidiModule", function() { return BidiModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return DIR_DOCUMENT_FACTORY; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token used to inject the document into Directionality.
 * This is used so that the value can be faked in tests.
 *
 * We can't use the real document in tests because changing the real `dir` causes geometry-based
 * tests in Safari to fail.
 *
 * We also can't re-provide the DOCUMENT token from platform-brower because the unit tests
 * themselves use things like `querySelector` in test code.
 *
 * This token is defined in a separate file from Directionality as a workaround for
 * https://github.com/angular/angular/issues/22559
 *
 * \@docs-private
 * @type {?}
 */
var DIR_DOCUMENT = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('cdk-dir-doc', {
    providedIn: 'root',
    factory: DIR_DOCUMENT_FACTORY,
});
/**
 * \@docs-private
 * @return {?}
 */
function DIR_DOCUMENT_FACTORY() {
    return Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The directionality (LTR / RTL) context for the application (or a subtree of it).
 * Exposes the current direction and a stream of direction changes.
 */
var Directionality = /** @class */ (function () {
    function Directionality(_document) {
        /**
         * The current 'ltr' or 'rtl' value.
         */
        this.value = 'ltr';
        /**
         * Stream that emits whenever the 'ltr' / 'rtl' state changes.
         */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        if (_document) {
            // TODO: handle 'auto' value -
            // We still need to account for dir="auto".
            // It looks like HTMLElemenet.dir is also "auto" when that's set to the attribute,
            // but getComputedStyle return either "ltr" or "rtl". avoiding getComputedStyle for now
            /** @type {?} */
            var bodyDir = _document.body ? _document.body.dir : null;
            /** @type {?} */
            var htmlDir = _document.documentElement ? _document.documentElement.dir : null;
            /** @type {?} */
            var value = bodyDir || htmlDir;
            this.value = (value === 'ltr' || value === 'rtl') ? value : 'ltr';
        }
    }
    /**
     * @return {?}
     */
    Directionality.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.change.complete();
    };
    Directionality.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    Directionality.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [DIR_DOCUMENT,] }] }
    ]; };
    /** @nocollapse */ Directionality.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"])({ factory: function Directionality_Factory() { return new Directionality(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(DIR_DOCUMENT, 8)); }, token: Directionality, providedIn: "root" });
    return Directionality;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Directive to listen for changes of direction of part of the DOM.
 *
 * Provides itself as Directionality such that descendant directives only need to ever inject
 * Directionality to get the closest direction.
 */
var Dir = /** @class */ (function () {
    function Dir() {
        /**
         * Normalized direction that accounts for invalid/unsupported values.
         */
        this._dir = 'ltr';
        /**
         * Whether the `value` has been set to its initial value.
         */
        this._isInitialized = false;
        /**
         * Event emitted when the direction changes.
         */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(Dir.prototype, "dir", {
        /** @docs-private */
        get: /**
         * \@docs-private
         * @return {?}
         */
        function () { return this._dir; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var old = this._dir;
            /** @type {?} */
            var normalizedValue = value ? value.toLowerCase() : value;
            this._rawDir = value;
            this._dir = (normalizedValue === 'ltr' || normalizedValue === 'rtl') ? normalizedValue : 'ltr';
            if (old !== this._dir && this._isInitialized) {
                this.change.emit(this._dir);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dir.prototype, "value", {
        /** Current layout direction of the element. */
        get: /**
         * Current layout direction of the element.
         * @return {?}
         */
        function () { return this.dir; },
        enumerable: true,
        configurable: true
    });
    /** Initialize once default value has been set. */
    /**
     * Initialize once default value has been set.
     * @return {?}
     */
    Dir.prototype.ngAfterContentInit = /**
     * Initialize once default value has been set.
     * @return {?}
     */
    function () {
        this._isInitialized = true;
    };
    /**
     * @return {?}
     */
    Dir.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.change.complete();
    };
    Dir.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[dir]',
                    providers: [{ provide: Directionality, useExisting: Dir }],
                    host: { '[attr.dir]': '_rawDir' },
                    exportAs: 'dir',
                },] },
    ];
    Dir.propDecorators = {
        change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['dirChange',] }],
        dir: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    return Dir;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BidiModule = /** @class */ (function () {
    function BidiModule() {
    }
    BidiModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    exports: [Dir],
                    declarations: [Dir],
                },] },
    ];
    return BidiModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=bidi.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/cdk/esm5/coercion.es5.js":
/*!********************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/coercion.es5.js ***!
  \********************************************************/
/*! exports provided: coerceBooleanProperty, coerceNumberProperty, _isNumberValue, coerceArray, coerceCssPixelValue, coerceElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceBooleanProperty", function() { return coerceBooleanProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceNumberProperty", function() { return coerceNumberProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_isNumberValue", function() { return _isNumberValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceArray", function() { return coerceArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceCssPixelValue", function() { return coerceCssPixelValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceElement", function() { return coerceElement; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Coerces a data-bound value (typically a string) to a boolean.
 * @param {?} value
 * @return {?}
 */
function coerceBooleanProperty(value) {
    return value != null && "" + value !== 'false';
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @param {?} value
 * @param {?=} fallbackValue
 * @return {?}
 */
function coerceNumberProperty(value, fallbackValue) {
    if (fallbackValue === void 0) { fallbackValue = 0; }
    return _isNumberValue(value) ? Number(value) : fallbackValue;
}
/**
 * Whether the provided value is considered a number.
 * \@docs-private
 * @param {?} value
 * @return {?}
 */
function _isNumberValue(value) {
    // parseFloat(value) handles most of the cases we're interested in (it treats null, empty string,
    // and other non-number values as NaN, where Number just uses 0) but it considers the string
    // '123hello' to be a valid number. Therefore we also check if Number(value) is NaN.
    return !isNaN(parseFloat((/** @type {?} */ (value)))) && !isNaN(Number(value));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Wraps the provided value in an array, unless the provided value is an array.
 * @template T
 * @param {?} value
 * @return {?}
 */
function coerceArray(value) {
    return Array.isArray(value) ? value : [value];
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Coerces a value to a CSS pixel value.
 * @param {?} value
 * @return {?}
 */
function coerceCssPixelValue(value) {
    if (value == null) {
        return '';
    }
    return typeof value === 'string' ? value : value + "px";
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Coerces an ElementRef or an Element into an element.
 * Useful for APIs that can accept either a ref or the native element itself.
 * @template T
 * @param {?} elementOrRef
 * @return {?}
 */
function coerceElement(elementOrRef) {
    return elementOrRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] ? elementOrRef.nativeElement : elementOrRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=coercion.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/cdk/esm5/collections.es5.js":
/*!***********************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/collections.es5.js ***!
  \***********************************************************/
/*! exports provided: UniqueSelectionDispatcher, ArrayDataSource, isDataSource, DataSource, getMultipleValuesInSingleSelectionError, SelectionModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueSelectionDispatcher", function() { return UniqueSelectionDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayDataSource", function() { return ArrayDataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDataSource", function() { return isDataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSource", function() { return DataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMultipleValuesInSingleSelectionError", function() { return getMultipleValuesInSingleSelectionError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionModel", function() { return SelectionModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @abstract
 * @template T
 */
var  /**
 * @abstract
 * @template T
 */
DataSource = /** @class */ (function () {
    function DataSource() {
    }
    return DataSource;
}());
/**
 * Checks whether an object is a data source.
 * @param {?} value
 * @return {?}
 */
function isDataSource(value) {
    // Check if the value is a DataSource by observing if it has a connect function. Cannot
    // be checked as an `instanceof DataSource` since people could create their own sources
    // that match the interface, but don't extend DataSource.
    return value && typeof value.connect === 'function';
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * DataSource wrapper for a native array.
 * @template T
 */
var  /**
 * DataSource wrapper for a native array.
 * @template T
 */
ArrayDataSource = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ArrayDataSource, _super);
    function ArrayDataSource(_data) {
        var _this = _super.call(this) || this;
        _this._data = _data;
        return _this;
    }
    /**
     * @return {?}
     */
    ArrayDataSource.prototype.connect = /**
     * @return {?}
     */
    function () {
        return this._data instanceof rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"] ? this._data : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this._data);
    };
    /**
     * @return {?}
     */
    ArrayDataSource.prototype.disconnect = /**
     * @return {?}
     */
    function () { };
    return ArrayDataSource;
}(DataSource));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Class to be used to power selecting one or more options from a list.
 * @template T
 */
var  /**
 * Class to be used to power selecting one or more options from a list.
 * @template T
 */
SelectionModel = /** @class */ (function () {
    function SelectionModel(_multiple, initiallySelectedValues, _emitChanges) {
        if (_multiple === void 0) { _multiple = false; }
        if (_emitChanges === void 0) { _emitChanges = true; }
        var _this = this;
        this._multiple = _multiple;
        this._emitChanges = _emitChanges;
        /**
         * Currently-selected values.
         */
        this._selection = new Set();
        /**
         * Keeps track of the deselected options that haven't been emitted by the change event.
         */
        this._deselectedToEmit = [];
        /**
         * Keeps track of the selected options that haven't been emitted by the change event.
         */
        this._selectedToEmit = [];
        /**
         * Event emitted when the value has changed.
         */
        this.changed = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        /**
         * Event emitted when the value has changed.
         * @deprecated Use `changed` instead.
         * \@breaking-change 8.0.0 To be changed to `changed`
         */
        this.onChange = this.changed;
        if (initiallySelectedValues && initiallySelectedValues.length) {
            if (_multiple) {
                initiallySelectedValues.forEach(function (value) { return _this._markSelected(value); });
            }
            else {
                this._markSelected(initiallySelectedValues[0]);
            }
            // Clear the array in order to avoid firing the change event for preselected values.
            this._selectedToEmit.length = 0;
        }
    }
    Object.defineProperty(SelectionModel.prototype, "selected", {
        /** Selected values. */
        get: /**
         * Selected values.
         * @return {?}
         */
        function () {
            if (!this._selected) {
                this._selected = Array.from(this._selection.values());
            }
            return this._selected;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Selects a value or an array of values.
     */
    /**
     * Selects a value or an array of values.
     * @param {...?} values
     * @return {?}
     */
    SelectionModel.prototype.select = /**
     * Selects a value or an array of values.
     * @param {...?} values
     * @return {?}
     */
    function () {
        var _this = this;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        this._verifyValueAssignment(values);
        values.forEach(function (value) { return _this._markSelected(value); });
        this._emitChangeEvent();
    };
    /**
     * Deselects a value or an array of values.
     */
    /**
     * Deselects a value or an array of values.
     * @param {...?} values
     * @return {?}
     */
    SelectionModel.prototype.deselect = /**
     * Deselects a value or an array of values.
     * @param {...?} values
     * @return {?}
     */
    function () {
        var _this = this;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        this._verifyValueAssignment(values);
        values.forEach(function (value) { return _this._unmarkSelected(value); });
        this._emitChangeEvent();
    };
    /**
     * Toggles a value between selected and deselected.
     */
    /**
     * Toggles a value between selected and deselected.
     * @param {?} value
     * @return {?}
     */
    SelectionModel.prototype.toggle = /**
     * Toggles a value between selected and deselected.
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.isSelected(value) ? this.deselect(value) : this.select(value);
    };
    /**
     * Clears all of the selected values.
     */
    /**
     * Clears all of the selected values.
     * @return {?}
     */
    SelectionModel.prototype.clear = /**
     * Clears all of the selected values.
     * @return {?}
     */
    function () {
        this._unmarkAll();
        this._emitChangeEvent();
    };
    /**
     * Determines whether a value is selected.
     */
    /**
     * Determines whether a value is selected.
     * @param {?} value
     * @return {?}
     */
    SelectionModel.prototype.isSelected = /**
     * Determines whether a value is selected.
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return this._selection.has(value);
    };
    /**
     * Determines whether the model does not have a value.
     */
    /**
     * Determines whether the model does not have a value.
     * @return {?}
     */
    SelectionModel.prototype.isEmpty = /**
     * Determines whether the model does not have a value.
     * @return {?}
     */
    function () {
        return this._selection.size === 0;
    };
    /**
     * Determines whether the model has a value.
     */
    /**
     * Determines whether the model has a value.
     * @return {?}
     */
    SelectionModel.prototype.hasValue = /**
     * Determines whether the model has a value.
     * @return {?}
     */
    function () {
        return !this.isEmpty();
    };
    /**
     * Sorts the selected values based on a predicate function.
     */
    /**
     * Sorts the selected values based on a predicate function.
     * @param {?=} predicate
     * @return {?}
     */
    SelectionModel.prototype.sort = /**
     * Sorts the selected values based on a predicate function.
     * @param {?=} predicate
     * @return {?}
     */
    function (predicate) {
        if (this._multiple && this.selected) {
            (/** @type {?} */ (this._selected)).sort(predicate);
        }
    };
    /**
     * Gets whether multiple values can be selected.
     */
    /**
     * Gets whether multiple values can be selected.
     * @return {?}
     */
    SelectionModel.prototype.isMultipleSelection = /**
     * Gets whether multiple values can be selected.
     * @return {?}
     */
    function () {
        return this._multiple;
    };
    /** Emits a change event and clears the records of selected and deselected values. */
    /**
     * Emits a change event and clears the records of selected and deselected values.
     * @private
     * @return {?}
     */
    SelectionModel.prototype._emitChangeEvent = /**
     * Emits a change event and clears the records of selected and deselected values.
     * @private
     * @return {?}
     */
    function () {
        // Clear the selected values so they can be re-cached.
        this._selected = null;
        if (this._selectedToEmit.length || this._deselectedToEmit.length) {
            this.changed.next({
                source: this,
                added: this._selectedToEmit,
                removed: this._deselectedToEmit
            });
            this._deselectedToEmit = [];
            this._selectedToEmit = [];
        }
    };
    /** Selects a value. */
    /**
     * Selects a value.
     * @private
     * @param {?} value
     * @return {?}
     */
    SelectionModel.prototype._markSelected = /**
     * Selects a value.
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!this.isSelected(value)) {
            if (!this._multiple) {
                this._unmarkAll();
            }
            this._selection.add(value);
            if (this._emitChanges) {
                this._selectedToEmit.push(value);
            }
        }
    };
    /** Deselects a value. */
    /**
     * Deselects a value.
     * @private
     * @param {?} value
     * @return {?}
     */
    SelectionModel.prototype._unmarkSelected = /**
     * Deselects a value.
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.isSelected(value)) {
            this._selection.delete(value);
            if (this._emitChanges) {
                this._deselectedToEmit.push(value);
            }
        }
    };
    /** Clears out the selected values. */
    /**
     * Clears out the selected values.
     * @private
     * @return {?}
     */
    SelectionModel.prototype._unmarkAll = /**
     * Clears out the selected values.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.isEmpty()) {
            this._selection.forEach(function (value) { return _this._unmarkSelected(value); });
        }
    };
    /**
     * Verifies the value assignment and throws an error if the specified value array is
     * including multiple values while the selection model is not supporting multiple values.
     */
    /**
     * Verifies the value assignment and throws an error if the specified value array is
     * including multiple values while the selection model is not supporting multiple values.
     * @private
     * @param {?} values
     * @return {?}
     */
    SelectionModel.prototype._verifyValueAssignment = /**
     * Verifies the value assignment and throws an error if the specified value array is
     * including multiple values while the selection model is not supporting multiple values.
     * @private
     * @param {?} values
     * @return {?}
     */
    function (values) {
        if (values.length > 1 && !this._multiple) {
            throw getMultipleValuesInSingleSelectionError();
        }
    };
    return SelectionModel;
}());
/**
 * Returns an error that reports that multiple values are passed into a selection model
 * with a single value.
 * \@docs-private
 * @return {?}
 */
function getMultipleValuesInSingleSelectionError() {
    return Error('Cannot pass multiple values into SelectionModel with single-value mode.');
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Class to coordinate unique selection based on name.
 * Intended to be consumed as an Angular service.
 * This service is needed because native radio change events are only fired on the item currently
 * being selected, and we still need to uncheck the previous selection.
 *
 * This service does not *store* any IDs and names because they may change at any time, so it is
 * less error-prone if they are simply passed through when the events occur.
 */
var UniqueSelectionDispatcher = /** @class */ (function () {
    function UniqueSelectionDispatcher() {
        this._listeners = [];
    }
    /**
     * Notify other items that selection for the given name has been set.
     * @param id ID of the item.
     * @param name Name of the item.
     */
    /**
     * Notify other items that selection for the given name has been set.
     * @param {?} id ID of the item.
     * @param {?} name Name of the item.
     * @return {?}
     */
    UniqueSelectionDispatcher.prototype.notify = /**
     * Notify other items that selection for the given name has been set.
     * @param {?} id ID of the item.
     * @param {?} name Name of the item.
     * @return {?}
     */
    function (id, name) {
        for (var _i = 0, _a = this._listeners; _i < _a.length; _i++) {
            var listener = _a[_i];
            listener(id, name);
        }
    };
    /**
     * Listen for future changes to item selection.
     * @return Function used to deregister listener
     */
    /**
     * Listen for future changes to item selection.
     * @param {?} listener
     * @return {?} Function used to deregister listener
     */
    UniqueSelectionDispatcher.prototype.listen = /**
     * Listen for future changes to item selection.
     * @param {?} listener
     * @return {?} Function used to deregister listener
     */
    function (listener) {
        var _this = this;
        this._listeners.push(listener);
        return function () {
            _this._listeners = _this._listeners.filter(function (registered) {
                return listener !== registered;
            });
        };
    };
    /**
     * @return {?}
     */
    UniqueSelectionDispatcher.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._listeners = [];
    };
    UniqueSelectionDispatcher.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */ UniqueSelectionDispatcher.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["defineInjectable"])({ factory: function UniqueSelectionDispatcher_Factory() { return new UniqueSelectionDispatcher(); }, token: UniqueSelectionDispatcher, providedIn: "root" });
    return UniqueSelectionDispatcher;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=collections.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js":
/*!*********************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/drag-drop.es5.js ***!
  \*********************************************************/
/*! exports provided: DragDrop, DragRef, DropListRef, CdkDropList, CDK_DROP_LIST, CDK_DROP_LIST_CONTAINER, moveItemInArray, transferArrayItem, copyArrayItem, DragDropModule, DragDropRegistry, CdkDropListGroup, CDK_DRAG_CONFIG_FACTORY, CDK_DRAG_CONFIG, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDrop", function() { return DragDrop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragRef", function() { return DragRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropListRef", function() { return DropListRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDropList", function() { return CdkDropList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DROP_LIST", function() { return CDK_DROP_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DROP_LIST_CONTAINER", function() { return CDK_DROP_LIST_CONTAINER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveItemInArray", function() { return moveItemInArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transferArrayItem", function() { return transferArrayItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyArrayItem", function() { return copyArrayItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropModule", function() { return DragDropModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropRegistry", function() { return DragDropRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDropListGroup", function() { return CdkDropListGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DRAG_CONFIG_FACTORY", function() { return CDK_DRAG_CONFIG_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DRAG_CONFIG", function() { return CDK_DRAG_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDrag", function() { return CdkDrag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDragHandle", function() { return CdkDragHandle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDragPreview", function() { return CdkDragPreview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDragPlaceholder", function() { return CdkDragPlaceholder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return CDK_DRAG_PARENT; });
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */









/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Shallow-extends a stylesheet object with another stylesheet object.
 * \@docs-private
 * @param {?} dest
 * @param {?} source
 * @return {?}
 */
function extendStyles(dest, source) {
    for (var key in source) {
        if (source.hasOwnProperty(key)) {
            dest[(/** @type {?} */ (key))] = source[(/** @type {?} */ (key))];
        }
    }
    return dest;
}
/**
 * Toggles whether the native drag interactions should be enabled for an element.
 * \@docs-private
 * @param {?} element Element on which to toggle the drag interactions.
 * @param {?} enable Whether the drag interactions should be enabled.
 * @return {?}
 */
function toggleNativeDragInteractions(element, enable) {
    /** @type {?} */
    var userSelect = enable ? '' : 'none';
    extendStyles(element.style, {
        touchAction: enable ? '' : 'none',
        webkitUserDrag: enable ? '' : 'none',
        webkitTapHighlightColor: enable ? '' : 'transparent',
        userSelect: userSelect,
        msUserSelect: userSelect,
        webkitUserSelect: userSelect,
        MozUserSelect: userSelect
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Parses a CSS time value to milliseconds.
 * @param {?} value
 * @return {?}
 */
function parseCssTimeUnitsToMs(value) {
    // Some browsers will return it in seconds, whereas others will return milliseconds.
    /** @type {?} */
    var multiplier = value.toLowerCase().indexOf('ms') > -1 ? 1 : 1000;
    return parseFloat(value) * multiplier;
}
/**
 * Gets the transform transition duration, including the delay, of an element in milliseconds.
 * @param {?} element
 * @return {?}
 */
function getTransformTransitionDurationInMs(element) {
    /** @type {?} */
    var computedStyle = getComputedStyle(element);
    /** @type {?} */
    var transitionedProperties = parseCssPropertyValue(computedStyle, 'transition-property');
    /** @type {?} */
    var property = transitionedProperties.find(function (prop) { return prop === 'transform' || prop === 'all'; });
    // If there's no transition for `all` or `transform`, we shouldn't do anything.
    if (!property) {
        return 0;
    }
    // Get the index of the property that we're interested in and match
    // it up to the same index in `transition-delay` and `transition-duration`.
    /** @type {?} */
    var propertyIndex = transitionedProperties.indexOf(property);
    /** @type {?} */
    var rawDurations = parseCssPropertyValue(computedStyle, 'transition-duration');
    /** @type {?} */
    var rawDelays = parseCssPropertyValue(computedStyle, 'transition-delay');
    return parseCssTimeUnitsToMs(rawDurations[propertyIndex]) +
        parseCssTimeUnitsToMs(rawDelays[propertyIndex]);
}
/**
 * Parses out multiple values from a computed style into an array.
 * @param {?} computedStyle
 * @param {?} name
 * @return {?}
 */
function parseCssPropertyValue(computedStyle, name) {
    /** @type {?} */
    var value = computedStyle.getPropertyValue(name);
    return value.split(',').map(function (part) { return part.trim(); });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Options that can be used to bind a passive event listener.
 * @type {?}
 */
var passiveEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["normalizePassiveListenerOptions"])({ passive: true });
/**
 * Options that can be used to bind an active event listener.
 * @type {?}
 */
var activeEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["normalizePassiveListenerOptions"])({ passive: false });
/**
 * Time in milliseconds for which to ignore mouse events, after
 * receiving a touch event. Used to avoid doing double work for
 * touch devices where the browser fires fake mouse events, in
 * addition to touch events.
 * @type {?}
 */
var MOUSE_EVENT_IGNORE_TIME = 800;
/**
 * Reference to a draggable item. Used to manipulate or dispose of the item.
 * \@docs-private
 * @template T
 */
var  /**
 * Reference to a draggable item. Used to manipulate or dispose of the item.
 * \@docs-private
 * @template T
 */
DragRef = /** @class */ (function () {
    function DragRef(element, _config, _document, _ngZone, _viewportRuler, _dragDropRegistry) {
        var _this = this;
        this._config = _config;
        this._document = _document;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        this._dragDropRegistry = _dragDropRegistry;
        /**
         * CSS `transform` applied to the element when it isn't being dragged. We need a
         * passive transform in order for the dragged element to retain its new position
         * after the user has stopped dragging and because we need to know the relative
         * position in case they start dragging again. This corresponds to `element.style.transform`.
         */
        this._passiveTransform = { x: 0, y: 0 };
        /**
         * CSS `transform` that is applied to the element while it's being dragged.
         */
        this._activeTransform = { x: 0, y: 0 };
        /**
         * Emits when the item is being moved.
         */
        this._moveEvents = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Amount of subscriptions to the move event. Used to avoid
         * hitting the zone if the consumer didn't subscribe to it.
         */
        this._moveEventSubscriptions = 0;
        /**
         * Subscription to pointer movement events.
         */
        this._pointerMoveSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        /**
         * Subscription to the event that is dispatched when the user lifts their pointer.
         */
        this._pointerUpSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        /**
         * Cached reference to the boundary element.
         */
        this._boundaryElement = null;
        /**
         * Whether the native dragging interactions have been enabled on the root element.
         */
        this._nativeInteractionsEnabled = true;
        /**
         * Elements that can be used to drag the draggable item.
         */
        this._handles = [];
        /**
         * Registered handles that are currently disabled.
         */
        this._disabledHandles = new Set();
        /**
         * Layout direction of the item.
         */
        this._direction = 'ltr';
        this._disabled = false;
        /**
         * Emits as the drag sequence is being prepared.
         */
        this.beforeStarted = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user starts dragging the item.
         */
        this.started = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user has released a drag item, before any animations have started.
         */
        this.released = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user stops dragging an item in the container.
         */
        this.ended = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user has moved the item into a new container.
         */
        this.entered = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user removes the item its container by dragging it into another container.
         */
        this.exited = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user drops the item inside a container.
         */
        this.dropped = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits as the user is dragging the item. Use with caution,
         * because this event will fire for every pixel that the user has dragged.
         */
        this.moved = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            /** @type {?} */
            var subscription = _this._moveEvents.subscribe(observer);
            _this._moveEventSubscriptions++;
            return function () {
                subscription.unsubscribe();
                _this._moveEventSubscriptions--;
            };
        });
        /**
         * Handler for the `mousedown`/`touchstart` events.
         */
        this._pointerDown = function (event) {
            _this.beforeStarted.next();
            // Delegate the event based on whether it started from a handle or the element itself.
            if (_this._handles.length) {
                /** @type {?} */
                var targetHandle = _this._handles.find(function (handle) {
                    /** @type {?} */
                    var target = event.target;
                    return !!target && (target === handle || handle.contains((/** @type {?} */ (target))));
                });
                if (targetHandle && !_this._disabledHandles.has(targetHandle) && !_this.disabled) {
                    _this._initializeDragSequence(targetHandle, event);
                }
            }
            else if (!_this.disabled) {
                _this._initializeDragSequence(_this._rootElement, event);
            }
        };
        /**
         * Handler that is invoked when the user moves their pointer after they've initiated a drag.
         */
        this._pointerMove = function (event) {
            if (!_this._hasStartedDragging) {
                /** @type {?} */
                var pointerPosition = _this._getPointerPositionOnPage(event);
                /** @type {?} */
                var distanceX = Math.abs(pointerPosition.x - _this._pickupPositionOnPage.x);
                /** @type {?} */
                var distanceY = Math.abs(pointerPosition.y - _this._pickupPositionOnPage.y);
                // Only start dragging after the user has moved more than the minimum distance in either
                // direction. Note that this is preferrable over doing something like `skip(minimumDistance)`
                // in the `pointerMove` subscription, because we're not guaranteed to have one move event
                // per pixel of movement (e.g. if the user moves their pointer quickly).
                if (distanceX + distanceY >= _this._config.dragStartThreshold) {
                    _this._hasStartedDragging = true;
                    _this._ngZone.run(function () { return _this._startDragSequence(event); });
                }
                return;
            }
            // We only need the preview dimensions if we have a boundary element.
            if (_this._boundaryElement) {
                // Cache the preview element rect if we haven't cached it already or if
                // we cached it too early before the element dimensions were computed.
                if (!_this._previewRect || (!_this._previewRect.width && !_this._previewRect.height)) {
                    _this._previewRect = (_this._preview || _this._rootElement).getBoundingClientRect();
                }
            }
            /** @type {?} */
            var constrainedPointerPosition = _this._getConstrainedPointerPosition(event);
            _this._hasMoved = true;
            event.preventDefault();
            _this._updatePointerDirectionDelta(constrainedPointerPosition);
            if (_this._dropContainer) {
                _this._updateActiveDropContainer(constrainedPointerPosition);
            }
            else {
                /** @type {?} */
                var activeTransform = _this._activeTransform;
                activeTransform.x =
                    constrainedPointerPosition.x - _this._pickupPositionOnPage.x + _this._passiveTransform.x;
                activeTransform.y =
                    constrainedPointerPosition.y - _this._pickupPositionOnPage.y + _this._passiveTransform.y;
                /** @type {?} */
                var transform = getTransform(activeTransform.x, activeTransform.y);
                // Preserve the previous `transform` value, if there was one. Note that we apply our own
                // transform before the user's, because things like rotation can affect which direction
                // the element will be translated towards.
                _this._rootElement.style.transform = _this._initialTransform ?
                    transform + ' ' + _this._initialTransform : transform;
                // Apply transform as attribute if dragging and svg element to work for IE
                if (typeof SVGElement !== 'undefined' && _this._rootElement instanceof SVGElement) {
                    /** @type {?} */
                    var appliedTransform = "translate(" + activeTransform.x + " " + activeTransform.y + ")";
                    _this._rootElement.setAttribute('transform', appliedTransform);
                }
            }
            // Since this event gets fired for every pixel while dragging, we only
            // want to fire it if the consumer opted into it. Also we have to
            // re-enter the zone because we run all of the events on the outside.
            if (_this._moveEventSubscriptions > 0) {
                _this._ngZone.run(function () {
                    _this._moveEvents.next({
                        source: _this,
                        pointerPosition: constrainedPointerPosition,
                        event: event,
                        delta: _this._pointerDirectionDelta
                    });
                });
            }
        };
        /**
         * Handler that is invoked when the user lifts their pointer up, after initiating a drag.
         */
        this._pointerUp = function (event) {
            // Note that here we use `isDragging` from the service, rather than from `this`.
            // The difference is that the one from the service reflects whether a dragging sequence
            // has been initiated, whereas the one on `this` includes whether the user has passed
            // the minimum dragging threshold.
            if (!_this._dragDropRegistry.isDragging(_this)) {
                return;
            }
            _this._removeSubscriptions();
            _this._dragDropRegistry.stopDragging(_this);
            if (_this._handles) {
                _this._rootElement.style.webkitTapHighlightColor = _this._rootElementTapHighlight;
            }
            if (!_this._hasStartedDragging) {
                return;
            }
            _this.released.next({ source: _this });
            if (!_this._dropContainer) {
                // Convert the active transform into a passive one. This means that next time
                // the user starts dragging the item, its position will be calculated relatively
                // to the new passive transform.
                _this._passiveTransform.x = _this._activeTransform.x;
                _this._passiveTransform.y = _this._activeTransform.y;
                _this._ngZone.run(function () { return _this.ended.next({ source: _this }); });
                _this._dragDropRegistry.stopDragging(_this);
                return;
            }
            _this._animatePreviewToPlaceholder().then(function () {
                _this._cleanupDragArtifacts(event);
                _this._dragDropRegistry.stopDragging(_this);
            });
        };
        this.withRootElement(element);
        _dragDropRegistry.registerDragItem(this);
    }
    Object.defineProperty(DragRef.prototype, "disabled", {
        /** Whether starting to drag this element is disabled. */
        get: /**
         * Whether starting to drag this element is disabled.
         * @return {?}
         */
        function () {
            return this._disabled || !!(this._dropContainer && this._dropContainer.disabled);
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
            if (newValue !== this._disabled) {
                this._disabled = newValue;
                this._toggleNativeDragInteractions();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     */
    /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     * @return {?}
     */
    DragRef.prototype.getPlaceholderElement = /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     * @return {?}
     */
    function () {
        return this._placeholder;
    };
    /** Returns the root draggable element. */
    /**
     * Returns the root draggable element.
     * @return {?}
     */
    DragRef.prototype.getRootElement = /**
     * Returns the root draggable element.
     * @return {?}
     */
    function () {
        return this._rootElement;
    };
    /** Registers the handles that can be used to drag the element. */
    /**
     * Registers the handles that can be used to drag the element.
     * @template THIS
     * @this {THIS}
     * @param {?} handles
     * @return {THIS}
     */
    DragRef.prototype.withHandles = /**
     * Registers the handles that can be used to drag the element.
     * @template THIS
     * @this {THIS}
     * @param {?} handles
     * @return {THIS}
     */
    function (handles) {
        (/** @type {?} */ (this))._handles = handles.map(function (handle) { return Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(handle); });
        (/** @type {?} */ (this))._handles.forEach(function (handle) { return toggleNativeDragInteractions(handle, false); });
        (/** @type {?} */ (this))._toggleNativeDragInteractions();
        return (/** @type {?} */ (this));
    };
    /**
     * Registers the template that should be used for the drag preview.
     * @param template Template that from which to stamp out the preview.
     */
    /**
     * Registers the template that should be used for the drag preview.
     * @template THIS
     * @this {THIS}
     * @param {?} template Template that from which to stamp out the preview.
     * @return {THIS}
     */
    DragRef.prototype.withPreviewTemplate = /**
     * Registers the template that should be used for the drag preview.
     * @template THIS
     * @this {THIS}
     * @param {?} template Template that from which to stamp out the preview.
     * @return {THIS}
     */
    function (template) {
        (/** @type {?} */ (this))._previewTemplate = template;
        return (/** @type {?} */ (this));
    };
    /**
     * Registers the template that should be used for the drag placeholder.
     * @param template Template that from which to stamp out the placeholder.
     */
    /**
     * Registers the template that should be used for the drag placeholder.
     * @template THIS
     * @this {THIS}
     * @param {?} template Template that from which to stamp out the placeholder.
     * @return {THIS}
     */
    DragRef.prototype.withPlaceholderTemplate = /**
     * Registers the template that should be used for the drag placeholder.
     * @template THIS
     * @this {THIS}
     * @param {?} template Template that from which to stamp out the placeholder.
     * @return {THIS}
     */
    function (template) {
        (/** @type {?} */ (this))._placeholderTemplate = template;
        return (/** @type {?} */ (this));
    };
    /**
     * Sets an alternate drag root element. The root element is the element that will be moved as
     * the user is dragging. Passing an alternate root element is useful when trying to enable
     * dragging on an element that you might not have access to.
     */
    /**
     * Sets an alternate drag root element. The root element is the element that will be moved as
     * the user is dragging. Passing an alternate root element is useful when trying to enable
     * dragging on an element that you might not have access to.
     * @template THIS
     * @this {THIS}
     * @param {?} rootElement
     * @return {THIS}
     */
    DragRef.prototype.withRootElement = /**
     * Sets an alternate drag root element. The root element is the element that will be moved as
     * the user is dragging. Passing an alternate root element is useful when trying to enable
     * dragging on an element that you might not have access to.
     * @template THIS
     * @this {THIS}
     * @param {?} rootElement
     * @return {THIS}
     */
    function (rootElement) {
        /** @type {?} */
        var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(rootElement);
        if (element !== (/** @type {?} */ (this))._rootElement) {
            if ((/** @type {?} */ (this))._rootElement) {
                (/** @type {?} */ (this))._removeRootElementListeners((/** @type {?} */ (this))._rootElement);
            }
            element.addEventListener('mousedown', (/** @type {?} */ (this))._pointerDown, activeEventListenerOptions);
            element.addEventListener('touchstart', (/** @type {?} */ (this))._pointerDown, passiveEventListenerOptions);
            (/** @type {?} */ (this))._initialTransform = undefined;
            (/** @type {?} */ (this))._rootElement = element;
        }
        return (/** @type {?} */ (this));
    };
    /**
     * Element to which the draggable's position will be constrained.
     */
    /**
     * Element to which the draggable's position will be constrained.
     * @template THIS
     * @this {THIS}
     * @param {?} boundaryElement
     * @return {THIS}
     */
    DragRef.prototype.withBoundaryElement = /**
     * Element to which the draggable's position will be constrained.
     * @template THIS
     * @this {THIS}
     * @param {?} boundaryElement
     * @return {THIS}
     */
    function (boundaryElement) {
        (/** @type {?} */ (this))._boundaryElement = boundaryElement ? Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(boundaryElement) : null;
        return (/** @type {?} */ (this));
    };
    /** Removes the dragging functionality from the DOM element. */
    /**
     * Removes the dragging functionality from the DOM element.
     * @return {?}
     */
    DragRef.prototype.dispose = /**
     * Removes the dragging functionality from the DOM element.
     * @return {?}
     */
    function () {
        this._removeRootElementListeners(this._rootElement);
        // Do this check before removing from the registry since it'll
        // stop being considered as dragged once it is removed.
        if (this.isDragging()) {
            // Since we move out the element to the end of the body while it's being
            // dragged, we have to make sure that it's removed if it gets destroyed.
            removeElement(this._rootElement);
        }
        this._destroyPreview();
        this._destroyPlaceholder();
        this._dragDropRegistry.removeDragItem(this);
        this._removeSubscriptions();
        this.beforeStarted.complete();
        this.started.complete();
        this.released.complete();
        this.ended.complete();
        this.entered.complete();
        this.exited.complete();
        this.dropped.complete();
        this._moveEvents.complete();
        this._handles = [];
        this._disabledHandles.clear();
        this._dropContainer = undefined;
        this._boundaryElement = this._rootElement = this._placeholderTemplate =
            this._previewTemplate = this._nextSibling = (/** @type {?} */ (null));
    };
    /** Checks whether the element is currently being dragged. */
    /**
     * Checks whether the element is currently being dragged.
     * @return {?}
     */
    DragRef.prototype.isDragging = /**
     * Checks whether the element is currently being dragged.
     * @return {?}
     */
    function () {
        return this._hasStartedDragging && this._dragDropRegistry.isDragging(this);
    };
    /** Resets a standalone drag item to its initial position. */
    /**
     * Resets a standalone drag item to its initial position.
     * @return {?}
     */
    DragRef.prototype.reset = /**
     * Resets a standalone drag item to its initial position.
     * @return {?}
     */
    function () {
        this._rootElement.style.transform = this._initialTransform || '';
        this._activeTransform = { x: 0, y: 0 };
        this._passiveTransform = { x: 0, y: 0 };
    };
    /**
     * Sets a handle as disabled. While a handle is disabled, it'll capture and interrupt dragging.
     * @param handle Handle element that should be disabled.
     */
    /**
     * Sets a handle as disabled. While a handle is disabled, it'll capture and interrupt dragging.
     * @param {?} handle Handle element that should be disabled.
     * @return {?}
     */
    DragRef.prototype.disableHandle = /**
     * Sets a handle as disabled. While a handle is disabled, it'll capture and interrupt dragging.
     * @param {?} handle Handle element that should be disabled.
     * @return {?}
     */
    function (handle) {
        if (this._handles.indexOf(handle) > -1) {
            this._disabledHandles.add(handle);
        }
    };
    /**
     * Enables a handle, if it has been disabled.
     * @param handle Handle element to be enabled.
     */
    /**
     * Enables a handle, if it has been disabled.
     * @param {?} handle Handle element to be enabled.
     * @return {?}
     */
    DragRef.prototype.enableHandle = /**
     * Enables a handle, if it has been disabled.
     * @param {?} handle Handle element to be enabled.
     * @return {?}
     */
    function (handle) {
        this._disabledHandles.delete(handle);
    };
    /** Sets the layout direction of the draggable item. */
    /**
     * Sets the layout direction of the draggable item.
     * @template THIS
     * @this {THIS}
     * @param {?} direction
     * @return {THIS}
     */
    DragRef.prototype.withDirection = /**
     * Sets the layout direction of the draggable item.
     * @template THIS
     * @this {THIS}
     * @param {?} direction
     * @return {THIS}
     */
    function (direction) {
        (/** @type {?} */ (this))._direction = direction;
        return (/** @type {?} */ (this));
    };
    /** Sets the container that the item is part of. */
    /**
     * Sets the container that the item is part of.
     * @param {?} container
     * @return {?}
     */
    DragRef.prototype._withDropContainer = /**
     * Sets the container that the item is part of.
     * @param {?} container
     * @return {?}
     */
    function (container) {
        this._dropContainer = container;
    };
    /** Unsubscribes from the global subscriptions. */
    /**
     * Unsubscribes from the global subscriptions.
     * @private
     * @return {?}
     */
    DragRef.prototype._removeSubscriptions = /**
     * Unsubscribes from the global subscriptions.
     * @private
     * @return {?}
     */
    function () {
        this._pointerMoveSubscription.unsubscribe();
        this._pointerUpSubscription.unsubscribe();
    };
    /** Destroys the preview element and its ViewRef. */
    /**
     * Destroys the preview element and its ViewRef.
     * @private
     * @return {?}
     */
    DragRef.prototype._destroyPreview = /**
     * Destroys the preview element and its ViewRef.
     * @private
     * @return {?}
     */
    function () {
        if (this._preview) {
            removeElement(this._preview);
        }
        if (this._previewRef) {
            this._previewRef.destroy();
        }
        this._preview = this._previewRef = (/** @type {?} */ (null));
    };
    /** Destroys the placeholder element and its ViewRef. */
    /**
     * Destroys the placeholder element and its ViewRef.
     * @private
     * @return {?}
     */
    DragRef.prototype._destroyPlaceholder = /**
     * Destroys the placeholder element and its ViewRef.
     * @private
     * @return {?}
     */
    function () {
        if (this._placeholder) {
            removeElement(this._placeholder);
        }
        if (this._placeholderRef) {
            this._placeholderRef.destroy();
        }
        this._placeholder = this._placeholderRef = (/** @type {?} */ (null));
    };
    /** Starts the dragging sequence. */
    /**
     * Starts the dragging sequence.
     * @private
     * @param {?} event
     * @return {?}
     */
    DragRef.prototype._startDragSequence = /**
     * Starts the dragging sequence.
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // Emit the event on the item before the one on the container.
        this.started.next({ source: this });
        if (isTouchEvent(event)) {
            this._lastTouchEventTime = Date.now();
        }
        if (this._dropContainer) {
            /** @type {?} */
            var element = this._rootElement;
            // Grab the `nextSibling` before the preview and placeholder
            // have been created so we don't get the preview by accident.
            this._nextSibling = element.nextSibling;
            /** @type {?} */
            var preview = this._preview = this._createPreviewElement();
            /** @type {?} */
            var placeholder = this._placeholder = this._createPlaceholderElement();
            // We move the element out at the end of the body and we make it hidden, because keeping it in
            // place will throw off the consumer's `:last-child` selectors. We can't remove the element
            // from the DOM completely, because iOS will stop firing all subsequent events in the chain.
            element.style.display = 'none';
            this._document.body.appendChild((/** @type {?} */ (element.parentNode)).replaceChild(placeholder, element));
            this._document.body.appendChild(preview);
            this._dropContainer.start();
        }
    };
    /**
     * Sets up the different variables and subscriptions
     * that will be necessary for the dragging sequence.
     * @param referenceElement Element that started the drag sequence.
     * @param event Browser event object that started the sequence.
     */
    /**
     * Sets up the different variables and subscriptions
     * that will be necessary for the dragging sequence.
     * @private
     * @param {?} referenceElement Element that started the drag sequence.
     * @param {?} event Browser event object that started the sequence.
     * @return {?}
     */
    DragRef.prototype._initializeDragSequence = /**
     * Sets up the different variables and subscriptions
     * that will be necessary for the dragging sequence.
     * @private
     * @param {?} referenceElement Element that started the drag sequence.
     * @param {?} event Browser event object that started the sequence.
     * @return {?}
     */
    function (referenceElement, event) {
        // Always stop propagation for the event that initializes
        // the dragging sequence, in order to prevent it from potentially
        // starting another sequence for a draggable parent somewhere up the DOM tree.
        event.stopPropagation();
        /** @type {?} */
        var isDragging = this.isDragging();
        /** @type {?} */
        var isTouchSequence = isTouchEvent(event);
        /** @type {?} */
        var isAuxiliaryMouseButton = !isTouchSequence && ((/** @type {?} */ (event))).button !== 0;
        /** @type {?} */
        var rootElement = this._rootElement;
        /** @type {?} */
        var isSyntheticEvent = !isTouchSequence && this._lastTouchEventTime &&
            this._lastTouchEventTime + MOUSE_EVENT_IGNORE_TIME > Date.now();
        // If the event started from an element with the native HTML drag&drop, it'll interfere
        // with our own dragging (e.g. `img` tags do it by default). Prevent the default action
        // to stop it from happening. Note that preventing on `dragstart` also seems to work, but
        // it's flaky and it fails if the user drags it away quickly. Also note that we only want
        // to do this for `mousedown` since doing the same for `touchstart` will stop any `click`
        // events from firing on touch devices.
        if (event.target && ((/** @type {?} */ (event.target))).draggable && event.type === 'mousedown') {
            event.preventDefault();
        }
        // Abort if the user is already dragging or is using a mouse button other than the primary one.
        if (isDragging || isAuxiliaryMouseButton || isSyntheticEvent) {
            return;
        }
        // Cache the previous transform amount only after the first drag sequence, because
        // we don't want our own transforms to stack on top of each other.
        if (this._initialTransform == null) {
            this._initialTransform = this._rootElement.style.transform || '';
        }
        // If we've got handles, we need to disable the tap highlight on the entire root element,
        // otherwise iOS will still add it, even though all the drag interactions on the handle
        // are disabled.
        if (this._handles.length) {
            this._rootElementTapHighlight = rootElement.style.webkitTapHighlightColor;
            rootElement.style.webkitTapHighlightColor = 'transparent';
        }
        this._toggleNativeDragInteractions();
        this._hasStartedDragging = this._hasMoved = false;
        this._initialContainer = (/** @type {?} */ (this._dropContainer));
        this._pointerMoveSubscription = this._dragDropRegistry.pointerMove.subscribe(this._pointerMove);
        this._pointerUpSubscription = this._dragDropRegistry.pointerUp.subscribe(this._pointerUp);
        this._scrollPosition = this._viewportRuler.getViewportScrollPosition();
        if (this._boundaryElement) {
            this._boundaryRect = this._boundaryElement.getBoundingClientRect();
        }
        // If we have a custom preview template, the element won't be visible anyway so we avoid the
        // extra `getBoundingClientRect` calls and just move the preview next to the cursor.
        this._pickupPositionInElement = this._previewTemplate && this._previewTemplate.template ?
            { x: 0, y: 0 } :
            this._getPointerPositionInElement(referenceElement, event);
        /** @type {?} */
        var pointerPosition = this._pickupPositionOnPage = this._getPointerPositionOnPage(event);
        this._pointerDirectionDelta = { x: 0, y: 0 };
        this._pointerPositionAtLastDirectionChange = { x: pointerPosition.x, y: pointerPosition.y };
        this._dragDropRegistry.startDragging(this, event);
    };
    /** Cleans up the DOM artifacts that were added to facilitate the element being dragged. */
    /**
     * Cleans up the DOM artifacts that were added to facilitate the element being dragged.
     * @private
     * @param {?} event
     * @return {?}
     */
    DragRef.prototype._cleanupDragArtifacts = /**
     * Cleans up the DOM artifacts that were added to facilitate the element being dragged.
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        // Restore the element's visibility and insert it at its old position in the DOM.
        // It's important that we maintain the position, because moving the element around in the DOM
        // can throw off `NgFor` which does smart diffing and re-creates elements only when necessary,
        // while moving the existing elements in all other cases.
        this._rootElement.style.display = '';
        if (this._nextSibling) {
            (/** @type {?} */ (this._nextSibling.parentNode)).insertBefore(this._rootElement, this._nextSibling);
        }
        else {
            this._initialContainer.element.appendChild(this._rootElement);
        }
        this._destroyPreview();
        this._destroyPlaceholder();
        this._boundaryRect = this._previewRect = undefined;
        // Re-enter the NgZone since we bound `document` events on the outside.
        this._ngZone.run(function () {
            /** @type {?} */
            var container = (/** @type {?} */ (_this._dropContainer));
            /** @type {?} */
            var currentIndex = container.getItemIndex(_this);
            var _a = _this._getPointerPositionOnPage(event), x = _a.x, y = _a.y;
            /** @type {?} */
            var isPointerOverContainer = container._isOverContainer(x, y);
            _this.ended.next({ source: _this });
            _this.dropped.next({
                item: _this,
                currentIndex: currentIndex,
                previousIndex: _this._initialContainer.getItemIndex(_this),
                container: container,
                previousContainer: _this._initialContainer,
                isPointerOverContainer: isPointerOverContainer
            });
            container.drop(_this, currentIndex, _this._initialContainer, isPointerOverContainer);
            _this._dropContainer = _this._initialContainer;
        });
    };
    /**
     * Updates the item's position in its drop container, or moves it
     * into a new one, depending on its current drag position.
     */
    /**
     * Updates the item's position in its drop container, or moves it
     * into a new one, depending on its current drag position.
     * @private
     * @param {?} __0
     * @return {?}
     */
    DragRef.prototype._updateActiveDropContainer = /**
     * Updates the item's position in its drop container, or moves it
     * into a new one, depending on its current drag position.
     * @private
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var _this = this;
        var x = _a.x, y = _a.y;
        // Drop container that draggable has been moved into.
        /** @type {?} */
        var newContainer = (/** @type {?} */ (this._dropContainer))._getSiblingContainerFromPosition(this, x, y) ||
            this._initialContainer._getSiblingContainerFromPosition(this, x, y);
        // If we couldn't find a new container to move the item into, and the item has left it's
        // initial container, check whether the it's over the initial container. This handles the
        // case where two containers are connected one way and the user tries to undo dragging an
        // item into a new container.
        if (!newContainer && this._dropContainer !== this._initialContainer &&
            this._initialContainer._isOverContainer(x, y)) {
            newContainer = this._initialContainer;
        }
        if (newContainer && newContainer !== this._dropContainer) {
            this._ngZone.run(function () {
                // Notify the old container that the item has left.
                _this.exited.next({ item: _this, container: (/** @type {?} */ (_this._dropContainer)) });
                (/** @type {?} */ (_this._dropContainer)).exit(_this);
                // Notify the new container that the item has entered.
                _this.entered.next({ item: _this, container: (/** @type {?} */ (newContainer)) });
                _this._dropContainer = (/** @type {?} */ (newContainer));
                _this._dropContainer.enter(_this, x, y);
            });
        }
        (/** @type {?} */ (this._dropContainer))._sortItem(this, x, y, this._pointerDirectionDelta);
        this._preview.style.transform =
            getTransform(x - this._pickupPositionInElement.x, y - this._pickupPositionInElement.y);
    };
    /**
     * Creates the element that will be rendered next to the user's pointer
     * and will be used as a preview of the element that is being dragged.
     */
    /**
     * Creates the element that will be rendered next to the user's pointer
     * and will be used as a preview of the element that is being dragged.
     * @private
     * @return {?}
     */
    DragRef.prototype._createPreviewElement = /**
     * Creates the element that will be rendered next to the user's pointer
     * and will be used as a preview of the element that is being dragged.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var previewConfig = this._previewTemplate;
        /** @type {?} */
        var previewTemplate = previewConfig ? previewConfig.template : null;
        /** @type {?} */
        var preview;
        if (previewTemplate) {
            /** @type {?} */
            var viewRef = (/** @type {?} */ (previewConfig)).viewContainer.createEmbeddedView(previewTemplate, (/** @type {?} */ (previewConfig)).context);
            preview = viewRef.rootNodes[0];
            this._previewRef = viewRef;
            preview.style.transform =
                getTransform(this._pickupPositionOnPage.x, this._pickupPositionOnPage.y);
        }
        else {
            /** @type {?} */
            var element = this._rootElement;
            /** @type {?} */
            var elementRect = element.getBoundingClientRect();
            preview = deepCloneNode(element);
            preview.style.width = elementRect.width + "px";
            preview.style.height = elementRect.height + "px";
            preview.style.transform = getTransform(elementRect.left, elementRect.top);
        }
        extendStyles(preview.style, {
            // It's important that we disable the pointer events on the preview, because
            // it can throw off the `document.elementFromPoint` calls in the `CdkDropList`.
            pointerEvents: 'none',
            position: 'fixed',
            top: '0',
            left: '0',
            zIndex: '1000'
        });
        toggleNativeDragInteractions(preview, false);
        preview.classList.add('cdk-drag-preview');
        preview.setAttribute('dir', this._direction);
        return preview;
    };
    /**
     * Animates the preview element from its current position to the location of the drop placeholder.
     * @returns Promise that resolves when the animation completes.
     */
    /**
     * Animates the preview element from its current position to the location of the drop placeholder.
     * @private
     * @return {?} Promise that resolves when the animation completes.
     */
    DragRef.prototype._animatePreviewToPlaceholder = /**
     * Animates the preview element from its current position to the location of the drop placeholder.
     * @private
     * @return {?} Promise that resolves when the animation completes.
     */
    function () {
        var _this = this;
        // If the user hasn't moved yet, the transitionend event won't fire.
        if (!this._hasMoved) {
            return Promise.resolve();
        }
        /** @type {?} */
        var placeholderRect = this._placeholder.getBoundingClientRect();
        // Apply the class that adds a transition to the preview.
        this._preview.classList.add('cdk-drag-animating');
        // Move the preview to the placeholder position.
        this._preview.style.transform = getTransform(placeholderRect.left, placeholderRect.top);
        // If the element doesn't have a `transition`, the `transitionend` event won't fire. Since
        // we need to trigger a style recalculation in order for the `cdk-drag-animating` class to
        // apply its style, we take advantage of the available info to figure out whether we need to
        // bind the event in the first place.
        /** @type {?} */
        var duration = getTransformTransitionDurationInMs(this._preview);
        if (duration === 0) {
            return Promise.resolve();
        }
        return this._ngZone.runOutsideAngular(function () {
            return new Promise(function (resolve) {
                /** @type {?} */
                var handler = (/** @type {?} */ ((function (event) {
                    if (!event || (event.target === _this._preview && event.propertyName === 'transform')) {
                        _this._preview.removeEventListener('transitionend', handler);
                        resolve();
                        clearTimeout(timeout);
                    }
                })));
                // If a transition is short enough, the browser might not fire the `transitionend` event.
                // Since we know how long it's supposed to take, add a timeout with a 50% buffer that'll
                // fire if the transition hasn't completed when it was supposed to.
                /** @type {?} */
                var timeout = setTimeout((/** @type {?} */ (handler)), duration * 1.5);
                _this._preview.addEventListener('transitionend', handler);
            });
        });
    };
    /** Creates an element that will be shown instead of the current element while dragging. */
    /**
     * Creates an element that will be shown instead of the current element while dragging.
     * @private
     * @return {?}
     */
    DragRef.prototype._createPlaceholderElement = /**
     * Creates an element that will be shown instead of the current element while dragging.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var placeholderConfig = this._placeholderTemplate;
        /** @type {?} */
        var placeholderTemplate = placeholderConfig ? placeholderConfig.template : null;
        /** @type {?} */
        var placeholder;
        if (placeholderTemplate) {
            this._placeholderRef = (/** @type {?} */ (placeholderConfig)).viewContainer.createEmbeddedView(placeholderTemplate, (/** @type {?} */ (placeholderConfig)).context);
            placeholder = this._placeholderRef.rootNodes[0];
        }
        else {
            placeholder = deepCloneNode(this._rootElement);
        }
        placeholder.classList.add('cdk-drag-placeholder');
        return placeholder;
    };
    /**
     * Figures out the coordinates at which an element was picked up.
     * @param referenceElement Element that initiated the dragging.
     * @param event Event that initiated the dragging.
     */
    /**
     * Figures out the coordinates at which an element was picked up.
     * @private
     * @param {?} referenceElement Element that initiated the dragging.
     * @param {?} event Event that initiated the dragging.
     * @return {?}
     */
    DragRef.prototype._getPointerPositionInElement = /**
     * Figures out the coordinates at which an element was picked up.
     * @private
     * @param {?} referenceElement Element that initiated the dragging.
     * @param {?} event Event that initiated the dragging.
     * @return {?}
     */
    function (referenceElement, event) {
        /** @type {?} */
        var elementRect = this._rootElement.getBoundingClientRect();
        /** @type {?} */
        var handleElement = referenceElement === this._rootElement ? null : referenceElement;
        /** @type {?} */
        var referenceRect = handleElement ? handleElement.getBoundingClientRect() : elementRect;
        /** @type {?} */
        var point = isTouchEvent(event) ? event.targetTouches[0] : event;
        /** @type {?} */
        var x = point.pageX - referenceRect.left - this._scrollPosition.left;
        /** @type {?} */
        var y = point.pageY - referenceRect.top - this._scrollPosition.top;
        return {
            x: referenceRect.left - elementRect.left + x,
            y: referenceRect.top - elementRect.top + y
        };
    };
    /** Determines the point of the page that was touched by the user. */
    /**
     * Determines the point of the page that was touched by the user.
     * @private
     * @param {?} event
     * @return {?}
     */
    DragRef.prototype._getPointerPositionOnPage = /**
     * Determines the point of the page that was touched by the user.
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // `touches` will be empty for start/end events so we have to fall back to `changedTouches`.
        /** @type {?} */
        var point = isTouchEvent(event) ? (event.touches[0] || event.changedTouches[0]) : event;
        return {
            x: point.pageX - this._scrollPosition.left,
            y: point.pageY - this._scrollPosition.top
        };
    };
    /** Gets the pointer position on the page, accounting for any position constraints. */
    /**
     * Gets the pointer position on the page, accounting for any position constraints.
     * @private
     * @param {?} event
     * @return {?}
     */
    DragRef.prototype._getConstrainedPointerPosition = /**
     * Gets the pointer position on the page, accounting for any position constraints.
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var point = this._getPointerPositionOnPage(event);
        /** @type {?} */
        var dropContainerLock = this._dropContainer ? this._dropContainer.lockAxis : null;
        if (this.lockAxis === 'x' || dropContainerLock === 'x') {
            point.y = this._pickupPositionOnPage.y;
        }
        else if (this.lockAxis === 'y' || dropContainerLock === 'y') {
            point.x = this._pickupPositionOnPage.x;
        }
        if (this._boundaryRect) {
            var _a = this._pickupPositionInElement, pickupX = _a.x, pickupY = _a.y;
            /** @type {?} */
            var boundaryRect = this._boundaryRect;
            /** @type {?} */
            var previewRect = (/** @type {?} */ (this._previewRect));
            /** @type {?} */
            var minY = boundaryRect.top + pickupY;
            /** @type {?} */
            var maxY = boundaryRect.bottom - (previewRect.height - pickupY);
            /** @type {?} */
            var minX = boundaryRect.left + pickupX;
            /** @type {?} */
            var maxX = boundaryRect.right - (previewRect.width - pickupX);
            point.x = clamp(point.x, minX, maxX);
            point.y = clamp(point.y, minY, maxY);
        }
        return point;
    };
    /** Updates the current drag delta, based on the user's current pointer position on the page. */
    /**
     * Updates the current drag delta, based on the user's current pointer position on the page.
     * @private
     * @param {?} pointerPositionOnPage
     * @return {?}
     */
    DragRef.prototype._updatePointerDirectionDelta = /**
     * Updates the current drag delta, based on the user's current pointer position on the page.
     * @private
     * @param {?} pointerPositionOnPage
     * @return {?}
     */
    function (pointerPositionOnPage) {
        var x = pointerPositionOnPage.x, y = pointerPositionOnPage.y;
        /** @type {?} */
        var delta = this._pointerDirectionDelta;
        /** @type {?} */
        var positionSinceLastChange = this._pointerPositionAtLastDirectionChange;
        // Amount of pixels the user has dragged since the last time the direction changed.
        /** @type {?} */
        var changeX = Math.abs(x - positionSinceLastChange.x);
        /** @type {?} */
        var changeY = Math.abs(y - positionSinceLastChange.y);
        // Because we handle pointer events on a per-pixel basis, we don't want the delta
        // to change for every pixel, otherwise anything that depends on it can look erratic.
        // To make the delta more consistent, we track how much the user has moved since the last
        // delta change and we only update it after it has reached a certain threshold.
        if (changeX > this._config.pointerDirectionChangeThreshold) {
            delta.x = x > positionSinceLastChange.x ? 1 : -1;
            positionSinceLastChange.x = x;
        }
        if (changeY > this._config.pointerDirectionChangeThreshold) {
            delta.y = y > positionSinceLastChange.y ? 1 : -1;
            positionSinceLastChange.y = y;
        }
        return delta;
    };
    /** Toggles the native drag interactions, based on how many handles are registered. */
    /**
     * Toggles the native drag interactions, based on how many handles are registered.
     * @private
     * @return {?}
     */
    DragRef.prototype._toggleNativeDragInteractions = /**
     * Toggles the native drag interactions, based on how many handles are registered.
     * @private
     * @return {?}
     */
    function () {
        if (!this._rootElement || !this._handles) {
            return;
        }
        /** @type {?} */
        var shouldEnable = this.disabled || this._handles.length > 0;
        if (shouldEnable !== this._nativeInteractionsEnabled) {
            this._nativeInteractionsEnabled = shouldEnable;
            toggleNativeDragInteractions(this._rootElement, shouldEnable);
        }
    };
    /** Removes the manually-added event listeners from the root element. */
    /**
     * Removes the manually-added event listeners from the root element.
     * @private
     * @param {?} element
     * @return {?}
     */
    DragRef.prototype._removeRootElementListeners = /**
     * Removes the manually-added event listeners from the root element.
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        element.removeEventListener('mousedown', this._pointerDown, activeEventListenerOptions);
        element.removeEventListener('touchstart', this._pointerDown, passiveEventListenerOptions);
    };
    return DragRef;
}());
/**
 * Gets a 3d `transform` that can be applied to an element.
 * @param {?} x Desired position of the element along the X axis.
 * @param {?} y Desired position of the element along the Y axis.
 * @return {?}
 */
function getTransform(x, y) {
    // Round the transforms since some browsers will
    // blur the elements for sub-pixel transforms.
    return "translate3d(" + Math.round(x) + "px, " + Math.round(y) + "px, 0)";
}
/**
 * Creates a deep clone of an element.
 * @param {?} node
 * @return {?}
 */
function deepCloneNode(node) {
    /** @type {?} */
    var clone = (/** @type {?} */ (node.cloneNode(true)));
    // Remove the `id` to avoid having multiple elements with the same id on the page.
    clone.removeAttribute('id');
    return clone;
}
/**
 * Clamps a value between a minimum and a maximum.
 * @param {?} value
 * @param {?} min
 * @param {?} max
 * @return {?}
 */
function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}
/**
 * Helper to remove an element from the DOM and to do all the necessary null checks.
 * @param {?} element Element to be removed.
 * @return {?}
 */
function removeElement(element) {
    if (element && element.parentNode) {
        element.parentNode.removeChild(element);
    }
}
/**
 * Determines whether an event is a touch event.
 * @param {?} event
 * @return {?}
 */
function isTouchEvent(event) {
    return event.type.startsWith('touch');
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Moves an item one index in an array to another.
 * @template T
 * @param {?} array Array in which to move the item.
 * @param {?} fromIndex Starting index of the item.
 * @param {?} toIndex Index to which the item should be moved.
 * @return {?}
 */
function moveItemInArray(array, fromIndex, toIndex) {
    /** @type {?} */
    var from = clamp$1(fromIndex, array.length - 1);
    /** @type {?} */
    var to = clamp$1(toIndex, array.length - 1);
    if (from === to) {
        return;
    }
    /** @type {?} */
    var target = array[from];
    /** @type {?} */
    var delta = to < from ? -1 : 1;
    for (var i = from; i !== to; i += delta) {
        array[i] = array[i + delta];
    }
    array[to] = target;
}
/**
 * Moves an item from one array to another.
 * @template T
 * @param {?} currentArray Array from which to transfer the item.
 * @param {?} targetArray Array into which to put the item.
 * @param {?} currentIndex Index of the item in its current array.
 * @param {?} targetIndex Index at which to insert the item.
 * @return {?}
 */
function transferArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
    /** @type {?} */
    var from = clamp$1(currentIndex, currentArray.length - 1);
    /** @type {?} */
    var to = clamp$1(targetIndex, targetArray.length);
    if (currentArray.length) {
        targetArray.splice(to, 0, currentArray.splice(from, 1)[0]);
    }
}
/**
 * Copies an item from one array to another, leaving it in its
 * original position in current array.
 * @template T
 * @param {?} currentArray Array from which to copy the item.
 * @param {?} targetArray Array into which is copy the item.
 * @param {?} currentIndex Index of the item in its current array.
 * @param {?} targetIndex Index at which to insert the item.
 *
 * @return {?}
 */
function copyArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
    /** @type {?} */
    var to = clamp$1(targetIndex, targetArray.length);
    if (currentArray.length) {
        targetArray.splice(to, 0, currentArray[currentIndex]);
    }
}
/**
 * Clamps a number between zero and a maximum.
 * @param {?} value
 * @param {?} max
 * @return {?}
 */
function clamp$1(value, max) {
    return Math.max(0, Math.min(max, value));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Counter used to generate unique ids for drop refs.
 * @type {?}
 */
var _uniqueIdCounter = 0;
/**
 * Proximity, as a ratio to width/height, at which a
 * dragged item will affect the drop container.
 * @type {?}
 */
var DROP_PROXIMITY_THRESHOLD = 0.05;
/**
 * Reference to a drop list. Used to manipulate or dispose of the container.
 * \@docs-private
 * @template T
 */
var  /**
 * Reference to a drop list. Used to manipulate or dispose of the container.
 * \@docs-private
 * @template T
 */
DropListRef = /** @class */ (function () {
    function DropListRef(element, _dragDropRegistry, _document) {
        this._dragDropRegistry = _dragDropRegistry;
        /**
         * Unique ID for the drop list.
         * @deprecated No longer being used. To be removed.
         * \@breaking-change 8.0.0
         */
        this.id = "cdk-drop-list-ref-" + _uniqueIdCounter++;
        /**
         * Whether starting a dragging sequence from this container is disabled.
         */
        this.disabled = false;
        /**
         * Function that is used to determine whether an item
         * is allowed to be moved into a drop container.
         */
        this.enterPredicate = function () { return true; };
        /**
         * Emits right before dragging has started.
         */
        this.beforeStarted = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user has moved a new drag item into this container.
         */
        this.entered = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user removes an item from the container
         * by dragging it into another container.
         */
        this.exited = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user drops an item inside the container.
         */
        this.dropped = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits as the user is swapping items while actively dragging.
         */
        this.sorted = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Whether an item in the list is being dragged.
         */
        this._isDragging = false;
        /**
         * Cache of the dimensions of all the items inside the container.
         */
        this._itemPositions = [];
        /**
         * Keeps track of the item that was last swapped with the dragged item, as
         * well as what direction the pointer was moving in when the swap occured.
         */
        this._previousSwap = { drag: (/** @type {?} */ (null)), delta: 0 };
        /**
         * Drop lists that are connected to the current one.
         */
        this._siblings = [];
        /**
         * Direction in which the list is oriented.
         */
        this._orientation = 'vertical';
        /**
         * Connected siblings that currently have a dragged item.
         */
        this._activeSiblings = new Set();
        /**
         * Layout direction of the drop list.
         */
        this._direction = 'ltr';
        _dragDropRegistry.registerDropContainer(this);
        this._document = _document;
        this.element = element instanceof _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] ? element.nativeElement : element;
    }
    /** Removes the drop list functionality from the DOM element. */
    /**
     * Removes the drop list functionality from the DOM element.
     * @return {?}
     */
    DropListRef.prototype.dispose = /**
     * Removes the drop list functionality from the DOM element.
     * @return {?}
     */
    function () {
        this.beforeStarted.complete();
        this.entered.complete();
        this.exited.complete();
        this.dropped.complete();
        this.sorted.complete();
        this._activeSiblings.clear();
        this._dragDropRegistry.removeDropContainer(this);
    };
    /** Whether an item from this list is currently being dragged. */
    /**
     * Whether an item from this list is currently being dragged.
     * @return {?}
     */
    DropListRef.prototype.isDragging = /**
     * Whether an item from this list is currently being dragged.
     * @return {?}
     */
    function () {
        return this._isDragging;
    };
    /** Starts dragging an item. */
    /**
     * Starts dragging an item.
     * @return {?}
     */
    DropListRef.prototype.start = /**
     * Starts dragging an item.
     * @return {?}
     */
    function () {
        var _this = this;
        this.beforeStarted.next();
        this._isDragging = true;
        this._activeDraggables = this._draggables.slice();
        this._cacheOwnPosition();
        this._cacheItemPositions();
        this._siblings.forEach(function (sibling) { return sibling._startReceiving(_this); });
    };
    /**
     * Emits an event to indicate that the user moved an item into the container.
     * @param item Item that was moved into the container.
     * @param pointerX Position of the item along the X axis.
     * @param pointerY Position of the item along the Y axis.
     */
    /**
     * Emits an event to indicate that the user moved an item into the container.
     * @param {?} item Item that was moved into the container.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @return {?}
     */
    DropListRef.prototype.enter = /**
     * Emits an event to indicate that the user moved an item into the container.
     * @param {?} item Item that was moved into the container.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @return {?}
     */
    function (item, pointerX, pointerY) {
        this.entered.next({ item: item, container: this });
        this.start();
        // We use the coordinates of where the item entered the drop
        // zone to figure out at which index it should be inserted.
        /** @type {?} */
        var newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY);
        /** @type {?} */
        var currentIndex = this._activeDraggables.indexOf(item);
        /** @type {?} */
        var newPositionReference = this._activeDraggables[newIndex];
        /** @type {?} */
        var placeholder = item.getPlaceholderElement();
        // Since the item may be in the `activeDraggables` already (e.g. if the user dragged it
        // into another container and back again), we have to ensure that it isn't duplicated.
        if (currentIndex > -1) {
            this._activeDraggables.splice(currentIndex, 1);
        }
        // Don't use items that are being dragged as a reference, because
        // their element has been moved down to the bottom of the body.
        if (newPositionReference && !this._dragDropRegistry.isDragging(newPositionReference)) {
            /** @type {?} */
            var element = newPositionReference.getRootElement();
            (/** @type {?} */ (element.parentElement)).insertBefore(placeholder, element);
            this._activeDraggables.splice(newIndex, 0, item);
        }
        else {
            this.element.appendChild(placeholder);
            this._activeDraggables.push(item);
        }
        // The transform needs to be cleared so it doesn't throw off the measurements.
        placeholder.style.transform = '';
        // Note that the positions were already cached when we called `start` above,
        // but we need to refresh them since the amount of items has changed.
        this._cacheItemPositions();
    };
    /**
     * Removes an item from the container after it was dragged into another container by the user.
     * @param item Item that was dragged out.
     */
    /**
     * Removes an item from the container after it was dragged into another container by the user.
     * @param {?} item Item that was dragged out.
     * @return {?}
     */
    DropListRef.prototype.exit = /**
     * Removes an item from the container after it was dragged into another container by the user.
     * @param {?} item Item that was dragged out.
     * @return {?}
     */
    function (item) {
        this._reset();
        this.exited.next({ item: item, container: this });
    };
    /**
     * Drops an item into this container.
     * @param item Item being dropped into the container.
     * @param currentIndex Index at which the item should be inserted.
     * @param previousContainer Container from which the item got dragged in.
     * @param isPointerOverContainer Whether the user's pointer was over the
     *    container when the item was dropped.
     */
    /**
     * Drops an item into this container.
     * @param {?} item Item being dropped into the container.
     * @param {?} currentIndex Index at which the item should be inserted.
     * @param {?} previousContainer Container from which the item got dragged in.
     * @param {?} isPointerOverContainer Whether the user's pointer was over the
     *    container when the item was dropped.
     * @return {?}
     */
    DropListRef.prototype.drop = /**
     * Drops an item into this container.
     * @param {?} item Item being dropped into the container.
     * @param {?} currentIndex Index at which the item should be inserted.
     * @param {?} previousContainer Container from which the item got dragged in.
     * @param {?} isPointerOverContainer Whether the user's pointer was over the
     *    container when the item was dropped.
     * @return {?}
     */
    function (item, currentIndex, previousContainer, isPointerOverContainer) {
        this._reset();
        this.dropped.next({
            item: item,
            currentIndex: currentIndex,
            previousIndex: previousContainer.getItemIndex(item),
            container: this,
            previousContainer: previousContainer,
            isPointerOverContainer: isPointerOverContainer
        });
    };
    /**
     * Sets the draggable items that are a part of this list.
     * @param items Items that are a part of this list.
     */
    /**
     * Sets the draggable items that are a part of this list.
     * @template THIS
     * @this {THIS}
     * @param {?} items Items that are a part of this list.
     * @return {THIS}
     */
    DropListRef.prototype.withItems = /**
     * Sets the draggable items that are a part of this list.
     * @template THIS
     * @this {THIS}
     * @param {?} items Items that are a part of this list.
     * @return {THIS}
     */
    function (items) {
        var _this = this;
        (/** @type {?} */ (this))._draggables = items;
        items.forEach(function (item) { return item._withDropContainer((/** @type {?} */ (_this))); });
        return (/** @type {?} */ (this));
    };
    /** Sets the layout direction of the drop list. */
    /**
     * Sets the layout direction of the drop list.
     * @template THIS
     * @this {THIS}
     * @param {?} direction
     * @return {THIS}
     */
    DropListRef.prototype.withDirection = /**
     * Sets the layout direction of the drop list.
     * @template THIS
     * @this {THIS}
     * @param {?} direction
     * @return {THIS}
     */
    function (direction) {
        (/** @type {?} */ (this))._direction = direction;
        return (/** @type {?} */ (this));
    };
    /**
     * Sets the containers that are connected to this one. When two or more containers are
     * connected, the user will be allowed to transfer items between them.
     * @param connectedTo Other containers that the current containers should be connected to.
     */
    /**
     * Sets the containers that are connected to this one. When two or more containers are
     * connected, the user will be allowed to transfer items between them.
     * @template THIS
     * @this {THIS}
     * @param {?} connectedTo Other containers that the current containers should be connected to.
     * @return {THIS}
     */
    DropListRef.prototype.connectedTo = /**
     * Sets the containers that are connected to this one. When two or more containers are
     * connected, the user will be allowed to transfer items between them.
     * @template THIS
     * @this {THIS}
     * @param {?} connectedTo Other containers that the current containers should be connected to.
     * @return {THIS}
     */
    function (connectedTo) {
        (/** @type {?} */ (this))._siblings = connectedTo.slice();
        return (/** @type {?} */ (this));
    };
    /**
     * Sets the orientation of the container.
     * @param orientation New orientation for the container.
     */
    /**
     * Sets the orientation of the container.
     * @template THIS
     * @this {THIS}
     * @param {?} orientation New orientation for the container.
     * @return {THIS}
     */
    DropListRef.prototype.withOrientation = /**
     * Sets the orientation of the container.
     * @template THIS
     * @this {THIS}
     * @param {?} orientation New orientation for the container.
     * @return {THIS}
     */
    function (orientation) {
        (/** @type {?} */ (this))._orientation = orientation;
        return (/** @type {?} */ (this));
    };
    /**
     * Figures out the index of an item in the container.
     * @param item Item whose index should be determined.
     */
    /**
     * Figures out the index of an item in the container.
     * @param {?} item Item whose index should be determined.
     * @return {?}
     */
    DropListRef.prototype.getItemIndex = /**
     * Figures out the index of an item in the container.
     * @param {?} item Item whose index should be determined.
     * @return {?}
     */
    function (item) {
        if (!this._isDragging) {
            return this._draggables.indexOf(item);
        }
        // Items are sorted always by top/left in the cache, however they flow differently in RTL.
        // The rest of the logic still stands no matter what orientation we're in, however
        // we need to invert the array when determining the index.
        /** @type {?} */
        var items = this._orientation === 'horizontal' && this._direction === 'rtl' ?
            this._itemPositions.slice().reverse() : this._itemPositions;
        return findIndex(items, function (currentItem) { return currentItem.drag === item; });
    };
    /**
     * Whether the list is able to receive the item that
     * is currently being dragged inside a connected drop list.
     */
    /**
     * Whether the list is able to receive the item that
     * is currently being dragged inside a connected drop list.
     * @return {?}
     */
    DropListRef.prototype.isReceiving = /**
     * Whether the list is able to receive the item that
     * is currently being dragged inside a connected drop list.
     * @return {?}
     */
    function () {
        return this._activeSiblings.size > 0;
    };
    /**
     * Sorts an item inside the container based on its position.
     * @param item Item to be sorted.
     * @param pointerX Position of the item along the X axis.
     * @param pointerY Position of the item along the Y axis.
     * @param pointerDelta Direction in which the pointer is moving along each axis.
     */
    /**
     * Sorts an item inside the container based on its position.
     * @param {?} item Item to be sorted.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @param {?} pointerDelta Direction in which the pointer is moving along each axis.
     * @return {?}
     */
    DropListRef.prototype._sortItem = /**
     * Sorts an item inside the container based on its position.
     * @param {?} item Item to be sorted.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @param {?} pointerDelta Direction in which the pointer is moving along each axis.
     * @return {?}
     */
    function (item, pointerX, pointerY, pointerDelta) {
        // Don't sort the item if it's out of range.
        if (!this._isPointerNearDropContainer(pointerX, pointerY)) {
            return;
        }
        /** @type {?} */
        var siblings = this._itemPositions;
        /** @type {?} */
        var newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY, pointerDelta);
        if (newIndex === -1 && siblings.length > 0) {
            return;
        }
        /** @type {?} */
        var isHorizontal = this._orientation === 'horizontal';
        /** @type {?} */
        var currentIndex = findIndex(siblings, function (currentItem) { return currentItem.drag === item; });
        /** @type {?} */
        var siblingAtNewPosition = siblings[newIndex];
        /** @type {?} */
        var currentPosition = siblings[currentIndex].clientRect;
        /** @type {?} */
        var newPosition = siblingAtNewPosition.clientRect;
        /** @type {?} */
        var delta = currentIndex > newIndex ? 1 : -1;
        this._previousSwap.drag = siblingAtNewPosition.drag;
        this._previousSwap.delta = isHorizontal ? pointerDelta.x : pointerDelta.y;
        // How many pixels the item's placeholder should be offset.
        /** @type {?} */
        var itemOffset = this._getItemOffsetPx(currentPosition, newPosition, delta);
        // How many pixels all the other items should be offset.
        /** @type {?} */
        var siblingOffset = this._getSiblingOffsetPx(currentIndex, siblings, delta);
        // Save the previous order of the items before moving the item to its new index.
        // We use this to check whether an item has been moved as a result of the sorting.
        /** @type {?} */
        var oldOrder = siblings.slice();
        // Shuffle the array in place.
        moveItemInArray(siblings, currentIndex, newIndex);
        this.sorted.next({
            previousIndex: currentIndex,
            currentIndex: newIndex,
            container: this,
            item: item
        });
        siblings.forEach(function (sibling, index) {
            // Don't do anything if the position hasn't changed.
            if (oldOrder[index] === sibling) {
                return;
            }
            /** @type {?} */
            var isDraggedItem = sibling.drag === item;
            /** @type {?} */
            var offset = isDraggedItem ? itemOffset : siblingOffset;
            /** @type {?} */
            var elementToOffset = isDraggedItem ? item.getPlaceholderElement() :
                sibling.drag.getRootElement();
            // Update the offset to reflect the new position.
            sibling.offset += offset;
            // Since we're moving the items with a `transform`, we need to adjust their cached
            // client rects to reflect their new position, as well as swap their positions in the cache.
            // Note that we shouldn't use `getBoundingClientRect` here to update the cache, because the
            // elements may be mid-animation which will give us a wrong result.
            if (isHorizontal) {
                // Round the transforms since some browsers will
                // blur the elements, for sub-pixel transforms.
                elementToOffset.style.transform = "translate3d(" + Math.round(sibling.offset) + "px, 0, 0)";
                adjustClientRect(sibling.clientRect, 0, offset);
            }
            else {
                elementToOffset.style.transform = "translate3d(0, " + Math.round(sibling.offset) + "px, 0)";
                adjustClientRect(sibling.clientRect, offset, 0);
            }
        });
    };
    /** Caches the position of the drop list. */
    /**
     * Caches the position of the drop list.
     * @private
     * @return {?}
     */
    DropListRef.prototype._cacheOwnPosition = /**
     * Caches the position of the drop list.
     * @private
     * @return {?}
     */
    function () {
        this._clientRect = this.element.getBoundingClientRect();
    };
    /** Refreshes the position cache of the items and sibling containers. */
    /**
     * Refreshes the position cache of the items and sibling containers.
     * @private
     * @return {?}
     */
    DropListRef.prototype._cacheItemPositions = /**
     * Refreshes the position cache of the items and sibling containers.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var isHorizontal = this._orientation === 'horizontal';
        this._itemPositions = this._activeDraggables.map(function (drag) {
            /** @type {?} */
            var elementToMeasure = _this._dragDropRegistry.isDragging(drag) ?
                // If the element is being dragged, we have to measure the
                // placeholder, because the element is hidden.
                drag.getPlaceholderElement() :
                drag.getRootElement();
            /** @type {?} */
            var clientRect = elementToMeasure.getBoundingClientRect();
            return {
                drag: drag,
                offset: 0,
                // We need to clone the `clientRect` here, because all the values on it are readonly
                // and we need to be able to update them. Also we can't use a spread here, because
                // the values on a `ClientRect` aren't own properties. See:
                // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect#Notes
                clientRect: {
                    top: clientRect.top,
                    right: clientRect.right,
                    bottom: clientRect.bottom,
                    left: clientRect.left,
                    width: clientRect.width,
                    height: clientRect.height
                }
            };
        }).sort(function (a, b) {
            return isHorizontal ? a.clientRect.left - b.clientRect.left :
                a.clientRect.top - b.clientRect.top;
        });
    };
    /** Resets the container to its initial state. */
    /**
     * Resets the container to its initial state.
     * @private
     * @return {?}
     */
    DropListRef.prototype._reset = /**
     * Resets the container to its initial state.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._isDragging = false;
        // TODO(crisbeto): may have to wait for the animations to finish.
        this._activeDraggables.forEach(function (item) { return item.getRootElement().style.transform = ''; });
        this._siblings.forEach(function (sibling) { return sibling._stopReceiving(_this); });
        this._activeDraggables = [];
        this._itemPositions = [];
        this._previousSwap.drag = null;
        this._previousSwap.delta = 0;
    };
    /**
     * Gets the offset in pixels by which the items that aren't being dragged should be moved.
     * @param currentIndex Index of the item currently being dragged.
     * @param siblings All of the items in the list.
     * @param delta Direction in which the user is moving.
     */
    /**
     * Gets the offset in pixels by which the items that aren't being dragged should be moved.
     * @private
     * @param {?} currentIndex Index of the item currently being dragged.
     * @param {?} siblings All of the items in the list.
     * @param {?} delta Direction in which the user is moving.
     * @return {?}
     */
    DropListRef.prototype._getSiblingOffsetPx = /**
     * Gets the offset in pixels by which the items that aren't being dragged should be moved.
     * @private
     * @param {?} currentIndex Index of the item currently being dragged.
     * @param {?} siblings All of the items in the list.
     * @param {?} delta Direction in which the user is moving.
     * @return {?}
     */
    function (currentIndex, siblings, delta) {
        /** @type {?} */
        var isHorizontal = this._orientation === 'horizontal';
        /** @type {?} */
        var currentPosition = siblings[currentIndex].clientRect;
        /** @type {?} */
        var immediateSibling = siblings[currentIndex + delta * -1];
        /** @type {?} */
        var siblingOffset = currentPosition[isHorizontal ? 'width' : 'height'] * delta;
        if (immediateSibling) {
            /** @type {?} */
            var start = isHorizontal ? 'left' : 'top';
            /** @type {?} */
            var end = isHorizontal ? 'right' : 'bottom';
            // Get the spacing between the start of the current item and the end of the one immediately
            // after it in the direction in which the user is dragging, or vice versa. We add it to the
            // offset in order to push the element to where it will be when it's inline and is influenced
            // by the `margin` of its siblings.
            if (delta === -1) {
                siblingOffset -= immediateSibling.clientRect[start] - currentPosition[end];
            }
            else {
                siblingOffset += currentPosition[start] - immediateSibling.clientRect[end];
            }
        }
        return siblingOffset;
    };
    /**
     * Checks whether the pointer coordinates are close to the drop container.
     * @param pointerX Coordinates along the X axis.
     * @param pointerY Coordinates along the Y axis.
     */
    /**
     * Checks whether the pointer coordinates are close to the drop container.
     * @private
     * @param {?} pointerX Coordinates along the X axis.
     * @param {?} pointerY Coordinates along the Y axis.
     * @return {?}
     */
    DropListRef.prototype._isPointerNearDropContainer = /**
     * Checks whether the pointer coordinates are close to the drop container.
     * @private
     * @param {?} pointerX Coordinates along the X axis.
     * @param {?} pointerY Coordinates along the Y axis.
     * @return {?}
     */
    function (pointerX, pointerY) {
        var _a = this._clientRect, top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left, width = _a.width, height = _a.height;
        /** @type {?} */
        var xThreshold = width * DROP_PROXIMITY_THRESHOLD;
        /** @type {?} */
        var yThreshold = height * DROP_PROXIMITY_THRESHOLD;
        return pointerY > top - yThreshold && pointerY < bottom + yThreshold &&
            pointerX > left - xThreshold && pointerX < right + xThreshold;
    };
    /**
     * Gets the offset in pixels by which the item that is being dragged should be moved.
     * @param currentPosition Current position of the item.
     * @param newPosition Position of the item where the current item should be moved.
     * @param delta Direction in which the user is moving.
     */
    /**
     * Gets the offset in pixels by which the item that is being dragged should be moved.
     * @private
     * @param {?} currentPosition Current position of the item.
     * @param {?} newPosition Position of the item where the current item should be moved.
     * @param {?} delta Direction in which the user is moving.
     * @return {?}
     */
    DropListRef.prototype._getItemOffsetPx = /**
     * Gets the offset in pixels by which the item that is being dragged should be moved.
     * @private
     * @param {?} currentPosition Current position of the item.
     * @param {?} newPosition Position of the item where the current item should be moved.
     * @param {?} delta Direction in which the user is moving.
     * @return {?}
     */
    function (currentPosition, newPosition, delta) {
        /** @type {?} */
        var isHorizontal = this._orientation === 'horizontal';
        /** @type {?} */
        var itemOffset = isHorizontal ? newPosition.left - currentPosition.left :
            newPosition.top - currentPosition.top;
        // Account for differences in the item width/height.
        if (delta === -1) {
            itemOffset += isHorizontal ? newPosition.width - currentPosition.width :
                newPosition.height - currentPosition.height;
        }
        return itemOffset;
    };
    /**
     * Gets the index of an item in the drop container, based on the position of the user's pointer.
     * @param item Item that is being sorted.
     * @param pointerX Position of the user's pointer along the X axis.
     * @param pointerY Position of the user's pointer along the Y axis.
     * @param delta Direction in which the user is moving their pointer.
     */
    /**
     * Gets the index of an item in the drop container, based on the position of the user's pointer.
     * @private
     * @param {?} item Item that is being sorted.
     * @param {?} pointerX Position of the user's pointer along the X axis.
     * @param {?} pointerY Position of the user's pointer along the Y axis.
     * @param {?=} delta Direction in which the user is moving their pointer.
     * @return {?}
     */
    DropListRef.prototype._getItemIndexFromPointerPosition = /**
     * Gets the index of an item in the drop container, based on the position of the user's pointer.
     * @private
     * @param {?} item Item that is being sorted.
     * @param {?} pointerX Position of the user's pointer along the X axis.
     * @param {?} pointerY Position of the user's pointer along the Y axis.
     * @param {?=} delta Direction in which the user is moving their pointer.
     * @return {?}
     */
    function (item, pointerX, pointerY, delta) {
        var _this = this;
        /** @type {?} */
        var isHorizontal = this._orientation === 'horizontal';
        return findIndex(this._itemPositions, function (_a, _, array) {
            var drag = _a.drag, clientRect = _a.clientRect;
            if (drag === item) {
                // If there's only one item left in the container, it must be
                // the dragged item itself so we use it as a reference.
                return array.length < 2;
            }
            if (delta) {
                /** @type {?} */
                var direction = isHorizontal ? delta.x : delta.y;
                // If the user is still hovering over the same item as last time, and they didn't change
                // the direction in which they're dragging, we don't consider it a direction swap.
                if (drag === _this._previousSwap.drag && direction === _this._previousSwap.delta) {
                    return false;
                }
            }
            return isHorizontal ?
                // Round these down since most browsers report client rects with
                // sub-pixel precision, whereas the pointer coordinates are rounded to pixels.
                pointerX >= Math.floor(clientRect.left) && pointerX <= Math.floor(clientRect.right) :
                pointerY >= Math.floor(clientRect.top) && pointerY <= Math.floor(clientRect.bottom);
        });
    };
    /**
     * Checks whether the user's pointer is positioned over the container.
     * @param x Pointer position along the X axis.
     * @param y Pointer position along the Y axis.
     */
    /**
     * Checks whether the user's pointer is positioned over the container.
     * @param {?} x Pointer position along the X axis.
     * @param {?} y Pointer position along the Y axis.
     * @return {?}
     */
    DropListRef.prototype._isOverContainer = /**
     * Checks whether the user's pointer is positioned over the container.
     * @param {?} x Pointer position along the X axis.
     * @param {?} y Pointer position along the Y axis.
     * @return {?}
     */
    function (x, y) {
        return isInsideClientRect(this._clientRect, x, y);
    };
    /**
     * Figures out whether an item should be moved into a sibling
     * drop container, based on its current position.
     * @param item Drag item that is being moved.
     * @param x Position of the item along the X axis.
     * @param y Position of the item along the Y axis.
     */
    /**
     * Figures out whether an item should be moved into a sibling
     * drop container, based on its current position.
     * @param {?} item Drag item that is being moved.
     * @param {?} x Position of the item along the X axis.
     * @param {?} y Position of the item along the Y axis.
     * @return {?}
     */
    DropListRef.prototype._getSiblingContainerFromPosition = /**
     * Figures out whether an item should be moved into a sibling
     * drop container, based on its current position.
     * @param {?} item Drag item that is being moved.
     * @param {?} x Position of the item along the X axis.
     * @param {?} y Position of the item along the Y axis.
     * @return {?}
     */
    function (item, x, y) {
        return this._siblings.find(function (sibling) { return sibling._canReceive(item, x, y); });
    };
    /**
     * Checks whether the drop list can receive the passed-in item.
     * @param item Item that is being dragged into the list.
     * @param x Position of the item along the X axis.
     * @param y Position of the item along the Y axis.
     */
    /**
     * Checks whether the drop list can receive the passed-in item.
     * @param {?} item Item that is being dragged into the list.
     * @param {?} x Position of the item along the X axis.
     * @param {?} y Position of the item along the Y axis.
     * @return {?}
     */
    DropListRef.prototype._canReceive = /**
     * Checks whether the drop list can receive the passed-in item.
     * @param {?} item Item that is being dragged into the list.
     * @param {?} x Position of the item along the X axis.
     * @param {?} y Position of the item along the Y axis.
     * @return {?}
     */
    function (item, x, y) {
        if (!this.enterPredicate(item, this) || !isInsideClientRect(this._clientRect, x, y)) {
            return false;
        }
        /** @type {?} */
        var elementFromPoint = this._document.elementFromPoint(x, y);
        // If there's no element at the pointer position, then
        // the client rect is probably scrolled out of the view.
        if (!elementFromPoint) {
            return false;
        }
        // The `ClientRect`, that we're using to find the container over which the user is
        // hovering, doesn't give us any information on whether the element has been scrolled
        // out of the view or whether it's overlapping with other containers. This means that
        // we could end up transferring the item into a container that's invisible or is positioned
        // below another one. We use the result from `elementFromPoint` to get the top-most element
        // at the pointer position and to find whether it's one of the intersecting drop containers.
        return elementFromPoint === this.element || this.element.contains(elementFromPoint);
    };
    /**
     * Called by one of the connected drop lists when a dragging sequence has started.
     * @param sibling Sibling in which dragging has started.
     */
    /**
     * Called by one of the connected drop lists when a dragging sequence has started.
     * @param {?} sibling Sibling in which dragging has started.
     * @return {?}
     */
    DropListRef.prototype._startReceiving = /**
     * Called by one of the connected drop lists when a dragging sequence has started.
     * @param {?} sibling Sibling in which dragging has started.
     * @return {?}
     */
    function (sibling) {
        /** @type {?} */
        var activeSiblings = this._activeSiblings;
        if (!activeSiblings.has(sibling)) {
            activeSiblings.add(sibling);
            this._cacheOwnPosition();
        }
    };
    /**
     * Called by a connected drop list when dragging has stopped.
     * @param sibling Sibling whose dragging has stopped.
     */
    /**
     * Called by a connected drop list when dragging has stopped.
     * @param {?} sibling Sibling whose dragging has stopped.
     * @return {?}
     */
    DropListRef.prototype._stopReceiving = /**
     * Called by a connected drop list when dragging has stopped.
     * @param {?} sibling Sibling whose dragging has stopped.
     * @return {?}
     */
    function (sibling) {
        this._activeSiblings.delete(sibling);
    };
    return DropListRef;
}());
/**
 * Updates the top/left positions of a `ClientRect`, as well as their bottom/right counterparts.
 * @param {?} clientRect `ClientRect` that should be updated.
 * @param {?} top Amount to add to the `top` position.
 * @param {?} left Amount to add to the `left` position.
 * @return {?}
 */
function adjustClientRect(clientRect, top, left) {
    clientRect.top += top;
    clientRect.bottom = clientRect.top + clientRect.height;
    clientRect.left += left;
    clientRect.right = clientRect.left + clientRect.width;
}
/**
 * Finds the index of an item that matches a predicate function. Used as an equivalent
 * of `Array.prototype.find` which isn't part of the standard Google typings.
 * @template T
 * @param {?} array Array in which to look for matches.
 * @param {?} predicate Function used to determine whether an item is a match.
 * @return {?}
 */
function findIndex(array, predicate) {
    for (var i = 0; i < array.length; i++) {
        if (predicate(array[i], i, array)) {
            return i;
        }
    }
    return -1;
}
/**
 * Checks whether some coordinates are within a `ClientRect`.
 * @param {?} clientRect ClientRect that is being checked.
 * @param {?} x Coordinates along the X axis.
 * @param {?} y Coordinates along the Y axis.
 * @return {?}
 */
function isInsideClientRect(clientRect, x, y) {
    var top = clientRect.top, bottom = clientRect.bottom, left = clientRect.left, right = clientRect.right;
    return y >= top && y <= bottom && x >= left && x <= right;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Event options that can be used to bind an active, capturing event.
 * @type {?}
 */
var activeCapturingEventOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["normalizePassiveListenerOptions"])({
    passive: false,
    capture: true
});
/**
 * Service that keeps track of all the drag item and drop container
 * instances, and manages global event listeners on the `document`.
 * \@docs-private
 * @template I, C
 */
// Note: this class is generic, rather than referencing CdkDrag and CdkDropList directly, in order
// to avoid circular imports. If we were to reference them here, importing the registry into the
// classes that are registering themselves will introduce a circular import.
var DragDropRegistry = /** @class */ (function () {
    function DragDropRegistry(_ngZone, _document) {
        var _this = this;
        this._ngZone = _ngZone;
        /**
         * Registered drop container instances.
         */
        this._dropInstances = new Set();
        /**
         * Registered drag item instances.
         */
        this._dragInstances = new Set();
        /**
         * Drag item instances that are currently being dragged.
         */
        this._activeDragInstances = new Set();
        /**
         * Keeps track of the event listeners that we've bound to the `document`.
         */
        this._globalListeners = new Map();
        /**
         * Emits the `touchmove` or `mousemove` events that are dispatched
         * while the user is dragging a drag item instance.
         */
        this.pointerMove = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits the `touchend` or `mouseup` events that are dispatched
         * while the user is dragging a drag item instance.
         */
        this.pointerUp = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Event listener that will prevent the default browser action while the user is dragging.
         * @param event Event whose default action should be prevented.
         */
        this._preventDefaultWhileDragging = function (event) {
            if (_this._activeDragInstances.size) {
                event.preventDefault();
            }
        };
        this._document = _document;
    }
    /** Adds a drop container to the registry. */
    /**
     * Adds a drop container to the registry.
     * @param {?} drop
     * @return {?}
     */
    DragDropRegistry.prototype.registerDropContainer = /**
     * Adds a drop container to the registry.
     * @param {?} drop
     * @return {?}
     */
    function (drop) {
        if (!this._dropInstances.has(drop)) {
            if (this.getDropContainer(drop.id)) {
                throw Error("Drop instance with id \"" + drop.id + "\" has already been registered.");
            }
            this._dropInstances.add(drop);
        }
    };
    /** Adds a drag item instance to the registry. */
    /**
     * Adds a drag item instance to the registry.
     * @param {?} drag
     * @return {?}
     */
    DragDropRegistry.prototype.registerDragItem = /**
     * Adds a drag item instance to the registry.
     * @param {?} drag
     * @return {?}
     */
    function (drag) {
        var _this = this;
        this._dragInstances.add(drag);
        // The `touchmove` event gets bound once, ahead of time, because WebKit
        // won't preventDefault on a dynamically-added `touchmove` listener.
        // See https://bugs.webkit.org/show_bug.cgi?id=184250.
        if (this._dragInstances.size === 1) {
            this._ngZone.runOutsideAngular(function () {
                // The event handler has to be explicitly active,
                // because newer browsers make it passive by default.
                _this._document.addEventListener('touchmove', _this._preventDefaultWhileDragging, activeCapturingEventOptions);
            });
        }
    };
    /** Removes a drop container from the registry. */
    /**
     * Removes a drop container from the registry.
     * @param {?} drop
     * @return {?}
     */
    DragDropRegistry.prototype.removeDropContainer = /**
     * Removes a drop container from the registry.
     * @param {?} drop
     * @return {?}
     */
    function (drop) {
        this._dropInstances.delete(drop);
    };
    /** Removes a drag item instance from the registry. */
    /**
     * Removes a drag item instance from the registry.
     * @param {?} drag
     * @return {?}
     */
    DragDropRegistry.prototype.removeDragItem = /**
     * Removes a drag item instance from the registry.
     * @param {?} drag
     * @return {?}
     */
    function (drag) {
        this._dragInstances.delete(drag);
        this.stopDragging(drag);
        if (this._dragInstances.size === 0) {
            this._document.removeEventListener('touchmove', this._preventDefaultWhileDragging, activeCapturingEventOptions);
        }
    };
    /**
     * Starts the dragging sequence for a drag instance.
     * @param drag Drag instance which is being dragged.
     * @param event Event that initiated the dragging.
     */
    /**
     * Starts the dragging sequence for a drag instance.
     * @param {?} drag Drag instance which is being dragged.
     * @param {?} event Event that initiated the dragging.
     * @return {?}
     */
    DragDropRegistry.prototype.startDragging = /**
     * Starts the dragging sequence for a drag instance.
     * @param {?} drag Drag instance which is being dragged.
     * @param {?} event Event that initiated the dragging.
     * @return {?}
     */
    function (drag, event) {
        var _this = this;
        this._activeDragInstances.add(drag);
        if (this._activeDragInstances.size === 1) {
            /** @type {?} */
            var isTouchEvent = event.type.startsWith('touch');
            /** @type {?} */
            var moveEvent = isTouchEvent ? 'touchmove' : 'mousemove';
            /** @type {?} */
            var upEvent = isTouchEvent ? 'touchend' : 'mouseup';
            // We explicitly bind __active__ listeners here, because newer browsers will default to
            // passive ones for `mousemove` and `touchmove`. The events need to be active, because we
            // use `preventDefault` to prevent the page from scrolling while the user is dragging.
            this._globalListeners
                .set(moveEvent, {
                handler: function (e) { return _this.pointerMove.next((/** @type {?} */ (e))); },
                options: activeCapturingEventOptions
            })
                .set(upEvent, {
                handler: function (e) { return _this.pointerUp.next((/** @type {?} */ (e))); },
                options: true
            })
                // Preventing the default action on `mousemove` isn't enough to disable text selection
                // on Safari so we need to prevent the selection event as well. Alternatively this can
                // be done by setting `user-select: none` on the `body`, however it has causes a style
                // recalculation which can be expensive on pages with a lot of elements.
                .set('selectstart', {
                handler: this._preventDefaultWhileDragging,
                options: activeCapturingEventOptions
            });
            // TODO(crisbeto): prevent mouse wheel scrolling while
            // dragging until we've set up proper scroll handling.
            if (!isTouchEvent) {
                this._globalListeners.set('wheel', {
                    handler: this._preventDefaultWhileDragging,
                    options: activeCapturingEventOptions
                });
            }
            this._ngZone.runOutsideAngular(function () {
                _this._globalListeners.forEach(function (config, name) {
                    _this._document.addEventListener(name, config.handler, config.options);
                });
            });
        }
    };
    /** Stops dragging a drag item instance. */
    /**
     * Stops dragging a drag item instance.
     * @param {?} drag
     * @return {?}
     */
    DragDropRegistry.prototype.stopDragging = /**
     * Stops dragging a drag item instance.
     * @param {?} drag
     * @return {?}
     */
    function (drag) {
        this._activeDragInstances.delete(drag);
        if (this._activeDragInstances.size === 0) {
            this._clearGlobalListeners();
        }
    };
    /** Gets whether a drag item instance is currently being dragged. */
    /**
     * Gets whether a drag item instance is currently being dragged.
     * @param {?} drag
     * @return {?}
     */
    DragDropRegistry.prototype.isDragging = /**
     * Gets whether a drag item instance is currently being dragged.
     * @param {?} drag
     * @return {?}
     */
    function (drag) {
        return this._activeDragInstances.has(drag);
    };
    /**
     * Gets a drop container by its id.
     * @deprecated No longer being used. To be removed.
     * @breaking-change 8.0.0
     */
    /**
     * Gets a drop container by its id.
     * @deprecated No longer being used. To be removed.
     * \@breaking-change 8.0.0
     * @param {?} id
     * @return {?}
     */
    DragDropRegistry.prototype.getDropContainer = /**
     * Gets a drop container by its id.
     * @deprecated No longer being used. To be removed.
     * \@breaking-change 8.0.0
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return Array.from(this._dropInstances).find(function (instance) { return instance.id === id; });
    };
    /**
     * @return {?}
     */
    DragDropRegistry.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._dragInstances.forEach(function (instance) { return _this.removeDragItem(instance); });
        this._dropInstances.forEach(function (instance) { return _this.removeDropContainer(instance); });
        this._clearGlobalListeners();
        this.pointerMove.complete();
        this.pointerUp.complete();
    };
    /** Clears out the global event listeners from the `document`. */
    /**
     * Clears out the global event listeners from the `document`.
     * @private
     * @return {?}
     */
    DragDropRegistry.prototype._clearGlobalListeners = /**
     * Clears out the global event listeners from the `document`.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._globalListeners.forEach(function (config, name) {
            _this._document.removeEventListener(name, config.handler, config.options);
        });
        this._globalListeners.clear();
    };
    DragDropRegistry.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    DragDropRegistry.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] }
    ]; };
    /** @nocollapse */ DragDropRegistry.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function DragDropRegistry_Factory() { return new DragDropRegistry(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])); }, token: DragDropRegistry, providedIn: "root" });
    return DragDropRegistry;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Default configuration to be used when creating a `DragRef`.
 * @type {?}
 */
var DEFAULT_CONFIG = {
    dragStartThreshold: 5,
    pointerDirectionChangeThreshold: 5
};
/**
 * Service that allows for drag-and-drop functionality to be attached to DOM elements.
 */
var DragDrop = /** @class */ (function () {
    function DragDrop(_document, _ngZone, _viewportRuler, _dragDropRegistry) {
        this._document = _document;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        this._dragDropRegistry = _dragDropRegistry;
    }
    /**
     * Turns an element into a draggable item.
     * @param element Element to which to attach the dragging functionality.
     * @param config Object used to configure the dragging behavior.
     */
    /**
     * Turns an element into a draggable item.
     * @template T
     * @param {?} element Element to which to attach the dragging functionality.
     * @param {?=} config Object used to configure the dragging behavior.
     * @return {?}
     */
    DragDrop.prototype.createDrag = /**
     * Turns an element into a draggable item.
     * @template T
     * @param {?} element Element to which to attach the dragging functionality.
     * @param {?=} config Object used to configure the dragging behavior.
     * @return {?}
     */
    function (element, config) {
        if (config === void 0) { config = DEFAULT_CONFIG; }
        return new DragRef(element, config, this._document, this._ngZone, this._viewportRuler, this._dragDropRegistry);
    };
    /**
     * Turns an element into a drop list.
     * @param element Element to which to attach the drop list functionality.
     */
    /**
     * Turns an element into a drop list.
     * @template T
     * @param {?} element Element to which to attach the drop list functionality.
     * @return {?}
     */
    DragDrop.prototype.createDropList = /**
     * Turns an element into a drop list.
     * @template T
     * @param {?} element Element to which to attach the drop list functionality.
     * @return {?}
     */
    function (element) {
        return new DropListRef(element, this._dragDropRegistry, this._document);
    };
    DragDrop.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    DragDrop.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
        { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ViewportRuler"] },
        { type: DragDropRegistry }
    ]; };
    /** @nocollapse */ DragDrop.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function DragDrop_Factory() { return new DragDrop(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ViewportRuler"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(DragDropRegistry)); }, token: DragDrop, providedIn: "root" });
    return DragDrop;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token that is used to provide a CdkDropList instance to CdkDrag.
 * Used for avoiding circular imports.
 * @type {?}
 */
var CDK_DROP_LIST = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('CDK_DROP_LIST');
/**
 * Injection token that is used to provide a CdkDropList instance to CdkDrag.
 * Used for avoiding circular imports.
 * @deprecated Use `CDK_DROP_LIST` instead.
 * \@breaking-change 8.0.0
 * @type {?}
 */
var CDK_DROP_LIST_CONTAINER = CDK_DROP_LIST;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token that can be used for a `CdkDrag` to provide itself as a parent to the
 * drag-specific child directive (`CdkDragHandle`, `CdkDragPreview` etc.). Used primarily
 * to avoid circular imports.
 * \@docs-private
 * @type {?}
 */
var CDK_DRAG_PARENT = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('CDK_DRAG_PARENT');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Handle that can be used to drag and CdkDrag instance.
 */
var CdkDragHandle = /** @class */ (function () {
    function CdkDragHandle(element, parentDrag) {
        this.element = element;
        /**
         * Emits when the state of the handle has changed.
         */
        this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._disabled = false;
        this._parentDrag = parentDrag;
        toggleNativeDragInteractions(element.nativeElement, false);
    }
    Object.defineProperty(CdkDragHandle.prototype, "disabled", {
        /** Whether starting to drag through this handle is disabled. */
        get: /**
         * Whether starting to drag through this handle is disabled.
         * @return {?}
         */
        function () { return this._disabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
            this._stateChanges.next(this);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CdkDragHandle.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._stateChanges.complete();
    };
    CdkDragHandle.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{
                    selector: '[cdkDragHandle]',
                    host: {
                        'class': 'cdk-drag-handle'
                    }
                },] },
    ];
    /** @nocollapse */
    CdkDragHandle.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [CDK_DRAG_PARENT,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] }
    ]; };
    CdkDragHandle.propDecorators = {
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkDragHandleDisabled',] }]
    };
    return CdkDragHandle;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Element that will be used as a template for the placeholder of a CdkDrag when
 * it is being dragged. The placeholder is displayed in place of the element being dragged.
 * @template T
 */
var CdkDragPlaceholder = /** @class */ (function () {
    function CdkDragPlaceholder(templateRef) {
        this.templateRef = templateRef;
    }
    CdkDragPlaceholder.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{
                    selector: 'ng-template[cdkDragPlaceholder]'
                },] },
    ];
    /** @nocollapse */
    CdkDragPlaceholder.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }
    ]; };
    CdkDragPlaceholder.propDecorators = {
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    return CdkDragPlaceholder;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Element that will be used as a template for the preview
 * of a CdkDrag when it is being dragged.
 * @template T
 */
var CdkDragPreview = /** @class */ (function () {
    function CdkDragPreview(templateRef) {
        this.templateRef = templateRef;
    }
    CdkDragPreview.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{
                    selector: 'ng-template[cdkDragPreview]'
                },] },
    ];
    /** @nocollapse */
    CdkDragPreview.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }
    ]; };
    CdkDragPreview.propDecorators = {
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    return CdkDragPreview;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token that can be used to configure the behavior of `CdkDrag`.
 * @type {?}
 */
var CDK_DRAG_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('CDK_DRAG_CONFIG', {
    providedIn: 'root',
    factory: CDK_DRAG_CONFIG_FACTORY
});
/**
 * \@docs-private
 * @return {?}
 */
function CDK_DRAG_CONFIG_FACTORY() {
    return { dragStartThreshold: 5, pointerDirectionChangeThreshold: 5 };
}
/**
 * Element that can be moved inside a CdkDropList container.
 * @template T
 */
var CdkDrag = /** @class */ (function () {
    function CdkDrag(element, dropContainer, _document, _ngZone, _viewContainerRef, viewportRuler, dragDropRegistry, config, _dir, 
    /**
     * @deprecated `viewportRuler`, `dragDropRegistry` and `_changeDetectorRef` parameters
     * to be removed. Also `dragDrop` parameter to be made required.
     * @breaking-change 8.0.0.
     */
    dragDrop, _changeDetectorRef) {
        var _this = this;
        this.element = element;
        this.dropContainer = dropContainer;
        this._document = _document;
        this._ngZone = _ngZone;
        this._viewContainerRef = _viewContainerRef;
        this._dir = _dir;
        this._changeDetectorRef = _changeDetectorRef;
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._disabled = false;
        /**
         * Emits when the user starts dragging the item.
         */
        this.started = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Emits when the user has released a drag item, before any animations have started.
         */
        this.released = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Emits when the user stops dragging an item in the container.
         */
        this.ended = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Emits when the user has moved the item into a new container.
         */
        this.entered = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Emits when the user removes the item its container by dragging it into another container.
         */
        this.exited = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Emits when the user drops the item inside a container.
         */
        this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Emits as the user is dragging the item. Use with caution,
         * because this event will fire for every pixel that the user has dragged.
         */
        this.moved = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            /** @type {?} */
            var subscription = _this._dragRef.moved.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (movedEvent) { return ({
                source: _this,
                pointerPosition: movedEvent.pointerPosition,
                event: movedEvent.event,
                delta: movedEvent.delta
            }); })).subscribe(observer);
            return function () {
                subscription.unsubscribe();
            };
        });
        // @breaking-change 8.0.0 Remove null check once the paramter is made required.
        if (dragDrop) {
            this._dragRef = dragDrop.createDrag(element, config);
        }
        else {
            this._dragRef = new DragRef(element, config, _document, _ngZone, viewportRuler, dragDropRegistry);
        }
        this._dragRef.data = this;
        this._syncInputs(this._dragRef);
        this._handleEvents(this._dragRef);
    }
    Object.defineProperty(CdkDrag.prototype, "disabled", {
        /** Whether starting to drag this element is disabled. */
        get: /**
         * Whether starting to drag this element is disabled.
         * @return {?}
         */
        function () {
            return this._disabled || (this.dropContainer && this.dropContainer.disabled);
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
            this._dragRef.disabled = this._disabled;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     */
    /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     * @return {?}
     */
    CdkDrag.prototype.getPlaceholderElement = /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     * @return {?}
     */
    function () {
        return this._dragRef.getPlaceholderElement();
    };
    /** Returns the root draggable element. */
    /**
     * Returns the root draggable element.
     * @return {?}
     */
    CdkDrag.prototype.getRootElement = /**
     * Returns the root draggable element.
     * @return {?}
     */
    function () {
        return this._dragRef.getRootElement();
    };
    /** Resets a standalone drag item to its initial position. */
    /**
     * Resets a standalone drag item to its initial position.
     * @return {?}
     */
    CdkDrag.prototype.reset = /**
     * Resets a standalone drag item to its initial position.
     * @return {?}
     */
    function () {
        this._dragRef.reset();
    };
    /**
     * @return {?}
     */
    CdkDrag.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // We need to wait for the zone to stabilize, in order for the reference
        // element to be in the proper place in the DOM. This is mostly relevant
        // for draggable elements inside portals since they get stamped out in
        // their original DOM position and then they get transferred to the portal.
        this._ngZone.onStable.asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed))
            .subscribe(function () {
            _this._updateRootElement();
            // Listen for any newly-added handles.
            _this._handles.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(_this._handles), 
            // Sync the new handles with the DragRef.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(function (handles) {
                /** @type {?} */
                var childHandleElements = handles
                    .filter(function (handle) { return handle._parentDrag === _this; })
                    .map(function (handle) { return handle.element; });
                _this._dragRef.withHandles(childHandleElements);
            }), 
            // Listen if the state of any of the handles changes.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (handles) {
                return rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"].apply(void 0, handles.map(function (item) { return item._stateChanges; }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(_this._destroyed)).subscribe(function (handleInstance) {
                // Enabled/disable the handle that changed in the DragRef.
                /** @type {?} */
                var dragRef = _this._dragRef;
                /** @type {?} */
                var handle = handleInstance.element.nativeElement;
                handleInstance.disabled ? dragRef.disableHandle(handle) : dragRef.enableHandle(handle);
            });
        });
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CdkDrag.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var rootSelectorChange = changes['rootElementSelector'];
        // We don't have to react to the first change since it's being
        // handled in `ngAfterViewInit` where it needs to be deferred.
        if (rootSelectorChange && !rootSelectorChange.firstChange) {
            this._updateRootElement();
        }
    };
    /**
     * @return {?}
     */
    CdkDrag.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroyed.next();
        this._destroyed.complete();
        this._dragRef.dispose();
    };
    /** Syncs the root element with the `DragRef`. */
    /**
     * Syncs the root element with the `DragRef`.
     * @private
     * @return {?}
     */
    CdkDrag.prototype._updateRootElement = /**
     * Syncs the root element with the `DragRef`.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var element = this.element.nativeElement;
        /** @type {?} */
        var rootElement = this.rootElementSelector ?
            getClosestMatchingAncestor(element, this.rootElementSelector) : element;
        if (rootElement && rootElement.nodeType !== this._document.ELEMENT_NODE) {
            throw Error("cdkDrag must be attached to an element node. " +
                ("Currently attached to \"" + rootElement.nodeName + "\"."));
        }
        this._dragRef.withRootElement(rootElement || element);
    };
    /** Gets the boundary element, based on the `boundaryElementSelector`. */
    /**
     * Gets the boundary element, based on the `boundaryElementSelector`.
     * @private
     * @return {?}
     */
    CdkDrag.prototype._getBoundaryElement = /**
     * Gets the boundary element, based on the `boundaryElementSelector`.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var selector = this.boundaryElementSelector;
        return selector ? getClosestMatchingAncestor(this.element.nativeElement, selector) : null;
    };
    /** Syncs the inputs of the CdkDrag with the options of the underlying DragRef. */
    /**
     * Syncs the inputs of the CdkDrag with the options of the underlying DragRef.
     * @private
     * @param {?} ref
     * @return {?}
     */
    CdkDrag.prototype._syncInputs = /**
     * Syncs the inputs of the CdkDrag with the options of the underlying DragRef.
     * @private
     * @param {?} ref
     * @return {?}
     */
    function (ref) {
        var _this = this;
        ref.beforeStarted.subscribe(function () {
            if (!ref.isDragging()) {
                /** @type {?} */
                var dir = _this._dir;
                /** @type {?} */
                var placeholder = _this._placeholderTemplate ? {
                    template: _this._placeholderTemplate.templateRef,
                    context: _this._placeholderTemplate.data,
                    viewContainer: _this._viewContainerRef
                } : null;
                /** @type {?} */
                var preview = _this._previewTemplate ? {
                    template: _this._previewTemplate.templateRef,
                    context: _this._previewTemplate.data,
                    viewContainer: _this._viewContainerRef
                } : null;
                ref.disabled = _this.disabled;
                ref.lockAxis = _this.lockAxis;
                ref
                    .withBoundaryElement(_this._getBoundaryElement())
                    .withPlaceholderTemplate(placeholder)
                    .withPreviewTemplate(preview);
                if (dir) {
                    ref.withDirection(dir.value);
                }
            }
        });
    };
    /** Handles the events from the underlying `DragRef`. */
    /**
     * Handles the events from the underlying `DragRef`.
     * @private
     * @param {?} ref
     * @return {?}
     */
    CdkDrag.prototype._handleEvents = /**
     * Handles the events from the underlying `DragRef`.
     * @private
     * @param {?} ref
     * @return {?}
     */
    function (ref) {
        var _this = this;
        ref.started.subscribe(function () {
            _this.started.emit({ source: _this });
            // Since all of these events run outside of change detection,
            // we need to ensure that everything is marked correctly.
            if (_this._changeDetectorRef) {
                // @breaking-change 8.0.0 Remove null check for _changeDetectorRef
                _this._changeDetectorRef.markForCheck();
            }
        });
        ref.released.subscribe(function () {
            _this.released.emit({ source: _this });
        });
        ref.ended.subscribe(function () {
            _this.ended.emit({ source: _this });
            // Since all of these events run outside of change detection,
            // we need to ensure that everything is marked correctly.
            if (_this._changeDetectorRef) {
                // @breaking-change 8.0.0 Remove null check for _changeDetectorRef
                _this._changeDetectorRef.markForCheck();
            }
        });
        ref.entered.subscribe(function (event) {
            _this.entered.emit({
                container: event.container.data,
                item: _this
            });
        });
        ref.exited.subscribe(function (event) {
            _this.exited.emit({
                container: event.container.data,
                item: _this
            });
        });
        ref.dropped.subscribe(function (event) {
            _this.dropped.emit({
                previousIndex: event.previousIndex,
                currentIndex: event.currentIndex,
                previousContainer: event.previousContainer.data,
                container: event.container.data,
                isPointerOverContainer: event.isPointerOverContainer,
                item: _this
            });
        });
    };
    CdkDrag.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{
                    selector: '[cdkDrag]',
                    exportAs: 'cdkDrag',
                    host: {
                        'class': 'cdk-drag',
                        '[class.cdk-drag-disabled]': 'disabled',
                        '[class.cdk-drag-dragging]': '_dragRef.isDragging()',
                    },
                    providers: [{ provide: CDK_DRAG_PARENT, useExisting: CdkDrag }]
                },] },
    ];
    /** @nocollapse */
    CdkDrag.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [CDK_DROP_LIST,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["SkipSelf"] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] },
        { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ViewportRuler"] },
        { type: DragDropRegistry },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [CDK_DRAG_CONFIG,] }] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] },
        { type: DragDrop },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }
    ]; };
    CdkDrag.propDecorators = {
        _handles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [CdkDragHandle, { descendants: true },] }],
        _previewTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"], args: [CdkDragPreview,] }],
        _placeholderTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"], args: [CdkDragPlaceholder,] }],
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkDragData',] }],
        lockAxis: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkDragLockAxis',] }],
        rootElementSelector: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkDragRootElement',] }],
        boundaryElementSelector: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkDragBoundary',] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkDragDisabled',] }],
        started: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"], args: ['cdkDragStarted',] }],
        released: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"], args: ['cdkDragReleased',] }],
        ended: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"], args: ['cdkDragEnded',] }],
        entered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"], args: ['cdkDragEntered',] }],
        exited: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"], args: ['cdkDragExited',] }],
        dropped: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"], args: ['cdkDragDropped',] }],
        moved: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"], args: ['cdkDragMoved',] }]
    };
    return CdkDrag;
}());
/**
 * Gets the closest ancestor of an element that matches a selector.
 * @param {?} element
 * @param {?} selector
 * @return {?}
 */
function getClosestMatchingAncestor(element, selector) {
    /** @type {?} */
    var currentElement = (/** @type {?} */ (element.parentElement));
    while (currentElement) {
        // IE doesn't support `matches` so we have to fall back to `msMatchesSelector`.
        if (currentElement.matches ? currentElement.matches(selector) :
            ((/** @type {?} */ (currentElement))).msMatchesSelector(selector)) {
            return currentElement;
        }
        currentElement = currentElement.parentElement;
    }
    return null;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Declaratively connects sibling `cdkDropList` instances together. All of the `cdkDropList`
 * elements that are placed inside a `cdkDropListGroup` will be connected to each other
 * automatically. Can be used as an alternative to the `cdkDropListConnectedTo` input
 * from `cdkDropList`.
 * @template T
 */
var CdkDropListGroup = /** @class */ (function () {
    function CdkDropListGroup() {
        /**
         * Drop lists registered inside the group.
         */
        this._items = new Set();
        this._disabled = false;
    }
    Object.defineProperty(CdkDropListGroup.prototype, "disabled", {
        /** Whether starting a dragging sequence from inside this group is disabled. */
        get: /**
         * Whether starting a dragging sequence from inside this group is disabled.
         * @return {?}
         */
        function () { return this._disabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CdkDropListGroup.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._items.clear();
    };
    CdkDropListGroup.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{
                    selector: '[cdkDropListGroup]',
                    exportAs: 'cdkDropListGroup',
                },] },
    ];
    CdkDropListGroup.propDecorators = {
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkDropListGroupDisabled',] }]
    };
    return CdkDropListGroup;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Counter used to generate unique ids for drop zones.
 * @type {?}
 */
var _uniqueIdCounter$1 = 0;
var ɵ0 = undefined;
// @breaking-change 8.0.0 `CdkDropList` implements `CdkDropListContainer` for backwards
// compatiblity. The implements clause, as well as all the methods that it enforces can
// be removed when `CdkDropListContainer` is deleted.
/**
 * Container that wraps a set of draggable items.
 * @template T
 */
var CdkDropList = /** @class */ (function () {
    function CdkDropList(element, dragDropRegistry, _changeDetectorRef, _dir, _group, _document, 
    /**
     * @deprecated `dragDropRegistry` and `_document` parameters to be removed.
     * Also `dragDrop` parameter to be made required.
     * @breaking-change 8.0.0.
     */
    dragDrop) {
        var _this = this;
        this.element = element;
        this._changeDetectorRef = _changeDetectorRef;
        this._dir = _dir;
        this._group = _group;
        /**
         * Emits when the list has been destroyed.
         */
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Other draggable containers that this container is connected to and into which the
         * container's items can be transferred. Can either be references to other drop containers,
         * or their unique IDs.
         */
        this.connectedTo = [];
        /**
         * Direction in which the list is oriented.
         */
        this.orientation = 'vertical';
        /**
         * Unique ID for the drop zone. Can be used as a reference
         * in the `connectedTo` of another `CdkDropList`.
         */
        this.id = "cdk-drop-list-" + _uniqueIdCounter$1++;
        this._disabled = false;
        /**
         * Function that is used to determine whether an item
         * is allowed to be moved into a drop container.
         */
        this.enterPredicate = function () { return true; };
        /**
         * Emits when the user drops an item inside the container.
         */
        this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Emits when the user has moved a new drag item into this container.
         */
        this.entered = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Emits when the user removes an item from the container
         * by dragging it into another container.
         */
        this.exited = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Emits as the user is swapping items while actively dragging.
         */
        this.sorted = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        // @breaking-change 8.0.0 Remove null check once `dragDrop` parameter is made required.
        if (dragDrop) {
            this._dropListRef = dragDrop.createDropList(element);
        }
        else {
            this._dropListRef = new DropListRef(element, dragDropRegistry, _document || document);
        }
        this._dropListRef.data = this;
        this._dropListRef.enterPredicate = function (drag, drop) {
            return _this.enterPredicate(drag.data, drop.data);
        };
        this._syncInputs(this._dropListRef);
        this._handleEvents(this._dropListRef);
        CdkDropList._dropLists.push(this);
        if (_group) {
            _group._items.add(this);
        }
    }
    Object.defineProperty(CdkDropList.prototype, "disabled", {
        /** Whether starting a dragging sequence from this container is disabled. */
        get: /**
         * Whether starting a dragging sequence from this container is disabled.
         * @return {?}
         */
        function () {
            return this._disabled || (!!this._group && this._group.disabled);
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CdkDropList.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._draggables.changes
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(this._draggables), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed))
            .subscribe(function (items) {
            _this._dropListRef.withItems(items.map(function (drag) { return drag._dragRef; }));
        });
    };
    /**
     * @return {?}
     */
    CdkDropList.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var index = CdkDropList._dropLists.indexOf(this);
        if (index > -1) {
            CdkDropList._dropLists.splice(index, 1);
        }
        if (this._group) {
            this._group._items.delete(this);
        }
        this._dropListRef.dispose();
        this._destroyed.next();
        this._destroyed.complete();
    };
    /** Starts dragging an item. */
    /**
     * Starts dragging an item.
     * @return {?}
     */
    CdkDropList.prototype.start = /**
     * Starts dragging an item.
     * @return {?}
     */
    function () {
        this._dropListRef.start();
    };
    /**
     * Drops an item into this container.
     * @param item Item being dropped into the container.
     * @param currentIndex Index at which the item should be inserted.
     * @param previousContainer Container from which the item got dragged in.
     * @param isPointerOverContainer Whether the user's pointer was over the
     *    container when the item was dropped.
     */
    /**
     * Drops an item into this container.
     * @param {?} item Item being dropped into the container.
     * @param {?} currentIndex Index at which the item should be inserted.
     * @param {?} previousContainer Container from which the item got dragged in.
     * @param {?} isPointerOverContainer Whether the user's pointer was over the
     *    container when the item was dropped.
     * @return {?}
     */
    CdkDropList.prototype.drop = /**
     * Drops an item into this container.
     * @param {?} item Item being dropped into the container.
     * @param {?} currentIndex Index at which the item should be inserted.
     * @param {?} previousContainer Container from which the item got dragged in.
     * @param {?} isPointerOverContainer Whether the user's pointer was over the
     *    container when the item was dropped.
     * @return {?}
     */
    function (item, currentIndex, previousContainer, isPointerOverContainer) {
        this._dropListRef.drop(item._dragRef, currentIndex, ((/** @type {?} */ (previousContainer)))._dropListRef, isPointerOverContainer);
    };
    /**
     * Emits an event to indicate that the user moved an item into the container.
     * @param item Item that was moved into the container.
     * @param pointerX Position of the item along the X axis.
     * @param pointerY Position of the item along the Y axis.
     */
    /**
     * Emits an event to indicate that the user moved an item into the container.
     * @param {?} item Item that was moved into the container.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @return {?}
     */
    CdkDropList.prototype.enter = /**
     * Emits an event to indicate that the user moved an item into the container.
     * @param {?} item Item that was moved into the container.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @return {?}
     */
    function (item, pointerX, pointerY) {
        this._dropListRef.enter(item._dragRef, pointerX, pointerY);
    };
    /**
     * Removes an item from the container after it was dragged into another container by the user.
     * @param item Item that was dragged out.
     */
    /**
     * Removes an item from the container after it was dragged into another container by the user.
     * @param {?} item Item that was dragged out.
     * @return {?}
     */
    CdkDropList.prototype.exit = /**
     * Removes an item from the container after it was dragged into another container by the user.
     * @param {?} item Item that was dragged out.
     * @return {?}
     */
    function (item) {
        this._dropListRef.exit(item._dragRef);
    };
    /**
     * Figures out the index of an item in the container.
     * @param item Item whose index should be determined.
     */
    /**
     * Figures out the index of an item in the container.
     * @param {?} item Item whose index should be determined.
     * @return {?}
     */
    CdkDropList.prototype.getItemIndex = /**
     * Figures out the index of an item in the container.
     * @param {?} item Item whose index should be determined.
     * @return {?}
     */
    function (item) {
        return this._dropListRef.getItemIndex(item._dragRef);
    };
    /**
     * Sorts an item inside the container based on its position.
     * @param item Item to be sorted.
     * @param pointerX Position of the item along the X axis.
     * @param pointerY Position of the item along the Y axis.
     * @param pointerDelta Direction in which the pointer is moving along each axis.
     */
    /**
     * Sorts an item inside the container based on its position.
     * @param {?} item Item to be sorted.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @param {?} pointerDelta Direction in which the pointer is moving along each axis.
     * @return {?}
     */
    CdkDropList.prototype._sortItem = /**
     * Sorts an item inside the container based on its position.
     * @param {?} item Item to be sorted.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @param {?} pointerDelta Direction in which the pointer is moving along each axis.
     * @return {?}
     */
    function (item, pointerX, pointerY, pointerDelta) {
        return this._dropListRef._sortItem(item._dragRef, pointerX, pointerY, pointerDelta);
    };
    /**
     * Figures out whether an item should be moved into a sibling
     * drop container, based on its current position.
     * @param item Drag item that is being moved.
     * @param x Position of the item along the X axis.
     * @param y Position of the item along the Y axis.
     */
    /**
     * Figures out whether an item should be moved into a sibling
     * drop container, based on its current position.
     * @param {?} item Drag item that is being moved.
     * @param {?} x Position of the item along the X axis.
     * @param {?} y Position of the item along the Y axis.
     * @return {?}
     */
    CdkDropList.prototype._getSiblingContainerFromPosition = /**
     * Figures out whether an item should be moved into a sibling
     * drop container, based on its current position.
     * @param {?} item Drag item that is being moved.
     * @param {?} x Position of the item along the X axis.
     * @param {?} y Position of the item along the Y axis.
     * @return {?}
     */
    function (item, x, y) {
        /** @type {?} */
        var result = this._dropListRef._getSiblingContainerFromPosition(item._dragRef, x, y);
        return result ? result.data : null;
    };
    /**
     * Checks whether the user's pointer is positioned over the container.
     * @param x Pointer position along the X axis.
     * @param y Pointer position along the Y axis.
     */
    /**
     * Checks whether the user's pointer is positioned over the container.
     * @param {?} x Pointer position along the X axis.
     * @param {?} y Pointer position along the Y axis.
     * @return {?}
     */
    CdkDropList.prototype._isOverContainer = /**
     * Checks whether the user's pointer is positioned over the container.
     * @param {?} x Pointer position along the X axis.
     * @param {?} y Pointer position along the Y axis.
     * @return {?}
     */
    function (x, y) {
        return this._dropListRef._isOverContainer(x, y);
    };
    /** Syncs the inputs of the CdkDropList with the options of the underlying DropListRef. */
    /**
     * Syncs the inputs of the CdkDropList with the options of the underlying DropListRef.
     * @private
     * @param {?} ref
     * @return {?}
     */
    CdkDropList.prototype._syncInputs = /**
     * Syncs the inputs of the CdkDropList with the options of the underlying DropListRef.
     * @private
     * @param {?} ref
     * @return {?}
     */
    function (ref) {
        var _this = this;
        if (this._dir) {
            this._dir.change
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(this._dir.value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed))
                .subscribe(function (value) { return ref.withDirection(value); });
        }
        ref.beforeStarted.subscribe(function () {
            /** @type {?} */
            var siblings = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceArray"])(_this.connectedTo).map(function (drop) {
                return typeof drop === 'string' ?
                    (/** @type {?} */ (CdkDropList._dropLists.find(function (list) { return list.id === drop; }))) : drop;
            });
            if (_this._group) {
                _this._group._items.forEach(function (drop) {
                    if (siblings.indexOf(drop) === -1) {
                        siblings.push(drop);
                    }
                });
            }
            ref.lockAxis = _this.lockAxis;
            ref
                .connectedTo(siblings.filter(function (drop) { return drop && drop !== _this; }).map(function (list) { return list._dropListRef; }))
                .withOrientation(_this.orientation);
        });
    };
    /** Handles events from the underlying DropListRef. */
    /**
     * Handles events from the underlying DropListRef.
     * @private
     * @param {?} ref
     * @return {?}
     */
    CdkDropList.prototype._handleEvents = /**
     * Handles events from the underlying DropListRef.
     * @private
     * @param {?} ref
     * @return {?}
     */
    function (ref) {
        var _this = this;
        ref.beforeStarted.subscribe(function () {
            _this._changeDetectorRef.markForCheck();
        });
        ref.entered.subscribe(function (event) {
            _this.entered.emit({
                container: _this,
                item: event.item.data
            });
        });
        ref.exited.subscribe(function (event) {
            _this.exited.emit({
                container: _this,
                item: event.item.data
            });
        });
        ref.sorted.subscribe(function (event) {
            _this.sorted.emit({
                previousIndex: event.previousIndex,
                currentIndex: event.currentIndex,
                container: _this,
                item: event.item.data
            });
        });
        ref.dropped.subscribe(function (event) {
            _this.dropped.emit({
                previousIndex: event.previousIndex,
                currentIndex: event.currentIndex,
                previousContainer: event.previousContainer.data,
                container: event.container.data,
                item: event.item.data,
                isPointerOverContainer: event.isPointerOverContainer
            });
            // Mark for check since all of these events run outside of change
            // detection and we're not guaranteed for something else to have triggered it.
            _this._changeDetectorRef.markForCheck();
        });
    };
    /**
     * Keeps track of the drop lists that are currently on the page.
     */
    CdkDropList._dropLists = [];
    CdkDropList.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{
                    selector: '[cdkDropList], cdk-drop-list',
                    exportAs: 'cdkDropList',
                    providers: [
                        // Prevent child drop lists from picking up the same group as their parent.
                        { provide: CdkDropListGroup, useValue: ɵ0 },
                        { provide: CDK_DROP_LIST_CONTAINER, useExisting: CdkDropList },
                    ],
                    host: {
                        'class': 'cdk-drop-list',
                        '[id]': 'id',
                        '[class.cdk-drop-list-disabled]': 'disabled',
                        '[class.cdk-drop-list-dragging]': '_dropListRef.isDragging()',
                        '[class.cdk-drop-list-receiving]': '_dropListRef.isReceiving()',
                    }
                },] },
    ];
    /** @nocollapse */
    CdkDropList.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
        { type: DragDropRegistry },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] },
        { type: CdkDropListGroup, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["SkipSelf"] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] },
        { type: DragDrop }
    ]; };
    CdkDropList.propDecorators = {
        _draggables: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(function () { return CdkDrag; }), {
                        // Explicitly set to false since some of the logic below makes assumptions about it.
                        // The `.withItems` call below should be updated if we ever need to switch this to `true`.
                        descendants: false
                    },] }],
        connectedTo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkDropListConnectedTo',] }],
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkDropListData',] }],
        orientation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkDropListOrientation',] }],
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        lockAxis: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkDropListLockAxis',] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkDropListDisabled',] }],
        enterPredicate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkDropListEnterPredicate',] }],
        dropped: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"], args: ['cdkDropListDropped',] }],
        entered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"], args: ['cdkDropListEntered',] }],
        exited: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"], args: ['cdkDropListExited',] }],
        sorted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"], args: ['cdkDropListSorted',] }]
    };
    return CdkDropList;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DragDropModule = /** @class */ (function () {
    function DragDropModule() {
    }
    DragDropModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
                    declarations: [
                        CdkDropList,
                        CdkDropListGroup,
                        CdkDrag,
                        CdkDragHandle,
                        CdkDragPreview,
                        CdkDragPlaceholder,
                    ],
                    exports: [
                        CdkDropList,
                        CdkDropListGroup,
                        CdkDrag,
                        CdkDragHandle,
                        CdkDragPreview,
                        CdkDragPlaceholder,
                    ],
                    providers: [
                        DragDrop,
                    ]
                },] },
    ];
    return DragDropModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=drag-drop.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/cdk/esm5/platform.es5.js":
/*!********************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/platform.es5.js ***!
  \********************************************************/
/*! exports provided: Platform, PlatformModule, getSupportedInputTypes, supportsPassiveEventListeners, normalizePassiveListenerOptions, supportsScrollBehavior, getRtlScrollAxisType, RtlScrollAxisType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Platform", function() { return Platform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatformModule", function() { return PlatformModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSupportedInputTypes", function() { return getSupportedInputTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsPassiveEventListeners", function() { return supportsPassiveEventListeners; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizePassiveListenerOptions", function() { return normalizePassiveListenerOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsScrollBehavior", function() { return supportsScrollBehavior; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRtlScrollAxisType", function() { return getRtlScrollAxisType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RtlScrollAxisType", function() { return RtlScrollAxisType; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Whether the current platform supports the V8 Break Iterator. The V8 check
// is necessary to detect all Blink based browsers.
/** @type {?} */
var hasV8BreakIterator;
// We need a try/catch around the reference to `Intl`, because accessing it in some cases can
// cause IE to throw. These cases are tied to particular versions of Windows and can happen if
// the consumer is providing a polyfilled `Map`. See:
// https://github.com/Microsoft/ChakraCore/issues/3189
// https://github.com/angular/material2/issues/15687
try {
    hasV8BreakIterator = (typeof Intl !== 'undefined' && ((/** @type {?} */ (Intl))).v8BreakIterator);
}
catch (_a) {
    hasV8BreakIterator = false;
}
/**
 * Service to detect the current platform by comparing the userAgent strings and
 * checking browser-specific global properties.
 */
var Platform = /** @class */ (function () {
    /**
     * @breaking-change 8.0.0 remove optional decorator
     */
    function Platform(_platformId) {
        this._platformId = _platformId;
        /**
         * Whether the Angular application is being rendered in the browser.
         * We want to use the Angular platform check because if the Document is shimmed
         * without the navigator, the following checks will fail. This is preferred because
         * sometimes the Document may be shimmed without the user's knowledge or intention
         */
        this.isBrowser = this._platformId ?
            Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this._platformId) : typeof document === 'object' && !!document;
        /**
         * Whether the current browser is Microsoft Edge.
         */
        this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
        /**
         * Whether the current rendering engine is Microsoft Trident.
         */
        this.TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
        /**
         * Whether the current rendering engine is Blink.
         */
        // EdgeHTML and Trident mock Blink specific things and need to be excluded from this check.
        this.BLINK = this.isBrowser && (!!(((/** @type {?} */ (window))).chrome || hasV8BreakIterator) &&
            typeof CSS !== 'undefined' && !this.EDGE && !this.TRIDENT);
        /**
         * Whether the current rendering engine is WebKit.
         */
        // Webkit is part of the userAgent in EdgeHTML, Blink and Trident. Therefore we need to
        // ensure that Webkit runs standalone and is not used as another engine's base.
        this.WEBKIT = this.isBrowser &&
            /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
        /**
         * Whether the current platform is Apple iOS.
         */
        this.IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) &&
            !('MSStream' in window);
        /**
         * Whether the current browser is Firefox.
         */
        // It's difficult to detect the plain Gecko engine, because most of the browsers identify
        // them self as Gecko-like browsers and modify the userAgent's according to that.
        // Since we only cover one explicit Firefox case, we can simply check for Firefox
        // instead of having an unstable check for Gecko.
        this.FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
        /**
         * Whether the current platform is Android.
         */
        // Trident on mobile adds the android platform to the userAgent to trick detections.
        this.ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
        /**
         * Whether the current browser is Safari.
         */
        // Safari browsers will include the Safari keyword in their userAgent. Some browsers may fake
        // this and just place the Safari keyword in the userAgent. To be more safe about Safari every
        // Safari browser should also use Webkit as its layout engine.
        this.SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
    }
    Platform.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    Platform.ctorParameters = function () { return [
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] }
    ]; };
    /** @nocollapse */ Platform.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function Platform_Factory() { return new Platform(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], 8)); }, token: Platform, providedIn: "root" });
    return Platform;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PlatformModule = /** @class */ (function () {
    function PlatformModule() {
    }
    PlatformModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{},] },
    ];
    return PlatformModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Cached result Set of input types support by the current browser.
 * @type {?}
 */
var supportedInputTypes;
/**
 * Types of `<input>` that *might* be supported.
 * @type {?}
 */
var candidateInputTypes = [
    // `color` must come first. Chrome 56 shows a warning if we change the type to `color` after
    // first changing it to something else:
    // The specified value "" does not conform to the required format.
    // The format is "#rrggbb" where rr, gg, bb are two-digit hexadecimal numbers.
    'color',
    'button',
    'checkbox',
    'date',
    'datetime-local',
    'email',
    'file',
    'hidden',
    'image',
    'month',
    'number',
    'password',
    'radio',
    'range',
    'reset',
    'search',
    'submit',
    'tel',
    'text',
    'time',
    'url',
    'week',
];
/**
 * @return {?} The input types supported by this browser.
 */
function getSupportedInputTypes() {
    // Result is cached.
    if (supportedInputTypes) {
        return supportedInputTypes;
    }
    // We can't check if an input type is not supported until we're on the browser, so say that
    // everything is supported when not on the browser. We don't use `Platform` here since it's
    // just a helper function and can't inject it.
    if (typeof document !== 'object' || !document) {
        supportedInputTypes = new Set(candidateInputTypes);
        return supportedInputTypes;
    }
    /** @type {?} */
    var featureTestInput = document.createElement('input');
    supportedInputTypes = new Set(candidateInputTypes.filter(function (value) {
        featureTestInput.setAttribute('type', value);
        return featureTestInput.type === value;
    }));
    return supportedInputTypes;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Cached result of whether the user's browser supports passive event listeners.
 * @type {?}
 */
var supportsPassiveEvents;
/**
 * Checks whether the user's browser supports passive event listeners.
 * See: https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
 * @return {?}
 */
function supportsPassiveEventListeners() {
    if (supportsPassiveEvents == null && typeof window !== 'undefined') {
        try {
            window.addEventListener('test', (/** @type {?} */ (null)), Object.defineProperty({}, 'passive', {
                get: function () { return supportsPassiveEvents = true; }
            }));
        }
        finally {
            supportsPassiveEvents = supportsPassiveEvents || false;
        }
    }
    return supportsPassiveEvents;
}
/**
 * Normalizes an `AddEventListener` object to something that can be passed
 * to `addEventListener` on any browser, no matter whether it supports the
 * `options` parameter.
 * @param {?} options Object to be normalized.
 * @return {?}
 */
function normalizePassiveListenerOptions(options) {
    return supportsPassiveEventListeners() ? options : !!options.capture;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/** @enum {number} */
var RtlScrollAxisType = {
    /**
     * scrollLeft is 0 when scrolled all the way left and (scrollWidth - clientWidth) when scrolled
     * all the way right.
     */
    NORMAL: 0,
    /**
     * scrollLeft is -(scrollWidth - clientWidth) when scrolled all the way left and 0 when scrolled
     * all the way right.
     */
    NEGATED: 1,
    /**
     * scrollLeft is (scrollWidth - clientWidth) when scrolled all the way left and 0 when scrolled
     * all the way right.
     */
    INVERTED: 2,
};
RtlScrollAxisType[RtlScrollAxisType.NORMAL] = 'NORMAL';
RtlScrollAxisType[RtlScrollAxisType.NEGATED] = 'NEGATED';
RtlScrollAxisType[RtlScrollAxisType.INVERTED] = 'INVERTED';
/**
 * Cached result of the way the browser handles the horizontal scroll axis in RTL mode.
 * @type {?}
 */
var rtlScrollAxisType;
/**
 * Check whether the browser supports scroll behaviors.
 * @return {?}
 */
function supportsScrollBehavior() {
    return !!(typeof document == 'object' && 'scrollBehavior' in (/** @type {?} */ (document.documentElement)).style);
}
/**
 * Checks the type of RTL scroll axis used by this browser. As of time of writing, Chrome is NORMAL,
 * Firefox & Safari are NEGATED, and IE & Edge are INVERTED.
 * @return {?}
 */
function getRtlScrollAxisType() {
    // We can't check unless we're on the browser. Just assume 'normal' if we're not.
    if (typeof document !== 'object' || !document) {
        return RtlScrollAxisType.NORMAL;
    }
    if (!rtlScrollAxisType) {
        // Create a 1px wide scrolling container and a 2px wide content element.
        /** @type {?} */
        var scrollContainer = document.createElement('div');
        /** @type {?} */
        var containerStyle = scrollContainer.style;
        scrollContainer.dir = 'rtl';
        containerStyle.height = '1px';
        containerStyle.width = '1px';
        containerStyle.overflow = 'auto';
        containerStyle.visibility = 'hidden';
        containerStyle.pointerEvents = 'none';
        containerStyle.position = 'absolute';
        /** @type {?} */
        var content = document.createElement('div');
        /** @type {?} */
        var contentStyle = content.style;
        contentStyle.width = '2px';
        contentStyle.height = '1px';
        scrollContainer.appendChild(content);
        document.body.appendChild(scrollContainer);
        rtlScrollAxisType = RtlScrollAxisType.NORMAL;
        // The viewport starts scrolled all the way to the right in RTL mode. If we are in a NORMAL
        // browser this would mean that the scrollLeft should be 1. If it's zero instead we know we're
        // dealing with one of the other two types of browsers.
        if (scrollContainer.scrollLeft === 0) {
            // In a NEGATED browser the scrollLeft is always somewhere in [-maxScrollAmount, 0]. For an
            // INVERTED browser it is always somewhere in [0, maxScrollAmount]. We can determine which by
            // setting to the scrollLeft to 1. This is past the max for a NEGATED browser, so it will
            // return 0 when we read it again.
            scrollContainer.scrollLeft = 1;
            rtlScrollAxisType =
                scrollContainer.scrollLeft === 0 ? RtlScrollAxisType.NEGATED : RtlScrollAxisType.INVERTED;
        }
        (/** @type {?} */ (scrollContainer.parentNode)).removeChild(scrollContainer);
    }
    return rtlScrollAxisType;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=platform.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/cdk/esm5/scrolling.es5.js":
/*!*********************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/scrolling.es5.js ***!
  \*********************************************************/
/*! exports provided: _fixedSizeVirtualScrollStrategyFactory, FixedSizeVirtualScrollStrategy, CdkFixedSizeVirtualScroll, SCROLL_DISPATCHER_PROVIDER_FACTORY, DEFAULT_SCROLL_TIME, ScrollDispatcher, SCROLL_DISPATCHER_PROVIDER, CdkScrollable, ScrollingModule, ScrollDispatchModule, VIEWPORT_RULER_PROVIDER_FACTORY, DEFAULT_RESIZE_TIME, ViewportRuler, VIEWPORT_RULER_PROVIDER, CdkVirtualForOf, VIRTUAL_SCROLL_STRATEGY, CdkVirtualScrollViewport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_fixedSizeVirtualScrollStrategyFactory", function() { return _fixedSizeVirtualScrollStrategyFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedSizeVirtualScrollStrategy", function() { return FixedSizeVirtualScrollStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkFixedSizeVirtualScroll", function() { return CdkFixedSizeVirtualScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCROLL_DISPATCHER_PROVIDER_FACTORY", function() { return SCROLL_DISPATCHER_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_SCROLL_TIME", function() { return DEFAULT_SCROLL_TIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollDispatcher", function() { return ScrollDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCROLL_DISPATCHER_PROVIDER", function() { return SCROLL_DISPATCHER_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkScrollable", function() { return CdkScrollable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollingModule", function() { return ScrollingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollDispatchModule", function() { return ScrollDispatchModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIEWPORT_RULER_PROVIDER_FACTORY", function() { return VIEWPORT_RULER_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_RESIZE_TIME", function() { return DEFAULT_RESIZE_TIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewportRuler", function() { return ViewportRuler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIEWPORT_RULER_PROVIDER", function() { return VIEWPORT_RULER_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkVirtualForOf", function() { return CdkVirtualForOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIRTUAL_SCROLL_STRATEGY", function() { return VIRTUAL_SCROLL_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkVirtualScrollViewport", function() { return CdkVirtualScrollViewport; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */









/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The injection token used to specify the virtual scrolling strategy.
 * @type {?}
 */
var VIRTUAL_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('VIRTUAL_SCROLL_STRATEGY');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Virtual scrolling strategy for lists with items of known fixed size.
 */
var  /**
 * Virtual scrolling strategy for lists with items of known fixed size.
 */
FixedSizeVirtualScrollStrategy = /** @class */ (function () {
    /**
     * @param itemSize The size of the items in the virtually scrolling list.
     * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
     * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
     */
    function FixedSizeVirtualScrollStrategy(itemSize, minBufferPx, maxBufferPx) {
        this._scrolledIndexChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * \@docs-private Implemented as part of VirtualScrollStrategy.
         */
        this.scrolledIndexChange = this._scrolledIndexChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
        /**
         * The attached viewport.
         */
        this._viewport = null;
        this._itemSize = itemSize;
        this._minBufferPx = minBufferPx;
        this._maxBufferPx = maxBufferPx;
    }
    /**
     * Attaches this scroll strategy to a viewport.
     * @param viewport The viewport to attach this strategy to.
     */
    /**
     * Attaches this scroll strategy to a viewport.
     * @param {?} viewport The viewport to attach this strategy to.
     * @return {?}
     */
    FixedSizeVirtualScrollStrategy.prototype.attach = /**
     * Attaches this scroll strategy to a viewport.
     * @param {?} viewport The viewport to attach this strategy to.
     * @return {?}
     */
    function (viewport) {
        this._viewport = viewport;
        this._updateTotalContentSize();
        this._updateRenderedRange();
    };
    /** Detaches this scroll strategy from the currently attached viewport. */
    /**
     * Detaches this scroll strategy from the currently attached viewport.
     * @return {?}
     */
    FixedSizeVirtualScrollStrategy.prototype.detach = /**
     * Detaches this scroll strategy from the currently attached viewport.
     * @return {?}
     */
    function () {
        this._scrolledIndexChange.complete();
        this._viewport = null;
    };
    /**
     * Update the item size and buffer size.
     * @param itemSize The size of the items in the virtually scrolling list.
     * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
     * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
     */
    /**
     * Update the item size and buffer size.
     * @param {?} itemSize The size of the items in the virtually scrolling list.
     * @param {?} minBufferPx The minimum amount of buffer (in pixels) before needing to render more
     * @param {?} maxBufferPx The amount of buffer (in pixels) to render when rendering more.
     * @return {?}
     */
    FixedSizeVirtualScrollStrategy.prototype.updateItemAndBufferSize = /**
     * Update the item size and buffer size.
     * @param {?} itemSize The size of the items in the virtually scrolling list.
     * @param {?} minBufferPx The minimum amount of buffer (in pixels) before needing to render more
     * @param {?} maxBufferPx The amount of buffer (in pixels) to render when rendering more.
     * @return {?}
     */
    function (itemSize, minBufferPx, maxBufferPx) {
        if (maxBufferPx < minBufferPx) {
            throw Error('CDK virtual scroll: maxBufferPx must be greater than or equal to minBufferPx');
        }
        this._itemSize = itemSize;
        this._minBufferPx = minBufferPx;
        this._maxBufferPx = maxBufferPx;
        this._updateTotalContentSize();
        this._updateRenderedRange();
    };
    /** @docs-private Implemented as part of VirtualScrollStrategy. */
    /**
     * \@docs-private Implemented as part of VirtualScrollStrategy.
     * @return {?}
     */
    FixedSizeVirtualScrollStrategy.prototype.onContentScrolled = /**
     * \@docs-private Implemented as part of VirtualScrollStrategy.
     * @return {?}
     */
    function () {
        this._updateRenderedRange();
    };
    /** @docs-private Implemented as part of VirtualScrollStrategy. */
    /**
     * \@docs-private Implemented as part of VirtualScrollStrategy.
     * @return {?}
     */
    FixedSizeVirtualScrollStrategy.prototype.onDataLengthChanged = /**
     * \@docs-private Implemented as part of VirtualScrollStrategy.
     * @return {?}
     */
    function () {
        this._updateTotalContentSize();
        this._updateRenderedRange();
    };
    /** @docs-private Implemented as part of VirtualScrollStrategy. */
    /**
     * \@docs-private Implemented as part of VirtualScrollStrategy.
     * @return {?}
     */
    FixedSizeVirtualScrollStrategy.prototype.onContentRendered = /**
     * \@docs-private Implemented as part of VirtualScrollStrategy.
     * @return {?}
     */
    function () { };
    /** @docs-private Implemented as part of VirtualScrollStrategy. */
    /**
     * \@docs-private Implemented as part of VirtualScrollStrategy.
     * @return {?}
     */
    FixedSizeVirtualScrollStrategy.prototype.onRenderedOffsetChanged = /**
     * \@docs-private Implemented as part of VirtualScrollStrategy.
     * @return {?}
     */
    function () { };
    /**
     * Scroll to the offset for the given index.
     * @param index The index of the element to scroll to.
     * @param behavior The ScrollBehavior to use when scrolling.
     */
    /**
     * Scroll to the offset for the given index.
     * @param {?} index The index of the element to scroll to.
     * @param {?} behavior The ScrollBehavior to use when scrolling.
     * @return {?}
     */
    FixedSizeVirtualScrollStrategy.prototype.scrollToIndex = /**
     * Scroll to the offset for the given index.
     * @param {?} index The index of the element to scroll to.
     * @param {?} behavior The ScrollBehavior to use when scrolling.
     * @return {?}
     */
    function (index, behavior) {
        if (this._viewport) {
            this._viewport.scrollToOffset(index * this._itemSize, behavior);
        }
    };
    /** Update the viewport's total content size. */
    /**
     * Update the viewport's total content size.
     * @private
     * @return {?}
     */
    FixedSizeVirtualScrollStrategy.prototype._updateTotalContentSize = /**
     * Update the viewport's total content size.
     * @private
     * @return {?}
     */
    function () {
        if (!this._viewport) {
            return;
        }
        this._viewport.setTotalContentSize(this._viewport.getDataLength() * this._itemSize);
    };
    /** Update the viewport's rendered range. */
    /**
     * Update the viewport's rendered range.
     * @private
     * @return {?}
     */
    FixedSizeVirtualScrollStrategy.prototype._updateRenderedRange = /**
     * Update the viewport's rendered range.
     * @private
     * @return {?}
     */
    function () {
        if (!this._viewport) {
            return;
        }
        /** @type {?} */
        var scrollOffset = this._viewport.measureScrollOffset();
        /** @type {?} */
        var firstVisibleIndex = scrollOffset / this._itemSize;
        /** @type {?} */
        var renderedRange = this._viewport.getRenderedRange();
        /** @type {?} */
        var newRange = { start: renderedRange.start, end: renderedRange.end };
        /** @type {?} */
        var viewportSize = this._viewport.getViewportSize();
        /** @type {?} */
        var dataLength = this._viewport.getDataLength();
        /** @type {?} */
        var startBuffer = scrollOffset - newRange.start * this._itemSize;
        if (startBuffer < this._minBufferPx && newRange.start != 0) {
            /** @type {?} */
            var expandStart = Math.ceil((this._maxBufferPx - startBuffer) / this._itemSize);
            newRange.start = Math.max(0, newRange.start - expandStart);
            newRange.end = Math.min(dataLength, Math.ceil(firstVisibleIndex + (viewportSize + this._minBufferPx) / this._itemSize));
        }
        else {
            /** @type {?} */
            var endBuffer = newRange.end * this._itemSize - (scrollOffset + viewportSize);
            if (endBuffer < this._minBufferPx && newRange.end != dataLength) {
                /** @type {?} */
                var expandEnd = Math.ceil((this._maxBufferPx - endBuffer) / this._itemSize);
                if (expandEnd > 0) {
                    newRange.end = Math.min(dataLength, newRange.end + expandEnd);
                    newRange.start = Math.max(0, Math.floor(firstVisibleIndex - this._minBufferPx / this._itemSize));
                }
            }
        }
        this._viewport.setRenderedRange(newRange);
        this._viewport.setRenderedContentOffset(this._itemSize * newRange.start);
        this._scrolledIndexChange.next(Math.floor(firstVisibleIndex));
    };
    return FixedSizeVirtualScrollStrategy;
}());
/**
 * Provider factory for `FixedSizeVirtualScrollStrategy` that simply extracts the already created
 * `FixedSizeVirtualScrollStrategy` from the given directive.
 * @param {?} fixedSizeDir The instance of `CdkFixedSizeVirtualScroll` to extract the
 *     `FixedSizeVirtualScrollStrategy` from.
 * @return {?}
 */
function _fixedSizeVirtualScrollStrategyFactory(fixedSizeDir) {
    return fixedSizeDir._scrollStrategy;
}
/**
 * A virtual scroll strategy that supports fixed-size items.
 */
var CdkFixedSizeVirtualScroll = /** @class */ (function () {
    function CdkFixedSizeVirtualScroll() {
        this._itemSize = 20;
        this._minBufferPx = 100;
        this._maxBufferPx = 200;
        /**
         * The scroll strategy used by this directive.
         */
        this._scrollStrategy = new FixedSizeVirtualScrollStrategy(this.itemSize, this.minBufferPx, this.maxBufferPx);
    }
    Object.defineProperty(CdkFixedSizeVirtualScroll.prototype, "itemSize", {
        /** The size of the items in the list (in pixels). */
        get: /**
         * The size of the items in the list (in pixels).
         * @return {?}
         */
        function () { return this._itemSize; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._itemSize = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkFixedSizeVirtualScroll.prototype, "minBufferPx", {
        /**
         * The minimum amount of buffer rendered beyond the viewport (in pixels).
         * If the amount of buffer dips below this number, more items will be rendered. Defaults to 100px.
         */
        get: /**
         * The minimum amount of buffer rendered beyond the viewport (in pixels).
         * If the amount of buffer dips below this number, more items will be rendered. Defaults to 100px.
         * @return {?}
         */
        function () { return this._minBufferPx; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._minBufferPx = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkFixedSizeVirtualScroll.prototype, "maxBufferPx", {
        /**
         * The number of pixels worth of buffer to render for when rendering new items. Defaults to 200px.
         */
        get: /**
         * The number of pixels worth of buffer to render for when rendering new items. Defaults to 200px.
         * @return {?}
         */
        function () { return this._maxBufferPx; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._maxBufferPx = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(value); },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CdkFixedSizeVirtualScroll.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this._scrollStrategy.updateItemAndBufferSize(this.itemSize, this.minBufferPx, this.maxBufferPx);
    };
    CdkFixedSizeVirtualScroll.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'cdk-virtual-scroll-viewport[itemSize]',
                    providers: [{
                            provide: VIRTUAL_SCROLL_STRATEGY,
                            useFactory: _fixedSizeVirtualScrollStrategyFactory,
                            deps: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return CdkFixedSizeVirtualScroll; })],
                        }],
                },] },
    ];
    CdkFixedSizeVirtualScroll.propDecorators = {
        itemSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        minBufferPx: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        maxBufferPx: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return CdkFixedSizeVirtualScroll;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Time in ms to throttle the scrolling events by default.
 * @type {?}
 */
var DEFAULT_SCROLL_TIME = 20;
/**
 * Service contained all registered Scrollable references and emits an event when any one of the
 * Scrollable references emit a scrolled event.
 */
var ScrollDispatcher = /** @class */ (function () {
    function ScrollDispatcher(_ngZone, _platform) {
        this._ngZone = _ngZone;
        this._platform = _platform;
        /**
         * Subject for notifying that a registered scrollable reference element has been scrolled.
         */
        this._scrolled = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Keeps track of the global `scroll` and `resize` subscriptions.
         */
        this._globalSubscription = null;
        /**
         * Keeps track of the amount of subscriptions to `scrolled`. Used for cleaning up afterwards.
         */
        this._scrolledCount = 0;
        /**
         * Map of all the scrollable references that are registered with the service and their
         * scroll event subscriptions.
         */
        this.scrollContainers = new Map();
    }
    /**
     * Registers a scrollable instance with the service and listens for its scrolled events. When the
     * scrollable is scrolled, the service emits the event to its scrolled observable.
     * @param scrollable Scrollable instance to be registered.
     */
    /**
     * Registers a scrollable instance with the service and listens for its scrolled events. When the
     * scrollable is scrolled, the service emits the event to its scrolled observable.
     * @param {?} scrollable Scrollable instance to be registered.
     * @return {?}
     */
    ScrollDispatcher.prototype.register = /**
     * Registers a scrollable instance with the service and listens for its scrolled events. When the
     * scrollable is scrolled, the service emits the event to its scrolled observable.
     * @param {?} scrollable Scrollable instance to be registered.
     * @return {?}
     */
    function (scrollable) {
        var _this = this;
        if (!this.scrollContainers.has(scrollable)) {
            this.scrollContainers.set(scrollable, scrollable.elementScrolled()
                .subscribe(function () { return _this._scrolled.next(scrollable); }));
        }
    };
    /**
     * Deregisters a Scrollable reference and unsubscribes from its scroll event observable.
     * @param scrollable Scrollable instance to be deregistered.
     */
    /**
     * Deregisters a Scrollable reference and unsubscribes from its scroll event observable.
     * @param {?} scrollable Scrollable instance to be deregistered.
     * @return {?}
     */
    ScrollDispatcher.prototype.deregister = /**
     * Deregisters a Scrollable reference and unsubscribes from its scroll event observable.
     * @param {?} scrollable Scrollable instance to be deregistered.
     * @return {?}
     */
    function (scrollable) {
        /** @type {?} */
        var scrollableReference = this.scrollContainers.get(scrollable);
        if (scrollableReference) {
            scrollableReference.unsubscribe();
            this.scrollContainers.delete(scrollable);
        }
    };
    /**
     * Returns an observable that emits an event whenever any of the registered Scrollable
     * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
     * to override the default "throttle" time.
     *
     * **Note:** in order to avoid hitting change detection for every scroll event,
     * all of the events emitted from this stream will be run outside the Angular zone.
     * If you need to update any data bindings as a result of a scroll event, you have
     * to run the callback using `NgZone.run`.
     */
    /**
     * Returns an observable that emits an event whenever any of the registered Scrollable
     * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
     * to override the default "throttle" time.
     *
     * **Note:** in order to avoid hitting change detection for every scroll event,
     * all of the events emitted from this stream will be run outside the Angular zone.
     * If you need to update any data bindings as a result of a scroll event, you have
     * to run the callback using `NgZone.run`.
     * @param {?=} auditTimeInMs
     * @return {?}
     */
    ScrollDispatcher.prototype.scrolled = /**
     * Returns an observable that emits an event whenever any of the registered Scrollable
     * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
     * to override the default "throttle" time.
     *
     * **Note:** in order to avoid hitting change detection for every scroll event,
     * all of the events emitted from this stream will be run outside the Angular zone.
     * If you need to update any data bindings as a result of a scroll event, you have
     * to run the callback using `NgZone.run`.
     * @param {?=} auditTimeInMs
     * @return {?}
     */
    function (auditTimeInMs) {
        var _this = this;
        if (auditTimeInMs === void 0) { auditTimeInMs = DEFAULT_SCROLL_TIME; }
        if (!this._platform.isBrowser) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
        }
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            if (!_this._globalSubscription) {
                _this._addGlobalListener();
            }
            // In the case of a 0ms delay, use an observable without auditTime
            // since it does add a perceptible delay in processing overhead.
            /** @type {?} */
            var subscription = auditTimeInMs > 0 ?
                _this._scrolled.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(auditTimeInMs)).subscribe(observer) :
                _this._scrolled.subscribe(observer);
            _this._scrolledCount++;
            return function () {
                subscription.unsubscribe();
                _this._scrolledCount--;
                if (!_this._scrolledCount) {
                    _this._removeGlobalListener();
                }
            };
        });
    };
    /**
     * @return {?}
     */
    ScrollDispatcher.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._removeGlobalListener();
        this.scrollContainers.forEach(function (_, container) { return _this.deregister(container); });
        this._scrolled.complete();
    };
    /**
     * Returns an observable that emits whenever any of the
     * scrollable ancestors of an element are scrolled.
     * @param elementRef Element whose ancestors to listen for.
     * @param auditTimeInMs Time to throttle the scroll events.
     */
    /**
     * Returns an observable that emits whenever any of the
     * scrollable ancestors of an element are scrolled.
     * @param {?} elementRef Element whose ancestors to listen for.
     * @param {?=} auditTimeInMs Time to throttle the scroll events.
     * @return {?}
     */
    ScrollDispatcher.prototype.ancestorScrolled = /**
     * Returns an observable that emits whenever any of the
     * scrollable ancestors of an element are scrolled.
     * @param {?} elementRef Element whose ancestors to listen for.
     * @param {?=} auditTimeInMs Time to throttle the scroll events.
     * @return {?}
     */
    function (elementRef, auditTimeInMs) {
        /** @type {?} */
        var ancestors = this.getAncestorScrollContainers(elementRef);
        return this.scrolled(auditTimeInMs).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (target) {
            return !target || ancestors.indexOf(target) > -1;
        }));
    };
    /** Returns all registered Scrollables that contain the provided element. */
    /**
     * Returns all registered Scrollables that contain the provided element.
     * @param {?} elementRef
     * @return {?}
     */
    ScrollDispatcher.prototype.getAncestorScrollContainers = /**
     * Returns all registered Scrollables that contain the provided element.
     * @param {?} elementRef
     * @return {?}
     */
    function (elementRef) {
        var _this = this;
        /** @type {?} */
        var scrollingContainers = [];
        this.scrollContainers.forEach(function (_subscription, scrollable) {
            if (_this._scrollableContainsElement(scrollable, elementRef)) {
                scrollingContainers.push(scrollable);
            }
        });
        return scrollingContainers;
    };
    /** Returns true if the element is contained within the provided Scrollable. */
    /**
     * Returns true if the element is contained within the provided Scrollable.
     * @private
     * @param {?} scrollable
     * @param {?} elementRef
     * @return {?}
     */
    ScrollDispatcher.prototype._scrollableContainsElement = /**
     * Returns true if the element is contained within the provided Scrollable.
     * @private
     * @param {?} scrollable
     * @param {?} elementRef
     * @return {?}
     */
    function (scrollable, elementRef) {
        /** @type {?} */
        var element = elementRef.nativeElement;
        /** @type {?} */
        var scrollableElement = scrollable.getElementRef().nativeElement;
        // Traverse through the element parents until we reach null, checking if any of the elements
        // are the scrollable's element.
        do {
            if (element == scrollableElement) {
                return true;
            }
        } while (element = (/** @type {?} */ (element)).parentElement);
        return false;
    };
    /** Sets up the global scroll listeners. */
    /**
     * Sets up the global scroll listeners.
     * @private
     * @return {?}
     */
    ScrollDispatcher.prototype._addGlobalListener = /**
     * Sets up the global scroll listeners.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._globalSubscription = this._ngZone.runOutsideAngular(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window.document, 'scroll').subscribe(function () { return _this._scrolled.next(); });
        });
    };
    /** Cleans up the global scroll listener. */
    /**
     * Cleans up the global scroll listener.
     * @private
     * @return {?}
     */
    ScrollDispatcher.prototype._removeGlobalListener = /**
     * Cleans up the global scroll listener.
     * @private
     * @return {?}
     */
    function () {
        if (this._globalSubscription) {
            this._globalSubscription.unsubscribe();
            this._globalSubscription = null;
        }
    };
    ScrollDispatcher.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    ScrollDispatcher.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
    ]; };
    /** @nocollapse */ ScrollDispatcher.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function ScrollDispatcher_Factory() { return new ScrollDispatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"])); }, token: ScrollDispatcher, providedIn: "root" });
    return ScrollDispatcher;
}());
/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @param {?} parentDispatcher
 * @param {?} ngZone
 * @param {?} platform
 * @return {?}
 */
function SCROLL_DISPATCHER_PROVIDER_FACTORY(parentDispatcher, ngZone, platform) {
    return parentDispatcher || new ScrollDispatcher(ngZone, platform);
}
/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @type {?}
 */
var SCROLL_DISPATCHER_PROVIDER = {
    // If there is already a ScrollDispatcher available, use that. Otherwise, provide a new one.
    provide: ScrollDispatcher,
    deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), ScrollDispatcher], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]],
    useFactory: SCROLL_DISPATCHER_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Sends an event when the directive's element is scrolled. Registers itself with the
 * ScrollDispatcher service to include itself as part of its collection of scrolling events that it
 * can be listened to through the service.
 */
var CdkScrollable = /** @class */ (function () {
    function CdkScrollable(elementRef, scrollDispatcher, ngZone, dir) {
        var _this = this;
        this.elementRef = elementRef;
        this.scrollDispatcher = scrollDispatcher;
        this.ngZone = ngZone;
        this.dir = dir;
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._elementScrolled = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            return _this.ngZone.runOutsideAngular(function () {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(_this.elementRef.nativeElement, 'scroll').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this._destroyed))
                    .subscribe(observer);
            });
        });
    }
    /**
     * @return {?}
     */
    CdkScrollable.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.scrollDispatcher.register(this);
    };
    /**
     * @return {?}
     */
    CdkScrollable.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.scrollDispatcher.deregister(this);
        this._destroyed.next();
        this._destroyed.complete();
    };
    /** Returns observable that emits when a scroll event is fired on the host element. */
    /**
     * Returns observable that emits when a scroll event is fired on the host element.
     * @return {?}
     */
    CdkScrollable.prototype.elementScrolled = /**
     * Returns observable that emits when a scroll event is fired on the host element.
     * @return {?}
     */
    function () {
        return this._elementScrolled;
    };
    /** Gets the ElementRef for the viewport. */
    /**
     * Gets the ElementRef for the viewport.
     * @return {?}
     */
    CdkScrollable.prototype.getElementRef = /**
     * Gets the ElementRef for the viewport.
     * @return {?}
     */
    function () {
        return this.elementRef;
    };
    /**
     * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
     * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
     * left and right always refer to the left and right side of the scrolling container irrespective
     * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
     * in an RTL context.
     * @param options specified the offsets to scroll to.
     */
    /**
     * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
     * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
     * left and right always refer to the left and right side of the scrolling container irrespective
     * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
     * in an RTL context.
     * @param {?} options specified the offsets to scroll to.
     * @return {?}
     */
    CdkScrollable.prototype.scrollTo = /**
     * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
     * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
     * left and right always refer to the left and right side of the scrolling container irrespective
     * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
     * in an RTL context.
     * @param {?} options specified the offsets to scroll to.
     * @return {?}
     */
    function (options) {
        /** @type {?} */
        var el = this.elementRef.nativeElement;
        /** @type {?} */
        var isRtl = this.dir && this.dir.value == 'rtl';
        // Rewrite start & end offsets as right or left offsets.
        options.left = options.left == null ? (isRtl ? options.end : options.start) : options.left;
        options.right = options.right == null ? (isRtl ? options.start : options.end) : options.right;
        // Rewrite the bottom offset as a top offset.
        if (options.bottom != null) {
            ((/** @type {?} */ (options))).top =
                el.scrollHeight - el.clientHeight - options.bottom;
        }
        // Rewrite the right offset as a left offset.
        if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() != _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["RtlScrollAxisType"].NORMAL) {
            if (options.left != null) {
                ((/** @type {?} */ (options))).right =
                    el.scrollWidth - el.clientWidth - options.left;
            }
            if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["RtlScrollAxisType"].INVERTED) {
                options.left = options.right;
            }
            else if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["RtlScrollAxisType"].NEGATED) {
                options.left = options.right ? -options.right : options.right;
            }
        }
        else {
            if (options.right != null) {
                ((/** @type {?} */ (options))).left =
                    el.scrollWidth - el.clientWidth - options.right;
            }
        }
        this._applyScrollToOptions(options);
    };
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    CdkScrollable.prototype._applyScrollToOptions = /**
     * @private
     * @param {?} options
     * @return {?}
     */
    function (options) {
        /** @type {?} */
        var el = this.elementRef.nativeElement;
        if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["supportsScrollBehavior"])()) {
            el.scrollTo(options);
        }
        else {
            if (options.top != null) {
                el.scrollTop = options.top;
            }
            if (options.left != null) {
                el.scrollLeft = options.left;
            }
        }
    };
    /**
     * Measures the scroll offset relative to the specified edge of the viewport. This method can be
     * used instead of directly checking scrollLeft or scrollTop, since browsers are not consistent
     * about what scrollLeft means in RTL. The values returned by this method are normalized such that
     * left and right always refer to the left and right side of the scrolling container irrespective
     * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
     * in an RTL context.
     * @param from The edge to measure from.
     */
    /**
     * Measures the scroll offset relative to the specified edge of the viewport. This method can be
     * used instead of directly checking scrollLeft or scrollTop, since browsers are not consistent
     * about what scrollLeft means in RTL. The values returned by this method are normalized such that
     * left and right always refer to the left and right side of the scrolling container irrespective
     * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
     * in an RTL context.
     * @param {?} from The edge to measure from.
     * @return {?}
     */
    CdkScrollable.prototype.measureScrollOffset = /**
     * Measures the scroll offset relative to the specified edge of the viewport. This method can be
     * used instead of directly checking scrollLeft or scrollTop, since browsers are not consistent
     * about what scrollLeft means in RTL. The values returned by this method are normalized such that
     * left and right always refer to the left and right side of the scrolling container irrespective
     * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
     * in an RTL context.
     * @param {?} from The edge to measure from.
     * @return {?}
     */
    function (from) {
        /** @type {?} */
        var LEFT = 'left';
        /** @type {?} */
        var RIGHT = 'right';
        /** @type {?} */
        var el = this.elementRef.nativeElement;
        if (from == 'top') {
            return el.scrollTop;
        }
        if (from == 'bottom') {
            return el.scrollHeight - el.clientHeight - el.scrollTop;
        }
        // Rewrite start & end as left or right offsets.
        /** @type {?} */
        var isRtl = this.dir && this.dir.value == 'rtl';
        if (from == 'start') {
            from = isRtl ? RIGHT : LEFT;
        }
        else if (from == 'end') {
            from = isRtl ? LEFT : RIGHT;
        }
        if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["RtlScrollAxisType"].INVERTED) {
            // For INVERTED, scrollLeft is (scrollWidth - clientWidth) when scrolled all the way left and
            // 0 when scrolled all the way right.
            if (from == LEFT) {
                return el.scrollWidth - el.clientWidth - el.scrollLeft;
            }
            else {
                return el.scrollLeft;
            }
        }
        else if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["RtlScrollAxisType"].NEGATED) {
            // For NEGATED, scrollLeft is -(scrollWidth - clientWidth) when scrolled all the way left and
            // 0 when scrolled all the way right.
            if (from == LEFT) {
                return el.scrollLeft + el.scrollWidth - el.clientWidth;
            }
            else {
                return -el.scrollLeft;
            }
        }
        else {
            // For NORMAL, as well as non-RTL contexts, scrollLeft is 0 when scrolled all the way left and
            // (scrollWidth - clientWidth) when scrolled all the way right.
            if (from == LEFT) {
                return el.scrollLeft;
            }
            else {
                return el.scrollWidth - el.clientWidth - el.scrollLeft;
            }
        }
    };
    CdkScrollable.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[cdk-scrollable], [cdkScrollable]'
                },] },
    ];
    /** @nocollapse */
    CdkScrollable.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: ScrollDispatcher },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
    ]; };
    return CdkScrollable;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Checks if the given ranges are equal.
 * @param {?} r1
 * @param {?} r2
 * @return {?}
 */
function rangesEqual(r1, r2) {
    return r1.start == r2.start && r1.end == r2.end;
}
/**
 * Scheduler to be used for scroll events. Needs to fall back to
 * something that doesn't rely on requestAnimationFrame on environments
 * that don't support it (e.g. server-side rendering).
 * @type {?}
 */
var SCROLL_SCHEDULER = typeof requestAnimationFrame !== 'undefined' ? rxjs__WEBPACK_IMPORTED_MODULE_2__["animationFrameScheduler"] : rxjs__WEBPACK_IMPORTED_MODULE_2__["asapScheduler"];
/**
 * A viewport that virtualizes it's scrolling with the help of `CdkVirtualForOf`.
 */
var CdkVirtualScrollViewport = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__extends"])(CdkVirtualScrollViewport, _super);
    function CdkVirtualScrollViewport(elementRef, _changeDetectorRef, ngZone, _scrollStrategy, dir, scrollDispatcher) {
        var _this = _super.call(this, elementRef, scrollDispatcher, ngZone, dir) || this;
        _this.elementRef = elementRef;
        _this._changeDetectorRef = _changeDetectorRef;
        _this._scrollStrategy = _scrollStrategy;
        /**
         * Emits when the viewport is detached from a CdkVirtualForOf.
         */
        _this._detachedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the rendered range changes.
         */
        _this._renderedRangeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * The direction the viewport scrolls.
         */
        _this.orientation = 'vertical';
        // Note: we don't use the typical EventEmitter here because we need to subscribe to the scroll
        // strategy lazily (i.e. only if the user is actually listening to the events). We do this because
        // depending on how the strategy calculates the scrolled index, it may come at a cost to
        // performance.
        /**
         * Emits when the index of the first element visible in the viewport changes.
         */
        _this.scrolledIndexChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            return _this._scrollStrategy.scrolledIndexChange.subscribe(function (index) {
                return Promise.resolve().then(function () { return _this.ngZone.run(function () { return observer.next(index); }); });
            });
        });
        /**
         * A stream that emits whenever the rendered range changes.
         */
        _this.renderedRangeStream = _this._renderedRangeSubject.asObservable();
        /**
         * The transform used to scale the spacer to the same size as all content, including content that
         * is not currently rendered.
         */
        _this._totalContentSizeTransform = '';
        /**
         * The total size of all content (in pixels), including content that is not currently rendered.
         */
        _this._totalContentSize = 0;
        /**
         * The currently rendered range of indices.
         */
        _this._renderedRange = { start: 0, end: 0 };
        /**
         * The length of the data bound to this viewport (in number of items).
         */
        _this._dataLength = 0;
        /**
         * The size of the viewport (in pixels).
         */
        _this._viewportSize = 0;
        /**
         * The last rendered content offset that was set.
         */
        _this._renderedContentOffset = 0;
        /**
         * Whether the last rendered content offset was to the end of the content (and therefore needs to
         * be rewritten as an offset to the start of the content).
         */
        _this._renderedContentOffsetNeedsRewrite = false;
        /**
         * Whether there is a pending change detection cycle.
         */
        _this._isChangeDetectionPending = false;
        /**
         * A list of functions to run after the next change detection cycle.
         */
        _this._runAfterChangeDetection = [];
        if (!_scrollStrategy) {
            throw Error('Error: cdk-virtual-scroll-viewport requires the "itemSize" property to be set.');
        }
        return _this;
    }
    /**
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        // It's still too early to measure the viewport at this point. Deferring with a promise allows
        // the Viewport to be rendered with the correct size before we measure. We run this outside the
        // zone to avoid causing more change detection cycles. We handle the change detection loop
        // ourselves instead.
        this.ngZone.runOutsideAngular(function () { return Promise.resolve().then(function () {
            _this._measureViewportSize();
            _this._scrollStrategy.attach(_this);
            _this.elementScrolled()
                .pipe(
            // Start off with a fake scroll event so we properly detect our initial position.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])((/** @type {?} */ (null))), 
            // Collect multiple events into one until the next animation frame. This way if
            // there are multiple scroll events in the same frame we only need to recheck
            // our layout once.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(0, SCROLL_SCHEDULER))
                .subscribe(function () { return _this._scrollStrategy.onContentScrolled(); });
            _this._markChangeDetectionNeeded();
        }); });
    };
    /**
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.detach();
        this._scrollStrategy.detach();
        // Complete all subjects
        this._renderedRangeSubject.complete();
        this._detachedSubject.complete();
        _super.prototype.ngOnDestroy.call(this);
    };
    /** Attaches a `CdkVirtualForOf` to this viewport. */
    /**
     * Attaches a `CdkVirtualForOf` to this viewport.
     * @param {?} forOf
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.attach = /**
     * Attaches a `CdkVirtualForOf` to this viewport.
     * @param {?} forOf
     * @return {?}
     */
    function (forOf) {
        var _this = this;
        if (this._forOf) {
            throw Error('CdkVirtualScrollViewport is already attached.');
        }
        // Subscribe to the data stream of the CdkVirtualForOf to keep track of when the data length
        // changes. Run outside the zone to avoid triggering change detection, since we're managing the
        // change detection loop ourselves.
        this.ngZone.runOutsideAngular(function () {
            _this._forOf = forOf;
            _this._forOf.dataStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this._detachedSubject)).subscribe(function (data) {
                /** @type {?} */
                var newLength = data.length;
                if (newLength !== _this._dataLength) {
                    _this._dataLength = newLength;
                    _this._scrollStrategy.onDataLengthChanged();
                }
                _this._doChangeDetection();
            });
        });
    };
    /** Detaches the current `CdkVirtualForOf`. */
    /**
     * Detaches the current `CdkVirtualForOf`.
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.detach = /**
     * Detaches the current `CdkVirtualForOf`.
     * @return {?}
     */
    function () {
        this._forOf = null;
        this._detachedSubject.next();
    };
    /** Gets the length of the data bound to this viewport (in number of items). */
    /**
     * Gets the length of the data bound to this viewport (in number of items).
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.getDataLength = /**
     * Gets the length of the data bound to this viewport (in number of items).
     * @return {?}
     */
    function () {
        return this._dataLength;
    };
    /** Gets the size of the viewport (in pixels). */
    /**
     * Gets the size of the viewport (in pixels).
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.getViewportSize = /**
     * Gets the size of the viewport (in pixels).
     * @return {?}
     */
    function () {
        return this._viewportSize;
    };
    // TODO(mmalerba): This is technically out of sync with what's really rendered until a render
    // cycle happens. I'm being careful to only call it after the render cycle is complete and before
    // setting it to something else, but its error prone and should probably be split into
    // `pendingRange` and `renderedRange`, the latter reflecting whats actually in the DOM.
    /** Get the current rendered range of items. */
    // TODO(mmalerba): This is technically out of sync with what's really rendered until a render
    // cycle happens. I'm being careful to only call it after the render cycle is complete and before
    // setting it to something else, but its error prone and should probably be split into
    // `pendingRange` and `renderedRange`, the latter reflecting whats actually in the DOM.
    /**
     * Get the current rendered range of items.
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.getRenderedRange = 
    // TODO(mmalerba): This is technically out of sync with what's really rendered until a render
    // cycle happens. I'm being careful to only call it after the render cycle is complete and before
    // setting it to something else, but its error prone and should probably be split into
    // `pendingRange` and `renderedRange`, the latter reflecting whats actually in the DOM.
    /**
     * Get the current rendered range of items.
     * @return {?}
     */
    function () {
        return this._renderedRange;
    };
    /**
     * Sets the total size of all content (in pixels), including content that is not currently
     * rendered.
     */
    /**
     * Sets the total size of all content (in pixels), including content that is not currently
     * rendered.
     * @param {?} size
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.setTotalContentSize = /**
     * Sets the total size of all content (in pixels), including content that is not currently
     * rendered.
     * @param {?} size
     * @return {?}
     */
    function (size) {
        if (this._totalContentSize !== size) {
            this._totalContentSize = size;
            /** @type {?} */
            var axis = this.orientation == 'horizontal' ? 'X' : 'Y';
            this._totalContentSizeTransform = "scale" + axis + "(" + this._totalContentSize + ")";
            this._markChangeDetectionNeeded();
        }
    };
    /** Sets the currently rendered range of indices. */
    /**
     * Sets the currently rendered range of indices.
     * @param {?} range
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.setRenderedRange = /**
     * Sets the currently rendered range of indices.
     * @param {?} range
     * @return {?}
     */
    function (range) {
        var _this = this;
        if (!rangesEqual(this._renderedRange, range)) {
            this._renderedRangeSubject.next(this._renderedRange = range);
            this._markChangeDetectionNeeded(function () { return _this._scrollStrategy.onContentRendered(); });
        }
    };
    /**
     * Gets the offset from the start of the viewport to the start of the rendered data (in pixels).
     */
    /**
     * Gets the offset from the start of the viewport to the start of the rendered data (in pixels).
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.getOffsetToRenderedContentStart = /**
     * Gets the offset from the start of the viewport to the start of the rendered data (in pixels).
     * @return {?}
     */
    function () {
        return this._renderedContentOffsetNeedsRewrite ? null : this._renderedContentOffset;
    };
    /**
     * Sets the offset from the start of the viewport to either the start or end of the rendered data
     * (in pixels).
     */
    /**
     * Sets the offset from the start of the viewport to either the start or end of the rendered data
     * (in pixels).
     * @param {?} offset
     * @param {?=} to
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.setRenderedContentOffset = /**
     * Sets the offset from the start of the viewport to either the start or end of the rendered data
     * (in pixels).
     * @param {?} offset
     * @param {?=} to
     * @return {?}
     */
    function (offset, to) {
        var _this = this;
        if (to === void 0) { to = 'to-start'; }
        // For a horizontal viewport in a right-to-left language we need to translate along the x-axis
        // in the negative direction.
        /** @type {?} */
        var isRtl = this.dir && this.dir.value == 'rtl';
        /** @type {?} */
        var isHorizontal = this.orientation == 'horizontal';
        /** @type {?} */
        var axis = isHorizontal ? 'X' : 'Y';
        /** @type {?} */
        var axisDirection = isHorizontal && isRtl ? -1 : 1;
        /** @type {?} */
        var transform = "translate" + axis + "(" + Number(axisDirection * offset) + "px)";
        this._renderedContentOffset = offset;
        if (to === 'to-end') {
            transform += " translate" + axis + "(-100%)";
            // The viewport should rewrite this as a `to-start` offset on the next render cycle. Otherwise
            // elements will appear to expand in the wrong direction (e.g. `mat-expansion-panel` would
            // expand upward).
            this._renderedContentOffsetNeedsRewrite = true;
        }
        if (this._renderedContentTransform != transform) {
            // We know this value is safe because we parse `offset` with `Number()` before passing it
            // into the string.
            this._renderedContentTransform = transform;
            this._markChangeDetectionNeeded(function () {
                if (_this._renderedContentOffsetNeedsRewrite) {
                    _this._renderedContentOffset -= _this.measureRenderedContentSize();
                    _this._renderedContentOffsetNeedsRewrite = false;
                    _this.setRenderedContentOffset(_this._renderedContentOffset);
                }
                else {
                    _this._scrollStrategy.onRenderedOffsetChanged();
                }
            });
        }
    };
    /**
     * Scrolls to the given offset from the start of the viewport. Please note that this is not always
     * the same as setting `scrollTop` or `scrollLeft`. In a horizontal viewport with right-to-left
     * direction, this would be the equivalent of setting a fictional `scrollRight` property.
     * @param offset The offset to scroll to.
     * @param behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
     */
    /**
     * Scrolls to the given offset from the start of the viewport. Please note that this is not always
     * the same as setting `scrollTop` or `scrollLeft`. In a horizontal viewport with right-to-left
     * direction, this would be the equivalent of setting a fictional `scrollRight` property.
     * @param {?} offset The offset to scroll to.
     * @param {?=} behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.scrollToOffset = /**
     * Scrolls to the given offset from the start of the viewport. Please note that this is not always
     * the same as setting `scrollTop` or `scrollLeft`. In a horizontal viewport with right-to-left
     * direction, this would be the equivalent of setting a fictional `scrollRight` property.
     * @param {?} offset The offset to scroll to.
     * @param {?=} behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
     * @return {?}
     */
    function (offset, behavior) {
        if (behavior === void 0) { behavior = 'auto'; }
        /** @type {?} */
        var options = { behavior: behavior };
        if (this.orientation === 'horizontal') {
            options.start = offset;
        }
        else {
            options.top = offset;
        }
        this.scrollTo(options);
    };
    /**
     * Scrolls to the offset for the given index.
     * @param index The index of the element to scroll to.
     * @param behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
     */
    /**
     * Scrolls to the offset for the given index.
     * @param {?} index The index of the element to scroll to.
     * @param {?=} behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.scrollToIndex = /**
     * Scrolls to the offset for the given index.
     * @param {?} index The index of the element to scroll to.
     * @param {?=} behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
     * @return {?}
     */
    function (index, behavior) {
        if (behavior === void 0) { behavior = 'auto'; }
        this._scrollStrategy.scrollToIndex(index, behavior);
    };
    /**
     * Gets the current scroll offset from the start of the viewport (in pixels).
     * @param from The edge to measure the offset from. Defaults to 'top' in vertical mode and 'start'
     *     in horizontal mode.
     */
    /**
     * Gets the current scroll offset from the start of the viewport (in pixels).
     * @param {?=} from The edge to measure the offset from. Defaults to 'top' in vertical mode and 'start'
     *     in horizontal mode.
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.measureScrollOffset = /**
     * Gets the current scroll offset from the start of the viewport (in pixels).
     * @param {?=} from The edge to measure the offset from. Defaults to 'top' in vertical mode and 'start'
     *     in horizontal mode.
     * @return {?}
     */
    function (from) {
        return _super.prototype.measureScrollOffset.call(this, from ? from : this.orientation === 'horizontal' ? 'start' : 'top');
    };
    /** Measure the combined size of all of the rendered items. */
    /**
     * Measure the combined size of all of the rendered items.
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.measureRenderedContentSize = /**
     * Measure the combined size of all of the rendered items.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var contentEl = this._contentWrapper.nativeElement;
        return this.orientation === 'horizontal' ? contentEl.offsetWidth : contentEl.offsetHeight;
    };
    /**
     * Measure the total combined size of the given range. Throws if the range includes items that are
     * not rendered.
     */
    /**
     * Measure the total combined size of the given range. Throws if the range includes items that are
     * not rendered.
     * @param {?} range
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.measureRangeSize = /**
     * Measure the total combined size of the given range. Throws if the range includes items that are
     * not rendered.
     * @param {?} range
     * @return {?}
     */
    function (range) {
        if (!this._forOf) {
            return 0;
        }
        return this._forOf.measureRangeSize(range, this.orientation);
    };
    /** Update the viewport dimensions and re-render. */
    /**
     * Update the viewport dimensions and re-render.
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.checkViewportSize = /**
     * Update the viewport dimensions and re-render.
     * @return {?}
     */
    function () {
        // TODO: Cleanup later when add logic for handling content resize
        this._measureViewportSize();
        this._scrollStrategy.onDataLengthChanged();
    };
    /** Measure the viewport size. */
    /**
     * Measure the viewport size.
     * @private
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype._measureViewportSize = /**
     * Measure the viewport size.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var viewportEl = this.elementRef.nativeElement;
        this._viewportSize = this.orientation === 'horizontal' ?
            viewportEl.clientWidth : viewportEl.clientHeight;
    };
    /** Queue up change detection to run. */
    /**
     * Queue up change detection to run.
     * @private
     * @param {?=} runAfter
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype._markChangeDetectionNeeded = /**
     * Queue up change detection to run.
     * @private
     * @param {?=} runAfter
     * @return {?}
     */
    function (runAfter) {
        var _this = this;
        if (runAfter) {
            this._runAfterChangeDetection.push(runAfter);
        }
        // Use a Promise to batch together calls to `_doChangeDetection`. This way if we set a bunch of
        // properties sequentially we only have to run `_doChangeDetection` once at the end.
        if (!this._isChangeDetectionPending) {
            this._isChangeDetectionPending = true;
            this.ngZone.runOutsideAngular(function () { return Promise.resolve().then(function () {
                _this._doChangeDetection();
            }); });
        }
    };
    /** Run change detection. */
    /**
     * Run change detection.
     * @private
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype._doChangeDetection = /**
     * Run change detection.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._isChangeDetectionPending = false;
        // Apply changes to Angular bindings. Note: We must call `markForCheck` to run change detection
        // from the root, since the repeated items are content projected in. Calling `detectChanges`
        // instead does not properly check the projected content.
        this.ngZone.run(function () { return _this._changeDetectorRef.markForCheck(); });
        // Apply the content transform. The transform can't be set via an Angular binding because
        // bypassSecurityTrustStyle is banned in Google. However the value is safe, it's composed of
        // string literals, a variable that can only be 'X' or 'Y', and user input that is run through
        // the `Number` function first to coerce it to a numeric value.
        this._contentWrapper.nativeElement.style.transform = this._renderedContentTransform;
        /** @type {?} */
        var runAfterChangeDetection = this._runAfterChangeDetection;
        this._runAfterChangeDetection = [];
        for (var _i = 0, runAfterChangeDetection_1 = runAfterChangeDetection; _i < runAfterChangeDetection_1.length; _i++) {
            var fn = runAfterChangeDetection_1[_i];
            fn();
        }
    };
    CdkVirtualScrollViewport.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{selector: 'cdk-virtual-scroll-viewport',
                    template: "<div #contentWrapper class=\"cdk-virtual-scroll-content-wrapper\"><ng-content></ng-content></div><div class=\"cdk-virtual-scroll-spacer\" [style.transform]=\"_totalContentSizeTransform\"></div>",
                    styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:0}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:0}.cdk-virtual-scroll-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0}[dir=rtl] .cdk-virtual-scroll-spacer{right:0;left:auto;transform-origin:100% 0}"],
                    host: {
                        'class': 'cdk-virtual-scroll-viewport',
                        '[class.cdk-virtual-scroll-orientation-horizontal]': 'orientation === "horizontal"',
                        '[class.cdk-virtual-scroll-orientation-vertical]': 'orientation !== "horizontal"',
                    },
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    providers: [{
                            provide: CdkScrollable,
                            useExisting: CdkVirtualScrollViewport,
                        }]
                },] },
    ];
    /** @nocollapse */
    CdkVirtualScrollViewport.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [VIRTUAL_SCROLL_STRATEGY,] }] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
        { type: ScrollDispatcher }
    ]; };
    CdkVirtualScrollViewport.propDecorators = {
        orientation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        scrolledIndexChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        _contentWrapper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['contentWrapper',] }]
    };
    return CdkVirtualScrollViewport;
}(CdkScrollable));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Helper to extract size from a DOM Node.
 * @param {?} orientation
 * @param {?} node
 * @return {?}
 */
function getSize(orientation, node) {
    /** @type {?} */
    var el = (/** @type {?} */ (node));
    if (!el.getBoundingClientRect) {
        return 0;
    }
    /** @type {?} */
    var rect = el.getBoundingClientRect();
    return orientation == 'horizontal' ? rect.width : rect.height;
}
/**
 * A directive similar to `ngForOf` to be used for rendering data inside a virtual scrolling
 * container.
 * @template T
 */
var CdkVirtualForOf = /** @class */ (function () {
    function CdkVirtualForOf(_viewContainerRef, _template, _differs, _viewport, ngZone) {
        var _this = this;
        this._viewContainerRef = _viewContainerRef;
        this._template = _template;
        this._differs = _differs;
        this._viewport = _viewport;
        /**
         * Emits when the rendered view of the data changes.
         */
        this.viewChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Subject that emits when a new DataSource instance is given.
         */
        this._dataSourceChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * The size of the cache used to store templates that are not being used for re-use later.
         * Setting the cache size to `0` will disable caching. Defaults to 20 templates.
         */
        this.cdkVirtualForTemplateCacheSize = 20;
        /**
         * Emits whenever the data in the current DataSource changes.
         */
        this.dataStream = this._dataSourceChanges
            .pipe(
        // Start off with null `DataSource`.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])((/** @type {?} */ (null))), 
        // Bundle up the previous and current data sources so we can work with both.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pairwise"])(), 
        // Use `_changeDataSource` to disconnect from the previous data source and connect to the
        // new one, passing back a stream of data changes which we run through `switchMap` to give
        // us a data stream that emits the latest data from whatever the current `DataSource` is.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_a) {
            var prev = _a[0], cur = _a[1];
            return _this._changeDataSource(prev, cur);
        }), 
        // Replay the last emitted data when someone subscribes.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
        /**
         * The differ used to calculate changes to the data.
         */
        this._differ = null;
        /**
         * The template cache used to hold on ot template instancess that have been stamped out, but don't
         * currently need to be rendered. These instances will be reused in the future rather than
         * stamping out brand new ones.
         */
        this._templateCache = [];
        /**
         * Whether the rendered data should be updated during the next ngDoCheck cycle.
         */
        this._needsUpdate = false;
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dataStream.subscribe(function (data) {
            _this._data = data;
            _this._onRenderedDataChange();
        });
        this._viewport.renderedRangeStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe(function (range) {
            _this._renderedRange = range;
            ngZone.run(function () { return _this.viewChange.next(_this._renderedRange); });
            _this._onRenderedDataChange();
        });
        this._viewport.attach(this);
    }
    Object.defineProperty(CdkVirtualForOf.prototype, "cdkVirtualForOf", {
        /** The DataSource to display. */
        get: /**
         * The DataSource to display.
         * @return {?}
         */
        function () {
            return this._cdkVirtualForOf;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._cdkVirtualForOf = value;
            /** @type {?} */
            var ds = Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["isDataSource"])(value) ? value :
                // Slice the value if its an NgIterable to ensure we're working with an array.
                new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["ArrayDataSource"](value instanceof rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"] ? value : Array.prototype.slice.call(value || []));
            this._dataSourceChanges.next(ds);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkVirtualForOf.prototype, "cdkVirtualForTrackBy", {
        /**
         * The `TrackByFunction` to use for tracking changes. The `TrackByFunction` takes the index and
         * the item and produces a value to be used as the item's identity when tracking changes.
         */
        get: /**
         * The `TrackByFunction` to use for tracking changes. The `TrackByFunction` takes the index and
         * the item and produces a value to be used as the item's identity when tracking changes.
         * @return {?}
         */
        function () {
            return this._cdkVirtualForTrackBy;
        },
        set: /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            var _this = this;
            this._needsUpdate = true;
            this._cdkVirtualForTrackBy = fn ?
                function (index, item) { return fn(index + (_this._renderedRange ? _this._renderedRange.start : 0), item); } :
                undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkVirtualForOf.prototype, "cdkVirtualForTemplate", {
        /** The template used to stamp out new elements. */
        set: /**
         * The template used to stamp out new elements.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this._needsUpdate = true;
                this._template = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Measures the combined size (width for horizontal orientation, height for vertical) of all items
     * in the specified range. Throws an error if the range includes items that are not currently
     * rendered.
     */
    /**
     * Measures the combined size (width for horizontal orientation, height for vertical) of all items
     * in the specified range. Throws an error if the range includes items that are not currently
     * rendered.
     * @param {?} range
     * @param {?} orientation
     * @return {?}
     */
    CdkVirtualForOf.prototype.measureRangeSize = /**
     * Measures the combined size (width for horizontal orientation, height for vertical) of all items
     * in the specified range. Throws an error if the range includes items that are not currently
     * rendered.
     * @param {?} range
     * @param {?} orientation
     * @return {?}
     */
    function (range, orientation) {
        if (range.start >= range.end) {
            return 0;
        }
        if (range.start < this._renderedRange.start || range.end > this._renderedRange.end) {
            throw Error("Error: attempted to measure an item that isn't rendered.");
        }
        // The index into the list of rendered views for the first item in the range.
        /** @type {?} */
        var renderedStartIndex = range.start - this._renderedRange.start;
        // The length of the range we're measuring.
        /** @type {?} */
        var rangeLen = range.end - range.start;
        // Loop over all root nodes for all items in the range and sum up their size.
        /** @type {?} */
        var totalSize = 0;
        /** @type {?} */
        var i = rangeLen;
        while (i--) {
            /** @type {?} */
            var view = (/** @type {?} */ (this._viewContainerRef.get(i + renderedStartIndex)));
            /** @type {?} */
            var j = view ? view.rootNodes.length : 0;
            while (j--) {
                totalSize += getSize(orientation, (/** @type {?} */ (view)).rootNodes[j]);
            }
        }
        return totalSize;
    };
    /**
     * @return {?}
     */
    CdkVirtualForOf.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (this._differ && this._needsUpdate) {
            // TODO(mmalerba): We should differentiate needs update due to scrolling and a new portion of
            // this list being rendered (can use simpler algorithm) vs needs update due to data actually
            // changing (need to do this diff).
            /** @type {?} */
            var changes = this._differ.diff(this._renderedItems);
            if (!changes) {
                this._updateContext();
            }
            else {
                this._applyChanges(changes);
            }
            this._needsUpdate = false;
        }
    };
    /**
     * @return {?}
     */
    CdkVirtualForOf.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._viewport.detach();
        this._dataSourceChanges.complete();
        this.viewChange.complete();
        this._destroyed.next();
        this._destroyed.complete();
        for (var _i = 0, _a = this._templateCache; _i < _a.length; _i++) {
            var view = _a[_i];
            view.destroy();
        }
    };
    /** React to scroll state changes in the viewport. */
    /**
     * React to scroll state changes in the viewport.
     * @private
     * @return {?}
     */
    CdkVirtualForOf.prototype._onRenderedDataChange = /**
     * React to scroll state changes in the viewport.
     * @private
     * @return {?}
     */
    function () {
        if (!this._renderedRange) {
            return;
        }
        this._renderedItems = this._data.slice(this._renderedRange.start, this._renderedRange.end);
        if (!this._differ) {
            this._differ = this._differs.find(this._renderedItems).create(this.cdkVirtualForTrackBy);
        }
        this._needsUpdate = true;
    };
    /** Swap out one `DataSource` for another. */
    /**
     * Swap out one `DataSource` for another.
     * @private
     * @param {?} oldDs
     * @param {?} newDs
     * @return {?}
     */
    CdkVirtualForOf.prototype._changeDataSource = /**
     * Swap out one `DataSource` for another.
     * @private
     * @param {?} oldDs
     * @param {?} newDs
     * @return {?}
     */
    function (oldDs, newDs) {
        if (oldDs) {
            oldDs.disconnect(this);
        }
        this._needsUpdate = true;
        return newDs.connect(this);
    };
    /** Update the `CdkVirtualForOfContext` for all views. */
    /**
     * Update the `CdkVirtualForOfContext` for all views.
     * @private
     * @return {?}
     */
    CdkVirtualForOf.prototype._updateContext = /**
     * Update the `CdkVirtualForOfContext` for all views.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var count = this._data.length;
        /** @type {?} */
        var i = this._viewContainerRef.length;
        while (i--) {
            /** @type {?} */
            var view = (/** @type {?} */ (this._viewContainerRef.get(i)));
            view.context.index = this._renderedRange.start + i;
            view.context.count = count;
            this._updateComputedContextProperties(view.context);
            view.detectChanges();
        }
    };
    /** Apply changes to the DOM. */
    /**
     * Apply changes to the DOM.
     * @private
     * @param {?} changes
     * @return {?}
     */
    CdkVirtualForOf.prototype._applyChanges = /**
     * Apply changes to the DOM.
     * @private
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        // Rearrange the views to put them in the right location.
        changes.forEachOperation(function (record, adjustedPreviousIndex, currentIndex) {
            if (record.previousIndex == null) { // Item added.
                // Item added.
                /** @type {?} */
                var view = _this._insertViewForNewItem((/** @type {?} */ (currentIndex)));
                view.context.$implicit = record.item;
            }
            else if (currentIndex == null) { // Item removed.
                _this._cacheView(_this._detachView((/** @type {?} */ (adjustedPreviousIndex))));
            }
            else { // Item moved.
                // Item moved.
                /** @type {?} */
                var view = (/** @type {?} */ (_this._viewContainerRef.get((/** @type {?} */ (adjustedPreviousIndex)))));
                _this._viewContainerRef.move(view, currentIndex);
                view.context.$implicit = record.item;
            }
        });
        // Update $implicit for any items that had an identity change.
        changes.forEachIdentityChange(function (record) {
            /** @type {?} */
            var view = (/** @type {?} */ (_this._viewContainerRef.get((/** @type {?} */ (record.currentIndex)))));
            view.context.$implicit = record.item;
        });
        // Update the context variables on all items.
        /** @type {?} */
        var count = this._data.length;
        /** @type {?} */
        var i = this._viewContainerRef.length;
        while (i--) {
            /** @type {?} */
            var view = (/** @type {?} */ (this._viewContainerRef.get(i)));
            view.context.index = this._renderedRange.start + i;
            view.context.count = count;
            this._updateComputedContextProperties(view.context);
        }
    };
    /** Cache the given detached view. */
    /**
     * Cache the given detached view.
     * @private
     * @param {?} view
     * @return {?}
     */
    CdkVirtualForOf.prototype._cacheView = /**
     * Cache the given detached view.
     * @private
     * @param {?} view
     * @return {?}
     */
    function (view) {
        if (this._templateCache.length < this.cdkVirtualForTemplateCacheSize) {
            this._templateCache.push(view);
        }
        else {
            /** @type {?} */
            var index = this._viewContainerRef.indexOf(view);
            // It's very unlikely that the index will ever be -1, but just in case,
            // destroy the view on its own, otherwise destroy it through the
            // container to ensure that all the references are removed.
            if (index === -1) {
                view.destroy();
            }
            else {
                this._viewContainerRef.remove(index);
            }
        }
    };
    /** Inserts a view for a new item, either from the cache or by creating a new one. */
    /**
     * Inserts a view for a new item, either from the cache or by creating a new one.
     * @private
     * @param {?} index
     * @return {?}
     */
    CdkVirtualForOf.prototype._insertViewForNewItem = /**
     * Inserts a view for a new item, either from the cache or by creating a new one.
     * @private
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return this._insertViewFromCache(index) || this._createEmbeddedViewAt(index);
    };
    /** Update the computed properties on the `CdkVirtualForOfContext`. */
    /**
     * Update the computed properties on the `CdkVirtualForOfContext`.
     * @private
     * @param {?} context
     * @return {?}
     */
    CdkVirtualForOf.prototype._updateComputedContextProperties = /**
     * Update the computed properties on the `CdkVirtualForOfContext`.
     * @private
     * @param {?} context
     * @return {?}
     */
    function (context) {
        context.first = context.index === 0;
        context.last = context.index === context.count - 1;
        context.even = context.index % 2 === 0;
        context.odd = !context.even;
    };
    /** Creates a new embedded view and moves it to the given index */
    /**
     * Creates a new embedded view and moves it to the given index
     * @private
     * @param {?} index
     * @return {?}
     */
    CdkVirtualForOf.prototype._createEmbeddedViewAt = /**
     * Creates a new embedded view and moves it to the given index
     * @private
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var view = this._viewContainerRef.createEmbeddedView(this._template, {
            $implicit: (/** @type {?} */ (null)),
            cdkVirtualForOf: this._cdkVirtualForOf,
            index: -1,
            count: -1,
            first: false,
            last: false,
            odd: false,
            even: false
        });
        if (index < this._viewContainerRef.length) {
            this._viewContainerRef.move(view, index);
        }
        return view;
    };
    /** Inserts a recycled view from the cache at the given index. */
    /**
     * Inserts a recycled view from the cache at the given index.
     * @private
     * @param {?} index
     * @return {?}
     */
    CdkVirtualForOf.prototype._insertViewFromCache = /**
     * Inserts a recycled view from the cache at the given index.
     * @private
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var cachedView = this._templateCache.pop();
        if (cachedView) {
            this._viewContainerRef.insert(cachedView, index);
        }
        return cachedView || null;
    };
    /** Detaches the embedded view at the given index. */
    /**
     * Detaches the embedded view at the given index.
     * @private
     * @param {?} index
     * @return {?}
     */
    CdkVirtualForOf.prototype._detachView = /**
     * Detaches the embedded view at the given index.
     * @private
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return (/** @type {?} */ (this._viewContainerRef.detach(index)));
    };
    CdkVirtualForOf.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[cdkVirtualFor][cdkVirtualForOf]',
                },] },
    ];
    /** @nocollapse */
    CdkVirtualForOf.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"] },
        { type: CdkVirtualScrollViewport, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
    ]; };
    CdkVirtualForOf.propDecorators = {
        cdkVirtualForOf: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cdkVirtualForTrackBy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cdkVirtualForTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cdkVirtualForTemplateCacheSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return CdkVirtualForOf;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ScrollingModule = /** @class */ (function () {
    function ScrollingModule() {
    }
    ScrollingModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["BidiModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["PlatformModule"]],
                    exports: [
                        _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["BidiModule"],
                        CdkFixedSizeVirtualScroll,
                        CdkScrollable,
                        CdkVirtualForOf,
                        CdkVirtualScrollViewport,
                    ],
                    declarations: [
                        CdkFixedSizeVirtualScroll,
                        CdkScrollable,
                        CdkVirtualForOf,
                        CdkVirtualScrollViewport,
                    ],
                },] },
    ];
    return ScrollingModule;
}());
/**
 * @deprecated ScrollDispatchModule has been renamed to ScrollingModule.
 * \@breaking-change 8.0.0 delete this alias
 */
var ScrollDispatchModule = /** @class */ (function () {
    function ScrollDispatchModule() {
    }
    ScrollDispatchModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [ScrollingModule],
                    exports: [ScrollingModule],
                },] },
    ];
    return ScrollDispatchModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Time in ms to throttle the resize events by default.
 * @type {?}
 */
var DEFAULT_RESIZE_TIME = 20;
/**
 * Simple utility for getting the bounds of the browser viewport.
 * \@docs-private
 */
var ViewportRuler = /** @class */ (function () {
    function ViewportRuler(_platform, ngZone) {
        var _this = this;
        this._platform = _platform;
        ngZone.runOutsideAngular(function () {
            _this._change = _platform.isBrowser ?
                Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'resize'), Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'orientationchange')) :
                Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
            // Note that we need to do the subscription inside `runOutsideAngular`
            // since subscribing is what causes the event listener to be added.
            _this._invalidateCache = _this.change().subscribe(function () { return _this._updateViewportSize(); });
        });
    }
    /**
     * @return {?}
     */
    ViewportRuler.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._invalidateCache.unsubscribe();
    };
    /** Returns the viewport's width and height. */
    /**
     * Returns the viewport's width and height.
     * @return {?}
     */
    ViewportRuler.prototype.getViewportSize = /**
     * Returns the viewport's width and height.
     * @return {?}
     */
    function () {
        if (!this._viewportSize) {
            this._updateViewportSize();
        }
        /** @type {?} */
        var output = { width: this._viewportSize.width, height: this._viewportSize.height };
        // If we're not on a browser, don't cache the size since it'll be mocked out anyway.
        if (!this._platform.isBrowser) {
            this._viewportSize = (/** @type {?} */ (null));
        }
        return output;
    };
    /** Gets a ClientRect for the viewport's bounds. */
    /**
     * Gets a ClientRect for the viewport's bounds.
     * @return {?}
     */
    ViewportRuler.prototype.getViewportRect = /**
     * Gets a ClientRect for the viewport's bounds.
     * @return {?}
     */
    function () {
        // Use the document element's bounding rect rather than the window scroll properties
        // (e.g. pageYOffset, scrollY) due to in issue in Chrome and IE where window scroll
        // properties and client coordinates (boundingClientRect, clientX/Y, etc.) are in different
        // conceptual viewports. Under most circumstances these viewports are equivalent, but they
        // can disagree when the page is pinch-zoomed (on devices that support touch).
        // See https://bugs.chromium.org/p/chromium/issues/detail?id=489206#c4
        // We use the documentElement instead of the body because, by default (without a css reset)
        // browsers typically give the document body an 8px margin, which is not included in
        // getBoundingClientRect().
        /** @type {?} */
        var scrollPosition = this.getViewportScrollPosition();
        var _a = this.getViewportSize(), width = _a.width, height = _a.height;
        return {
            top: scrollPosition.top,
            left: scrollPosition.left,
            bottom: scrollPosition.top + height,
            right: scrollPosition.left + width,
            height: height,
            width: width,
        };
    };
    /** Gets the (top, left) scroll position of the viewport. */
    /**
     * Gets the (top, left) scroll position of the viewport.
     * @return {?}
     */
    ViewportRuler.prototype.getViewportScrollPosition = /**
     * Gets the (top, left) scroll position of the viewport.
     * @return {?}
     */
    function () {
        // While we can get a reference to the fake document
        // during SSR, it doesn't have getBoundingClientRect.
        if (!this._platform.isBrowser) {
            return { top: 0, left: 0 };
        }
        // The top-left-corner of the viewport is determined by the scroll position of the document
        // body, normally just (scrollLeft, scrollTop). However, Chrome and Firefox disagree about
        // whether `document.body` or `document.documentElement` is the scrolled element, so reading
        // `scrollTop` and `scrollLeft` is inconsistent. However, using the bounding rect of
        // `document.documentElement` works consistently, where the `top` and `left` values will
        // equal negative the scroll position.
        /** @type {?} */
        var documentElement = (/** @type {?} */ (document.documentElement));
        /** @type {?} */
        var documentRect = documentElement.getBoundingClientRect();
        /** @type {?} */
        var top = -documentRect.top || document.body.scrollTop || window.scrollY ||
            documentElement.scrollTop || 0;
        /** @type {?} */
        var left = -documentRect.left || document.body.scrollLeft || window.scrollX ||
            documentElement.scrollLeft || 0;
        return { top: top, left: left };
    };
    /**
     * Returns a stream that emits whenever the size of the viewport changes.
     * @param throttleTime Time in milliseconds to throttle the stream.
     */
    /**
     * Returns a stream that emits whenever the size of the viewport changes.
     * @param {?=} throttleTime Time in milliseconds to throttle the stream.
     * @return {?}
     */
    ViewportRuler.prototype.change = /**
     * Returns a stream that emits whenever the size of the viewport changes.
     * @param {?=} throttleTime Time in milliseconds to throttle the stream.
     * @return {?}
     */
    function (throttleTime) {
        if (throttleTime === void 0) { throttleTime = DEFAULT_RESIZE_TIME; }
        return throttleTime > 0 ? this._change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(throttleTime)) : this._change;
    };
    /** Updates the cached viewport size. */
    /**
     * Updates the cached viewport size.
     * @private
     * @return {?}
     */
    ViewportRuler.prototype._updateViewportSize = /**
     * Updates the cached viewport size.
     * @private
     * @return {?}
     */
    function () {
        this._viewportSize = this._platform.isBrowser ?
            { width: window.innerWidth, height: window.innerHeight } :
            { width: 0, height: 0 };
    };
    ViewportRuler.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    ViewportRuler.ctorParameters = function () { return [
        { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
    ]; };
    /** @nocollapse */ ViewportRuler.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function ViewportRuler_Factory() { return new ViewportRuler(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); }, token: ViewportRuler, providedIn: "root" });
    return ViewportRuler;
}());
/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @param {?} parentRuler
 * @param {?} platform
 * @param {?} ngZone
 * @return {?}
 */
function VIEWPORT_RULER_PROVIDER_FACTORY(parentRuler, platform, ngZone) {
    return parentRuler || new ViewportRuler(platform, ngZone);
}
/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @type {?}
 */
var VIEWPORT_RULER_PROVIDER = {
    // If there is already a ViewportRuler available, use that. Otherwise, provide a new one.
    provide: ViewportRuler,
    deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), ViewportRuler], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]],
    useFactory: VIEWPORT_RULER_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=scrolling.es5.js.map


/***/ }),

/***/ "./node_modules/@ngrx/effects/fesm5/effects.js":
/*!*****************************************************!*\
  !*** ./node_modules/@ngrx/effects/fesm5/effects.js ***!
  \*****************************************************/
/*! exports provided: ɵngrx_modules_effects_effects_c, ɵngrx_modules_effects_effects_a, ɵngrx_modules_effects_effects_b, ɵngrx_modules_effects_effects_f, ɵngrx_modules_effects_effects_e, ɵngrx_modules_effects_effects_d, Effect, getEffectsMetadata, mergeEffects, Actions, ofType, EffectsModule, EffectSources, ROOT_EFFECTS_INIT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_effects_effects_c", function() { return EffectsFeatureModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_effects_effects_a", function() { return createSourceInstances; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_effects_effects_b", function() { return EffectsRootModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_effects_effects_f", function() { return EffectsRunner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_effects_effects_e", function() { return FEATURE_EFFECTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_effects_effects_d", function() { return ROOT_EFFECTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Effect", function() { return Effect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEffectsMetadata", function() { return getEffectsMetadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeEffects", function() { return mergeEffects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Actions", function() { return Actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ofType", function() { return ofType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EffectsModule", function() { return EffectsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EffectSources", function() { return EffectSources; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROOT_EFFECTS_INIT", function() { return ROOT_EFFECTS_INIT; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * @license NgRx 6.1.2
 * (c) 2015-2018 Brandon Roberts, Mike Ryan, Rob Wormald, Victor Savkin
 * License: MIT
 */





var __values = (undefined && undefined.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
var METADATA_KEY = '__@ngrx/effects__';
function getEffectMetadataEntries(sourceProto) {
    return sourceProto.constructor.hasOwnProperty(METADATA_KEY)
        ? sourceProto.constructor[METADATA_KEY]
        : [];
}
function setEffectMetadataEntries(sourceProto, entries) {
    var constructor = sourceProto.constructor;
    var meta = constructor.hasOwnProperty(METADATA_KEY)
        ? constructor[METADATA_KEY]
        : Object.defineProperty(constructor, METADATA_KEY, { value: [] })[METADATA_KEY];
    Array.prototype.push.apply(meta, entries);
}
function Effect(_a) {
    var _b = (_a === void 0 ? {} : _a).dispatch, dispatch = _b === void 0 ? true : _b;
    // Once TS is >= 2.8 replace with <Key extends Extract<keyof T, string>>
    // for propertyName.
    return function (target, propertyName) {
        var metadata = { propertyName: propertyName, dispatch: dispatch };
        setEffectMetadataEntries(target, [metadata]);
    };
}
function getSourceForInstance(instance) {
    return Object.getPrototypeOf(instance);
}
function getSourceMetadata(instance) {
    return Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["compose"])(getEffectMetadataEntries, getSourceForInstance)(instance);
}
function getEffectsMetadata(instance) {
    var metadata = {};
    try {
        for (var _a = __values(getSourceMetadata(instance)), _b = _a.next(); !_b.done; _b = _a.next()) {
            var _c = _b.value, propertyName = _c.propertyName, dispatch = _c.dispatch;
            metadata[propertyName] = { dispatch: dispatch };
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return metadata;
    var e_1, _d;
}

var onRunEffectsKey = 'ngrxOnRunEffects';
function isOnRunEffects(sourceInstance) {
    var source = getSourceForInstance(sourceInstance);
    return (onRunEffectsKey in source && typeof source[onRunEffectsKey] === 'function');
}

var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
function mergeEffects(sourceInstance) {
    var sourceName = getSourceForInstance(sourceInstance).constructor.name;
    var observables = getSourceMetadata(sourceInstance).map(function (_a) {
        var propertyName = _a.propertyName, dispatch = _a.dispatch;
        var observable = typeof sourceInstance[propertyName] === 'function'
            ? sourceInstance[propertyName]()
            : sourceInstance[propertyName];
        if (dispatch === false) {
            return observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["ignoreElements"])());
        }
        var materialized$ = observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["materialize"])());
        return materialized$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (notification) {
            return ({
                effect: sourceInstance[propertyName],
                notification: notification,
                propertyName: propertyName,
                sourceName: sourceName,
                sourceInstance: sourceInstance,
            });
        }));
    });
    return rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"].apply(void 0, __spread(observables));
}
function resolveEffectSource(sourceInstance) {
    var mergedEffects$ = mergeEffects(sourceInstance);
    if (isOnRunEffects(sourceInstance)) {
        return sourceInstance.ngrxOnRunEffects(mergedEffects$);
    }
    return mergedEffects$;
}

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read$1 = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread$1 = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read$1(arguments[i]));
    return ar;
};
var Actions = /** @class */ (function (_super) {
    __extends(Actions, _super);
    function Actions(source) {
        var _this = _super.call(this) || this;
        if (source) {
            _this.source = source;
        }
        return _this;
    }
    Actions.prototype.lift = function (operator) {
        var observable = new Actions();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    /**
     * @deprecated from 6.1.0. Use the pipeable `ofType` operator instead.
     */
    /**
       * @deprecated from 6.1.0. Use the pipeable `ofType` operator instead.
       */
    Actions.prototype.ofType = /**
       * @deprecated from 6.1.0. Use the pipeable `ofType` operator instead.
       */
    function () {
        var allowedTypes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            allowedTypes[_i] = arguments[_i];
        }
        return ofType.apply(void 0, __spread$1(allowedTypes))(this);
    };
    Actions.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"] }
    ];
    /** @nocollapse */
    Actions.ctorParameters = function () { return [
        { type: rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["ScannedActionsSubject"],] },] },
    ]; };
    return Actions;
}(rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]));
function ofType() {
    var allowedTypes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        allowedTypes[_i] = arguments[_i];
    }
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (action) {
        return allowedTypes.some(function (type) { return type === action.type; });
    });
}

function verifyOutput(output, reporter) {
    reportErrorThrown(output, reporter);
    reportInvalidActions(output, reporter);
}
function reportErrorThrown(output, reporter) {
    if (output.notification.kind === 'E') {
        reporter.handleError(output.notification.error);
    }
}
function reportInvalidActions(output, reporter) {
    if (output.notification.kind === 'N') {
        var action = output.notification.value;
        var isInvalidAction = !isAction(action);
        if (isInvalidAction) {
            reporter.handleError(new Error("Effect " + getEffectName(output) + " dispatched an invalid action: " + stringify(action)));
        }
    }
}
function isAction(action) {
    return action && action.type && typeof action.type === 'string';
}
function getEffectName(_a) {
    var propertyName = _a.propertyName, sourceInstance = _a.sourceInstance, sourceName = _a.sourceName;
    var isMethod = typeof sourceInstance[propertyName] === 'function';
    return "\"" + sourceName + "." + propertyName + (isMethod ? '()' : '') + "\"";
}
function stringify(action) {
    try {
        return JSON.stringify(action);
    }
    catch (_a) {
        return action;
    }
}

var __extends$1 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var EffectSources = /** @class */ (function (_super) {
    __extends$1(EffectSources, _super);
    function EffectSources(errorHandler) {
        var _this = _super.call(this) || this;
        _this.errorHandler = errorHandler;
        return _this;
    }
    EffectSources.prototype.addEffects = function (effectSourceInstance) {
        this.next(effectSourceInstance);
    };
    /**
     * @internal
     */
    /**
       * @internal
       */
    EffectSources.prototype.toActions = /**
       * @internal
       */
    function () {
        var _this = this;
        return this.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["groupBy"])(getSourceForInstance), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (source$) {
            return source$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["exhaustMap"])(resolveEffectSource), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (output) {
                verifyOutput(output, _this.errorHandler);
                return output.notification;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (notification) {
                return notification.kind === 'N';
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["dematerialize"])());
        }));
    };
    EffectSources.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"] }
    ];
    /** @nocollapse */
    EffectSources.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ErrorHandler"], },
    ]; };
    return EffectSources;
}(rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]));

var IMMEDIATE_EFFECTS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('ngrx/effects: Immediate Effects');
var ROOT_EFFECTS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('ngrx/effects: Root Effects');
var FEATURE_EFFECTS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('ngrx/effects: Feature Effects');

var EffectsRunner = /** @class */ (function () {
    function EffectsRunner(effectSources, store) {
        this.effectSources = effectSources;
        this.store = store;
        this.effectsSubscription = null;
    }
    EffectsRunner.prototype.start = function () {
        if (!this.effectsSubscription) {
            this.effectsSubscription = this.effectSources
                .toActions()
                .subscribe(this.store);
        }
    };
    EffectsRunner.prototype.ngOnDestroy = function () {
        if (this.effectsSubscription) {
            this.effectsSubscription.unsubscribe();
            this.effectsSubscription = null;
        }
    };
    EffectsRunner.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"] }
    ];
    /** @nocollapse */
    EffectsRunner.ctorParameters = function () { return [
        { type: EffectSources, },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"], },
    ]; };
    return EffectsRunner;
}());

var ROOT_EFFECTS_INIT = '@ngrx/effects/init';
var EffectsRootModule = /** @class */ (function () {
    function EffectsRootModule(sources, runner, store, rootEffects, storeRootModule, storeFeatureModule) {
        this.sources = sources;
        runner.start();
        rootEffects.forEach(function (effectSourceInstance) {
            return sources.addEffects(effectSourceInstance);
        });
        store.dispatch({ type: ROOT_EFFECTS_INIT });
    }
    EffectsRootModule.prototype.addEffects = function (effectSourceInstance) {
        this.sources.addEffects(effectSourceInstance);
    };
    EffectsRootModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{},] }
    ];
    /** @nocollapse */
    EffectsRootModule.ctorParameters = function () { return [
        { type: EffectSources, },
        { type: EffectsRunner, },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"], },
        { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [ROOT_EFFECTS,] },] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["StoreRootModule"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] },] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["StoreFeatureModule"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] },] },
    ]; };
    return EffectsRootModule;
}());

var EffectsFeatureModule = /** @class */ (function () {
    function EffectsFeatureModule(root, effectSourceGroups, storeRootModule, storeFeatureModule) {
        this.root = root;
        effectSourceGroups.forEach(function (group) {
            return group.forEach(function (effectSourceInstance) {
                return root.addEffects(effectSourceInstance);
            });
        });
    }
    EffectsFeatureModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{},] }
    ];
    /** @nocollapse */
    EffectsFeatureModule.ctorParameters = function () { return [
        { type: EffectsRootModule, },
        { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [FEATURE_EFFECTS,] },] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["StoreRootModule"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] },] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["StoreFeatureModule"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] },] },
    ]; };
    return EffectsFeatureModule;
}());

var EffectsModule = /** @class */ (function () {
    function EffectsModule() {
    }
    EffectsModule.forFeature = function (featureEffects) {
        return {
            ngModule: EffectsFeatureModule,
            providers: [
                featureEffects,
                {
                    provide: FEATURE_EFFECTS,
                    multi: true,
                    deps: featureEffects,
                    useFactory: createSourceInstances,
                },
            ],
        };
    };
    EffectsModule.forRoot = function (rootEffects) {
        return {
            ngModule: EffectsRootModule,
            providers: [
                EffectsRunner,
                EffectSources,
                Actions,
                rootEffects,
                {
                    provide: ROOT_EFFECTS,
                    deps: rootEffects,
                    useFactory: createSourceInstances,
                },
            ],
        };
    };
    EffectsModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{},] }
    ];
    return EffectsModule;
}());
function createSourceInstances() {
    var instances = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        instances[_i] = arguments[_i];
    }
    return instances;
}

/**
 * DO NOT EDIT
 *
 * This file is automatically generated at build
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=effects.js.map


/***/ }),

/***/ "./node_modules/@ngrx/store/fesm5/store.js":
/*!*************************************************!*\
  !*** ./node_modules/@ngrx/store/fesm5/store.js ***!
  \*************************************************/
/*! exports provided: ɵngrx_modules_store_store_c, ɵngrx_modules_store_store_d, ɵngrx_modules_store_store_e, ɵngrx_modules_store_store_f, ɵngrx_modules_store_store_g, ɵngrx_modules_store_store_b, Store, select, combineReducers, compose, createReducerFactory, ActionsSubject, INIT, ReducerManager, ReducerObservable, ReducerManagerDispatcher, UPDATE, ScannedActionsSubject, createSelector, createSelectorFactory, createFeatureSelector, defaultMemoize, defaultStateFn, resultMemoize, State, StateObservable, reduceState, INITIAL_STATE, _REDUCER_FACTORY, REDUCER_FACTORY, _INITIAL_REDUCERS, INITIAL_REDUCERS, STORE_FEATURES, _INITIAL_STATE, META_REDUCERS, _STORE_REDUCERS, _FEATURE_REDUCERS, FEATURE_REDUCERS, _FEATURE_REDUCERS_TOKEN, StoreModule, StoreRootModule, StoreFeatureModule, _initialStateFactory, _createStoreReducers, _createFeatureReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_store_c", function() { return ACTIONS_SUBJECT_PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_store_d", function() { return REDUCER_MANAGER_PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_store_e", function() { return SCANNED_ACTIONS_SUBJECT_PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_store_f", function() { return isEqualCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_store_g", function() { return STATE_PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_store_b", function() { return STORE_PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select", function() { return select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return combineReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReducerFactory", function() { return createReducerFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsSubject", function() { return ActionsSubject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INIT", function() { return INIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReducerManager", function() { return ReducerManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReducerObservable", function() { return ReducerObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReducerManagerDispatcher", function() { return ReducerManagerDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE", function() { return UPDATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScannedActionsSubject", function() { return ScannedActionsSubject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSelector", function() { return createSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSelectorFactory", function() { return createSelectorFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFeatureSelector", function() { return createFeatureSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultMemoize", function() { return defaultMemoize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultStateFn", function() { return defaultStateFn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resultMemoize", function() { return resultMemoize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "State", function() { return State; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateObservable", function() { return StateObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reduceState", function() { return reduceState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_STATE", function() { return INITIAL_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_REDUCER_FACTORY", function() { return _REDUCER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REDUCER_FACTORY", function() { return REDUCER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_INITIAL_REDUCERS", function() { return _INITIAL_REDUCERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_REDUCERS", function() { return INITIAL_REDUCERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORE_FEATURES", function() { return STORE_FEATURES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_INITIAL_STATE", function() { return _INITIAL_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "META_REDUCERS", function() { return META_REDUCERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_STORE_REDUCERS", function() { return _STORE_REDUCERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_FEATURE_REDUCERS", function() { return _FEATURE_REDUCERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEATURE_REDUCERS", function() { return FEATURE_REDUCERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_FEATURE_REDUCERS_TOKEN", function() { return _FEATURE_REDUCERS_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreModule", function() { return StoreModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreRootModule", function() { return StoreRootModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreFeatureModule", function() { return StoreFeatureModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_initialStateFactory", function() { return _initialStateFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_createStoreReducers", function() { return _createStoreReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_createFeatureReducers", function() { return _createFeatureReducers; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/**
 * @license NgRx 6.1.2
 * (c) 2015-2018 Brandon Roberts, Mike Ryan, Rob Wormald, Victor Savkin
 * License: MIT
 */




var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var INIT = '@ngrx/store/init';
var ActionsSubject = /** @class */ (function (_super) {
    __extends(ActionsSubject, _super);
    function ActionsSubject() {
        return _super.call(this, { type: INIT }) || this;
    }
    ActionsSubject.prototype.next = function (action) {
        if (typeof action === 'undefined') {
            throw new TypeError("Actions must be objects");
        }
        else if (typeof action.type === 'undefined') {
            throw new TypeError("Actions must have a type property");
        }
        _super.prototype.next.call(this, action);
    };
    ActionsSubject.prototype.complete = function () {
        /* noop */
    };
    ActionsSubject.prototype.ngOnDestroy = function () {
        _super.prototype.complete.call(this);
    };
    ActionsSubject.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    ActionsSubject.ctorParameters = function () { return []; };
    return ActionsSubject;
}(rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]));
var ACTIONS_SUBJECT_PROVIDERS = [ActionsSubject];

var _INITIAL_STATE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('@ngrx/store Internal Initial State');
var INITIAL_STATE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('@ngrx/store Initial State');
var REDUCER_FACTORY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('@ngrx/store Reducer Factory');
var _REDUCER_FACTORY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('@ngrx/store Reducer Factory Provider');
var INITIAL_REDUCERS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('@ngrx/store Initial Reducers');
var _INITIAL_REDUCERS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('@ngrx/store Internal Initial Reducers');
var META_REDUCERS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('@ngrx/store Meta Reducers');
var STORE_FEATURES = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('@ngrx/store Store Features');
var _STORE_REDUCERS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('@ngrx/store Internal Store Reducers');
var _FEATURE_REDUCERS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('@ngrx/store Internal Feature Reducers');
var _FEATURE_REDUCERS_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('@ngrx/store Internal Feature Reducers Token');
var FEATURE_REDUCERS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('@ngrx/store Feature Reducers');

var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
function combineReducers(reducers, initialState) {
    if (initialState === void 0) { initialState = {}; }
    var reducerKeys = Object.keys(reducers);
    var finalReducers = {};
    for (var i = 0; i < reducerKeys.length; i++) {
        var key = reducerKeys[i];
        if (typeof reducers[key] === 'function') {
            finalReducers[key] = reducers[key];
        }
    }
    var finalReducerKeys = Object.keys(finalReducers);
    return function combination(state, action) {
        state = state === undefined ? initialState : state;
        var hasChanged = false;
        var nextState = {};
        for (var i = 0; i < finalReducerKeys.length; i++) {
            var key = finalReducerKeys[i];
            var reducer = finalReducers[key];
            var previousStateForKey = state[key];
            var nextStateForKey = reducer(previousStateForKey, action);
            nextState[key] = nextStateForKey;
            hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
        }
        return hasChanged ? nextState : state;
    };
}
function omit(object, keyToRemove) {
    return Object.keys(object)
        .filter(function (key) { return key !== keyToRemove; })
        .reduce(function (result, key) {
        return Object.assign(result, (_a = {}, _a[key] = object[key], _a));
        var _a;
    }, {});
}
function compose() {
    var functions = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        functions[_i] = arguments[_i];
    }
    return function (arg) {
        if (functions.length === 0) {
            return arg;
        }
        var last = functions[functions.length - 1];
        var rest = functions.slice(0, -1);
        return rest.reduceRight(function (composed, fn) { return fn(composed); }, last(arg));
    };
}
function createReducerFactory(reducerFactory, metaReducers) {
    if (Array.isArray(metaReducers) && metaReducers.length > 0) {
        return compose.apply(null, __spread(metaReducers, [reducerFactory]));
    }
    return reducerFactory;
}
function createFeatureReducerFactory(metaReducers) {
    var reducerFactory = Array.isArray(metaReducers) && metaReducers.length > 0
        ? compose.apply(void 0, __spread(metaReducers)) : function (r) { return r; };
    return function (reducer, initialState) {
        reducer = reducerFactory(reducer);
        return function (state, action) {
            state = state === undefined ? initialState : state;
            return reducer(state, action);
        };
    };
}

var __extends$1 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var ReducerObservable = /** @class */ (function (_super) {
    __extends$1(ReducerObservable, _super);
    function ReducerObservable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ReducerObservable;
}(rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]));
var ReducerManagerDispatcher = /** @class */ (function (_super) {
    __extends$1(ReducerManagerDispatcher, _super);
    function ReducerManagerDispatcher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ReducerManagerDispatcher;
}(ActionsSubject));
var UPDATE = '@ngrx/store/update-reducers';
var ReducerManager = /** @class */ (function (_super) {
    __extends$1(ReducerManager, _super);
    function ReducerManager(dispatcher, initialState, reducers, reducerFactory) {
        var _this = _super.call(this, reducerFactory(reducers, initialState)) || this;
        _this.dispatcher = dispatcher;
        _this.initialState = initialState;
        _this.reducers = reducers;
        _this.reducerFactory = reducerFactory;
        return _this;
    }
    ReducerManager.prototype.addFeature = function (feature) {
        this.addFeatures([feature]);
    };
    ReducerManager.prototype.addFeatures = function (features) {
        var reducers = features.reduce(function (reducerDict, _a) {
            var reducers = _a.reducers, reducerFactory = _a.reducerFactory, metaReducers = _a.metaReducers, initialState = _a.initialState, key = _a.key;
            var reducer = typeof reducers === 'function'
                ? createFeatureReducerFactory(metaReducers)(reducers, initialState)
                : createReducerFactory(reducerFactory, metaReducers)(reducers, initialState);
            reducerDict[key] = reducer;
            return reducerDict;
        }, {});
        this.addReducers(reducers);
    };
    ReducerManager.prototype.removeFeature = function (feature) {
        this.removeFeatures([feature]);
    };
    ReducerManager.prototype.removeFeatures = function (features) {
        this.removeReducers(features.map(function (p) { return p.key; }));
    };
    ReducerManager.prototype.addReducer = function (key, reducer) {
        this.addReducers((_a = {}, _a[key] = reducer, _a));
        var _a;
    };
    ReducerManager.prototype.addReducers = function (reducers) {
        this.reducers = __assign({}, this.reducers, reducers);
        this.updateReducers(Object.keys(reducers));
    };
    ReducerManager.prototype.removeReducer = function (featureKey) {
        this.removeReducers([featureKey]);
    };
    ReducerManager.prototype.removeReducers = function (featureKeys) {
        var _this = this;
        featureKeys.forEach(function (key) {
            _this.reducers = omit(_this.reducers, key) /*TODO(#823)*/;
        });
        this.updateReducers(featureKeys);
    };
    ReducerManager.prototype.updateReducers = function (featureKeys) {
        var _this = this;
        this.next(this.reducerFactory(this.reducers, this.initialState));
        featureKeys.forEach(function (feature) {
            _this.dispatcher.next({
                type: UPDATE,
                feature: feature,
            });
        });
    };
    ReducerManager.prototype.ngOnDestroy = function () {
        this.complete();
    };
    ReducerManager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    ReducerManager.ctorParameters = function () { return [
        { type: ReducerManagerDispatcher, },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [INITIAL_STATE,] },] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [INITIAL_REDUCERS,] },] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [REDUCER_FACTORY,] },] },
    ]; };
    return ReducerManager;
}(rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]));
var REDUCER_MANAGER_PROVIDERS = [
    ReducerManager,
    { provide: ReducerObservable, useExisting: ReducerManager },
    { provide: ReducerManagerDispatcher, useExisting: ActionsSubject },
];

var __extends$2 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ScannedActionsSubject = /** @class */ (function (_super) {
    __extends$2(ScannedActionsSubject, _super);
    function ScannedActionsSubject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ScannedActionsSubject.prototype.ngOnDestroy = function () {
        this.complete();
    };
    ScannedActionsSubject.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    return ScannedActionsSubject;
}(rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]));
var SCANNED_ACTIONS_SUBJECT_PROVIDERS = [
    ScannedActionsSubject,
];

var __extends$3 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read$1 = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var StateObservable = /** @class */ (function (_super) {
    __extends$3(StateObservable, _super);
    function StateObservable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return StateObservable;
}(rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]));
var State = /** @class */ (function (_super) {
    __extends$3(State, _super);
    function State(actions$, reducer$, scannedActions, initialState) {
        var _this = _super.call(this, initialState) || this;
        var actionsOnQueue$ = actions$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["observeOn"])(rxjs__WEBPACK_IMPORTED_MODULE_1__["queueScheduler"]));
        var withLatestReducer$ = actionsOnQueue$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["withLatestFrom"])(reducer$));
        var seed = { state: initialState };
        var stateAndAction$ = withLatestReducer$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["scan"])(reduceState, seed));
        _this.stateSubscription = stateAndAction$.subscribe(function (_a) {
            var state = _a.state, action = _a.action;
            _this.next(state);
            scannedActions.next(action);
        });
        return _this;
    }
    State.prototype.ngOnDestroy = function () {
        this.stateSubscription.unsubscribe();
        this.complete();
    };
    State.INIT = INIT;
    State.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    State.ctorParameters = function () { return [
        { type: ActionsSubject, },
        { type: ReducerObservable, },
        { type: ScannedActionsSubject, },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [INITIAL_STATE,] },] },
    ]; };
    return State;
}(rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]));
function reduceState(stateActionPair, _a) {
    if (stateActionPair === void 0) { stateActionPair = { state: undefined }; }
    var _b = __read$1(_a, 2), action = _b[0], reducer = _b[1];
    var state = stateActionPair.state;
    return { state: reducer(state, action), action: action };
}
var STATE_PROVIDERS = [
    State,
    { provide: StateObservable, useExisting: State },
];

var __extends$4 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read$2 = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread$1 = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read$2(arguments[i]));
    return ar;
};
var Store = /** @class */ (function (_super) {
    __extends$4(Store, _super);
    function Store(state$, actionsObserver, reducerManager) {
        var _this = _super.call(this) || this;
        _this.actionsObserver = actionsObserver;
        _this.reducerManager = reducerManager;
        _this.source = state$;
        return _this;
    }
    Store.prototype.select = function (pathOrMapFn) {
        var paths = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            paths[_i - 1] = arguments[_i];
        }
        return select.call.apply(select, __spread$1([null, pathOrMapFn], paths))(this);
    };
    Store.prototype.lift = function (operator) {
        var store = new Store(this, this.actionsObserver, this.reducerManager);
        store.operator = operator;
        return store;
    };
    Store.prototype.dispatch = function (action) {
        this.actionsObserver.next(action);
    };
    Store.prototype.next = function (action) {
        this.actionsObserver.next(action);
    };
    Store.prototype.error = function (err) {
        this.actionsObserver.error(err);
    };
    Store.prototype.complete = function () {
        this.actionsObserver.complete();
    };
    Store.prototype.addReducer = function (key, reducer) {
        this.reducerManager.addReducer(key, reducer);
    };
    // Once TS is >= 2.8 replace with <Key extends Extract<keyof T, string>>
    // Once TS is >= 2.8 replace with <Key extends Extract<keyof T, string>>
    Store.prototype.removeReducer = 
    // Once TS is >= 2.8 replace with <Key extends Extract<keyof T, string>>
    function (key) {
        // TS2.9: keyof T is string|number|symbol, explicitly cast to string to fix.
        this.reducerManager.removeReducer(key);
    };
    Store.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    Store.ctorParameters = function () { return [
        { type: StateObservable, },
        { type: ActionsSubject, },
        { type: ReducerManager, },
    ]; };
    return Store;
}(rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]));
var STORE_PROVIDERS = [Store];
function select(pathOrMapFn, propsOrPath) {
    var paths = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        paths[_i - 2] = arguments[_i];
    }
    return function selectOperator(source$) {
        var mapped$;
        if (typeof pathOrMapFn === 'string') {
            var pathSlices = __spread$1([propsOrPath], paths).filter(Boolean);
            mapped$ = source$.pipe(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pluck"].apply(void 0, __spread$1([pathOrMapFn], pathSlices)));
        }
        else if (typeof pathOrMapFn === 'function') {
            mapped$ = source$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (source) { return pathOrMapFn(source, propsOrPath); }));
        }
        else {
            throw new TypeError("Unexpected type '" + typeof pathOrMapFn + "' in select operator," +
                " expected 'string' or 'function'");
        }
        return mapped$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])());
    };
}

var __read$3 = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread$2 = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read$3(arguments[i]));
    return ar;
};
function isEqualCheck(a, b) {
    return a === b;
}
function isArgumentsChanged(args, lastArguments, comparator) {
    for (var i = 0; i < args.length; i++) {
        if (!comparator(args[i], lastArguments[i])) {
            return true;
        }
    }
    return false;
}
function resultMemoize(projectionFn, isResultEqual) {
    return defaultMemoize(projectionFn, isEqualCheck, isResultEqual);
}
function defaultMemoize(projectionFn, isArgumentsEqual, isResultEqual) {
    if (isArgumentsEqual === void 0) { isArgumentsEqual = isEqualCheck; }
    if (isResultEqual === void 0) { isResultEqual = isEqualCheck; }
    var lastArguments = null;
    // tslint:disable-next-line:no-any anything could be the result.
    var lastResult = null;
    function reset() {
        lastArguments = null;
        lastResult = null;
    }
    // tslint:disable-next-line:no-any anything could be the result.
    function memoized() {
        if (!lastArguments) {
            lastResult = projectionFn.apply(null, arguments);
            lastArguments = arguments;
            return lastResult;
        }
        if (!isArgumentsChanged(arguments, lastArguments, isArgumentsEqual)) {
            return lastResult;
        }
        var newResult = projectionFn.apply(null, arguments);
        if (isResultEqual(lastResult, newResult)) {
            return lastResult;
        }
        lastResult = newResult;
        lastArguments = arguments;
        return newResult;
    }
    return { memoized: memoized, reset: reset };
}
function createSelector() {
    var input = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        input[_i] = arguments[_i];
    }
    return createSelectorFactory(defaultMemoize).apply(void 0, __spread$2(input));
}
function defaultStateFn(state, selectors, props, memoizedProjector) {
    if (props === undefined) {
        var args_1 = selectors.map(function (fn) { return fn(state); });
        return memoizedProjector.memoized.apply(null, args_1);
    }
    var args = selectors.map(function (fn) {
        return fn(state, props);
    });
    return memoizedProjector.memoized.apply(null, __spread$2(args, [props]));
}
function createSelectorFactory(memoize, options) {
    if (options === void 0) { options = {
        stateFn: defaultStateFn,
    }; }
    return function () {
        var input = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            input[_i] = arguments[_i];
        }
        var args = input;
        if (Array.isArray(args[0])) {
            var _a = __read$3(args), head = _a[0], tail = _a.slice(1);
            args = __spread$2(head, tail);
        }
        var selectors = args.slice(0, args.length - 1);
        var projector = args[args.length - 1];
        var memoizedSelectors = selectors.filter(function (selector) {
            return selector.release && typeof selector.release === 'function';
        });
        var memoizedProjector = memoize(function () {
            var selectors = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                selectors[_i] = arguments[_i];
            }
            return projector.apply(null, selectors);
        });
        var memoizedState = defaultMemoize(function (state, props) {
            // createSelector works directly on state
            // e.g. createSelector((state, props) => ...)
            if (selectors.length === 0) {
                return projector.apply(null, [state, props]);
            }
            return options.stateFn.apply(null, [
                state,
                selectors,
                props,
                memoizedProjector,
            ]);
        });
        function release() {
            memoizedState.reset();
            memoizedProjector.reset();
            memoizedSelectors.forEach(function (selector) { return selector.release(); });
        }
        return Object.assign(memoizedState.memoized, {
            release: release,
            projector: memoizedProjector.memoized,
        });
    };
}
function createFeatureSelector(featureName) {
    return createSelector(function (state) { return state[featureName]; }, function (featureState) { return featureState; });
}

var __assign$1 = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var StoreRootModule = /** @class */ (function () {
    function StoreRootModule(actions$, reducer$, scannedActions$, store) {
    }
    StoreRootModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{},] }
    ];
    /** @nocollapse */
    StoreRootModule.ctorParameters = function () { return [
        { type: ActionsSubject, },
        { type: ReducerObservable, },
        { type: ScannedActionsSubject, },
        { type: Store, },
    ]; };
    return StoreRootModule;
}());
var StoreFeatureModule = /** @class */ (function () {
    function StoreFeatureModule(features, featureReducers, reducerManager, root) {
        this.features = features;
        this.featureReducers = featureReducers;
        this.reducerManager = reducerManager;
        var feats = features.map(function (feature, index) {
            var featureReducerCollection = featureReducers.shift();
            var reducers = featureReducerCollection[index];
            return __assign$1({}, feature, { reducers: reducers, initialState: _initialStateFactory(feature.initialState) });
        });
        reducerManager.addFeatures(feats);
    }
    StoreFeatureModule.prototype.ngOnDestroy = function () {
        this.reducerManager.removeFeatures(this.features);
    };
    StoreFeatureModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{},] }
    ];
    /** @nocollapse */
    StoreFeatureModule.ctorParameters = function () { return [
        { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [STORE_FEATURES,] },] },
        { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [FEATURE_REDUCERS,] },] },
        { type: ReducerManager, },
        { type: StoreRootModule, },
    ]; };
    return StoreFeatureModule;
}());
var StoreModule = /** @class */ (function () {
    function StoreModule() {
    }
    StoreModule.forRoot = function (reducers, config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: StoreRootModule,
            providers: [
                { provide: _INITIAL_STATE, useValue: config.initialState },
                {
                    provide: INITIAL_STATE,
                    useFactory: _initialStateFactory,
                    deps: [_INITIAL_STATE],
                },
                { provide: _INITIAL_REDUCERS, useValue: reducers },
                {
                    provide: _STORE_REDUCERS,
                    useExisting: reducers instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"] ? reducers : _INITIAL_REDUCERS,
                },
                {
                    provide: INITIAL_REDUCERS,
                    deps: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _INITIAL_REDUCERS, [new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"](_STORE_REDUCERS)]],
                    useFactory: _createStoreReducers,
                },
                {
                    provide: META_REDUCERS,
                    useValue: config.metaReducers ? config.metaReducers : [],
                },
                {
                    provide: _REDUCER_FACTORY,
                    useValue: config.reducerFactory
                        ? config.reducerFactory
                        : combineReducers,
                },
                {
                    provide: REDUCER_FACTORY,
                    deps: [_REDUCER_FACTORY, META_REDUCERS],
                    useFactory: createReducerFactory,
                },
                ACTIONS_SUBJECT_PROVIDERS,
                REDUCER_MANAGER_PROVIDERS,
                SCANNED_ACTIONS_SUBJECT_PROVIDERS,
                STATE_PROVIDERS,
                STORE_PROVIDERS,
            ],
        };
    };
    StoreModule.forFeature = function (featureName, reducers, config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: StoreFeatureModule,
            providers: [
                {
                    provide: STORE_FEATURES,
                    multi: true,
                    useValue: {
                        key: featureName,
                        reducerFactory: config.reducerFactory
                            ? config.reducerFactory
                            : combineReducers,
                        metaReducers: config.metaReducers ? config.metaReducers : [],
                        initialState: config.initialState,
                    },
                },
                { provide: _FEATURE_REDUCERS, multi: true, useValue: reducers },
                {
                    provide: _FEATURE_REDUCERS_TOKEN,
                    multi: true,
                    useExisting: reducers instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"] ? reducers : _FEATURE_REDUCERS,
                },
                {
                    provide: FEATURE_REDUCERS,
                    multi: true,
                    deps: [
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
                        _FEATURE_REDUCERS,
                        [new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"](_FEATURE_REDUCERS_TOKEN)],
                    ],
                    useFactory: _createFeatureReducers,
                },
            ],
        };
    };
    StoreModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{},] }
    ];
    return StoreModule;
}());
function _createStoreReducers(injector, reducers, tokenReducers) {
    return reducers instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"] ? injector.get(reducers) : reducers;
}
function _createFeatureReducers(injector, reducerCollection, tokenReducerCollection) {
    var reducers = reducerCollection.map(function (reducer, index) {
        return reducer instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"] ? injector.get(reducer) : reducer;
    });
    return reducers;
}
function _initialStateFactory(initialState) {
    if (typeof initialState === 'function') {
        return initialState();
    }
    return initialState;
}

/**
 * DO NOT EDIT
 *
 * This file is automatically generated at build
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=store.js.map


/***/ }),

/***/ "./node_modules/deep-freeze-strict/index.js":
/*!**************************************************!*\
  !*** ./node_modules/deep-freeze-strict/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function deepFreeze (o) {
  Object.freeze(o);

  var oIsFunction = typeof o === "function";
  var hasOwnProp = Object.prototype.hasOwnProperty;

  Object.getOwnPropertyNames(o).forEach(function (prop) {
    if (hasOwnProp.call(o, prop)
    && (oIsFunction ? prop !== 'caller' && prop !== 'callee' && prop !== 'arguments' : true )
    && o[prop] !== null
    && (typeof o[prop] === "object" || typeof o[prop] === "function")
    && !Object.isFrozen(o[prop])) {
      deepFreeze(o[prop]);
    }
  });
  
  return o;
};


/***/ }),

/***/ "./node_modules/ngrx-store-freeze/index.js":
/*!*************************************************!*\
  !*** ./node_modules/ngrx-store-freeze/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./src/index */ "./node_modules/ngrx-store-freeze/src/index.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ngrx-store-freeze/src/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/ngrx-store-freeze/src/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var deepFreeze = __webpack_require__(/*! deep-freeze-strict */ "./node_modules/deep-freeze-strict/index.js");
function storeFreeze(reducer) {
    return function freeze(state, action) {
        state = state || {};
        deepFreeze(state);
        // guard against trying to freeze null or undefined types
        if (action.payload) {
            deepFreeze(action.payload);
        }
        var nextState = reducer(state, action);
        deepFreeze(nextState);
        return nextState;
    };
}
exports.storeFreeze = storeFreeze;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ngx-monaco-editor/base-editor.js":
/*!*******************************************************!*\
  !*** ./node_modules/ngx-monaco-editor/base-editor.js ***!
  \*******************************************************/
/*! exports provided: BaseEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseEditor", function() { return BaseEditor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var loadedMonaco = false;
var loadPromise;
var BaseEditor = /** @class */ (function () {
    function BaseEditor(config) {
        this.config = config;
        this.onInit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(BaseEditor.prototype, "options", {
        get: function () {
            return this._options;
        },
        set: function (options) {
            this._options = Object.assign({}, this.config.defaultOptions, options);
            if (this._editor) {
                this._editor.dispose();
                this.initMonaco(options);
            }
        },
        enumerable: true,
        configurable: true
    });
    BaseEditor.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (loadedMonaco) {
            // Wait until monaco editor is available
            loadPromise.then(function () {
                _this.initMonaco(_this.options);
            });
        }
        else {
            loadedMonaco = true;
            loadPromise = new Promise(function (resolve) {
                var baseUrl = _this.config.baseUrl || '/assets';
                if (typeof (window.monaco) === 'object') {
                    resolve();
                    return;
                }
                var onGotAmdLoader = function () {
                    // Load monaco
                    window.require.config({ paths: { 'vs': baseUrl + "/monaco/vs" } });
                    window.require(['vs/editor/editor.main'], function () {
                        if (typeof _this.config.onMonacoLoad === 'function') {
                            _this.config.onMonacoLoad();
                        }
                        _this.initMonaco(_this.options);
                        resolve();
                    });
                };
                // Load AMD loader if necessary
                if (!window.require) {
                    var loaderScript = document.createElement('script');
                    loaderScript.type = 'text/javascript';
                    loaderScript.src = baseUrl + "/monaco/vs/loader.js";
                    loaderScript.addEventListener('load', onGotAmdLoader);
                    document.body.appendChild(loaderScript);
                }
                else {
                    onGotAmdLoader();
                }
            });
        }
    };
    BaseEditor.prototype.ngOnDestroy = function () {
        if (this._windowResizeSubscription) {
            this._windowResizeSubscription.unsubscribe();
        }
        if (this._editor) {
            this._editor.dispose();
            this._editor = undefined;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('editorContainer'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BaseEditor.prototype, "_editorContainer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BaseEditor.prototype, "onInit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('options'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], BaseEditor.prototype, "options", null);
    return BaseEditor;
}());



/***/ }),

/***/ "./node_modules/ngx-monaco-editor/config.js":
/*!**************************************************!*\
  !*** ./node_modules/ngx-monaco-editor/config.js ***!
  \**************************************************/
/*! exports provided: NGX_MONACO_EDITOR_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NGX_MONACO_EDITOR_CONFIG", function() { return NGX_MONACO_EDITOR_CONFIG; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var NGX_MONACO_EDITOR_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NGX_MONACO_EDITOR_CONFIG');


/***/ }),

/***/ "./node_modules/ngx-monaco-editor/diff-editor.component.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ngx-monaco-editor/diff-editor.component.js ***!
  \*****************************************************************/
/*! exports provided: DiffEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiffEditorComponent", function() { return DiffEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-editor */ "./node_modules/ngx-monaco-editor/base-editor.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./node_modules/ngx-monaco-editor/config.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var DiffEditorComponent = /** @class */ (function (_super) {
    __extends(DiffEditorComponent, _super);
    function DiffEditorComponent(editorConfig) {
        var _this = _super.call(this, editorConfig) || this;
        _this.editorConfig = editorConfig;
        return _this;
    }
    Object.defineProperty(DiffEditorComponent.prototype, "originalModel", {
        set: function (model) {
            this._originalModel = model;
            if (this._editor) {
                this._editor.dispose();
                this.initMonaco(this.options);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DiffEditorComponent.prototype, "modifiedModel", {
        set: function (model) {
            this._modifiedModel = model;
            if (this._editor) {
                this._editor.dispose();
                this.initMonaco(this.options);
            }
        },
        enumerable: true,
        configurable: true
    });
    DiffEditorComponent.prototype.initMonaco = function (options) {
        var _this = this;
        if (!this._originalModel || !this._modifiedModel) {
            throw new Error('originalModel or modifiedModel not found for ngx-monaco-diff-editor');
        }
        this._originalModel.language = this._originalModel.language || options.language;
        this._modifiedModel.language = this._modifiedModel.language || options.language;
        var originalModel = monaco.editor.createModel(this._originalModel.code, this._originalModel.language);
        var modifiedModel = monaco.editor.createModel(this._modifiedModel.code, this._modifiedModel.language);
        this._editorContainer.nativeElement.innerHTML = '';
        this._editor = monaco.editor.createDiffEditor(this._editorContainer.nativeElement, options);
        this._editor.setModel({
            original: originalModel,
            modified: modifiedModel
        });
        // refresh layout on resize event.
        if (this._windowResizeSubscription) {
            this._windowResizeSubscription.unsubscribe();
        }
        this._windowResizeSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(window, 'resize').subscribe(function () { return _this._editor.layout(); });
        this.onInit.emit(this._editor);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('originalModel'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DiffEditorComponent.prototype, "originalModel", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('modifiedModel'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DiffEditorComponent.prototype, "modifiedModel", null);
    DiffEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-monaco-diff-editor',
            template: '<div class="editor-container" #editorContainer></div>',
            styles: ["\n    :host {\n      display: block;\n      height: 200px;\n    }\n\n    .editor-container {\n      width: 100%;\n      height: 98%;\n    }\n  "]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_config__WEBPACK_IMPORTED_MODULE_2__["NGX_MONACO_EDITOR_CONFIG"])),
        __metadata("design:paramtypes", [Object])
    ], DiffEditorComponent);
    return DiffEditorComponent;
}(_base_editor__WEBPACK_IMPORTED_MODULE_1__["BaseEditor"]));



/***/ }),

/***/ "./node_modules/ngx-monaco-editor/editor.component.js":
/*!************************************************************!*\
  !*** ./node_modules/ngx-monaco-editor/editor.component.js ***!
  \************************************************************/
/*! exports provided: EditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorComponent", function() { return EditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _base_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base-editor */ "./node_modules/ngx-monaco-editor/base-editor.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./node_modules/ngx-monaco-editor/config.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var EditorComponent = /** @class */ (function (_super) {
    __extends(EditorComponent, _super);
    function EditorComponent(zone, editorConfig) {
        var _this = _super.call(this, editorConfig) || this;
        _this.zone = zone;
        _this.editorConfig = editorConfig;
        _this._value = '';
        _this.propagateChange = function (_) { };
        _this.onTouched = function () { };
        return _this;
    }
    EditorComponent_1 = EditorComponent;
    Object.defineProperty(EditorComponent.prototype, "model", {
        set: function (model) {
            this.options.model = model;
            if (this._editor) {
                this._editor.dispose();
                this.initMonaco(this.options);
            }
        },
        enumerable: true,
        configurable: true
    });
    EditorComponent.prototype.writeValue = function (value) {
        var _this = this;
        this._value = value || '';
        // Fix for value change while dispose in process.
        setTimeout(function () {
            if (_this._editor && !_this.options.model) {
                _this._editor.setValue(_this._value);
            }
        });
    };
    EditorComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    EditorComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    EditorComponent.prototype.initMonaco = function (options) {
        var _this = this;
        var hasModel = !!options.model;
        if (hasModel) {
            options.model = monaco.editor.createModel(options.model.value, options.model.language, options.model.uri);
        }
        this._editor = monaco.editor.create(this._editorContainer.nativeElement, options);
        if (!hasModel) {
            this._editor.setValue(this._value);
        }
        this._editor.onDidChangeModelContent(function (e) {
            var value = _this._editor.getValue();
            _this.propagateChange(value);
            // value is not propagated to parent when executing outside zone.
            _this.zone.run(function () { return _this._value = value; });
        });
        this._editor.onDidBlurEditor(function (e) {
            _this.onTouched();
        });
        // refresh layout on resize event.
        if (this._windowResizeSubscription) {
            this._windowResizeSubscription.unsubscribe();
        }
        this._windowResizeSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(window, 'resize').subscribe(function () { return _this._editor.layout(); });
        this.onInit.emit(this._editor);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('model'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], EditorComponent.prototype, "model", null);
    EditorComponent = EditorComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-monaco-editor',
            template: '<div class="editor-container" #editorContainer></div>',
            styles: ["\n    :host {\n      display: block;\n      height: 200px;\n    }\n\n    .editor-container {\n      width: 100%;\n      height: 98%;\n    }\n  "],
            providers: [{
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return EditorComponent_1; }),
                    multi: true
                }]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_config__WEBPACK_IMPORTED_MODULE_3__["NGX_MONACO_EDITOR_CONFIG"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], Object])
    ], EditorComponent);
    return EditorComponent;
    var EditorComponent_1;
}(_base_editor__WEBPACK_IMPORTED_MODULE_2__["BaseEditor"]));



/***/ }),

/***/ "./node_modules/ngx-monaco-editor/editor.module.js":
/*!*********************************************************!*\
  !*** ./node_modules/ngx-monaco-editor/editor.module.js ***!
  \*********************************************************/
/*! exports provided: MonacoEditorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonacoEditorModule", function() { return MonacoEditorModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./node_modules/ngx-monaco-editor/config.js");
/* harmony import */ var _diff_editor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./diff-editor.component */ "./node_modules/ngx-monaco-editor/diff-editor.component.js");
/* harmony import */ var _editor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.component */ "./node_modules/ngx-monaco-editor/editor.component.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MonacoEditorModule = /** @class */ (function () {
    function MonacoEditorModule() {
    }
    MonacoEditorModule_1 = MonacoEditorModule;
    MonacoEditorModule.forRoot = function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: MonacoEditorModule_1,
            providers: [
                { provide: _config__WEBPACK_IMPORTED_MODULE_2__["NGX_MONACO_EDITOR_CONFIG"], useValue: config }
            ]
        };
    };
    MonacoEditorModule = MonacoEditorModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
            ],
            declarations: [
                _editor_component__WEBPACK_IMPORTED_MODULE_4__["EditorComponent"],
                _diff_editor_component__WEBPACK_IMPORTED_MODULE_3__["DiffEditorComponent"]
            ],
            exports: [
                _editor_component__WEBPACK_IMPORTED_MODULE_4__["EditorComponent"],
                _diff_editor_component__WEBPACK_IMPORTED_MODULE_3__["DiffEditorComponent"]
            ]
        })
    ], MonacoEditorModule);
    return MonacoEditorModule;
    var MonacoEditorModule_1;
}());



/***/ }),

/***/ "./node_modules/ngx-monaco-editor/index.js":
/*!*************************************************!*\
  !*** ./node_modules/ngx-monaco-editor/index.js ***!
  \*************************************************/
/*! exports provided: NGX_MONACO_EDITOR_CONFIG, MonacoEditorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.module */ "./node_modules/ngx-monaco-editor/editor.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MonacoEditorModule", function() { return _editor_module__WEBPACK_IMPORTED_MODULE_0__["MonacoEditorModule"]; });

/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./node_modules/ngx-monaco-editor/config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NGX_MONACO_EDITOR_CONFIG", function() { return _config__WEBPACK_IMPORTED_MODULE_1__["NGX_MONACO_EDITOR_CONFIG"]; });





/***/ }),

/***/ "./src/app/monitoring/chart-configurator/chart-configurator.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/monitoring/chart-configurator/chart-configurator.module.ts ***!
  \****************************************************************************/
/*! exports provided: ChartConfiguratorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartConfiguratorModule", function() { return ChartConfiguratorModule; });
var ChartConfiguratorModule = /** @class */ (function () {
    function ChartConfiguratorModule() {
    }
    return ChartConfiguratorModule;
}());



/***/ }),

/***/ "./src/app/monitoring/chart-configurator/services/aggregation.service.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/monitoring/chart-configurator/services/aggregation.service.ts ***!
  \*******************************************************************************/
/*! exports provided: AggregationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AggregationService", function() { return AggregationService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_services_endpoint_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/endpoint.service */ "./src/app/monitoring/shared/services/endpoint.service.ts");
/* harmony import */ var _shared_services_cfauth_param_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/cfauth-param.service */ "./src/app/monitoring/shared/services/cfauth-param.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _monitoring_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../monitoring.module */ "./src/app/monitoring/monitoring.module.ts");











var AggregationService = /** @class */ (function () {
    function AggregationService(http, endpointService, authParamService, storeBindings) {
        this.http = http;
        this.endpointService = endpointService;
        this.endpoint = '/charting/aggregations';
        this.authParamService = authParamService.construct(storeBindings);
        this.url = this.endpointService.getUri() + this.endpoint;
    }
    AggregationService.prototype.getAllAggregations = function (chartType) {
        var _this = this;
        return this.authParamService.createCfAuthParameters().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(function (param) {
            var params = param.append('chartType', chartType);
            return _this.http.get(_this.url, { params: params });
        }));
    };
    AggregationService.prototype.createAggregation = function (aggregation) {
        return this.http.put(this.url, aggregation);
    };
    AggregationService.prototype.updateAggregation = function (aggregation) {
        var url = this.url + "/" + aggregation.id;
        return this.http.post(url, aggregation);
    };
    AggregationService.prototype.deleteAggregation = function (aggregationId) {
        var url = this.url + "/" + aggregationId;
        return this.http.delete(url);
    };
    AggregationService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_5__["defineInjectable"]({ factory: function AggregationService_Factory() { return new AggregationService(_angular_core__WEBPACK_IMPORTED_MODULE_5__["inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["inject"](_shared_services_endpoint_service__WEBPACK_IMPORTED_MODULE_1__["EndpointService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["inject"](_shared_services_cfauth_param_service__WEBPACK_IMPORTED_MODULE_2__["CfAuthParameterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["inject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"])); }, token: AggregationService, providedIn: _monitoring_module__WEBPACK_IMPORTED_MODULE_6__["MonitoringModule"] });
    return AggregationService;
}());



/***/ }),

/***/ "./src/app/monitoring/chart-configurator/services/options.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/monitoring/chart-configurator/services/options.service.ts ***!
  \***************************************************************************/
/*! exports provided: OptionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsService", function() { return OptionsService; });
/* harmony import */ var app_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/core */ "./src/app/core/index.ts");
/* harmony import */ var app_monitoring_shared_services_errorservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/monitoring/shared/services/errorservice.service */ "./src/app/monitoring/shared/services/errorservice.service.ts");
/* harmony import */ var app_monitoring_shared_services_endpoint_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/monitoring/shared/services/endpoint.service */ "./src/app/monitoring/shared/services/endpoint.service.ts");
/* harmony import */ var _core_services_http_get_params_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/http-get-params.service */ "./src/app/core/services/http-get-params.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/notification.service */ "./src/app/core/notification.service.ts");












var OptionsService = /** @class */ (function () {
    function OptionsService(http, endpointService, notification, errorService, privateHttpGetParams) {
        this.http = http;
        this.endpointService = endpointService;
        this.notification = notification;
        this.errorService = errorService;
        this.privateHttpGetParams = privateHttpGetParams;
        this.httpOptions = this.endpointService.httpOptions;
        this.endpoint = '/charting/options';
        this.url = this.endpointService.getUri() + this.endpoint;
    }
    OptionsService.prototype.getOptions = function (request) {
        var _this = this;
        var params = this.privateHttpGetParams.convertParams(request);
        var httpOptions = Object.assign({ params: params }, this.httpOptions);
        return this.http
            .get(this.url, httpOptions)
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) { return _this.errorService.handleErrors(err); }));
    };
    OptionsService.prototype.putOptions = function (request) {
        var _this = this;
        return this.http
            .put(this.url, request, this.httpOptions)
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) { return _this.errorService.handleErrors(err); }));
    };
    OptionsService.prototype.deleteOptions = function (optionsId) {
        var _this = this;
        var url = this.url + optionsId;
        return this.http
            .delete(url, this.httpOptions)
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) { return _this.errorService.handleErrors(err); }));
    };
    OptionsService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_6__["defineInjectable"]({ factory: function OptionsService_Factory() { return new OptionsService(_angular_core__WEBPACK_IMPORTED_MODULE_6__["inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["inject"](app_monitoring_shared_services_endpoint_service__WEBPACK_IMPORTED_MODULE_2__["EndpointService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["inject"](_core_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["inject"](app_monitoring_shared_services_errorservice_service__WEBPACK_IMPORTED_MODULE_1__["ErrorserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["inject"](_core_services_http_get_params_service__WEBPACK_IMPORTED_MODULE_3__["HttpGetParamsService"])); }, token: OptionsService, providedIn: "root" });
    return OptionsService;
}());



/***/ }),

/***/ "./src/app/monitoring/chart-configurator/store/actions/aggregation.action.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/monitoring/chart-configurator/store/actions/aggregation.action.ts ***!
  \***********************************************************************************/
/*! exports provided: LOAD_AGGREGATIONS, LOAD_AGGREGATIONS_FAIL, LOAD_AGGREGATIONS_SUCCESS, SAVE_AGGREGATION, SAVE_AGGREGATION_FAIL, SAVE_AGGREGATION_SUCCESS, DELETE_AGGREGATION, DELETE_AGGREGATION_FAIL, DELETE_AGGREGATION_SUCCESS, UPDATE_AGGREGATION, UPDATE_AGGREGATION_FAIL, UPDATE_AGGREGATION_SUCCESS, LoadAggregations, LoadAggregationsFail, LoadAggregationsSuccess, SaveAggregation, SaveAggregationSuccess, SaveAggregationFail, UpdateAggregation, UpdateAggregationSuccess, UpdateAggregationFail, DeleteAggregation, DeleteAggregationSuccess, DeleteAggregationFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_AGGREGATIONS", function() { return LOAD_AGGREGATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_AGGREGATIONS_FAIL", function() { return LOAD_AGGREGATIONS_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_AGGREGATIONS_SUCCESS", function() { return LOAD_AGGREGATIONS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_AGGREGATION", function() { return SAVE_AGGREGATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_AGGREGATION_FAIL", function() { return SAVE_AGGREGATION_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_AGGREGATION_SUCCESS", function() { return SAVE_AGGREGATION_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_AGGREGATION", function() { return DELETE_AGGREGATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_AGGREGATION_FAIL", function() { return DELETE_AGGREGATION_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_AGGREGATION_SUCCESS", function() { return DELETE_AGGREGATION_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_AGGREGATION", function() { return UPDATE_AGGREGATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_AGGREGATION_FAIL", function() { return UPDATE_AGGREGATION_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_AGGREGATION_SUCCESS", function() { return UPDATE_AGGREGATION_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadAggregations", function() { return LoadAggregations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadAggregationsFail", function() { return LoadAggregationsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadAggregationsSuccess", function() { return LoadAggregationsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveAggregation", function() { return SaveAggregation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveAggregationSuccess", function() { return SaveAggregationSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveAggregationFail", function() { return SaveAggregationFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateAggregation", function() { return UpdateAggregation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateAggregationSuccess", function() { return UpdateAggregationSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateAggregationFail", function() { return UpdateAggregationFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteAggregation", function() { return DeleteAggregation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteAggregationSuccess", function() { return DeleteAggregationSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteAggregationFail", function() { return DeleteAggregationFail; });
// Load Aggregation
var LOAD_AGGREGATIONS = '[Aggregations] Load Aggregations';
var LOAD_AGGREGATIONS_FAIL = '[Aggregations] Load Aggregations Fail';
var LOAD_AGGREGATIONS_SUCCESS = '[Aggregations] Load Aggregations Success';
// Save Aggregation
var SAVE_AGGREGATION = '[Aggregations] Save Aggregation';
var SAVE_AGGREGATION_FAIL = '[Aggregations] Save Aggregation Fail';
var SAVE_AGGREGATION_SUCCESS = '[Aggregations] Save Aggregation Success';
// Delete Agrgegation 
var DELETE_AGGREGATION = '[Aggregations] Delete Aggregation';
var DELETE_AGGREGATION_FAIL = '[Aggregations] Delete Aggregation Fail';
var DELETE_AGGREGATION_SUCCESS = '[Aggregations] Delete Aggregation Success';
// UPDATE Agrgegation 
var UPDATE_AGGREGATION = '[Aggregations] UPDATE Aggregation';
var UPDATE_AGGREGATION_FAIL = '[Aggregations] UPDATE Aggregation Fail';
var UPDATE_AGGREGATION_SUCCESS = '[Aggregations] UPDATE Aggregation Success';
/*
 *
 */
// Load Aggregation
var LoadAggregations = /** @class */ (function () {
    // Chart Type needs to be specified
    function LoadAggregations(payload) {
        this.payload = payload;
        this.type = LOAD_AGGREGATIONS;
    }
    return LoadAggregations;
}());

var LoadAggregationsFail = /** @class */ (function () {
    function LoadAggregationsFail() {
        this.type = LOAD_AGGREGATIONS_FAIL;
    }
    return LoadAggregationsFail;
}());

var LoadAggregationsSuccess = /** @class */ (function () {
    function LoadAggregationsSuccess(payload) {
        this.payload = payload;
        this.type = LOAD_AGGREGATIONS_SUCCESS;
    }
    return LoadAggregationsSuccess;
}());

// Save Aggregation
var SaveAggregation = /** @class */ (function () {
    function SaveAggregation(payload) {
        this.payload = payload;
        this.type = SAVE_AGGREGATION;
    }
    return SaveAggregation;
}());

var SaveAggregationSuccess = /** @class */ (function () {
    function SaveAggregationSuccess(payload) {
        this.payload = payload;
        this.type = SAVE_AGGREGATION_SUCCESS;
    }
    return SaveAggregationSuccess;
}());

var SaveAggregationFail = /** @class */ (function () {
    function SaveAggregationFail() {
        this.type = SAVE_AGGREGATION_FAIL;
    }
    return SaveAggregationFail;
}());

// Update Aggregation
var UpdateAggregation = /** @class */ (function () {
    function UpdateAggregation(payload) {
        this.payload = payload;
        this.type = UPDATE_AGGREGATION;
    }
    return UpdateAggregation;
}());

var UpdateAggregationSuccess = /** @class */ (function () {
    function UpdateAggregationSuccess(payload) {
        this.payload = payload;
        this.type = UPDATE_AGGREGATION_SUCCESS;
    }
    return UpdateAggregationSuccess;
}());

var UpdateAggregationFail = /** @class */ (function () {
    function UpdateAggregationFail() {
        this.type = UPDATE_AGGREGATION_FAIL;
    }
    return UpdateAggregationFail;
}());

// Delete Aggregation
var DeleteAggregation = /** @class */ (function () {
    function DeleteAggregation(payload) {
        this.payload = payload;
        this.type = DELETE_AGGREGATION;
    }
    return DeleteAggregation;
}());

var DeleteAggregationSuccess = /** @class */ (function () {
    function DeleteAggregationSuccess(payload) {
        this.payload = payload;
        this.type = DELETE_AGGREGATION_SUCCESS;
    }
    return DeleteAggregationSuccess;
}());

var DeleteAggregationFail = /** @class */ (function () {
    function DeleteAggregationFail() {
        this.type = DELETE_AGGREGATION_FAIL;
    }
    return DeleteAggregationFail;
}());



/***/ }),

/***/ "./src/app/monitoring/chart-configurator/store/actions/chart.increation.action.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/monitoring/chart-configurator/store/actions/chart.increation.action.ts ***!
  \****************************************************************************************/
/*! exports provided: SET_CHART_TYPE, SET_CHART_OPTIONS, SET_CHART_AGGREGATIONS, UPDATE_CHART_AGGREGATIONS, DELETE_CHART_AGGREGATIONS, EDIT_AGGREGATION, EDIT_AGGREGATION_SUCCESS, EDIT_AGGREGATION_CANCELED, FIRE_AGGREGATIONS, FIRE_AGGREGATIONS_SUCCESS, FIRE_AGGREGATIONS_FAILED, CHECK_AGGREGATION_RESULT, CHECK_AGGREGATION_RESULT_FINISHED, FLUSH_STATE, SET_CHART_NAME, SET_CHART_IMAGE, SET_FAILED_AGGREGATION, DELETE_FAILED_AGGREGATION, SetChartType, SetChartOptions, SetChartAggregations, UpdateChartAggregations, DeleteChartAggregations, FireAggregations, FireAggregationsFailed, FireAggregationSuccess, CheckAggregationResult, CheckAggregationResultFinished, FlushState, SetChartName, EditAggregation, EditAggregationSuccess, EditAggregationCanceled, SetChartImage, SetFailedAggregation, DeleteFailedAggregation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CHART_TYPE", function() { return SET_CHART_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CHART_OPTIONS", function() { return SET_CHART_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CHART_AGGREGATIONS", function() { return SET_CHART_AGGREGATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_CHART_AGGREGATIONS", function() { return UPDATE_CHART_AGGREGATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_CHART_AGGREGATIONS", function() { return DELETE_CHART_AGGREGATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_AGGREGATION", function() { return EDIT_AGGREGATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_AGGREGATION_SUCCESS", function() { return EDIT_AGGREGATION_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_AGGREGATION_CANCELED", function() { return EDIT_AGGREGATION_CANCELED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIRE_AGGREGATIONS", function() { return FIRE_AGGREGATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIRE_AGGREGATIONS_SUCCESS", function() { return FIRE_AGGREGATIONS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIRE_AGGREGATIONS_FAILED", function() { return FIRE_AGGREGATIONS_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECK_AGGREGATION_RESULT", function() { return CHECK_AGGREGATION_RESULT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECK_AGGREGATION_RESULT_FINISHED", function() { return CHECK_AGGREGATION_RESULT_FINISHED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FLUSH_STATE", function() { return FLUSH_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CHART_NAME", function() { return SET_CHART_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CHART_IMAGE", function() { return SET_CHART_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_FAILED_AGGREGATION", function() { return SET_FAILED_AGGREGATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_FAILED_AGGREGATION", function() { return DELETE_FAILED_AGGREGATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetChartType", function() { return SetChartType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetChartOptions", function() { return SetChartOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetChartAggregations", function() { return SetChartAggregations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateChartAggregations", function() { return UpdateChartAggregations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteChartAggregations", function() { return DeleteChartAggregations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FireAggregations", function() { return FireAggregations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FireAggregationsFailed", function() { return FireAggregationsFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FireAggregationSuccess", function() { return FireAggregationSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckAggregationResult", function() { return CheckAggregationResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckAggregationResultFinished", function() { return CheckAggregationResultFinished; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlushState", function() { return FlushState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetChartName", function() { return SetChartName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAggregation", function() { return EditAggregation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAggregationSuccess", function() { return EditAggregationSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAggregationCanceled", function() { return EditAggregationCanceled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetChartImage", function() { return SetChartImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetFailedAggregation", function() { return SetFailedAggregation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteFailedAggregation", function() { return DeleteFailedAggregation; });
var SET_CHART_TYPE = '[Increation] Set Chart Type';
var SET_CHART_OPTIONS = '[Increation] Set Chart Options';
var SET_CHART_AGGREGATIONS = '[Increation] Set Chart Aggregations';
var UPDATE_CHART_AGGREGATIONS = '[Increation] Update Chart Aggregations';
var DELETE_CHART_AGGREGATIONS = '[Increation] Delete Chart Aggregations';
var EDIT_AGGREGATION = '[Increation] Edit Aggregation';
var EDIT_AGGREGATION_SUCCESS = '[Increation] Edit Aggregation Success';
var EDIT_AGGREGATION_CANCELED = '[Increation] Edit Aggregation Canceled';
var FIRE_AGGREGATIONS = '[Increation] Fire Aggregation';
var FIRE_AGGREGATIONS_SUCCESS = '[Increation] Fire Aggregation Success';
var FIRE_AGGREGATIONS_FAILED = '[Increation] Fire Aggregation Failed';
var CHECK_AGGREGATION_RESULT = '[Increation] Check Aggregation Result';
var CHECK_AGGREGATION_RESULT_FINISHED = '[Increation] Check AggregationResult finished';
var FLUSH_STATE = '[Increation] Flush State';
var SET_CHART_NAME = '[Increation] Set Appname';
var SET_CHART_IMAGE = '[Increation] Set ChartImage';
var SET_FAILED_AGGREGATION = "[Increation] set a failed aggregation. Save it to present error to user";
var DELETE_FAILED_AGGREGATION = "[Increation] delete the failed aggregation when there are no more errors";
var SetChartType = /** @class */ (function () {
    function SetChartType(payload) {
        this.payload = payload;
        this.type = SET_CHART_TYPE;
    }
    return SetChartType;
}());

var SetChartOptions = /** @class */ (function () {
    function SetChartOptions(payload) {
        this.payload = payload;
        this.type = SET_CHART_OPTIONS;
    }
    return SetChartOptions;
}());

var SetChartAggregations = /** @class */ (function () {
    function SetChartAggregations(payload, id) {
        this.payload = payload;
        this.id = id;
        this.type = SET_CHART_AGGREGATIONS;
    }
    return SetChartAggregations;
}());

var UpdateChartAggregations = /** @class */ (function () {
    function UpdateChartAggregations(payload, aggUuid) {
        this.payload = payload;
        this.aggUuid = aggUuid;
        this.type = UPDATE_CHART_AGGREGATIONS;
    }
    return UpdateChartAggregations;
}());

var DeleteChartAggregations = /** @class */ (function () {
    function DeleteChartAggregations(aggUuid) {
        this.aggUuid = aggUuid;
        this.type = DELETE_CHART_AGGREGATIONS;
    }
    return DeleteChartAggregations;
}());

var FireAggregations = /** @class */ (function () {
    function FireAggregations(payload) {
        this.payload = payload;
        this.type = FIRE_AGGREGATIONS;
    }
    return FireAggregations;
}());

var FireAggregationsFailed = /** @class */ (function () {
    function FireAggregationsFailed() {
        this.type = FIRE_AGGREGATIONS_FAILED;
    }
    return FireAggregationsFailed;
}());

var FireAggregationSuccess = /** @class */ (function () {
    function FireAggregationSuccess(payload) {
        this.payload = payload;
        this.type = FIRE_AGGREGATIONS_SUCCESS;
    }
    return FireAggregationSuccess;
}());

var CheckAggregationResult = /** @class */ (function () {
    function CheckAggregationResult(request, response) {
        this.request = request;
        this.response = response;
        this.type = CHECK_AGGREGATION_RESULT;
    }
    return CheckAggregationResult;
}());

var CheckAggregationResultFinished = /** @class */ (function () {
    function CheckAggregationResultFinished(payload) {
        this.payload = payload;
        this.type = CHECK_AGGREGATION_RESULT_FINISHED;
    }
    return CheckAggregationResultFinished;
}());

var FlushState = /** @class */ (function () {
    function FlushState() {
        this.type = FLUSH_STATE;
    }
    return FlushState;
}());

var SetChartName = /** @class */ (function () {
    function SetChartName(payload) {
        this.payload = payload;
        this.type = SET_CHART_NAME;
    }
    return SetChartName;
}());

var EditAggregation = /** @class */ (function () {
    function EditAggregation(payload, id) {
        this.payload = payload;
        this.id = id;
        this.type = EDIT_AGGREGATION;
    }
    return EditAggregation;
}());

var EditAggregationSuccess = /** @class */ (function () {
    function EditAggregationSuccess(payload) {
        this.payload = payload;
        this.type = EDIT_AGGREGATION_SUCCESS;
    }
    return EditAggregationSuccess;
}());

var EditAggregationCanceled = /** @class */ (function () {
    function EditAggregationCanceled() {
        this.type = EDIT_AGGREGATION_CANCELED;
    }
    return EditAggregationCanceled;
}());

var SetChartImage = /** @class */ (function () {
    function SetChartImage(encodedImage) {
        this.encodedImage = encodedImage;
        this.type = SET_CHART_IMAGE;
    }
    return SetChartImage;
}());

// Action that is fired in the preview component if there is an aggregation that has failed
// Saves the error Message in the Store should be stored in the Error Message Component
var SetFailedAggregation = /** @class */ (function () {
    // Elastic Search Error Message, that should be displayed as it is
    function SetFailedAggregation(payload) {
        this.payload = payload;
        this.type = SET_FAILED_AGGREGATION;
    }
    return SetFailedAggregation;
}());

// Delete error message once the aggregation works again
var DeleteFailedAggregation = /** @class */ (function () {
    function DeleteFailedAggregation() {
        this.type = DELETE_FAILED_AGGREGATION;
    }
    return DeleteFailedAggregation;
}());



/***/ }),

/***/ "./src/app/monitoring/chart-configurator/store/actions/index.ts":
/*!**********************************************************************!*\
  !*** ./src/app/monitoring/chart-configurator/store/actions/index.ts ***!
  \**********************************************************************/
/*! exports provided: LOAD_OPTIONS, LOAD_OPTIONS_FAIL, LOAD_OPTIONS_SUCCESS, LoadOptions, LoadOptionsFail, LoadOptionsSuccess, LOAD_BINDINGS, LOAD_BINDINGS_SUCCESS, LOAD_BINDINGS_FAIL, LoadBindings, LoadBindingsSuccess, LoadBindingsFail, NAVIGATE_TO_OPTIONS, NAVIGATE_TO_AGGREGATIONS, NavigateToOptions, NavigateToAggregations, SET_CHART_TYPE, SET_CHART_OPTIONS, SET_CHART_AGGREGATIONS, UPDATE_CHART_AGGREGATIONS, DELETE_CHART_AGGREGATIONS, EDIT_AGGREGATION, EDIT_AGGREGATION_SUCCESS, EDIT_AGGREGATION_CANCELED, FIRE_AGGREGATIONS, FIRE_AGGREGATIONS_SUCCESS, FIRE_AGGREGATIONS_FAILED, CHECK_AGGREGATION_RESULT, CHECK_AGGREGATION_RESULT_FINISHED, FLUSH_STATE, SET_CHART_NAME, SET_CHART_IMAGE, SET_FAILED_AGGREGATION, DELETE_FAILED_AGGREGATION, SetChartType, SetChartOptions, SetChartAggregations, UpdateChartAggregations, DeleteChartAggregations, FireAggregations, FireAggregationsFailed, FireAggregationSuccess, CheckAggregationResult, CheckAggregationResultFinished, FlushState, SetChartName, EditAggregation, EditAggregationSuccess, EditAggregationCanceled, SetChartImage, SetFailedAggregation, DeleteFailedAggregation, TOPIC_ANIMATION, TOPIC_LEDGEND, TOPIC_TITLE, TopicAnimation, TopicLedgend, TopicTitle, UPDATE_OPTIONS_FAIL, OPEN_EXPERT_MODE, CLOSE_EXPERT_MODE, UpdateOptionsFail, OpenExpertMode, SET_ANIMATION_DISABLED, SET_ANIMATION, SetAnimationDisabled, SetAnimation, SET_LEDGEND_DISABLED, SET_LEDGEND_POSITION, SetLedgendDisabled, SetLedgendPosition, SET_TITLE_DISABLED, SET_TITLE_POSITION, SET_TITLE, SetTitleDisabled, SetTitlePosition, SetTitle, LAYOUT_SET_PADDING, LayoutSetPadding, LOAD_AGGREGATIONS, LOAD_AGGREGATIONS_FAIL, LOAD_AGGREGATIONS_SUCCESS, SAVE_AGGREGATION, SAVE_AGGREGATION_FAIL, SAVE_AGGREGATION_SUCCESS, DELETE_AGGREGATION, DELETE_AGGREGATION_FAIL, DELETE_AGGREGATION_SUCCESS, UPDATE_AGGREGATION, UPDATE_AGGREGATION_FAIL, UPDATE_AGGREGATION_SUCCESS, LoadAggregations, LoadAggregationsFail, LoadAggregationsSuccess, SaveAggregation, SaveAggregationSuccess, SaveAggregationFail, UpdateAggregation, UpdateAggregationSuccess, UpdateAggregationFail, DeleteAggregation, DeleteAggregationSuccess, DeleteAggregationFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _options_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options.action */ "./src/app/monitoring/chart-configurator/store/actions/options.action.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOAD_OPTIONS", function() { return _options_action__WEBPACK_IMPORTED_MODULE_0__["LOAD_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOAD_OPTIONS_FAIL", function() { return _options_action__WEBPACK_IMPORTED_MODULE_0__["LOAD_OPTIONS_FAIL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOAD_OPTIONS_SUCCESS", function() { return _options_action__WEBPACK_IMPORTED_MODULE_0__["LOAD_OPTIONS_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadOptions", function() { return _options_action__WEBPACK_IMPORTED_MODULE_0__["LoadOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadOptionsFail", function() { return _options_action__WEBPACK_IMPORTED_MODULE_0__["LoadOptionsFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadOptionsSuccess", function() { return _options_action__WEBPACK_IMPORTED_MODULE_0__["LoadOptionsSuccess"]; });

/* harmony import */ var _shared_store_actions_binding_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/store/actions/binding.action */ "./src/app/monitoring/shared/store/actions/binding.action.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOAD_BINDINGS", function() { return _shared_store_actions_binding_action__WEBPACK_IMPORTED_MODULE_1__["LOAD_BINDINGS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOAD_BINDINGS_SUCCESS", function() { return _shared_store_actions_binding_action__WEBPACK_IMPORTED_MODULE_1__["LOAD_BINDINGS_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOAD_BINDINGS_FAIL", function() { return _shared_store_actions_binding_action__WEBPACK_IMPORTED_MODULE_1__["LOAD_BINDINGS_FAIL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadBindings", function() { return _shared_store_actions_binding_action__WEBPACK_IMPORTED_MODULE_1__["LoadBindings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadBindingsSuccess", function() { return _shared_store_actions_binding_action__WEBPACK_IMPORTED_MODULE_1__["LoadBindingsSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadBindingsFail", function() { return _shared_store_actions_binding_action__WEBPACK_IMPORTED_MODULE_1__["LoadBindingsFail"]; });

/* harmony import */ var _router_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router.action */ "./src/app/monitoring/chart-configurator/store/actions/router.action.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NAVIGATE_TO_OPTIONS", function() { return _router_action__WEBPACK_IMPORTED_MODULE_2__["NAVIGATE_TO_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NAVIGATE_TO_AGGREGATIONS", function() { return _router_action__WEBPACK_IMPORTED_MODULE_2__["NAVIGATE_TO_AGGREGATIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavigateToOptions", function() { return _router_action__WEBPACK_IMPORTED_MODULE_2__["NavigateToOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavigateToAggregations", function() { return _router_action__WEBPACK_IMPORTED_MODULE_2__["NavigateToAggregations"]; });

/* harmony import */ var _chart_increation_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chart.increation.action */ "./src/app/monitoring/chart-configurator/store/actions/chart.increation.action.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SET_CHART_TYPE", function() { return _chart_increation_action__WEBPACK_IMPORTED_MODULE_3__["SET_CHART_TYPE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SET_CHART_OPTIONS", function() { return _chart_increation_action__WEBPACK_IMPORTED_MODULE_3__["SET_CHART_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SET_CHART_AGGREGATIONS", function() { return _chart_increation_action__WEBPACK_IMPORTED_MODULE_3__["SET_CHART_AGGREGATIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_CHART_AGGREGATIONS", function() { return _chart_increation_action__WEBPACK_IMPORTED_MODULE_3__["UPDATE_CHART_AGGREGATIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DELETE_CHART_AGGREGATIONS", function() { return _chart_increation_action__WEBPACK_IMPORTED_MODULE_3__["DELETE_CHART_AGGREGATIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EDIT_AGGREGATION", function() { return _chart_increation_action__WEBPACK_IMPORTED_MODULE_3__["EDIT_AGGREGATION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EDIT_AGGREGATION_SUCCESS", function() { return _chart_increation_action__WEBPACK_IMPORTED_MODULE_3__["EDIT_AGGREGATION_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EDIT_AGGREGATION_CANCELED", function() { return _chart_increation_action__WEBPACK_IMPORTED_MODULE_3__["EDIT_AGGREGATION_CANCELED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FIRE_AGGREGATIONS", function() { return _chart_increation_action__WEBPACK_IMPORTED_MODULE_3__["FIRE_AGGREGATIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FIRE_AGGREGATIONS_SUCCESS", function() { return _chart_increation_action__WEBPACK_IMPORTED_MODULE_3__["FIRE_AGGREGATIONS_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FIRE_AGGREGATIONS_FAILED", function() { return _chart_increation_action__WEBPACK_IMPORTED_MODULE_3__["FIRE_AGGREGATIONS_FAILED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CHECK_AGGREGATION_RESULT", function() { return _chart_increation_action__WEBPACK_IMPORTED_MODULE_3__["CHECK_AGGREGATION_RESULT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CHECK_AGGREGATION_RESULT_FINISHED", function() { return _chart_increation_action__WEBPACK_IMPORTED_MODULE_3__["CHECK_AGGREGATION_RESULT_FINISHED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FLUSH_STATE", function() { return _chart_increation_action__WEBPACK_IMPORTED_MODULE_3__["FLUSH_STATE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SET_CHART_NAME", function() { return _chart_increation_action__WEBPACK_IMPORTED_MODULE_3__["SET_CHART_NAME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SET_CHART_IMAGE", function() { return _chart_increation_action__WEBPACK_IMPORTED_MODULE_3__["SET_CHART_IMAGE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SET_FAILED_AGGREGATION", function() { return _chart_increation_action__WEBPACK_IMPORTED_MODULE_3__["SET_FAILED_AGGREGATION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DELETE_FAILED_AGGREGATION", function() { return _chart_increation_action__WEBPACK_IMPORTED_MODULE_3__["DELETE_FAILED_AGGREGATION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetChartType", function() { return _chart_increation_action__WEBPACK_IMPORTED_MODULE_3__["SetChartType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetChartOptions", function() { return _chart_increation_action__WEBPACK_IMPORTED_MODULE_3__["SetChartOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetChartAggregations", function() { return _chart_increation_action__WEBPACK_IMPORTED_MODULE_3__["SetChartAggregations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateChartAggregations", function() { return _chart_increation_action__WEBPACK_IMPORTED_MODULE_3__["UpdateChartAggregations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteChartAggregations", function() { return _chart_increation_action__WEBPACK_IMPORTED_MODULE_3__["DeleteChartAggregations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FireAggregations", function() { return _chart_increation_action__WEBPACK_IMPORTED_MODULE_3__["FireAggregations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FireAggregationsFailed", function() { return _chart_increation_action__WEBPACK_IMPORTED_MODULE_3__["FireAggregationsFailed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FireAggregationSuccess", function() { return _chart_increation_action__WEBPACK_IMPORTED_MODULE_3__["FireAggregationSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckAggregationResult", function() { return _chart_increation_action__WEBPACK_IMPORTED_MODULE_3__["CheckAggregationResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckAggregationResultFinished", function() { return _chart_increation_action__WEBPACK_IMPORTED_MODULE_3__["CheckAggregationResultFinished"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlushState", function() { return _chart_increation_action__WEBPACK_IMPORTED_MODULE_3__["FlushState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetChartName", function() { return _chart_increation_action__WEBPACK_IMPORTED_MODULE_3__["SetChartName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditAggregation", function() { return _chart_increation_action__WEBPACK_IMPORTED_MODULE_3__["EditAggregation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditAggregationSuccess", function() { return _chart_increation_action__WEBPACK_IMPORTED_MODULE_3__["EditAggregationSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditAggregationCanceled", function() { return _chart_increation_action__WEBPACK_IMPORTED_MODULE_3__["EditAggregationCanceled"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetChartImage", function() { return _chart_increation_action__WEBPACK_IMPORTED_MODULE_3__["SetChartImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetFailedAggregation", function() { return _chart_increation_action__WEBPACK_IMPORTED_MODULE_3__["SetFailedAggregation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteFailedAggregation", function() { return _chart_increation_action__WEBPACK_IMPORTED_MODULE_3__["DeleteFailedAggregation"]; });

/* harmony import */ var _options_toolbox_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./options.toolbox.action */ "./src/app/monitoring/chart-configurator/store/actions/options.toolbox.action.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TOPIC_ANIMATION", function() { return _options_toolbox_action__WEBPACK_IMPORTED_MODULE_4__["TOPIC_ANIMATION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TOPIC_LEDGEND", function() { return _options_toolbox_action__WEBPACK_IMPORTED_MODULE_4__["TOPIC_LEDGEND"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TOPIC_TITLE", function() { return _options_toolbox_action__WEBPACK_IMPORTED_MODULE_4__["TOPIC_TITLE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopicAnimation", function() { return _options_toolbox_action__WEBPACK_IMPORTED_MODULE_4__["TopicAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopicLedgend", function() { return _options_toolbox_action__WEBPACK_IMPORTED_MODULE_4__["TopicLedgend"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopicTitle", function() { return _options_toolbox_action__WEBPACK_IMPORTED_MODULE_4__["TopicTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_OPTIONS_FAIL", function() { return _options_toolbox_action__WEBPACK_IMPORTED_MODULE_4__["UPDATE_OPTIONS_FAIL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OPEN_EXPERT_MODE", function() { return _options_toolbox_action__WEBPACK_IMPORTED_MODULE_4__["OPEN_EXPERT_MODE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CLOSE_EXPERT_MODE", function() { return _options_toolbox_action__WEBPACK_IMPORTED_MODULE_4__["CLOSE_EXPERT_MODE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateOptionsFail", function() { return _options_toolbox_action__WEBPACK_IMPORTED_MODULE_4__["UpdateOptionsFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpenExpertMode", function() { return _options_toolbox_action__WEBPACK_IMPORTED_MODULE_4__["OpenExpertMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SET_ANIMATION_DISABLED", function() { return _options_toolbox_action__WEBPACK_IMPORTED_MODULE_4__["SET_ANIMATION_DISABLED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SET_ANIMATION", function() { return _options_toolbox_action__WEBPACK_IMPORTED_MODULE_4__["SET_ANIMATION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetAnimationDisabled", function() { return _options_toolbox_action__WEBPACK_IMPORTED_MODULE_4__["SetAnimationDisabled"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetAnimation", function() { return _options_toolbox_action__WEBPACK_IMPORTED_MODULE_4__["SetAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SET_LEDGEND_DISABLED", function() { return _options_toolbox_action__WEBPACK_IMPORTED_MODULE_4__["SET_LEDGEND_DISABLED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SET_LEDGEND_POSITION", function() { return _options_toolbox_action__WEBPACK_IMPORTED_MODULE_4__["SET_LEDGEND_POSITION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetLedgendDisabled", function() { return _options_toolbox_action__WEBPACK_IMPORTED_MODULE_4__["SetLedgendDisabled"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetLedgendPosition", function() { return _options_toolbox_action__WEBPACK_IMPORTED_MODULE_4__["SetLedgendPosition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SET_TITLE_DISABLED", function() { return _options_toolbox_action__WEBPACK_IMPORTED_MODULE_4__["SET_TITLE_DISABLED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SET_TITLE_POSITION", function() { return _options_toolbox_action__WEBPACK_IMPORTED_MODULE_4__["SET_TITLE_POSITION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SET_TITLE", function() { return _options_toolbox_action__WEBPACK_IMPORTED_MODULE_4__["SET_TITLE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetTitleDisabled", function() { return _options_toolbox_action__WEBPACK_IMPORTED_MODULE_4__["SetTitleDisabled"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetTitlePosition", function() { return _options_toolbox_action__WEBPACK_IMPORTED_MODULE_4__["SetTitlePosition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetTitle", function() { return _options_toolbox_action__WEBPACK_IMPORTED_MODULE_4__["SetTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LAYOUT_SET_PADDING", function() { return _options_toolbox_action__WEBPACK_IMPORTED_MODULE_4__["LAYOUT_SET_PADDING"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutSetPadding", function() { return _options_toolbox_action__WEBPACK_IMPORTED_MODULE_4__["LayoutSetPadding"]; });

/* harmony import */ var _aggregation_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./aggregation.action */ "./src/app/monitoring/chart-configurator/store/actions/aggregation.action.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOAD_AGGREGATIONS", function() { return _aggregation_action__WEBPACK_IMPORTED_MODULE_5__["LOAD_AGGREGATIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOAD_AGGREGATIONS_FAIL", function() { return _aggregation_action__WEBPACK_IMPORTED_MODULE_5__["LOAD_AGGREGATIONS_FAIL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOAD_AGGREGATIONS_SUCCESS", function() { return _aggregation_action__WEBPACK_IMPORTED_MODULE_5__["LOAD_AGGREGATIONS_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SAVE_AGGREGATION", function() { return _aggregation_action__WEBPACK_IMPORTED_MODULE_5__["SAVE_AGGREGATION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SAVE_AGGREGATION_FAIL", function() { return _aggregation_action__WEBPACK_IMPORTED_MODULE_5__["SAVE_AGGREGATION_FAIL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SAVE_AGGREGATION_SUCCESS", function() { return _aggregation_action__WEBPACK_IMPORTED_MODULE_5__["SAVE_AGGREGATION_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DELETE_AGGREGATION", function() { return _aggregation_action__WEBPACK_IMPORTED_MODULE_5__["DELETE_AGGREGATION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DELETE_AGGREGATION_FAIL", function() { return _aggregation_action__WEBPACK_IMPORTED_MODULE_5__["DELETE_AGGREGATION_FAIL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DELETE_AGGREGATION_SUCCESS", function() { return _aggregation_action__WEBPACK_IMPORTED_MODULE_5__["DELETE_AGGREGATION_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_AGGREGATION", function() { return _aggregation_action__WEBPACK_IMPORTED_MODULE_5__["UPDATE_AGGREGATION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_AGGREGATION_FAIL", function() { return _aggregation_action__WEBPACK_IMPORTED_MODULE_5__["UPDATE_AGGREGATION_FAIL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_AGGREGATION_SUCCESS", function() { return _aggregation_action__WEBPACK_IMPORTED_MODULE_5__["UPDATE_AGGREGATION_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadAggregations", function() { return _aggregation_action__WEBPACK_IMPORTED_MODULE_5__["LoadAggregations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadAggregationsFail", function() { return _aggregation_action__WEBPACK_IMPORTED_MODULE_5__["LoadAggregationsFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadAggregationsSuccess", function() { return _aggregation_action__WEBPACK_IMPORTED_MODULE_5__["LoadAggregationsSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SaveAggregation", function() { return _aggregation_action__WEBPACK_IMPORTED_MODULE_5__["SaveAggregation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SaveAggregationSuccess", function() { return _aggregation_action__WEBPACK_IMPORTED_MODULE_5__["SaveAggregationSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SaveAggregationFail", function() { return _aggregation_action__WEBPACK_IMPORTED_MODULE_5__["SaveAggregationFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateAggregation", function() { return _aggregation_action__WEBPACK_IMPORTED_MODULE_5__["UpdateAggregation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateAggregationSuccess", function() { return _aggregation_action__WEBPACK_IMPORTED_MODULE_5__["UpdateAggregationSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateAggregationFail", function() { return _aggregation_action__WEBPACK_IMPORTED_MODULE_5__["UpdateAggregationFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteAggregation", function() { return _aggregation_action__WEBPACK_IMPORTED_MODULE_5__["DeleteAggregation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteAggregationSuccess", function() { return _aggregation_action__WEBPACK_IMPORTED_MODULE_5__["DeleteAggregationSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteAggregationFail", function() { return _aggregation_action__WEBPACK_IMPORTED_MODULE_5__["DeleteAggregationFail"]; });









/***/ }),

/***/ "./src/app/monitoring/chart-configurator/store/actions/options.action.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/monitoring/chart-configurator/store/actions/options.action.ts ***!
  \*******************************************************************************/
/*! exports provided: LOAD_OPTIONS, LOAD_OPTIONS_FAIL, LOAD_OPTIONS_SUCCESS, LoadOptions, LoadOptionsFail, LoadOptionsSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_OPTIONS", function() { return LOAD_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_OPTIONS_FAIL", function() { return LOAD_OPTIONS_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_OPTIONS_SUCCESS", function() { return LOAD_OPTIONS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadOptions", function() { return LoadOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadOptionsFail", function() { return LoadOptionsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadOptionsSuccess", function() { return LoadOptionsSuccess; });
// Load Options
var LOAD_OPTIONS = '[Options] Load Options';
var LOAD_OPTIONS_FAIL = '[Options] Load Options Fail';
var LOAD_OPTIONS_SUCCESS = '[Options] Load Options Success';
var LoadOptions = /** @class */ (function () {
    // the Type of Chart that should be referenced
    function LoadOptions(payload) {
        this.payload = payload;
        this.type = LOAD_OPTIONS;
    }
    return LoadOptions;
}());

var LoadOptionsFail = /** @class */ (function () {
    function LoadOptionsFail(payload) {
        this.payload = payload;
        this.type = LOAD_OPTIONS_FAIL;
    }
    return LoadOptionsFail;
}());

var LoadOptionsSuccess = /** @class */ (function () {
    function LoadOptionsSuccess(payload) {
        this.payload = payload;
        this.type = LOAD_OPTIONS_SUCCESS;
    }
    return LoadOptionsSuccess;
}());



/***/ }),

/***/ "./src/app/monitoring/chart-configurator/store/actions/options.toolbox.action.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/monitoring/chart-configurator/store/actions/options.toolbox.action.ts ***!
  \***************************************************************************************/
/*! exports provided: TOPIC_ANIMATION, TOPIC_LEDGEND, TOPIC_TITLE, TopicAnimation, TopicLedgend, TopicTitle, UPDATE_OPTIONS_FAIL, OPEN_EXPERT_MODE, CLOSE_EXPERT_MODE, UpdateOptionsFail, OpenExpertMode, SET_ANIMATION_DISABLED, SET_ANIMATION, SetAnimationDisabled, SetAnimation, SET_LEDGEND_DISABLED, SET_LEDGEND_POSITION, SetLedgendDisabled, SetLedgendPosition, SET_TITLE_DISABLED, SET_TITLE_POSITION, SET_TITLE, SetTitleDisabled, SetTitlePosition, SetTitle, LAYOUT_SET_PADDING, LayoutSetPadding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOPIC_ANIMATION", function() { return TOPIC_ANIMATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOPIC_LEDGEND", function() { return TOPIC_LEDGEND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOPIC_TITLE", function() { return TOPIC_TITLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicAnimation", function() { return TopicAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicLedgend", function() { return TopicLedgend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicTitle", function() { return TopicTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_OPTIONS_FAIL", function() { return UPDATE_OPTIONS_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPEN_EXPERT_MODE", function() { return OPEN_EXPERT_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLOSE_EXPERT_MODE", function() { return CLOSE_EXPERT_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateOptionsFail", function() { return UpdateOptionsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenExpertMode", function() { return OpenExpertMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ANIMATION_DISABLED", function() { return SET_ANIMATION_DISABLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ANIMATION", function() { return SET_ANIMATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetAnimationDisabled", function() { return SetAnimationDisabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetAnimation", function() { return SetAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_LEDGEND_DISABLED", function() { return SET_LEDGEND_DISABLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_LEDGEND_POSITION", function() { return SET_LEDGEND_POSITION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetLedgendDisabled", function() { return SetLedgendDisabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetLedgendPosition", function() { return SetLedgendPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_TITLE_DISABLED", function() { return SET_TITLE_DISABLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_TITLE_POSITION", function() { return SET_TITLE_POSITION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_TITLE", function() { return SET_TITLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTitleDisabled", function() { return SetTitleDisabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTitlePosition", function() { return SetTitlePosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTitle", function() { return SetTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAYOUT_SET_PADDING", function() { return LAYOUT_SET_PADDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutSetPadding", function() { return LayoutSetPadding; });
/*
 * Available Topics for expert Mode
 */
var TOPIC_ANIMATION = 'Topic Animation';
var TOPIC_LEDGEND = 'Topic Ledgend';
var TOPIC_TITLE = 'Topic Title';
var TopicAnimation = /** @class */ (function () {
    function TopicAnimation() {
        this.type = TOPIC_ANIMATION;
    }
    return TopicAnimation;
}());

var TopicLedgend = /** @class */ (function () {
    function TopicLedgend() {
        this.type = TOPIC_LEDGEND;
    }
    return TopicLedgend;
}());

var TopicTitle = /** @class */ (function () {
    function TopicTitle() {
        this.type = TOPIC_TITLE;
    }
    return TopicTitle;
}());

/*
 * Generic Actions
 */
var UPDATE_OPTIONS_FAIL = '[Options Toolbox] Update Options Fail';
var OPEN_EXPERT_MODE = '[Options Toolbox] Open Title expert-mode';
var CLOSE_EXPERT_MODE = '[Options Toolbox] Close Title expert-mode';
var UpdateOptionsFail = /** @class */ (function () {
    function UpdateOptionsFail(payload) {
        this.payload = payload;
        this.type = UPDATE_OPTIONS_FAIL;
    }
    return UpdateOptionsFail;
}());

var OpenExpertMode = /** @class */ (function () {
    function OpenExpertMode(payload) {
        this.payload = payload;
        this.type = OPEN_EXPERT_MODE;
    }
    return OpenExpertMode;
}());

/*
 * Animations actions
 */
var SET_ANIMATION_DISABLED = '[Options Toolbox] Set Animation Disabled';
var SET_ANIMATION = '[Options Toolbox] Set Animation';
var SetAnimationDisabled = /** @class */ (function () {
    function SetAnimationDisabled() {
        this.type = SET_ANIMATION_DISABLED;
    }
    return SetAnimationDisabled;
}());

var SetAnimation = /** @class */ (function () {
    // payload sets the type of animation eg line
    function SetAnimation(payload) {
        this.payload = payload;
        this.type = SET_ANIMATION;
    }
    return SetAnimation;
}());

/*
 * Ledgend Actions
 */
var SET_LEDGEND_DISABLED = '[Options Toolbox] Set Ledgend None';
var SET_LEDGEND_POSITION = '[Options Toolbox] Set Ledgend Position';
var SetLedgendDisabled = /** @class */ (function () {
    function SetLedgendDisabled() {
        this.type = SET_LEDGEND_DISABLED;
    }
    return SetLedgendDisabled;
}());

var SetLedgendPosition = /** @class */ (function () {
    function SetLedgendPosition(payload) {
        this.payload = payload;
        this.type = SET_LEDGEND_POSITION;
    }
    return SetLedgendPosition;
}());

/*
 * Title Actions
 */
var SET_TITLE_DISABLED = '[Options Toolbox] Set Title Disabled';
var SET_TITLE_POSITION = '[Options Toolbox] Set Title Position';
var SET_TITLE = '[Options Toolbox] Set Title';
var SetTitleDisabled = /** @class */ (function () {
    function SetTitleDisabled() {
        this.type = SET_TITLE_DISABLED;
    }
    return SetTitleDisabled;
}());

var SetTitlePosition = /** @class */ (function () {
    function SetTitlePosition(payload) {
        this.payload = payload;
        this.type = SET_TITLE_POSITION;
    }
    return SetTitlePosition;
}());

var SetTitle = /** @class */ (function () {
    function SetTitle(payload) {
        this.payload = payload;
        this.type = SET_TITLE;
    }
    return SetTitle;
}());

/*
 * Layout Actions
 */
var LAYOUT_SET_PADDING = '[Options Toolbox] Layout Set Padding';
var LayoutSetPadding = /** @class */ (function () {
    function LayoutSetPadding(payload) {
        this.payload = payload;
        this.type = LAYOUT_SET_PADDING;
    }
    return LayoutSetPadding;
}());



/***/ }),

/***/ "./src/app/monitoring/chart-configurator/store/actions/router.action.ts":
/*!******************************************************************************!*\
  !*** ./src/app/monitoring/chart-configurator/store/actions/router.action.ts ***!
  \******************************************************************************/
/*! exports provided: NAVIGATE_TO_OPTIONS, NAVIGATE_TO_AGGREGATIONS, NavigateToOptions, NavigateToAggregations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAVIGATE_TO_OPTIONS", function() { return NAVIGATE_TO_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAVIGATE_TO_AGGREGATIONS", function() { return NAVIGATE_TO_AGGREGATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigateToOptions", function() { return NavigateToOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigateToAggregations", function() { return NavigateToAggregations; });
var NAVIGATE_TO_OPTIONS = '[Router] Navigate to Options';
var NAVIGATE_TO_AGGREGATIONS = '[Router] Navigate to Aggregations';
var NavigateToOptions = /** @class */ (function () {
    // payload sepecifies the Chart-Type the user has choosen
    function NavigateToOptions(payload) {
        this.payload = payload;
        this.type = NAVIGATE_TO_OPTIONS;
    }
    return NavigateToOptions;
}());

var NavigateToAggregations = /** @class */ (function () {
    function NavigateToAggregations() {
        this.type = NAVIGATE_TO_AGGREGATIONS;
    }
    return NavigateToAggregations;
}());



/***/ }),

/***/ "./src/app/monitoring/chart-configurator/store/effects/aggregation.effect.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/monitoring/chart-configurator/store/effects/aggregation.effect.ts ***!
  \***********************************************************************************/
/*! exports provided: AggregationEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AggregationEffect", function() { return AggregationEffect; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _actions_aggregation_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/aggregation.action */ "./src/app/monitoring/chart-configurator/store/actions/aggregation.action.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_aggregation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/aggregation.service */ "./src/app/monitoring/chart-configurator/services/aggregation.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AggregationEffect = /** @class */ (function () {
    function AggregationEffect(aggregationService, actions) {
        var _this = this;
        this.aggregationService = aggregationService;
        this.actions = actions;
        this.loadAggregations$ = this.actions.ofType(_actions_aggregation_action__WEBPACK_IMPORTED_MODULE_1__["LOAD_AGGREGATIONS"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (value, index) {
            return _this.aggregationService.getAllAggregations(value.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (aggregation) { return new _actions_aggregation_action__WEBPACK_IMPORTED_MODULE_1__["LoadAggregationsSuccess"](aggregation); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions_aggregation_action__WEBPACK_IMPORTED_MODULE_1__["LoadAggregationsFail"]()); }));
        }));
        this.saveAggregation$ = this.actions.ofType(_actions_aggregation_action__WEBPACK_IMPORTED_MODULE_1__["SAVE_AGGREGATION"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (value, index) {
            return _this.aggregationService.createAggregation(value.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (aggregation) { return new _actions_aggregation_action__WEBPACK_IMPORTED_MODULE_1__["SaveAggregationSuccess"](aggregation); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions_aggregation_action__WEBPACK_IMPORTED_MODULE_1__["SaveAggregationFail"]()); }));
        }));
        this.updateAggregation$ = this.actions.ofType(_actions_aggregation_action__WEBPACK_IMPORTED_MODULE_1__["UPDATE_AGGREGATION"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (value, index) {
            return _this.aggregationService.createAggregation(value.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (aggregation) { return new _actions_aggregation_action__WEBPACK_IMPORTED_MODULE_1__["UpdateAggregationSuccess"](aggregation); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions_aggregation_action__WEBPACK_IMPORTED_MODULE_1__["UpdateAggregationFail"]()); }));
        }));
        this.deleteAggregation$ = this.actions.ofType(_actions_aggregation_action__WEBPACK_IMPORTED_MODULE_1__["DELETE_AGGREGATION"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (value) {
            return _this.aggregationService.deleteAggregation(value.payload.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (aggregation) { return new _actions_aggregation_action__WEBPACK_IMPORTED_MODULE_1__["DeleteAggregationSuccess"](aggregation); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions_aggregation_action__WEBPACK_IMPORTED_MODULE_1__["DeleteAggregationFail"]); }));
        }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Effect"])(),
        __metadata("design:type", Object)
    ], AggregationEffect.prototype, "loadAggregations$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Effect"])(),
        __metadata("design:type", Object)
    ], AggregationEffect.prototype, "saveAggregation$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Effect"])(),
        __metadata("design:type", Object)
    ], AggregationEffect.prototype, "updateAggregation$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Effect"])(),
        __metadata("design:type", Object)
    ], AggregationEffect.prototype, "deleteAggregation$", void 0);
    return AggregationEffect;
}());



/***/ }),

/***/ "./src/app/monitoring/chart-configurator/store/effects/chart.increation.effect.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/monitoring/chart-configurator/store/effects/chart.increation.effect.ts ***!
  \****************************************************************************************/
/*! exports provided: ChartIncreationEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartIncreationEffect", function() { return ChartIncreationEffect; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _shared_services_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/search.service */ "./src/app/monitoring/shared/services/search.service.ts");
/* harmony import */ var _actions_chart_increation_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/chart.increation.action */ "./src/app/monitoring/chart-configurator/store/actions/chart.increation.action.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ChartIncreationEffect = /** @class */ (function () {
    function ChartIncreationEffect(actions, searchService, store) {
        var _this = this;
        this.actions = actions;
        this.searchService = searchService;
        this.store = store;
        this.fireAggregationRequest$ = this.actions
            .ofType(_actions_chart_increation_action__WEBPACK_IMPORTED_MODULE_2__["FIRE_AGGREGATIONS"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (k) {
            return _this.searchService
                .fireAggregation(_this.objToAray(k.payload, false))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
                return { response: response, query: k.payload };
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions_chart_increation_action__WEBPACK_IMPORTED_MODULE_2__["FireAggregationsFailed"]());
            }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (k) {
            if (k.type) {
                return k;
            }
            k = k;
            _this.store.dispatch(new _actions_chart_increation_action__WEBPACK_IMPORTED_MODULE_2__["CheckAggregationResult"](k.query, k.response));
            return new _actions_chart_increation_action__WEBPACK_IMPORTED_MODULE_2__["FireAggregationSuccess"](k.response);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions_chart_increation_action__WEBPACK_IMPORTED_MODULE_2__["FireAggregationsFailed"]()); }));
        this.checkAggregationResult$ = this.actions
            .ofType(_actions_chart_increation_action__WEBPACK_IMPORTED_MODULE_2__["CHECK_AGGREGATION_RESULT"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (aggRes) {
            var returnValue = _this.objToAray(aggRes.request, true)
                .map(function (k, index) {
                var _a, _b, _c;
                var res = aggRes.response[index];
                if (res['error']) {
                    return _a = {},
                        _a[k[0]] = 'error',
                        _a;
                }
                else if (res['aggregations'][Object.keys(res['aggregations'])[0]]['buckets'].length == 0) {
                    return _b = {},
                        _b[k[0]] = 'empty',
                        _b;
                }
                else {
                    return _c = {},
                        _c[k[0]] = 'ok',
                        _c;
                }
            })
                .reduce(function (prev, curr, i) {
                if (i == 0) {
                    return curr;
                }
                return __assign({}, prev, curr);
            });
            return new _actions_chart_increation_action__WEBPACK_IMPORTED_MODULE_2__["CheckAggregationResultFinished"](returnValue);
        }));
    }
    ChartIncreationEffect.prototype.objToAray = function (obj, all) {
        var returnVal = Array.from(new Map(Object.entries(obj))[Symbol.iterator]());
        if (!all) {
            return returnVal.map(function (k) { return k[1]; });
        }
        else {
            return returnVal;
        }
    };
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Effect"])(),
        __metadata("design:type", Object)
    ], ChartIncreationEffect.prototype, "fireAggregationRequest$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Effect"])(),
        __metadata("design:type", Object)
    ], ChartIncreationEffect.prototype, "checkAggregationResult$", void 0);
    return ChartIncreationEffect;
}());



/***/ }),

/***/ "./src/app/monitoring/chart-configurator/store/effects/index.ts":
/*!**********************************************************************!*\
  !*** ./src/app/monitoring/chart-configurator/store/effects/index.ts ***!
  \**********************************************************************/
/*! exports provided: effects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "effects", function() { return effects; });
/* harmony import */ var _options_effect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options.effect */ "./src/app/monitoring/chart-configurator/store/effects/options.effect.ts");
/* harmony import */ var app_monitoring_chart_configurator_store_effects_router_effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/monitoring/chart-configurator/store/effects/router.effect */ "./src/app/monitoring/chart-configurator/store/effects/router.effect.ts");
/* harmony import */ var _options_toolbox_effect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./options.toolbox.effect */ "./src/app/monitoring/chart-configurator/store/effects/options.toolbox.effect.ts");
/* harmony import */ var _aggregation_effect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aggregation.effect */ "./src/app/monitoring/chart-configurator/store/effects/aggregation.effect.ts");
/* harmony import */ var _chart_increation_effect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chart.increation.effect */ "./src/app/monitoring/chart-configurator/store/effects/chart.increation.effect.ts");





var effects = [
    _options_effect__WEBPACK_IMPORTED_MODULE_0__["OptionsEffects"],
    app_monitoring_chart_configurator_store_effects_router_effect__WEBPACK_IMPORTED_MODULE_1__["RouterEffect"],
    _options_toolbox_effect__WEBPACK_IMPORTED_MODULE_2__["OptionsToolboxEffect"],
    _aggregation_effect__WEBPACK_IMPORTED_MODULE_3__["AggregationEffect"],
    _chart_increation_effect__WEBPACK_IMPORTED_MODULE_4__["ChartIncreationEffect"],
];


/***/ }),

/***/ "./src/app/monitoring/chart-configurator/store/effects/options.effect.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/monitoring/chart-configurator/store/effects/options.effect.ts ***!
  \*******************************************************************************/
/*! exports provided: OptionsEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsEffects", function() { return OptionsEffects; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _actions_options_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/options.action */ "./src/app/monitoring/chart-configurator/store/actions/options.action.ts");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_options_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/options.service */ "./src/app/monitoring/chart-configurator/services/options.service.ts");
/* harmony import */ var _environments_runtime_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../environments/runtime-environment */ "./src/environments/runtime-environment.ts");
/* harmony import */ var app_monitoring_chart_configurator_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/monitoring/chart-configurator/store */ "./src/app/monitoring/chart-configurator/store/index.ts");
/* harmony import */ var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/observable/of */ "./node_modules/rxjs/internal/observable/of.js");
/* harmony import */ var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _shared_store_selectors_bindings_selector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/store/selectors/bindings.selector */ "./src/app/monitoring/shared/store/selectors/bindings.selector.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var OptionsEffects = /** @class */ (function () {
    function OptionsEffects(actions, optionService, optionsStore) {
        var _this = this;
        this.actions = actions;
        this.optionService = optionService;
        this.optionsStore = optionsStore;
        // Mocked entitis until Binding Service ist part of the ngrx-Store Concept
        this.mockedSpace = 'servicebroker-dev';
        this.mockedOrg = 'a6cec6a0-f163-4601-a573-484c9743bfa6';
        this.request = {
            serviceInstanceId: _environments_runtime_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].serviceInstanceId,
            space: this.mockedSpace,
            org: this.mockedOrg
        };
        this.loadOptions$ = this.actions.ofType(_actions_options_action__WEBPACK_IMPORTED_MODULE_1__["LOAD_OPTIONS"]).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (chartType) {
            return _this.optionsStore.select(_shared_store_selectors_bindings_selector__WEBPACK_IMPORTED_MODULE_8__["getBindingsSpaceAndOrg"]).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (bindings) {
                _this.request.space = bindings.space;
                _this.request.org = bindings.org;
                _this.request.chartType = chartType.payload;
                return _this.optionService.getOptions(_this.request).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (options) { return new app_monitoring_chart_configurator_store__WEBPACK_IMPORTED_MODULE_5__["LoadOptionsSuccess"](options); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_6__["of"])(new app_monitoring_chart_configurator_store__WEBPACK_IMPORTED_MODULE_5__["LoadOptionsFail"](error)); }));
            }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_6__["of"])(new app_monitoring_chart_configurator_store__WEBPACK_IMPORTED_MODULE_5__["LoadOptionsFail"](error)); }));
        }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Effect"])(),
        __metadata("design:type", Object)
    ], OptionsEffects.prototype, "loadOptions$", void 0);
    return OptionsEffects;
}());



/***/ }),

/***/ "./src/app/monitoring/chart-configurator/store/effects/options.toolbox.effect.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/monitoring/chart-configurator/store/effects/options.toolbox.effect.ts ***!
  \***************************************************************************************/
/*! exports provided: OptionsToolboxEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsToolboxEffect", function() { return OptionsToolboxEffect; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _actions_options_toolbox_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/options.toolbox.action */ "./src/app/monitoring/chart-configurator/store/actions/options.toolbox.action.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _selectors_chart_increation_selector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../selectors/chart.increation.selector */ "./src/app/monitoring/chart-configurator/store/selectors/chart.increation.selector.ts");
/* harmony import */ var _actions_chart_increation_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/chart.increation.action */ "./src/app/monitoring/chart-configurator/store/actions/chart.increation.action.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var OptionsToolboxEffect = /** @class */ (function () {
    function OptionsToolboxEffect(actions, store) {
        var _this = this;
        this.actions = actions;
        this.store = store;
        this.latestFromStore = function () {
            return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(_this.store.select(_selectors_chart_increation_selector__WEBPACK_IMPORTED_MODULE_5__["getChartIncreationOptionsSet"]), _this.store.select(_selectors_chart_increation_selector__WEBPACK_IMPORTED_MODULE_5__["getChartIncreationOptions"]));
        };
        this.loadAndDispatch = function (closure) {
            return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (payload) {
                if (payload[0]) {
                    var data = payload[0]['payload'];
                    var optionsEntity = __assign({}, payload[2]);
                    var newOptionsState = data ? closure(optionsEntity, data) : closure(optionsEntity);
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(new _actions_chart_increation_action__WEBPACK_IMPORTED_MODULE_6__["SetChartOptions"](newOptionsState));
                }
                return _this.returnError();
            });
        };
        this.returnError = function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(new _actions_options_toolbox_action__WEBPACK_IMPORTED_MODULE_2__["UpdateOptionsFail"]('options not Set'));
        };
        this.disabledAnimations$ = this.actions.ofType(_actions_options_toolbox_action__WEBPACK_IMPORTED_MODULE_2__["SET_ANIMATION_DISABLED"]).pipe(this.latestFromStore(), this.loadAndDispatch(function (optionsEntity, data) {
            return __assign({}, optionsEntity, { options: __assign({}, optionsEntity.options, { animation: false }) });
        }));
        this.setAnimation$ = this.actions.ofType(_actions_options_toolbox_action__WEBPACK_IMPORTED_MODULE_2__["SET_ANIMATION"]).pipe(this.latestFromStore(), this.loadAndDispatch(function (optionsEntity, data) {
            // has to be set because spread-operator on undefined will cause an runtime error
            var animationObject = _this.initializeIfNotSet(optionsEntity, 'animation');
            return __assign({}, optionsEntity, { options: __assign({}, optionsEntity.options, { animation: __assign({}, animationObject, { easing: data }) }) });
        }));
        /*---- Ledgends ----*/
        this.setLedgendDisabled$ = this.actions
            .ofType(_actions_options_toolbox_action__WEBPACK_IMPORTED_MODULE_2__["SET_LEDGEND_DISABLED"])
            .pipe(this.latestFromStore(), this.loadAndDispatch(function (optionsEntity, data) {
            var ledgendObject = _this.initializeIfNotSet(optionsEntity, 'legend');
            return __assign({}, optionsEntity, { options: __assign({}, optionsEntity.options, { legend: __assign({}, ledgendObject, { display: false }) }) });
        }));
        this.setLedgendPosition$ = this.actions
            .ofType(_actions_options_toolbox_action__WEBPACK_IMPORTED_MODULE_2__["SET_LEDGEND_POSITION"])
            .pipe(this.latestFromStore(), this.loadAndDispatch(function (optionsEntity, data) {
            var ledgendObject = _this.initializeIfNotSet(optionsEntity, 'legend');
            return __assign({}, optionsEntity, { options: __assign({}, optionsEntity.options, { legend: __assign({}, ledgendObject, { display: true, position: data }) }) });
        }));
        this.setTitleDisabled$ = this.actions.
            ofType(_actions_options_toolbox_action__WEBPACK_IMPORTED_MODULE_2__["SET_TITLE_DISABLED"]).
            pipe(this.latestFromStore(), this.loadAndDispatch(function (optionsEntity, data) {
            var titleObject = _this.initializeIfNotSet(optionsEntity, 'title');
            return __assign({}, optionsEntity, { options: __assign({}, optionsEntity.options, { title: __assign({}, titleObject, { display: false }) }) });
        }));
        this.setTitlePosition$ = this.actions.
            ofType(_actions_options_toolbox_action__WEBPACK_IMPORTED_MODULE_2__["SET_TITLE_POSITION"]).
            pipe(this.latestFromStore(), this.loadAndDispatch(function (optionsEntity, data) {
            var titleObject = _this.initializeIfNotSet(optionsEntity, 'title');
            return __assign({}, optionsEntity, { options: __assign({}, optionsEntity.options, { title: __assign({}, titleObject, { display: true, position: data }) }) });
        }));
        this.setTitle$ = this.actions.
            ofType(_actions_options_toolbox_action__WEBPACK_IMPORTED_MODULE_2__["SET_TITLE"]).
            pipe(this.latestFromStore(), this.loadAndDispatch(function (optionsEntity, data) {
            var titleObject = _this.initializeIfNotSet(optionsEntity, 'title');
            return __assign({}, optionsEntity, { options: __assign({}, optionsEntity.options, { title: __assign({}, titleObject, { display: true, text: data }) }) });
        }));
    }
    // The purpose of this Method is to initialize vairables if not set to not spread an undefined Object
    OptionsToolboxEffect.prototype.initializeIfNotSet = function (data, objectKey) {
        return data.options[objectKey] ? data.options[objectKey] : {};
    };
    OptionsToolboxEffect.prototype.ngOnInit = function () { };
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], OptionsToolboxEffect.prototype, "disabledAnimations$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], OptionsToolboxEffect.prototype, "setAnimation$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], OptionsToolboxEffect.prototype, "setLedgendDisabled$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], OptionsToolboxEffect.prototype, "setLedgendPosition$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], OptionsToolboxEffect.prototype, "setTitleDisabled$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], OptionsToolboxEffect.prototype, "setTitlePosition$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], OptionsToolboxEffect.prototype, "setTitle$", void 0);
    return OptionsToolboxEffect;
}());



/***/ }),

/***/ "./src/app/monitoring/chart-configurator/store/effects/router.effect.ts":
/*!******************************************************************************!*\
  !*** ./src/app/monitoring/chart-configurator/store/effects/router.effect.ts ***!
  \******************************************************************************/
/*! exports provided: RouterEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterEffect", function() { return RouterEffect; });
/* harmony import */ var _actions_router_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/router.action */ "./src/app/monitoring/chart-configurator/store/actions/router.action.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ "./src/app/monitoring/chart-configurator/store/index.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router/ */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _actions_aggregation_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/aggregation.action */ "./src/app/monitoring/chart-configurator/store/actions/aggregation.action.ts");
/* harmony import */ var _reducers_chart_increation_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/chart.increation.reducer */ "./src/app/monitoring/chart-configurator/store/reducers/chart.increation.reducer.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RouterEffect = /** @class */ (function () {
    function RouterEffect(actions, router, store) {
        var _this = this;
        this.actions = actions;
        this.router = router;
        this.store = store;
        this.navigateToOptions$ = this.actions
            .ofType(_actions_router_action__WEBPACK_IMPORTED_MODULE_0__["NAVIGATE_TO_OPTIONS"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (k) {
            _this.router.navigate(['monitoring/configurator/options/' + k]);
            return new _index__WEBPACK_IMPORTED_MODULE_1__["LoadOptions"](k);
        }));
        this.navigateToAggregations$ = this.actions
            .ofType(_actions_router_action__WEBPACK_IMPORTED_MODULE_0__["NAVIGATE_TO_AGGREGATIONS"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (k) {
            _this.router.navigate(['monitoring/configurator/aggregations']);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (k) {
            return _this.store
                .select(_reducers_chart_increation_reducer__WEBPACK_IMPORTED_MODULE_6__["getChartIncreationType"])
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (type) { return new _actions_aggregation_action__WEBPACK_IMPORTED_MODULE_5__["LoadAggregations"](type); }));
        }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", Object)
    ], RouterEffect.prototype, "navigateToOptions$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", Object)
    ], RouterEffect.prototype, "navigateToAggregations$", void 0);
    return RouterEffect;
}());



/***/ }),

/***/ "./src/app/monitoring/chart-configurator/store/index.ts":
/*!**************************************************************!*\
  !*** ./src/app/monitoring/chart-configurator/store/index.ts ***!
  \**************************************************************/
/*! exports provided: reducers, getChartState, LOAD_OPTIONS, LOAD_OPTIONS_FAIL, LOAD_OPTIONS_SUCCESS, LoadOptions, LoadOptionsFail, LoadOptionsSuccess, LOAD_BINDINGS, LOAD_BINDINGS_SUCCESS, LOAD_BINDINGS_FAIL, LoadBindings, LoadBindingsSuccess, LoadBindingsFail, NAVIGATE_TO_OPTIONS, NAVIGATE_TO_AGGREGATIONS, NavigateToOptions, NavigateToAggregations, SET_CHART_TYPE, SET_CHART_OPTIONS, SET_CHART_AGGREGATIONS, UPDATE_CHART_AGGREGATIONS, DELETE_CHART_AGGREGATIONS, EDIT_AGGREGATION, EDIT_AGGREGATION_SUCCESS, EDIT_AGGREGATION_CANCELED, FIRE_AGGREGATIONS, FIRE_AGGREGATIONS_SUCCESS, FIRE_AGGREGATIONS_FAILED, CHECK_AGGREGATION_RESULT, CHECK_AGGREGATION_RESULT_FINISHED, FLUSH_STATE, SET_CHART_NAME, SET_CHART_IMAGE, SET_FAILED_AGGREGATION, DELETE_FAILED_AGGREGATION, SetChartType, SetChartOptions, SetChartAggregations, UpdateChartAggregations, DeleteChartAggregations, FireAggregations, FireAggregationsFailed, FireAggregationSuccess, CheckAggregationResult, CheckAggregationResultFinished, FlushState, SetChartName, EditAggregation, EditAggregationSuccess, EditAggregationCanceled, SetChartImage, SetFailedAggregation, DeleteFailedAggregation, TOPIC_ANIMATION, TOPIC_LEDGEND, TOPIC_TITLE, TopicAnimation, TopicLedgend, TopicTitle, UPDATE_OPTIONS_FAIL, OPEN_EXPERT_MODE, CLOSE_EXPERT_MODE, UpdateOptionsFail, OpenExpertMode, SET_ANIMATION_DISABLED, SET_ANIMATION, SetAnimationDisabled, SetAnimation, SET_LEDGEND_DISABLED, SET_LEDGEND_POSITION, SetLedgendDisabled, SetLedgendPosition, SET_TITLE_DISABLED, SET_TITLE_POSITION, SET_TITLE, SetTitleDisabled, SetTitlePosition, SetTitle, LAYOUT_SET_PADDING, LayoutSetPadding, LOAD_AGGREGATIONS, LOAD_AGGREGATIONS_FAIL, LOAD_AGGREGATIONS_SUCCESS, SAVE_AGGREGATION, SAVE_AGGREGATION_FAIL, SAVE_AGGREGATION_SUCCESS, DELETE_AGGREGATION, DELETE_AGGREGATION_FAIL, DELETE_AGGREGATION_SUCCESS, UPDATE_AGGREGATION, UPDATE_AGGREGATION_FAIL, UPDATE_AGGREGATION_SUCCESS, LoadAggregations, LoadAggregationsFail, LoadAggregationsSuccess, SaveAggregation, SaveAggregationSuccess, SaveAggregationFail, UpdateAggregation, UpdateAggregationSuccess, UpdateAggregationFail, DeleteAggregation, DeleteAggregationSuccess, DeleteAggregationFail, effects, getAllBindingsState, getAllBindingsEntities, getAllBindingsLoaded, getAllBindingsLoading, getBindingsLoadingState, getBindingsSpaceAndOrg, getAllChartIncreationState, getChartIncreationType, getChartIncreationOptions, getChartIncreationOptionsSet, getChartIncreationAggregations, getReadyForRequestAggregations, getAggregationAndResponse, getReadyForRequestAggregationsArray, getReadyForRequestAggregationsId, getChartIncreationAggregationResponse, getChartIncreationAggregationResponseLoading, getChartIncreationAggregationResponseLoaded, getChartIncreationAggregationState, getAggregationOnEdit, getFailedAggregation, buildChart, hasError, ɵ0, getOptionsState, getOptionEntities, getAllOptions, getAllOptionsLoaded, getAllOptionsLoading, getAggregationState, getAllAggregationEntities, getAllActualAggregations, getAggregationsLoaded, getAggregationsLoading, getAggregationSaveing, getAggregationSaved */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers */ "./src/app/monitoring/chart-configurator/store/reducers/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return _reducers__WEBPACK_IMPORTED_MODULE_0__["reducers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getChartState", function() { return _reducers__WEBPACK_IMPORTED_MODULE_0__["getChartState"]; });

/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./src/app/monitoring/chart-configurator/store/actions/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOAD_OPTIONS", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["LOAD_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOAD_OPTIONS_FAIL", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["LOAD_OPTIONS_FAIL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOAD_OPTIONS_SUCCESS", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["LOAD_OPTIONS_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadOptions", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["LoadOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadOptionsFail", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["LoadOptionsFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadOptionsSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["LoadOptionsSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOAD_BINDINGS", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["LOAD_BINDINGS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOAD_BINDINGS_SUCCESS", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["LOAD_BINDINGS_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOAD_BINDINGS_FAIL", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["LOAD_BINDINGS_FAIL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadBindings", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["LoadBindings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadBindingsSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["LoadBindingsSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadBindingsFail", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["LoadBindingsFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NAVIGATE_TO_OPTIONS", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["NAVIGATE_TO_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NAVIGATE_TO_AGGREGATIONS", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["NAVIGATE_TO_AGGREGATIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavigateToOptions", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["NavigateToOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavigateToAggregations", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["NavigateToAggregations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SET_CHART_TYPE", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["SET_CHART_TYPE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SET_CHART_OPTIONS", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["SET_CHART_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SET_CHART_AGGREGATIONS", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["SET_CHART_AGGREGATIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_CHART_AGGREGATIONS", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["UPDATE_CHART_AGGREGATIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DELETE_CHART_AGGREGATIONS", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["DELETE_CHART_AGGREGATIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EDIT_AGGREGATION", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["EDIT_AGGREGATION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EDIT_AGGREGATION_SUCCESS", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["EDIT_AGGREGATION_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EDIT_AGGREGATION_CANCELED", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["EDIT_AGGREGATION_CANCELED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FIRE_AGGREGATIONS", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["FIRE_AGGREGATIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FIRE_AGGREGATIONS_SUCCESS", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["FIRE_AGGREGATIONS_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FIRE_AGGREGATIONS_FAILED", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["FIRE_AGGREGATIONS_FAILED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CHECK_AGGREGATION_RESULT", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["CHECK_AGGREGATION_RESULT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CHECK_AGGREGATION_RESULT_FINISHED", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["CHECK_AGGREGATION_RESULT_FINISHED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FLUSH_STATE", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["FLUSH_STATE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SET_CHART_NAME", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["SET_CHART_NAME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SET_CHART_IMAGE", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["SET_CHART_IMAGE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SET_FAILED_AGGREGATION", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["SET_FAILED_AGGREGATION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DELETE_FAILED_AGGREGATION", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["DELETE_FAILED_AGGREGATION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetChartType", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["SetChartType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetChartOptions", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["SetChartOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetChartAggregations", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["SetChartAggregations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateChartAggregations", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["UpdateChartAggregations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteChartAggregations", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["DeleteChartAggregations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FireAggregations", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["FireAggregations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FireAggregationsFailed", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["FireAggregationsFailed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FireAggregationSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["FireAggregationSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckAggregationResult", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["CheckAggregationResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckAggregationResultFinished", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["CheckAggregationResultFinished"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlushState", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["FlushState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetChartName", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["SetChartName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditAggregation", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["EditAggregation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditAggregationSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["EditAggregationSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditAggregationCanceled", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["EditAggregationCanceled"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetChartImage", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["SetChartImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetFailedAggregation", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["SetFailedAggregation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteFailedAggregation", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["DeleteFailedAggregation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TOPIC_ANIMATION", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["TOPIC_ANIMATION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TOPIC_LEDGEND", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["TOPIC_LEDGEND"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TOPIC_TITLE", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["TOPIC_TITLE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopicAnimation", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["TopicAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopicLedgend", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["TopicLedgend"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopicTitle", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["TopicTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_OPTIONS_FAIL", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["UPDATE_OPTIONS_FAIL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OPEN_EXPERT_MODE", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["OPEN_EXPERT_MODE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CLOSE_EXPERT_MODE", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["CLOSE_EXPERT_MODE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateOptionsFail", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["UpdateOptionsFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpenExpertMode", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["OpenExpertMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SET_ANIMATION_DISABLED", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["SET_ANIMATION_DISABLED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SET_ANIMATION", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["SET_ANIMATION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetAnimationDisabled", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["SetAnimationDisabled"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetAnimation", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["SetAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SET_LEDGEND_DISABLED", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["SET_LEDGEND_DISABLED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SET_LEDGEND_POSITION", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["SET_LEDGEND_POSITION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetLedgendDisabled", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["SetLedgendDisabled"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetLedgendPosition", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["SetLedgendPosition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SET_TITLE_DISABLED", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["SET_TITLE_DISABLED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SET_TITLE_POSITION", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["SET_TITLE_POSITION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SET_TITLE", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["SET_TITLE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetTitleDisabled", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["SetTitleDisabled"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetTitlePosition", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["SetTitlePosition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetTitle", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["SetTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LAYOUT_SET_PADDING", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["LAYOUT_SET_PADDING"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutSetPadding", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["LayoutSetPadding"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOAD_AGGREGATIONS", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["LOAD_AGGREGATIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOAD_AGGREGATIONS_FAIL", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["LOAD_AGGREGATIONS_FAIL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOAD_AGGREGATIONS_SUCCESS", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["LOAD_AGGREGATIONS_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SAVE_AGGREGATION", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["SAVE_AGGREGATION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SAVE_AGGREGATION_FAIL", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["SAVE_AGGREGATION_FAIL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SAVE_AGGREGATION_SUCCESS", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["SAVE_AGGREGATION_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DELETE_AGGREGATION", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["DELETE_AGGREGATION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DELETE_AGGREGATION_FAIL", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["DELETE_AGGREGATION_FAIL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DELETE_AGGREGATION_SUCCESS", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["DELETE_AGGREGATION_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_AGGREGATION", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["UPDATE_AGGREGATION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_AGGREGATION_FAIL", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["UPDATE_AGGREGATION_FAIL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_AGGREGATION_SUCCESS", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["UPDATE_AGGREGATION_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadAggregations", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["LoadAggregations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadAggregationsFail", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["LoadAggregationsFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadAggregationsSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["LoadAggregationsSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SaveAggregation", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["SaveAggregation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SaveAggregationSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["SaveAggregationSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SaveAggregationFail", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["SaveAggregationFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateAggregation", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["UpdateAggregation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateAggregationSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["UpdateAggregationSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateAggregationFail", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["UpdateAggregationFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteAggregation", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["DeleteAggregation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteAggregationSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["DeleteAggregationSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteAggregationFail", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["DeleteAggregationFail"]; });

/* harmony import */ var _effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./effects */ "./src/app/monitoring/chart-configurator/store/effects/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "effects", function() { return _effects__WEBPACK_IMPORTED_MODULE_2__["effects"]; });

/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectors */ "./src/app/monitoring/chart-configurator/store/selectors/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllBindingsState", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getAllBindingsState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllBindingsEntities", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getAllBindingsEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllBindingsLoaded", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getAllBindingsLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllBindingsLoading", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getAllBindingsLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBindingsLoadingState", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getBindingsLoadingState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBindingsSpaceAndOrg", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getBindingsSpaceAndOrg"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllChartIncreationState", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getAllChartIncreationState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getChartIncreationType", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getChartIncreationType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getChartIncreationOptions", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getChartIncreationOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getChartIncreationOptionsSet", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getChartIncreationOptionsSet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getChartIncreationAggregations", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getChartIncreationAggregations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getReadyForRequestAggregations", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getReadyForRequestAggregations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAggregationAndResponse", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getAggregationAndResponse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getReadyForRequestAggregationsArray", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getReadyForRequestAggregationsArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getReadyForRequestAggregationsId", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getReadyForRequestAggregationsId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getChartIncreationAggregationResponse", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getChartIncreationAggregationResponse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getChartIncreationAggregationResponseLoading", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getChartIncreationAggregationResponseLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getChartIncreationAggregationResponseLoaded", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getChartIncreationAggregationResponseLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getChartIncreationAggregationState", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getChartIncreationAggregationState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAggregationOnEdit", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getAggregationOnEdit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFailedAggregation", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getFailedAggregation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildChart", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["buildChart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasError", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["hasError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["ɵ0"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOptionsState", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getOptionsState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOptionEntities", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getOptionEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllOptions", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getAllOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllOptionsLoaded", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getAllOptionsLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllOptionsLoading", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getAllOptionsLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAggregationState", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getAggregationState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllAggregationEntities", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getAllAggregationEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllActualAggregations", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getAllActualAggregations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAggregationsLoaded", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getAggregationsLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAggregationsLoading", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getAggregationsLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAggregationSaveing", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getAggregationSaveing"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAggregationSaved", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getAggregationSaved"]; });







/***/ }),

/***/ "./src/app/monitoring/chart-configurator/store/reducers/aggregation.reducer.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/monitoring/chart-configurator/store/reducers/aggregation.reducer.ts ***!
  \*************************************************************************************/
/*! exports provided: initialState, reducer, getAggregationsLoading, getAggregationsLoaded, getAggregationsEntities, getAggregationSaveing, getAggregationSaved */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAggregationsLoading", function() { return getAggregationsLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAggregationsLoaded", function() { return getAggregationsLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAggregationsEntities", function() { return getAggregationsEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAggregationSaveing", function() { return getAggregationSaveing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAggregationSaved", function() { return getAggregationSaved; });
/* harmony import */ var _actions_aggregation_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/aggregation.action */ "./src/app/monitoring/chart-configurator/store/actions/aggregation.action.ts");
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
    entities: [],
    loaded: false,
    loading: false,
    saveing: false,
    saved: false,
    deleting: false,
    deleted: false
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_aggregation_action__WEBPACK_IMPORTED_MODULE_0__["LOAD_AGGREGATIONS_FAIL"]: {
            return __assign({}, state, { loading: false, loaded: false });
        }
        case _actions_aggregation_action__WEBPACK_IMPORTED_MODULE_0__["LOAD_AGGREGATIONS_SUCCESS"]: {
            return __assign({}, state, { loading: false, loaded: true, entities: action.payload });
        }
        case _actions_aggregation_action__WEBPACK_IMPORTED_MODULE_0__["SAVE_AGGREGATION_FAIL"]: {
            return __assign({}, state, { saveing: false, saved: false });
        }
        case _actions_aggregation_action__WEBPACK_IMPORTED_MODULE_0__["SAVE_AGGREGATION_SUCCESS"]: {
            var entities = state.entities.concat([action.payload]);
            return __assign({}, state, { entities: entities, saved: true, saveing: false });
        }
        case _actions_aggregation_action__WEBPACK_IMPORTED_MODULE_0__["UPDATE_AGGREGATION_FAIL"]: {
            return __assign({}, state, { saveing: false, saved: false });
        }
        case _actions_aggregation_action__WEBPACK_IMPORTED_MODULE_0__["UPDATE_AGGREGATION_SUCCESS"]: {
            var entities = state.entities.filter(function (k) { return k.id != action.payload.id; }).slice();
            entities = entities.concat([action.payload]);
            return __assign({}, state, { entities: entities, saved: true, saveing: false });
        }
        case _actions_aggregation_action__WEBPACK_IMPORTED_MODULE_0__["DELETE_AGGREGATION"]: {
            return __assign({}, state, { deleted: false, deleting: true });
        }
        case _actions_aggregation_action__WEBPACK_IMPORTED_MODULE_0__["DELETE_AGGREGATION_FAIL"]: {
            return __assign({}, state, { deleted: false, deleting: false });
        }
        case _actions_aggregation_action__WEBPACK_IMPORTED_MODULE_0__["DELETE_AGGREGATION_SUCCESS"]: {
            var entities = state.entities.filter(function (k) { return k.id != action.payload.id; });
            return __assign({}, state, { entities: entities, deleting: false, deleted: true });
        }
    }
    return state;
}
var getAggregationsLoading = function (state) {
    return state.loading;
};
var getAggregationsLoaded = function (state) { return state.loaded; };
var getAggregationsEntities = function (state) {
    return state.entities;
};
var getAggregationSaveing = function (state) { return state.saveing; };
var getAggregationSaved = function (state) { return state.saved; };


/***/ }),

/***/ "./src/app/monitoring/chart-configurator/store/reducers/chart.increation.reducer.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/monitoring/chart-configurator/store/reducers/chart.increation.reducer.ts ***!
  \******************************************************************************************/
/*! exports provided: initialState, reducer, getChartIncreationType, getChartIncreationOptions, getChartIncreationAggregations, getChartIncreationOptionsSet, getAggregationResponse, getAggregationsFiredLoaded, getAggregationsFiredLoading, getAggregationsState, getChartsReadyForRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChartIncreationType", function() { return getChartIncreationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChartIncreationOptions", function() { return getChartIncreationOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChartIncreationAggregations", function() { return getChartIncreationAggregations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChartIncreationOptionsSet", function() { return getChartIncreationOptionsSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAggregationResponse", function() { return getAggregationResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAggregationsFiredLoaded", function() { return getAggregationsFiredLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAggregationsFiredLoading", function() { return getAggregationsFiredLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAggregationsState", function() { return getAggregationsState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChartsReadyForRequest", function() { return getChartsReadyForRequest; });
/* harmony import */ var _actions_chart_increation_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/chart.increation.action */ "./src/app/monitoring/chart-configurator/store/actions/chart.increation.action.ts");
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
    type: '',
    option: {
        "name": "Testchart",
        "public": true,
        "options": {},
        "chartTypes": [
            "bar",
            "line"
        ]
    },
    failedAggregation: {},
    aggregations: {},
    optionsSet: false,
    aggregationResponse: [],
    aggregationLoading: false,
    aggregationLoaded: false,
    aggregationsState: {},
    chartName: '',
    encodedImage: ''
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    var _a, _b, _c;
    switch (action.type) {
        case _actions_chart_increation_action__WEBPACK_IMPORTED_MODULE_0__["SET_CHART_TYPE"]: {
            var type = action.payload;
            return __assign({}, state, { type: type });
        }
        case _actions_chart_increation_action__WEBPACK_IMPORTED_MODULE_0__["SET_CHART_OPTIONS"]: {
            var option = action.payload;
            return __assign({}, state, { option: option, optionsSet: true });
        }
        case _actions_chart_increation_action__WEBPACK_IMPORTED_MODULE_0__["SET_CHART_AGGREGATIONS"]: {
            var aggregations = action.payload;
            var id = action.id;
            return __assign({}, state, { aggregations: __assign({}, state.aggregations, (_a = {}, _a[id] = aggregations, _a)) });
        }
        case _actions_chart_increation_action__WEBPACK_IMPORTED_MODULE_0__["UPDATE_CHART_AGGREGATIONS"]: {
            var aggUuid = action.aggUuid;
            return __assign({}, state, { aggregations: __assign({}, state.aggregations, (_b = {}, _b[aggUuid] = action.payload, _b)) });
        }
        case _actions_chart_increation_action__WEBPACK_IMPORTED_MODULE_0__["DELETE_CHART_AGGREGATIONS"]: {
            var aggUuid = action.aggUuid;
            var aggregations = __assign({}, state.aggregations);
            delete aggregations[aggUuid];
            return __assign({}, state, { aggregations: aggregations });
        }
        case _actions_chart_increation_action__WEBPACK_IMPORTED_MODULE_0__["FIRE_AGGREGATIONS_FAILED"]: {
            return __assign({}, state, { aggregationLoading: false, aggregationLoaded: false });
        }
        case _actions_chart_increation_action__WEBPACK_IMPORTED_MODULE_0__["FIRE_AGGREGATIONS_SUCCESS"]: {
            return __assign({}, state, { aggregationLoading: false, aggregationLoaded: true, aggregationResponse: action.payload });
        }
        case _actions_chart_increation_action__WEBPACK_IMPORTED_MODULE_0__["CHECK_AGGREGATION_RESULT_FINISHED"]: {
            var aggregationsState = action.payload;
            return __assign({}, state, { aggregationsState: aggregationsState });
        }
        case _actions_chart_increation_action__WEBPACK_IMPORTED_MODULE_0__["FLUSH_STATE"]: {
            return initialState;
        }
        case _actions_chart_increation_action__WEBPACK_IMPORTED_MODULE_0__["SET_CHART_NAME"]: {
            return __assign({}, state, { chartName: action.payload });
        }
        case _actions_chart_increation_action__WEBPACK_IMPORTED_MODULE_0__["EDIT_AGGREGATION"]: {
            return __assign({}, state, { aggregationOnEdit: (_c = {}, _c[action.id] = action.payload, _c) });
        }
        case _actions_chart_increation_action__WEBPACK_IMPORTED_MODULE_0__["EDIT_AGGREGATION_SUCCESS"]: {
            return __assign({}, state, { aggregationOnEdit: undefined });
        }
        case _actions_chart_increation_action__WEBPACK_IMPORTED_MODULE_0__["EDIT_AGGREGATION_CANCELED"]: {
            return __assign({}, state, { aggregationOnEdit: undefined });
        }
        case _actions_chart_increation_action__WEBPACK_IMPORTED_MODULE_0__["SET_CHART_IMAGE"]: {
            return __assign({}, state, { encodedImage: action.encodedImage });
        }
        case _actions_chart_increation_action__WEBPACK_IMPORTED_MODULE_0__["SET_FAILED_AGGREGATION"]: {
            return __assign({}, state, { failedAggregation: action.payload });
        }
        case _actions_chart_increation_action__WEBPACK_IMPORTED_MODULE_0__["DELETE_FAILED_AGGREGATION"]: {
            return __assign({}, state, { failedAggregation: {} });
        }
    }
    return state;
}
function convertObject(options) {
    var _a;
    return _a = {},
        _a[options.id] = options,
        _a;
}
var getChartIncreationType = function (state) {
    return state.type;
};
var getChartIncreationOptions = function (state) {
    return state.option;
};
var getChartIncreationAggregations = function (state) {
    return state.aggregations;
};
var getChartIncreationOptionsSet = function (state) {
    return state.optionsSet;
};
var getAggregationResponse = function (state) {
    return state.aggregationResponse;
};
var getAggregationsFiredLoaded = function (state) {
    return state.aggregationLoaded;
};
var getAggregationsFiredLoading = function (state) {
    return state.aggregationLoading;
};
var getAggregationsState = function (state) {
    return state.aggregationsState;
};
var getChartsReadyForRequest = function (chartIncreationState) {
    var chartIncreation = chartIncreationState.aggregations;
    return Object.keys(chartIncreation)
        .filter(function (id) { return chartIncreation[id].appId; })
        .reduce(function (prev, curr, i, arr) {
        var _a, _b;
        if (i == 0) {
            return _a = {}, _a[curr] = chartIncreation[curr], _a;
        }
        else {
            return __assign({}, prev, (_b = {}, _b[curr] = chartIncreation[curr], _b));
        }
    }, {});
};


/***/ }),

/***/ "./src/app/monitoring/chart-configurator/store/reducers/index.ts":
/*!***********************************************************************!*\
  !*** ./src/app/monitoring/chart-configurator/store/reducers/index.ts ***!
  \***********************************************************************/
/*! exports provided: reducers, getChartState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChartState", function() { return getChartState; });
/* harmony import */ var _options_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options.reducer */ "./src/app/monitoring/chart-configurator/store/reducers/options.reducer.ts");
/* harmony import */ var _chart_increation_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chart.increation.reducer */ "./src/app/monitoring/chart-configurator/store/reducers/chart.increation.reducer.ts");
/* harmony import */ var _aggregation_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aggregation.reducer */ "./src/app/monitoring/chart-configurator/store/reducers/aggregation.reducer.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");




var reducers = {
    options: _options_reducer__WEBPACK_IMPORTED_MODULE_0__["reducer"],
    chartIncreation: _chart_increation_reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"],
    aggregations: _aggregation_reducer__WEBPACK_IMPORTED_MODULE_2__["reducer"],
};
var getChartState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createFeatureSelector"])('charts');


/***/ }),

/***/ "./src/app/monitoring/chart-configurator/store/reducers/options.reducer.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/monitoring/chart-configurator/store/reducers/options.reducer.ts ***!
  \*********************************************************************************/
/*! exports provided: initialState, reducer, getOptionsLoading, getOptionsLoaded, getOptionsEntities, ɵ0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOptionsLoading", function() { return getOptionsLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOptionsLoaded", function() { return getOptionsLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOptionsEntities", function() { return getOptionsEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony import */ var _actions_options_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/options.action */ "./src/app/monitoring/chart-configurator/store/actions/options.action.ts");
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
    entities: {},
    loaded: false,
    loading: false
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_options_action__WEBPACK_IMPORTED_MODULE_0__["LOAD_OPTIONS"]: {
            return __assign({}, state, { loading: true });
        }
        case _actions_options_action__WEBPACK_IMPORTED_MODULE_0__["LOAD_OPTIONS_SUCCESS"]: {
            // trim null values return by kotlin case chartjs can't compute them
            var data = clean(action.payload);
            var entities = buildObject(data, state);
            return __assign({}, state, { entities: entities, loading: false, loaded: true });
        }
        case _actions_options_action__WEBPACK_IMPORTED_MODULE_0__["LOAD_OPTIONS_FAIL"]: {
            return __assign({}, state, { loading: false, loaded: false });
        }
    }
    return state;
}
var buildObject = function reduceData(data, state) {
    return data.reduce(function (entities, option) {
        var _a;
        return __assign({}, entities, (_a = {}, _a[option.id] = option, _a));
    }, __assign({}, state.entities));
};
var ɵ0 = buildObject;
function clean(entities) {
    return entities.map(function (entity) {
        return __assign({}, entity, { options: cleanObject(entity.options) });
    });
}
function cleanObject(obj) {
    var returnVal = {};
    for (var propName in obj) {
        if (!(obj[propName] === null)) {
            returnVal[propName] = obj[propName];
        }
    }
    return returnVal;
}
var getOptionsLoading = function (state) { return state.loading; };
var getOptionsLoaded = function (state) { return state.loaded; };
var getOptionsEntities = function (state) { return state.entities; };



/***/ }),

/***/ "./src/app/monitoring/chart-configurator/store/selectors/aggregation.selector.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/monitoring/chart-configurator/store/selectors/aggregation.selector.ts ***!
  \***************************************************************************************/
/*! exports provided: getAggregationState, getAllAggregationEntities, getAllActualAggregations, getAggregationsLoaded, getAggregationsLoading, getAggregationSaveing, getAggregationSaved */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAggregationState", function() { return getAggregationState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllAggregationEntities", function() { return getAllAggregationEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllActualAggregations", function() { return getAllActualAggregations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAggregationsLoaded", function() { return getAggregationsLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAggregationsLoading", function() { return getAggregationsLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAggregationSaveing", function() { return getAggregationSaveing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAggregationSaved", function() { return getAggregationSaved; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/index */ "./src/app/monitoring/chart-configurator/store/reducers/index.ts");
/* harmony import */ var _reducers_aggregation_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/aggregation.reducer */ "./src/app/monitoring/chart-configurator/store/reducers/aggregation.reducer.ts");



var getAggregationState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_reducers_index__WEBPACK_IMPORTED_MODULE_1__["getChartState"], function (state) { return state.aggregations; });
var getAllAggregationEntities = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAggregationState, _reducers_aggregation_reducer__WEBPACK_IMPORTED_MODULE_2__["getAggregationsEntities"]);
var getAllActualAggregations = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAllAggregationEntities, function (state) { return state.map(function (k) { return k.actualAggregation; }); });
var getAggregationsLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAggregationState, _reducers_aggregation_reducer__WEBPACK_IMPORTED_MODULE_2__["getAggregationsLoaded"]);
var getAggregationsLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAggregationState, _reducers_aggregation_reducer__WEBPACK_IMPORTED_MODULE_2__["getAggregationsLoading"]);
var getAggregationSaveing = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAggregationState, _reducers_aggregation_reducer__WEBPACK_IMPORTED_MODULE_2__["getAggregationSaveing"]);
var getAggregationSaved = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAggregationState, _reducers_aggregation_reducer__WEBPACK_IMPORTED_MODULE_2__["getAggregationSaved"]);


/***/ }),

/***/ "./src/app/monitoring/chart-configurator/store/selectors/chart.increation.selector.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/monitoring/chart-configurator/store/selectors/chart.increation.selector.ts ***!
  \********************************************************************************************/
/*! exports provided: getAllChartIncreationState, getChartIncreationType, getChartIncreationOptions, getChartIncreationOptionsSet, getChartIncreationAggregations, getReadyForRequestAggregations, getAggregationAndResponse, getReadyForRequestAggregationsArray, getReadyForRequestAggregationsId, getChartIncreationAggregationResponse, getChartIncreationAggregationResponseLoading, getChartIncreationAggregationResponseLoaded, getChartIncreationAggregationState, getAggregationOnEdit, getFailedAggregation, buildChart, hasError, ɵ0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllChartIncreationState", function() { return getAllChartIncreationState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChartIncreationType", function() { return getChartIncreationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChartIncreationOptions", function() { return getChartIncreationOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChartIncreationOptionsSet", function() { return getChartIncreationOptionsSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChartIncreationAggregations", function() { return getChartIncreationAggregations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReadyForRequestAggregations", function() { return getReadyForRequestAggregations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAggregationAndResponse", function() { return getAggregationAndResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReadyForRequestAggregationsArray", function() { return getReadyForRequestAggregationsArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReadyForRequestAggregationsId", function() { return getReadyForRequestAggregationsId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChartIncreationAggregationResponse", function() { return getChartIncreationAggregationResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChartIncreationAggregationResponseLoading", function() { return getChartIncreationAggregationResponseLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChartIncreationAggregationResponseLoaded", function() { return getChartIncreationAggregationResponseLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChartIncreationAggregationState", function() { return getChartIncreationAggregationState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAggregationOnEdit", function() { return getAggregationOnEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFailedAggregation", function() { return getFailedAggregation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildChart", function() { return buildChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasError", function() { return hasError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/index */ "./src/app/monitoring/chart-configurator/store/reducers/index.ts");
/* harmony import */ var _reducers_chart_increation_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/chart.increation.reducer */ "./src/app/monitoring/chart-configurator/store/reducers/chart.increation.reducer.ts");



var getAllChartIncreationState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_reducers_index__WEBPACK_IMPORTED_MODULE_1__["getChartState"], function (state) { return state.chartIncreation; });
var getChartIncreationType = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAllChartIncreationState, _reducers_chart_increation_reducer__WEBPACK_IMPORTED_MODULE_2__["getChartIncreationType"]);
var getChartIncreationOptions = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAllChartIncreationState, _reducers_chart_increation_reducer__WEBPACK_IMPORTED_MODULE_2__["getChartIncreationOptions"]);
var getChartIncreationOptionsSet = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAllChartIncreationState, _reducers_chart_increation_reducer__WEBPACK_IMPORTED_MODULE_2__["getChartIncreationOptionsSet"]);
var getChartIncreationAggregations = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAllChartIncreationState, _reducers_chart_increation_reducer__WEBPACK_IMPORTED_MODULE_2__["getChartIncreationAggregations"]);
var getReadyForRequestAggregations = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAllChartIncreationState, _reducers_chart_increation_reducer__WEBPACK_IMPORTED_MODULE_2__["getChartsReadyForRequest"]);
var getAggregationAndResponse = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAllChartIncreationState, function (state) {
    var aggregation = Array.from(new Map(Object.entries(_reducers_chart_increation_reducer__WEBPACK_IMPORTED_MODULE_2__["getChartsReadyForRequest"](state)))[Symbol.iterator]()).map(function (k) { return k[1]; });
    var aggregationResponse = state.aggregationResponse;
    if (aggregation.length == aggregationResponse.length) {
        var returnVal = aggregation.map(function (k, i) {
            return { aggregation: k, response: aggregationResponse[i] };
        });
        return returnVal;
    }
    return [];
});
var getReadyForRequestAggregationsArray = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getReadyForRequestAggregations, function (readyObjects) {
    return Array.from(new Map(Object.entries(readyObjects))[Symbol.iterator]()).map(function (k) { return k[1]; });
});
var getReadyForRequestAggregationsId = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAllChartIncreationState, function (chartIncreationState) {
    var chartIncreation = chartIncreationState.aggregations;
    return Object.keys(chartIncreation)
        .filter(function (id) { return chartIncreation[id].appId; })
        .map(function (id) { return id; });
});
var getChartIncreationAggregationResponse = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAllChartIncreationState, _reducers_chart_increation_reducer__WEBPACK_IMPORTED_MODULE_2__["getAggregationResponse"]);
var getChartIncreationAggregationResponseLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAllChartIncreationState, _reducers_chart_increation_reducer__WEBPACK_IMPORTED_MODULE_2__["getAggregationsFiredLoading"]);
var getChartIncreationAggregationResponseLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAllChartIncreationState, _reducers_chart_increation_reducer__WEBPACK_IMPORTED_MODULE_2__["getAggregationsFiredLoaded"]);
var getChartIncreationAggregationState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAllChartIncreationState, _reducers_chart_increation_reducer__WEBPACK_IMPORTED_MODULE_2__["getAggregationsState"]);
var getAggregationOnEdit = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAllChartIncreationState, function (state) { return state.aggregationOnEdit; });
var getFailedAggregation = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAllChartIncreationState, function (state) {
    return state.failedAggregation;
});
var buildChart = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAllChartIncreationState, function (state) {
    var option = state.option;
    if (state &&
        state.type &&
        option != {} &&
        state.aggregations &&
        state.chartName != '' &&
        Object.keys(state.aggregations).length > 0 &&
        !hasError(state.aggregationsState) &&
        state.encodedImage) {
        var aggregations = extractArray(state.aggregations);
        return {
            name: state.chartName,
            type: state.type,
            option: state.option,
            aggregations: aggregations,
            authScope: {},
            encodedImage: state.encodedImage
        };
    }
    return {};
});
var extractArray = function (aggs) {
    return Array.from(new Map(Object.entries(aggs))[Symbol.iterator]()).map(function (k) { return k[1]; });
};
var ɵ0 = extractArray;
var hasError = function (state) {
    return (Array.from(new Map(Object.entries(state))[Symbol.iterator]())
        .map(function (k) { return k[1]; })
        .filter(function (type) { return type != 'ok'; }).length > 0);
};



/***/ }),

/***/ "./src/app/monitoring/chart-configurator/store/selectors/index.ts":
/*!************************************************************************!*\
  !*** ./src/app/monitoring/chart-configurator/store/selectors/index.ts ***!
  \************************************************************************/
/*! exports provided: getAllBindingsState, getAllBindingsEntities, getAllBindingsLoaded, getAllBindingsLoading, getBindingsLoadingState, getBindingsSpaceAndOrg, getAllChartIncreationState, getChartIncreationType, getChartIncreationOptions, getChartIncreationOptionsSet, getChartIncreationAggregations, getReadyForRequestAggregations, getAggregationAndResponse, getReadyForRequestAggregationsArray, getReadyForRequestAggregationsId, getChartIncreationAggregationResponse, getChartIncreationAggregationResponseLoading, getChartIncreationAggregationResponseLoaded, getChartIncreationAggregationState, getAggregationOnEdit, getFailedAggregation, buildChart, hasError, ɵ0, getOptionsState, getOptionEntities, getAllOptions, getAllOptionsLoaded, getAllOptionsLoading, getAggregationState, getAllAggregationEntities, getAllActualAggregations, getAggregationsLoaded, getAggregationsLoading, getAggregationSaveing, getAggregationSaved */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _options_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options.selector */ "./src/app/monitoring/chart-configurator/store/selectors/options.selector.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOptionsState", function() { return _options_selector__WEBPACK_IMPORTED_MODULE_0__["getOptionsState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOptionEntities", function() { return _options_selector__WEBPACK_IMPORTED_MODULE_0__["getOptionEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllOptions", function() { return _options_selector__WEBPACK_IMPORTED_MODULE_0__["getAllOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllOptionsLoaded", function() { return _options_selector__WEBPACK_IMPORTED_MODULE_0__["getAllOptionsLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllOptionsLoading", function() { return _options_selector__WEBPACK_IMPORTED_MODULE_0__["getAllOptionsLoading"]; });

/* harmony import */ var _shared_store_selectors_bindings_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/store/selectors/bindings.selector */ "./src/app/monitoring/shared/store/selectors/bindings.selector.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllBindingsState", function() { return _shared_store_selectors_bindings_selector__WEBPACK_IMPORTED_MODULE_1__["getAllBindingsState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllBindingsEntities", function() { return _shared_store_selectors_bindings_selector__WEBPACK_IMPORTED_MODULE_1__["getAllBindingsEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllBindingsLoaded", function() { return _shared_store_selectors_bindings_selector__WEBPACK_IMPORTED_MODULE_1__["getAllBindingsLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllBindingsLoading", function() { return _shared_store_selectors_bindings_selector__WEBPACK_IMPORTED_MODULE_1__["getAllBindingsLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBindingsLoadingState", function() { return _shared_store_selectors_bindings_selector__WEBPACK_IMPORTED_MODULE_1__["getBindingsLoadingState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBindingsSpaceAndOrg", function() { return _shared_store_selectors_bindings_selector__WEBPACK_IMPORTED_MODULE_1__["getBindingsSpaceAndOrg"]; });

/* harmony import */ var _chart_increation_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chart.increation.selector */ "./src/app/monitoring/chart-configurator/store/selectors/chart.increation.selector.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllChartIncreationState", function() { return _chart_increation_selector__WEBPACK_IMPORTED_MODULE_2__["getAllChartIncreationState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getChartIncreationType", function() { return _chart_increation_selector__WEBPACK_IMPORTED_MODULE_2__["getChartIncreationType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getChartIncreationOptions", function() { return _chart_increation_selector__WEBPACK_IMPORTED_MODULE_2__["getChartIncreationOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getChartIncreationOptionsSet", function() { return _chart_increation_selector__WEBPACK_IMPORTED_MODULE_2__["getChartIncreationOptionsSet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getChartIncreationAggregations", function() { return _chart_increation_selector__WEBPACK_IMPORTED_MODULE_2__["getChartIncreationAggregations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getReadyForRequestAggregations", function() { return _chart_increation_selector__WEBPACK_IMPORTED_MODULE_2__["getReadyForRequestAggregations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAggregationAndResponse", function() { return _chart_increation_selector__WEBPACK_IMPORTED_MODULE_2__["getAggregationAndResponse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getReadyForRequestAggregationsArray", function() { return _chart_increation_selector__WEBPACK_IMPORTED_MODULE_2__["getReadyForRequestAggregationsArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getReadyForRequestAggregationsId", function() { return _chart_increation_selector__WEBPACK_IMPORTED_MODULE_2__["getReadyForRequestAggregationsId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getChartIncreationAggregationResponse", function() { return _chart_increation_selector__WEBPACK_IMPORTED_MODULE_2__["getChartIncreationAggregationResponse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getChartIncreationAggregationResponseLoading", function() { return _chart_increation_selector__WEBPACK_IMPORTED_MODULE_2__["getChartIncreationAggregationResponseLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getChartIncreationAggregationResponseLoaded", function() { return _chart_increation_selector__WEBPACK_IMPORTED_MODULE_2__["getChartIncreationAggregationResponseLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getChartIncreationAggregationState", function() { return _chart_increation_selector__WEBPACK_IMPORTED_MODULE_2__["getChartIncreationAggregationState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAggregationOnEdit", function() { return _chart_increation_selector__WEBPACK_IMPORTED_MODULE_2__["getAggregationOnEdit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFailedAggregation", function() { return _chart_increation_selector__WEBPACK_IMPORTED_MODULE_2__["getFailedAggregation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildChart", function() { return _chart_increation_selector__WEBPACK_IMPORTED_MODULE_2__["buildChart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasError", function() { return _chart_increation_selector__WEBPACK_IMPORTED_MODULE_2__["hasError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return _chart_increation_selector__WEBPACK_IMPORTED_MODULE_2__["ɵ0"]; });

/* harmony import */ var _aggregation_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aggregation.selector */ "./src/app/monitoring/chart-configurator/store/selectors/aggregation.selector.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAggregationState", function() { return _aggregation_selector__WEBPACK_IMPORTED_MODULE_3__["getAggregationState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllAggregationEntities", function() { return _aggregation_selector__WEBPACK_IMPORTED_MODULE_3__["getAllAggregationEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllActualAggregations", function() { return _aggregation_selector__WEBPACK_IMPORTED_MODULE_3__["getAllActualAggregations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAggregationsLoaded", function() { return _aggregation_selector__WEBPACK_IMPORTED_MODULE_3__["getAggregationsLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAggregationsLoading", function() { return _aggregation_selector__WEBPACK_IMPORTED_MODULE_3__["getAggregationsLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAggregationSaveing", function() { return _aggregation_selector__WEBPACK_IMPORTED_MODULE_3__["getAggregationSaveing"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAggregationSaved", function() { return _aggregation_selector__WEBPACK_IMPORTED_MODULE_3__["getAggregationSaved"]; });







/***/ }),

/***/ "./src/app/monitoring/chart-configurator/store/selectors/options.selector.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/monitoring/chart-configurator/store/selectors/options.selector.ts ***!
  \***********************************************************************************/
/*! exports provided: getOptionsState, getOptionEntities, getAllOptions, getAllOptionsLoaded, getAllOptionsLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOptionsState", function() { return getOptionsState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOptionEntities", function() { return getOptionEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllOptions", function() { return getAllOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllOptionsLoaded", function() { return getAllOptionsLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllOptionsLoading", function() { return getAllOptionsLoading; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var app_monitoring_chart_configurator_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/monitoring/chart-configurator/store */ "./src/app/monitoring/chart-configurator/store/index.ts");
/* harmony import */ var _reducers_options_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/options.reducer */ "./src/app/monitoring/chart-configurator/store/reducers/options.reducer.ts");



/*
 * Options State
 */
var getOptionsState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(app_monitoring_chart_configurator_store__WEBPACK_IMPORTED_MODULE_1__["getChartState"], function (state) { return state.options; });
var getOptionEntities = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getOptionsState, _reducers_options_reducer__WEBPACK_IMPORTED_MODULE_2__["getOptionsEntities"]);
var getAllOptions = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getOptionEntities, function (entities) {
    return Object.keys(entities).map(function (id) { return entities[id]; });
});
var getAllOptionsLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getOptionsState, _reducers_options_reducer__WEBPACK_IMPORTED_MODULE_2__["getOptionsLoaded"]);
var getAllOptionsLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getOptionsState, _reducers_options_reducer__WEBPACK_IMPORTED_MODULE_2__["getOptionsLoading"]);


/***/ }),

/***/ "./src/app/monitoring/monitoring.module.ts":
/*!*************************************************!*\
  !*** ./src/app/monitoring/monitoring.module.ts ***!
  \*************************************************/
/*! exports provided: metaReducers, bootstrapDeps, MonitoringModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bootstrapDeps", function() { return bootstrapDeps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonitoringModule", function() { return MonitoringModule; });
/* harmony import */ var ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-monaco-editor */ "./node_modules/ngx-monaco-editor/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngrx-store-freeze */ "./node_modules/ngrx-store-freeze/index.js");
/* harmony import */ var ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _environments_runtime_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/runtime-environment */ "./src/environments/runtime-environment.ts");





// Store Freeze restricts every mutation on the Store itself. But we want this to be a dev only thing
var metaReducers = !_environments_runtime_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production
    ? [ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_3__["storeFreeze"]]
    : [];
var monacoEditorConfig = {
    baseUrl: '/app/assets'
};
var bootstrapDeps = [
    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTabsetModule"],
    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownModule"].forRoot(),
    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCollapseModule"].forRoot(),
    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTooltipModule"].forRoot(),
    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModalModule"].forRoot(),
    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPopoverModule"].forRoot(),
    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTabsetModule"].forRoot(),
    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPaginationModule"].forRoot(),
    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbButtonsModule"].forRoot(),
    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbAccordionModule"].forRoot(),
    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbAlertModule"].forRoot(),
    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDatepickerModule"].forRoot(),
    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTimepickerModule"].forRoot()
];
var MonitoringModule = /** @class */ (function () {
    function MonitoringModule() {
    }
    return MonitoringModule;
}());



/***/ }),

/***/ "./src/app/monitoring/shared/services/cfauth-param.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/monitoring/shared/services/cfauth-param.service.ts ***!
  \********************************************************************/
/*! exports provided: CfAuthParameterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CfAuthParameterService", function() { return CfAuthParameterService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _store_selectors_bindings_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/selectors/bindings.selector */ "./src/app/monitoring/shared/store/selectors/bindings.selector.ts");
/* harmony import */ var _chart_configurator_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../chart-configurator/store */ "./src/app/monitoring/chart-configurator/store/index.ts");
/* harmony import */ var _environments_runtime_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/runtime-environment */ "./src/environments/runtime-environment.ts");
/* harmony import */ var _core_services_http_get_params_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/http-get-params.service */ "./src/app/core/services/http-get-params.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _chart_configurator_chart_configurator_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../chart-configurator/chart-configurator.module */ "./src/app/monitoring/chart-configurator/chart-configurator.module.ts");










var CfAuthParameterService = /** @class */ (function () {
    function CfAuthParameterService(paramService) {
        this.paramService = paramService;
    }
    CfAuthParameterService.prototype.createCfAuthParameters = function () {
        var _this = this;
        return this.createCfAuthScope().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (authScope) {
            return _this.paramService.convertParams(authScope);
        }));
    };
    CfAuthParameterService.prototype.createCfAuthScope = function () {
        var serviceInstanceId = _environments_runtime_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serviceInstanceId;
        return this.orgAndSpace$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (orgAndSpace) {
            return {
                type: 'cf',
                orgId: orgAndSpace.org,
                spaceId: orgAndSpace.space,
                serviceInstanceId: serviceInstanceId
            };
        }));
    };
    CfAuthParameterService.prototype.construct = function (store) {
        var _this = this;
        if (!this.store) {
            this.store = store;
            this.orgAndSpace$ = store.select(_store_selectors_bindings_selector__WEBPACK_IMPORTED_MODULE_1__["getBindingsLoadingState"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])(function (state) {
                // dispatch Event if
                !state.loaded &&
                    !state.loading &&
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["timer"])(8000).subscribe(function (k) { return _this.store.dispatch(new _chart_configurator_store__WEBPACK_IMPORTED_MODULE_2__["LoadBindings"]()); });
                return state.loaded == true;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])(function (k) { return store.select(_store_selectors_bindings_selector__WEBPACK_IMPORTED_MODULE_1__["getBindingsSpaceAndOrg"]); }));
        }
        return this;
    };
    CfAuthParameterService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_6__["defineInjectable"]({ factory: function CfAuthParameterService_Factory() { return new CfAuthParameterService(_angular_core__WEBPACK_IMPORTED_MODULE_6__["inject"](_core_services_http_get_params_service__WEBPACK_IMPORTED_MODULE_4__["HttpGetParamsService"])); }, token: CfAuthParameterService, providedIn: _chart_configurator_chart_configurator_module__WEBPACK_IMPORTED_MODULE_7__["ChartConfiguratorModule"] });
    return CfAuthParameterService;
}());



/***/ }),

/***/ "./src/app/monitoring/shared/store/actions/binding.action.ts":
/*!*******************************************************************!*\
  !*** ./src/app/monitoring/shared/store/actions/binding.action.ts ***!
  \*******************************************************************/
/*! exports provided: LOAD_BINDINGS, LOAD_BINDINGS_SUCCESS, LOAD_BINDINGS_FAIL, LoadBindings, LoadBindingsSuccess, LoadBindingsFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_BINDINGS", function() { return LOAD_BINDINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_BINDINGS_SUCCESS", function() { return LOAD_BINDINGS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_BINDINGS_FAIL", function() { return LOAD_BINDINGS_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadBindings", function() { return LoadBindings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadBindingsSuccess", function() { return LoadBindingsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadBindingsFail", function() { return LoadBindingsFail; });
var LOAD_BINDINGS = '[Configurator] Load Bindings';
var LOAD_BINDINGS_SUCCESS = '[Configurator] Load Bindings Success';
var LOAD_BINDINGS_FAIL = '[Configurator] Load Bindings Fail';
var LoadBindings = /** @class */ (function () {
    function LoadBindings() {
        this.type = LOAD_BINDINGS;
    }
    return LoadBindings;
}());

var LoadBindingsSuccess = /** @class */ (function () {
    function LoadBindingsSuccess(payload) {
        this.payload = payload;
        this.type = LOAD_BINDINGS_SUCCESS;
    }
    return LoadBindingsSuccess;
}());

var LoadBindingsFail = /** @class */ (function () {
    function LoadBindingsFail(payload) {
        this.payload = payload;
        this.type = LOAD_BINDINGS_FAIL;
    }
    return LoadBindingsFail;
}());



/***/ }),

/***/ "./src/app/monitoring/shared/store/actions/chart.actions.ts":
/*!******************************************************************!*\
  !*** ./src/app/monitoring/shared/store/actions/chart.actions.ts ***!
  \******************************************************************/
/*! exports provided: SAVE_CHART, SAVE_CHART_SUCCESS, SAVE_CHART_FAIL, DELETE_CHART, DELETE_CHART_SUCCESS, DELETE_CHART_FAIL, LOAD_CHARTS, LOAD_CHARTS_SUCCESS, LOAD_CHARTS_FAIL, FIRE_AGGREGATION_REQUEST, FIRE_PANEL_AGGREGATION_REQUEST, FIRE_AGGREGATION_REQUEST_FAIL, FIRE_AGGREGATION_REQUEST_SUCCESS, SaveChart, SaveChartSuccess, SaveChartFail, DeleteChart, DeleteChartSuccess, DeleteChartFail, LoadCharts, LoadChartsSuccess, LoadChartsFail, FireAggregationRequest, FirePanelAggregationRequest, FireAggregationRequestSuccess, FireAggregationRequestFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_CHART", function() { return SAVE_CHART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_CHART_SUCCESS", function() { return SAVE_CHART_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_CHART_FAIL", function() { return SAVE_CHART_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_CHART", function() { return DELETE_CHART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_CHART_SUCCESS", function() { return DELETE_CHART_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_CHART_FAIL", function() { return DELETE_CHART_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_CHARTS", function() { return LOAD_CHARTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_CHARTS_SUCCESS", function() { return LOAD_CHARTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_CHARTS_FAIL", function() { return LOAD_CHARTS_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIRE_AGGREGATION_REQUEST", function() { return FIRE_AGGREGATION_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIRE_PANEL_AGGREGATION_REQUEST", function() { return FIRE_PANEL_AGGREGATION_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIRE_AGGREGATION_REQUEST_FAIL", function() { return FIRE_AGGREGATION_REQUEST_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIRE_AGGREGATION_REQUEST_SUCCESS", function() { return FIRE_AGGREGATION_REQUEST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveChart", function() { return SaveChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveChartSuccess", function() { return SaveChartSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveChartFail", function() { return SaveChartFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteChart", function() { return DeleteChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteChartSuccess", function() { return DeleteChartSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteChartFail", function() { return DeleteChartFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadCharts", function() { return LoadCharts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadChartsSuccess", function() { return LoadChartsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadChartsFail", function() { return LoadChartsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FireAggregationRequest", function() { return FireAggregationRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirePanelAggregationRequest", function() { return FirePanelAggregationRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FireAggregationRequestSuccess", function() { return FireAggregationRequestSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FireAggregationRequestFail", function() { return FireAggregationRequestFail; });
var SAVE_CHART = '[Chart] Save Chart';
var SAVE_CHART_SUCCESS = '[Chart] Save Chart Success';
var SAVE_CHART_FAIL = '[Chart] Save Chart Fail';
var DELETE_CHART = '[Chart] Delete Chart';
var DELETE_CHART_SUCCESS = '[Chart] Delete Chart success';
var DELETE_CHART_FAIL = '[Chart] Delete Chart fail';
var LOAD_CHARTS = '[Chart] Load Charts';
var LOAD_CHARTS_SUCCESS = '[Chart] Load Charts Success';
var LOAD_CHARTS_FAIL = '[Chart] Load Charts Failed';
var FIRE_AGGREGATION_REQUEST = '[Chart] Fire Aggregation Request';
var FIRE_PANEL_AGGREGATION_REQUEST = '[Chart] Fire Panel Aggregation Request';
var FIRE_AGGREGATION_REQUEST_FAIL = '[Chart] Fire Aggregation Request Fail';
var FIRE_AGGREGATION_REQUEST_SUCCESS = '[Chart] Fire Aggregation Request Success';
var SaveChart = /** @class */ (function () {
    function SaveChart(payload) {
        this.payload = payload;
        this.type = SAVE_CHART;
    }
    return SaveChart;
}());

var SaveChartSuccess = /** @class */ (function () {
    function SaveChartSuccess(payload) {
        this.payload = payload;
        this.type = SAVE_CHART_SUCCESS;
    }
    return SaveChartSuccess;
}());

var SaveChartFail = /** @class */ (function () {
    function SaveChartFail() {
        this.type = SAVE_CHART_FAIL;
    }
    return SaveChartFail;
}());

var DeleteChart = /** @class */ (function () {
    // payload must be a ledig, existing chart id
    function DeleteChart(payload) {
        this.payload = payload;
        this.type = DELETE_CHART;
    }
    return DeleteChart;
}());

var DeleteChartSuccess = /** @class */ (function () {
    function DeleteChartSuccess(payload) {
        this.payload = payload;
        this.type = DELETE_CHART_SUCCESS;
    }
    return DeleteChartSuccess;
}());

var DeleteChartFail = /** @class */ (function () {
    function DeleteChartFail() {
        this.type = DELETE_CHART_FAIL;
    }
    return DeleteChartFail;
}());

var LoadCharts = /** @class */ (function () {
    function LoadCharts() {
        this.type = LOAD_CHARTS;
    }
    return LoadCharts;
}());

var LoadChartsSuccess = /** @class */ (function () {
    function LoadChartsSuccess(payload) {
        this.payload = payload;
        this.type = LOAD_CHARTS_SUCCESS;
    }
    return LoadChartsSuccess;
}());

var LoadChartsFail = /** @class */ (function () {
    function LoadChartsFail() {
        this.type = LOAD_CHARTS_FAIL;
    }
    return LoadChartsFail;
}());

var FireAggregationRequest = /** @class */ (function () {
    function FireAggregationRequest(payload, id) {
        this.payload = payload;
        this.id = id;
        this.type = FIRE_AGGREGATION_REQUEST;
    }
    return FireAggregationRequest;
}());

var FirePanelAggregationRequest = /** @class */ (function () {
    function FirePanelAggregationRequest(payload, range) {
        this.payload = payload;
        this.range = range;
        this.type = FIRE_PANEL_AGGREGATION_REQUEST;
    }
    return FirePanelAggregationRequest;
}());

var FireAggregationRequestSuccess = /** @class */ (function () {
    function FireAggregationRequestSuccess(payload) {
        this.payload = payload;
        this.type = FIRE_AGGREGATION_REQUEST_SUCCESS;
    }
    return FireAggregationRequestSuccess;
}());

var FireAggregationRequestFail = /** @class */ (function () {
    function FireAggregationRequestFail() {
        this.type = FIRE_AGGREGATION_REQUEST_FAIL;
    }
    return FireAggregationRequestFail;
}());



/***/ }),

/***/ "./src/app/monitoring/shared/store/actions/panel.action.ts":
/*!*****************************************************************!*\
  !*** ./src/app/monitoring/shared/store/actions/panel.action.ts ***!
  \*****************************************************************/
/*! exports provided: LOAD_PANELS, LOAD_PANELS_SUCCESS, LOAD_PANELS_FAILED, SAVE_PANEL, SAVE_PANEL_SUCCESS, SAVE_PANEL_FAILED, UPDATE_PANEL, DELETE_PANEL, LoadPanels, LoadPanelsSuccess, LoadPanelsFailed, SavePanel, SavePanelSuccess, SavePanelFailed, UpdatePanel, DeletePanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_PANELS", function() { return LOAD_PANELS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_PANELS_SUCCESS", function() { return LOAD_PANELS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_PANELS_FAILED", function() { return LOAD_PANELS_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_PANEL", function() { return SAVE_PANEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_PANEL_SUCCESS", function() { return SAVE_PANEL_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_PANEL_FAILED", function() { return SAVE_PANEL_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_PANEL", function() { return UPDATE_PANEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_PANEL", function() { return DELETE_PANEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadPanels", function() { return LoadPanels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadPanelsSuccess", function() { return LoadPanelsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadPanelsFailed", function() { return LoadPanelsFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavePanel", function() { return SavePanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavePanelSuccess", function() { return SavePanelSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavePanelFailed", function() { return SavePanelFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePanel", function() { return UpdatePanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeletePanel", function() { return DeletePanel; });
var LOAD_PANELS = '[Shared Module] Load Panels';
var LOAD_PANELS_SUCCESS = '[Shared Module] Load Panels Succes';
var LOAD_PANELS_FAILED = '[Shared Module] Load Panels Failed';
var SAVE_PANEL = '[Shared Module] Save Panel';
var SAVE_PANEL_SUCCESS = '[Shared Module] Save Panel Succes';
var SAVE_PANEL_FAILED = '[Shared Module] Save Panel Failed';
var UPDATE_PANEL = '[Shared Module] Update Panel';
var DELETE_PANEL = '[Shared Module] Delete Panel';
var LoadPanels = /** @class */ (function () {
    function LoadPanels() {
        this.type = LOAD_PANELS;
    }
    return LoadPanels;
}());

var LoadPanelsSuccess = /** @class */ (function () {
    function LoadPanelsSuccess(payload) {
        this.payload = payload;
        this.type = LOAD_PANELS_SUCCESS;
    }
    return LoadPanelsSuccess;
}());

var LoadPanelsFailed = /** @class */ (function () {
    function LoadPanelsFailed() {
        this.type = LOAD_PANELS_FAILED;
    }
    return LoadPanelsFailed;
}());

var SavePanel = /** @class */ (function () {
    function SavePanel(payload) {
        this.payload = payload;
        this.type = SAVE_PANEL;
    }
    return SavePanel;
}());

var SavePanelSuccess = /** @class */ (function () {
    function SavePanelSuccess() {
        this.type = SAVE_PANEL_SUCCESS;
    }
    return SavePanelSuccess;
}());

var SavePanelFailed = /** @class */ (function () {
    function SavePanelFailed() {
        this.type = SAVE_PANEL_FAILED;
    }
    return SavePanelFailed;
}());

var UpdatePanel = /** @class */ (function () {
    function UpdatePanel(payload) {
        this.payload = payload;
        this.type = UPDATE_PANEL;
    }
    return UpdatePanel;
}());

var DeletePanel = /** @class */ (function () {
    // Param Panel ID
    function DeletePanel(payload) {
        this.payload = payload;
        this.type = DELETE_PANEL;
    }
    return DeletePanel;
}());



/***/ }),

/***/ "./src/app/monitoring/shared/store/reducers/binding.reducer.ts":
/*!*********************************************************************!*\
  !*** ./src/app/monitoring/shared/store/reducers/binding.reducer.ts ***!
  \*********************************************************************/
/*! exports provided: initialState, reducer, getBindingsLoading, getBindingsLoaded, getBindingsEntities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBindingsLoading", function() { return getBindingsLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBindingsLoaded", function() { return getBindingsLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBindingsEntities", function() { return getBindingsEntities; });
/* harmony import */ var _actions_binding_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/binding.action */ "./src/app/monitoring/shared/store/actions/binding.action.ts");
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
    entities: [],
    loaded: false,
    loading: false
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_binding_action__WEBPACK_IMPORTED_MODULE_0__["LOAD_BINDINGS"]: {
            return __assign({}, state, { loading: true });
        }
        case _actions_binding_action__WEBPACK_IMPORTED_MODULE_0__["LOAD_BINDINGS_SUCCESS"]: {
            var entities = action.payload;
            return __assign({}, state, { entities: entities, loading: false, loaded: true });
        }
        case _actions_binding_action__WEBPACK_IMPORTED_MODULE_0__["LOAD_BINDINGS_FAIL"]: {
            return __assign({}, state, { loading: false, loaded: false });
        }
    }
    return state;
}
var getBindingsLoading = function (state) { return state.loading; };
var getBindingsLoaded = function (state) { return state.loaded; };
var getBindingsEntities = function (state) { return state.entities; };


/***/ }),

/***/ "./src/app/monitoring/shared/store/reducers/chart.reducer.ts":
/*!*******************************************************************!*\
  !*** ./src/app/monitoring/shared/store/reducers/chart.reducer.ts ***!
  \*******************************************************************/
/*! exports provided: initialState, reducer, getCharts, getChartsLoaded, getChartsLoading, getChartDeleted, getChartDeleting, getChartSaveing, getChartSaved, getAggregationsFiredLoaded, getAggregationsFiredLoading, getAggregationResponseAndLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCharts", function() { return getCharts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChartsLoaded", function() { return getChartsLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChartsLoading", function() { return getChartsLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChartDeleted", function() { return getChartDeleted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChartDeleting", function() { return getChartDeleting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChartSaveing", function() { return getChartSaveing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChartSaved", function() { return getChartSaved; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAggregationsFiredLoaded", function() { return getAggregationsFiredLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAggregationsFiredLoading", function() { return getAggregationsFiredLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAggregationResponseAndLoaded", function() { return getAggregationResponseAndLoaded; });
/* harmony import */ var _actions_chart_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/chart.actions */ "./src/app/monitoring/shared/store/actions/chart.actions.ts");
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
    charts: [],
    chartsLoading: false,
    chartsLoaded: false,
    chartSaved: false,
    chartSaveing: false,
    aggregationResponse: {},
    aggregationLoading: false,
    aggregationLoaded: false,
    chartDeleted: false,
    chartDeleting: false
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_chart_actions__WEBPACK_IMPORTED_MODULE_0__["LOAD_CHARTS"]: {
            return __assign({}, state, { chartsLoading: true, chartsLoaded: false });
        }
        case _actions_chart_actions__WEBPACK_IMPORTED_MODULE_0__["LOAD_CHARTS_SUCCESS"]: {
            return __assign({}, state, { charts: action.payload, chartsLoading: false, chartsLoaded: true });
        }
        case _actions_chart_actions__WEBPACK_IMPORTED_MODULE_0__["LOAD_CHARTS_FAIL"]: {
            return __assign({}, state, { chartsLoading: false, chartsLoaded: false });
        }
        case _actions_chart_actions__WEBPACK_IMPORTED_MODULE_0__["SAVE_CHART"]: {
            return __assign({}, state, { chartSaveing: true, chartSaved: false });
        }
        case _actions_chart_actions__WEBPACK_IMPORTED_MODULE_0__["SAVE_CHART_SUCCESS"]: {
            return __assign({}, state, { chartSaveing: false, chartSaved: true });
        }
        case _actions_chart_actions__WEBPACK_IMPORTED_MODULE_0__["SAVE_CHART_FAIL"]: {
            return __assign({}, state, { chartSaveing: false, chartSaved: false });
        }
        case _actions_chart_actions__WEBPACK_IMPORTED_MODULE_0__["DELETE_CHART_SUCCESS"]: {
            var charts = state.charts.filter(function (k) { return k.id != action.payload.id; });
            return __assign({}, state, { charts: charts, chartDeleted: true, chartDeleting: false });
        }
        case _actions_chart_actions__WEBPACK_IMPORTED_MODULE_0__["DELETE_CHART_FAIL"]: {
            return __assign({}, state, { chartDeleted: false, chartDeleting: false });
        }
        case _actions_chart_actions__WEBPACK_IMPORTED_MODULE_0__["DELETE_CHART"]: {
            return __assign({}, state, { chartDeleted: false, chartDeleting: true });
        }
        case _actions_chart_actions__WEBPACK_IMPORTED_MODULE_0__["FIRE_AGGREGATION_REQUEST"]: {
            return __assign({}, state, { aggregationLoading: true, aggregationLoaded: false });
        }
        case _actions_chart_actions__WEBPACK_IMPORTED_MODULE_0__["FIRE_PANEL_AGGREGATION_REQUEST"]: {
            return __assign({}, state, { aggregationLoading: true, aggregationLoaded: false });
        }
        case _actions_chart_actions__WEBPACK_IMPORTED_MODULE_0__["FIRE_AGGREGATION_REQUEST_FAIL"]: {
            return __assign({}, state, { aggregationLoading: false, aggregationLoaded: false });
        }
        case _actions_chart_actions__WEBPACK_IMPORTED_MODULE_0__["FIRE_AGGREGATION_REQUEST_SUCCESS"]: {
            return __assign({}, state, { aggregationLoading: false, aggregationLoaded: true, aggregationResponse: __assign({}, state.aggregationResponse, action.payload) });
        }
    }
    return state;
}
var getCharts = function (state) { return state.charts; };
var getChartsLoaded = function (state) { return state.chartsLoaded; };
var getChartsLoading = function (state) { return state.chartsLoading; };
var getChartDeleted = function (state) { return state.chartDeleted; };
var getChartDeleting = function (state) { return state.chartDeleting; };
var getChartSaveing = function (state) { return state.chartSaveing; };
var getChartSaved = function (state) { return state.chartSaved; };
var getAggregationsFiredLoaded = function (state) {
    return state.aggregationLoaded;
};
var getAggregationsFiredLoading = function (state) {
    return state.aggregationLoading;
};
var getAggregationResponseAndLoaded = function (state) {
    return {
        loaded: state.aggregationLoaded,
        loading: state.aggregationLoading,
        results: state.aggregationResponse
    };
};


/***/ }),

/***/ "./src/app/monitoring/shared/store/reducers/index.ts":
/*!***********************************************************!*\
  !*** ./src/app/monitoring/shared/store/reducers/index.ts ***!
  \***********************************************************/
/*! exports provided: reducers, getSharedModuleState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSharedModuleState", function() { return getSharedModuleState; });
/* harmony import */ var _chart_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chart.reducer */ "./src/app/monitoring/shared/store/reducers/chart.reducer.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _binding_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./binding.reducer */ "./src/app/monitoring/shared/store/reducers/binding.reducer.ts");
/* harmony import */ var _panel_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./panel.reducer */ "./src/app/monitoring/shared/store/reducers/panel.reducer.ts");




var reducers = {
    charts: _chart_reducer__WEBPACK_IMPORTED_MODULE_0__["reducer"],
    bindings: _binding_reducer__WEBPACK_IMPORTED_MODULE_2__["reducer"],
    panels: _panel_reducer__WEBPACK_IMPORTED_MODULE_3__["reducer"]
};
var getSharedModuleState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])('sharedmodule');


/***/ }),

/***/ "./src/app/monitoring/shared/store/reducers/panel.reducer.ts":
/*!*******************************************************************!*\
  !*** ./src/app/monitoring/shared/store/reducers/panel.reducer.ts ***!
  \*******************************************************************/
/*! exports provided: initialState, reducer, getPanelsLoading, getPanels, getPanelsLoaded, getPanelSaveing, getPanelSaved */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPanelsLoading", function() { return getPanelsLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPanels", function() { return getPanels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPanelsLoaded", function() { return getPanelsLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPanelSaveing", function() { return getPanelSaveing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPanelSaved", function() { return getPanelSaved; });
/* harmony import */ var _actions_panel_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/panel.action */ "./src/app/monitoring/shared/store/actions/panel.action.ts");
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
    panels: [],
    panelsLoading: false,
    panelsLoaded: false,
    panelSaveing: false,
    panelSaved: false
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_panel_action__WEBPACK_IMPORTED_MODULE_0__["LOAD_PANELS"]: {
            return __assign({}, state, { panelsLoading: true, panelsLoaded: false });
        }
        case _actions_panel_action__WEBPACK_IMPORTED_MODULE_0__["UPDATE_PANEL"]: {
            // replace panel in array with it's updated version
            var panels = state.panels.map(function (k) { return k.id === action.payload.id ? action.payload : k; });
            return __assign({}, state, { panelSaveing: true, panelSaved: false, panels: panels });
        }
        case _actions_panel_action__WEBPACK_IMPORTED_MODULE_0__["DELETE_PANEL"]: {
            return __assign({}, state, { panelSaveing: true, panelSaved: false });
        }
        case _actions_panel_action__WEBPACK_IMPORTED_MODULE_0__["LOAD_PANELS_SUCCESS"]: {
            return __assign({}, state, { panelsLoading: false, panelsLoaded: true, panels: action.payload });
        }
        case _actions_panel_action__WEBPACK_IMPORTED_MODULE_0__["LOAD_PANELS_FAILED"]: {
            return __assign({}, state, { panelsLoading: false, panelsLoaded: false });
        }
        case _actions_panel_action__WEBPACK_IMPORTED_MODULE_0__["SAVE_PANEL"]: {
            return __assign({}, state, { panelSaveing: true, panelSaved: false });
        }
        case _actions_panel_action__WEBPACK_IMPORTED_MODULE_0__["SAVE_PANEL_SUCCESS"]: {
            return __assign({}, state, { panelSaved: true, panelSaveing: false });
        }
        case _actions_panel_action__WEBPACK_IMPORTED_MODULE_0__["SAVE_PANEL_FAILED"]: {
            return __assign({}, state, { panelSaved: false, panelSaveing: false });
        }
    }
    return state;
}
var getPanelsLoading = function (state) { return state.panelsLoading; };
var getPanels = function (state) { return state.panels; };
var getPanelsLoaded = function (state) { return state.panelsLoaded; };
var getPanelSaveing = function (state) { return state.panelSaveing; };
var getPanelSaved = function (state) { return state.panelSaved; };


/***/ }),

/***/ "./src/app/monitoring/shared/store/selectors/bindings.selector.ts":
/*!************************************************************************!*\
  !*** ./src/app/monitoring/shared/store/selectors/bindings.selector.ts ***!
  \************************************************************************/
/*! exports provided: getAllBindingsState, getAllBindingsEntities, getAllBindingsLoaded, getAllBindingsLoading, getBindingsLoadingState, getBindingsSpaceAndOrg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllBindingsState", function() { return getAllBindingsState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllBindingsEntities", function() { return getAllBindingsEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllBindingsLoaded", function() { return getAllBindingsLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllBindingsLoading", function() { return getAllBindingsLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBindingsLoadingState", function() { return getBindingsLoadingState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBindingsSpaceAndOrg", function() { return getBindingsSpaceAndOrg; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _reducers_binding_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/binding.reducer */ "./src/app/monitoring/shared/store/reducers/binding.reducer.ts");
/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/index */ "./src/app/monitoring/shared/store/reducers/index.ts");



/*
 * Binding State
 */
var getAllBindingsState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_reducers_index__WEBPACK_IMPORTED_MODULE_2__["getSharedModuleState"], function (state) { return state.bindings; });
var getAllBindingsEntities = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAllBindingsState, _reducers_binding_reducer__WEBPACK_IMPORTED_MODULE_1__["getBindingsEntities"]);
var getAllBindingsLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAllBindingsState, _reducers_binding_reducer__WEBPACK_IMPORTED_MODULE_1__["getBindingsLoaded"]);
var getAllBindingsLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAllBindingsState, _reducers_binding_reducer__WEBPACK_IMPORTED_MODULE_1__["getBindingsLoading"]);
var getBindingsLoadingState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAllBindingsState, function (state) {
    return {
        loading: state.loading,
        loaded: state.loaded
    };
});
// Returns a Single State and Org object
var getBindingsSpaceAndOrg = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAllBindingsEntities, function (entities) {
    return entities
        .map(function (entity) {
        return {
            org: entity.organization_guid,
            space: entity.space
        };
    })
        .reduce(function (k) { return k; });
});


/***/ }),

/***/ "./src/app/monitoring/shared/store/selectors/chart.selector.ts":
/*!*********************************************************************!*\
  !*** ./src/app/monitoring/shared/store/selectors/chart.selector.ts ***!
  \*********************************************************************/
/*! exports provided: getChartModelState, getCharts, getChartsLoaded, getChartsLoading, getChartSaveing, getChartSaved, getChartDeleted, getChartDeleting, getAggregationResponseAndLoaded, getAggregationResponseAndLoadedById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChartModelState", function() { return getChartModelState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCharts", function() { return getCharts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChartsLoaded", function() { return getChartsLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChartsLoading", function() { return getChartsLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChartSaveing", function() { return getChartSaveing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChartSaved", function() { return getChartSaved; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChartDeleted", function() { return getChartDeleted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChartDeleting", function() { return getChartDeleting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAggregationResponseAndLoaded", function() { return getAggregationResponseAndLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAggregationResponseAndLoadedById", function() { return getAggregationResponseAndLoadedById; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/index */ "./src/app/monitoring/shared/store/reducers/index.ts");
/* harmony import */ var _reducers_chart_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/chart.reducer */ "./src/app/monitoring/shared/store/reducers/chart.reducer.ts");



var getChartModelState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_reducers_index__WEBPACK_IMPORTED_MODULE_1__["getSharedModuleState"], function (state) { return state.charts; });
var getCharts = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getChartModelState, _reducers_chart_reducer__WEBPACK_IMPORTED_MODULE_2__["getCharts"]);
var getChartsLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getChartModelState, _reducers_chart_reducer__WEBPACK_IMPORTED_MODULE_2__["getChartsLoaded"]);
var getChartsLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getChartModelState, _reducers_chart_reducer__WEBPACK_IMPORTED_MODULE_2__["getChartsLoading"]);
var getChartSaveing = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getChartModelState, _reducers_chart_reducer__WEBPACK_IMPORTED_MODULE_2__["getChartSaveing"]);
var getChartSaved = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getChartModelState, _reducers_chart_reducer__WEBPACK_IMPORTED_MODULE_2__["getChartSaved"]);
var getChartDeleted = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getChartModelState, _reducers_chart_reducer__WEBPACK_IMPORTED_MODULE_2__["getChartDeleted"]);
var getChartDeleting = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getChartModelState, _reducers_chart_reducer__WEBPACK_IMPORTED_MODULE_2__["getChartDeleting"]);
var getAggregationResponseAndLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getChartModelState, _reducers_chart_reducer__WEBPACK_IMPORTED_MODULE_2__["getAggregationResponseAndLoaded"]);
var getAggregationResponseAndLoadedById = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAggregationResponseAndLoaded, function (state, id) {
    if (state && state['results'] && state['results'][id]) {
        return {
            results: state['results'][id],
            loaded: state.loaded,
            loading: state.loading
        };
    }
});


/***/ })

}]);
//# sourceMappingURL=default~app-monitoring-chart-configurator-chart-configurator-module-ngfactory~app-monitoring-monitor~6910fe15.js.map