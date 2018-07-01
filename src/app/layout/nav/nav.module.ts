import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { NavComponent } from './nav.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        MDBBootstrapModulesPro.forRoot(),
    ],
    declarations: [
        NavComponent,
        HeaderComponent,
        FooterComponent
    ],
    exports: [
        NavComponent,
        HeaderComponent,
        FooterComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA,
        CUSTOM_ELEMENTS_SCHEMA
    ],
    providers: []
})
export class NavModule {

}
