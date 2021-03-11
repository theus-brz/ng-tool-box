(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@theus-brz/token-management', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['theus-brz'] = global['theus-brz'] || {}, global['theus-brz']['token-management'] = {}), global.ng.core));
}(this, (function (exports, i0) { 'use strict';

    var TokenManagementService = /** @class */ (function () {
        function TokenManagementService() {
        }
        return TokenManagementService;
    }());
    TokenManagementService.ɵfac = function TokenManagementService_Factory(t) { return new (t || TokenManagementService)(); };
    TokenManagementService.ɵprov = i0.ɵɵdefineInjectable({ token: TokenManagementService, factory: TokenManagementService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TokenManagementService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return []; }, null);
    })();

    var TokenManagementComponent = /** @class */ (function () {
        function TokenManagementComponent() {
        }
        TokenManagementComponent.prototype.ngOnInit = function () {
        };
        return TokenManagementComponent;
    }());
    TokenManagementComponent.ɵfac = function TokenManagementComponent_Factory(t) { return new (t || TokenManagementComponent)(); };
    TokenManagementComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TokenManagementComponent, selectors: [["lib-token-management"]], decls: 2, vars: 0, template: function TokenManagementComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "p");
                i0.ɵɵtext(1, " token-management works! ");
                i0.ɵɵelementEnd();
            }
        }, encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TokenManagementComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-token-management',
                        template: "\n    <p>\n      token-management works!\n    </p>\n  ",
                        styles: []
                    }]
            }], function () { return []; }, null);
    })();

    var TokenManagementModule = /** @class */ (function () {
        function TokenManagementModule() {
        }
        return TokenManagementModule;
    }());
    TokenManagementModule.ɵmod = i0.ɵɵdefineNgModule({ type: TokenManagementModule });
    TokenManagementModule.ɵinj = i0.ɵɵdefineInjector({ factory: function TokenManagementModule_Factory(t) { return new (t || TokenManagementModule)(); }, imports: [[]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TokenManagementModule, { declarations: [TokenManagementComponent], exports: [TokenManagementComponent] }); })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TokenManagementModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [TokenManagementComponent],
                        imports: [],
                        exports: [TokenManagementComponent]
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of token-management
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.TokenManagementComponent = TokenManagementComponent;
    exports.TokenManagementModule = TokenManagementModule;
    exports.TokenManagementService = TokenManagementService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=theus-brz-token-management.umd.js.map
