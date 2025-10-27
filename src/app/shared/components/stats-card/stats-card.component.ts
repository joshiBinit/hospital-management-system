import { Component, Input } from '@angular/core';
import { MaterialModule } from '../../material/material.module';

@Component({
  selector: 'app-stats-card',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './stats-card.component.html',
  styleUrl: './stats-card.component.scss',
})
export class StatsCardComponent {
  @Input() icon = '';
  @Input() label = '';
  @Input() value: number | string = '';
}
