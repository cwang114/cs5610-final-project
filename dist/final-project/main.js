(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/components/main/main.component.ts");






var routes = [
    { path: '', component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'final-project';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_route_management_route_management_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/route-management/route-management.component */ "./src/app/components/route-management/route-management.component.ts");
/* harmony import */ var _components_footbar_footbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/footbar/footbar.component */ "./src/app/components/footbar/footbar.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_profile_admin_profile_admin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/profile-admin/profile-admin.component */ "./src/app/components/profile-admin/profile-admin.component.ts");
/* harmony import */ var _components_profile_user_profile_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/profile-user/profile-user.component */ "./src/app/components/profile-user/profile-user.component.ts");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/components/main/main.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _service_shared_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./service/shared.service */ "./src/app/service/shared.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_headerbar_headerbar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/headerbar/headerbar.component */ "./src/app/components/headerbar/headerbar.component.ts");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_route_management_route_management_component__WEBPACK_IMPORTED_MODULE_5__["RouteManagementComponent"],
                _components_footbar_footbar_component__WEBPACK_IMPORTED_MODULE_6__["FootbarComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                _components_profile_admin_profile_admin_component__WEBPACK_IMPORTED_MODULE_9__["ProfileAdminComponent"],
                _components_profile_user_profile_user_component__WEBPACK_IMPORTED_MODULE_10__["ProfileUserComponent"],
                _components_main_main_component__WEBPACK_IMPORTED_MODULE_11__["MainComponent"],
                _components_headerbar_headerbar_component__WEBPACK_IMPORTED_MODULE_17__["HeaderbarComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
            ],
            providers: [_service_user_service__WEBPACK_IMPORTED_MODULE_14__["UserService"], _service_shared_service__WEBPACK_IMPORTED_MODULE_15__["SharedService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/footbar/footbar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/footbar/footbar.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "svg:not(:root)\n.svg-inline--fa {\n    overflow: visible\n}\n\n.svg-inline--fa {\n    display: inline-block;\n    font-size: inherit;\n    height: 1em;\n    overflow: visible;\n    vertical-align: -.125em\n}\n\n.svg-inline--fa.fa-lg {\n    vertical-align: -.225em\n}\n\n.svg-inline--fa.fa-w-1 {\n    width: .0625em\n}\n\n.svg-inline--fa.fa-w-2 {\n    width: .125em\n}\n\n.svg-inline--fa.fa-w-3 {\n    width: .1875em\n}\n\n.svg-inline--fa.fa-w-4 {\n    width: .25em\n}\n\n.svg-inline--fa.fa-w-5 {\n    width: .3125em\n}\n\n.svg-inline--fa.fa-w-6 {\n    width: .375em\n}\n\n.svg-inline--fa.fa-w-7 {\n    width: .4375em\n}\n\n.svg-inline--fa.fa-w-8 {\n    width: .5em\n}\n\n.svg-inline--fa.fa-w-9 {\n    width: .5625em\n}\n\n.svg-inline--fa.fa-w-10 {\n    width: .625em\n}\n\n.svg-inline--fa.fa-w-11 {\n    width: .6875em\n}\n\n.svg-inline--fa.fa-w-12 {\n    width: .75em\n}\n\n.svg-inline--fa.fa-w-13 {\n    width: .8125em\n}\n\n.svg-inline--fa.fa-w-14 {\n    width: .875em\n}\n\n.svg-inline--fa.fa-w-15 {\n    width: .9375em\n}\n\n.svg-inline--fa.fa-w-16 {\n    width: 1em\n}\n\n.svg-inline--fa.fa-w-17 {\n    width: 1.0625em\n}\n\n.svg-inline--fa.fa-w-18 {\n    width: 1.125em\n}\n\n.svg-inline--fa.fa-w-19 {\n    width: 1.1875em\n}\n\n.svg-inline--fa.fa-w-20 {\n    width: 1.25em\n}\n\n.svg-inline--fa.fa-pull-left {\n    margin-right: .3em;\n    width: auto\n}\n\n.svg-inline--fa.fa-pull-right {\n    margin-left: .3em;\n    width: auto\n}\n\n.svg-inline--fa.fa-border {\n    height: 1.5em\n}\n\n.svg-inline--fa.fa-li {\n    width: 2em\n}\n\n.svg-inline--fa.fa-fw {\n    width: 1.25em\n}\n\n.fa-layers svg.svg-inline--fa {\n    bottom: 0;\n    left: 0;\n    margin: auto;\n    position: absolute;\n    right: 0;\n    top: 0\n}\n\n.fa-layers {\n    display: inline-block;\n    height: 1em;\n    position: relative;\n    text-align: center;\n    vertical-align: -.125em;\n    width: 1em\n}\n\n.fa-layers svg.svg-inline--fa {\n    -webkit-transform-origin: center center;\n    transform-origin: center center\n}\n\n.fa-layers-counter, .fa-layers-text {\n    display: inline-block;\n    position: absolute;\n    text-align: center\n}\n\n.fa-layers-text {\n    left: 50%;\n    top: 50%;\n    -webkit-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%);\n    -webkit-transform-origin: center center;\n    transform-origin: center center\n}\n\n.fa-layers-counter {\n    background-color: #ff253a;\n    border-radius: 1em;\n    box-sizing: border-box;\n    color: #fff;\n    height: 1.5em;\n    line-height: 1;\n    max-width: 5em;\n    min-width: 1.5em;\n    overflow: hidden;\n    padding: .25em;\n    right: 0;\n    text-overflow: ellipsis;\n    top: 0;\n    -webkit-transform: scale(.25);\n    transform: scale(.25);\n    -webkit-transform-origin: top right;\n    transform-origin: top right\n}\n\n.fa-layers-bottom-right {\n    bottom: 0;\n    right: 0;\n    top: auto;\n    -webkit-transform: scale(.25);\n    transform: scale(.25);\n    -webkit-transform-origin: bottom right;\n    transform-origin: bottom right\n}\n\n.fa-layers-bottom-left {\n    bottom: 0;\n    left: 0;\n    right: auto;\n    top: auto;\n    -webkit-transform: scale(.25);\n    transform: scale(.25);\n    -webkit-transform-origin: bottom left;\n    transform-origin: bottom left\n}\n\n.fa-layers-top-right {\n    right: 0;\n    top: 0;\n    -webkit-transform: scale(.25);\n    transform: scale(.25);\n    -webkit-transform-origin: top right;\n    transform-origin: top right\n}\n\n.fa-layers-top-left {\n    left: 0;\n    right: auto;\n    top: 0;\n    -webkit-transform: scale(.25);\n    transform: scale(.25);\n    -webkit-transform-origin: top left;\n    transform-origin: top left\n}\n\n.fa-lg {\n    font-size: 1.33333em;\n    line-height: .75em;\n    vertical-align: -.0667em\n}\n\n.fa-xs {\n    font-size: .75em\n}\n\n.fa-sm {\n    font-size: .875em\n}\n\n.fa-1x {\n    font-size: 1em\n}\n\n.fa-2x {\n    font-size: 2em\n}\n\n.fa-3x {\n    font-size: 3em\n}\n\n.fa-4x {\n    font-size: 4em\n}\n\n.fa-5x {\n    font-size: 5em\n}\n\n.fa-6x {\n    font-size: 6em\n}\n\n.fa-7x {\n    font-size: 7em\n}\n\n.fa-8x {\n    font-size: 8em\n}\n\n.fa-9x {\n    font-size: 9em\n}\n\n.fa-10x {\n    font-size: 10em\n}\n\n.fa-fw {\n    text-align: center;\n    width: 1.25em\n}\n\n.fa-ul {\n    list-style-type: none;\n    margin-left: 2.5em;\n    padding-left: 0\n}\n\n.fa-ul > li {\n    position: relative\n}\n\n.fa-li {\n    left: -2em;\n    position: absolute;\n    text-align: center;\n    width: 2em;\n    line-height: inherit\n}\n\n.fa-border {\n    border: solid .08em #eee;\n    border-radius: .1em;\n    padding: .2em .25em .15em\n}\n\n.fa-pull-left {\n    float: left\n}\n\n.fa-pull-right {\n    float: right\n}\n\n.fa.fa-pull-left, .fab.fa-pull-left, .fal.fa-pull-left, .far.fa-pull-left, .fas.fa-pull-left {\n    margin-right: .3em\n}\n\n.fa.fa-pull-right, .fab.fa-pull-right, .fal.fa-pull-right, .far.fa-pull-right, .fas.fa-pull-right {\n    margin-left: .3em\n}\n\n.fa-spin {\n    -webkit-animation: fa-spin 2s infinite linear;\n    animation: fa-spin 2s infinite linear\n}\n\n.fa-pulse {\n    -webkit-animation: fa-spin 1s infinite steps(8);\n    animation: fa-spin 1s infinite steps(8)\n}\n\n@-webkit-keyframes fa-spin {\n    0% {\n        -webkit-transform: rotate(0);\n        transform: rotate(0)\n    }\n    100% {\n        -webkit-transform: rotate(360deg);\n        transform: rotate(360deg)\n    }\n}\n\n@keyframes fa-spin {\n    0% {\n        -webkit-transform: rotate(0);\n        transform: rotate(0)\n    }\n    100% {\n        -webkit-transform: rotate(360deg);\n        transform: rotate(360deg)\n    }\n}\n\n.fa-rotate-90 {\n    -webkit-transform: rotate(90deg);\n    transform: rotate(90deg)\n}\n\n.fa-rotate-180 {\n    -webkit-transform: rotate(180deg);\n    transform: rotate(180deg)\n}\n\n.fa-rotate-270 {\n    -webkit-transform: rotate(270deg);\n    transform: rotate(270deg)\n}\n\n.fa-flip-horizontal {\n    -webkit-transform: scale(-1, 1);\n    transform: scale(-1, 1)\n}\n\n.fa-flip-vertical {\n    -webkit-transform: scale(1, -1);\n    transform: scale(1, -1)\n}\n\n.fa-flip-horizontal.fa-flip-vertical {\n    -webkit-transform: scale(-1, -1);\n    transform: scale(-1, -1)\n}\n\n:root .fa-flip-horizontal, :root .fa-flip-vertical, :root .fa-rotate-180, :root .fa-rotate-270, :root .fa-rotate-90 {\n    -webkit-filter: none;\n    filter: none\n}\n\n.fa-stack {\n    display: inline-block;\n    height: 2em;\n    position: relative;\n    width: 2.5em\n}\n\n.fa-stack-1x, .fa-stack-2x {\n    bottom: 0;\n    left: 0;\n    margin: auto;\n    position: absolute;\n    right: 0;\n    top: 0\n}\n\n.svg-inline--fa.fa-stack-1x {\n    height: 1em;\n    width: 1.25em\n}\n\n.svg-inline--fa.fa-stack-2x {\n    height: 2em;\n    width: 2.5em\n}\n\n.fa-inverse {\n    color: #fff\n}\n\n.sr-only {\n    border: 0;\n    clip: rect(0, 0, 0, 0);\n    height: 1px;\n    margin: -1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    width: 1px\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n    clip: auto;\n    height: auto;\n    margin: 0;\n    overflow: visible;\n    position: static;\n    width: auto\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290YmFyL2Zvb3RiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSTtBQUNKOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEI7QUFDSjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQjtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksU0FBUztJQUNULE9BQU87SUFDUCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUjtBQUNKOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QjtBQUNKOztBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDO0FBQ0o7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCO0FBQ0o7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsUUFBUTtJQUNSLHdDQUF3QztJQUN4QyxnQ0FBZ0M7SUFDaEMsdUNBQXVDO0lBQ3ZDO0FBQ0o7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBRWxCLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsYUFBYTtJQUNiLGNBQWM7SUFDZCxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsUUFBUTtJQUNSLHVCQUF1QjtJQUN2QixNQUFNO0lBQ04sNkJBQTZCO0lBQzdCLHFCQUFxQjtJQUNyQixtQ0FBbUM7SUFDbkM7QUFDSjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxRQUFRO0lBQ1IsU0FBUztJQUNULDZCQUE2QjtJQUM3QixxQkFBcUI7SUFDckIsc0NBQXNDO0lBQ3RDO0FBQ0o7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsT0FBTztJQUNQLFdBQVc7SUFDWCxTQUFTO0lBQ1QsNkJBQTZCO0lBQzdCLHFCQUFxQjtJQUNyQixxQ0FBcUM7SUFDckM7QUFDSjs7QUFFQTtJQUNJLFFBQVE7SUFDUixNQUFNO0lBQ04sNkJBQTZCO0lBQzdCLHFCQUFxQjtJQUNyQixtQ0FBbUM7SUFDbkM7QUFDSjs7QUFFQTtJQUNJLE9BQU87SUFDUCxXQUFXO0lBQ1gsTUFBTTtJQUNOLDZCQUE2QjtJQUM3QixxQkFBcUI7SUFDckIsa0NBQWtDO0lBQ2xDO0FBQ0o7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEI7QUFDSjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEI7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Y7QUFDSjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkI7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSw2Q0FBNkM7SUFDN0M7QUFDSjs7QUFFQTtJQUNJLCtDQUErQztJQUMvQztBQUNKOztBQUVBO0lBQ0k7UUFDSSw0QkFBNEI7UUFDNUI7SUFDSjtJQUNBO1FBQ0ksaUNBQWlDO1FBQ2pDO0lBQ0o7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksNEJBQTRCO1FBQzVCO0lBQ0o7SUFDQTtRQUNJLGlDQUFpQztRQUNqQztJQUNKO0FBQ0o7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEM7QUFDSjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQztBQUNKOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDO0FBQ0o7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0I7QUFDSjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQjtBQUNKOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDO0FBQ0o7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEI7QUFDSjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCO0FBQ0o7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsT0FBTztJQUNQLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSO0FBQ0o7O0FBRUE7SUFDSSxXQUFXO0lBQ1g7QUFDSjs7QUFFQTtJQUNJLFdBQVc7SUFDWDtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQjtBQUNKOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290YmFyL2Zvb3RiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInN2Zzpub3QoOnJvb3QpXG4uc3ZnLWlubGluZS0tZmEge1xuICAgIG92ZXJmbG93OiB2aXNpYmxlXG59XG5cbi5zdmctaW5saW5lLS1mYSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICBoZWlnaHQ6IDFlbTtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogLS4xMjVlbVxufVxuXG4uc3ZnLWlubGluZS0tZmEuZmEtbGcge1xuICAgIHZlcnRpY2FsLWFsaWduOiAtLjIyNWVtXG59XG5cbi5zdmctaW5saW5lLS1mYS5mYS13LTEge1xuICAgIHdpZHRoOiAuMDYyNWVtXG59XG5cbi5zdmctaW5saW5lLS1mYS5mYS13LTIge1xuICAgIHdpZHRoOiAuMTI1ZW1cbn1cblxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctMyB7XG4gICAgd2lkdGg6IC4xODc1ZW1cbn1cblxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctNCB7XG4gICAgd2lkdGg6IC4yNWVtXG59XG5cbi5zdmctaW5saW5lLS1mYS5mYS13LTUge1xuICAgIHdpZHRoOiAuMzEyNWVtXG59XG5cbi5zdmctaW5saW5lLS1mYS5mYS13LTYge1xuICAgIHdpZHRoOiAuMzc1ZW1cbn1cblxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctNyB7XG4gICAgd2lkdGg6IC40Mzc1ZW1cbn1cblxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctOCB7XG4gICAgd2lkdGg6IC41ZW1cbn1cblxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctOSB7XG4gICAgd2lkdGg6IC41NjI1ZW1cbn1cblxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctMTAge1xuICAgIHdpZHRoOiAuNjI1ZW1cbn1cblxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctMTEge1xuICAgIHdpZHRoOiAuNjg3NWVtXG59XG5cbi5zdmctaW5saW5lLS1mYS5mYS13LTEyIHtcbiAgICB3aWR0aDogLjc1ZW1cbn1cblxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctMTMge1xuICAgIHdpZHRoOiAuODEyNWVtXG59XG5cbi5zdmctaW5saW5lLS1mYS5mYS13LTE0IHtcbiAgICB3aWR0aDogLjg3NWVtXG59XG5cbi5zdmctaW5saW5lLS1mYS5mYS13LTE1IHtcbiAgICB3aWR0aDogLjkzNzVlbVxufVxuXG4uc3ZnLWlubGluZS0tZmEuZmEtdy0xNiB7XG4gICAgd2lkdGg6IDFlbVxufVxuXG4uc3ZnLWlubGluZS0tZmEuZmEtdy0xNyB7XG4gICAgd2lkdGg6IDEuMDYyNWVtXG59XG5cbi5zdmctaW5saW5lLS1mYS5mYS13LTE4IHtcbiAgICB3aWR0aDogMS4xMjVlbVxufVxuXG4uc3ZnLWlubGluZS0tZmEuZmEtdy0xOSB7XG4gICAgd2lkdGg6IDEuMTg3NWVtXG59XG5cbi5zdmctaW5saW5lLS1mYS5mYS13LTIwIHtcbiAgICB3aWR0aDogMS4yNWVtXG59XG5cbi5zdmctaW5saW5lLS1mYS5mYS1wdWxsLWxlZnQge1xuICAgIG1hcmdpbi1yaWdodDogLjNlbTtcbiAgICB3aWR0aDogYXV0b1xufVxuXG4uc3ZnLWlubGluZS0tZmEuZmEtcHVsbC1yaWdodCB7XG4gICAgbWFyZ2luLWxlZnQ6IC4zZW07XG4gICAgd2lkdGg6IGF1dG9cbn1cblxuLnN2Zy1pbmxpbmUtLWZhLmZhLWJvcmRlciB7XG4gICAgaGVpZ2h0OiAxLjVlbVxufVxuXG4uc3ZnLWlubGluZS0tZmEuZmEtbGkge1xuICAgIHdpZHRoOiAyZW1cbn1cblxuLnN2Zy1pbmxpbmUtLWZhLmZhLWZ3IHtcbiAgICB3aWR0aDogMS4yNWVtXG59XG5cbi5mYS1sYXllcnMgc3ZnLnN2Zy1pbmxpbmUtLWZhIHtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMFxufVxuXG4uZmEtbGF5ZXJzIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgaGVpZ2h0OiAxZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogLS4xMjVlbTtcbiAgICB3aWR0aDogMWVtXG59XG5cbi5mYS1sYXllcnMgc3ZnLnN2Zy1pbmxpbmUtLWZhIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlclxufVxuXG4uZmEtbGF5ZXJzLWNvdW50ZXIsIC5mYS1sYXllcnMtdGV4dCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcbn1cblxuLmZhLWxheWVycy10ZXh0IHtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiA1MCU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlclxufVxuXG4uZmEtbGF5ZXJzLWNvdW50ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjI1M2E7XG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGhlaWdodDogMS41ZW07XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgbWF4LXdpZHRoOiA1ZW07XG4gICAgbWluLXdpZHRoOiAxLjVlbTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmc6IC4yNWVtO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHRvcDogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLjI1KTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC4yNSk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3AgcmlnaHQ7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIHJpZ2h0XG59XG5cbi5mYS1sYXllcnMtYm90dG9tLXJpZ2h0IHtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiBhdXRvO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSguMjUpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoLjI1KTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSByaWdodDtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gcmlnaHRcbn1cblxuLmZhLWxheWVycy1ib3R0b20tbGVmdCB7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IGF1dG87XG4gICAgdG9wOiBhdXRvO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSguMjUpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoLjI1KTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0O1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0XG59XG5cbi5mYS1sYXllcnMtdG9wLXJpZ2h0IHtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC4yNSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSguMjUpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogdG9wIHJpZ2h0O1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCByaWdodFxufVxuXG4uZmEtbGF5ZXJzLXRvcC1sZWZ0IHtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiBhdXRvO1xuICAgIHRvcDogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLjI1KTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC4yNSk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdFxufVxuXG4uZmEtbGcge1xuICAgIGZvbnQtc2l6ZTogMS4zMzMzM2VtO1xuICAgIGxpbmUtaGVpZ2h0OiAuNzVlbTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogLS4wNjY3ZW1cbn1cblxuLmZhLXhzIHtcbiAgICBmb250LXNpemU6IC43NWVtXG59XG5cbi5mYS1zbSB7XG4gICAgZm9udC1zaXplOiAuODc1ZW1cbn1cblxuLmZhLTF4IHtcbiAgICBmb250LXNpemU6IDFlbVxufVxuXG4uZmEtMngge1xuICAgIGZvbnQtc2l6ZTogMmVtXG59XG5cbi5mYS0zeCB7XG4gICAgZm9udC1zaXplOiAzZW1cbn1cblxuLmZhLTR4IHtcbiAgICBmb250LXNpemU6IDRlbVxufVxuXG4uZmEtNXgge1xuICAgIGZvbnQtc2l6ZTogNWVtXG59XG5cbi5mYS02eCB7XG4gICAgZm9udC1zaXplOiA2ZW1cbn1cblxuLmZhLTd4IHtcbiAgICBmb250LXNpemU6IDdlbVxufVxuXG4uZmEtOHgge1xuICAgIGZvbnQtc2l6ZTogOGVtXG59XG5cbi5mYS05eCB7XG4gICAgZm9udC1zaXplOiA5ZW1cbn1cblxuLmZhLTEweCB7XG4gICAgZm9udC1zaXplOiAxMGVtXG59XG5cbi5mYS1mdyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxLjI1ZW1cbn1cblxuLmZhLXVsIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgbWFyZ2luLWxlZnQ6IDIuNWVtO1xuICAgIHBhZGRpbmctbGVmdDogMFxufVxuXG4uZmEtdWwgPiBsaSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlXG59XG5cbi5mYS1saSB7XG4gICAgbGVmdDogLTJlbTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAyZW07XG4gICAgbGluZS1oZWlnaHQ6IGluaGVyaXRcbn1cblxuLmZhLWJvcmRlciB7XG4gICAgYm9yZGVyOiBzb2xpZCAuMDhlbSAjZWVlO1xuICAgIGJvcmRlci1yYWRpdXM6IC4xZW07XG4gICAgcGFkZGluZzogLjJlbSAuMjVlbSAuMTVlbVxufVxuXG4uZmEtcHVsbC1sZWZ0IHtcbiAgICBmbG9hdDogbGVmdFxufVxuXG4uZmEtcHVsbC1yaWdodCB7XG4gICAgZmxvYXQ6IHJpZ2h0XG59XG5cbi5mYS5mYS1wdWxsLWxlZnQsIC5mYWIuZmEtcHVsbC1sZWZ0LCAuZmFsLmZhLXB1bGwtbGVmdCwgLmZhci5mYS1wdWxsLWxlZnQsIC5mYXMuZmEtcHVsbC1sZWZ0IHtcbiAgICBtYXJnaW4tcmlnaHQ6IC4zZW1cbn1cblxuLmZhLmZhLXB1bGwtcmlnaHQsIC5mYWIuZmEtcHVsbC1yaWdodCwgLmZhbC5mYS1wdWxsLXJpZ2h0LCAuZmFyLmZhLXB1bGwtcmlnaHQsIC5mYXMuZmEtcHVsbC1yaWdodCB7XG4gICAgbWFyZ2luLWxlZnQ6IC4zZW1cbn1cblxuLmZhLXNwaW4ge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYS1zcGluIDJzIGluZmluaXRlIGxpbmVhcjtcbiAgICBhbmltYXRpb246IGZhLXNwaW4gMnMgaW5maW5pdGUgbGluZWFyXG59XG5cbi5mYS1wdWxzZSB7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IGZhLXNwaW4gMXMgaW5maW5pdGUgc3RlcHMoOCk7XG4gICAgYW5pbWF0aW9uOiBmYS1zcGluIDFzIGluZmluaXRlIHN0ZXBzKDgpXG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBmYS1zcGluIHtcbiAgICAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDApXG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZylcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgZmEtc3BpbiB7XG4gICAgMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDApO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKVxuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpXG4gICAgfVxufVxuXG4uZmEtcm90YXRlLTkwIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZylcbn1cblxuLmZhLXJvdGF0ZS0xODAge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpXG59XG5cbi5mYS1yb3RhdGUtMjcwIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKVxufVxuXG4uZmEtZmxpcC1ob3Jpem9udGFsIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoLTEsIDEpXG59XG5cbi5mYS1mbGlwLXZlcnRpY2FsIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwgLTEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgLTEpXG59XG5cbi5mYS1mbGlwLWhvcml6b250YWwuZmEtZmxpcC12ZXJ0aWNhbCB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC0xLCAtMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgtMSwgLTEpXG59XG5cbjpyb290IC5mYS1mbGlwLWhvcml6b250YWwsIDpyb290IC5mYS1mbGlwLXZlcnRpY2FsLCA6cm9vdCAuZmEtcm90YXRlLTE4MCwgOnJvb3QgLmZhLXJvdGF0ZS0yNzAsIDpyb290IC5mYS1yb3RhdGUtOTAge1xuICAgIC13ZWJraXQtZmlsdGVyOiBub25lO1xuICAgIGZpbHRlcjogbm9uZVxufVxuXG4uZmEtc3RhY2sge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBoZWlnaHQ6IDJlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDIuNWVtXG59XG5cbi5mYS1zdGFjay0xeCwgLmZhLXN0YWNrLTJ4IHtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMFxufVxuXG4uc3ZnLWlubGluZS0tZmEuZmEtc3RhY2stMXgge1xuICAgIGhlaWdodDogMWVtO1xuICAgIHdpZHRoOiAxLjI1ZW1cbn1cblxuLnN2Zy1pbmxpbmUtLWZhLmZhLXN0YWNrLTJ4IHtcbiAgICBoZWlnaHQ6IDJlbTtcbiAgICB3aWR0aDogMi41ZW1cbn1cblxuLmZhLWludmVyc2Uge1xuICAgIGNvbG9yOiAjZmZmXG59XG5cbi5zci1vbmx5IHtcbiAgICBib3JkZXI6IDA7XG4gICAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBtYXJnaW46IC0xcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMXB4XG59XG5cbi5zci1vbmx5LWZvY3VzYWJsZTphY3RpdmUsIC5zci1vbmx5LWZvY3VzYWJsZTpmb2N1cyB7XG4gICAgY2xpcDogYXV0bztcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luOiAwO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgd2lkdGg6IGF1dG9cbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/components/footbar/footbar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/footbar/footbar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"fdb-block footer-large bg-dark\" data-block-type=\"footers\" data-id=\"8\">\n  <div class=\"container\">\n    <div class=\"row align-items-top text-center text-md-left\">\n      <div class=\"col-12 col-sm-6 col-md-3\" style=\"z-index: 10000;\"><h3><strong>关于菊航</strong></h3>\n        <p>关于我们</p>\n        <p>职业发展</p>\n        <p>菊航新闻</p>\n\n      </div>\n\n      <div class=\"col-12 col-sm-6 col-md-3\" style=\"z-index: 10000;\"><h3><strong>联系我们</strong></h3>\n        <p>还有啥呢</p>\n        <p>随便写点</p>\n        <p>emmm</p>\n\n      </div>\n\n      <div class=\"col-12 col-sm-6 col-md-3\" style=\"z-index: 10000;\"><h3><strong>特色服务</strong></h3>\n        <p>机上娱乐</p>\n        <p>ssssuper vip休息室</p>\n        <p>再想点啥</p>\n      </div>\n\n      <div class=\"col-12 col-sm-6 col-md-3\" style=\"z-index: 10000;\"><h3><strong>关注我们</strong>\n      </h3>\n        <p>blah blah blah</p>\n      </div>\n    </div>\n\n    <div class=\"row mt-5\">\n      <div class=\"col text-center fr-box\" role=\"application\" style=\"z-index: 10000;\">\n        <div class=\"fr-wrapper\" dir=\"auto\">\n          <div class=\"fr-element fr-view\" dir=\"auto\" contenteditable=\"true\" aria-disabled=\"false\"\n               spellcheck=\"true\"><p>© 2019 菊花航空 All Rights Reserved</p></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/components/footbar/footbar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/footbar/footbar.component.ts ***!
  \*********************************************************/
/*! exports provided: FootbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FootbarComponent", function() { return FootbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FootbarComponent = /** @class */ (function () {
    function FootbarComponent() {
    }
    FootbarComponent.prototype.ngOnInit = function () {
    };
    FootbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footbar',
            template: __webpack_require__(/*! ./footbar.component.html */ "./src/app/components/footbar/footbar.component.html"),
            styles: [__webpack_require__(/*! ./footbar.component.css */ "./src/app/components/footbar/footbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FootbarComponent);
    return FootbarComponent;
}());



/***/ }),

/***/ "./src/app/components/headerbar/headerbar.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/headerbar/headerbar.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyYmFyL2hlYWRlcmJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/headerbar/headerbar.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/headerbar/headerbar.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"bg-dark\" data-block-type=\"headers\" data-id=\"11\">\n  <div class=\"container\">\n    <nav class=\"navbar navbar-expand-lg\">\n      <a class=\"navbar-brand\" href=\"/\">\n        <img src=\"https://cdn.jsdelivr.net/gh/froala/design-blocks@2.0.1/dist/imgs//logo.png\" height=\"30\"\n             alt=\"image\">\n      </a>\n\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav13\"\n              aria-controls=\"navbarNav13\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n\n      <div class=\"collapse navbar-collapse\" id=\"navbarNav13\">\n        <ul class=\"navbar-nav mr-auto\">\n          <li class=\"nav-item active\">\n            <a class=\"nav-link fr-view\" href=\"https://www.froala.com\"\n               style=\"outline: none; display: inline-block;\">首页 <span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link fr-view\" href=\"https://www.froala.com\"\n               style=\"outline: none; display: inline-block;\">预定</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link fr-view\" href=\"https://www.froala.com\"\n               style=\"outline: none; display: inline-block;\">值机</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link fr-view\" href=\"https://www.froala.com\"\n               style=\"outline: none; display: inline-block;\">我的旅程</a>\n          </li>\n        </ul>\n\n        <ul class=\"navbar-nav justify-content-end ml-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link fr-view\" href=\"https://www.froala.com\"\n               style=\"outline: none; display: inline-block;\">与您同行</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link fr-view\" href=\"https://www.froala.com\"\n               style=\"outline: none; display: inline-block;\">高端黑会员</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link fr-view\" href=\"/login\"\n               style=\"outline: none; display: inline-block;\">登录</a>\n          </li>\n        </ul>\n\n        <a class=\"btn btn-light ml-md-3 fr-view\" href=\"/register\"\n           style=\"outline: none; display: inline-block;\">注册</a>\n      </div>\n    </nav>\n  </div>\n</header>\n"

/***/ }),

/***/ "./src/app/components/headerbar/headerbar.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/headerbar/headerbar.component.ts ***!
  \*************************************************************/
/*! exports provided: HeaderbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderbarComponent", function() { return HeaderbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderbarComponent = /** @class */ (function () {
    // TODO: add the @Input userId
    // if the user has already loggedin, then the headbar should hide two buttons: login and register, and display avartar and username
    // if the user not loggedin, then the headbar should display login and register buttons
    function HeaderbarComponent() {
    }
    HeaderbarComponent.prototype.ngOnInit = function () {
    };
    HeaderbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-headerbar',
            template: __webpack_require__(/*! ./headerbar.component.html */ "./src/app/components/headerbar/headerbar.component.html"),
            styles: [__webpack_require__(/*! ./headerbar.component.css */ "./src/app/components/headerbar/headerbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderbarComponent);
    return HeaderbarComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".facebook-color {\n    background-color: #3b5998;\n    color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmFjZWJvb2stY29sb3Ige1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjU5OTg7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"fdb-block fp-active\"\n         style=\"background-image: url(https://cdn.jsdelivr.net/gh/froala/design-blocks@2.0.1/dist/imgs//hero/red.svg);\"\n         data-block-type=\"forms\" data-id=\"2\">\n    <div class=\"container\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-12 col-md-8 col-lg-7 col-xl-5 text-center\">\n                <div class=\"fdb-box\">\n                    <div class=\"row\">\n                        <div class=\"col\">\n                            <h1>登录</h1>\n                        </div>\n                    </div>\n                    <!--<form #f=\"ngForm\">-->\n                    <form #f=\"ngForm\">\n                        <div class=\"row mt-4 form-group\">\n                            <input type=\"text\"\n                                   name=\"username\"\n                                   class=\"form-control\"\n                                   placeholder=\"Email\"\n                                   ngModel\n                                   required\n                                   #username=\"ngModel\">\n                        </div>\n                        <div class =\"help-block\" *ngIf=\"!username.valid && username.touched\">Please enter a username</div>\n                        <div class=\"row mt-4 form-group\">\n                            <input type=\"password\"\n                                   name=\"password\"\n                                   class=\"form-control\"\n                                   placeholder=\"Password\"\n                                   ngModel\n                                   required\n                                   #password=\"ngModel\">\n\n                        </div>\n                        <div class =\"help-block\" *ngIf=\"!password.valid && password.touched\">Please enter a password</div>\n                        <div class=\"form-check\">\n                            <input type=\"checkbox\" class=\"form-check-input\" id=\"rememberMe\" ngModel [(ngModel)]=\"rememberMe\">\n                            <label class=\"form-check-label\" for=\"rememberMe\">Remember Me</label>\n                        </div>\n                        <div class=\"row mt-4 form-group\">\n                            <button class=\"btn btn-primary btn-block\" (click)=\"login()\" type=\"button\">Submit\n                            </button>\n\n                        </div>\n                        <div class=\"row form-group\">\n                            <button class=\"btn btn-block facebook-color\" (click)=\"facebookLogin()\" type=\"button\">facebook</button>\n                        </div>\n                        <div class=\"row form-group\">\n                            <a class=\"btn btn-success btn-block\" routerLink=\"/register\" role=\"button\">Register</a>\n                        </div>\n                        <div class=\"row mt-2\">\n                            <div class=\"col-12 col-sm-6 col-md-6\">\n                                <p class=\"text-right small\"><a href=\"https://www.froala.com\">Recover Username </a></p>\n                            </div>\n                            <div class=\"col-12 col-sm-6 col-md-6\">\n                                <p class=\"text-left small\"><a href=\"https://www.froala.com\">Recover Password</a></p>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _service_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/shared.service */ "./src/app/service/shared.service.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, userService, sharedService) {
        this.router = router;
        this.userService = userService;
        this.sharedService = sharedService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var username = this.loginForm.value.username;
        var password = this.loginForm.value.password;
        var body = {
            username: username,
            password: password
        };
        this.userService.login(body).subscribe(function (user) {
            // console.log('In login() component, the front end service returns: ' + user);
            _this.sharedService.user = user;
            _this.router.navigate(['/']);
        }, function (error) {
            console.log(error);
        });
    };
    LoginComponent.prototype.facebookLogin = function () {
        this.router.navigate(['/facebook/login']);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], LoginComponent.prototype, "loginForm", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _service_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/main/main.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/main/main.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "svg:not(:root)\n.svg-inline--fa {\n    overflow: visible\n}\n\n.svg-inline--fa {\n    display: inline-block;\n    font-size: inherit;\n    height: 1em;\n    overflow: visible;\n    vertical-align: -.125em\n}\n\n.svg-inline--fa.fa-lg {\n    vertical-align: -.225em\n}\n\n.svg-inline--fa.fa-w-1 {\n    width: .0625em\n}\n\n.svg-inline--fa.fa-w-2 {\n    width: .125em\n}\n\n.svg-inline--fa.fa-w-3 {\n    width: .1875em\n}\n\n.svg-inline--fa.fa-w-4 {\n    width: .25em\n}\n\n.svg-inline--fa.fa-w-5 {\n    width: .3125em\n}\n\n.svg-inline--fa.fa-w-6 {\n    width: .375em\n}\n\n.svg-inline--fa.fa-w-7 {\n    width: .4375em\n}\n\n.svg-inline--fa.fa-w-8 {\n    width: .5em\n}\n\n.svg-inline--fa.fa-w-9 {\n    width: .5625em\n}\n\n.svg-inline--fa.fa-w-10 {\n    width: .625em\n}\n\n.svg-inline--fa.fa-w-11 {\n    width: .6875em\n}\n\n.svg-inline--fa.fa-w-12 {\n    width: .75em\n}\n\n.svg-inline--fa.fa-w-13 {\n    width: .8125em\n}\n\n.svg-inline--fa.fa-w-14 {\n    width: .875em\n}\n\n.svg-inline--fa.fa-w-15 {\n    width: .9375em\n}\n\n.svg-inline--fa.fa-w-16 {\n    width: 1em\n}\n\n.svg-inline--fa.fa-w-17 {\n    width: 1.0625em\n}\n\n.svg-inline--fa.fa-w-18 {\n    width: 1.125em\n}\n\n.svg-inline--fa.fa-w-19 {\n    width: 1.1875em\n}\n\n.svg-inline--fa.fa-w-20 {\n    width: 1.25em\n}\n\n.svg-inline--fa.fa-pull-left {\n    margin-right: .3em;\n    width: auto\n}\n\n.svg-inline--fa.fa-pull-right {\n    margin-left: .3em;\n    width: auto\n}\n\n.svg-inline--fa.fa-border {\n    height: 1.5em\n}\n\n.svg-inline--fa.fa-li {\n    width: 2em\n}\n\n.svg-inline--fa.fa-fw {\n    width: 1.25em\n}\n\n.fa-layers svg.svg-inline--fa {\n    bottom: 0;\n    left: 0;\n    margin: auto;\n    position: absolute;\n    right: 0;\n    top: 0\n}\n\n.fa-layers {\n    display: inline-block;\n    height: 1em;\n    position: relative;\n    text-align: center;\n    vertical-align: -.125em;\n    width: 1em\n}\n\n.fa-layers svg.svg-inline--fa {\n    -webkit-transform-origin: center center;\n    transform-origin: center center\n}\n\n.fa-layers-counter, .fa-layers-text {\n    display: inline-block;\n    position: absolute;\n    text-align: center\n}\n\n.fa-layers-text {\n    left: 50%;\n    top: 50%;\n    -webkit-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%);\n    -webkit-transform-origin: center center;\n    transform-origin: center center\n}\n\n.fa-layers-counter {\n    background-color: #ff253a;\n    border-radius: 1em;\n    box-sizing: border-box;\n    color: #fff;\n    height: 1.5em;\n    line-height: 1;\n    max-width: 5em;\n    min-width: 1.5em;\n    overflow: hidden;\n    padding: .25em;\n    right: 0;\n    text-overflow: ellipsis;\n    top: 0;\n    -webkit-transform: scale(.25);\n    transform: scale(.25);\n    -webkit-transform-origin: top right;\n    transform-origin: top right\n}\n\n.fa-layers-bottom-right {\n    bottom: 0;\n    right: 0;\n    top: auto;\n    -webkit-transform: scale(.25);\n    transform: scale(.25);\n    -webkit-transform-origin: bottom right;\n    transform-origin: bottom right\n}\n\n.fa-layers-bottom-left {\n    bottom: 0;\n    left: 0;\n    right: auto;\n    top: auto;\n    -webkit-transform: scale(.25);\n    transform: scale(.25);\n    -webkit-transform-origin: bottom left;\n    transform-origin: bottom left\n}\n\n.fa-layers-top-right {\n    right: 0;\n    top: 0;\n    -webkit-transform: scale(.25);\n    transform: scale(.25);\n    -webkit-transform-origin: top right;\n    transform-origin: top right\n}\n\n.fa-layers-top-left {\n    left: 0;\n    right: auto;\n    top: 0;\n    -webkit-transform: scale(.25);\n    transform: scale(.25);\n    -webkit-transform-origin: top left;\n    transform-origin: top left\n}\n\n.fa-lg {\n    font-size: 1.33333em;\n    line-height: .75em;\n    vertical-align: -.0667em\n}\n\n.fa-xs {\n    font-size: .75em\n}\n\n.fa-sm {\n    font-size: .875em\n}\n\n.fa-1x {\n    font-size: 1em\n}\n\n.fa-2x {\n    font-size: 2em\n}\n\n.fa-3x {\n    font-size: 3em\n}\n\n.fa-4x {\n    font-size: 4em\n}\n\n.fa-5x {\n    font-size: 5em\n}\n\n.fa-6x {\n    font-size: 6em\n}\n\n.fa-7x {\n    font-size: 7em\n}\n\n.fa-8x {\n    font-size: 8em\n}\n\n.fa-9x {\n    font-size: 9em\n}\n\n.fa-10x {\n    font-size: 10em\n}\n\n.fa-fw {\n    text-align: center;\n    width: 1.25em\n}\n\n.fa-ul {\n    list-style-type: none;\n    margin-left: 2.5em;\n    padding-left: 0\n}\n\n.fa-ul > li {\n    position: relative\n}\n\n.fa-li {\n    left: -2em;\n    position: absolute;\n    text-align: center;\n    width: 2em;\n    line-height: inherit\n}\n\n.fa-border {\n    border: solid .08em #eee;\n    border-radius: .1em;\n    padding: .2em .25em .15em\n}\n\n.fa-pull-left {\n    float: left\n}\n\n.fa-pull-right {\n    float: right\n}\n\n.fa.fa-pull-left, .fab.fa-pull-left, .fal.fa-pull-left, .far.fa-pull-left, .fas.fa-pull-left {\n    margin-right: .3em\n}\n\n.fa.fa-pull-right, .fab.fa-pull-right, .fal.fa-pull-right, .far.fa-pull-right, .fas.fa-pull-right {\n    margin-left: .3em\n}\n\n.fa-spin {\n    -webkit-animation: fa-spin 2s infinite linear;\n    animation: fa-spin 2s infinite linear\n}\n\n.fa-pulse {\n    -webkit-animation: fa-spin 1s infinite steps(8);\n    animation: fa-spin 1s infinite steps(8)\n}\n\n@-webkit-keyframes fa-spin {\n    0% {\n        -webkit-transform: rotate(0);\n        transform: rotate(0)\n    }\n    100% {\n        -webkit-transform: rotate(360deg);\n        transform: rotate(360deg)\n    }\n}\n\n@keyframes fa-spin {\n    0% {\n        -webkit-transform: rotate(0);\n        transform: rotate(0)\n    }\n    100% {\n        -webkit-transform: rotate(360deg);\n        transform: rotate(360deg)\n    }\n}\n\n.fa-rotate-90 {\n    -webkit-transform: rotate(90deg);\n    transform: rotate(90deg)\n}\n\n.fa-rotate-180 {\n    -webkit-transform: rotate(180deg);\n    transform: rotate(180deg)\n}\n\n.fa-rotate-270 {\n    -webkit-transform: rotate(270deg);\n    transform: rotate(270deg)\n}\n\n.fa-flip-horizontal {\n    -webkit-transform: scale(-1, 1);\n    transform: scale(-1, 1)\n}\n\n.fa-flip-vertical {\n    -webkit-transform: scale(1, -1);\n    transform: scale(1, -1)\n}\n\n.fa-flip-horizontal.fa-flip-vertical {\n    -webkit-transform: scale(-1, -1);\n    transform: scale(-1, -1)\n}\n\n:root .fa-flip-horizontal, :root .fa-flip-vertical, :root .fa-rotate-180, :root .fa-rotate-270, :root .fa-rotate-90 {\n    -webkit-filter: none;\n    filter: none\n}\n\n.fa-stack {\n    display: inline-block;\n    height: 2em;\n    position: relative;\n    width: 2.5em\n}\n\n.fa-stack-1x, .fa-stack-2x {\n    bottom: 0;\n    left: 0;\n    margin: auto;\n    position: absolute;\n    right: 0;\n    top: 0\n}\n\n.svg-inline--fa.fa-stack-1x {\n    height: 1em;\n    width: 1.25em\n}\n\n.svg-inline--fa.fa-stack-2x {\n    height: 2em;\n    width: 2.5em\n}\n\n.fa-inverse {\n    color: #fff\n}\n\n.sr-only {\n    border: 0;\n    clip: rect(0, 0, 0, 0);\n    height: 1px;\n    margin: -1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    width: 1px\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n    clip: auto;\n    height: auto;\n    margin: 0;\n    overflow: visible;\n    position: static;\n    width: auto\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluL21haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSTtBQUNKOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEI7QUFDSjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQjtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksU0FBUztJQUNULE9BQU87SUFDUCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUjtBQUNKOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QjtBQUNKOztBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDO0FBQ0o7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCO0FBQ0o7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsUUFBUTtJQUNSLHdDQUF3QztJQUN4QyxnQ0FBZ0M7SUFDaEMsdUNBQXVDO0lBQ3ZDO0FBQ0o7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBRWxCLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsYUFBYTtJQUNiLGNBQWM7SUFDZCxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsUUFBUTtJQUNSLHVCQUF1QjtJQUN2QixNQUFNO0lBQ04sNkJBQTZCO0lBQzdCLHFCQUFxQjtJQUNyQixtQ0FBbUM7SUFDbkM7QUFDSjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxRQUFRO0lBQ1IsU0FBUztJQUNULDZCQUE2QjtJQUM3QixxQkFBcUI7SUFDckIsc0NBQXNDO0lBQ3RDO0FBQ0o7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsT0FBTztJQUNQLFdBQVc7SUFDWCxTQUFTO0lBQ1QsNkJBQTZCO0lBQzdCLHFCQUFxQjtJQUNyQixxQ0FBcUM7SUFDckM7QUFDSjs7QUFFQTtJQUNJLFFBQVE7SUFDUixNQUFNO0lBQ04sNkJBQTZCO0lBQzdCLHFCQUFxQjtJQUNyQixtQ0FBbUM7SUFDbkM7QUFDSjs7QUFFQTtJQUNJLE9BQU87SUFDUCxXQUFXO0lBQ1gsTUFBTTtJQUNOLDZCQUE2QjtJQUM3QixxQkFBcUI7SUFDckIsa0NBQWtDO0lBQ2xDO0FBQ0o7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEI7QUFDSjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEI7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Y7QUFDSjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkI7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSw2Q0FBNkM7SUFDN0M7QUFDSjs7QUFFQTtJQUNJLCtDQUErQztJQUMvQztBQUNKOztBQUVBO0lBQ0k7UUFDSSw0QkFBNEI7UUFDNUI7SUFDSjtJQUNBO1FBQ0ksaUNBQWlDO1FBQ2pDO0lBQ0o7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksNEJBQTRCO1FBQzVCO0lBQ0o7SUFDQTtRQUNJLGlDQUFpQztRQUNqQztJQUNKO0FBQ0o7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEM7QUFDSjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQztBQUNKOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDO0FBQ0o7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0I7QUFDSjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQjtBQUNKOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDO0FBQ0o7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEI7QUFDSjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCO0FBQ0o7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsT0FBTztJQUNQLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSO0FBQ0o7O0FBRUE7SUFDSSxXQUFXO0lBQ1g7QUFDSjs7QUFFQTtJQUNJLFdBQVc7SUFDWDtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQjtBQUNKOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYWluL21haW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInN2Zzpub3QoOnJvb3QpXG4uc3ZnLWlubGluZS0tZmEge1xuICAgIG92ZXJmbG93OiB2aXNpYmxlXG59XG5cbi5zdmctaW5saW5lLS1mYSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICBoZWlnaHQ6IDFlbTtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogLS4xMjVlbVxufVxuXG4uc3ZnLWlubGluZS0tZmEuZmEtbGcge1xuICAgIHZlcnRpY2FsLWFsaWduOiAtLjIyNWVtXG59XG5cbi5zdmctaW5saW5lLS1mYS5mYS13LTEge1xuICAgIHdpZHRoOiAuMDYyNWVtXG59XG5cbi5zdmctaW5saW5lLS1mYS5mYS13LTIge1xuICAgIHdpZHRoOiAuMTI1ZW1cbn1cblxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctMyB7XG4gICAgd2lkdGg6IC4xODc1ZW1cbn1cblxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctNCB7XG4gICAgd2lkdGg6IC4yNWVtXG59XG5cbi5zdmctaW5saW5lLS1mYS5mYS13LTUge1xuICAgIHdpZHRoOiAuMzEyNWVtXG59XG5cbi5zdmctaW5saW5lLS1mYS5mYS13LTYge1xuICAgIHdpZHRoOiAuMzc1ZW1cbn1cblxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctNyB7XG4gICAgd2lkdGg6IC40Mzc1ZW1cbn1cblxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctOCB7XG4gICAgd2lkdGg6IC41ZW1cbn1cblxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctOSB7XG4gICAgd2lkdGg6IC41NjI1ZW1cbn1cblxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctMTAge1xuICAgIHdpZHRoOiAuNjI1ZW1cbn1cblxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctMTEge1xuICAgIHdpZHRoOiAuNjg3NWVtXG59XG5cbi5zdmctaW5saW5lLS1mYS5mYS13LTEyIHtcbiAgICB3aWR0aDogLjc1ZW1cbn1cblxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctMTMge1xuICAgIHdpZHRoOiAuODEyNWVtXG59XG5cbi5zdmctaW5saW5lLS1mYS5mYS13LTE0IHtcbiAgICB3aWR0aDogLjg3NWVtXG59XG5cbi5zdmctaW5saW5lLS1mYS5mYS13LTE1IHtcbiAgICB3aWR0aDogLjkzNzVlbVxufVxuXG4uc3ZnLWlubGluZS0tZmEuZmEtdy0xNiB7XG4gICAgd2lkdGg6IDFlbVxufVxuXG4uc3ZnLWlubGluZS0tZmEuZmEtdy0xNyB7XG4gICAgd2lkdGg6IDEuMDYyNWVtXG59XG5cbi5zdmctaW5saW5lLS1mYS5mYS13LTE4IHtcbiAgICB3aWR0aDogMS4xMjVlbVxufVxuXG4uc3ZnLWlubGluZS0tZmEuZmEtdy0xOSB7XG4gICAgd2lkdGg6IDEuMTg3NWVtXG59XG5cbi5zdmctaW5saW5lLS1mYS5mYS13LTIwIHtcbiAgICB3aWR0aDogMS4yNWVtXG59XG5cbi5zdmctaW5saW5lLS1mYS5mYS1wdWxsLWxlZnQge1xuICAgIG1hcmdpbi1yaWdodDogLjNlbTtcbiAgICB3aWR0aDogYXV0b1xufVxuXG4uc3ZnLWlubGluZS0tZmEuZmEtcHVsbC1yaWdodCB7XG4gICAgbWFyZ2luLWxlZnQ6IC4zZW07XG4gICAgd2lkdGg6IGF1dG9cbn1cblxuLnN2Zy1pbmxpbmUtLWZhLmZhLWJvcmRlciB7XG4gICAgaGVpZ2h0OiAxLjVlbVxufVxuXG4uc3ZnLWlubGluZS0tZmEuZmEtbGkge1xuICAgIHdpZHRoOiAyZW1cbn1cblxuLnN2Zy1pbmxpbmUtLWZhLmZhLWZ3IHtcbiAgICB3aWR0aDogMS4yNWVtXG59XG5cbi5mYS1sYXllcnMgc3ZnLnN2Zy1pbmxpbmUtLWZhIHtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMFxufVxuXG4uZmEtbGF5ZXJzIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgaGVpZ2h0OiAxZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogLS4xMjVlbTtcbiAgICB3aWR0aDogMWVtXG59XG5cbi5mYS1sYXllcnMgc3ZnLnN2Zy1pbmxpbmUtLWZhIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlclxufVxuXG4uZmEtbGF5ZXJzLWNvdW50ZXIsIC5mYS1sYXllcnMtdGV4dCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcbn1cblxuLmZhLWxheWVycy10ZXh0IHtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiA1MCU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlclxufVxuXG4uZmEtbGF5ZXJzLWNvdW50ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjI1M2E7XG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGhlaWdodDogMS41ZW07XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgbWF4LXdpZHRoOiA1ZW07XG4gICAgbWluLXdpZHRoOiAxLjVlbTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmc6IC4yNWVtO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHRvcDogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLjI1KTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC4yNSk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3AgcmlnaHQ7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIHJpZ2h0XG59XG5cbi5mYS1sYXllcnMtYm90dG9tLXJpZ2h0IHtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiBhdXRvO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSguMjUpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoLjI1KTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSByaWdodDtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gcmlnaHRcbn1cblxuLmZhLWxheWVycy1ib3R0b20tbGVmdCB7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IGF1dG87XG4gICAgdG9wOiBhdXRvO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSguMjUpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoLjI1KTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0O1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0XG59XG5cbi5mYS1sYXllcnMtdG9wLXJpZ2h0IHtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC4yNSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSguMjUpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogdG9wIHJpZ2h0O1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCByaWdodFxufVxuXG4uZmEtbGF5ZXJzLXRvcC1sZWZ0IHtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiBhdXRvO1xuICAgIHRvcDogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLjI1KTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC4yNSk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdFxufVxuXG4uZmEtbGcge1xuICAgIGZvbnQtc2l6ZTogMS4zMzMzM2VtO1xuICAgIGxpbmUtaGVpZ2h0OiAuNzVlbTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogLS4wNjY3ZW1cbn1cblxuLmZhLXhzIHtcbiAgICBmb250LXNpemU6IC43NWVtXG59XG5cbi5mYS1zbSB7XG4gICAgZm9udC1zaXplOiAuODc1ZW1cbn1cblxuLmZhLTF4IHtcbiAgICBmb250LXNpemU6IDFlbVxufVxuXG4uZmEtMngge1xuICAgIGZvbnQtc2l6ZTogMmVtXG59XG5cbi5mYS0zeCB7XG4gICAgZm9udC1zaXplOiAzZW1cbn1cblxuLmZhLTR4IHtcbiAgICBmb250LXNpemU6IDRlbVxufVxuXG4uZmEtNXgge1xuICAgIGZvbnQtc2l6ZTogNWVtXG59XG5cbi5mYS02eCB7XG4gICAgZm9udC1zaXplOiA2ZW1cbn1cblxuLmZhLTd4IHtcbiAgICBmb250LXNpemU6IDdlbVxufVxuXG4uZmEtOHgge1xuICAgIGZvbnQtc2l6ZTogOGVtXG59XG5cbi5mYS05eCB7XG4gICAgZm9udC1zaXplOiA5ZW1cbn1cblxuLmZhLTEweCB7XG4gICAgZm9udC1zaXplOiAxMGVtXG59XG5cbi5mYS1mdyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxLjI1ZW1cbn1cblxuLmZhLXVsIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgbWFyZ2luLWxlZnQ6IDIuNWVtO1xuICAgIHBhZGRpbmctbGVmdDogMFxufVxuXG4uZmEtdWwgPiBsaSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlXG59XG5cbi5mYS1saSB7XG4gICAgbGVmdDogLTJlbTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAyZW07XG4gICAgbGluZS1oZWlnaHQ6IGluaGVyaXRcbn1cblxuLmZhLWJvcmRlciB7XG4gICAgYm9yZGVyOiBzb2xpZCAuMDhlbSAjZWVlO1xuICAgIGJvcmRlci1yYWRpdXM6IC4xZW07XG4gICAgcGFkZGluZzogLjJlbSAuMjVlbSAuMTVlbVxufVxuXG4uZmEtcHVsbC1sZWZ0IHtcbiAgICBmbG9hdDogbGVmdFxufVxuXG4uZmEtcHVsbC1yaWdodCB7XG4gICAgZmxvYXQ6IHJpZ2h0XG59XG5cbi5mYS5mYS1wdWxsLWxlZnQsIC5mYWIuZmEtcHVsbC1sZWZ0LCAuZmFsLmZhLXB1bGwtbGVmdCwgLmZhci5mYS1wdWxsLWxlZnQsIC5mYXMuZmEtcHVsbC1sZWZ0IHtcbiAgICBtYXJnaW4tcmlnaHQ6IC4zZW1cbn1cblxuLmZhLmZhLXB1bGwtcmlnaHQsIC5mYWIuZmEtcHVsbC1yaWdodCwgLmZhbC5mYS1wdWxsLXJpZ2h0LCAuZmFyLmZhLXB1bGwtcmlnaHQsIC5mYXMuZmEtcHVsbC1yaWdodCB7XG4gICAgbWFyZ2luLWxlZnQ6IC4zZW1cbn1cblxuLmZhLXNwaW4ge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYS1zcGluIDJzIGluZmluaXRlIGxpbmVhcjtcbiAgICBhbmltYXRpb246IGZhLXNwaW4gMnMgaW5maW5pdGUgbGluZWFyXG59XG5cbi5mYS1wdWxzZSB7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IGZhLXNwaW4gMXMgaW5maW5pdGUgc3RlcHMoOCk7XG4gICAgYW5pbWF0aW9uOiBmYS1zcGluIDFzIGluZmluaXRlIHN0ZXBzKDgpXG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBmYS1zcGluIHtcbiAgICAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDApXG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZylcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgZmEtc3BpbiB7XG4gICAgMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDApO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKVxuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpXG4gICAgfVxufVxuXG4uZmEtcm90YXRlLTkwIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZylcbn1cblxuLmZhLXJvdGF0ZS0xODAge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpXG59XG5cbi5mYS1yb3RhdGUtMjcwIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKVxufVxuXG4uZmEtZmxpcC1ob3Jpem9udGFsIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoLTEsIDEpXG59XG5cbi5mYS1mbGlwLXZlcnRpY2FsIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwgLTEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgLTEpXG59XG5cbi5mYS1mbGlwLWhvcml6b250YWwuZmEtZmxpcC12ZXJ0aWNhbCB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC0xLCAtMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgtMSwgLTEpXG59XG5cbjpyb290IC5mYS1mbGlwLWhvcml6b250YWwsIDpyb290IC5mYS1mbGlwLXZlcnRpY2FsLCA6cm9vdCAuZmEtcm90YXRlLTE4MCwgOnJvb3QgLmZhLXJvdGF0ZS0yNzAsIDpyb290IC5mYS1yb3RhdGUtOTAge1xuICAgIC13ZWJraXQtZmlsdGVyOiBub25lO1xuICAgIGZpbHRlcjogbm9uZVxufVxuXG4uZmEtc3RhY2sge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBoZWlnaHQ6IDJlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDIuNWVtXG59XG5cbi5mYS1zdGFjay0xeCwgLmZhLXN0YWNrLTJ4IHtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMFxufVxuXG4uc3ZnLWlubGluZS0tZmEuZmEtc3RhY2stMXgge1xuICAgIGhlaWdodDogMWVtO1xuICAgIHdpZHRoOiAxLjI1ZW1cbn1cblxuLnN2Zy1pbmxpbmUtLWZhLmZhLXN0YWNrLTJ4IHtcbiAgICBoZWlnaHQ6IDJlbTtcbiAgICB3aWR0aDogMi41ZW1cbn1cblxuLmZhLWludmVyc2Uge1xuICAgIGNvbG9yOiAjZmZmXG59XG5cbi5zci1vbmx5IHtcbiAgICBib3JkZXI6IDA7XG4gICAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBtYXJnaW46IC0xcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMXB4XG59XG5cbi5zci1vbmx5LWZvY3VzYWJsZTphY3RpdmUsIC5zci1vbmx5LWZvY3VzYWJsZTpmb2N1cyB7XG4gICAgY2xpcDogYXV0bztcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luOiAwO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgd2lkdGg6IGF1dG9cbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/components/main/main.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/main/main.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-headerbar></app-headerbar>\n<section class=\"fdb-block fp-active\" data-block-type=\"contents\" data-id=\"5\">\n  <div class=\"container\">\n    <div class=\"row align-items-center\">\n      <div class=\"col-10 col-sm-6 col-md-5 col-lg-4 m-auto pb-5 pb-md-0\" style=\"z-index: 10000;\">\n        <p>\n          <img alt=\"image\" class=\"img-fluid rounded-0\"\n               src=\"https://cdn.jsdelivr.net/gh/froala/design-blocks@2.0.1/dist/imgs//draws/iphone-hand.svg\">\n        </p>\n      </div>\n\n      <div class=\"col-12 ml-md-auto col-md-7 col-lg-6 pb-5 pb-md-0\" style=\"z-index: 10000;\">\n        <p>\n          <img alt=\"image\"\n               class=\"fdb-icon\"\n               src=\"https://cdn.jsdelivr.net/gh/froala/design-blocks@2.0.1/dist/imgs//icons/gift.svg\">\n        </p>\n        <h1>「高端黑」</h1>\n        <p class=\"lead\">菊航高端黑里程俱乐部将在 2018 年焕新出发。</p>\n        <p class=\"lead\">兑换奖励机票低至 5,000 里数起。</p>\n        <div class=\"align-items-center\">\n          <p class=\"mt-4\">\n            <a class=\"btn btn-secondary\" href=\"https://www.froala.com\">即刻申请</a>\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"fdb-block\" data-block-type=\"contents\" data-id=\"10\">\n  <div class=\"container\">\n    <div class=\"row align-items-center\">\n      <div class=\"col-6 col-lg-3\" style=\"z-index: 10000;\">\n        <p><img alt=\"image\" class=\"img-fluid\"\n                src=\"https://d1ic4altzx8ueg.cloudfront.net/credit-cards/wp-uploads/amex-centurion.png\">\n        </p>\n      </div>\n\n      <div class=\"col-6 col-lg-3\" style=\"z-index: 10000;\">\n        <p>\n          <img alt=\"image\" class=\"img-fluid\"\n               src=\"https://d1ic4altzx8ueg.cloudfront.net/credit-cards/wp-uploads/amex-centurion.png\">\n        </p>\n      </div>\n\n      <div class=\"col-12 col-lg-6 pt-3\" style=\"z-index: 10000;\">\n        <p class=\"lead text-left\">菊航「高端黑」里程俱乐部（Premium Black Mileage Club) 推出全新卡面设计，更高端质感带给\n          贵宾会员更高级体验。加入菊航「高端黑」里程俱乐部，环游世界，赚取里程，兑换奖励，享受专属礼遇，助您人生体验更上一层。\n        </p>\n        <p class=\"lead text-left\"><a href=\"https://www.froala.com\">[了解更多]</a></p></div>\n    </div>\n  </div>\n</section>\n<section class=\"fdb-block\" data-block-type=\"features\" data-id=\"6\">\n  <div class=\"container\">\n\n    <div class=\"row text-left align-items-center pt-5 pb-md-5\">\n      <div class=\"col-4 col-md-5\" style=\"z-index: 10000;\">\n        <p>\n          <img alt=\"image\" class=\"img-fluid\"\n               src=\"https://cdn.jsdelivr.net/gh/froala/design-blocks@2.0.1/dist/imgs//draws/designer.svg\">\n        </p>\n      </div>\n\n      <div class=\"col-12 col-md-5 m-md-auto\" style=\"z-index: 10000;\"><h2><strong>Feature One</strong></h2>\n        <p class=\"lead\">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,\n          there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the\n          Semantics, a large language ocean.</p>\n        <p><a href=\"https://www.froala.com\">Learn More <!-- <i class=\"fas fa-angle-right\"></i> --></a></p></div>\n    </div>\n\n    <div class=\"row text-left align-items-center pt-5 pb-md-5\">\n      <div class=\"col-4 col-md-5 m-md-auto order-md-5\" style=\"z-index: 10000;\">\n        <p>\n          <img alt=\"image\"\n               class=\"img-fluid\"\n               src=\"https://cdn.jsdelivr.net/gh/froala/design-blocks@2.0.1/dist/imgs//draws/design-life.svg\">\n        </p></div>\n\n      <div class=\"col-12 col-md-5\" style=\"z-index: 10000;\"><h2><strong>Feature Two</strong></h2>\n        <p class=\"lead\">Even the all-powerful Pointing has no control about the blind texts it is an almost\n          unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to\n          leave for the far World of Grammar.</p>\n        <p><a href=\"https://www.froala.com\">Learn More <!-- <i class=\"fas fa-angle-right\"></i> --></a></p></div>\n    </div>\n\n    <div class=\"row text-left align-items-center pt-5\">\n      <div class=\"col-4 col-md-5\" style=\"z-index: 10000;\">\n        <p><img alt=\"image\" class=\"img-fluid\"\n                src=\"https://cdn.jsdelivr.net/gh/froala/design-blocks@2.0.1/dist/imgs//draws/design-community.svg\">\n        </p>\n      </div>\n\n      <div class=\"col-12 col-md-5 m-md-auto\" style=\"z-index: 10000;\"><h2><strong>Feature Three</strong></h2>\n        <p class=\"lead\">On her way she met a copy. The copy warned the Little Blind Text, that where it came\n          from it would have been rewritten a thousand times and everything that was left from its origin\n          would be the word \"and\" and the Little Blind Text should turn around.</p>\n        <p><a href=\"https://www.froala.com\">Learn More <!-- <i class=\"fas fa-angle-right\"></i> --></a></p></div>\n    </div>\n  </div>\n</section>\n<section class=\"fdb-block\" data-block-type=\"features\" data-id=\"9\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-12 text-left\" style=\"z-index: 10000;\"><h1>Froala Design Blocks</h1>\n        <p class=\"lead\">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,\n          there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the\n          Semantics, a large language ocean.</p></div>\n    </div>\n\n    <div class=\"row text-left mt-5\">\n      <div class=\"col-12 col-sm-8 col-md-4 col-lg-3 m-sm-auto mr-md-auto ml-md-0\" style=\"z-index: 10000;\"><p><img\n              alt=\"image\" class=\"img-fluid rounded\"\n              src=\"https://cdn.jsdelivr.net/gh/froala/design-blocks@2.0.1/dist/imgs//hero/blue.svg\"></p>\n        <h3><strong>Feature One</strong></h3>\n        <p>Far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in\n          Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p></div>\n\n      <div class=\"col-12 col-sm-8 col-md-4 col-lg-3 m-sm-auto pt-5 pt-md-0\" style=\"z-index: 10000;\"><p><img\n              alt=\"image\" class=\"img-fluid rounded\"\n              src=\"https://cdn.jsdelivr.net/gh/froala/design-blocks@2.0.1/dist/imgs//hero/red.svg\"></p>\n        <h3><strong>Feature Two</strong></h3>\n        <p>It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the\n          all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.</p>\n      </div>\n\n      <div class=\"col-12 col-sm-8 col-md-4 col-lg-3 m-sm-auto ml-md-auto mr-md-0 pt-5 pt-md-0\"\n           style=\"z-index: 10000;\"><p><img alt=\"image\" class=\"img-fluid rounded\"\n                                           src=\"https://cdn.jsdelivr.net/gh/froala/design-blocks@2.0.1/dist/imgs//hero/yellow.svg\">\n      </p>\n        <h3><strong>Feature Three</strong></h3>\n        <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question\n          Marks and devious Semikoli, but the Little Blind Text didn’t listen.</p></div>\n    </div>\n  </div>\n</section>\n<section class=\"fdb-block\" data-block-type=\"contents\" data-id=\"12\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col col-md-8 text-center\" style=\"z-index: 10000;\"><h1>做菊航，我们是认真的。</h1></div>\n    </div>\n  </div>\n</section>\n<app-footbar></app-footbar>\n\n"

/***/ }),

/***/ "./src/app/components/main/main.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/main/main.component.ts ***!
  \***************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/components/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/components/main/main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/components/profile-admin/profile-admin.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/profile-admin/profile-admin.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS1hZG1pbi9wcm9maWxlLWFkbWluLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/profile-admin/profile-admin.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/profile-admin/profile-admin.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  profile-admin works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/profile-admin/profile-admin.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/profile-admin/profile-admin.component.ts ***!
  \*********************************************************************/
/*! exports provided: ProfileAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileAdminComponent", function() { return ProfileAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfileAdminComponent = /** @class */ (function () {
    function ProfileAdminComponent() {
    }
    ProfileAdminComponent.prototype.ngOnInit = function () {
    };
    ProfileAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile-admin',
            template: __webpack_require__(/*! ./profile-admin.component.html */ "./src/app/components/profile-admin/profile-admin.component.html"),
            styles: [__webpack_require__(/*! ./profile-admin.component.css */ "./src/app/components/profile-admin/profile-admin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfileAdminComponent);
    return ProfileAdminComponent;
}());



/***/ }),

/***/ "./src/app/components/profile-user/profile-user.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/profile-user/profile-user.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS11c2VyL3Byb2ZpbGUtdXNlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/profile-user/profile-user.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/profile-user/profile-user.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  profile-user works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/profile-user/profile-user.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/profile-user/profile-user.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProfileUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileUserComponent", function() { return ProfileUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfileUserComponent = /** @class */ (function () {
    function ProfileUserComponent() {
    }
    ProfileUserComponent.prototype.ngOnInit = function () {
    };
    ProfileUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile-user',
            template: __webpack_require__(/*! ./profile-user.component.html */ "./src/app/components/profile-user/profile-user.component.html"),
            styles: [__webpack_require__(/*! ./profile-user.component.css */ "./src/app/components/profile-user/profile-user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfileUserComponent);
    return ProfileUserComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-headerbar></app-headerbar>\n<section class=\"fdb-block fp-active\" data-block-type=\"forms\"\n         style=\"background-image: url(https://cdn.jsdelivr.net/gh/froala/design-blocks@2.0.1/dist/imgs//hero/red.svg);\"\n         data-id=\"1\">\n    <div class=\"container\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-12 col-md-8 col-lg-8 col-xl-6\">\n                <div class=\"fdb-box\">\n                    <div class=\"row\">\n                        <div class=\"col text-center\">\n                            <h1>注册</h1>\n                            <p class=\"lead\">只为享受菊航尊贵的服务。</p>\n                        </div>\n                    </div>\n                    <form #f=\"ngForm\">\n                        <!--basic info-->\n                        <!--name-->\n                        <div class=\"row align-items-center\">\n                            <div class=\"col\">\n                                <input type=\"text\"\n                                       name=\"firstName\"\n                                       class=\"form-control\"\n                                       placeholder=\"First Name\"\n                                       [(ngModel)]=\"user.firstName\"\n                                       required\n                                       #firstName=\"ngModel\">\n                            </div>\n                            <div class=\"col\">\n                                <input type=\"text\"\n                                       name=\"middleName\"\n                                       class=\"form-control\"\n                                       placeholder=\"Middle Name\"\n                                       [(ngModel)]=\"user.middleName\"\n                                       #middleName=\"ngModel\">\n                            </div>\n                            <div class=\"col\">\n                                <input type=\"text\"\n                                       name=\"lastName\"\n                                       class=\"form-control\"\n                                       placeholder=\"Last Name\"\n                                       [(ngModel)]=\"user.lastName\"\n                                       required\n                                       #lastName=\"ngModel\">\n                            </div>\n\n                        </div>\n                        <!--gender and date of birth-->\n                        <div class=\"row align-items-center mt-4\">\n                            <div class=\"col\">\n                                <label for=\"genderId\">Gender</label>\n                                <div id=\"genderId\">\n                                    <select class=\"form-control\"\n                                            name=\"gender\"\n                                            required\n                                            [(ngModel)]=\"user.gender\"\n                                            #gender=\"ngModel\">\n                                        <option value=\"M\">M</option>\n                                        <option value=\"F\">F</option>\n                                    </select>\n                                </div>\n                            </div>\n                            <div class=\"col\">\n                                <label for=\"dobPicker\" class=\"control-label\">Date of birth</label>\n                                <div id=\"dobPicker\" class=\"row\">\n                                    <div class=\"col\"><select class=\"form-control\"\n                                                             name=\"dobDay\"\n                                                             id=\"dob-day\"\n                                                             ngModel\n                                                             required>\n                                        <option value=\"\">Day</option>\n                                        <option value=\"01\">01</option>\n                                        <option value=\"02\">02</option>\n                                        <option value=\"03\">03</option>\n                                        <option value=\"04\">04</option>\n                                        <option value=\"05\">05</option>\n                                        <option value=\"06\">06</option>\n                                        <option value=\"07\">07</option>\n                                        <option value=\"08\">08</option>\n                                        <option value=\"09\">09</option>\n                                        <option value=\"10\">10</option>\n                                        <option value=\"11\">11</option>\n                                        <option value=\"12\">12</option>\n                                        <option value=\"13\">13</option>\n                                        <option value=\"14\">14</option>\n                                        <option value=\"15\">15</option>\n                                        <option value=\"16\">16</option>\n                                        <option value=\"17\">17</option>\n                                        <option value=\"18\">18</option>\n                                        <option value=\"19\">19</option>\n                                        <option value=\"20\">20</option>\n                                        <option value=\"21\">21</option>\n                                        <option value=\"22\">22</option>\n                                        <option value=\"23\">23</option>\n                                        <option value=\"24\">24</option>\n                                        <option value=\"25\">25</option>\n                                        <option value=\"26\">26</option>\n                                        <option value=\"27\">27</option>\n                                        <option value=\"28\">28</option>\n                                        <option value=\"29\">29</option>\n                                        <option value=\"30\">30</option>\n                                        <option value=\"31\">31</option>\n                                    </select></div>\n                                    <div class=\"col\"><select class=\"form-control\" name=\"dobMonth\" id=\"dob-month\" ngModel\n                                                             required>\n                                        <option value=\"\">Month</option>\n                                        <option value=\"01\">January</option>\n                                        <option value=\"02\">February</option>\n                                        <option value=\"03\">March</option>\n                                        <option value=\"04\">April</option>\n                                        <option value=\"05\">May</option>\n                                        <option value=\"06\">June</option>\n                                        <option value=\"07\">July</option>\n                                        <option value=\"08\">August</option>\n                                        <option value=\"09\">September</option>\n                                        <option value=\"10\">October</option>\n                                        <option value=\"11\">November</option>\n                                        <option value=\"12\">December</option>\n                                    </select></div>\n                                    <div class=\"col\"><select class=\"form-control\" name=\"dobYear\" id=\"dob-year\" ngModel\n                                                             required>\n                                        <option value=\"\">Year</option>\n                                        <option value=\"2012\">2012</option>\n                                        <option value=\"2011\">2011</option>\n                                        <option value=\"2010\">2010</option>\n                                        <option value=\"2009\">2009</option>\n                                        <option value=\"2008\">2008</option>\n                                        <option value=\"2007\">2007</option>\n                                        <option value=\"2006\">2006</option>\n                                        <option value=\"2005\">2005</option>\n                                        <option value=\"2004\">2004</option>\n                                        <option value=\"2003\">2003</option>\n                                        <option value=\"2002\">2002</option>\n                                        <option value=\"2001\">2001</option>\n                                        <option value=\"2000\">2000</option>\n                                        <option value=\"1999\">1999</option>\n                                        <option value=\"1998\">1998</option>\n                                        <option value=\"1997\">1997</option>\n                                        <option value=\"1996\">1996</option>\n                                        <option value=\"1995\">1995</option>\n                                        <option value=\"1994\">1994</option>\n                                        <option value=\"1993\">1993</option>\n                                        <option value=\"1992\">1992</option>\n                                        <option value=\"1991\">1991</option>\n                                        <option value=\"1990\">1990</option>\n                                        <option value=\"1989\">1989</option>\n                                        <option value=\"1988\">1988</option>\n                                        <option value=\"1987\">1987</option>\n                                        <option value=\"1986\">1986</option>\n                                        <option value=\"1985\">1985</option>\n                                        <option value=\"1984\">1984</option>\n                                        <option value=\"1983\">1983</option>\n                                        <option value=\"1982\">1982</option>\n                                        <option value=\"1981\">1981</option>\n                                        <option value=\"1980\">1980</option>\n                                        <option value=\"1979\">1979</option>\n                                        <option value=\"1978\">1978</option>\n                                        <option value=\"1977\">1977</option>\n                                        <option value=\"1976\">1976</option>\n                                        <option value=\"1975\">1975</option>\n                                        <option value=\"1974\">1974</option>\n                                        <option value=\"1973\">1973</option>\n                                        <option value=\"1972\">1972</option>\n                                        <option value=\"1971\">1971</option>\n                                        <option value=\"1970\">1970</option>\n                                        <option value=\"1969\">1969</option>\n                                        <option value=\"1968\">1968</option>\n                                        <option value=\"1967\">1967</option>\n                                        <option value=\"1966\">1966</option>\n                                        <option value=\"1965\">1965</option>\n                                        <option value=\"1964\">1964</option>\n                                        <option value=\"1963\">1963</option>\n                                        <option value=\"1962\">1962</option>\n                                        <option value=\"1961\">1961</option>\n                                        <option value=\"1960\">1960</option>\n                                        <option value=\"1959\">1959</option>\n                                        <option value=\"1958\">1958</option>\n                                        <option value=\"1957\">1957</option>\n                                        <option value=\"1956\">1956</option>\n                                        <option value=\"1955\">1955</option>\n                                        <option value=\"1954\">1954</option>\n                                        <option value=\"1953\">1953</option>\n                                        <option value=\"1952\">1952</option>\n                                        <option value=\"1951\">1951</option>\n                                        <option value=\"1950\">1950</option>\n                                        <option value=\"1949\">1949</option>\n                                        <option value=\"1948\">1948</option>\n                                        <option value=\"1947\">1947</option>\n                                        <option value=\"1946\">1946</option>\n                                        <option value=\"1945\">1945</option>\n                                        <option value=\"1944\">1944</option>\n                                        <option value=\"1943\">1943</option>\n                                        <option value=\"1942\">1942</option>\n                                        <option value=\"1941\">1941</option>\n                                        <option value=\"1940\">1940</option>\n                                        <option value=\"1939\">1939</option>\n                                        <option value=\"1938\">1938</option>\n                                        <option value=\"1937\">1937</option>\n                                        <option value=\"1936\">1936</option>\n                                        <option value=\"1935\">1935</option>\n                                        <option value=\"1934\">1934</option>\n                                        <option value=\"1933\">1933</option>\n                                        <option value=\"1932\">1932</option>\n                                        <option value=\"1931\">1931</option>\n                                        <option value=\"1930\">1930</option>\n                                        <option value=\"1929\">1929</option>\n                                        <option value=\"1928\">1928</option>\n                                        <option value=\"1927\">1927</option>\n                                        <option value=\"1926\">1926</option>\n                                        <option value=\"1925\">1925</option>\n                                        <option value=\"1924\">1924</option>\n                                        <option value=\"1923\">1923</option>\n                                        <option value=\"1922\">1922</option>\n                                        <option value=\"1921\">1921</option>\n                                        <option value=\"1920\">1920</option>\n                                        <option value=\"1919\">1919</option>\n                                        <option value=\"1918\">1918</option>\n                                        <option value=\"1917\">1917</option>\n                                        <option value=\"1916\">1916</option>\n                                        <option value=\"1915\">1915</option>\n                                        <option value=\"1914\">1914</option>\n                                        <option value=\"1913\">1913</option>\n                                        <option value=\"1912\">1912</option>\n                                        <option value=\"1911\">1911</option>\n                                        <option value=\"1910\">1910</option>\n                                        <option value=\"1909\">1909</option>\n                                        <option value=\"1908\">1908</option>\n                                        <option value=\"1907\">1907</option>\n                                        <option value=\"1906\">1906</option>\n                                        <option value=\"1905\">1905</option>\n                                        <option value=\"1904\">1904</option>\n                                        <option value=\"1903\">1903</option>\n                                        <option value=\"1901\">1901</option>\n                                        <option value=\"1900\">1900</option>\n                                    </select></div>\n                                </div>\n                            </div>\n\n                        </div>\n                        <!--contact info-->\n                        <div class=\"row align-items-center mt-4\">\n                            <div class=\"col\">\n                                <label for=\"countryPicker\" class=\"control-label\">Country/Region</label>\n                                <div id=\"countryPicker\">\n                                    <select class=\"form-control\"\n                                            name=\"country\"\n                                            required\n                                            [(ngModel)]=\"user.countryRegion\"\n                                            #country=\"ngModel\">\n                                        <option value=\"US\">United States</option>\n                                        <option value=\"CN\">China</option>\n                                    </select>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row align-items-center mt-4\">\n                            <div class=\"col\">\n                                <input type=\"text\"\n                                       class=\"form-control\"\n                                       name=\"addressLine1\"\n                                       placeholder=\"Address Line 1\"\n                                       ngModel\n                                       required\n                                       #addressOne=ngModel>\n                            </div>\n                            <div class=\"col\">\n                                <input type=\"text\"\n                                       class=\"form-control\"\n                                       name=\"addressLine2\"\n                                       placeholder=\"Address Line 2\"\n                                       ngModel\n                                       required\n                                       #addressTwo=ngModel>\n                            </div>\n                        </div>\n                        <div class=\"row align-items-center mt-4\">\n                            <div class=\"col\">\n                                <input type=\"text\"\n                                       class=\"form-control\"\n                                       name=\"city\"\n                                       placeholder=\"City\"\n                                       [(ngModel)]=\"user.city\"\n                                       required\n                                       #city=ngModel>\n                            </div>\n                            <div class=\"col\">\n                                <input type=\"text\"\n                                       class=\"form-control\"\n                                       name=\"state\"\n                                       placeholder=\"State/Province\"\n                                       [(ngModel)]=\"user.stateOrProvince\"\n                                       required\n                                       #state=ngModel>\n                            </div>\n                            <div class=\"col\">\n                                <input type=\"text\"\n                                       class=\"form-control\"\n                                       name=\"zipCode\"\n                                       placeholder=\"Zip Code\"\n                                       [(ngModel)]=\"user.postalCode\"\n                                       required\n                                       #zipCode=ngModel>\n                            </div>\n                        </div>\n\n                        <div class=\"row align-items-center mt-4\">\n                            <div class=\"col\">\n                                <input type=\"email\"\n                                       class=\"form-control\"\n                                       placeholder=\"Email\"\n                                       name=\"email\"\n                                       [(ngModel)]=\"user.email\"\n                                       required\n                                       #email=ngModel>\n                            </div>\n                        </div>\n\n                        <div class=\"row align-items-center mt-4\">\n                            <div class=\"col\">\n                                <input type=\"text\"\n                                       class=\"form-control\"\n                                       placeholder=\"Phone Number\"\n                                       name=\"phoneNumber\"\n                                       [(ngModel)]=\"user.phone\"\n                                       required\n                                       #phoneNumber=ngModel>\n                            </div>\n                        </div>\n\n                        <div class=\"row align-items-center mt-4\">\n                            <div class=\"col\">\n                                <input type=\"text\"\n                                       class=\"form-control\"\n                                       placeholder=\"Username\"\n                                       name=\"username\"\n                                       [(ngModel)]=\"user.username\"\n                                       required\n                                       #username=ngModel>\n                            </div>\n                        </div>\n                        <div class=\"row align-items-center mt-4\">\n                            <div class=\"col\">\n                                <input type=\"password\"\n                                       name=\"password\"\n                                       class=\"form-control\"\n                                       placeholder=\"Password\"\n                                       [(ngModel)]=\"user.password\"\n                                       required\n                                       #password=ngModel>\n                            </div>\n                            <div class=\"col\">\n                                <input type=\"password\"\n                                       class=\"form-control\"\n                                       placeholder=\"Confirm Password\"\n                                       name=\"retypePassword\"\n                                       ngModel\n                                       required\n                                       #retypePassword=ngModel>\n                            </div>\n                        </div>\n                        <!--two checkboxes: email subscription and terms&conditions-->\n                        <div class=\"row justify-content-start mt-4\">\n                            <div class=\"col\">\n                                <div class=\"form-check\">\n                                    <label class=\"form-check-label\">\n                                        <input type=\"checkbox\" class=\"form-check-input\">\n                                        订阅email获取菊花航空最新资讯\n                                    </label>\n                                </div>\n\n                            </div>\n                        </div>\n                        <div class=\"row justify-content-start\">\n                            <div class=\"col\">\n                                <div class=\"form-check\">\n                                    <label class=\"form-check-label\">\n                                        <input type=\"checkbox\" class=\"form-check-input\">\n                                        I Read and Accept <a href=\"https://www.froala.com\">Terms and Conditions</a>\n                                    </label>\n                                </div>\n\n                                <button class=\"btn btn-success btn-block mt-4\" (click)=\"createUser()\">加入高端黑</button>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../model/User */ "./src/app/model/User.ts");






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.user = new _model_User__WEBPACK_IMPORTED_MODULE_5__["User"]('', '', '', '', '', '', new Date(), '', '', '', '', '', '', '', 'User');
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.createUser = function () {
        var _this = this;
        var address1 = this.registerForm.value.addressLine1;
        var address2 = this.registerForm.value.addressLine2;
        var address = address1 + ', ' + address2;
        this.user.address = address;
        var day = this.registerForm.value.dobDay;
        var month = this.registerForm.value.dobMonth;
        var year = this.registerForm.value.dobYear;
        this.user.dateOfBirth = new Date(year, month, day);
        console.log(this.user);
        this.userService.register(this.user)
            .subscribe(function (user) {
            // console.log(data);
            _this.router.navigate(['/login']);
            return;
        }, function (error) {
            // this.error = error._body;
            console.log(error);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], RegisterComponent.prototype, "registerForm", void 0);
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/route-management/route-management.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/route-management/route-management.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcm91dGUtbWFuYWdlbWVudC9yb3V0ZS1tYW5hZ2VtZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/route-management/route-management.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/route-management/route-management.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  route-management works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/route-management/route-management.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/route-management/route-management.component.ts ***!
  \***************************************************************************/
/*! exports provided: RouteManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteManagementComponent", function() { return RouteManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RouteManagementComponent = /** @class */ (function () {
    function RouteManagementComponent() {
    }
    RouteManagementComponent.prototype.ngOnInit = function () {
    };
    RouteManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-route-management',
            template: __webpack_require__(/*! ./route-management.component.html */ "./src/app/components/route-management/route-management.component.html"),
            styles: [__webpack_require__(/*! ./route-management.component.css */ "./src/app/components/route-management/route-management.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RouteManagementComponent);
    return RouteManagementComponent;
}());



/***/ }),

/***/ "./src/app/model/User.ts":
/*!*******************************!*\
  !*** ./src/app/model/User.ts ***!
  \*******************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(username, password, firstName, middleName, lastName, gender, dateOfBirth, countryRegion, address, city, stateOrProvince, postalCode, email, phone, role) {
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.gender = gender;
        this.dateOfBirth = dateOfBirth;
        this.countryRegion = countryRegion;
        this.address = address;
        this.city = city;
        this.stateOrProvince = stateOrProvince;
        this.postalCode = postalCode;
        this.email = email;
        this.phone = phone;
        this.role = role;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/service/shared.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/shared.service.ts ***!
  \*******************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SharedService = /** @class */ (function () {
    function SharedService() {
        this.user = '';
    }
    SharedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], SharedService);
    return SharedService;
}());



/***/ }),

/***/ "./src/app/service/user.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/user.service.ts ***!
  \*****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared.service */ "./src/app/service/shared.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");







var UserService = /** @class */ (function () {
    function UserService(http, router, sharedService) {
        this.http = http;
        this.router = router;
        this.sharedService = sharedService;
        this.options = {
            withCredentials: false
        };
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl;
        this.userApiUrl = '/api/user';
    }
    UserService.prototype.findUserById = function (userId) {
        console.log('front user service findUserById() called');
        // Only need to call server's url to get the data.
        return this.http.get(this.baseUrl + this.userApiUrl + '/' + userId);
    };
    UserService.prototype.findUserByUserName = function (userName) {
        console.log('front user service findUserByUserName() called');
        return this.http.get(this.baseUrl + this.userApiUrl + '?username=' + userName);
    };
    UserService.prototype.register = function (user) {
        this.options.withCredentials = true;
        return this.http.post(this.baseUrl + '/api/register', user, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    UserService.prototype.login = function (body) {
        console.log('front user service login() called');
        this.options.withCredentials = true;
        return this.http.post(this.baseUrl + '/api/login', body, this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            console.log('Inside login() response, res is ' + res);
            return res;
        }));
    };
    UserService.prototype.logout = function () {
        return this.http.post(this.baseUrl + '/api/logout', '', this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    UserService.prototype.loggedIn = function () {
        var _this = this;
        return this.http.get(this.baseUrl + '/api/loggedIn', this.options)
            // return this.http.post(this.baseUrl + '/api/loggedIn', '', this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            var user = JSON.stringify(res);
            console.log('Inside loggedIn(), the user is ' + user);
            if (user !== '0') {
                // console.log('Inside loggedIn(), the user is ' + user);
                console.log(_this.sharedService);
                _this.sharedService.user = user; // setting user so as to share with all components
                return true;
            }
            else {
                _this.router.navigate(['/']);
                return false;
            }
        }));
    };
    UserService.prototype.updateUser = function (userId, user) {
        console.log('front user service updateUser() called');
        return this.http.put(this.baseUrl + this.userApiUrl + '/' + userId, user);
    };
    UserService.prototype.deleteUser = function (userId) {
        console.log('front user service deleteUser() called');
        return this.http.delete(this.baseUrl + this.userApiUrl + '/' + userId);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]])
    ], UserService);
    return UserService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    baseUrl: 'http://localhost:8071'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/lion/cs5610-2019/final_project/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map