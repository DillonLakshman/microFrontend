import { Component } from '@angular/core';
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'custom-header',
                    template: "\n    <div class=\"header\">Header</div>\n  ",
                    styles: ["\n    .header{\n        background-color: rgb(57, 59, 82);\n        color: white;\n        padding: 20px 30px;\n    }\n  "]
                },] },
    ];
    /** @nocollapse */
    HeaderComponent.ctorParameters = function () { return []; };
    return HeaderComponent;
}());
export { HeaderComponent };
