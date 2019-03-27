(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["organisation-organisation-module"],{

/***/ "./src/app/organisation/create-organisation/create-organisation.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/organisation/create-organisation/create-organisation.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/organisation/create-organisation/create-organisation.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/organisation/create-organisation/create-organisation.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid mtxl\">\n    <mat-card class=\"col-lg-offset-3 col-lg-6 col-md-offset-2 col-md-8 col-sm-offset-1 col-sm-10 col-xs-12\">\n        <form [formGroup]=\"form\">\n            <div class=\"row\">\n                <mat-form-field class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n                    <input matInput placeholder=\"Organisation Name\" formControlName=\"name\" [readonly]=\"!!isReadOnly\">\n                    <mat-error *ngIf=\"form?.controls?.name?.hasError('required')\">\n                        Organisation name is required!\n                    </mat-error>\n                </mat-form-field>\n            </div>\n            <div class=\"row\">\n                <mat-form-field class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n                    <textarea matInput placeholder=\"Description\" formControlName=\"description\" rows=\"10\" [readonly]=\"!!isReadOnly\"></textarea>\n                    <mat-error *ngIf=\"form?.controls?.name?.hasError('required')\">\n                        Organisation description is required!\n                    </mat-error>\n                </mat-form-field>\n            </div>\n            <div class=\"row mtl\">\n                <button mat-raised-button color=\"primary\" class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\" (click)=\"create()\">\n                    Create Organisation\n                </button>\n            </div>\n        </form>\n    </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/organisation/create-organisation/create-organisation.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/organisation/create-organisation/create-organisation.component.ts ***!
  \***********************************************************************************/
/*! exports provided: CreateOrganisationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateOrganisationComponent", function() { return CreateOrganisationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_http_interceptor_http_interceptor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/http-interceptor/http-interceptor.service */ "./src/app/shared/services/http-interceptor/http-interceptor.service.ts");
/* harmony import */ var _shared_models_api_url_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/models/api.url.model */ "./src/app/shared/models/api.url.model.ts");
/* harmony import */ var _shared_models_organisation_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/models/organisation.model */ "./src/app/shared/models/organisation.model.ts");
/* harmony import */ var _shared_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/storage/storage.service */ "./src/app/shared/services/storage/storage.service.ts");
/* harmony import */ var _shared_services_events_service_events_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/events.service/events.service */ "./src/app/shared/services/events.service/events.service.ts");
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







var CreateOrganisationComponent = /** @class */ (function () {
    function CreateOrganisationComponent(_Http, _Router, _route, _StorageService, _EventsService) {
        this._Http = _Http;
        this._Router = _Router;
        this._route = _route;
        this._StorageService = _StorageService;
        this._EventsService = _EventsService;
        this.isReadOnly = true;
    }
    CreateOrganisationComponent.prototype.ngOnInit = function () {
        this.user = this._StorageService.getItem("user", "local");
        this.organisation = this._route.snapshot.data.organisation || null;
        this.isReadOnly = this.user && this.user.organisationIds && this.user.organisationIds.length &&
            this.organisation && this.organisation._id &&
            this.user.organisationIds.indexOf(this.organisation._id) <= -1;
        console.log(this.isReadOnly);
        this.form = _shared_models_organisation_model__WEBPACK_IMPORTED_MODULE_4__["Organisation"].createForm;
        if (this.organisation) {
            _shared_models_organisation_model__WEBPACK_IMPORTED_MODULE_4__["Organisation"].setForm(this.form, this.organisation);
        }
    };
    CreateOrganisationComponent.prototype.create = function () {
        return __awaiter(this, void 0, void 0, function () {
            var request, httpResponse, organisation, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.form.valid && this.form.dirty && this.form.touched)) return [3 /*break*/, 4];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        request = this.form.value;
                        request.adminId = this.user._id;
                        request.userIds = request.userIds || [];
                        if (request.userIds.indexOf(this.user._id) <= -1) {
                            request.userIds.push(this.user._id);
                        }
                        httpResponse = this._Http.post(_shared_models_api_url_model__WEBPACK_IMPORTED_MODULE_3__["API_URL"].CREATE_ORGANISATION, request);
                        return [4 /*yield*/, this._Http.toModel(httpResponse)];
                    case 2:
                        organisation = _a.sent();
                        if (organisation && organisation._id) {
                            this._StorageService.setKey("user", "organisationId", organisation._id, "local");
                            this._StorageService.setKey("user", "isAdmin", true, "local");
                            this._EventsService.broadcast(_shared_services_events_service_events_service__WEBPACK_IMPORTED_MODULE_6__["GLOBAL_EVENTS"].SET_ORGANISATION);
                            this._Router.navigate(["/"]);
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.error(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CreateOrganisationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-create-organisation",
            template: __webpack_require__(/*! ./create-organisation.component.html */ "./src/app/organisation/create-organisation/create-organisation.component.html"),
            styles: [__webpack_require__(/*! ./create-organisation.component.css */ "./src/app/organisation/create-organisation/create-organisation.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_http_interceptor_http_interceptor_service__WEBPACK_IMPORTED_MODULE_2__["HttpInterceptorService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"],
            _shared_services_events_service_events_service__WEBPACK_IMPORTED_MODULE_6__["EventsService"]])
    ], CreateOrganisationComponent);
    return CreateOrganisationComponent;
}());



/***/ }),

