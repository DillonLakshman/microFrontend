import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { HeaderComponent } from './header/header.component';
var HeaderModule = /** @class */ (function () {
    function HeaderModule(injector) {
        this.injector = injector;
        var customEle = createCustomElement(HeaderComponent, { injector: this.injector });
        customElements.define('custom-header', customEle);
    }
    HeaderModule.prototype.ngDoBootstrap = function () { };
    HeaderModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [HeaderComponent],
                    imports: [BrowserModule],
                    entryComponents: [HeaderComponent]
                },] },
    ];
    /** @nocollapse */
    HeaderModule.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    return HeaderModule;
}());
export { HeaderModule };
