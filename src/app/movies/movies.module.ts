import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';

import { SearchBoxComponent } from './components/search-box/search-box.component';
import { MovieCardComponent } from './components/card/card.component';
import { SharedModule } from '../shared/shared.module';
import { MovieCardListComponet } from './components/card-list/card-list.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { MovieDetailsComponent } from './pages/details/movie-details.component';
import { CastModule } from '../cast/cast.module';

@NgModule({
  declarations: [
    HomePageComponent,
    MovieDetailsComponent,
    SearchBoxComponent,
    MovieCardComponent,
    MovieCardListComponet,
  ],
  imports: [CommonModule, SharedModule, MoviesRoutingModule, CastModule],
  exports: [HomePageComponent],
})
export class MoviesModule {}
