import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { Nav1Component } from './nav1/nav1.component';
import { FormsModule } from '@angular/forms';
import { FlipCardModule } from './flip-card/flip-card.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutmeComponent,
    PortfolioComponent,
    ResumeComponent,
    TestimonialsComponent,
    ContactComponent,
    NavbarComponent,
    HomeComponent,
    Nav1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FlipCardModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
