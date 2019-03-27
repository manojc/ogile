(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./organisation/organisation.module": [
		"./src/app/organisation/organisation.module.ts",
		"organisation-organisation-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app/app.component */ "./src/app/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./error-page/error-page.component */ "./src/app/error-page/error-page.component.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//angular modules






//external modules

//components





//routes (always last)

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_1__["HttpModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_12__["Routes"]) //always last
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
            declarations: [
                _app_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"],
                _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_11__["ErrorPageComponent"]
            ],
            providers: [],
            bootstrap: [_app_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: Routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routes", function() { return Routes; });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error-page/error-page.component */ "./src/app/error-page/error-page.component.ts");
/* harmony import */ var _shared_services_logged_in_guard_logged_in_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/services/logged-in-guard/logged-in-guard.service */ "./src/app/shared/services/logged-in-guard/logged-in-guard.service.ts");
/* harmony import */ var _shared_services_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/services/auth-guard/auth-guard.service */ "./src/app/shared/services/auth-guard/auth-guard.service.ts");






var Routes = [
    {
        path: "",
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"],
        canActivate: [_shared_services_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]]
    },
    {
        path: "organisation",
        loadChildren: "./organisation/organisation.module#OrganisationModule",
        canActivate: [_shared_services_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]]
    },
    {
        path: "login",
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"],
        canActivate: [_shared_services_logged_in_guard_logged_in_guard_service__WEBPACK_IMPORTED_MODULE_4__["LoggedInGuardService"]]
    },
    {
        path: "register",
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"],
        canActivate: [_shared_services_logged_in_guard_logged_in_guard_service__WEBPACK_IMPORTED_MODULE_4__["LoggedInGuardService"]]
    },
    {
        path: "**",
        component: _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_3__["ErrorPageComponent"]
    }
];


/***/ }),

/***/ "./src/app/app/app.component.css":
/*!***************************************!*\
  !*** ./src/app/app/app.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n    height: 100%;\n}\n  \n.sidenav {\n    width: 200px;\n}\n  \n.mat-toolbar.mat-primary {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index: 9;\n}\n  \nmat-progress-bar {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 65px;\n    z-index: 9;\n}\n  \n.spacer {\n    flex: 1 1 auto;\n}\n  \n.side-menu {\n    font-size: 4rem;\n}"

/***/ }),

/***/ "./src/app/app/app.component.html":
/*!****************************************!*\
  !*** ./src/app/app/app.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\n    <mat-sidenav #leftDrawer class=\"sidenav\">\n        <mat-toolbar color=\"primary\">Menu</mat-toolbar>\n        <mat-nav-list>\n            <a mat-list-item class=\"txt-blue\" *ngIf=\"!!user?.organisationIds && !!user?.organisationIds.length\" (click)=\"leftDrawer.toggle()\" routerLink=\"/\">\n                <i class=\"material-icons txt-blue mrxs\">developer_board</i>\n                Dashboard\n            </a>\n            <a mat-list-item class=\"txt-blue\" *ngIf=\"!!user?.organisationIds && !!user?.organisationIds.length\" (click)=\"leftDrawer.toggle()\" routerLink=\"/organisation/{{user.organisationId}}\">\n                <i class=\"material-icons txt-blue mrxs\">group_work</i>\n                My Organisation\n            </a>\n            <a mat-list-item class=\"txt-blue\" *ngIf=\"!!user?.organisationIds && !!user?.organisationIds.length\" (click)=\"leftDrawer.toggle()\" routerLink=\"/team/list\">\n                <i class=\"material-icons txt-blue mrxs\">group</i>\n                My Team\n            </a>\n            <a mat-list-item class=\"txt-blue\" *ngIf=\"!!user?.organisationIds && !!user?.organisationIds.length\" (click)=\"leftDrawer.toggle()\" routerLink=\"/quarters/list\">\n                <i class=\"material-icons txt-blue mrxs\">dashboard</i>\n                Quarters\n            </a>\n        </mat-nav-list>\n    </mat-sidenav>\n    <mat-sidenav-content>\n        <mat-toolbar class=\"mat-primary\" color=\"primary\">\n            <button *ngIf=\"!!user?._id\" type=\"button\" mat-icon-button (click)=\"leftDrawer.toggle()\">\n                <mat-icon>menu</mat-icon>\n            </button>\n            <button mat-stroked-button color=\"basic\" (click)=\"home()\">\n                <mat-icon class=\"material-icons mrxs\">home</mat-icon>\n                Ogile\n            </button>\n            <span class=\"spacer\"></span>\n            <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n                <mat-icon>more_vert</mat-icon>\n            </button>\n            <mat-menu #menu=\"matMenu\">\n                <button *ngIf=\"!!user?._id\" mat-menu-item (click)=\"profile()\">\n                    <mat-icon class=\"material-icons txt-blue\">face</mat-icon>\n                    <span class=\"txt-blue\">Profile</span>\n                </button>\n                <button *ngIf=\"!user?._id\" mat-menu-item (click)=\"login()\">\n                    <mat-icon class=\"material-icons txt-blue\">lock</mat-icon>\n                    <span class=\"txt-blue\">Login</span>\n                </button>\n                <button *ngIf=\"!!user?._id\" mat-menu-item (click)=\"logout()\">\n                    <mat-icon class=\"material-icons txt-blue\">exit_to_app</mat-icon>\n                    <span class=\"txt-blue\">Logout</span>\n                </button>\n            </mat-menu>\n        </mat-toolbar>\n        <mat-progress-bar *ngIf=\"!!showLoader\" mode=\"indeterminate\"></mat-progress-bar>\n        <div class=\"container-fluid\">\n            <router-outlet></router-outlet>\n        </div>\n        <ng-content>\n        </ng-content>\n    </mat-sidenav-content>\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/app/app.component.ts":
/*!**************************************!*\
  !*** ./src/app/app/app.component.ts ***!
  \**************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_services_http_interceptor_http_interceptor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/http-interceptor/http-interceptor.service */ "./src/app/shared/services/http-interceptor/http-interceptor.service.ts");
