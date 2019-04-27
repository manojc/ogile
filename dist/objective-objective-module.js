(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["objective-objective-module"],{

/***/ "./src/app/objective/create-objective/create-objective.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/objective/create-objective/create-objective.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/objective/create-objective/create-objective.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/objective/create-objective/create-objective.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mtl\">\n    <div class=\"col-lg-offset-2 col-lg-8\">\n        <h2>Create New Objective</h2>\n    </div>\n    <mat-card class=\"col-lg-offset-2 col-lg-8\">\n        <form [formGroup]=\"form\">\n            <div class=\"row\">\n                <mat-form-field class=\"col-lg-12\">\n                    <input matInput placeholder=\"Objective Name\" formControlName=\"name\">\n                    <mat-error *ngIf=\"form?.controls?.name?.hasError('required')\">\n                        Objective name is required!\n                    </mat-error>\n                </mat-form-field>\n            </div>\n            <div class=\"row\">\n                <mat-form-field class=\"col-lg-12\">\n                    <textarea matInput placeholder=\"Description\" formControlName=\"description\" rows=\"5\"></textarea>\n                    <mat-error *ngIf=\"form?.controls?.name?.hasError('required')\">\n                        Objective description is required!\n                    </mat-error>\n                </mat-form-field>\n            </div>\n            <div class=\"row mtl\">\n                <div class=\"col-lg-3\">\n                    <h3>Key Results</h3>\n                </div>\n                <div class=\"col-lg-offset-7 col-lg-2\">\n                    <h3><button class=\"btn btn-success btn-sm\" (click)=\"addKeyResult()\">add new</button></h3>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div formArrayName=\"keyResults\" class=\"col-lg-12\">\n                    <div *ngFor=\"let keyResult of keyResults.controls; index as i\">\n                        <div class=\"row mtl\">\n                            <div class=\"col-lg-10\">\n                                <input matInput [formControlName]=\"i\" placeholder=\"key result {{i+1}}\">\n                                <mat-error *ngIf=\"keyResult?.hasError('required')\">\n                                    Key result is required!\n                                </mat-error>\n                            </div>\n                            <div class=\"col-lg-2\" *ngIf=\"keyResults?.controls?.length > 1\">\n                                <button class=\"btn btn-danger btn-sm\" (click)=\"removeKeyResult(i)\">remove</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row mtl\"></div>\n            <div class=\"row mtl\">\n                <button mat-raised-button color=\"primary\" class=\"col-lg-12\" (click)=\"create()\" [disabled]=\"!form?.valid\">\n                    Create Objective\n                </button>\n            </div>\n        </form>\n    </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/objective/create-objective/create-objective.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/objective/create-objective/create-objective.component.ts ***!
  \**************************************************************************/
/*! exports provided: CreateObjectiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateObjectiveComponent", function() { return CreateObjectiveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/storage/storage.service */ "./src/app/shared/services/storage/storage.service.ts");
/* harmony import */ var _shared_services_events_service_events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/events.service/events.service */ "./src/app/shared/services/events.service/events.service.ts");
/* harmony import */ var _shared_models_uuid_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/models/uuid.model */ "./src/app/shared/models/uuid.model.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var CreateObjectiveComponent = /** @class */ (function () {
    function CreateObjectiveComponent(_Router, _ActivatedRoute, _StorageService, _EventsService, _AngularFireDatabase) {
        this._Router = _Router;
        this._ActivatedRoute = _ActivatedRoute;
        this._StorageService = _StorageService;
        this._EventsService = _EventsService;
        this._AngularFireDatabase = _AngularFireDatabase;
    }
    Object.defineProperty(CreateObjectiveComponent.prototype, "keyResults", {
        get: function () { return this.form.get('keyResults'); },
        enumerable: true,
        configurable: true
    });
    CreateObjectiveComponent.prototype.ngOnInit = function () {
        this.user = this._StorageService.getItem("user", "local");
        if (this._ActivatedRoute.snapshot.queryParams.id) {
            var objectives = this._StorageService.getItem("objectives", "local");
            this.selectedObjective = objectives[this._ActivatedRoute.snapshot.queryParams.id];
            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.selectedObjective.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.selectedObjective.description, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                keyResults: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"](this.selectedObjective.keyResults.reduce(function (array, keyResult) {
                    array.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](keyResult, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]));
                    return array;
                }, []))
            });
        }
        else {
            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                keyResults: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])])
            });
        }
    };
    CreateObjectiveComponent.prototype.addKeyResult = function () {
        this.keyResults.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]));
    };
    CreateObjectiveComponent.prototype.removeKeyResult = function (index) {
        this.keyResults.removeAt(index);
    };
    CreateObjectiveComponent.prototype.create = function () {
        return __awaiter(this, void 0, void 0, function () {
            var id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.form.valid) return [3 /*break*/, 5];
                        if (!this._ActivatedRoute.snapshot.queryParams.id) return [3 /*break*/, 2];
                        return [4 /*yield*/, this._AngularFireDatabase
                                .database
                                .ref("objectives/" + this.user.uid + "/" + this.selectedObjective.id)
                                .set(__assign({ uid: this.user.uid, id: this.selectedObjective.id }, this.form.value))];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        id = _shared_models_uuid_model__WEBPACK_IMPORTED_MODULE_6__["UUID"].generate();
                        return [4 /*yield*/, this._AngularFireDatabase
                                .database
                                .ref("objectives/" + this.user.uid + "/" + id)
                                .set(__assign({ uid: this.user.uid, id: id }, this.form.value))];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        this._Router.navigate(["/objectives"]);
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    CreateObjectiveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-create-objective",
            template: __webpack_require__(/*! ./create-objective.component.html */ "./src/app/objective/create-objective/create-objective.component.html"),
            styles: [__webpack_require__(/*! ./create-objective.component.css */ "./src/app/objective/create-objective/create-objective.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"],
            _shared_services_events_service_events_service__WEBPACK_IMPORTED_MODULE_5__["EventsService"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]])
    ], CreateObjectiveComponent);
    return CreateObjectiveComponent;
}());



