webpackJsonp([2,5],{

/***/ 345:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 345;


/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(457);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/User/source/repos/ToDoApplication/ToDoApplication/src/main.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(285);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(_httpService) {
        this._httpService = _httpService;
        this.title = 'TO-DO List';
        this.newItem = "";
        this.isAdding = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._httpService.get('/Item/GetList').subscribe(function (values) {
            _this.items = values.json();
        });
    };
    AppComponent.prototype.changeItem = function (item, isEditing) {
        if (isEditing) {
            item.isEditing = true;
            item.changedItem = item.ItemName;
        }
        else {
            item.isEditing = false;
            item.changedItem = null;
        }
    };
    AppComponent.prototype.cancelNew = function () {
        this.isAdding = false;
        this.newItem = "";
    };
    AppComponent.prototype.saveNewItem = function () {
        var _this = this;
        var data = {
            itemName: this.newItem,
        };
        this._httpService.post('/Item/SaveNewItem', data)
            .subscribe(function (item) {
            _this.items.push(item.json());
            _this.isAdding = false;
            _this.newItem = "";
        });
    };
    AppComponent.prototype.complete = function (itemID) {
        var _this = this;
        var data = {
            itemID: itemID,
        };
        this._httpService.post('/Item/CompleteItem', data)
            .subscribe(function (itemID) {
            var loc = _this.items.findIndex(function (item) { return item.ItemID === itemID.json(); });
            if (loc > -1) {
                _this.items.splice(loc, 1);
            }
        });
    };
    AppComponent.prototype.saveItem = function (itemObject) {
        var _this = this;
        var changedItem = {
            ItemID: itemObject.ItemID,
            ItemName: itemObject.changedItem
        };
        var data = {
            item: changedItem,
        };
        this._httpService.post('/Item/UpdateItem', data)
            .subscribe(function (item) {
            var nItem = item.json();
            var loc = _this.items.findIndex(function (itemL) { return itemL.ItemID === nItem.ItemID; });
            if (loc > -1) {
                _this.items[loc].changedItem = "";
                _this.items[loc].isEditing = false;
                _this.items[loc].ItemName = nItem.ItemName;
            }
        });
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(617),
            styles: [__webpack_require__(616)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/User/source/repos/ToDoApplication/ToDoApplication/src/app.component.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(456);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/User/source/repos/ToDoApplication/ToDoApplication/src/app.module.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/User/source/repos/ToDoApplication/ToDoApplication/src/environment.js.map

/***/ }),

/***/ 616:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 617:
/***/ (function(module, exports) {

module.exports = "<h1>\n  {{title}}\n</h1>\n<button *ngIf=\"!isAdding\" type=\"button\" (click)=\"isAdding = true;\">Add a new To-Do</button>\n<div *ngIf=\"isAdding\">\n    New TO-DO: <input type=\"text\" [(ngModel)]=\"newItem\" /> <br/>\n  <button type=\"button\" (click)=\"saveNewItem()\" class=\"buttonGreen\">Save</button>\n  <button type=\"button\" (click)=\"cancelNew()\" class=\"buttonRed\">Cancel</button>\n</div>\n<br/>\n<hr/>\n<div *ngFor=\"let item of items\" >\n  <div *ngIf=\"item.isEditing\">\n      <input type=\"text\"  class=\"left width50\" [(ngModel)]=\"item.changedItem\"/>\n      <div class=\"right width50\">\n        <button type=\"button\" (click)=\"saveItem(item)\" class=\"buttonGreen\">Save</button> <br />\n        <button type=\"button\" (click)=\"changeItem(item, false)\" class=\"buttonRed\">Cancel</button>\n      </div>\n  </div>\n  <div *ngIf=\"!item.isEditing\">\n      <div class=\"left width50\">\n        {{item.ItemName}}\n      </div>\n      <div class=\"right width50\">\n        <button type=\"button\" (click)=\"changeItem(item, true)\" class=\"buttonBlue\">Edit</button> <br/>\n        <button type=\"button\" (click)=\"complete(item.ItemID)\" class=\"buttonBlue\">Complete</button>\n      </div>\n      \n  </div>\n  <br class=\"clear\"/>\n  <hr/>\n</div>\n"

/***/ }),

/***/ 632:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(346);


/***/ })

},[632]);
//# sourceMappingURL=main.bundle.map