webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_board_board_component__ = __webpack_require__("../../../../../src/app/components/board/board.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_founders_founders_component__ = __webpack_require__("../../../../../src/app/components/founders/founders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_news_news_component__ = __webpack_require__("../../../../../src/app/components/news/news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_main_main_component__ = __webpack_require__("../../../../../src/app/components/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_gallery_gallery_component__ = __webpack_require__("../../../../../src/app/components/gallery/gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_ministries_ministries_component__ = __webpack_require__("../../../../../src/app/components/ministries/ministries.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_contact_contact_component__ = __webpack_require__("../../../../../src/app/components/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_detail_detail_component__ = __webpack_require__("../../../../../src/app/components/detail/detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_content_manager_content_manager_component__ = __webpack_require__("../../../../../src/app/components/content-manager/content-manager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_videos_videos_component__ = __webpack_require__("../../../../../src/app/components/videos/videos.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_2__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_6__components_main_main_component__["a" /* MainComponent */],
            },
            {
                path: 'main',
                component: __WEBPACK_IMPORTED_MODULE_6__components_main_main_component__["a" /* MainComponent */],
            },
            {
                path: 'founders',
                component: __WEBPACK_IMPORTED_MODULE_4__components_founders_founders_component__["a" /* FoundersComponent */],
            },
            {
                path: 'board',
                component: __WEBPACK_IMPORTED_MODULE_3__components_board_board_component__["a" /* BoardComponent */],
            },
            {
                path: 'news',
                component: __WEBPACK_IMPORTED_MODULE_5__components_news_news_component__["a" /* NewsComponent */],
            }, {
                path: 'gallery',
                component: __WEBPACK_IMPORTED_MODULE_7__components_gallery_gallery_component__["a" /* GalleryComponent */],
            },
            {
                path: 'videos',
                component: __WEBPACK_IMPORTED_MODULE_12__components_videos_videos_component__["a" /* VideosComponent */],
            },
            {
                path: 'ministries',
                component: __WEBPACK_IMPORTED_MODULE_8__components_ministries_ministries_component__["a" /* MinistriesComponent */],
            },
            {
                path: 'contact',
                component: __WEBPACK_IMPORTED_MODULE_9__components_contact_contact_component__["a" /* ContactComponent */],
            },
            {
                path: 'detail/:id/:pagename',
                component: __WEBPACK_IMPORTED_MODULE_10__components_detail_detail_component__["a" /* DetailComponent */],
            },
            {
                path: 'manage',
                component: __WEBPACK_IMPORTED_MODULE_11__components_content_manager_content_manager_component__["a" /* ContentManagerComponent */],
            },
        ]
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_6__components_main_main_component__["a" /* MainComponent */],
            },
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<ng4-loading-spinner> </ng4-loading-spinner>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_app_header_app_header_component__ = __webpack_require__("../../../../../src/app/components/app-header/app-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_app_footer_app_footer_component__ = __webpack_require__("../../../../../src/app/components/app-footer/app-footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_board_board_component__ = __webpack_require__("../../../../../src/app/components/board/board.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_founders_founders_component__ = __webpack_require__("../../../../../src/app/components/founders/founders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_news_news_component__ = __webpack_require__("../../../../../src/app/components/news/news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_main_main_component__ = __webpack_require__("../../../../../src/app/components/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_gallery_gallery_component__ = __webpack_require__("../../../../../src/app/components/gallery/gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_ministries_ministries_component__ = __webpack_require__("../../../../../src/app/components/ministries/ministries.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_contact_contact_component__ = __webpack_require__("../../../../../src/app/components/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_sidebar_content_sidebar_content_component__ = __webpack_require__("../../../../../src/app/components/sidebar-content/sidebar-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_storage__ = __webpack_require__("../../../../angularfire2/storage/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_detail_detail_component__ = __webpack_require__("../../../../../src/app/components/detail/detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_content_manager_content_manager_component__ = __webpack_require__("../../../../../src/app/components/content-manager/content-manager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_videos_videos_component__ = __webpack_require__("../../../../../src/app/components/videos/videos.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_app_header_app_header_component__["a" /* AppHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_app_footer_app_footer_component__["a" /* AppFooterComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_board_board_component__["a" /* BoardComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_founders_founders_component__["a" /* FoundersComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_news_news_component__["a" /* NewsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_gallery_gallery_component__["a" /* GalleryComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_ministries_ministries_component__["a" /* MinistriesComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_sidebar_content_sidebar_content_component__["a" /* SidebarContentComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_detail_detail_component__["a" /* DetailComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_content_manager_content_manager_component__["a" /* ContentManagerComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_videos_videos_component__["a" /* VideosComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_17_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_18__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_15_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_19_ng4_loading_spinner__["Ng4LoadingSpinnerModule"].forRoot(),
                // NgbModule.forRoot(),
                __WEBPACK_IMPORTED_MODULE_22__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_16_angularfire2_storage__["b" /* AngularFireStorageModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/app-footer/app-footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/app-footer/app-footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"site-footer\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <div class=\"widget\">\n          <h3 class=\"widget-title\">Our address</h3>\n            <p>Contact us on the below Address</p>\n          <ul class=\"address\">\n            <li><i class=\"fa fa-map-marker\"></i> Bethel Ground, Pathapuram</li>\n            <li><i class=\"fa fa-phone\"></i> (91) 9847278494</li>\n            <li><i class=\"fa fa-envelope\"></i> info@yourchurch.com</li>\n          </ul>\n        </div>\n      </div>\n<!--\n      <div class=\"col-md-4\">\n        <div class=\"widget\">\n          <h3 class=\"widget-title\">Topics from last meeting</h3>\n          <ul class=\"bullet\">\n            <li><a href=\"#\">Lorem ipsum dolor sit amet</a></li>\n            <li><a href=\"#\">Consectetur adipisicing elit quis nostrud</a></li>\n            <li><a href=\"#\">Eiusmod tempor incididunt ut labore et dolore magna</a></li> \n            <li><a href=\"#\">Ut enim ad minim veniam cillum</a></li>\n            <li><a href=\"#\">Exercitation ullamco laboris nisi ut aliquip</a></li> \n            <li><a href=\"#\">Duis aute irure dolor in reprehenderit in voluptate</a></li>\n          </ul>\n        </div>\n      </div>\n-->\n      <div class=\"col-md-8\">\n        <div class=\"widget\">\n          <h3 class=\"widget-title\">Contact form</h3>\n          <form action=\"#\" class=\"contact-form\">\n            <div class=\"row\">\n              <div class=\"col-md-6\"><input type=\"text\" placeholder=\"Your name...\"></div>\n              <div class=\"col-md-6\"><input type=\"text\" placeholder=\"Email...\"></div>\n            </div>\n            \n            <textarea name=\"\" placeholder=\"Your message...\"></textarea>\n            <div class=\"text-right\"><input type=\"submit\" value=\"Send message\"></div>\n            \n          </form>\n        </div>\n      </div>\n    </div> <!-- .row -->\n\n    <p class=\"colophon\">Copyright 2018 Bethel Gospel Assembly. All right reserved</p>\n  </div><!-- .container -->\n</footer> <!-- .site-footer -->\n"

/***/ }),

/***/ "../../../../../src/app/components/app-footer/app-footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppFooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppFooterComponent = /** @class */ (function () {
    function AppFooterComponent() {
    }
    AppFooterComponent.prototype.ngOnInit = function () {
    };
    AppFooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-app-footer',
            template: __webpack_require__("../../../../../src/app/components/app-footer/app-footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/app-footer/app-footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppFooterComponent);
    return AppFooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/app-header/app-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/app-header/app-header.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"site-header\">\n  <div class=\"row\">\n      <div class=\"content col-md-2 col-xs-3 text-center\">\n      <a href=\"#\" class=\"branding\">\n<img src=\"assets/images/logo.jpg\" alt=\"\" class=\"logo img-responsive\">\n<h1 class=\"site-title\">Bethel Gospel Assembly</h1>\n</a></div>\n       <div class=\"content col-md-10 col-xs-9  text-right\">\n        <div class=\"main-navigation\">\n<button class=\"menu-toggle\"><i class=\"fa fa-bars\"></i> Menu</button>\n<ul class=\"menu\" #menu>\n<li class=\"menu-item \" [ngClass]=\"{'current-menu-item': selectedItem == 'home'}\" (click)=\"listClick($event, 'home')\"><a routerLink=\"/dashboard\">Home </a></li>\n<li class=\"menu-item\" [ngClass]=\"{'current-menu-item': selectedItem == 'founders'}\" (click)=\"listClick($event, 'founders')\"><a routerLink=\"/dashboard/founders\">Founders </a></li>\n              <li class=\"menu-item\" [ngClass]=\"{'current-menu-item': selectedItem == 'board'}\" (click)=\"listClick($event, 'board')\"><a routerLink=\"/dashboard/board\">Board </a></li>\n<li class=\"menu-item\" [ngClass]=\"{'current-menu-item': selectedItem == 'ministries'}\" (click)=\"listClick($event, 'ministries')\"><a routerLink=\"/dashboard/ministries\">Ministries</a></li>\n<li class=\"menu-item\" [ngClass]=\"{'current-menu-item': selectedItem == 'news'}\" (click)=\"listClick($event, 'news')\"><a routerLink=\"/dashboard/news\">Events </a></li>\n<li class=\"menu-item\" [ngClass]=\"{'current-menu-item': selectedItem == 'gallery'}\" (click)=\"listClick($event, 'gallery')\"><a routerLink=\"/dashboard/gallery\">Gallery </a></li>\n<li class=\"menu-item\" [ngClass]=\"{'current-menu-item': selectedItem == 'videos'}\" (click)=\"listClick($event, 'videos')\"><a routerLink=\"/dashboard/videos\">Videos </a></li>\n<li class=\"menu-item\" [ngClass]=\"{'current-menu-item': selectedItem == 'contact'}\" (click)=\"listClick($event, 'contact')\"><a routerLink=\"/dashboard/contact\">Contact </a></li>\n</ul>\n</div></div>\n  </div>\n<div class=\"container\">\n\n\n\n\n<div class=\"mobile-navigation\" #menuContainer>\n  <ul class=\"menu\" >\n    <li class=\"menu-item \" [ngClass]=\"{'current-menu-item': selectedItem == 'home'}\" (click)=\"listClick($event, 'home')\"><a routerLink=\"/dashboard\">Home </a></li>\n    <li class=\"menu-item\" [ngClass]=\"{'current-menu-item': selectedItem == 'founders'}\" (click)=\"listClick($event, 'founders')\"><a routerLink=\"/dashboard/founders\">Founders </a></li>\n                  <li class=\"menu-item\" [ngClass]=\"{'current-menu-item': selectedItem == 'board'}\" (click)=\"listClick($event, 'board')\"><a routerLink=\"/dashboard/board\">Board </a></li>\n    <li class=\"menu-item\" [ngClass]=\"{'current-menu-item': selectedItem == 'ministries'}\" (click)=\"listClick($event, 'ministries')\"><a routerLink=\"/dashboard/ministries\">Ministries</a></li>\n    <li class=\"menu-item\" [ngClass]=\"{'current-menu-item': selectedItem == 'news'}\" (click)=\"listClick($event, 'news')\"><a routerLink=\"/dashboard/news\">Events </a></li>\n    <li class=\"menu-item\" [ngClass]=\"{'current-menu-item': selectedItem == 'gallery'}\" (click)=\"listClick($event, 'gallery')\"><a routerLink=\"/dashboard/gallery\">Gallery </a></li>\n    <li class=\"menu-item\" [ngClass]=\"{'current-menu-item': selectedItem == 'videos'}\" (click)=\"listClick($event, 'videos')\"><a routerLink=\"/dashboard/videos\">Videos </a></li>\n    <li class=\"menu-item\" [ngClass]=\"{'current-menu-item': selectedItem == 'contact'}\" (click)=\"listClick($event, 'contact')\"><a routerLink=\"/dashboard/contact\">Contact </a></li>\n    </ul>\n</div>\n</div>\n</header> <!-- .site-header -->\n"

/***/ }),

/***/ "../../../../../src/app/components/app-header/app-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppHeaderComponent = /** @class */ (function () {
    function AppHeaderComponent() {
    }
    AppHeaderComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_1_jquery__(document).ready(function () {
            // Cloning main navigation for mobile menu
            // $(".mobile-navigation").append($(".main-navigation .menu").clone());
            // Mobile menu toggle 
            __WEBPACK_IMPORTED_MODULE_1_jquery__(".menu-toggle").click(function () {
                __WEBPACK_IMPORTED_MODULE_1_jquery__(".mobile-navigation").slideToggle();
            });
        });
    };
    AppHeaderComponent.prototype.listClick = function (event, newValue) {
        console.log(newValue);
        this.selectedItem = newValue; // don't forget to update the model here
        // ... do other stuff here ...
        __WEBPACK_IMPORTED_MODULE_1_jquery__(".mobile-navigation").slideToggle();
    };
    AppHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-app-header',
            template: __webpack_require__("../../../../../src/app/components/app-header/app-header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/app-header/app-header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppHeaderComponent);
    return AppHeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/board/board.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".board-container{\n    padding: 10px;\n    border: 1px solid #dedcd9;\n    border-radius: 5px;\n    margin: 10px 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/board/board.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-head\" style=\"background-image: url('assets/images/page-head-1.jpg');\">\n  <div class=\"container\">\n    <h2 class=\"page-title\">Board Members</h2>\n  </div>\n</div>\n<main class=\"main-content\">\n  <div class=\"fullwidth-block\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"content col-md-8\">\n          <div class=\"board-container\">\n          <h2 class=\"section-title\">GENERAL EXECUTIVES 2020-2021</h2>\n          <div class=\"row\">\n         \n            <div class=\"family\" *ngFor=\"let member of boardMembers | async\">\n                <div [ngStyle]=\"{'background-image': 'url(' + member.photo + ')'}\"  class=\"news-img\"></div>\n<!--\t\t\t\t\t\t\t\t\t\t<img src=\"assets/images/rajeev.jpg\" alt=\"\" class=\"family-image\">-->\n<h3 class=\"family-name\">{{member.name}}</h3>\n<small>{{member.position}}</small>\n</div>\n\n          \n          </div>\n        </div>\n        <div class=\"board-container\">\n            <h2 class=\"section-title\">CHRIST SOLDIERS EXECUTIVES 2020-2021</h2>\n            <div class=\"row\">\n           \n              <div class=\"family\" *ngFor=\"let member of csboardMembers | async\">\n                  <div [ngStyle]=\"{'background-image': 'url(' + member.photo + ')'}\"  class=\"news-img\"></div>\n  <!--\t\t\t\t\t\t\t\t\t\t<img src=\"assets/images/rajeev.jpg\" alt=\"\" class=\"family-image\">-->\n  <h3 class=\"family-name\">{{member.name}}</h3>\n  <small>{{member.position}}</small>\n  </div>\n  \n            \n            </div>\n          </div>\n          <div class=\"board-container\">\n            <h2 class=\"section-title\">SUNDAY SCHOOL EXECUTES 2020-2021</h2>\n            <div class=\"row\">\n           \n              <div class=\"family\" *ngFor=\"let member of ssboardMembers | async\">\n                  <div [ngStyle]=\"{'background-image': 'url(' + member.photo + ')'}\"  class=\"news-img\"></div>\n  <!--\t\t\t\t\t\t\t\t\t\t<img src=\"assets/images/rajeev.jpg\" alt=\"\" class=\"family-image\">-->\n  <h3 class=\"family-name\">{{member.name}}</h3>\n  <small>{{member.position}}</small>\n  </div>\n  \n            \n            </div>\n          </div>\n\n          <div class=\"board-container\">\n            <h2 class=\"section-title\">WOMENS FELLOWSHIP EXECUTES 2020-2021</h2>\n            <div class=\"row\">\n           \n              <div class=\"family\" *ngFor=\"let member of bwfboardMembers | async\">\n                  <div [ngStyle]=\"{'background-image': 'url(' + member.photo + ')'}\"  class=\"news-img\"></div>\n  <!--\t\t\t\t\t\t\t\t\t\t<img src=\"assets/images/rajeev.jpg\" alt=\"\" class=\"family-image\">-->\n  <h3 class=\"family-name\">{{member.name}}</h3>\n  <small>{{member.position}}</small>\n  </div>\n  \n            \n            </div>\n          </div>\n        </div>\n\n     \n        <div class=\"sidebar col-md-3 col-md-offset-1\">\n          <app-sidebar-content></app-sidebar-content>\n        </div>\n\n      \n      </div>\n    </div>\n  </div>\n</main> <!-- .main-content -->\n\n"

/***/ }),

/***/ "../../../../../src/app/components/board/board.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng4_loading_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BoardComponent = /** @class */ (function () {
    function BoardComponent(db, spinnerService) {
        var _this = this;
        this.spinnerService = spinnerService;
        this.spinnerService.show();
        // this.boardMembers = db.collection('/boardmembers').orderBy("priority", "asc").valueChanges();
        this.boardMembers = db.collection('/boardmembers', function (ref) { return ref.where('category', '==', 'General').orderBy('priority'); }).valueChanges();
        this.boardMembers.subscribe(function (result) {
            // this.messageService.sendMessage(result[0].clientname);
            console.log(result);
            _this.spinnerService.hide();
        });
        this.csboardMembers = db.collection('/boardmembers', function (ref) { return ref.where('category', '==', 'Christ Soldiers').orderBy('priority'); }).valueChanges();
        this.ssboardMembers = db.collection('/boardmembers', function (ref) { return ref.where('category', '==', 'Sunday School').orderBy('priority'); }).valueChanges();
        this.bwfboardMembers = db.collection('/boardmembers', function (ref) { return ref.where('category', '==', 'BWF').orderBy('priority'); }).valueChanges();
    }
    BoardComponent.prototype.ngOnInit = function () {
    };
    BoardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-board',
            template: __webpack_require__("../../../../../src/app/components/board/board.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/board/board.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_2_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], BoardComponent);
    return BoardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "\n\t\t<div class=\"page-head\" style=\"background-image: url('assets/images/page-head-1.jpg');\">\n      <div class=\"container\">\n\t\t\t\t\t<h2 class=\"page-title\">Contact Us</h2>\n\t\t\t\t</div>\n\t\t\t</div>"

/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/content-manager/content-manager.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media(min-width: 768px) {\n    .field-label-responsive {\n      padding-top: .5rem;\n      text-align: right;\n    }\n  }\n  .selectWrapper {\n    width: 60%;\n    overflow: hidden;\n    position: relative;\n    border: 1px solid #bbb;\n    border-radius: 2px;\n    margin: 10px auto;\n    background:#FFFFFF url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2211%22%20height%3D%2211%22%20viewBox%3D%220%200%2011%2011%22%3E%3Cpath%20d%3D%22M4.33%208.5L0%201L8.66%201z%22%20fill%3D%22%2300AEA9%22%2F%3E%3C%2Fsvg%3E') right 13px center no-repeat;\n}\n  .selectWrapper select {\n        padding: 12px 40px 12px 20px;\n        font-size: 18px;\n        line-height: 18px;\n        width: 100%;\n        border: none;\n        -webkit-box-shadow: none;\n                box-shadow: none;\n        background: transparent;\n        background-image: none;\n        -webkit-appearance: none;\n        outline: none;\n        cursor: pointer;\n        -moz-appearance: none;\n        text-indent: 0.01px;\n        text-overflow: ellipsis;\n      \n    }\n  .progress{\n      width: 100%;\n    }\n  .preview-img{\n     \n      width: 100px;\n      box-shadow: 10px 10px 5px #ccc;\n      -moz-box-shadow: 10px 10px 5px #ccc;\n      -webkit-box-shadow: 10px 10px 5px #ccc;\n      border-radius: 10px;\n  \n  }\n  .selectWrapper-category{\n    border: 1px solid #bbb;\n    border-radius: 2px;\n    margin: 0;\n    width: 93%;;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/content-manager/content-manager.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-head\" style=\"background-image: url('assets/images/page-head-1.jpg');\">\n    <div class=\"container\">\n       <h2 class=\"page-title\">Manage Content</h2>\n    </div>\n </div>\n <div class=\"container fullwidth-block\">\n    <div class=\"row container text-center\">\n       <div class=\"col-md-12\">\n          <div class=\"selectWrapper\">\n             <select (change)=\"selectType($event.target.value)\">\n                <option >Select</option>\n                <option >Board members</option>\n                <option >News</option>\n                <option >Sermons</option>\n                <option >Upcoming Events</option>\n             </select>\n          </div>\n       </div>\n    </div>\n    <div class=\"container\">\n       <div class=\"board-members\" [hidden]=\"selectedItem!='Board members'\">\n          <form class=\"form-horizontal\" role=\"form\" method=\"POST\" action=\"/Save\">\n             <div class=\"row\">\n                <div class=\"col-md-3 col-xs-3\"></div>\n                <div class=\"col-md-6 col-xs-6\">\n                   <h2>Add Board Members</h2>\n                   <hr>\n                </div>\n             </div>\n             <div class=\"row\">\n                <div class=\"col-md-3 col-xs-3 field-label-responsive\">\n                   <label for=\"name\">Name</label>\n                </div>\n                <div class=\"col-md-6 col-xs-9\">\n                   <div class=\"form-group\">\n                      <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                         <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-user\"></i></div>\n                         <input [(ngModel)]=\"boardMemberInfo.name\" type=\"text\" name=\"name\" class=\"form-control\" id=\"name\"\n                         placeholder=\"John Doe\" required autofocus>\n                      </div>\n                   </div>\n                </div>\n                <div class=\"col-md-3 col-xs-3\">\n                   <div class=\"form-control-feedback\">\n                      <span class=\"text-danger align-middle\">\n                         <!-- Put name validation error messages here -->\n                      </span>\n                   </div>\n                </div>\n             </div>\n             <div class=\"row\">\n                <div class=\"col-md-3 col-xs-3 field-label-responsive\">\n                   <label for=\"email\">E-Mail Address</label>\n                </div>\n                <div class=\"col-md-6 col-xs-9\">\n                   <div class=\"form-group\">\n                      <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                         <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-at\"></i></div>\n                         <input [(ngModel)]=\"boardMemberInfo.email\" type=\"text\" name=\"email\" class=\"form-control\" id=\"email\"\n                         placeholder=\"you@example.com\" required autofocus>\n                      </div>\n                   </div>\n                </div>\n                <div class=\"col-md-3 col-xs-3\">\n                   <div class=\"form-control-feedback\">\n                      <span class=\"text-danger align-middle\">\n                         <!-- Put e-mail validation error messages here -->\n                      </span>\n                   </div>\n                </div>\n             </div>\n             <div class=\"row\">\n               <div class=\"col-md-3 col-xs-3 field-label-responsive\">\n                  <label for=\"password\">Category</label>\n               </div>\n               <div class=\"col-md-6 col-xs-9\">\n                  <div class=\"form-group has-danger\">\n                     <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n\n                     <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-at\"></i></div>\n                        <div class=\"selectWrapper selectWrapper-category\">\n                           <select [(ngModel)]=\"boardMemberInfo.category\"  name=\"category\" >\n                              <option >Select</option>\n                              <option >General</option>\n                              <option >Christ Soldiers</option>\n                              <option >Sunday School</option>\n                              <option >BWF</option>\n                           </select>\n                        </div>\n                  </div>  </div>\n               </div>\n            </div>\n             <div class=\"row\">\n                <div class=\"col-md-3 col-xs-3 field-label-responsive\">\n                   <label for=\"password\">Position</label>\n                </div>\n                <div class=\"col-md-6 col-xs-9\">\n                   <div class=\"form-group has-danger\">\n                      <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                         <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-graduation-cap\"></i></div>\n                         <input [(ngModel)]=\"boardMemberInfo.position\" name=\"position\" class=\"form-control\" id=\"position\"\n                         placeholder=\"position\" required>\n                      </div>\n                   </div>\n                </div>\n             </div>\n             <div class=\"row\">\n                <div class=\"col-md-3 col-xs-3 field-label-responsive\">\n                   <label for=\"password\">Phone</label>\n                </div>\n                <div class=\"col-md-6 col-xs-9\">\n                   <div class=\"form-group\">\n                      <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                         <div class=\"input-group-addon\" style=\"width: 2.6rem\">\n                            <i class=\"fa fa-phone\"></i>\n                         </div>\n                         <input [(ngModel)]=\"boardMemberInfo.phone\" name=\"phone\" class=\"form-control\"\n                         id=\"phone\" placeholder=\"phone\" required>\n                      </div>\n                   </div>\n                </div>\n             </div>\n             <div class=\"row\">\n                <div class=\"col-md-3 col-xs-3 field-label-responsive\">\n                   <label for=\"password\">Priority</label>\n                </div>\n                <div class=\"col-md-6 col-xs-9\">\n                   <div class=\"form-group\">\n                      <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                         <div class=\"input-group-addon\" style=\"width: 2.6rem\">\n                            <i class=\"fa fa-phone\"></i>\n                         </div>\n                         <input [(ngModel)]=\"boardMemberInfo.priority\" type=\"number\" name=\"priority\" class=\"form-control\"\n                         id=\"priority\" placeholder=\"priority\" required>\n                      </div>\n                   </div>\n                </div>\n             </div>\n             <!-- <div class=\"row\">\n                <div class=\"col-md-3 col-xs-3 field-label-responsive\">\n                   <label for=\"password\">Photo</label>\n                </div>\n                <div class=\"col-md-6 col-xs-9\">\n                   <div class=\"form-group\">\n                      <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                         <div class=\"input-group-addon\" style=\"width: 2.6rem\">\n                            <i class=\"fa fa-photo\"></i>\n                         </div>\n                         <input [(ngModel)]=\"boardMemberInfo.photo\" name=\"photo\" class=\"form-control\"\n                         id=\"photo\" placeholder=\"photo\" required>\n                      </div>\n                   </div>\n                </div>\n             </div> -->\n             <div class=\"row\">\n                <div class=\"col-md-3 col-xs-3 field-label-responsive\">\n                   <label for=\"password\">Upload Photo</label>\n                </div>\n                <div class=\"col-md-6 col-xs-9\">\n                   <div class=\"form-group\">\n                      <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                         <div class=\"input-group-addon\" style=\"width: 2.6rem\">\n                            <i class=\"fa fa-photo\"></i>\n                         </div>\n                         <input type=\"file\" id=\"boardImageInput\"  (change)=\"uploadImage($event)\" accept=\".png,.jpg\" />\n                      </div>\n                   </div>\n                </div>\n             </div>\n             <div class=\"row\" *ngIf=\"boardMemberInfo.photo\">\n                    <div class=\"col-md-3 col-xs-3 field-label-responsive\">\n                       <label for=\"password\">Selected Photo</label>\n                    </div>\n                    <div class=\"col-md-6 col-xs-9\">\n                     <img src=\"{{boardMemberInfo.photo}}\" class=\"preview-img\">\n                    </div>\n                 </div>\n             <div class=\"row\">\n                <div class=\"col-md-9 col-xs-12 field-label-responsive\">\n                   <div class=\"progress\"  *ngIf=\"uploadProgress | async; let uploadProgressValue\">\n                      <div class=\"progress-bar progress-bar-striped bg-success\" role=\"progressbar\" [style.width]=\"(uploadProgressValue) + '%'\" [attr.aria-valuenow]=\"(uploadProgressValue)\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                   </div>\n                </div>\n                <br>\n                <!-- <div *ngIf=\"downloadURL | async; let downloadSrc\" class=\"alert alert-info\" role=\"alert\">\n                   File uploaded: <a [href]=\"downloadSrc\">{{downloadSrc}}</a>\n                   </div> -->\n             </div>\n       </div>\n       <div class=\"row\">\n       <div class=\"col-md-3 col-xs-3\"></div>\n       <div class=\"col-md-6 col-xs-9\">\n       <button type=\"submit\" (click)=\"uploadImageAndSaveData('board')\" class=\"btn btn-success\"><i class=\"fa fa-user-plus\"></i> Save</button>\n       </div>\n       </div>\n       </form>\n       <div class=\"container fullwidth-block\">\n          <div class=\"list-group\" *ngFor=\"let member of boardMembersList | async\">\n             <a class=\"list-group-item clearfix\">\n             <span class=\"glyphicon glyphicon-file\"></span>\n             {{member.priority}}. {{member.name}}\n             <span class=\"pull-right\">\n             <button (click)=\"editMember(member)\" class=\"btn btn-xs btn-info\">Edit</button>\n             <button class=\"btn btn-xs btn-info\" (click)=\"deleteMember(member)\" >Delete</button>\n             </span>\n             </a>\n          </div>\n       </div>\n    </div>\n    <div class=\"sermons\" [hidden]=\"selectedItem!='Sermons'\" >\n       <form class=\"form-horizontal\" role=\"form\" method=\"POST\" action=\"/Save\">\n          <div class=\"row\">\n             <div class=\"col-md-3 col-xs-3\"></div>\n             <div class=\"col-md-6 col-xs-6\">\n                <h2>Add Sermons</h2>\n                <hr>\n             </div>\n          </div>\n          <div class=\"row\">\n             <div class=\"col-md-3 col-xs-3 field-label-responsive\">\n                <label for=\"name\">Author</label>\n             </div>\n             <div class=\"col-md-6 col-xs-9\">\n                <div class=\"form-group\">\n                   <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                      <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-user\"></i></div>\n                      <input [(ngModel)]=\"sermonInfo.author\" type=\"text\" name=\"author\" class=\"form-control\" id=\"author\"\n                      placeholder=\"Author\" required autofocus>\n                   </div>\n                </div>\n             </div>\n             <div class=\"col-md-3 col-xs-3\">\n                <div class=\"form-control-feedback\">\n                   <span class=\"text-danger align-middle\">\n                      <!-- Put name validation error messages here -->\n                   </span>\n                </div>\n             </div>\n          </div>\n          <div class=\"row\">\n             <div class=\"col-md-3 col-xs-3 field-label-responsive\">\n                <label for=\"name\">Title</label>\n             </div>\n             <div class=\"col-md-6 col-xs-9\">\n                <div class=\"form-group\">\n                   <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                      <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-user\"></i></div>\n                      <input [(ngModel)]=\"sermonInfo.title\" type=\"text\" name=\"sermontitle\" class=\"form-control\" id=\"sermontitle\"\n                      placeholder=\"Title\" required autofocus>\n                   </div>\n                </div>\n             </div>\n             <div class=\"col-md-3 col-xs-3\">\n                <div class=\"form-control-feedback\">\n                   <span class=\"text-danger align-middle\">\n                      <!-- Put name validation error messages here -->\n                   </span>\n                </div>\n             </div>\n          </div>\n          <div class=\"row\">\n             <div class=\"col-md-3 col-xs-3 field-label-responsive\">\n                <label for=\"email\">Date</label>\n             </div>\n             <div class=\"col-md-6 col-xs-9\">\n                <div class=\"form-group\">\n                   <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                      <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-at\"></i></div>\n                      <input [(ngModel)]=\"sermonInfo.date\" type=\"date\" name=\"sermondate\" class=\"form-control\" id=\"sermondate\"\n                      placeholder=\"you@example.com\" required autofocus>\n                   </div>\n                </div>\n             </div>\n             <div class=\"col-md-3 col-xs-3\">\n                <div class=\"form-control-feedback\">\n                   <span class=\"text-danger align-middle\">\n                      <!-- Put e-mail validation error messages here -->\n                   </span>\n                </div>\n             </div>\n          </div>\n          <div class=\"row\">\n             <div class=\"col-md-3 col-xs-3 field-label-responsive\">\n                <label for=\"password\">Details</label>\n             </div>\n             <div class=\"col-md-6 col-xs-9\">\n                <div class=\"form-group has-danger\">\n                   <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                      <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-graduation-cap\"></i></div>\n                      <input [(ngModel)]=\"sermonInfo.details\" name=\"sermondetails\" class=\"form-control\" id=\"sermondetails\"\n                      placeholder=\"Details\" required>\n                   </div>\n                </div>\n             </div>\n          </div>\n          <!-- <div class=\"row\">\n             <div class=\"col-md-3 col-xs-3 field-label-responsive\">\n                <label for=\"password\">Photo</label>\n             </div>\n             <div class=\"col-md-6 col-xs-9\">\n                <div class=\"form-group\">\n                   <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                      <div class=\"input-group-addon\" style=\"width: 2.6rem\">\n                         <i class=\"fa fa-photo\"></i>\n                      </div>\n                      <input [(ngModel)]=\"sermonInfo.photo\" name=\"sermonphoto\" class=\"form-control\"\n                      id=\"sermonphoto\" placeholder=\"photo\" required>\n                   </div>\n                </div>\n             </div>\n          </div> -->\n          <div class=\"row\">\n                <div class=\"col-md-3 col-xs-3 field-label-responsive\">\n                   <label for=\"password\">Upload Photo</label>\n                </div>\n                <div class=\"col-md-6 col-xs-9\">\n                   <div class=\"form-group\">\n                      <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                         <div class=\"input-group-addon\" style=\"width: 2.6rem\">\n                            <i class=\"fa fa-photo\"></i>\n                         </div>\n                         <input type=\"file\" id=\"sermonImageInput\" (change)=\"uploadImage($event)\" accept=\".png,.jpg\" />\n                      </div>\n                   </div>\n                </div>\n             </div>\n             <div class=\"row\" *ngIf=\"sermonInfo.photo\">\n                    <div class=\"col-md-3 col-xs-3 field-label-responsive\">\n                       <label for=\"password\">Selected Photo</label>\n                    </div>\n                    <div class=\"col-md-6 col-xs-9\">\n                     <img src=\"{{sermonInfo.photo}}\" class=\"preview-img\">\n                    </div>\n                 </div>\n          <div class=\"row\">\n             <div class=\"col-md-3 col-xs-3\"></div>\n             <div class=\"col-md-6 col-xs-9\">\n                <button type=\"submit\" (click)=\"uploadImageAndSaveData('sermon')\" class=\"btn btn-success\"><i class=\"fa fa-user-plus\"></i> Save</button>\n             </div>\n          </div>\n       </form>\n       <div class=\"container fullwidth-block\">\n            <div class=\"list-group\" *ngFor=\"let sermon of sermonList | async\">\n               <a class=\"list-group-item clearfix\">\n               <span class=\"glyphicon glyphicon-file\"></span>\n               {{sermon.title}}\n               <span class=\"pull-right\">\n               <button (click)=\"editSermons(sermon)\" class=\"btn btn-xs btn-info\">Edit</button>\n               <button class=\"btn btn-xs btn-info\" (click)=\"deleteSermon(sermon)\" >Delete</button>\n               </span>\n               </a>\n            </div> </div>\n    </div>\n    <div class=\"news\" [hidden]=\"selectedItem!='News'\" >\n       <form class=\"form-horizontal\" role=\"form\" method=\"POST\" action=\"/Save\">\n          <div class=\"row\">\n             <div class=\"col-md-3 col-xs-3\"></div>\n             <div class=\"col-md-6 col-xs-6\">\n                <h2>Add News</h2>\n                <hr>\n             </div>\n          </div>\n          <div class=\"row\">\n             <div class=\"col-md-3 col-xs-3 field-label-responsive\">\n                <label for=\"name\">Title</label>\n             </div>\n             <div class=\"col-md-6 col-xs-9\">\n                <div class=\"form-group\">\n                   <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                      <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-user\"></i></div>\n                      <input [(ngModel)]=\"news.eventname\" type=\"text\" name=\"newsTitle\" class=\"form-control\" id=\"newsTitle\"\n                      placeholder=\"Title\" required autofocus>\n                   </div>\n                </div>\n             </div>\n             <div class=\"col-md-3 col-xs-3\">\n                <div class=\"form-control-feedback\">\n                   <span class=\"text-danger align-middle\">\n                      <!-- Put name validation error messages here -->\n                   </span>\n                </div>\n             </div>\n          </div>\n          <div class=\"row\">\n             <div class=\"col-md-3 col-xs-3 field-label-responsive\">\n                <label for=\"name\">Photo</label>\n             </div>\n             <div class=\"col-md-6 col-xs-9\">\n                <div class=\"form-group\">\n                   <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                      <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-image\"></i></div>\n                      <input [(ngModel)]=\"news.photo\" type=\"text\" name=\"newsPhoto\" class=\"form-control\" id=\"newsPhoto\"\n                      placeholder=\"Photo\" required autofocus>\n                   </div>\n                </div>\n             </div>\n             <div class=\"col-md-3 col-xs-3\">\n                <div class=\"form-control-feedback\">\n                   <span class=\"text-danger align-middle\">\n                      <!-- Put name validation error messages here -->\n                   </span>\n                </div>\n             </div>\n          </div>\n          <div class=\"row\">\n             <div class=\"col-md-3 col-xs-3 field-label-responsive\">\n                <label for=\"email\">Date</label>\n             </div>\n             <div class=\"col-md-6 col-xs-9\">\n                <div class=\"form-group\">\n                   <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                      <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-at\"></i></div>\n                      <input [(ngModel)]=\"news.date\" type=\"date\" name=\"newsDate\" class=\"form-control\" id=\"newsDate\"\n                      placeholder=\"Date\" required autofocus>\n                   </div>\n                </div>\n             </div>\n             <div class=\"col-md-3 col-xs-3\">\n                <div class=\"form-control-feedback\">\n                   <span class=\"text-danger align-middle\">\n                      <!-- Put e-mail validation error messages here -->\n                   </span>\n                </div>\n             </div>\n          </div>\n          <div class=\"row\">\n             <div class=\"col-md-3 col-xs-3 field-label-responsive\">\n                <label for=\"password\">Details</label>\n             </div>\n             <div class=\"col-md-6 col-xs-9\">\n                <div class=\"form-group has-danger\">\n                   <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                      <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-graduation-cap\"></i></div>\n                      <input [(ngModel)]=\"news.details\" name=\"newsdetails\" class=\"form-control\" id=\"newsdetails\"\n                      placeholder=\"Details\" required>\n                   </div>\n                </div>\n             </div>\n          </div>\n          <div class=\"row\">\n             <div class=\"col-md-3 col-xs-3\"></div>\n             <div class=\"col-md-6 col-xs-9\">\n                <button type=\"submit\" (click)=\"saveNews()\" class=\"btn btn-success\"><i class=\"fa fa-user-plus\"></i> Save</button>\n             </div>\n          </div>\n       </form>\n       <div class=\"container fullwidth-block\">\n          <div class=\"list-group\" *ngFor=\"let news of newsList | async\">\n             <a class=\"list-group-item clearfix\">\n             <span class=\"glyphicon glyphicon-file\"></span>\n             {{news.eventname}}\n             <span class=\"pull-right\">\n             <button (click)=\"editNews(news)\" class=\"btn btn-xs btn-info\">Edit</button>\n             <button class=\"btn btn-xs btn-info\" (click)=\"deleteNews(news)\" >Delete</button>\n             </span>\n             </a>\n          </div>\n       </div>\n    </div>\n    <div class=\"upcomingevents\" [hidden]=\"selectedItem!='Upcoming Events'\" >\n       <form class=\"form-horizontal\" role=\"form\" method=\"POST\" action=\"/Save\">\n          <div class=\"row\">\n             <div class=\"col-md-3 col-xs-3\"></div>\n             <div class=\"col-md-6 col-xs-6\">\n                <h2>Add Upcoming Events</h2>\n                <hr>\n             </div>\n          </div>\n          <div class=\"row\">\n             <div class=\"col-md-3 col-xs-3 field-label-responsive\">\n                <label for=\"name\">Title</label>\n             </div>\n             <div class=\"col-md-6 col-xs-9\">\n                <div class=\"form-group\">\n                   <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                      <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-user\"></i></div>\n                      <input [(ngModel)]=\"upcomingEvents.title\" type=\"text\" name=\"upcomingeventsTitle\" class=\"form-control\" id=\"upcomingeventsTitle\"\n                      placeholder=\"Title\" required autofocus>\n                   </div>\n                </div>\n             </div>\n             <div class=\"col-md-3 col-xs-3\">\n                <div class=\"form-control-feedback\">\n                   <span class=\"text-danger align-middle\">\n                      <!-- Put name validation error messages here -->\n                   </span>\n                </div>\n             </div>\n          </div>\n          <div class=\"row\">\n             <div class=\"col-md-3 col-xs-3 field-label-responsive\">\n                <label for=\"name\">Location</label>\n             </div>\n             <div class=\"col-md-6 col-xs-9\">\n                <div class=\"form-group\">\n                   <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                      <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-user\"></i></div>\n                      <input [(ngModel)]=\"upcomingEvents.location\" type=\"text\" name=\"upcomingeventsLocation\" class=\"form-control\" id=\"upcomingeventsLocation\"\n                      placeholder=\"Location\" required autofocus>\n                   </div>\n                </div>\n             </div>\n             <div class=\"col-md-3 col-xs-3\">\n                <div class=\"form-control-feedback\">\n                   <span class=\"text-danger align-middle\">\n                      <!-- Put name validation error messages here -->\n                   </span>\n                </div>\n             </div>\n          </div>\n          <div class=\"row\">\n             <div class=\"col-md-3 col-xs-3 field-label-responsive\">\n                <label for=\"email\">Date</label>\n             </div>\n             <div class=\"col-md-6 col-xs-9\">\n                <div class=\"form-group\">\n                   <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                      <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-at\"></i></div>\n                      <input [(ngModel)]=\"upcomingEvents.date\" type=\"date\" name=\"upcomingEventsDate\" class=\"form-control\" id=\"upcomingEventsDate\"\n                      placeholder=\"Date\" required autofocus>\n                   </div>\n                </div>\n             </div>\n             <div class=\"col-md-3 col-xs-3\">\n                <div class=\"form-control-feedback\">\n                   <span class=\"text-danger align-middle\">\n                      <!-- Put e-mail validation error messages here -->\n                   </span>\n                </div>\n             </div>\n          </div>\n          <div class=\"row\">\n             <div class=\"col-md-3 col-xs-3 field-label-responsive\">\n                <label for=\"password\">Details</label>\n             </div>\n             <div class=\"col-md-6 col-xs-9\">\n                <div class=\"form-group has-danger\">\n                   <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                      <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-graduation-cap\"></i></div>\n                      <input [(ngModel)]=\"upcomingEvents.details\" name=\"upcomingEventsdetails\" class=\"form-control\" id=\"upcomingEventsdetails\"\n                      placeholder=\"Details\" required>\n                   </div>\n                </div>\n             </div>\n          </div>\n          <div class=\"row\">\n             <div class=\"col-md-3 col-xs-3\"></div>\n             <div class=\"col-md-6 col-xs-9\">\n                <button type=\"submit\" (click)=\"saveUpcomingEvents()\" class=\"btn btn-success\"><i class=\"fa fa-user-plus\"></i> Save</button>\n             </div>\n          </div>\n       </form>\n    </div>\n </div>\n </div>"

/***/ }),

/***/ "../../../../../src/app/components/content-manager/content-manager.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentManagerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_storage__ = __webpack_require__("../../../../angularfire2/storage/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map__ = __webpack_require__("../../../../rxjs/_esm5/operators/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContentManagerComponent = /** @class */ (function () {
    function ContentManagerComponent(db, afStorage) {
        this.db = db;
        this.afStorage = afStorage;
        this.boardMembers = this.db.collection('boardmembers');
        this.sermonsCollection = this.db.collection('sermons');
        this.upcomingEventsCollection = this.db.collection('upcomingevents');
        this.newsCollection = this.db.collection('events');
        this.selectedItem = 'Select';
        this.boardMemberInfo = {};
        this.sermonInfo = {};
        this.news = {};
        this.upcomingEvents = {};
        this.uploadProgressValue = 0;
        this.boardMembersList = db.collection('/boardmembers', function (ref) { return ref.orderBy('priority'); }).valueChanges();
        this.newsList = db.collection('/events', function (ref) { return ref.orderBy('newsId'); }).valueChanges();
        this.sermonList = db.collection('/sermons', function (ref) { return ref.orderBy('sermonid'); }).valueChanges();
    }
    ContentManagerComponent.prototype.ngOnInit = function () {
    };
    ContentManagerComponent.prototype.selectType = function (selectedItem) {
        this.selectedItem = selectedItem;
    };
    ContentManagerComponent.prototype.saveBoardMembers = function () {
        this.boardMembers.doc(this.boardMemberInfo.name).set(this.boardMemberInfo)
            .catch(function (err) {
            console.log(err);
        });
        this.boardMemberInfo = {};
    };
    ContentManagerComponent.prototype.uploadImageAndSaveData = function (type) {
        var _this = this;
        if ((this.boardMemberInfo.photo && !this.uploadCntrl) || (!this.boardMemberInfo.photo && this.uploadCntrl.target.files.length === 0)) {
            switch (type) {
                case 'board':
                    this.saveBoardMembers();
                    break;
                case 'sermon':
                    this.saveSermons();
                    break;
            }
        }
        else {
            this.uploadImages();
            this.uploadProgress.subscribe(function (result) {
                _this.uploadProgressValue = result;
            });
        }
    };
    ContentManagerComponent.prototype.saveSermons = function () {
        this.sermonInfo.sermonid = this.sermonInfo.sermonid ? this.sermonInfo.sermonid : new Date().getTime().toString();
        console.log(this.sermonInfo);
        this.sermonsCollection.doc(this.sermonInfo.sermonid).set(this.sermonInfo)
            .catch(function (err) {
            console.log(err);
        });
    };
    ContentManagerComponent.prototype.saveUpcomingEvents = function () {
        this.upcomingEvents.eventId = new Date().getTime().toString();
        console.log(this.sermonInfo);
        this.upcomingEventsCollection.doc(new Date().getTime().toString()).set(this.upcomingEvents)
            .catch(function (err) {
            console.log(err);
        });
    };
    ContentManagerComponent.prototype.saveNews = function () {
        this.news.newsId = this.news.newsId ? this.news.newsId : new Date().getTime().toString();
        console.log(this.sermonInfo);
        this.newsCollection.doc(this.news.newsId).set(this.news)
            .catch(function (err) {
            console.log(err);
        });
        this.news = {};
    };
    ContentManagerComponent.prototype.editMember = function (member) {
        this.boardMemberInfo = member;
    };
    ContentManagerComponent.prototype.deleteMember = function (member) {
        var isDelete = confirm('Are you sure you want to dlete');
        if (isDelete) {
            this.boardMembers.doc(member.name).delete()
                .catch(function (err) {
                console.log(err);
            });
        }
    };
    ContentManagerComponent.prototype.editNews = function (news) {
        this.news = news;
    };
    ContentManagerComponent.prototype.deleteNews = function (news) {
        var isDelete = confirm('Are you sure you want to dlete');
        if (isDelete) {
            this.newsCollection.doc(news.newsId).delete()
                .catch(function (err) {
                console.log(err);
            });
        }
    };
    ContentManagerComponent.prototype.editSermons = function (sermons) {
        this.sermonInfo = sermons;
    };
    ContentManagerComponent.prototype.deleteSermon = function (sermon) {
        var isDelete = confirm('Are you sure you want to dlete');
        if (isDelete) {
            this.sermonsCollection.doc(sermon.sermonid).delete()
                .catch(function (err) {
                console.log(err);
            });
        }
    };
    ContentManagerComponent.prototype.uploadImage = function (event) {
        this.uploadCntrl = event;
        this.readUrl(event);
        //this.upSvc.upload(event);
        //this.uploadImages(event);
    };
    ContentManagerComponent.prototype.uploadImages = function () {
        var _this = this;
        var id = Math.random().toString(36).substring(2);
        this.ref = this.afStorage.ref(id);
        this.task = this.ref.put(this.uploadCntrl.target.files[0]);
        this.uploadState = this.task.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map__["a" /* map */])(function (s) { return s.state; }));
        this.uploadProgress = this.task.percentageChanges();
        //this.downloadURL = this.task.downloadURL();
        this.task.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* finalize */])(function () {
            _this.downloadURL = _this.ref.getDownloadURL();
            _this.downloadURL.subscribe(function (result) {
                // this.messageService.sendMessage(result[0].clientname);
                console.log(result);
                switch (_this.uploadCntrl.target.id) {
                    case 'boardImageInput':
                        _this.boardMemberInfo.photo = result;
                        _this.saveBoardMembers();
                        break;
                    case 'sermonImageInput':
                        _this.sermonInfo.photo = result;
                        _this.saveSermons();
                        break;
                }
            });
        })).subscribe();
    };
    ContentManagerComponent.prototype.readUrl = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.imageUrl = event.target.result;
                _this.setImageUrlObj(event, _this.imageUrl);
                //this.boardMemberInfo.photo=this.imageUrl;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    ContentManagerComponent.prototype.setImageUrlObj = function (cntrl, imageUrl) {
        switch (cntrl.target.id) {
            case 'boardImageInput':
                this.boardMemberInfo.photo = imageUrl;
                break;
            case 'sermonImageInput':
                this.sermonInfo.photo = imageUrl;
                break;
        }
    };
    ContentManagerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-content-manager',
            template: __webpack_require__("../../../../../src/app/components/content-manager/content-manager.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/content-manager/content-manager.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_storage__["a" /* AngularFireStorage */]])
    ], ContentManagerComponent);
    return ContentManagerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<app-app-header></app-app-header>\n<router-outlet></router-outlet>\n<app-app-footer></app-app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/detail/detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".seremon-detail{\n    text-align: justify;\n\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/detail/detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"pageName!='sermon'\"  *ngFor=\"let item of sermon | async\">\n<div class=\"page-head\" style=\"background-image: url('assets/images/page-head-1.jpg');\">\n  <div class=\"container\">\n    <h2 class=\"page-title\">Sermon</h2>\n  </div>\n</div>\n\n<main class=\"main-content\" > \n  <div class=\"fullwidth-block\">\n    <div class=\"container\">\n        <h1 [hidden]=\"!item.title\" class=\"section-title\">{{item.title}}</h1>\n                    <h2 [hidden]=\"!item.author\">Author: {{item.author}}</h2>\n      <div class=\"row\">\n                      <div class=\"content col-md-2\">\n                        <img src=\"{{item.photo}}\" alt=\"\" class=\"founder-img\"></div>\n        <div class=\"content col-md-10\">\n        \n          <ul class=\"seremon-list large\">\n            <li>\n            \n              <div class=\"seremon-detail\">\n                 \n                <p innerHTML=\"{{item.details}}\"></p> </div>\n            </li>\n            \n          </ul>\n\n          \n        </div>\n      \n      </div>\n    </div>\n              \n  </div>\n</main> <!-- .main-content -->\n</div>\n\n<div [hidden]=\"pageName!='news'\"  *ngFor=\"let item of newsDetail | async\">\n  <div class=\"page-head\" style=\"background-image: url('assets/images/page-head-1.jpg');\">\n    <div class=\"container\">\n      <h2 class=\"page-title\">News</h2>\n    </div>\n  </div>\n  \n  <main class=\"main-content\" > \n    <div class=\"fullwidth-block\">\n      <div class=\"container\">\n          <h1 [hidden]=\"!item.eventname\" class=\"section-title\">{{item.eventname}}</h1>\n        <div class=\"row\">\n                        <div class=\"content col-md-6\">\n                          <img src=\"assets/images/{{item.photo}}\" alt=\"\" class=\"founder-img\"></div>\n          <div class=\"content col-md-6\">\n          \n           \n                <div class=\"seremon-detail\">\n                   \n                  <p innerHTML=\"{{item.details}}\"></p> </div>\n           \n  \n            \n          </div>\n        \n        </div>\n      </div>\n                \n    </div>\n  </main> <!-- .main-content -->\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/components/detail/detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetailComponent = /** @class */ (function () {
    function DetailComponent(db, spinnerService, route, router) {
        var _this = this;
        this.db = db;
        this.spinnerService = spinnerService;
        this.route = route;
        this.router = router;
        this.spinnerService.show();
        this.route.params.subscribe(function (params) {
            console.log(params);
            _this.contentId = params['id'];
            _this.pageName = params['pagename'];
        });
        //this.sermons = db.collection('/sermons').valueChanges();
        switch (this.pageName) {
            case 'sermon':
                this.getSermon();
            case 'news':
                this.getNews();
        }
    }
    DetailComponent.prototype.getSermon = function () {
        var _this = this;
        this.sermon = this.db.collection('/sermons', function (ref) { return ref.where('sermonid', '==', _this.contentId); }).valueChanges();
        this.sermon.subscribe(function (result) {
            _this.spinnerService.hide();
            // this.messageService.sendMessage(result[0].clientname);
            console.log(result);
        });
    };
    DetailComponent.prototype.getNews = function () {
        var _this = this;
        this.newsDetail = this.db.collection('/events', function (ref) { return ref.where('newsId', '==', _this.contentId); }).valueChanges();
        this.newsDetail.subscribe(function (result) {
            _this.spinnerService.hide();
            // this.messageService.sendMessage(result[0].clientname);
            console.log(result);
        });
    };
    DetailComponent.prototype.ngOnInit = function () {
    };
    DetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__("../../../../../src/app/components/detail/detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/detail/detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__["Ng4LoadingSpinnerService"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/founders/founders.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".founder-container{\n    border: 1px solid #e5e5e5;\n    border-radius: 10px;\n    padding-top: 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/founders/founders.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-head\" style=\"background-image: url('assets/images/page-head-1.jpg');\">\n  <div class=\"container\">\n    <h2 class=\"page-title\">Founders</h2>\n  </div>\n</div>\n\n<main class=\"main-content\">\n  <div class=\"fullwidth-block\">\n    <div class=\"container\" *ngFor=\"let item of founders | async\">\n                    <h2 class=\"section-title\">Bethel Gospel Assembly Founders</h2>\n      <div class=\"row founder-container\">\n                      <div class=\"content col-md-5 vertical-center\">\n                        <img src=\"assets/images/{{item.photo}}\" alt=\"\" class=\"founder-img\"></div>\n        <div class=\"content col-md-7 vertical-center\">\n        \n        \n            \n              <div class=\"seremon-detail\">\n                <h3 class=\"seremon-title\"><a href=\"#\">{{item.names}}</a></h3>\n                \n                <p>{{item.description}}</p>\n              </div>\n           \n          \n        </div>\n      \n      </div>\n    </div>\n              \n  </div>\n</main> <!-- .main-content -->\n"

/***/ }),

