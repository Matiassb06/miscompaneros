"use strict";
(self["webpackChunkmiscompaneros"] = self["webpackChunkmiscompaneros"] || []).push([["main"],{

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home/home.component */ 5047);
/* harmony import */ var _pages_compa_profile_compa_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/compa-profile/compa-profile.component */ 1511);
/* harmony import */ var _pages_add_compa_add_compa_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/add-compa/add-compa.component */ 2787);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);






const routes = [{
  path: '',
  component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}, {
  path: 'compa/:id',
  component: _pages_compa_profile_compa_profile_component__WEBPACK_IMPORTED_MODULE_1__.CompaProfileComponent
}, {
  path: 'agregar',
  component: _pages_add_compa_add_compa_component__WEBPACK_IMPORTED_MODULE_2__.AddCompaComponent
}, {
  path: '**',
  redirectTo: ''
}];
class AppRoutingModule {
  static {
    this.ɵfac = function AppRoutingModule_Factory(t) {
      return new (t || AppRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, {
        scrollPositionRestoration: 'top'
      }), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/components/navbar/navbar.component */ 3083);



class AppComponent {
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 16,
      vars: 0,
      consts: [[1, "site-footer"], [1, "container", "footer-inner"], [1, "footer-links"], ["href", "#"], [1, "footer-copy"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "main");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "footer", 0)(4, "div", 1)(5, "nav", 2)(6, "a", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Acerca de MisCompa\u00F1eros");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Ayuda");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Contacto");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "T\u00E9rminos de Uso");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\u00A92026 MisCompa\u00F1eros");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent],
      styles: ["main[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 56px - 56px);\n}\n\n.site-footer[_ngcontent-%COMP%] {\n  background: var(--footer-bg);\n  padding: 1rem 0;\n  margin-top: auto;\n}\n\n.footer-inner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.6rem;\n}\n\n.footer-links[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 0.25rem 1.5rem;\n}\n.footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.7);\n  text-decoration: none;\n  font-size: 0.8rem;\n  transition: color 0.2s;\n}\n.footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  text-decoration: underline;\n}\n\n.footer-copy[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.45);\n  font-size: 0.75rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUNBQUE7QUFDRjs7QUFFQTtFQUNFLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQ0U7RUFDRSwrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQUNKO0FBQ0k7RUFBVSxXQUFBO0VBQWEsMEJBQUE7QUFHM0I7O0FBQ0E7RUFDRSxnQ0FBQTtFQUNBLGtCQUFBO0FBRUYiLCJzb3VyY2VzQ29udGVudCI6WyJtYWluIHtcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDU2cHggLSA1NnB4KTtcbn1cblxuLnNpdGUtZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tZm9vdGVyLWJnKTtcbiAgcGFkZGluZzogMXJlbSAwO1xuICBtYXJnaW4tdG9wOiBhdXRvO1xufVxuXG4uZm9vdGVyLWlubmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAuNnJlbTtcbn1cblxuLmZvb3Rlci1saW5rcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogLjI1cmVtIDEuNXJlbTtcblxuICBhIHtcbiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuNyk7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtc2l6ZTogLjhyZW07XG4gICAgdHJhbnNpdGlvbjogY29sb3IgLjJzO1xuXG4gICAgJjpob3ZlciB7IGNvbG9yOiAjZmZmOyB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgfVxuICB9XG59XG5cbi5mb290ZXItY29weSB7XG4gIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC40NSk7XG4gIGZvbnQtc2l6ZTogLjc1cmVtO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home/home.component */ 5047);
/* harmony import */ var _pages_compa_profile_compa_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/compa-profile/compa-profile.component */ 1511);
/* harmony import */ var _pages_rating_form_rating_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/rating-form/rating-form.component */ 5311);
/* harmony import */ var _pages_add_compa_add_compa_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/add-compa/add-compa.component */ 2787);
/* harmony import */ var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/components/navbar/navbar.component */ 3083);
/* harmony import */ var _shared_components_star_rating_star_rating_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/components/star-rating/star-rating.component */ 3829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7580);





// Pages




// Shared



class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(t) {
      return new (t || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent, _pages_compa_profile_compa_profile_component__WEBPACK_IMPORTED_MODULE_3__.CompaProfileComponent, _pages_rating_form_rating_form_component__WEBPACK_IMPORTED_MODULE_4__.RatingFormComponent, _pages_add_compa_add_compa_component__WEBPACK_IMPORTED_MODULE_5__.AddCompaComponent, _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__.NavbarComponent, _shared_components_star_rating_star_rating_component__WEBPACK_IMPORTED_MODULE_7__.StarRatingComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule]
  });
})();

/***/ }),

/***/ 1571:
/*!*************************************************!*\
  !*** ./src/app/core/services/compas.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CompasService: () => (/* binding */ CompasService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);



