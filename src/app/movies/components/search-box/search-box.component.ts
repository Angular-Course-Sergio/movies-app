import { Component, ElementRef, ViewChild } from '@angular/core';
import { MoviesService } from '../../services/movies-service.service';

@Component({
  selector: 'movies-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput')
  tagInput!: ElementRef<HTMLInputElement>;

  constructor(private moviesService: MoviesService) {}

  searchTag() {
    const newTag = this.tagInput.nativeElement.value;
    this.moviesService.searchTag(newTag);
    this.tagInput.nativeElement.value = '';
  }
}