/***/ "../../../../../src/app/components/founders/founders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoundersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng4_loading_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FoundersComponent = /** @class */ (function () {
    function FoundersComponent(db, spinnerService) {
        var _this = this;
        this.spinnerService = spinnerService;
        this.spinnerService.show();
        this.founders = db.collection('/founders').valueChanges();
        this.founders.subscribe(function (result) {
            // this.messageService.sendMessage(result[0].clientname);
            console.log(result);
            _this.spinnerService.hide();
        });
    }
    FoundersComponent.prototype.ngOnInit = function () {
    };
    FoundersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-founders',
            template: __webpack_require__("../../../../../src/app/components/founders/founders.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/founders/founders.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_2_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], FoundersComponent);
    return FoundersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/gallery/gallery.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/gallery/gallery.component.html":
/***/ (function(module, exports) {

module.exports = "\n\t\t<div class=\"page-head\" style=\"background-image: url('assets/images/page-head-1.jpg');\">\n      <div class=\"container\">\n\t\t\t\t\t<h2 class=\"page-title\">Gallery</h2>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<main class=\"main-content\">\n\t\t\t\t<div class=\"fullwidth-block\">\n\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"content col-md-8\">\n\t\t\t\t\t\t\t\t<h2 class=\"section-title\">choose a family to see details</h2>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"family\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"assets/images/family-1.jpg\" alt=\"\" class=\"family-image\">\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"family-name\">Smith</h3>\n\t\t\t\t\t\t\t\t\t\t<small>John, Anna, Patrick, Susan</small>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"family\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"assets/images/family-2.jpg\" alt=\"\" class=\"family-image\">\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"family-name\">Smith</h3>\n\t\t\t\t\t\t\t\t\t\t<small>John, Anna, Patrick, Susan</small>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"family\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"assets/images/family-3.jpg\" alt=\"\" class=\"family-image\">\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"family-name\">Smith</h3>\n\t\t\t\t\t\t\t\t\t\t<small>John, Anna, Patrick, Susan</small>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"family\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"assets/images/family-4.jpg\" alt=\"\" class=\"family-image\">\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"family-name\">Smith</h3>\n\t\t\t\t\t\t\t\t\t\t<small>John, Anna, Patrick, Susan</small>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"family\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"assets/images/family-5.jpg\" alt=\"\" class=\"family-image\">\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"family-name\">Smith</h3>\n\t\t\t\t\t\t\t\t\t\t<small>John, Anna, Patrick, Susan</small>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"family\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"assets/images/family-6.jpg\" alt=\"\" class=\"family-image\">\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"family-name\">Smith</h3>\n\t\t\t\t\t\t\t\t\t\t<small>John, Anna, Patrick, Susan</small>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"family\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"assets/images/family-7.jpg\" alt=\"\" class=\"family-image\">\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"family-name\">Smith</h3>\n\t\t\t\t\t\t\t\t\t\t<small>John, Anna, Patrick, Susan</small>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"family\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"assets/images/family-8.jpg\" alt=\"\" class=\"family-image\">\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"family-name\">Smith</h3>\n\t\t\t\t\t\t\t\t\t\t<small>John, Anna, Patrick, Susan</small>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"family\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"assets/images/family-9.jpg\" alt=\"\" class=\"family-image\">\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"family-name\">Smith</h3>\n\t\t\t\t\t\t\t\t\t\t<small>John, Anna, Patrick, Susan</small>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"sidebar col-md-3 col-md-offset-1\">\n\t\t\t\t\t\t\t\t<app-sidebar-content></app-sidebar-content>\n\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</main> <!-- .main-content -->"

/***/ }),

/***/ "../../../../../src/app/components/gallery/gallery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GalleryComponent = /** @class */ (function () {
    function GalleryComponent() {
    }
    GalleryComponent.prototype.ngOnInit = function () {
    };
    GalleryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__("../../../../../src/app/components/gallery/gallery.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/gallery/gallery.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/main/main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".seremon-list .seremon-meta .pastor{\n    text-transform: none;\n}\n.seremon-list img{\n    width: 50px;\n}\n.seremon-list{\n    height: 250px;\n    overflow: auto;\n}\n.event-list{\n    height: 250px;\n    overflow: auto;\n}\n.news{\n    cursor: pointer;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"hero\">\n    <div class=\"slides\">\n        <li style=\"background-image:url(assets/images/slide-1@2x.jpg)\">\n            <div class=\"container\">\n                <div class=\"slide-content\">\n                    \n                    <h2 class=\"slide-title\">\n                            <span>Bethel </span>\n                            <span>Gospel </span>\n                            <span>Assembly</span>\n                          </h2>\n                    <div class=\"slide-subtitle-cont\"><small class=\"slide-subtitle\">A divine place to worship God</small></div> \n\n                    <a routerLink=\"/dashboard/founders\" class=\"button\">See our families</a>\n                </div>\n            </div>\n        </li>z\n\n       \n    </div>\n</div>\n\n<main class=\"main-content\">\n    <div class=\"fullwidth-block\">\n        <div class=\"container\">\n            <h2 class=\"section-title\">Recent news</h2>\n\n            <div class=\"row\">\n                <div class=\"col-md-3 col-sm-6\"  *ngFor=\"let item of news | async\">\n                    <div [routerLink]=\"['/dashboard/detail',item.newsId,'news']\" class=\"news\">\n                        <div [ngStyle]=\"{'background-image': 'url(assets/images/' + item.photo + ')'}\" class=\"news-img\"></div>\n<!--\t\t\t\t\t\t\t\t\t<image class=\"news-image\" src=\"assets/images/slide-2.jpg\"></image>-->\n                        <h3 class=\"news-title\"><a >{{item.eventname}}</a></h3>\n                        <small class=\"date\"><i class=\"fa fa-calendar\"></i>{{item.date}}</small>\n                    </div>\n                </div>\n               \n            </div> <!-- .row -->\n        </div> <!-- .container -->\n    </div> <!-- section -->\n\n    <div class=\"fullwidth-block\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <h2 class=\"section-title\">Upcoming events</h2>\n                    <ul class=\"event-list\">\n                        <li *ngFor=\"let event of upcomingevents | async\">\n                            <a href=\"#\">\n                                <h3 class=\"event-title\">{{event.title}}</h3>\n                                <span class=\"event-meta\">\n                                    <span><i class=\"fa fa-calendar\"></i>{{event.date}}</span>\n                                    <span><i class=\"fa fa-map-marker\"></i> {{event.location}}</span>\n\n                                </span>\n                            </a>\n                        </li>\n                       \n                    </ul>\n\n                    <div class=\"text-center\">\n                        <a routerLink=\"/dashboard/news\" class=\"button\">See all events</a>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <h2 class=\"section-title\">Latest seremons</h2>\n                    <ul class=\"seremon-list\">\n                        <li *ngFor=\"let sermon of sermons | async\">\n                            <img src=\"{{sermon.photo}}\" alt=\"\">\n                            <div class=\"seremon-detail\">\n                                <h3 class=\"seremon-title\"><a [routerLink]=\"['/dashboard/detail',sermon.sermonid,'sermon']\">{{sermon.title}}</a></h3>\n                                <div class=\"seremon-meta\">\n                                    <div class=\"pastor\"><i class=\"fa fa-user\"></i> {{sermon.author}}</div>\n                                    <div class=\"date\"><i class=\"fa fa-calendar\"></i> {{sermon.date}}</div>\n                                </div>\n                            </div>\n                        </li>\n                       \n                    </ul>\n\n                    <div class=\"text-center\">\n                        <a href=\"#\" class=\"button\">See all seremons</a>\n                    </div>\n                </div>\n            </div> <!-- .row -->\n        </div> <!-- .container -->\n    </div> <!-- section -->\n</main> <!-- .main-content -->\n"

/***/ }),

/***/ "../../../../../src/app/components/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng4_loading_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainComponent = /** @class */ (function () {
    function MainComponent(db, spinnerService) {
        var _this = this;
        this.spinnerService = spinnerService;
        this.images = [944, 1011, 984].map(function (n) { return "https://picsum.photos/id/" + n + "/900/500"; });
        this.spinnerService.show();
        this.upcomingevents = db.collection('/upcomingevents').valueChanges();
        this.news = db.collection('/events').valueChanges();
        this.sermons = db.collection('/sermons').valueChanges();
        this.upcomingevents.subscribe(function (result) {
            // this.messageService.sendMessage(result[0].clientname);
            console.log(result);
        });
        this.news.subscribe(function (result) {
            // this.messageService.sendMessage(result[0].clientname);
            console.log(result);
            _this.spinnerService.hide();
        });
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-main',
            template: __webpack_require__("../../../../../src/app/components/main/main.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_2_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/ministries/ministries.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ministries .seremon-detail{\n    margin-left: 150px;\n}\n.ministries img{\n    width: 120px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/ministries/ministries.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-head\" style=\"background-image: url('assets/images/page-head-1.jpg');\">\n    \n  <div class=\"container\">\n    <h2 class=\"page-title\">Ministries</h2>\n  </div>\n</div>\n\n<main class=\"main-content\">\n  <div class=\"fullwidth-block\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"content col-md-8\">\n          <h2 class=\"section-title\">Bethel Gospel Assembly ministries</h2>\n          <ul class=\"seremon-list large ministries\">\n            <li>\n              <img src=\"assets/images/vadakarachurch.jpg\" alt=\"\">\n              <div class=\"seremon-detail\">\n                <h3 class=\"seremon-title\"><a href=\"#\">Church ministries</a></h3>\n                <!-- <div class=\"seremon-meta\">\n                  <div class=\"pastor\"><i class=\"fa fa-user\"></i> Alan Ray</div>\n                  <div class=\"date\"><i class=\"fa fa-calendar\"></i> 18 mar 2014</div>\n                </div> -->\n                <p>New church building at Vadakara Kottayam section inangurated by Dr Joy P Oommen.</p>\n              </div>\n            </li>\n            <li>\n              <img src=\"assets/images/thumb-2-120.jpg\" alt=\"\">\n              <div class=\"seremon-detail\">\n                <h3 class=\"seremon-title\"><a href=\"#\">Trusting in jesus and god</a></h3>\n                <div class=\"seremon-meta\">\n                  <div class=\"pastor\"><i class=\"fa fa-user\"></i> David Clark</div>\n                  <div class=\"date\"><i class=\"fa fa-calendar\"></i> 18 mar 2014</div>\n                </div>\n                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam dignissimos corporis quidem at nobis impedit perspiciatis, accusantium qui natus amet sapiente voluptate doloribus laboriosam officia deserunt possimus cumque inventore. Ipsum.</p>\n              </div>\n            </li>\n            <li>\n              <img src=\"assets/images/thumb-3-120.jpg\" alt=\"\">\n              <div class=\"seremon-detail\">\n                <h3 class=\"seremon-title\"><a href=\"#\">Love your kids</a></h3>\n                <div class=\"seremon-meta\">\n                  <div class=\"pastor\"><i class=\"fa fa-user\"></i> anthony roberts</div>\n                  <div class=\"date\"><i class=\"fa fa-calendar\"></i> 18 mar 2014</div>\n                </div>\n                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis nisi rem est amet, ducimus, aut, atque error accusantium facilis ab adipisci! Cumque, corrupti sapiente dolores saepe adipisci dignissimos quod unde.</p>\n              </div>\n            </li>\n            <li>\n              <img src=\"assets/images/thumb-2-120.jpg\" alt=\"\">\n              <div class=\"seremon-detail\">\n                <h3 class=\"seremon-title\"><a href=\"#\">Trusting in jesus and god</a></h3>\n                <div class=\"seremon-meta\">\n                  <div class=\"pastor\"><i class=\"fa fa-user\"></i> David Clark</div>\n                  <div class=\"date\"><i class=\"fa fa-calendar\"></i> 18 mar 2014</div>\n                </div>\n                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam dignissimos corporis quidem at nobis impedit perspiciatis, accusantium qui natus amet sapiente voluptate doloribus laboriosam officia deserunt possimus cumque inventore. Ipsum.</p>\n              </div>\n            </li>\n          </ul>\n\n          <h2 class=\"section-title\">Latest seremons</h2>\n          <ul class=\"seremon-list\">\n            <li>\n              <img src=\"assets/images/small-thumb-1.jpg\" alt=\"\">\n              <div class=\"seremon-detail\">\n                <h3 class=\"seremon-title\"><a href=\"#\">I believe in god with all my heart</a></h3>\n                <div class=\"seremon-meta\">\n                  <div class=\"pastor\"><i class=\"fa fa-user\"></i> Alan Ray</div>\n                  <div class=\"date\"><i class=\"fa fa-calendar\"></i> 18 mar 2014</div>\n                </div>\n              </div>\n            </li>\n            <li>\n              <img src=\"assets/images/small-thumb-2.jpg\" alt=\"\">\n              <div class=\"seremon-detail\">\n                <h3 class=\"seremon-title\"><a href=\"#\">Trusting in jesus and god</a></h3>\n                <div class=\"seremon-meta\">\n                  <div class=\"pastor\"><i class=\"fa fa-user\"></i> David Clark</div>\n                  <div class=\"date\"><i class=\"fa fa-calendar\"></i> 18 mar 2014</div>\n                </div>\n              </div>\n            </li>\n            <li>\n              <img src=\"assets/images/small-thumb-3.jpg\" alt=\"\">\n              <div class=\"seremon-detail\">\n                <h3 class=\"seremon-title\"><a href=\"#\">Love your kids</a></h3>\n                <div class=\"seremon-meta\">\n                  <div class=\"pastor\"><i class=\"fa fa-user\"></i> anthony roberts</div>\n                  <div class=\"date\"><i class=\"fa fa-calendar\"></i> 18 mar 2014</div>\n                </div>\n              </div>\n            </li>\n          </ul>\n        </div>\n        <div class=\"sidebar col-md-3 col-md-offset-1\">\n          <app-sidebar-content></app-sidebar-content>\n        </div>\n      </div>\n    </div>\n  </div>\n</main> <!-- .main-content -->"

/***/ }),

/***/ "../../../../../src/app/components/ministries/ministries.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MinistriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MinistriesComponent = /** @class */ (function () {
    function MinistriesComponent() {
    }
    MinistriesComponent.prototype.ngOnInit = function () {
    };
    MinistriesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ministries',
            template: __webpack_require__("../../../../../src/app/components/ministries/ministries.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/ministries/ministries.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MinistriesComponent);
    return MinistriesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/news/news.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/news/news.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-head\" style=\"background-image: url('assets/images/page-head-1.jpg');\">\n\n  <div class=\"container\">\n    <h2 class=\"page-title\">Events</h2>\n  </div>\n</div>\n\n<main class=\"main-content\">\n  <div class=\"fullwidth-block\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"content col-md-8\">\n          <h2 class=\"section-title\">Upcoming Events</h2>\n          <ul class=\"event-list large\">\n            <li>\n              <h3 class=\"event-title\"><a href=\"#\">Christ Soldiers General camp</a></h3>\n              <span class=\"event-meta\">\n                <span><i class=\"fa fa-calendar\"></i>30 mar 2014</span>\n                <span><i class=\"fa fa-map-marker\"></i> Pathanapuram</span>\n              </span>\n              <p>Christ soldiers national camp will be held at Pathanapuram on Onam vacation. Come and be blessed. We will be arraging many spiritual sessions and exciting games for the young peoples of Bethel Gospel Assembly</p>\n              <a href=\"#\" class=\"button\">Join to this event</a>\n              <a href=\"#\" class=\"button secondary\">Ask a question</a>\n            </li>\n            <li>\n              <h3 class=\"event-title\"><a href=\"#\">One day Seminar</a></h3>\n              <span class=\"event-meta\">\n                <span><i class=\"fa fa-calendar\"></i>30 mar 2014</span>\n                <span><i class=\"fa fa-map-marker\"></i> Trivandrum</span>\n              </span>\n              <p>Bethel Gospel Assembly Trivandrum section will be conducting a one day seminar at Section churches. Come and be blessed.</p>\n              <a href=\"#\" class=\"button\">Join to this event</a>\n              <a href=\"#\" class=\"button secondary\">Ask a question</a>\n            </li>\n            <li>\n              <h3 class=\"event-title\"><a href=\"#\">Praying for kids</a></h3>\n              <span class=\"event-meta\">\n                <span><i class=\"fa fa-calendar\"></i>30 mar 2014</span>\n                <span><i class=\"fa fa-map-marker\"></i> true church</span>\n              </span>\n              <p>Christ Soldiers members has planned to pray for the kids on every month first Sunday at their respective churches. </p>\n              <a href=\"#\" class=\"button\">Join to this event</a>\n              <a href=\"#\" class=\"button secondary\">Ask a question</a>\n            </li>\n         \n           \n          </ul>\n        </div>\n        <div class=\"sidebar col-md-3 col-md-offset-1\">\n          <app-sidebar-content></app-sidebar-content>\n        </div>\n       \n      </div>\n    </div>\n  </div>\n</main> <!-- .main-content -->"

/***/ }),

