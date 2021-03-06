import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeatherIconsModule } from './common/modules/feather-icons/feather-icons.module';
import { FooterComponent } from './components/footer/footer.component';
import { HomeModule } from './components/home/home.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundModule } from './components/not-found/not-found.module';
import { WebScraperModule } from './components/web-scraper/web-scraper.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FeatherIconsModule,
    ScrollToModule.forRoot(),
    SweetAlert2Module.forRoot(),
    HomeModule,
    WebScraperModule,
    NotFoundModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
