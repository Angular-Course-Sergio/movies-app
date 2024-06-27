import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CastCardComponent } from './components/card/card.component';
import { CastCardListComponet } from './components/card-list/card-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CastCardComponent, CastCardListComponet],
  imports: [CommonModule, SharedModule],
  exports: [CastCardListComponet],
})
export class CastModule {}
