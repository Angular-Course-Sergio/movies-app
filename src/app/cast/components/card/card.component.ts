import { Component, OnInit, Input } from '@angular/core';
import { Cast } from '../../interfaces/cast.interface';

@Component({
  selector: 'cast-card',
  templateUrl: './card.component.html',
})
export class CastCardComponent implements OnInit {
  @Input() public actor!: Cast;

  ngOnInit(): void {
    if (!this.actor) throw new Error('Actor property is required');
  }
}
