import { ɵɵdefineInjectable, Injectable, Component, NgModule } from '@angular/core';

class TokenManagementService {
    constructor() { }
}
TokenManagementService.ɵprov = ɵɵdefineInjectable({ factory: function TokenManagementService_Factory() { return new TokenManagementService(); }, token: TokenManagementService, providedIn: "root" });
TokenManagementService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
TokenManagementService.ctorParameters = () => [];

class TokenManagementComponent {
    constructor() { }
    ngOnInit() {
    }
}
TokenManagementComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-token-management',
                template: `
    <p>
      token-management works!
    </p>
  `
            },] }
];
TokenManagementComponent.ctorParameters = () => [];

class TokenManagementModule {
}
TokenManagementModule.decorators = [
    { type: NgModule, args: [{
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

export { TokenManagementComponent, TokenManagementModule, TokenManagementService };
//# sourceMappingURL=token-management.js.map
