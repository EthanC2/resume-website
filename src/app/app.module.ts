import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { SwiperModule } from 'swiper/angular';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactComponent } from './pages/contact/contact.component';
import { IconsModule } from './icons/icons.module';
import { EmailComponent } from './components/email/email.component';
import { RepositoryComponent } from './components/repository/repository.component';


const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent, 
    pathMatch: 'full',
    title: "Ethan Cox - Resume"
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
    EmailComponent,
    RepositoryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    IconsModule,
    SwiperModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
