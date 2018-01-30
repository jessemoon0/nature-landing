import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderLandingComponent } from './header-landing/header-landing.component';

import { MainContentComponent } from './main-content/main-content.component';
import {AbstractComponent} from './main-content/abstract/abstract.component';
import { FeaturesComponent } from './main-content/features/features.component';

import { FooterComponent } from './footer/footer.component';
import { PackagesComponent } from './main-content/packages/packages.component';
import { ReviewsComponent } from './main-content/reviews/reviews.component';
import { ContactComponent } from './main-content/contact/contact.component';
import { ImageCompositionComponent } from './main-content/abstract/image-composition/image-composition.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderLandingComponent,
    MainContentComponent,
    AbstractComponent,
    FooterComponent,
    FeaturesComponent,
    PackagesComponent,
    ReviewsComponent,
    ContactComponent,
    ImageCompositionComponent,
    NavigationMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