/* harmony import */ var _shared_services_events_service_events_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/events.service/events.service */ "./src/app/shared/services/events.service/events.service.ts");
/* harmony import */ var _shared_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/storage/storage.service */ "./src/app/shared/services/storage/storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = /** @class */ (function () {
    function AppComponent(_Router, _Http, _StorageService, _EventsService, _MatSnackBar) {
        this._Router = _Router;
        this._Http = _Http;
        this._StorageService = _StorageService;
        this._EventsService = _EventsService;
        this._MatSnackBar = _MatSnackBar;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.bindEvents();
        this.user = this._StorageService.getItem("user", "local");
    };
    AppComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        this.eventIds.forEach(function (eventId) { return _this._EventsService.off(eventId); });
    };
    AppComponent.prototype.home = function () {
        this._Router.navigate([""]);
    };
    AppComponent.prototype.profile = function () {
        this._Router.navigate(["profile"]);
    };
    AppComponent.prototype.login = function () {
        this._Router.navigate([!!this.user ? "" : "login"]);
    };
    AppComponent.prototype.logout = function () {
        try {
            this.user = null;
            this._StorageService.setItem("user", null, "local");
            this._Router.navigate(["/login"]);
        }
        catch (error) {
            console.error(error);
        }
    };
    AppComponent.prototype.bindEvents = function () {
        var _this = this;
        this.eventIds = [
            this._EventsService.on(_shared_services_events_service_events_service__WEBPACK_IMPORTED_MODULE_4__["GLOBAL_EVENTS"].TOGGLE_LOADER, function (showLoader) {
                _this.showLoader = showLoader;
            }),
            this._EventsService.on(_shared_services_events_service_events_service__WEBPACK_IMPORTED_MODULE_4__["GLOBAL_EVENTS"].SET_USER, function (user) {
                _this.user = user;
            }),
            this._EventsService.on(_shared_services_events_service_events_service__WEBPACK_IMPORTED_MODULE_4__["GLOBAL_EVENTS"].SHOW_SNACKBAR, function (message) {
                _this._MatSnackBar.open(message, "close", {
                    duration: 3000,
                    horizontalPosition: "right",
                    verticalPosition: "bottom"
                });
            }),
            this._EventsService.on(_shared_services_events_service_events_service__WEBPACK_IMPORTED_MODULE_4__["GLOBAL_EVENTS"].SET_ORGANISATION, function () {
                _this.user = _this._StorageService.getItem("user", "local");
            })
        ];
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_services_http_interceptor_http_interceptor_service__WEBPACK_IMPORTED_MODULE_3__["HttpInterceptorService"],
            _shared_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"],
            _shared_services_events_service_events_service__WEBPACK_IMPORTED_MODULE_4__["EventsService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/error-page/error-page.component.css":
/*!*****************************************************!*\
  !*** ./src/app/error-page/error-page.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/error-page/error-page.component.html":
/*!******************************************************!*\
  !*** ./src/app/error-page/error-page.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid mtxl\">\n    <mat-card class=\"col-lg-offset-3 col-lg-6 col-md-offset-2 col-md-8 col-sm-offset-1 col-sm-10 col-xs-12\">\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center\">\n            <h1>404</h1>\n            <h3>Requested page not found!</h3>\n            <span>Go back to &nbsp;</span>\n            <a [routerLink]=\"['/']\">home page</a>\n        </div>\n    </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/error-page/error-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/error-page/error-page.component.ts ***!
  \****************************************************/
/*! exports provided: ErrorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function() { return ErrorPageComponent; });
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

var ErrorPageComponent = /** @class */ (function () {
    function ErrorPageComponent() {
    }
    ErrorPageComponent.prototype.ngOnInit = function () {
    };
    ErrorPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-error-page",
            template: __webpack_require__(/*! ./error-page.component.html */ "./src/app/error-page/error-page.component.html"),
            styles: [__webpack_require__(/*! ./error-page.component.css */ "./src/app/error-page/error-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorPageComponent);
    return ErrorPageComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1> Home!!!</h1>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/storage/storage.service */ "./src/app/shared/services/storage/storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(_StorageService, _Router) {
        this._StorageService = _StorageService;
        this._Router = _Router;
        this.user = this._StorageService.getItem("user", "local");
        if (!this.user || !this.user._id) {
            this._Router.navigate(["login"]);
        }
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-home",
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    margin-top: 50px;\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid mtxl\">\n    <mat-card class=\"col-lg-offset-3 col-lg-6 col-md-offset-2 col-md-8 col-sm-offset-1 col-sm-10 col-xs-12\">\n        <form [formGroup]=\"form\">\n            <div class=\"row\">\n                <mat-form-field class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n                    <input matInput placeholder=\"Username/Email\" formControlName=\"username\">\n                    <mat-error>\n                        username or email is required!\n                    </mat-error>\n                </mat-form-field>\n            </div>\n            <div class=\"row\">\n                <mat-form-field class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n                    <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\">\n                    <mat-error>\n                        password is required!\n                    </mat-error>\n                </mat-form-field>\n            </div>\n            <div class=\"row mtl\">\n                <button mat-raised-button color=\"primary\" class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\" (click)=\"login()\">Login</button>\n            </div>\n            <div class=\"row mtxs\">\n                <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 text-right\">\n                    <span>Not a member yet? &nbsp;</span>\n                    <a [routerLink]=\"['/register']\">Register Now!</a>\n                </div>\n            </div>\n        </form>\n    </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_http_interceptor_http_interceptor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/http-interceptor/http-interceptor.service */ "./src/app/shared/services/http-interceptor/http-interceptor.service.ts");
/* harmony import */ var _shared_services_events_service_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/events.service/events.service */ "./src/app/shared/services/events.service/events.service.ts");
/* harmony import */ var _shared_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/storage/storage.service */ "./src/app/shared/services/storage/storage.service.ts");
/* harmony import */ var _shared_models_api_url_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/models/api.url.model */ "./src/app/shared/models/api.url.model.ts");
/* harmony import */ var _shared_models_user_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/models/user.model */ "./src/app/shared/models/user.model.ts");
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







var LoginComponent = /** @class */ (function () {
    function LoginComponent(_Http, _StorageService, _Router, _EventsService) {
        this._Http = _Http;
        this._StorageService = _StorageService;
        this._Router = _Router;
        this._EventsService = _EventsService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.form = _shared_models_user_model__WEBPACK_IMPORTED_MODULE_6__["User"].loginForm;
    };
    LoginComponent.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var httpResponse, user, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.form.valid && this.form.dirty && this.form.touched)) return [3 /*break*/, 4];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        httpResponse = this._Http.post(_shared_models_api_url_model__WEBPACK_IMPORTED_MODULE_5__["API_URL"].LOGIN_USER, this.form.value);
                        return [4 /*yield*/, this._Http.toModel(httpResponse)];
                    case 2:
                        user = _a.sent();
                        if (!!user && !!user._id) {
                            this._EventsService.broadcast(_shared_services_events_service_events_service__WEBPACK_IMPORTED_MODULE_3__["GLOBAL_EVENTS"].SET_USER, user);
                            this._StorageService.setItem("user", user, "local");
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
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-login",
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_http_interceptor_http_interceptor_service__WEBPACK_IMPORTED_MODULE_2__["HttpInterceptorService"],
            _shared_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_services_events_service_events_service__WEBPACK_IMPORTED_MODULE_3__["EventsService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    margin-top: 50px;\n}"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid mtxl\">\n    <mat-card class=\"col-lg-offset-3 col-lg-6 col-md-offset-2 col-md-8 col-sm-offset-1 col-sm-10 col-xs-12\">\n        <form [formGroup]=\"form\">\n            <div class=\"row\">\n                <mat-form-field class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n                    <input matInput placeholder=\"Full Name\" formControlName=\"name\">\n                    <mat-error *ngIf=\"form?.controls?.name?.hasError('required')\">\n                        Name is required\n                    </mat-error>\n                </mat-form-field>\n            </div>\n            <div class=\"row\">\n                <mat-form-field class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n                    <input type=\"email\" matInput placeholder=\"Email\" formControlName=\"email\">\n                    <mat-error *ngIf=\"form?.controls?.email?.hasError('email') && !form?.controls?.email?.hasError('required')\">\n                        Please enter a valid email address\n                    </mat-error>\n                    <mat-error *ngIf=\"form?.controls?.email?.hasError('required')\">\n                        Email is required\n                    </mat-error>\n                </mat-form-field>\n            </div>\n            <div class=\"row\">\n                <mat-form-field class=\"col-lg-8 col-md-12 col-sm-12 col-xs-12\">\n                    <input matInput placeholder=\"Username\" formControlName=\"username\">\n                    <mat-error *ngIf=\"form?.controls?.username?.hasError('required')\">\n                        Username is required\n                    </mat-error>\n                    <mat-error *ngIf=\"form?.controls?.username?.hasError('minlength')\">\n                        Username should be atleast 5 letters long\n                    </mat-error>\n                </mat-form-field>\n                <div class=\"mts col-lg-4 col-md-12 col-sm-12 col-xs-12\">\n                    <mat-checkbox #copyEmail [disabled]=\"!form?.controls?.email?.valid\" (change)=\"copyEmailAsUsername(copyEmail)\">\n                        Same As Email\n                    </mat-checkbox>\n                </div>\n            </div>\n            <!-- <div class=\"row\">\n                <mat-form-field class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n                    <mat-select placeholder=\"Select City\" formControlName=\"city\">\n                        <mat-option value=\"Latur\" selected>Latur</mat-option>\n                        <mat-option value=\"Pune\">Pune</mat-option>\n                        <mat-option value=\"Mumbai\">Mumbai</mat-option>\n                        <mat-option value=\"Nagpur\">Nagpur</mat-option>\n                        <mat-option value=\"Aurangabad\">Aurangabad</mat-option>\n                    </mat-select>\n                </mat-form-field>\n            </div> -->\n            <div class=\"row\">\n                <mat-form-field class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n                    <input type=\"password\" matInput placeholder=\"Password\" formControlName=\"password\">\n                    <mat-error *ngIf=\"form?.controls?.password?.hasError('required')\">\n                        Password is required\n                    </mat-error>\n                    <mat-error *ngIf=\"form?.controls?.password?.hasError('minlength')\">\n                        Password should be atleast 6 letters long\n                    </mat-error>\n                </mat-form-field>\n            </div>\n            <div class=\"row\">\n                <mat-form-field class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n                    <input matInput type=\"password\" placeholder=\"Repeat Password\" formControlName=\"repeatPassword\">\n                    <mat-error *ngIf=\"form?.controls?.repeatPassword?.hasError('required')\">\n                        Repeat password is required\n                    </mat-error>\n                </mat-form-field>\n            </div>\n            <div class=\"row mtl\">\n                <button mat-raised-button color=\"primary\" class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\" (click)=\"register()\">Register</button>\n            </div>\n            <div class=\"row mtxs\">\n                <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 text-right\">\n                    <span>Already a member? &nbsp;</span>\n                    <a [routerLink]=\"['/login']\">Login Here!</a>\n                </div>\n            </div>\n        </form>\n    </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_models_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/models/user.model */ "./src/app/shared/models/user.model.ts");
/* harmony import */ var _shared_services_http_interceptor_http_interceptor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/http-interceptor/http-interceptor.service */ "./src/app/shared/services/http-interceptor/http-interceptor.service.ts");
/* harmony import */ var _shared_models_api_url_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/models/api.url.model */ "./src/app/shared/models/api.url.model.ts");
/* harmony import */ var _shared_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/storage/storage.service */ "./src/app/shared/services/storage/storage.service.ts");
/* harmony import */ var _shared_services_events_service_events_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/events.service/events.service */ "./src/app/shared/services/events.service/events.service.ts");
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







