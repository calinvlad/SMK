import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './layout/home/home.component';
import {NavbarComponent} from "./home/navbar/navbar.component";
import {HeroAreaComponent} from "./home/hero-area/hero-area.component";
import {AboutComponent} from "./home/about/about.component";
import {GalleryComponent} from "./home/gallery/gallery.component";
import {ServicesComponent} from "./home/services/services.component";
import {ContactComponent} from "./home/contact/contact.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HeroAreaComponent,
    AboutComponent,
    GalleryComponent,
    ServicesComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
