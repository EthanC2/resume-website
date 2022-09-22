import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactComponent } from './pages/contact/contact.component';


const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent, 
    pathMatch: 'full',
    title: "Digital Resume"
  },

  { 
    path: 'about', 
    component: AboutComponent,
    title: "About Me"
  },

  { 
    path: 'resume', 
    component: ResumeComponent,
    title: "Resume"
  },

  { 
    path: 'portfolio', 
    component: PortfolioComponent,
    title: "Portfolio"
  },

  { 
    path: 'contact', 
    component: ContactComponent,
    title: "Contact"
  },
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ResumeComponent,
    PortfolioComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
