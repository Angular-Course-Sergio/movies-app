import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LazyImageComponent } from './components/lazy-image/lazy-image.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [SidebarComponent, LazyImageComponent],
  imports: [CommonModule, RouterModule],
  exports: [SidebarComponent, LazyImageComponent],
})
export class SharedModule {}
