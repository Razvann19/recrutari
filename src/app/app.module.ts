import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CarouselComponent } from './pages/carousel/carousel.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { WhyLigaComponent } from './pages/why-liga/why-liga.component';
import { DepartmentsComponent } from './pages/departments/departments.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderMenuComponent,
    HomePageComponent,
    CarouselComponent,
    WhyLigaComponent,
    DepartmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