var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(_Http, _StorageService, _Router, _EventsService) {
        this._Http = _Http;
        this._StorageService = _StorageService;
        this._Router = _Router;
        this._EventsService = _EventsService;
        this.passwordMatching = true;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.form = _shared_models_user_model__WEBPACK_IMPORTED_MODULE_2__["User"].registrationForm;
    };
    RegisterComponent.prototype.copyEmailAsUsername = function (control) {
        if (!control) {
            return;
        }
        if (control.checked && this.form.controls.email.valid) {
            this.form.controls.username.setValue(this.form.value.email);
        }
    };
    RegisterComponent.prototype.register = function () {
        return __awaiter(this, void 0, void 0, function () {
            var httpResponse, user, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.form.valid && this.form.dirty && this.form.touched)) return [3 /*break*/, 4];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        httpResponse = this._Http.post(_shared_models_api_url_model__WEBPACK_IMPORTED_MODULE_4__["API_URL"].REGISTER_USER, this.form.value);
                        return [4 /*yield*/, this._Http.toModel(httpResponse)];
                    case 2:
                        user = _a.sent();
                        if (!!user && !!user._id) {
                            this._EventsService.broadcast(_shared_services_events_service_events_service__WEBPACK_IMPORTED_MODULE_6__["GLOBAL_EVENTS"].SET_USER, user);
                            this._StorageService.setItem("user", user, "local");
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
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-register",
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_http_interceptor_http_interceptor_service__WEBPACK_IMPORTED_MODULE_3__["HttpInterceptorService"],
            _shared_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_services_events_service_events_service__WEBPACK_IMPORTED_MODULE_6__["EventsService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/shared/models/api.url.model.ts":
/*!************************************************!*\
  !*** ./src/app/shared/models/api.url.model.ts ***!
  \************************************************/
/*! exports provided: API_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
var API_URL = {
    REGISTER_USER: "/api/user/register",
    LOGIN_USER: "/api/user/login",
    LOGGED_IN_USER: "/api/user/logged-in-user",
    LOGOUT: "/api/user/logout",
    CREATE_ORGANISATION: "/api/organisation/create",
    GET_ORGANISATION: "/api/organisation/${organisationId}"
};


/***/ }),

/***/ "./src/app/shared/models/user.model.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/models/user.model.ts ***!
  \*********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");

var User = /** @class */ (function () {
    function User() {
    }
    Object.defineProperty(User, "registrationForm", {
        get: function () {
            return new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
                name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required
                ]),
                username: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(5)
                ]),
                email: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email
                ]),
                password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(6),
                ]),
                repeatPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                ])
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User, "loginForm", {
        get: function () {
            return new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
                username: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required
                ]),
                password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required
                ])
            });
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());



