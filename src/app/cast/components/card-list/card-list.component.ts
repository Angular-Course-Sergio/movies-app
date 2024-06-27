import { Component, Input, OnInit } from '@angular/core';
import { Cast } from '../../interfaces/cast.interface';
import { MoviesService } from '../../../movies/services/movies-service.service';

@Component({
  selector: 'cast-card-list',
  templateUrl: './card-list.component.html',
})
export class CastCardListComponet implements OnInit {
  @Input() public cast: Cast[] = [];
  @Input() public movieId?: number;

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getCast(this.movieId!).subscribe((cast) => {
      if (!cast) return [];

      return (this.cast = cast.cast);
    });
  }
}
