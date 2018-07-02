
// import { AgmCoreModule } from '@agm/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MDBSpinningPreloader, MDBBootstrapModulesPro, ToastModule } from 'ng-uikit-pro-standard';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LayoutModule } from './layout/mainlayout.module';
import { ErrorsModule } from './sections/errors/errors.module';
import { SectionsModule } from './sections/sections.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // AgmCoreModule.forRoot({
     //  apiKey: ''
    // }),
    BrowserModule.withServerTransition({ appId: 'eyunes' }),
    BrowserAnimationsModule,
    FormsModule,
    LayoutModule,
    ErrorsModule,
    SectionsModule,
    ReactiveFormsModule,
    RouterModule,
    ToastModule.forRoot(),
    MDBBootstrapModulesPro.forRoot()
    // acho que nao precisa ficar aqui
  ],
  providers: [MDBSpinningPreloader],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}