class CompasService {
  constructor(http) {
    this.http = http;
    this.api = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
  }
  search(q) {
    return this.http.get(`${this.api}/compas/search`, {
      params: {
        q
      }
    });
  }
  getById(id) {
    return this.http.get(`${this.api}/compas/${id}`);
  }
  getUniversidades() {
    return this.http.get(`${this.api}/compas/universidades`);
  }
  getByUniversidad(nombre) {
    return this.http.get(`${this.api}/compas/universidad/${encodeURIComponent(nombre)}`);
  }
  create(data) {
    return this.http.post(`${this.api}/compas`, data);
  }
  static {
    this.ɵfac = function CompasService_Factory(t) {
      return new (t || CompasService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: CompasService,
      factory: CompasService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 2097:
/*!**************************************************!*\
  !*** ./src/app/core/services/resenas.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResenasService: () => (/* binding */ ResenasService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);



class ResenasService {
  constructor(http) {
    this.http = http;
    this.api = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
  }
  getByCompa(compaId) {
    return this.http.get(`${this.api}/resenas/compa/${compaId}`);
  }
  create(compaId, data) {
    return this.http.post(`${this.api}/resenas/compa/${compaId}`, data);
  }
  static {
    this.ɵfac = function ResenasService_Factory(t) {
      return new (t || ResenasService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ResenasService,
      factory: ResenasService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 2787:
/*!********************************************************!*\
  !*** ./src/app/pages/add-compa/add-compa.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddCompaComponent: () => (/* binding */ AddCompaComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_compas_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/compas.service */ 1571);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);






function AddCompaComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.error);
  }
}
function AddCompaComponent_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " El nombre es obligatorio. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AddCompaComponent_span_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " El apellido es obligatorio. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class AddCompaComponent {
  constructor(fb, compasService, router) {
    this.fb = fb;
    this.compasService = compasService;
    this.form = this.fb.group({
      nombre: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(80)]],
      apellido: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(80)]],
      universidad: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(150)],
      carrera: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(150)],
      ciclo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(50)],
      descripcion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(300)]
    });
    this.submitting = false;
    this.error = '';
    this.router = router;
  }
  submit() {
    if (this.form.invalid || this.submitting) return;
    this.submitting = true;
    this.error = '';
    const v = this.form.value;
    this.compasService.create({
      nombre: v.nombre,
      apellido: v.apellido,
      universidad: v.universidad || undefined,
      carrera: v.carrera || undefined,
      ciclo: v.ciclo || undefined,
      descripcion: v.descripcion || undefined
    }).subscribe({
      next: res => this.router.navigate(['/compa', res.id]),
      error: err => {
        this.error = err.error?.error ?? 'Error al agregar. Intenta de nuevo.';
        this.submitting = false;
      }
    });
  }
  static {
    this.ɵfac = function AddCompaComponent_Factory(t) {
      return new (t || AddCompaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_compas_service__WEBPACK_IMPORTED_MODULE_0__.CompasService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AddCompaComponent,
      selectors: [["app-add-compa"]],
      decls: 47,
      vars: 7,
      consts: [[1, "page-wrap"], [1, "form-card", "card"], [1, "form-header"], [1, "btn-back", 3, "click"], [1, "form-sub"], ["class", "alert alert-error", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "form-row"], [1, "form-group"], [1, "required"], ["type", "text", "formControlName", "nombre", "placeholder", "Ej: Carlos"], ["class", "error-msg", 4, "ngIf"], ["type", "text", "formControlName", "apellido", "placeholder", "Ej: Garc\u00EDa"], ["type", "text", "formControlName", "universidad", "placeholder", "Ej: Universidad Nacional Mayor de San Marcos"], ["type", "text", "formControlName", "carrera", "placeholder", "Ej: Ingenier\u00EDa de Sistemas"], ["type", "text", "formControlName", "ciclo", "placeholder", "Ej: 3er ciclo"], ["formControlName", "descripcion", "rows", "3", "placeholder", "Describe brevemente a este compa\u00F1ero..."], [1, "char-count"], ["type", "submit", 1, "btn", "btn-primary", "full", 3, "disabled"], [1, "alert", "alert-error"], [1, "error-msg"]],
      template: function AddCompaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddCompaComponent_Template_button_click_3_listener() {
            return ctx.router.navigate(["/"]);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u2190 Volver");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Agregar compa\u00F1ero");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Completa los datos del compa\u00F1ero que deseas registrar.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, AddCompaComponent_div_9_Template, 2, 1, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "form", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AddCompaComponent_Template_form_ngSubmit_10_listener() {
            return ctx.submit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7)(12, "div", 8)(13, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Nombre ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, AddCompaComponent_span_18_Template, 2, 0, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 8)(20, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Apellido ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, AddCompaComponent_span_25_Template, 2, 0, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 8)(27, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Universidad");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 7)(31, "div", 8)(32, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Carrera");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "input", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 8)(36, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Ciclo");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 8)(40, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Descripci\u00F3n (opcional)");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "textarea", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          let tmp_4_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.error);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.controls["nombre"].invalid && ctx.form.controls["nombre"].touched);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.controls["apellido"].invalid && ctx.form.controls["apellido"].touched);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", (tmp_4_0 = ctx.form.value.descripcion == null ? null : ctx.form.value.descripcion.length) !== null && tmp_4_0 !== undefined ? tmp_4_0 : 0, " / 300");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.form.invalid || ctx.submitting);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.submitting ? "Guardando..." : "Agregar compa\u00F1ero", " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
      styles: [".page-wrap[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 56px - 56px);\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  padding: 2rem 1rem;\n  background: var(--background);\n}\n\n.form-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 600px;\n}\n\n.form-header[_ngcontent-%COMP%] {\n  margin-bottom: 1.75rem;\n}\n.form-header[_ngcontent-%COMP%]   .btn-back[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--primary);\n  font-size: 0.875rem;\n  font-weight: 600;\n  font-family: inherit;\n  cursor: pointer;\n  padding: 0;\n  margin-bottom: 0.75rem;\n  display: block;\n}\n.form-header[_ngcontent-%COMP%]   .btn-back[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.form-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin-bottom: 0.25rem;\n}\n.form-header[_ngcontent-%COMP%]   .form-sub[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 0.9rem;\n}\n\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n@media (max-width: 480px) {\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n.required[_ngcontent-%COMP%] {\n  color: #EF4444;\n}\n\n.char-count[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-secondary);\n  display: block;\n  text-align: right;\n  margin-top: 0.25rem;\n}\n\n.btn.full[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvYWRkLWNvbXBhL2FkZC1jb21wYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFDQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0FBQ0Y7QUFDRTtFQUNFLGdCQUFBO0VBQWtCLFlBQUE7RUFBYyxxQkFBQTtFQUNoQyxtQkFBQTtFQUFvQixnQkFBQTtFQUFrQixvQkFBQTtFQUN0QyxlQUFBO0VBQWlCLFVBQUE7RUFBWSxzQkFBQTtFQUF1QixjQUFBO0FBUXhEO0FBUEk7RUFBVSwwQkFBQTtBQVVkO0FBUEU7RUFBSyxpQkFBQTtFQUFtQixnQkFBQTtFQUFrQixzQkFBQTtBQVk1QztBQVhFO0VBQVksNEJBQUE7RUFBOEIsaUJBQUE7QUFlNUM7O0FBWkE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0FBZUY7QUFiRTtFQUxGO0lBSzhCLDBCQUFBO0VBaUI1QjtBQUNGOztBQWZBO0VBQVksY0FBQTtBQW1CWjs7QUFqQkE7RUFDRSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFvQkY7O0FBakJBO0VBQVksV0FBQTtFQUFhLGtCQUFBO0FBc0J6QiIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLXdyYXAge1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTZweCAtIDU2cHgpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDJyZW0gMXJlbTtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7XG59XG5cbi5mb3JtLWNhcmQge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbn1cblxuLmZvcm0taGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMS43NXJlbTtcblxuICAuYnRuLWJhY2sge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7IGJvcmRlcjogbm9uZTsgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgIGZvbnQtc2l6ZTogLjg3NXJlbTsgZm9udC13ZWlnaHQ6IDYwMDsgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgY3Vyc29yOiBwb2ludGVyOyBwYWRkaW5nOiAwOyBtYXJnaW4tYm90dG9tOiAuNzVyZW07IGRpc3BsYXk6IGJsb2NrO1xuICAgICY6aG92ZXIgeyB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgfVxuICB9XG5cbiAgaDIgeyBmb250LXNpemU6IDEuNXJlbTsgZm9udC13ZWlnaHQ6IDcwMDsgbWFyZ2luLWJvdHRvbTogLjI1cmVtOyB9XG4gIC5mb3JtLXN1YiB7IGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7IGZvbnQtc2l6ZTogLjlyZW07IH1cbn1cblxuLmZvcm0tcm93IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBnYXA6IDFyZW07XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyB9XG59XG5cbi5yZXF1aXJlZCB7IGNvbG9yOiAjRUY0NDQ0OyB9XG5cbi5jaGFyLWNvdW50IHtcbiAgZm9udC1zaXplOiAuNzVyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luLXRvcDogLjI1cmVtO1xufVxuXG4uYnRuLmZ1bGwgeyB3aWR0aDogMTAwJTsgbWFyZ2luLXRvcDogLjVyZW07IH1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 1511:
/*!****************************************************************!*\
  !*** ./src/app/pages/compa-profile/compa-profile.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CompaProfileComponent: () => (/* binding */ CompaProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _core_services_compas_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/compas.service */ 1571);
/* harmony import */ var _core_services_resenas_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/resenas.service */ 2097);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _rating_form_rating_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rating-form/rating-form.component */ 5311);
/* harmony import */ var _shared_components_star_rating_star_rating_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/star-rating/star-rating.component */ 3829);







function CompaProfileComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function CompaProfileComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.error);
  }
}
function CompaProfileComponent_ng_container_3_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 30);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r3.compa.foto_url, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"])("alt", ctx_r3.compa.nombre);
  }
}
function CompaProfileComponent_ng_container_3_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx_r4.compa.nombre[0], "", ctx_r4.compa.apellido[0], "");
  }
}
function CompaProfileComponent_ng_container_3_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("\uD83C\uDFDB\uFE0F ", ctx_r5.compa.universidad, "");
  }
}
function CompaProfileComponent_ng_container_3_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("\uD83D\uDCDA ", ctx_r6.compa.carrera, "");
  }
}
function CompaProfileComponent_ng_container_3_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("\uD83D\uDCC5 ", ctx_r7.compa.ciclo, "");
  }
}
function CompaProfileComponent_ng_container_3_p_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r8.compa.descripcion);
  }
}
function CompaProfileComponent_ng_container_3_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, ctx_r9.compa.promedio, "1.1-1"), " ");
  }
}
function CompaProfileComponent_ng_container_3_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Sin calificar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function CompaProfileComponent_ng_container_3_app_rating_form_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-rating-form", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("resenaCreada", function CompaProfileComponent_ng_container_3_app_rating_form_24_Template_app_rating_form_resenaCreada_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r15.onResenaCreada());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("compaId", ctx_r12.compa.id);
  }
}
function CompaProfileComponent_ng_container_3_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 38)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "\uD83D\uDCAC");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "A\u00FAn no hay rese\u00F1as. \u00A1S\u00E9 el primero en calificar!");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function CompaProfileComponent_ng_container_3_div_31_p_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const r_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](r_r17.comentario);
  }
}
function CompaProfileComponent_ng_container_3_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 39)(1, "div", 40)(2, "div", 41)(3, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "A");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "An\u00F3nimo");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "app-star-rating", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, CompaProfileComponent_ng_container_3_div_31_p_12_Template, 2, 1, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const r_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", r_r17.puntuacion)("readonly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](11, 4, r_r17.created_at, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", r_r17.comentario);
  }
}
function CompaProfileComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 7)(2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, CompaProfileComponent_ng_container_3_img_3_Template, 1, 2, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, CompaProfileComponent_ng_container_3_span_4_Template, 2, 2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 10)(6, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, CompaProfileComponent_ng_container_3_span_9_Template, 2, 1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, CompaProfileComponent_ng_container_3_span_10_Template, 2, 1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, CompaProfileComponent_ng_container_3_span_11_Template, 2, 1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, CompaProfileComponent_ng_container_3_p_12_Template, 2, 1, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "app-star-rating", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, CompaProfileComponent_ng_container_3_span_16_Template, 3, 4, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, CompaProfileComponent_ng_container_3_ng_template_17_Template, 2, 0, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 22)(22, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CompaProfileComponent_ng_container_3_Template_button_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r20.showForm = !ctx_r20.showForm);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, CompaProfileComponent_ng_container_3_app_rating_form_24_Template, 1, 1, "app-rating-form", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 25)(26, "h2", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, " Rese\u00F1as ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, CompaProfileComponent_ng_container_3_div_30_Template, 5, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, CompaProfileComponent_ng_container_3_div_31_Template, 13, 7, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](18);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    let tmp_8_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("background", "hsl(" + ctx_r2.compa.id * 57 + ",55%,55%)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.compa.foto_url);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r2.compa.foto_url);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx_r2.compa.nombre, " ", ctx_r2.compa.apellido, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.compa.universidad);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.compa.carrera);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.compa.ciclo);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.compa.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", (tmp_8_0 = ctx_r2.compa.promedio) !== null && tmp_8_0 !== undefined ? tmp_8_0 : 0)("readonly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.compa.promedio)("ngIfElse", _r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx_r2.compa.total_calificaciones, " rese\u00F1a", ctx_r2.compa.total_calificaciones !== 1 ? "s" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r2.showForm ? "Cancelar" : "\u270F\uFE0F Calificar", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.showForm && ctx_r2.compa);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.resenas.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.resenas.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.resenas);
  }
}
class CompaProfileComponent {
  constructor(route, compasService, resenasService) {
    this.route = route;
    this.compasService = compasService;
    this.resenasService = resenasService;
    this.compa = null;
    this.resenas = [];
    this.loading = true;
    this.error = '';
    this.showForm = false;
  }
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadCompa(id);
    this.loadResenas(id);
  }
  loadCompa(id) {
    this.compasService.getById(id).subscribe({
      next: c => {
        this.compa = c;
        this.loading = false;
      },
      error: () => {
        this.error = 'No se pudo cargar el perfil.';
        this.loading = false;
      }
    });
  }
  loadResenas(id) {
    this.resenasService.getByCompa(id).subscribe({
      next: r => this.resenas = r,
      error: () => {}
    });
  }
  onResenaCreada() {
    this.showForm = false;
    if (this.compa) {
      this.loadCompa(this.compa.id);
      this.loadResenas(this.compa.id);
    }
  }
  static {
    this.ɵfac = function CompaProfileComponent_Factory(t) {
      return new (t || CompaProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_compas_service__WEBPACK_IMPORTED_MODULE_0__.CompasService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_resenas_service__WEBPACK_IMPORTED_MODULE_1__.ResenasService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: CompaProfileComponent,
      selectors: [["app-compa-profile"]],
      decls: 4,
      vars: 3,
      consts: [[1, "container", "profile-page"], ["class", "loading-wrap", 4, "ngIf"], ["class", "alert alert-error", 4, "ngIf"], [4, "ngIf"], [1, "loading-wrap"], [1, "spinner"], [1, "alert", "alert-error"], [1, "profile-header", "card"], [1, "profile-avatar"], [3, "src", "alt", 4, "ngIf"], [1, "profile-info"], [1, "profile-tags"], ["class", "tag tag-univ", 4, "ngIf"], ["class", "tag tag-carrera", 4, "ngIf"], ["class", "tag tag-ciclo", 4, "ngIf"], ["class", "descripcion", 4, "ngIf"], [1, "rating-summary"], ["size", "lg", 3, "value", "readonly"], [1, "rating-numbers"], ["class", "rating-score", 4, "ngIf", "ngIfElse"], ["sinProm", ""], [1, "rating-total"], [1, "profile-actions"], [1, "btn", "btn-primary", 3, "click"], [3, "compaId", "resenaCreada", 4, "ngIf"], [1, "resenas-section"], [1, "section-title"], [1, "badge"], ["class", "empty-resenas", 4, "ngIf"], ["class", "resena-card card", 4, "ngFor", "ngForOf"], [3, "src", "alt"], [1, "tag", "tag-univ"], [1, "tag", "tag-carrera"], [1, "tag", "tag-ciclo"], [1, "descripcion"], [1, "rating-score"], [1, "sin-calif"], [3, "compaId", "resenaCreada"], [1, "empty-resenas"], [1, "resena-card", "card"], [1, "resena-header"], [1, "resena-user"], [1, "user-avatar"], [1, "user-name"], [1, "resena-meta"], ["size", "sm", 3, "value", "readonly"], [1, "resena-date"], ["class", "resena-texto", 4, "ngIf"], [1, "resena-texto"]],
      template: function CompaProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CompaProfileComponent_div_1_Template, 2, 0, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, CompaProfileComponent_div_2_Template, 2, 1, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, CompaProfileComponent_ng_container_3_Template, 32, 21, "ng-container", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.error);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.compa && !ctx.loading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _rating_form_rating_form_component__WEBPACK_IMPORTED_MODULE_2__.RatingFormComponent, _shared_components_star_rating_star_rating_component__WEBPACK_IMPORTED_MODULE_3__.StarRatingComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe],
      styles: ["@charset \"UTF-8\";\n.profile-page[_ngcontent-%COMP%] {\n  padding-top: 2rem;\n  padding-bottom: 3rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n\n.profile-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1.5rem;\n  flex-wrap: wrap;\n}\n\n.profile-avatar[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 90px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem;\n  font-weight: 700;\n  color: #fff;\n  flex-shrink: 0;\n  overflow: hidden;\n}\n.profile-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.profile-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n}\n.profile-info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 700;\n  margin-bottom: 0.4rem;\n}\n.profile-info[_ngcontent-%COMP%]   .descripcion[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 0.95rem;\n  margin-bottom: 0.75rem;\n  margin-top: 0.5rem;\n}\n\n.profile-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.4rem;\n  margin-bottom: 0.5rem;\n}\n\n.tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.3rem;\n  font-size: 0.78rem;\n  padding: 0.25rem 0.65rem;\n  border-radius: 20px;\n  font-weight: 500;\n}\n.tag-univ[_ngcontent-%COMP%] {\n  background: #e8eeff;\n  color: var(--primary);\n}\n.tag-carrera[_ngcontent-%COMP%] {\n  background: #fef3e2;\n  color: #b45309;\n}\n.tag-ciclo[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #166534;\n}\n\n.rating-summary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n\n.rating-numbers[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.2;\n}\n.rating-numbers[_ngcontent-%COMP%]   .rating-score[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: var(--primary);\n}\n.rating-numbers[_ngcontent-%COMP%]   .sin-calif[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: var(--text-secondary);\n  font-size: 0.9rem;\n}\n.rating-numbers[_ngcontent-%COMP%]   .rating-total[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: var(--text-secondary);\n}\n\n.profile-actions[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  margin-left: auto;\n}\n\n\n\n.section-title[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 600;\n  margin-bottom: 1rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.section-title[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: #fff;\n  font-size: 0.75rem;\n  padding: 0.15rem 0.5rem;\n  border-radius: 20px;\n}\n\n.empty-resenas[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2.5rem;\n  color: var(--text-secondary);\n  background: #fff;\n  border-radius: var(--radius);\n  box-shadow: var(--shadow);\n}\n.empty-resenas[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  display: block;\n  margin-bottom: 0.5rem;\n}\n\n.resena-card[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\n.resena-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.6rem;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n\n.resena-user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n}\n\n.user-avatar[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  background: var(--primary);\n  color: #fff;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.875rem;\n  font-weight: 600;\n}\n\n.user-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 0.95rem;\n}\n\n.resena-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n\n.resena-date[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-secondary);\n}\n\n.resena-texto[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  font-size: 0.95rem;\n  line-height: 1.55;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvY29tcGEtcHJvZmlsZS9jb21wYS1wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FBRUY7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUVGOztBQUNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUVGO0FBQUU7RUFBTSxXQUFBO0VBQWEsWUFBQTtFQUFjLGlCQUFBO0FBS25DOztBQUZBO0VBQ0UsT0FBQTtFQUNBLGdCQUFBO0FBS0Y7QUFIRTtFQUFLLGlCQUFBO0VBQW1CLGdCQUFBO0VBQWtCLHFCQUFBO0FBUTVDO0FBTkU7RUFDRSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQVFKOztBQUpBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUFPRjs7QUFKQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFPRjtBQUxFO0VBQVcsbUJBQUE7RUFBcUIscUJBQUE7QUFTbEM7QUFSRTtFQUFXLG1CQUFBO0VBQXFCLGNBQUE7QUFZbEM7QUFYRTtFQUFXLG1CQUFBO0VBQXFCLGNBQUE7QUFlbEM7O0FBWkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQWVGOztBQVpBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFlRjtBQWJFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFlSjtBQWJFO0VBQ0Usa0JBQUE7RUFDQSw0QkFBQTtFQUNBLGlCQUFBO0FBZUo7QUFiRTtFQUNFLGtCQUFBO0VBQ0EsNEJBQUE7QUFlSjs7QUFYQTtFQUNFLHNCQUFBO0VBQ0EsaUJBQUE7QUFjRjs7QUFYQSxZQUFBO0FBQ0E7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBY0Y7QUFaRTtFQUNFLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQWNKOztBQVZBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7QUFhRjtBQVhFO0VBQU8saUJBQUE7RUFBbUIsY0FBQTtFQUFnQixxQkFBQTtBQWdCNUM7O0FBYkE7RUFDRSxtQkFBQTtBQWdCRjs7QUFiQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQWdCRjs7QUFiQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFnQkY7O0FBYkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBZ0JGOztBQWJBO0VBQWMsZ0JBQUE7RUFBa0Isa0JBQUE7QUFrQmhDOztBQWhCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFtQkY7O0FBaEJBO0VBQ0UsaUJBQUE7RUFDQSw0QkFBQTtBQW1CRjs7QUFoQkE7RUFDRSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFtQkYiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS1wYWdlIHtcbiAgcGFkZGluZy10b3A6IDJyZW07XG4gIHBhZGRpbmctYm90dG9tOiAzcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEuNXJlbTtcbn1cblxuLnByb2ZpbGUtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGdhcDogMS41cmVtO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5wcm9maWxlLWF2YXRhciB7XG4gIHdpZHRoOiA5MHB4O1xuICBoZWlnaHQ6IDkwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICNmZmY7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIGltZyB7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7IG9iamVjdC1maXQ6IGNvdmVyOyB9XG59XG5cbi5wcm9maWxlLWluZm8ge1xuICBmbGV4OiAxO1xuICBtaW4td2lkdGg6IDIwMHB4O1xuXG4gIGgxIHsgZm9udC1zaXplOiAxLjZyZW07IGZvbnQtd2VpZ2h0OiA3MDA7IG1hcmdpbi1ib3R0b206IC40cmVtOyB9XG5cbiAgLmRlc2NyaXBjaW9uIHtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICAgIGZvbnQtc2l6ZTogLjk1cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IC43NXJlbTtcbiAgICBtYXJnaW4tdG9wOiAuNXJlbTtcbiAgfVxufVxuXG4ucHJvZmlsZS10YWdzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IC40cmVtO1xuICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbn1cblxuLnRhZyB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IC4zcmVtO1xuICBmb250LXNpemU6IC43OHJlbTtcbiAgcGFkZGluZzogLjI1cmVtIC42NXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcblxuICAmLXVuaXYgICB7IGJhY2tncm91bmQ6ICNlOGVlZmY7IGNvbG9yOiB2YXIoLS1wcmltYXJ5KTsgfVxuICAmLWNhcnJlcmF7IGJhY2tncm91bmQ6ICNmZWYzZTI7IGNvbG9yOiAjYjQ1MzA5OyB9XG4gICYtY2ljbG8gIHsgYmFja2dyb3VuZDogI2YwZmRmNDsgY29sb3I6ICMxNjY1MzQ7IH1cbn1cblxuLnJhdGluZy1zdW1tYXJ5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5yYXRpbmctbnVtYmVycyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG5cbiAgLnJhdGluZy1zY29yZSB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICB9XG4gIC5zaW4tY2FsaWYge1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICAgIGZvbnQtc2l6ZTogLjlyZW07XG4gIH1cbiAgLnJhdGluZy10b3RhbCB7XG4gICAgZm9udC1zaXplOiAuODJyZW07XG4gICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgfVxufVxuXG4ucHJvZmlsZS1hY3Rpb25zIHtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi8qIFJlc2XDg8KxYXMgKi9cbi5zZWN0aW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogLjVyZW07XG5cbiAgLmJhZGdlIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IC43NXJlbTtcbiAgICBwYWRkaW5nOiAuMTVyZW0gLjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgfVxufVxuXG4uZW1wdHktcmVzZW5hcyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMi41cmVtO1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMpO1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xuXG4gIHNwYW4geyBmb250LXNpemU6IDIuNXJlbTsgZGlzcGxheTogYmxvY2s7IG1hcmdpbi1ib3R0b206IC41cmVtOyB9XG59XG5cbi5yZXNlbmEtY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5yZXNlbmEtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAuNnJlbTtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IC41cmVtO1xufVxuXG4ucmVzZW5hLXVzZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IC42cmVtO1xufVxuXG4udXNlci1hdmF0YXIge1xuICB3aWR0aDogMzRweDtcbiAgaGVpZ2h0OiAzNHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogLjg3NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnVzZXItbmFtZSAgeyBmb250LXdlaWdodDogNTAwOyBmb250LXNpemU6IC45NXJlbTsgfVxuXG4ucmVzZW5hLW1ldGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IC43NXJlbTtcbn1cblxuLnJlc2VuYS1kYXRlIHtcbiAgZm9udC1zaXplOiAuOHJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbn1cblxuLnJlc2VuYS10ZXh0byB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICBmb250LXNpemU6IC45NXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTU7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 5047:
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 2575);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 1817);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 6647);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 9400);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_compas_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/compas.service */ 1571);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _shared_components_star_rating_star_rating_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/star-rating/star-rating.component */ 3829);









