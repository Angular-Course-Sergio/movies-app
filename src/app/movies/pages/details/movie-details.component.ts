import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MoviesService } from '../../services/movies-service.service';
import { switchMap } from 'rxjs';

import { Movie } from '../../interfaces/movies.interface';
import { Cast } from '../../../cast/interfaces/cast.interface';

@Component({
  selector: 'movie-details-component',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  movie?: Movie;

  constructor(
    private moviesService: MoviesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.moviesService.getMovieDetails(id)))
      .subscribe((movie) => {
        if (!movie) return this.router.navigateByUrl('');

        return (this.movie = movie);
      });
  }
}