/***/ }),

/***/ "./src/app/objective/objective-list/objective-list.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/objective/objective-list/objective-list.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    width: 100%;\n}"

/***/ }),

/***/ "./src/app/objective/objective-list/objective-list.component.html":
/*!************************************************************************!*\
  !*** ./src/app/objective/objective-list/objective-list.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mtl\">\n    <div class=\"row\">\n        <div class=\"col-lg-3\">\n            <h2>Objective List</h2>\n        </div>\n        <div class=\"col-lg-offset-7 col-lg-2\">\n            <h2>\n                <a routerLink=\"/objectives/create\" class=\"btn btn-success\">Add New Objective</a>\n            </h2>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <table mat-table [dataSource]=\"objectives\" class=\"mat-elevation-z8\">\n                <ng-container matColumnDef=\"_id\">\n                    <th mat-header-cell *matHeaderCellDef> No. </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element._id}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"summary\">\n                    <th mat-header-cell *matHeaderCellDef> Objective Summary </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.summary}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"keyResults\">\n                    <th mat-header-cell *matHeaderCellDef> Key Results </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.keyResults}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"stories\">\n                    <th mat-header-cell *matHeaderCellDef> Stories </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.stories}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"action\">\n                    <th mat-header-cell *matHeaderCellDef> Action </th>\n                    <td mat-cell *matCellDef=\"let element\">\n                        <a class=\"btn btn-primary btn-small\" routerLink=\"/objectives/create\" [queryParams]=\"{id: element.id}\">details</a>\n                    </td>\n                </ng-container>\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n            </table>\n        </div>\n        <div class=\"col-lg-12 mtl text-center\" *ngIf=\"!objectives || objectives?.length <= 0\">\n            No objectives added yet!\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/objective/objective-list/objective-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/objective/objective-list/objective-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: ObjectiveListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectiveListComponent", function() { return ObjectiveListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _shared_services_events_service_events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/events.service/events.service */ "./src/app/shared/services/events.service/events.service.ts");
