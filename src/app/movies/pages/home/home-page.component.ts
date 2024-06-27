import { Component } from '@angular/core';

import { Movie } from '../../interfaces/movies.interface';
import { MoviesService } from '../../services/movies-service.service';

@Component({
  selector: 'movies-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  constructor(private moviesService: MoviesService) {}

  get movies(): Movie[] {
    return this.moviesService.movieList;
  }
}
