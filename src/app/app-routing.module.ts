import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './movies/pages/home/home-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  {
    path: 'movies',
    loadChildren: () =>
      import('./movies/movies-routing.module').then(
        (m) => m.MoviesRoutingModule
      ),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
