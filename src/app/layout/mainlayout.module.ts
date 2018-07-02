import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ParticlesModule } from 'angular-particle';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WavesModule, NavbarModule, InputsModule, SmoothscrollModule } from 'ng-uikit-pro-standard';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
],
  imports: [
    FormsModule,
    WavesModule,
    CommonModule,
    ParticlesModule,
    NavbarModule,
    SmoothscrollModule.forRoot (),
    InputsModule,
    RouterModule
  ],
  exports: [
      HeaderComponent,
      FooterComponent
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class LayoutModule {}
