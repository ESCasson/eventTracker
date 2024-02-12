import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { BadgeModule } from 'primeng/badge';
import { IEvent } from '../../interfaces/Event';

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [CardModule, BadgeModule],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.scss'
})
export class EventCardComponent {
  @Input()
  event!: IEvent;
}
