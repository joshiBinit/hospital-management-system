import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SidebarItem } from '../types';

@Component({
  selector: 'app-sidebar-component',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  @Output() menuItemClicked = new EventEmitter<void>();
  @Input() menuItems: SidebarItem[] = [];
}