/***/ }),

/***/ "./src/app/shared/models/uuid.model.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/models/uuid.model.ts ***!
  \*********************************************/
/*! exports provided: UUID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UUID", function() { return UUID; });
var UUID = /** @class */ (function () {
    function UUID() {
    }
    UUID.generate = function () {
        UUID.buildLUT();
        var d0 = Math.random() * 0xffffffff | 0;
        var d1 = Math.random() * 0xffffffff | 0;
        var d2 = Math.random() * 0xffffffff | 0;
        var d3 = Math.random() * 0xffffffff | 0;
        return UUID.lut[d0 & 0xff] + UUID.lut[d0 >> 8 & 0xff] + UUID.lut[d0 >> 16 & 0xff] + UUID.lut[d0 >> 24 & 0xff] + "-" +
            UUID.lut[d1 & 0xff] + UUID.lut[d1 >> 8 & 0xff] + "-" + UUID.lut[d1 >> 16 & 0x0f | 0x40] + UUID.lut[d1 >> 24 & 0xff] + "-" +
            UUID.lut[d2 & 0x3f | 0x80] + UUID.lut[d2 >> 8 & 0xff] + "-" + UUID.lut[d2 >> 16 & 0xff] + UUID.lut[d2 >> 24 & 0xff] +
            UUID.lut[d3 & 0xff] + UUID.lut[d3 >> 8 & 0xff] + UUID.lut[d3 >> 16 & 0xff] + UUID.lut[d3 >> 24 & 0xff];
    };
    UUID.buildLUT = function () {
        UUID.lut = [];
        for (var i = 0; i < 256; i++) {
            UUID.lut[i] = (i < 16 ? "0" : "") + (i).toString(16);
        }
    };
    return UUID;
}());



