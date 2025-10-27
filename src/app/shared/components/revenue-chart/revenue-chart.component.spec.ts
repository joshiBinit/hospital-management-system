import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueChart } from './revenue-chart.component';

describe('RevenueChart', () => {
  let component: RevenueChart;
  let fixture: ComponentFixture<RevenueChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RevenueChart],
    }).compileComponents();

    fixture = TestBed.createComponent(RevenueChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
