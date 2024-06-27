import { NgModule } from '@angular/core';

import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardComponent } from './components/card/card.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SearchBoxComponent, CardComponent],
  imports: [SharedModule],
  exports: [],
})
export class MoviesModule {}