/***/ }),

/***/ "./src/app/shared/services/auth-guard/auth-guard.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/services/auth-guard/auth-guard.service.ts ***!
  \******************************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _storage_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../storage/storage.service */ "./src/app/shared/services/storage/storage.service.ts");
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



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(_Router, _StorageService) {
        this._Router = _Router;
        this._StorageService = _StorageService;
    }
    AuthGuardService.prototype.canActivate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                try {
                    user = this._StorageService.getItem("user", "local");
                    if (!user || !user._id) {
                        this._Router.navigate(["/login"]);
                        return [2 /*return*/, Promise.resolve(false)];
                    }
                    this._StorageService.setItem("user", user, "local");
                    return [2 /*return*/, Promise.resolve(true)];
                }
                catch (error) {
                    return [2 /*return*/, Promise.reject(false)];
                }
                return [2 /*return*/];
            });
        });
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _storage_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/shared/services/events.service/events.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/services/events.service/events.service.ts ***!
  \******************************************************************/
/*! exports provided: GLOBAL_EVENTS, EventsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLOBAL_EVENTS", function() { return GLOBAL_EVENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsService", function() { return EventsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _models_uuid_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/uuid.model */ "./src/app/shared/models/uuid.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GLOBAL_EVENTS = {
    TOGGLE_LOADER: "TOGGLE_LOADER",
    SHOW_SNACKBAR: "SHOW_SNACKBAR",
    SET_USER: "SET_USER",
    SET_ORGANISATION: "SET_ORGANISATION"
};
/**
 *
 *
 * @class EventListener
 */
