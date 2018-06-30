import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { MDBSpinningPreloader, MDBBootstrapModulesPro, ToastModule } from 'ng-uikit-pro-standard';

import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { PageAboutComponent } from './page-about/page-about.component';
import { PageFeaturesComponent } from './page-features/page-features.component';
import { PageCurriculoComponent } from './page-curriculo/page-curriculo.component';
import { PageCtaComponent } from './page-cta/page-cta.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { PageFooterComponent } from './page-footer/page-footer.component';
import { NotfoundComponent } from './notfound.component';
import { LazyComponent } from './lazy/lazy.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    PageHeaderComponent,
    PageAboutComponent,
    PageFeaturesComponent,
    PageCurriculoComponent,
    PageCtaComponent,
    PageContactComponent,
    PageFooterComponent,
    NotfoundComponent,
    LazyComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'eyunes' }),
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ToastModule.forRoot(),
    MDBBootstrapModulesPro.forRoot(),
    RouterModule.forRoot([
      { path: '**', component: NotfoundComponent }
    ])
  ],
  providers: [MDBSpinningPreloader],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}

