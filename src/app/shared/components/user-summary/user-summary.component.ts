import { Component, Input } from '@angular/core';
import { MaterialModule } from '../../material/material.module';

@Component({
  selector: 'app-user-summary',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './user-summary.component.html',
  styleUrl: './user-summary.component.scss',
})
export class UserSummaryComponent {
  @Input() users: any[] = [];
}