/***/ "../../../../../src/app/components/news/news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewsComponent = /** @class */ (function () {
    function NewsComponent() {
    }
    NewsComponent.prototype.ngOnInit = function () {
    };
    NewsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-news',
            template: __webpack_require__("../../../../../src/app/components/news/news.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/news/news.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/sidebar-content/sidebar-content.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/sidebar-content/sidebar-content.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <!-- <div class=\"widget\">\n    <h3 class=\"widget-title\">Categories</h3>\n    <ul class=\"arrow\">\n      <li><a href=\"#\">Perspiciatis unde</a></li>\n      <li><a href=\"#\">Omnis iste natus</a></li>\n      <li><a href=\"#\">Voluptatem accusantium</a></li>\n      <li><a href=\"#\">Doloremque eaque</a></li>\n      <li><a href=\"#\">Totam rem aperiam</a></li>\n    </ul>\n  </div> -->\n\n  <div class=\"widget\">\n    <h3 class=\"widget-title\">Donations</h3>\n    <p>Bethel Gospel Assembly has been running many orphanages and church plating activies in India. If you wish to participate financially on these ministries make kind donations.</p>\n    <a routerLink=\"/dashboard/contact\" class=\"button\">Make a donation</a>\n  </div>\n\n  <div class=\"widget\">\n    <h3 class=\"widget-title\">Gallery updates</h3>\n\n    <div class=\"galery-thumb\">\n      <a href=\"#\"><img src=\"assets/images/gallery-thumb-1.jpg\" alt=\"\"></a>\n      <a href=\"#\"><img src=\"assets/images/gallery-thumb-2.jpg\" alt=\"\"></a>\n      <a href=\"#\"><img src=\"assets/images/gallery-thumb-3.jpg\" alt=\"\"></a>\n      <a href=\"#\"><img src=\"assets/images/gallery-thumb-4.jpg\" alt=\"\"></a>\n      <a href=\"#\"><img src=\"assets/images/gallery-thumb-5.jpg\" alt=\"\"></a>\n      <a href=\"#\"><img src=\"assets/images/gallery-thumb-6.jpg\" alt=\"\"></a>\n    </div>\n  </div>\n\n  <!-- <div class=\"widget\">\n    <h3 class=\"widget-title\">Text widget </h3>\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum aliquam obcaecati velit, atque necessitatibus molestias ullam tempore itaque quidem sequi ea sed consectetur, eligendi cupiditate saepe! Hic veniam maiores explicabo.</p>\n  </div> -->\n\n"

/***/ }),

