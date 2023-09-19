import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContentComponent } from './pages/projects/content/content.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {
    path : '',
    component : HomeComponent
  },
  {
    path : 'projects',
    component : ProjectsComponent
  },
  {
    path : 'projects/content/:id',
    component : ContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
