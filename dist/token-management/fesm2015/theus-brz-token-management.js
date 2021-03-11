import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';

class TokenManagementService {
    constructor() { }
}
TokenManagementService.ɵfac = function TokenManagementService_Factory(t) { return new (t || TokenManagementService)(); };
TokenManagementService.ɵprov = ɵɵdefineInjectable({ token: TokenManagementService, factory: TokenManagementService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(TokenManagementService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class TokenManagementComponent {
    constructor() { }
    ngOnInit() {
    }
}
TokenManagementComponent.ɵfac = function TokenManagementComponent_Factory(t) { return new (t || TokenManagementComponent)(); };
TokenManagementComponent.ɵcmp = ɵɵdefineComponent({ type: TokenManagementComponent, selectors: [["lib-token-management"]], decls: 2, vars: 0, template: function TokenManagementComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, " token-management works! ");
        ɵɵelementEnd();
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(TokenManagementComponent, [{
        type: Component,
        args: [{
                selector: 'lib-token-management',
                template: `
    <p>
      token-management works!
    </p>
  `,
                styles: []
            }]
    }], function () { return []; }, null); })();

class TokenManagementModule {
}
TokenManagementModule.ɵmod = ɵɵdefineNgModule({ type: TokenManagementModule });
TokenManagementModule.ɵinj = ɵɵdefineInjector({ factory: function TokenManagementModule_Factory(t) { return new (t || TokenManagementModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(TokenManagementModule, { declarations: [TokenManagementComponent], exports: [TokenManagementComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(TokenManagementModule, [{
        type: NgModule,
        args: [{
                declarations: [TokenManagementComponent],
                imports: [],
                exports: [TokenManagementComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of token-management
 */

/**
 * Generated bundle index. Do not edit.
 */

export { TokenManagementComponent, TokenManagementModule, TokenManagementService };
//# sourceMappingURL=theus-brz-token-management.js.map