/***/ "../../../../../src/app/components/sidebar-content/sidebar-content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarContentComponent = /** @class */ (function () {
    function SidebarContentComponent() {
    }
    SidebarContentComponent.prototype.ngOnInit = function () {
    };
    SidebarContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar-content',
            template: __webpack_require__("../../../../../src/app/components/sidebar-content/sidebar-content.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/sidebar-content/sidebar-content.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarContentComponent);
    return SidebarContentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/videos/videos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".video-list{\n    margin-bottom: 50px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/videos/videos.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-head\" style=\"background-image: url('assets/images/page-head-1.jpg');\">\n\n  <div class=\"container\">\n    <h2 class=\"page-title\">Videos</h2>\n  </div>\n</div>\n\n<main class=\"main-content\">\n  <div class=\"fullwidth-block\">\n    <div class=\"container\">\n    <div class=\"row\">\n      \n    <div class=\"col-lg-6 video-list\" *ngFor=\"let item of videoList | async\">\n      <h2 class=\"section-title text-center\">{{item.title}}</h2>\n      <iframe width=\"100%\" height=\"315\" [src]=\"getSafeUrl(item.videoUrl)\" frameborder=\"0\" allowfullscreen></iframe>\n\n    </div>\n    </div>\n  </div>\n  </div>\n</main>"

/***/ }),

/***/ "../../../../../src/app/components/videos/videos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VideosComponent = /** @class */ (function () {
    function VideosComponent(db, spinnerService, _sanitizer) {
        var _this = this;
        this.spinnerService = spinnerService;
        this._sanitizer = _sanitizer;
        this.spinnerService.show();
        this.videoList = db.collection('/videolist').valueChanges();
        this.videoList.subscribe(function (result) {
            // this.messageService.sendMessage(result[0].clientname);
            console.log(result);
            _this.spinnerService.hide();
        });
    }
    VideosComponent.prototype.getSafeUrl = function (videoUrl) {
        return this._sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
    };
    VideosComponent.prototype.ngOnInit = function () {
    };
    VideosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-videos',
            template: __webpack_require__("../../../../../src/app/components/videos/videos.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/videos/videos.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__["Ng4LoadingSpinnerService"],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]])
    ], VideosComponent);
    return VideosComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDz1vp_9HGOiF_VYZddS5Tva1Xo5t_6bfk",
        authDomain: "bgacontents.firebaseapp.com",
        databaseURL: "https://bgacontents.firebaseio.com",
        projectId: "bgacontents",
        storageBucket: "bgacontents.appspot.com",
        messagingSenderId: "789089847028"
    }
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map