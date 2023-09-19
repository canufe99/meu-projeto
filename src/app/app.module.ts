import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CardsComponent } from './components/cards/cards.component';
import { ProjectsComponent } from './pages/projects/projects.component';



@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    ProjectsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
