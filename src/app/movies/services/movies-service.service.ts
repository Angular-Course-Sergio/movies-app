import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Movie, SearchResponse } from '../interfaces/movies.interface';

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

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('language', 'es-MX')
      .set('query', tag);

    this.http
      .get<SearchResponse>(`${this.url}/search/movie`, { params })
      .subscribe((resp) => {
        this.movieList = resp.data;
      });
  }
}
