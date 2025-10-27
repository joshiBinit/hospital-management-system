import { NgModule } from '@angular/core';
import { DateInputComponent } from './components/inputs/date-input/date-input.component';
import { TextInputComponent } from './components/inputs/text-input/text-input.component';
import { SelectInputComponent } from './components/inputs/select-input/select-input.component';
import { FileInputComponent } from './components/inputs/file-input/file-input.component';
import { StatsCardComponent } from './components/stats-card/stats-card.component';
import { UserSummaryComponent } from './components/user-summary/user-summary.component';
import { RevenueChartComponent } from './components/revenue-chart/revenue-chart.component';

@NgModule({
  declarations: [],
  imports: [
    DateInputComponent,
    TextInputComponent,
    SelectInputComponent,
    FileInputComponent,
    StatsCardComponent,
    UserSummaryComponent,
    RevenueChartComponent,
  ],
  exports: [
    DateInputComponent,
    TextInputComponent,
    SelectInputComponent,
    FileInputComponent,
    StatsCardComponent,
    UserSummaryComponent,
    RevenueChartComponent,
  ],
})
export class SharedModule {}
