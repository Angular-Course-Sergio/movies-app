import { Component } from '@angular/core';
import { Movie } from '../../interfaces/movies.interface';

@Component({
  selector: 'movies-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  constructor() {}

  get movies(): Movie[] {
    //servicio
    return [];
  }
}
