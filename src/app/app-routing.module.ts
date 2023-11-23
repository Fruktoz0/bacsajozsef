import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactComponent } from './contact/contact.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { HomeComponent } from './home/home.component';
import { Nav1Component } from './nav1/nav1.component';
import { UnderconstructionComponent } from './underconstruction/underconstruction.component';

const routes: Routes = [

  {path: '', redirectTo: 'main', pathMatch: 'full'},
  // {path: 'underconstruction',  component: UnderconstructionComponent},
  {path: 'main', component: MainComponent},
  { path: 'home', component: HomeComponent, children: [
    { path: '', redirectTo: 'portfolio', pathMatch: 'full' },
    { path: 'portfolio', component: PortfolioComponent },
  ]},
  { path: 'home', component: HomeComponent, children: [
    { path: '', redirectTo: 'aboutme', pathMatch: 'full' },
    { path: 'aboutme', component: AboutmeComponent },
  ]},
  { path: 'home', component: HomeComponent, children: [
    { path: '', redirectTo: 'resume', pathMatch: 'full' },
    { path: 'resume', component: ResumeComponent },
  ]},
  { path: 'home', component: HomeComponent, children: [
    { path: '', redirectTo: 'testimonial', pathMatch: 'full' },
    { path: 'testimonial', component: TestimonialsComponent },
  ]},
  { path: 'home', component: HomeComponent, children: [
    { path: '', redirectTo: 'aboutme', pathMatch: 'full' },
    { path: 'contact', component: ContactComponent },
  ]},
  {path: '**', redirectTo: 'main', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