var EventListener = /** @class */ (function () {
    function EventListener(uuid, func) {
        if (!uuid || !func) {
            console.error("required arguments not provided!");
            return;
        }
        this._uuid = uuid;
        this.func = func;
    }
    Object.defineProperty(EventListener.prototype, "uuid", {
        get: function () {
            return this._uuid;
        },
        enumerable: true,
        configurable: true
    });
    return EventListener;
}());
var EventsService = /** @class */ (function () {
    function EventsService() {
        var _this = this;
        //initialise listeners
        this.listeners = new Map();
        //initialise event subject
        this.eventsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        //listen to the changes in subject
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.eventsSubject)
            .subscribe(function (_a) {
            var name = _a.name, args = _a.args;
            if (_this.listeners[name]) {
                _this.listeners[name].forEach(function (listener) {
                    listener.func.apply(listener, args);
                });
            }
        });
    }
    /**
     * Listens to the event and provides a unique key for the listener
     * @method on
     * @param {string} name name of the event to be listened to.
     * @param {Function} listener listener function with one array argument
     * @return {string} returns the key (UUID) for listener function which can be used to stop listening to the event.
     * @memberof EventsService
    */
    EventsService.prototype.on = function (name, listener) {
        this.listeners[name] = this.listeners[name] || [];
        var listenerEvent = new EventListener(_models_uuid_model__WEBPACK_IMPORTED_MODULE_2__["UUID"].generate(), listener);
        this.listeners[name].push(listenerEvent);
        return listenerEvent.uuid;
    };
    /**
     * Stops listening to the event by using the unique key for the listener
     * @method off
     * @param {string} name name of the event to be broadcasted
     * @param {string} uuid name of the event listener specific uuid to be removed
     * @param {boolean} [removeAll=false] removes all event listeners attached to specified event name
     * @returns {void}
     * @memberof EventsService
    */
    EventsService.prototype.off = function (name, uuid, removeAll) {
        if (removeAll === void 0) { removeAll = false; }
        if (!this.listeners[name] || !this.listeners[name].length) {
            return;
        }
        if (removeAll) {
            this.listeners[name] = [];
            return;
        }
        this.listeners[name] = this.listeners[name].filter(function (item, index) {
            return item.uuid !== uuid;
        });
    };
    /**
     * Broadcasts the event and passes data provided in args argument as event data
     * @method broadcast
     * @param {string} name name of the event to be broadcasted.
     * @param {any} args arguments to be sent with the event.
     * @return {void} return void
     * @memberof EventsService
    */
    EventsService.prototype.broadcast = function (name) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        this.eventsSubject.next({ name: name, args: args });
    };
    EventsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], EventsService);
    return EventsService;
}());



/***/ }),

