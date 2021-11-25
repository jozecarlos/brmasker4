import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrMaskerDirective} from "./directives";


@NgModule({
    declarations: [
        BrMaskerDirective
    ],
    exports: [
        BrMaskerDirective
    ],
    imports: [
        CommonModule
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class AngularBrMaskModule {}
