(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('token-management', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['token-management'] = {}, global.ng.core));
}(this, (function (exports, i0) { 'use strict';

    var TokenManagementService = /** @class */ (function () {
        function TokenManagementService() {
        }
        return TokenManagementService;
    }());
    TokenManagementService.ɵprov = i0.ɵɵdefineInjectable({ factory: function TokenManagementService_Factory() { return new TokenManagementService(); }, token: TokenManagementService, providedIn: "root" });
    TokenManagementService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    TokenManagementService.ctorParameters = function () { return []; };

    var TokenManagementComponent = /** @class */ (function () {
        function TokenManagementComponent() {
        }
        TokenManagementComponent.prototype.ngOnInit = function () {
        };
        return TokenManagementComponent;
    }());
    TokenManagementComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'lib-token-management',
                    template: "\n    <p>\n      token-management works!\n    </p>\n  "
                },] }
    ];
    TokenManagementComponent.ctorParameters = function () { return []; };

    var TokenManagementModule = /** @class */ (function () {
        function TokenManagementModule() {
        }
        return TokenManagementModule;
    }());
    TokenManagementModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [TokenManagementComponent],
                    imports: [],
                    exports: [TokenManagementComponent]
                },] }
    ];

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
//# sourceMappingURL=token-management.umd.js.map