/***/ "./src/app/shared/services/http-interceptor/http-interceptor.service.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shared/services/http-interceptor/http-interceptor.service.ts ***!
  \******************************************************************************/
/*! exports provided: HttpInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpInterceptorService", function() { return HttpInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _events_service_events_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../events.service/events.service */ "./src/app/shared/services/events.service/events.service.ts");
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





var HttpInterceptorService = /** @class */ (function (_super) {
    __extends(HttpInterceptorService, _super);
    function HttpInterceptorService(_XHRBackend, _RequestOptions, _EventsService) {
        var _this = _super.call(this, _XHRBackend, _RequestOptions) || this;
        _this._XHRBackend = _XHRBackend;
        _this._RequestOptions = _RequestOptions;
        _this._EventsService = _EventsService;
        return _this;
    }
    HttpInterceptorService.prototype.request = function (url, options) {
        return this.handleResponse(_super.prototype.request.call(this, url, options));
    };
    HttpInterceptorService.prototype.get = function (url, options) {
        this.beforeRequest(url);
        return _super.prototype.get.call(this, url, this.getRequestOptionArgs(options));
    };
    HttpInterceptorService.prototype.post = function (url, body, options) {
        this.beforeRequest(url, body);
        return _super.prototype.post.call(this, url, body, this.getRequestOptionArgs(options));
    };
    HttpInterceptorService.prototype.put = function (url, body, options) {
        this.beforeRequest(url, body);
        return _super.prototype.put.call(this, url, body, this.getRequestOptionArgs(options));
    };
    HttpInterceptorService.prototype.delete = function (url, options) {
        this.beforeRequest(url);
        return _super.prototype.delete.call(this, url, this.getRequestOptionArgs(options));
    };
    HttpInterceptorService.prototype.toModel = function (httpResponse) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, httpResponse.toPromise()];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, JSON.parse(JSON.stringify(response))];
                }
            });
        });
    };
    HttpInterceptorService.prototype.getRequestOptionArgs = function (options) {
        if (options == null) {
            options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]();
        }
        if (options.headers == null) {
            options.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]();
        }
        options.headers.append("Content-Type", "application/json");
        return options;
    };
    HttpInterceptorService.prototype.handleResponse = function (response) {
        var _this = this;
        return response.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return _this.processResponse(response); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.onCatch.bind(this)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(this.onSuccess.bind(this), this.onError.bind(this)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(this.afterResponse.bind(this)));
    };
    HttpInterceptorService.prototype.processResponse = function (response) {
        var apiresponse = response.json();
        if (!apiresponse || !apiresponse.status) {
            this._EventsService.broadcast(_events_service_events_service__WEBPACK_IMPORTED_MODULE_4__["GLOBAL_EVENTS"].SHOW_SNACKBAR, apiresponse.messages[0]);
        }
        return apiresponse.data;
    };
    HttpInterceptorService.prototype.beforeRequest = function (url, body) {
        this._EventsService.broadcast(_events_service_events_service__WEBPACK_IMPORTED_MODULE_4__["GLOBAL_EVENTS"].TOGGLE_LOADER, true);
    };
    HttpInterceptorService.prototype.afterResponse = function () {
        this._EventsService.broadcast(_events_service_events_service__WEBPACK_IMPORTED_MODULE_4__["GLOBAL_EVENTS"].TOGGLE_LOADER, false);
    };
    HttpInterceptorService.prototype.onCatch = function (error, caught) {
        this._EventsService.broadcast(_events_service_events_service__WEBPACK_IMPORTED_MODULE_4__["GLOBAL_EVENTS"].SHOW_SNACKBAR, "Error occurred!");
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
    };
    HttpInterceptorService.prototype.onSuccess = function (response) {
    };
    HttpInterceptorService.prototype.onError = function (error) {
        console.error(error);
    };
    HttpInterceptorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_3__["XHRBackend"],
            _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"],
            _events_service_events_service__WEBPACK_IMPORTED_MODULE_4__["EventsService"]])
    ], HttpInterceptorService);
    return HttpInterceptorService;
}(_angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"]));



/***/ }),

/***/ "./src/app/shared/services/logged-in-guard/logged-in-guard.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/services/logged-in-guard/logged-in-guard.service.ts ***!
  \****************************************************************************/
/*! exports provided: LoggedInGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggedInGuardService", function() { return LoggedInGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_interceptor_http_interceptor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http-interceptor/http-interceptor.service */ "./src/app/shared/services/http-interceptor/http-interceptor.service.ts");
/* harmony import */ var _storage_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage/storage.service */ "./src/app/shared/services/storage/storage.service.ts");
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




