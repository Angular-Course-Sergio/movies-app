import { Component } from '@angular/core';
import { MoviesService } from '../../../movies/services/movies-service.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  constructor(private moviesService: MoviesService) {}

  get tags() {
    return this.moviesService.tagsHistory;
  }

  researchTag(tag: string) {
    this.moviesService.searchTag(tag);
  }
}
