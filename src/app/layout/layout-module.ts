import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedModule } from '../shared/shared-module';
import { MaterialModule } from '../shared/material/material.module';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';

@NgModule({
  declarations: [SidebarComponent, HeaderComponent, MainLayoutComponent],
  imports: [CommonModule, SharedModule, MaterialModule, RouterModule],
})
export class LayoutModule {}
