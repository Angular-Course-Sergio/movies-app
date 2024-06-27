import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from './pages/details/movie-details.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'by/:id',
    component: MovieDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
