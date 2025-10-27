import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LayoutConfig } from '../types';

@Injectable({
  providedIn: 'root',
})
export class LayoutConfigService {
  private _layoutConfig$ = new BehaviorSubject<LayoutConfig>({
    title: 'App',
    actions: [],
    menuItems: [],
  });
  layoutConfig$ = this._layoutConfig$.asObservable();

  getLayout(): LayoutConfig {
    return this._layoutConfig$.getValue();
  }

  setLayout(config: LayoutConfig): void {
    this._layoutConfig$.next(config);
  }

  resetLayout(): void {
    this._layoutConfig$.next({
      title: 'App',
      actions: [],
      menuItems: [],
    });
  }
}
