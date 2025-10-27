import { Component, HostListener } from '@angular/core';
import { HeaderAction, SidebarItem } from '../types';
import { LayoutConfigService } from '../services/layout.config.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-layout',
  standalone: false,
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {
  title = '';
  headerActions: HeaderAction[] = [];
  menuItems: SidebarItem[] = [];

  isSidebarOpen = false;
  isMobile = false;

  private layoutSubscription?: Subscription;

  // headerActions: HeaderAction[] = [
  //   { icon: 'account_circle', label: 'Profile', actionType: 'profile' },
  // ];

  constructor(private layoutService: LayoutConfigService) {}

  ngOnInit() {
    this.checkScreenSize();

    this.layoutSubscription = this.layoutService.layoutConfig$.subscribe(
      (config) => {
        this.title = config.title;
        this.headerActions = config.actions;
        this.menuItems = config.menuItems;
      }
    );
  }

  @HostListener('window:resize')
  checkScreenSize() {
    this.isMobile = window.innerWidth < 768;
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  onMenuItemClick() {
    if (this.isMobile) {
      this.isSidebarOpen = false;
    }
  }

  handleHeaderAction(action: string) {
    switch (action) {
      case 'logout':
        console.log('Open notifications panel');
        this.layoutService.resetLayout();
        break;
      case 'profile':
        console.log('Open profile menu');
        break;
    }
  }

  ngOnDestroy() {
    this.layoutSubscription?.unsubscribe();
  }
}