/* harmony import */ var _shared_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/storage/storage.service */ "./src/app/shared/services/storage/storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var ObjectiveListComponent = /** @class */ (function () {
    function ObjectiveListComponent(_Router, _StorageService, _EventsService, _MatSnackBar, _AngularFireDatabase, _AngularFireAuth) {
        this._Router = _Router;
        this._StorageService = _StorageService;
        this._EventsService = _EventsService;
        this._MatSnackBar = _MatSnackBar;
        this._AngularFireDatabase = _AngularFireDatabase;
        this._AngularFireAuth = _AngularFireAuth;
        this.objectives = [];
    }
    ObjectiveListComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.user = this._StorageService.getItem("user", "local");
                this.displayedColumns = ["_id", "summary", "keyResults", "stories", "action"];
                this._AngularFireDatabase
                    .object("objectives/" + this.user.uid)
                    .valueChanges()
                    .subscribe(function (response) {
                    response = response || [];
                    _this.objectives = Object.values(response).reduce(function (source, item, index) {
                        source.push({
                            _id: index + 1,
                            id: item.id,
                            summary: item.name,
                            keyResults: item.keyResults.length,
                            stories: 0
                        });
                        return source;
                    }, []);
                    _this._StorageService.setItem("objectives", response, "local");
                });
                return [2 /*return*/];
            });
        });
    };
    ObjectiveListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-objective-list",
            template: __webpack_require__(/*! ./objective-list.component.html */ "./src/app/objective/objective-list/objective-list.component.html"),
            styles: [__webpack_require__(/*! ./objective-list.component.css */ "./src/app/objective/objective-list/objective-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"],
            _shared_services_events_service_events_service__WEBPACK_IMPORTED_MODULE_5__["EventsService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]])
    ], ObjectiveListComponent);
    return ObjectiveListComponent;
}());



/***/ }),

/***/ "./src/app/objective/objective.module.ts":
/*!***********************************************!*\
  !*** ./src/app/objective/objective.module.ts ***!
  \***********************************************/
/*! exports provided: ObjectiveModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectiveModule", function() { return ObjectiveModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _create_objective_create_objective_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-objective/create-objective.component */ "./src/app/objective/create-objective/create-objective.component.ts");
/* harmony import */ var _objective_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./objective.routes */ "./src/app/objective/objective.routes.ts");
/* harmony import */ var _objective_list_objective_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./objective-list/objective-list.component */ "./src/app/objective/objective-list/objective-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// angular modules




// external modules

// components

// routes (always last)


var ObjectiveModule = /** @class */ (function () {
    function ObjectiveModule() {
    }
    ObjectiveModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_1__["HttpModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_objective_routes__WEBPACK_IMPORTED_MODULE_6__["Routes"]) //always last
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
            declarations: [
                _create_objective_create_objective_component__WEBPACK_IMPORTED_MODULE_5__["CreateObjectiveComponent"],
                _objective_list_objective_list_component__WEBPACK_IMPORTED_MODULE_7__["ObjectiveListComponent"]
            ],
            providers: [],
            bootstrap: [_create_objective_create_objective_component__WEBPACK_IMPORTED_MODULE_5__["CreateObjectiveComponent"]]
        })
    ], ObjectiveModule);
    return ObjectiveModule;
}());



/***/ }),

/***/ "./src/app/objective/objective.routes.ts":
/*!***********************************************!*\
  !*** ./src/app/objective/objective.routes.ts ***!
  \***********************************************/
/*! exports provided: Routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routes", function() { return Routes; });
/* harmony import */ var _shared_services_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/services/auth-guard/auth-guard.service */ "./src/app/shared/services/auth-guard/auth-guard.service.ts");
/* harmony import */ var _create_objective_create_objective_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-objective/create-objective.component */ "./src/app/objective/create-objective/create-objective.component.ts");
/* harmony import */ var _objective_list_objective_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./objective-list/objective-list.component */ "./src/app/objective/objective-list/objective-list.component.ts");



var Routes = [
    {
        path: "",
        redirectTo: "list",
        pathMatch: "full"
    },
    {
        path: "list",
        component: _objective_list_objective_list_component__WEBPACK_IMPORTED_MODULE_2__["ObjectiveListComponent"],
        canActivate: [_shared_services_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__["AuthGuardService"]]
    },
    {
        path: "create",
        component: _create_objective_create_objective_component__WEBPACK_IMPORTED_MODULE_1__["CreateObjectiveComponent"],
        canActivate: [_shared_services_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__["AuthGuardService"]]
    },
    {
        path: ":objective_id",
        component: _create_objective_create_objective_component__WEBPACK_IMPORTED_MODULE_1__["CreateObjectiveComponent"],
        canActivate: [_shared_services_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__["AuthGuardService"]]
    }
];


/***/ })

}]);
//# sourceMappingURL=objective-objective-module.js.map