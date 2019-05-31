import { Component, Input } from '@angular/core';
import { Card } from '../models/card.mode';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent {
  @Input() title: string;
  @Input() cards: Card[];
}
