import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MDBSpinningPreloader, MDBBootstrapModulesPro, ToastModule } from 'ng-uikit-pro-standard';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './lazy/about/about.component';
import { CurriculoComponent } from './lazy/curriculo/curriculo.component';
import { ContactComponent } from './lazy/contact/contact.component';
import { CtaComponent } from './lazy/cta/cta.component';
import { FeaturesComponent } from './lazy/features/features.component';
import { NavModule } from './layout/nav/nav.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FeaturesComponent,
    CurriculoComponent,
    CtaComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'eyunes' }),
    BrowserAnimationsModule,
    NavModule,
    FormsModule,
    HttpModule,
    RouterModule,
    ToastModule.forRoot(),
    MDBBootstrapModulesPro.forRoot()
  ],
  providers: [MDBSpinningPreloader],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}

