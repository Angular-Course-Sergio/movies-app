import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'movies-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput')
  tagInput!: ElementRef<HTMLInputElement>;

  constructor() {}

  searchTag() {
    const newTag = this.tagInput.nativeElement.value;
    // servicio
    this.tagInput.nativeElement.value = '';
  }
}
