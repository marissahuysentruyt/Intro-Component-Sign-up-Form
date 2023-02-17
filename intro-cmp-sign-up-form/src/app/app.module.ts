import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { GridContainerComponent } from './grid-container/grid-container.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';
import { TrialBannerComponent } from './trial-banner/trial-banner.component';
import { TermsComponent } from './terms/terms.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeroComponent,
    GridContainerComponent,
    SignUpFormComponent,
    CallToActionComponent,
    TrialBannerComponent,
    TermsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
