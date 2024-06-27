import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';

import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardComponent } from './components/card/card.component';
import { SharedModule } from '../shared/shared.module';
import { CardListComponet } from './components/card-list/card-list.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { MovieDetailsComponent } from './pages/details/movie-details.component';

@NgModule({
  declarations: [
    HomePageComponent,
    MovieDetailsComponent,
    SearchBoxComponent,
    CardComponent,
    CardListComponet,
  ],
  imports: [CommonModule, SharedModule, MoviesRoutingModule],
  exports: [HomePageComponent],
})
export class MoviesModule {}