var LoggedInGuardService = /** @class */ (function () {
    function LoggedInGuardService(_Router, _Http, _StorageService) {
        this._Router = _Router;
        this._Http = _Http;
        this._StorageService = _StorageService;
    }
    LoggedInGuardService.prototype.canActivate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                try {
                    user = this._StorageService.getItem("user", "local");
                    if (!user || !user._id) {
                        return [2 /*return*/, Promise.resolve(true)];
                    }
                    this._StorageService.setItem("user", user, "local");
                    this._Router.navigate(["/"]);
                    return [2 /*return*/, Promise.resolve(false)];
                }
                catch (error) {
                    return [2 /*return*/, Promise.reject(false)];
                }
                return [2 /*return*/];
            });
        });
    };
    LoggedInGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _http_interceptor_http_interceptor_service__WEBPACK_IMPORTED_MODULE_2__["HttpInterceptorService"],
            _storage_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]])
    ], LoggedInGuardService);
    return LoggedInGuardService;
}());



/***/ }),

/***/ "./src/app/shared/services/storage/storage.service.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/services/storage/storage.service.ts ***!
  \************************************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StorageService = /** @class */ (function () {
    function StorageService(_CookieService) {
        this._CookieService = _CookieService;
    }
    StorageService.prototype.getItem = function (key, storageType) {
        if (storageType === void 0) { storageType = "cookie"; }
        if (!key || !key.trim()) {
            return null;
        }
        if (storageType === "cookie") {
            try {
                return this._CookieService.get(key);
            }
            catch (error) {
                return null;
            }
        }
        if (!this.checkStorageSupport()) {
            return null;
        }
        var value = storageType === "local" ? localStorage.getItem(key) : sessionStorage.getItem(key);
        try {
            value = JSON.parse(value);
        }
        catch (error) {
            return null;
        }
        return value;
    };
    StorageService.prototype.setItem = function (key, value, storageType) {
        if (storageType === void 0) { storageType = "cookie"; }
        if (!key || !key.trim()) {
            return false;
        }
        value = value || null;
        if (storageType === "cookie") {
            try {
                this._CookieService.set(key, value);
                return true;
            }
            catch (error) {
                return false;
            }
        }
        if (!this.checkStorageSupport()) {
            return false;
        }
        try {
            value = JSON.stringify(value);
        }
        catch (error) { }
        ;
        storageType === "local" ? localStorage.setItem(key, value) : sessionStorage.setItem(key, value);
        return true;
    };
    StorageService.prototype.setKey = function (key, subKey, value, storageType) {
        if (storageType === void 0) { storageType = "cookie"; }
        if (!subKey || !value) {
            return false;
        }
        try {
            var data = this.getItem(key, storageType);
            data[subKey] = value;
            this.setItem(key, data, storageType);
            return true;
        }
        catch (error) {
            return false;
        }
    };
    StorageService.prototype.checkStorageSupport = function () {
        return typeof Storage !== "undefined";
    };
    StorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"]])
    ], StorageService);
    return StorageService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _services_http_interceptor_http_interceptor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/http-interceptor/http-interceptor.service */ "./src/app/shared/services/http-interceptor/http-interceptor.service.ts");
/* harmony import */ var _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/storage/storage.service */ "./src/app/shared/services/storage/storage.service.ts");
/* harmony import */ var _services_events_service_events_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/events.service/events.service */ "./src/app/shared/services/events.service/events.service.ts");
/* harmony import */ var _services_logged_in_guard_logged_in_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/logged-in-guard/logged-in-guard.service */ "./src/app/shared/services/logged-in-guard/logged-in-guard.service.ts");
/* harmony import */ var _services_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/auth-guard/auth-guard.service */ "./src/app/shared/services/auth-guard/auth-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//angular modules


//external modules


//services






var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"]
            ],
            declarations: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
            providers: [
                ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"],
                _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"],
                _services_http_interceptor_http_interceptor_service__WEBPACK_IMPORTED_MODULE_5__["HttpInterceptorService"],
                _services_events_service_events_service__WEBPACK_IMPORTED_MODULE_7__["EventsService"],
                _services_logged_in_guard_logged_in_guard_service__WEBPACK_IMPORTED_MODULE_8__["LoggedInGuardService"],
                _services_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"]
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["LayoutModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/kepler/code/github/ogile/ui/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map