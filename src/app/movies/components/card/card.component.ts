import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../interfaces/movies.interface';

@Component({
  selector: 'movies-card',
  templateUrl: './card.component.html',
})
export class CardComponent implements OnInit {
  @Input() public movie!: Movie;

  ngOnInit(): void {
    if (!this.movie) throw new Error('Movie property is required');
  }

  movieId(id: number): void {
    console.log(id);
  }
}
