import { NgModule } from '@angular/core';

import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardComponent } from './components/card/card.component';
import { SharedModule } from '../shared/shared.module';
import { CardListComponet } from './components/card-list/card-list.component';
import { HomePageComponent } from './pages/home/home-page.component';

@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    CardComponent,
    CardListComponet,
  ],
  imports: [SharedModule],
  exports: [HomePageComponent],
})
export class MoviesModule {}
