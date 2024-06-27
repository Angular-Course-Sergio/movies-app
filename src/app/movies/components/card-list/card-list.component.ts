import { Component, Input } from '@angular/core';
import { Movie } from '../../interfaces/movies.interface';

@Component({
  selector: 'movies-card-list',
  templateUrl: './card-list.component.html',
})
export class MovieCardListComponet {
  @Input() public movies: Movie[] = [];
}
