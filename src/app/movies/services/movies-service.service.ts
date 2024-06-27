import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Movie, SearchResponse } from '../interfaces/movies.interface';
import { CastResponse } from '../../cast/interfaces/cast.interface';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  public movieList: Movie[] = [];

  private _tagHistory: string[] = [];

  private apiKey: string =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NjM2ZGViMThjYjE1MWMxNzhlOWFjMDRiZmQwOWMxNSIsIm5iZiI6MTcxOTUwMjUzOS44MjY3MjQsInN1YiI6IjY0ZjlmNWMwYTg0YTQ3MDBhZDM3OTJlYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lEkcyKXdY-YF6dJikiLPZFm_OSKp33IccJNX1NCjdCQ';
  private url: string = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {
    this.readLocalStorage();
  }

  get tagsHistory() {
    return [...this._tagHistory];
  }

  private organizeHistory(tag: string) {
    tag = tag.toLocaleLowerCase();
    if (this._tagHistory.includes(tag)) {
      this._tagHistory = this._tagHistory.filter((oldTag) => oldTag !== tag);
    }

    this._tagHistory.unshift(tag);

    this._tagHistory = this._tagHistory.slice(0, 10);
    this.saveLocalStorage();
  }

  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagHistory));
  }

  private readLocalStorage(): void {
    if (!localStorage.getItem('history')) return;
    this._tagHistory = JSON.parse(localStorage.getItem('history')!);

    if (this._tagHistory.length === 0) return;
    this.searchTag(this._tagHistory[0]);
  }

  searchTag(tag: string): void {
    if (tag.length === 0) return;
    this.organizeHistory(tag);

    this.http
      .get<SearchResponse>(`${this.url}/search/movie?query=${tag}`, {
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
        },
      })
      .subscribe((resp) => {
        this.movieList = resp.results;
      });
  }

  getMovieDetails(movieId: number): Observable<Movie> {
    const url = `${this.url}/movie/${movieId}`;

    return this.http.get<Movie>(url, {
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
      },
    });
  }

  getCast(movieId: number): Observable<CastResponse> {
    const url = `${this.url}/movie/${movieId}/credits`;

    return this.http.get<CastResponse>(url, {
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
      },
    });
  }
}