function HomeComponent_div_11_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 10);
  }
}
function HomeComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, HomeComponent_div_11_span_2_Template, 1, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r0.searchCtrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.loading);
  }
}
function HomeComponent_div_12_ng_container_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function HomeComponent_div_12_ng_container_1_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_div_12_ng_container_1_div_7_div_1_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);
      const u_r10 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r11.selectUniversidad(u_r10.universidad));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 24)(4, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\u203A");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const u_r10 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r9.initials(u_r10.universidad));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](u_r10.universidad);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", u_r10.total_compas, " compa\u00F1ero", u_r10.total_compas !== 1 ? "s" : "", "");
  }
}
function HomeComponent_div_12_ng_container_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HomeComponent_div_12_ng_container_1_div_7_div_1_Template, 10, 4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r7.universidades);
  }
}
function HomeComponent_div_12_ng_container_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28)(1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\uD83C\uDFDB\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "A\u00FAn no hay universidades registradas.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Agregar el primer compa\u00F1ero");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function HomeComponent_div_12_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 13)(2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Universidades registradas");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "+ Agregar compa\u00F1ero");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, HomeComponent_div_12_ng_container_1_div_6_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, HomeComponent_div_12_ng_container_1_div_7_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, HomeComponent_div_12_ng_container_1_div_8_Template, 7, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.loadingUnivs);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r4.loadingUnivs && ctx_r4.universidades.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r4.loadingUnivs && ctx_r4.universidades.length === 0);
  }
}
function HomeComponent_div_12_ng_container_2_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function HomeComponent_div_12_ng_container_2_div_7_div_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 44);
  }
  if (rf & 2) {
    const c_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", c_r17.foto_url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", c_r17.nombre);
  }
}
function HomeComponent_div_12_ng_container_2_div_7_div_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", c_r17.nombre[0], "", c_r17.apellido[0], "");
  }
}
function HomeComponent_div_12_ng_container_2_div_7_div_1_p_7_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" \u00B7 ", c_r17.ciclo, "");
  }
}
function HomeComponent_div_12_ng_container_2_div_7_div_1_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, HomeComponent_div_12_ng_container_2_div_7_div_1_p_7_span_2_Template, 2, 1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](c_r17.carrera);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", c_r17.ciclo);
  }
}
function HomeComponent_div_12_ng_container_2_div_7_div_1_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, c_r17.promedio, "1.1-1"), " / 5");
  }
}
function HomeComponent_div_12_ng_container_2_div_7_div_1_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Sin calificar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function HomeComponent_div_12_ng_container_2_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_div_12_ng_container_2_div_7_div_1_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r31);
      const c_r17 = restoredCtx.$implicit;
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r30.go(c_r17.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, HomeComponent_div_12_ng_container_2_div_7_div_1_img_2_Template, 1, 2, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, HomeComponent_div_12_ng_container_2_div_7_div_1_span_3_Template, 2, 2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 38)(5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, HomeComponent_div_12_ng_container_2_div_7_div_1_p_7_Template, 3, 2, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "app-star-rating", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, HomeComponent_div_12_ng_container_2_div_7_div_1_span_10_Template, 3, 4, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, HomeComponent_div_12_ng_container_2_div_7_div_1_ng_template_11_Template, 2, 0, "ng-template", null, 43, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "\u203A");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const c_r17 = ctx.$implicit;
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](12);
    let tmp_5_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background", "hsl(" + c_r17.id * 57 + ",55%,55%)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", c_r17.foto_url);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !c_r17.foto_url);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", c_r17.nombre, " ", c_r17.apellido, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", c_r17.carrera);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", (tmp_5_0 = c_r17.promedio) !== null && tmp_5_0 !== undefined ? tmp_5_0 : 0)("readonly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", c_r17.promedio)("ngIfElse", _r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" \u00A0\u00B7\u00A0 ", c_r17.total_calificaciones, " rese\u00F1a", c_r17.total_calificaciones !== 1 ? "s" : "", " ");
  }
}
function HomeComponent_div_12_ng_container_2_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HomeComponent_div_12_ng_container_2_div_7_div_1_Template, 16, 13, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r14.compasByUniv);
  }
}
function HomeComponent_div_12_ng_container_2_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28)(1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\uD83D\uDD0E");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "No hay compa\u00F1eros registrados en esta universidad.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function HomeComponent_div_12_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 13)(2, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_div_12_ng_container_2_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r33);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r32.backToUnivs());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u2190 Volver");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, HomeComponent_div_12_ng_container_2_div_6_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, HomeComponent_div_12_ng_container_2_div_7_Template, 2, 1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, HomeComponent_div_12_ng_container_2_div_8_Template, 5, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r5.selectedUniv);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.loadingByUniv);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r5.loadingByUniv && ctx_r5.compasByUniv.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r5.loadingByUniv && ctx_r5.compasByUniv.length === 0);
  }
}
function HomeComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HomeComponent_div_12_ng_container_1_Template, 9, 3, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, HomeComponent_div_12_ng_container_2_Template, 9, 4, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r1.selectedUniv);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.selectedUniv);
  }
}
function HomeComponent_div_13_h2_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Busca a tu compa\u00F1ero");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function HomeComponent_div_13_h2_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r35.results.length, " resultado", ctx_r35.results.length !== 1 ? "s" : "", "");
  }
}
function HomeComponent_div_13_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r36.error);
  }
}
function HomeComponent_div_13_div_7_div_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 44);
  }
  if (rf & 2) {
    const c_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", c_r41.foto_url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", c_r41.nombre);
  }
}
function HomeComponent_div_13_div_7_div_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", c_r41.nombre[0], "", c_r41.apellido[0], "");
  }
}
function HomeComponent_div_13_div_7_div_1_p_7_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" \u00B7 ", c_r41.carrera, "");
  }
}
function HomeComponent_div_13_div_7_div_1_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, HomeComponent_div_13_div_7_div_1_p_7_span_2_Template, 2, 1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](c_r41.universidad);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", c_r41.carrera);
  }
}
function HomeComponent_div_13_div_7_div_1_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, c_r41.promedio, "1.1-1"), " / 5");
  }
}
function HomeComponent_div_13_div_7_div_1_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Sin calificar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function HomeComponent_div_13_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_div_13_div_7_div_1_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r55);
      const c_r41 = restoredCtx.$implicit;
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r54.go(c_r41.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, HomeComponent_div_13_div_7_div_1_img_2_Template, 1, 2, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, HomeComponent_div_13_div_7_div_1_span_3_Template, 2, 2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 38)(5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, HomeComponent_div_13_div_7_div_1_p_7_Template, 3, 2, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "app-star-rating", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, HomeComponent_div_13_div_7_div_1_span_10_Template, 3, 4, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, HomeComponent_div_13_div_7_div_1_ng_template_11_Template, 2, 0, "ng-template", null, 50, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "\u203A");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const c_r41 = ctx.$implicit;
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](12);
    let tmp_5_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background", "hsl(" + c_r41.id * 57 + ",55%,55%)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", c_r41.foto_url);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !c_r41.foto_url);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", c_r41.nombre, " ", c_r41.apellido, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", c_r41.universidad);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", (tmp_5_0 = c_r41.promedio) !== null && tmp_5_0 !== undefined ? tmp_5_0 : 0)("readonly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", c_r41.promedio)("ngIfElse", _r46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" \u00A0\u00B7\u00A0 ", c_r41.total_calificaciones, " rese\u00F1a", c_r41.total_calificaciones !== 1 ? "s" : "", " ");
  }
}
function HomeComponent_div_13_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HomeComponent_div_13_div_7_div_1_Template, 16, 13, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r37.results);
  }
}
function HomeComponent_div_13_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28)(1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\uD83D\uDD0E");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "No encontramos compas con ese nombre.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function HomeComponent_div_13_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 51)(1, "div", 52)(2, "div", 53)(3, "div", 54)(4, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\uD83D\uDD0D");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Busca");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Encuentra a tu compa por nombre o apellido");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 53)(11, "div", 54)(12, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "\u2B50");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Califica");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Deja tu puntuaci\u00F3n y comentario honesto");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 53)(19, "div", 54)(20, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "\uD83E\uDD1D");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Conecta");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Elige mejor a tus compa\u00F1eros de grupo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
}
function HomeComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11)(1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, HomeComponent_div_13_h2_2_Template, 2, 0, "h2", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, HomeComponent_div_13_h2_3_Template, 2, 2, "h2", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "+ Agregar compa\u00F1ero");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, HomeComponent_div_13_div_6_Template, 2, 1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, HomeComponent_div_13_div_7_Template, 2, 1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, HomeComponent_div_13_div_8_Template, 5, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, HomeComponent_div_13_div_9_Template, 26, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r2.searched);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.searched);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.error);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.results.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.searched && ctx_r2.results.length === 0 && !ctx_r2.error);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r2.searched);
  }
}
class HomeComponent {
  constructor(compasService, router) {
    this.compasService = compasService;
    this.router = router;
    this.activeTab = 'universidades';
    // Tab universidades
    this.universidades = [];
    this.loadingUnivs = false;
    this.selectedUniv = null;
    this.compasByUniv = [];
    this.loadingByUniv = false;
    // Tab compas
    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('');
    this.results = [];
    this.loading = false;
    this.searched = false;
    this.error = '';
  }
  ngOnInit() {
    this.loadUniversidades();
    this.searchCtrl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.debounceTime)(400), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(q => {
      if (!q || q.trim().length < 2) {
        this.results = [];
        this.searched = false;
        this.loading = false;
        return rxjs__WEBPACK_IMPORTED_MODULE_7__.EMPTY;
      }
      this.loading = true;
      this.error = '';
      return this.compasService.search(q.trim()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)(() => {
        this.error = 'Error al buscar. Intenta de nuevo.';
        this.loading = false;
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)([]);
      }));
    })).subscribe(data => {
      this.results = data;
      this.searched = true;
      this.loading = false;
    });
  }
  loadUniversidades() {
    this.loadingUnivs = true;
    this.compasService.getUniversidades().subscribe({
      next: u => {
        this.universidades = u;
        this.loadingUnivs = false;
      },
      error: () => {
        this.loadingUnivs = false;
      }
    });
  }
  setTab(tab) {
    this.activeTab = tab;
    this.selectedUniv = null;
    this.searched = false;
    this.searchCtrl.setValue('', {
      emitEvent: false
    });
    this.results = [];
  }
  selectUniversidad(nombre) {
    this.selectedUniv = nombre;
    this.loadingByUniv = true;
    this.compasByUniv = [];
    this.compasService.getByUniversidad(nombre).subscribe({
      next: c => {
        this.compasByUniv = c;
        this.loadingByUniv = false;
      },
      error: () => {
        this.loadingByUniv = false;
      }
    });
  }
  backToUnivs() {
    this.selectedUniv = null;
    this.compasByUniv = [];
  }
  go(id) {
    this.router.navigate(['/compa', id]);
  }
  initials(u) {
    return u.split(' ').filter(w => w.length > 3).slice(0, 2).map(w => w[0].toUpperCase()).join('') || u[0].toUpperCase();
  }
  static {
    this.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_compas_service__WEBPACK_IMPORTED_MODULE_0__.CompasService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 14,
      vars: 7,
      consts: [[1, "hero"], [1, "hero-content"], [1, "subtitle"], [1, "tabs-bar"], [1, "tab-btn", 3, "click"], ["class", "search-box", 4, "ngIf"], ["class", "container tab-body", 4, "ngIf"], [1, "search-box"], ["type", "text", "placeholder", "Escribe un nombre o apellido...", "autocomplete", "off", 1, "search-input", 3, "formControl"], ["class", "search-spinner", 4, "ngIf"], [1, "search-spinner"], [1, "container", "tab-body"], [4, "ngIf"], [1, "section-header"], ["routerLink", "/agregar", 1, "btn", "btn-primary", "btn-sm"], ["class", "loading-wrap", 4, "ngIf"], ["class", "univ-grid", 4, "ngIf"], ["class", "empty", 4, "ngIf"], [1, "loading-wrap"], [1, "spinner"], [1, "univ-grid"], ["class", "univ-card", 3, "click", 4, "ngFor", "ngForOf"], [1, "univ-card", 3, "click"], [1, "univ-initial"], [1, "univ-info"], [1, "univ-nombre"], [1, "univ-count"], [1, "arrow"], [1, "empty"], [1, "empty-icon"], ["routerLink", "/agregar", 1, "btn", "btn-primary", 2, "margin-top", "1rem"], [1, "btn-back", 3, "click"], ["class", "results-grid", 4, "ngIf"], [1, "results-grid"], ["class", "compa-card", 3, "click", 4, "ngFor", "ngForOf"], [1, "compa-card", 3, "click"], [1, "avatar"], [3, "src", "alt", 4, "ngIf"], [1, "card-body"], ["class", "card-meta", 4, "ngIf"], ["size", "sm", 3, "value", "readonly"], [1, "meta"], [4, "ngIf", "ngIfElse"], ["sinCalif2", ""], [3, "src", "alt"], [1, "card-meta"], [1, "no-rating"], ["class", "alert alert-error", 4, "ngIf"], ["class", "how-it-works-inline", 4, "ngIf"], [1, "alert", "alert-error"], ["sinCalif", ""], [1, "how-it-works-inline"], [1, "steps"], [1, "step"], [1, "step-icon-wrap"], [1, "step-icon"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u00A1Busca y califica a tus compas!");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Eval\u00FAa a tus compa\u00F1eros de clase o trabajo, o revisa sus calificaciones antes de elegir grupo.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 3)(7, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_7_listener() {
            return ctx.setTab("universidades");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " \uD83C\uDFDB\uFE0F UNIVERSIDADES ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_9_listener() {
            return ctx.setTab("compas");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " \uD83D\uDD0D COMPA\u00D1EROS ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, HomeComponent_div_11_Template, 3, 2, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, HomeComponent_div_12_Template, 3, 2, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, HomeComponent_div_13_Template, 10, 6, "div", 6);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.activeTab === "universidades");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.activeTab === "compas");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.activeTab === "compas");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.activeTab === "universidades");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.activeTab === "compas");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective, _shared_components_star_rating_star_rating_component__WEBPACK_IMPORTED_MODULE_1__.StarRatingComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DecimalPipe],
      styles: ["\n\n.hero[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #003087 0%, #002366 100%);\n  padding: 3rem 1.5rem 0;\n  text-align: center;\n  color: #fff;\n}\n.hero-content[_ngcontent-%COMP%] {\n  max-width: 720px;\n  margin: 0 auto;\n}\n.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(1.6rem, 4vw, 2.4rem);\n  font-weight: 700;\n  margin-bottom: 0.6rem;\n  letter-spacing: -0.02em;\n}\n.hero[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  opacity: 0.85;\n  margin-bottom: 1.75rem;\n}\n\n\n\n.tabs-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 0;\n  margin-bottom: 0;\n}\n\n.tab-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.12);\n  color: rgba(255, 255, 255, 0.8);\n  border: none;\n  border-bottom: 3px solid transparent;\n  padding: 0.75rem 2rem;\n  font-size: 0.9rem;\n  font-weight: 600;\n  font-family: inherit;\n  cursor: pointer;\n  transition: all 0.2s;\n  letter-spacing: 0.04em;\n}\n.tab-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.18);\n  color: #fff;\n}\n.tab-btn.active[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  color: #fff;\n  border-bottom-color: #f39c12;\n}\n\n\n\n.search-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  background: #fff;\n  border-radius: 4px 4px 0 0;\n  overflow: hidden;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.22);\n  margin-top: 1rem;\n}\n.search-box[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n  font-size: 1rem;\n  font-family: inherit;\n  color: #333;\n  background: transparent;\n  padding: 0.85rem 1.25rem;\n  min-width: 0;\n}\n.search-box[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]::placeholder {\n  color: #aaa;\n}\n\n.search-spinner[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border: 3px solid #ddd;\n  border-top-color: var(--primary);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.75s linear infinite;\n  flex-shrink: 0;\n  margin: auto 0.75rem;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n\n.tab-body[_ngcontent-%COMP%] {\n  padding-top: 2rem;\n  padding-bottom: 3rem;\n}\n\n\n\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.5rem;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n}\n.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: var(--primary);\n  margin: 0;\n}\n\n.btn-back[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--primary);\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  padding: 0;\n  font-family: inherit;\n}\n.btn-back[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n\n\n.univ-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.75rem;\n}\n\n.univ-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid var(--border);\n  border-radius: var(--radius);\n  padding: 1rem 1.25rem;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  cursor: pointer;\n  transition: box-shadow 0.2s, border-color 0.2s;\n}\n.univ-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);\n  border-color: #bbb;\n}\n\n.univ-initial[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 10px;\n  background: var(--primary);\n  color: #fff;\n  font-size: 1rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n\n.univ-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.15rem;\n}\n\n.univ-nombre[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.95rem;\n  color: var(--text-primary);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.univ-count[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-secondary);\n}\n\n\n\n.results-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.75rem;\n}\n\n.compa-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid var(--border);\n  border-radius: var(--radius);\n  padding: 1rem 1.25rem;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  cursor: pointer;\n  transition: box-shadow 0.2s, border-color 0.2s;\n}\n.compa-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);\n  border-color: #bbb;\n}\n\n.avatar[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 1.1rem;\n  color: #fff;\n  flex-shrink: 0;\n  overflow: hidden;\n}\n.avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.card-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 600;\n  margin-bottom: 0.1rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.card-body[_ngcontent-%COMP%]   .card-meta[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--primary);\n  margin-bottom: 0.15rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.card-body[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-secondary);\n  margin-top: 0.15rem;\n}\n.card-body[_ngcontent-%COMP%]   .no-rating[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n\n.arrow[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  color: #bbb;\n  flex-shrink: 0;\n}\n\n\n\n.empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem 0;\n  color: var(--text-secondary);\n}\n.empty[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin-bottom: 0.75rem;\n}\n\n\n\n.how-it-works-inline[_ngcontent-%COMP%] {\n  padding: 2.5rem 0 1rem;\n  border-top: 1px solid var(--border);\n  margin-top: 2rem;\n}\n\n.steps[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 2rem;\n  text-align: center;\n}\n\n.step[_ngcontent-%COMP%]   .step-icon-wrap[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  background: #e8eeff;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 0.75rem;\n}\n.step[_ngcontent-%COMP%]   .step-icon[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n}\n.step[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  margin-bottom: 0.3rem;\n  color: var(--primary);\n}\n.step[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 0.85rem;\n  line-height: 1.5;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFCQUFBO0FBQ0E7RUFDRSw2REFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBQ0Y7QUFDRTtFQUFZLGdCQUFBO0VBQWtCLGNBQUE7QUFHaEM7QUFERTtFQUNFLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0FBR0o7QUFERTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBR0o7O0FBQ0EscUJBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLE1BQUE7RUFDQSxnQkFBQTtBQUVGOztBQUNBO0VBQ0UscUNBQUE7RUFDQSwrQkFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7QUFFRjtBQUFFO0VBQVUscUNBQUE7RUFBbUMsV0FBQTtBQUkvQztBQUZFO0VBQ0Usb0NBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7QUFJSjs7QUFBQSwyQkFBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtBQUdGO0FBREU7RUFDRSxPQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7QUFHSjtBQUZJO0VBQWlCLFdBQUE7QUFLckI7O0FBREE7RUFDRSxXQUFBO0VBQWEsWUFBQTtFQUNiLHNCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLHFDQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBS0Y7O0FBSEE7RUFBa0I7SUFBSyx5QkFBQTtFQVFyQjtBQUNGO0FBUEEseUJBQUE7QUFDQTtFQUFZLGlCQUFBO0VBQW1CLG9CQUFBO0FBVy9COztBQVRBLCtCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFZRjtBQVZFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsU0FBQTtBQVlKOztBQVJBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtBQVdGO0FBVkU7RUFBVSwwQkFBQTtBQWFaOztBQVZBLGdDQUFBO0FBQ0E7RUFBYSxhQUFBO0VBQWUsWUFBQTtBQWU1Qjs7QUFiQTtFQUNFLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSw4Q0FBQTtBQWdCRjtBQWRFO0VBQVUseUNBQUE7RUFBdUMsa0JBQUE7QUFrQm5EOztBQWZBO0VBQ0UsV0FBQTtFQUFhLFlBQUE7RUFDYixtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQW1CRjs7QUFoQkE7RUFDRSxPQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFtQkY7O0FBaEJBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBbUJGOztBQWhCQTtFQUNFLGlCQUFBO0VBQ0EsNEJBQUE7QUFtQkY7O0FBaEJBLDRCQUFBO0FBQ0E7RUFBZ0IsYUFBQTtFQUFlLFlBQUE7QUFxQi9COztBQW5CQTtFQUNFLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSw4Q0FBQTtBQXNCRjtBQXJCRTtFQUFVLHlDQUFBO0VBQXVDLGtCQUFBO0FBeUJuRDs7QUF0QkE7RUFDRSxXQUFBO0VBQWEsWUFBQTtFQUNiLGtCQUFBO0VBQ0EsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLHVCQUFBO0VBQ3BDLGdCQUFBO0VBQWtCLGlCQUFBO0VBQW1CLFdBQUE7RUFDckMsY0FBQTtFQUFnQixnQkFBQTtBQStCbEI7QUE5QkU7RUFBTSxXQUFBO0VBQWEsWUFBQTtFQUFjLGlCQUFBO0FBbUNuQzs7QUFoQ0E7RUFDRSxPQUFBO0VBQVMsWUFBQTtBQW9DWDtBQW5DRTtFQUFLLGtCQUFBO0VBQW1CLGdCQUFBO0VBQWtCLHFCQUFBO0VBQXNCLG1CQUFBO0VBQXFCLGdCQUFBO0VBQWtCLHVCQUFBO0FBMkN6RztBQTFDRTtFQUFhLGtCQUFBO0VBQW1CLHFCQUFBO0VBQXVCLHNCQUFBO0VBQXVCLGdCQUFBO0VBQWtCLHVCQUFBO0VBQXlCLG1CQUFBO0FBa0QzSDtBQWpERTtFQUFRLGlCQUFBO0VBQWtCLDRCQUFBO0VBQThCLG1CQUFBO0FBc0QxRDtBQXJERTtFQUFhLGtCQUFBO0FBd0RmOztBQXJEQTtFQUFTLGlCQUFBO0VBQW1CLFdBQUE7RUFBYSxjQUFBO0FBMkR6Qzs7QUF6REEsc0JBQUE7QUFDQTtFQUNFLGtCQUFBO0VBQW9CLGVBQUE7RUFBaUIsNEJBQUE7QUE4RHZDO0FBN0RFO0VBQWMsaUJBQUE7RUFBbUIsc0JBQUE7QUFpRW5DOztBQTlEQSxzQ0FBQTtBQUNBO0VBQ0Usc0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGdCQUFBO0FBaUVGOztBQTlEQTtFQUNFLGFBQUE7RUFDQSwyREFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQWlFRjs7QUE3REU7RUFDRSxXQUFBO0VBQWEsWUFBQTtFQUNiLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQWUsbUJBQUE7RUFBcUIsdUJBQUE7RUFDcEMsc0JBQUE7QUFtRUo7QUFqRUU7RUFBYSxpQkFBQTtBQW9FZjtBQW5FRTtFQUFLLGVBQUE7RUFBaUIsZ0JBQUE7RUFBa0IscUJBQUE7RUFBc0IscUJBQUE7QUF5RWhFO0FBeEVFO0VBQUssNEJBQUE7RUFBOEIsa0JBQUE7RUFBbUIsZ0JBQUE7QUE2RXhEIiwic291cmNlc0NvbnRlbnQiOlsiLyogPT09PT0gSEVSTyA9PT09PSAqL1xuLmhlcm8ge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMDAzMDg3IDAlLCAjMDAyMzY2IDEwMCUpO1xuICBwYWRkaW5nOiAzcmVtIDEuNXJlbSAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuXG4gICYtY29udGVudCB7IG1heC13aWR0aDogNzIwcHg7IG1hcmdpbjogMCBhdXRvOyB9XG5cbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogY2xhbXAoMS42cmVtLCA0dncsIDIuNHJlbSk7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAuNnJlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogLS4wMmVtO1xuICB9XG4gIC5zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiAuOTVyZW07XG4gICAgb3BhY2l0eTogLjg1O1xuICAgIG1hcmdpbi1ib3R0b206IDEuNzVyZW07XG4gIH1cbn1cblxuLyogPT09PT0gVEFCUyA9PT09PSAqL1xuLnRhYnMtYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLnRhYi1idG4ge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC4xMik7XG4gIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC44KTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IC43NXJlbSAycmVtO1xuICBmb250LXNpemU6IC45cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xuICBsZXR0ZXItc3BhY2luZzogLjA0ZW07XG5cbiAgJjpob3ZlciB7IGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjE4KTsgY29sb3I6ICNmZmY7IH1cblxuICAmLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuMik7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2YzOWMxMjtcbiAgfVxufVxuXG4vKiA9PT09PSBTRUFSQ0ggQk9YID09PT09ICovXG4uc2VhcmNoLWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDAsMCwwLC4yMik7XG4gIG1hcmdpbi10b3A6IDFyZW07XG5cbiAgLnNlYXJjaC1pbnB1dCB7XG4gICAgZmxleDogMTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgcGFkZGluZzogLjg1cmVtIDEuMjVyZW07XG4gICAgbWluLXdpZHRoOiAwO1xuICAgICY6OnBsYWNlaG9sZGVyIHsgY29sb3I6ICNhYWE7IH1cbiAgfVxufVxuXG4uc2VhcmNoLXNwaW5uZXIge1xuICB3aWR0aDogMjBweDsgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXI6IDNweCBzb2xpZCAjZGRkO1xuICBib3JkZXItdG9wLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBhbmltYXRpb246IHNwaW4gLjc1cyBsaW5lYXIgaW5maW5pdGU7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBtYXJnaW46IGF1dG8gLjc1cmVtO1xufVxuQGtleWZyYW1lcyBzcGluIHsgdG8geyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9IH1cblxuLyogPT09PT0gVEFCIEJPRFkgPT09PT0gKi9cbi50YWItYm9keSB7IHBhZGRpbmctdG9wOiAycmVtOyBwYWRkaW5nLWJvdHRvbTogM3JlbTsgfVxuXG4vKiA9PT09PSBTRUNUSU9OIEhFQURFUiA9PT09PSAqL1xuLnNlY3Rpb24taGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAuNzVyZW07XG5cbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cblxuLmJ0bi1iYWNrIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogLjlyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICY6aG92ZXIgeyB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgfVxufVxuXG4vKiA9PT09PSBVTklWRVJTSVRZIEdSSUQgPT09PT0gKi9cbi51bml2LWdyaWQgeyBkaXNwbGF5OiBncmlkOyBnYXA6IC43NXJlbTsgfVxuXG4udW5pdi1jYXJkIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTtcbiAgcGFkZGluZzogMXJlbSAxLjI1cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDFyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAuMnMsIGJvcmRlci1jb2xvciAuMnM7XG5cbiAgJjpob3ZlciB7IGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgwLDAsMCwuMSk7IGJvcmRlci1jb2xvcjogI2JiYjsgfVxufVxuXG4udW5pdi1pbml0aWFsIHtcbiAgd2lkdGg6IDUwcHg7IGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLnVuaXYtaW5mbyB7XG4gIGZsZXg6IDE7XG4gIG1pbi13aWR0aDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAuMTVyZW07XG59XG5cbi51bml2LW5vbWJyZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogLjk1cmVtO1xuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi51bml2LWNvdW50IHtcbiAgZm9udC1zaXplOiAuOHJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbn1cblxuLyogPT09PT0gQ09NUEEgQ0FSRFMgPT09PT0gKi9cbi5yZXN1bHRzLWdyaWQgeyBkaXNwbGF5OiBncmlkOyBnYXA6IC43NXJlbTsgfVxuXG4uY29tcGEtY2FyZCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7XG4gIHBhZGRpbmc6IDFyZW0gMS4yNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgLjJzLCBib3JkZXItY29sb3IgLjJzO1xuICAmOmhvdmVyIHsgYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDAsMCwwLC4xKTsgYm9yZGVyLWNvbG9yOiAjYmJiOyB9XG59XG5cbi5hdmF0YXIge1xuICB3aWR0aDogNTBweDsgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXdlaWdodDogNzAwOyBmb250LXNpemU6IDEuMXJlbTsgY29sb3I6ICNmZmY7XG4gIGZsZXgtc2hyaW5rOiAwOyBvdmVyZmxvdzogaGlkZGVuO1xuICBpbWcgeyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlOyBvYmplY3QtZml0OiBjb3ZlcjsgfVxufVxuXG4uY2FyZC1ib2R5IHtcbiAgZmxleDogMTsgbWluLXdpZHRoOiAwO1xuICBoMyB7IGZvbnQtc2l6ZTogLjk1cmVtOyBmb250LXdlaWdodDogNjAwOyBtYXJnaW4tYm90dG9tOiAuMXJlbTsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgb3ZlcmZsb3c6IGhpZGRlbjsgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IH1cbiAgLmNhcmQtbWV0YSB7IGZvbnQtc2l6ZTogLjc4cmVtOyBjb2xvcjogdmFyKC0tcHJpbWFyeSk7IG1hcmdpbi1ib3R0b206IC4xNXJlbTsgb3ZlcmZsb3c6IGhpZGRlbjsgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cbiAgLm1ldGEgeyBmb250LXNpemU6IC44cmVtOyBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpOyBtYXJnaW4tdG9wOiAuMTVyZW07IH1cbiAgLm5vLXJhdGluZyB7IGZvbnQtc3R5bGU6IGl0YWxpYzsgfVxufVxuXG4uYXJyb3cgeyBmb250LXNpemU6IDEuNHJlbTsgY29sb3I6ICNiYmI7IGZsZXgtc2hyaW5rOiAwOyB9XG5cbi8qID09PT09IEVNUFRZID09PT09ICovXG4uZW1wdHkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IHBhZGRpbmc6IDNyZW0gMDsgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgLmVtcHR5LWljb24geyBmb250LXNpemU6IDIuNXJlbTsgbWFyZ2luLWJvdHRvbTogLjc1cmVtOyB9XG59XG5cbi8qID09PT09IEhPVyBJVCBXT1JLUyAoaW5saW5lKSA9PT09PSAqL1xuLmhvdy1pdC13b3Jrcy1pbmxpbmUge1xuICBwYWRkaW5nOiAyLjVyZW0gMCAxcmVtO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn1cblxuLnN0ZXBzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxODBweCwgMWZyKSk7XG4gIGdhcDogMnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3RlcCB7XG4gIC5zdGVwLWljb24td3JhcCB7XG4gICAgd2lkdGg6IDYwcHg7IGhlaWdodDogNjBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZThlZWZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IDAgYXV0byAuNzVyZW07XG4gIH1cbiAgLnN0ZXAtaWNvbiB7IGZvbnQtc2l6ZTogMS44cmVtOyB9XG4gIGgzIHsgZm9udC1zaXplOiAxcmVtOyBmb250LXdlaWdodDogNjAwOyBtYXJnaW4tYm90dG9tOiAuM3JlbTsgY29sb3I6IHZhcigtLXByaW1hcnkpOyB9XG4gIHAgIHsgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTsgZm9udC1zaXplOiAuODVyZW07IGxpbmUtaGVpZ2h0OiAxLjU7IH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 5311:
/*!************************************************************!*\
  !*** ./src/app/pages/rating-form/rating-form.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RatingFormComponent: () => (/* binding */ RatingFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _core_services_resenas_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/resenas.service */ 2097);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _shared_components_star_rating_star_rating_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/star-rating/star-rating.component */ 3829);







function RatingFormComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.error);
  }
}
function RatingFormComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.success);
  }
}
function RatingFormComponent_form_5_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Haz clic en una estrella");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RatingFormComponent_form_5_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Selecciona una puntuaci\u00F3n. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RatingFormComponent_form_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function RatingFormComponent_form_5_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.submit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 7)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Puntuaci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 9)(7, "app-star-rating", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valueChange", function RatingFormComponent_form_5_Template_app_star_rating_valueChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.setStars($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, RatingFormComponent_form_5_span_8_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, RatingFormComponent_form_5_span_9_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7)(11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Comentario (opcional)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "textarea", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    let tmp_1_0;
    let tmp_2_0;
    let tmp_4_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r2.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", (tmp_1_0 = ctx_r2.form.value.puntuacion) !== null && tmp_1_0 !== undefined ? tmp_1_0 : 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx_r2.form.value.puntuacion) !== null && tmp_2_0 !== undefined ? tmp_2_0 : 0) === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.form.controls["puntuacion"].invalid && ctx_r2.form.controls["puntuacion"].touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", (tmp_4_0 = ctx_r2.form.value.comentario == null ? null : ctx_r2.form.value.comentario.length) !== null && tmp_4_0 !== undefined ? tmp_4_0 : 0, " / 500");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r2.form.invalid || ctx_r2.submitting);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.submitting ? "Publicando..." : "Publicar rese\u00F1a", " ");
  }
}
class RatingFormComponent {
  constructor(fb, resenasService) {
    this.fb = fb;
    this.resenasService = resenasService;
    this.resenaCreada = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.form = this.fb.group({
      puntuacion: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.max(5)]],
      comentario: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(500)]
    });
    this.submitting = false;
    this.error = '';
    this.success = '';
  }
  setStars(n) {
    this.form.patchValue({
      puntuacion: n
    });
  }
  submit() {
    if (this.form.invalid || this.submitting) return;
    this.submitting = true;
    this.error = '';
    const puntuacion = this.form.get('puntuacion').value;
    const comentario = this.form.get('comentario').value;
    this.resenasService.create(this.compaId, {
      puntuacion,
      comentario: comentario || ''
    }).subscribe({
      next: () => {
        this.success = '¡Reseña publicada exitosamente!';
        this.submitting = false;
        setTimeout(() => this.resenaCreada.emit(), 1200);
      },
      error: err => {
        this.error = err.error?.error ?? 'Error al publicar la reseña.';
        this.submitting = false;
      }
    });
  }
  static {
    this.ɵfac = function RatingFormComponent_Factory(t) {
      return new (t || RatingFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_resenas_service__WEBPACK_IMPORTED_MODULE_0__.ResenasService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: RatingFormComponent,
      selectors: [["app-rating-form"]],
      inputs: {
        compaId: "compaId"
      },
      outputs: {
        resenaCreada: "resenaCreada"
      },
      decls: 6,
      vars: 3,
      consts: [[1, "rating-form", "card"], ["class", "alert alert-error", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], [3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "alert", "alert-error"], [1, "alert", "alert-success"], [3, "formGroup", "ngSubmit"], [1, "form-group"], [1, "required"], [1, "stars-picker"], ["size", "lg", 3, "value", "valueChange"], ["class", "stars-hint", 4, "ngIf"], ["class", "error-msg", 4, "ngIf"], ["formControlName", "comentario", "placeholder", "Describe tu experiencia con este compa...", "rows", "4"], [1, "char-count"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "stars-hint"], [1, "error-msg"]],
      template: function RatingFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Deja tu calificaci\u00F3n");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, RatingFormComponent_div_3_Template, 2, 1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, RatingFormComponent_div_4_Template, 2, 1, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, RatingFormComponent_form_5_Template, 18, 7, "form", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.error);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.success);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.success);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _shared_components_star_rating_star_rating_component__WEBPACK_IMPORTED_MODULE_1__.StarRatingComponent],
      styles: [".rating-form[_ngcontent-%COMP%] {\n  border: 2px solid rgba(108, 99, 255, 0.2);\n}\n.rating-form[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 600;\n  margin-bottom: 1.25rem;\n  color: var(--secondary);\n}\n\n.stars-picker[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.stars-picker[_ngcontent-%COMP%]   .stars-hint[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: var(--text-secondary);\n  font-style: italic;\n}\n\n.required[_ngcontent-%COMP%] {\n  color: var(--accent);\n}\n\n.char-count[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-secondary);\n  display: block;\n  text-align: right;\n  margin-top: 0.2rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcmF0aW5nLWZvcm0vcmF0aW5nLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5Q0FBQTtBQUNGO0FBQ0U7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQUFGO0FBRUU7RUFDRSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFJQTtFQUFZLG9CQUFBO0FBQVo7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5yYXRpbmctZm9ybSB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMTA4LDk5LDI1NSwuMik7XG5cbiAgaDMge1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcbiAgfVxufVxuXG4uc3RhcnMtcGlja2VyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xuXG4gIC5zdGFycy1oaW50IHtcbiAgICBmb250LXNpemU6IC44MnJlbTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgfVxufVxuXG4ucmVxdWlyZWQgeyBjb2xvcjogdmFyKC0tYWNjZW50KTsgfVxuXG4uY2hhci1jb3VudCB7XG4gIGZvbnQtc2l6ZTogLjc1cmVtO1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IC4ycmVtO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 3083:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/navbar/navbar.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavbarComponent: () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);


class NavbarComponent {
  static {
    this.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 6,
      vars: 0,
      consts: [[1, "navbar"], [1, "container", "nav-inner"], ["routerLink", "/", 1, "brand"], [1, "brand-icon"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "a", 2)(3, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\uD83E\uDD1D");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " MisCompa\u00F1eros ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
      styles: [".navbar[_ngcontent-%COMP%] {\n  background: var(--navbar-bg);\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);\n}\n\n.nav-inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 56px;\n}\n\n.brand[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: #fff;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  gap: 0.45rem;\n}\n.brand[_ngcontent-%COMP%]   .brand-icon[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n}\n.brand[_ngcontent-%COMP%]:hover {\n  color: rgba(255, 255, 255, 0.85);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtFQUNBLHlDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUNGO0FBQ0U7RUFBYyxpQkFBQTtBQUVoQjtBQUFFO0VBQVUsZ0NBQUE7QUFHWiIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1uYXZiYXItYmcpO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDEwMDtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwwLDAsLjI1KTtcbn1cblxuLm5hdi1pbm5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNTZweDtcbn1cblxuLmJyYW5kIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogLjQ1cmVtO1xuXG4gIC5icmFuZC1pY29uIHsgZm9udC1zaXplOiAxLjNyZW07IH1cblxuICAmOmhvdmVyIHsgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjg1KTsgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 3829:
/*!************************************************************************!*\
  !*** ./src/app/shared/components/star-rating/star-rating.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StarRatingComponent: () => (/* binding */ StarRatingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);



function StarRatingComponent_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function StarRatingComponent_span_1_Template_span_mouseenter_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const s_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.hover(s_r1));
    })("click", function StarRatingComponent_span_1_Template_span_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const s_r1 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.select(s_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u2605");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const s_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("filled", s_r1 <= ctx_r0.display);
  }
}
class StarRatingComponent {
  constructor() {
    this.value = 0;
    this.readonly = false;
    this.size = 'md';
    this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.stars = [1, 2, 3, 4, 5];
    this.hovered = 0;
  }
  get display() {
    return this.readonly ? this.value : this.hovered || this.value;
  }
  select(n) {
    if (!this.readonly) {
      this.value = n;
      this.valueChange.emit(n);
    }
  }
  hover(n) {
    if (!this.readonly) this.hovered = n;
  }
  leave() {
    this.hovered = 0;
  }
  static {
    this.ɵfac = function StarRatingComponent_Factory(t) {
      return new (t || StarRatingComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StarRatingComponent,
      selectors: [["app-star-rating"]],
      inputs: {
        value: "value",
        readonly: "readonly",
        size: "size"
      },
      outputs: {
        valueChange: "valueChange"
      },
      decls: 2,
      vars: 5,
      consts: [[1, "stars", 3, "mouseleave"], ["class", "star", 3, "filled", "mouseenter", "click", 4, "ngFor", "ngForOf"], [1, "star", 3, "mouseenter", "click"]],
      template: function StarRatingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseleave", function StarRatingComponent_Template_div_mouseleave_0_listener() {
            return ctx.leave();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StarRatingComponent_span_1_Template, 2, 2, "span", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("stars--" + ctx.size);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("stars--interactive", !ctx.readonly);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.stars);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
      styles: [".stars[_ngcontent-%COMP%] {\n  display: inline-flex;\n  gap: 2px;\n}\n.stars--sm[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.stars--md[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n}\n.stars--lg[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n}\n.stars--interactive[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: transform 0.1s;\n}\n.stars--interactive[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%]:hover {\n  transform: scale(1.15);\n}\n\n.star[_ngcontent-%COMP%] {\n  color: var(--border);\n  transition: color 0.15s;\n}\n.star.filled[_ngcontent-%COMP%] {\n  color: var(--star-color);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc3Rhci1yYXRpbmcvc3Rhci1yYXRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUNBLFFBQUE7QUFDRjtBQUNFO0VBQWMsaUJBQUE7QUFFaEI7QUFERTtFQUFjLGlCQUFBO0FBSWhCO0FBSEU7RUFBYyxpQkFBQTtBQU1oQjtBQUpFO0VBQXVCLGVBQUE7RUFBaUIsMEJBQUE7QUFRMUM7QUFQRTtFQUE2QixzQkFBQTtBQVUvQjs7QUFQQTtFQUNFLG9CQUFBO0VBQ0EsdUJBQUE7QUFVRjtBQVJFO0VBQVcsd0JBQUE7QUFXYiIsInNvdXJjZXNDb250ZW50IjpbIi5zdGFycyB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBnYXA6IDJweDtcblxuICAmLS1zbSAuc3RhciB7IGZvbnQtc2l6ZTogMS4xcmVtOyB9XG4gICYtLW1kIC5zdGFyIHsgZm9udC1zaXplOiAxLjRyZW07IH1cbiAgJi0tbGcgLnN0YXIgeyBmb250LXNpemU6IDEuOHJlbTsgfVxuXG4gICYtLWludGVyYWN0aXZlIC5zdGFyIHsgY3Vyc29yOiBwb2ludGVyOyB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjFzOyB9XG4gICYtLWludGVyYWN0aXZlIC5zdGFyOmhvdmVyIHsgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTsgfVxufVxuXG4uc3RhciB7XG4gIGNvbG9yOiB2YXIoLS1ib3JkZXIpO1xuICB0cmFuc2l0aW9uOiBjb2xvciAuMTVzO1xuXG4gICYuZmlsbGVkIHsgY29sb3I6IHZhcigtLXN0YXItY29sb3IpOyB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api'
};

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map