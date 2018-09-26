(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/platform-browser'), require('@angular/elements')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/platform-browser', '@angular/elements'], factory) :
    (factory((global.ng = global.ng || {}, global.ng['my-header-v1'] = {}),global.ng.core,global.platformBrowser,global.elements));
}(this, (function (exports,core,platformBrowser,elements) { 'use strict';

    var HeaderComponent = /** @class */ (function () {
        function HeaderComponent() {
        }
        HeaderComponent.prototype.ngOnInit = function () {
        };
        HeaderComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'custom-header',
                        template: "\n    <div class=\"header\">Header</div>\n  ",
                        styles: ["\n    .header{\n        background-color: rgb(57, 59, 82);\n        color: white;\n        padding: 20px 30px;\n    }\n  "]
                    },] },
        ];
        /** @nocollapse */
        HeaderComponent.ctorParameters = function () { return []; };
        return HeaderComponent;
    }());

    var HeaderModule = /** @class */ (function () {
        function HeaderModule(injector) {
            this.injector = injector;
            var customEle = elements.createCustomElement(HeaderComponent, { injector: this.injector });
            customElements.define('custom-header', customEle);
        }
        HeaderModule.prototype.ngDoBootstrap = function () { };
        HeaderModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [HeaderComponent],
                        imports: [platformBrowser.BrowserModule],
                        entryComponents: [HeaderComponent]
                    },] },
        ];
        /** @nocollapse */
        HeaderModule.ctorParameters = function () { return [
            { type: core.Injector }
        ]; };
        return HeaderModule;
    }());

    exports.HeaderModule = HeaderModule;
    exports.HeaderComponent = HeaderComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