/***/ "./src/app/organisation/organisation.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/organisation/organisation.module.ts ***!
  \*****************************************************/
/*! exports provided: OrganisationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationModule", function() { return OrganisationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _create_organisation_create_organisation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-organisation/create-organisation.component */ "./src/app/organisation/create-organisation/create-organisation.component.ts");
/* harmony import */ var _resolvers_organisation_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resolvers/organisation.resolver */ "./src/app/organisation/resolvers/organisation.resolver.ts");
/* harmony import */ var _organisation_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./organisation.routes */ "./src/app/organisation/organisation.routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// angular modules




// external modules

// components

// services

// routes (always last)

var OrganisationModule = /** @class */ (function () {
    function OrganisationModule() {
    }
    OrganisationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_1__["HttpModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_organisation_routes__WEBPACK_IMPORTED_MODULE_7__["Routes"]) //always last
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
            declarations: [
                _create_organisation_create_organisation_component__WEBPACK_IMPORTED_MODULE_5__["CreateOrganisationComponent"]
            ],
            providers: [_resolvers_organisation_resolver__WEBPACK_IMPORTED_MODULE_6__["OrganisationResolver"]],
            bootstrap: [_create_organisation_create_organisation_component__WEBPACK_IMPORTED_MODULE_5__["CreateOrganisationComponent"]]
        })
    ], OrganisationModule);
    return OrganisationModule;
}());



/***/ }),

/***/ "./src/app/organisation/organisation.routes.ts":
/*!*****************************************************!*\
  !*** ./src/app/organisation/organisation.routes.ts ***!
  \*****************************************************/
/*! exports provided: Routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routes", function() { return Routes; });
/* harmony import */ var _shared_services_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/services/auth-guard/auth-guard.service */ "./src/app/shared/services/auth-guard/auth-guard.service.ts");
/* harmony import */ var _create_organisation_create_organisation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-organisation/create-organisation.component */ "./src/app/organisation/create-organisation/create-organisation.component.ts");
/* harmony import */ var _resolvers_organisation_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resolvers/organisation.resolver */ "./src/app/organisation/resolvers/organisation.resolver.ts");



var Routes = [
    {
        path: "",
        redirectTo: "/list",
        pathMatch: "full"
    },
    {
        path: "list",
        component: _create_organisation_create_organisation_component__WEBPACK_IMPORTED_MODULE_1__["CreateOrganisationComponent"],
        canActivate: [_shared_services_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__["AuthGuardService"]]
    },
    {
        path: "create",
        component: _create_organisation_create_organisation_component__WEBPACK_IMPORTED_MODULE_1__["CreateOrganisationComponent"],
        canActivate: [_shared_services_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__["AuthGuardService"]]
    },
    {
        path: ":organisationId",
        component: _create_organisation_create_organisation_component__WEBPACK_IMPORTED_MODULE_1__["CreateOrganisationComponent"],
        resolve: {
            organisation: _resolvers_organisation_resolver__WEBPACK_IMPORTED_MODULE_2__["OrganisationResolver"]
        },
        canActivate: [_shared_services_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__["AuthGuardService"]]
    }
];


/***/ }),

/***/ "./src/app/organisation/resolvers/organisation.resolver.ts":
/*!*****************************************************************!*\
  !*** ./src/app/organisation/resolvers/organisation.resolver.ts ***!
  \*****************************************************************/
/*! exports provided: OrganisationResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationResolver", function() { return OrganisationResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_http_interceptor_http_interceptor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/http-interceptor/http-interceptor.service */ "./src/app/shared/services/http-interceptor/http-interceptor.service.ts");
/* harmony import */ var _shared_models_api_url_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/models/api.url.model */ "./src/app/shared/models/api.url.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrganisationResolver = /** @class */ (function () {
    function OrganisationResolver(_Http) {
        this._Http = _Http;
    }
    OrganisationResolver.prototype.resolve = function (route, state) {
        var url = _shared_models_api_url_model__WEBPACK_IMPORTED_MODULE_2__["API_URL"].GET_ORGANISATION.replace("${organisationId}", route.params.organisationId);
        var httpResponse = this._Http.get(url);
        return this._Http.toModel(httpResponse);
    };
    OrganisationResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_shared_services_http_interceptor_http_interceptor_service__WEBPACK_IMPORTED_MODULE_1__["HttpInterceptorService"]])
    ], OrganisationResolver);
    return OrganisationResolver;
}());



/***/ }),

/***/ "./src/app/shared/models/organisation.model.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/models/organisation.model.ts ***!
  \*****************************************************/
/*! exports provided: Organisation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Organisation", function() { return Organisation; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");

var Organisation = /** @class */ (function () {
    function Organisation() {
    }
    Object.defineProperty(Organisation, "createForm", {
        get: function () {
            return new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
                name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required
                ]),
                description: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required
                ])
            });
        },
        enumerable: true,
        configurable: true
    });
    Organisation.setForm = function (form, organisation) {
        form.setValue({
            name: organisation.name,
            description: organisation.description
        });
    };
    return Organisation;
}());



/***/ })

}]);
//# sourceMappingURL=organisation-organisation-module.js.map