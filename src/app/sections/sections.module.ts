
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { AgmCoreModule } from '@agm/core';
// import { CalendarModule } from 'angular-calendar';
// shared modules? como modals etc

import { ContactComponent } from './contact/contact.component';
import { CurriculoComponent } from './curriculo/curriculo.component';
import { FeaturesComponent } from './features/features.component';
import { AboutComponent } from './about/about.component';
import { CtaComponent } from './cta/cta.component';
import { ErrorsModule } from './errors/errors.module';
// importar componentes especificos dos modulos depois...

@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    CurriculoComponent,
    CtaComponent,
    FeaturesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    ErrorsModule
    // AgmCoreModule.forRoot({
    // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
    // apiKey: ''
    // }),
    // CalendarModule.forRoot()
  ],
  exports: [
    AboutComponent,
    ContactComponent,
    CurriculoComponent,
    FeaturesComponent
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class SectionsModule {}
