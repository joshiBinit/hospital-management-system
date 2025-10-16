import { NgModule } from '@angular/core';
import { DateInputComponent } from './components/inputs/date-input/date-input.component';
import { TextInputComponent } from './components/inputs/text-input/text-input.component';
import { SelectInputComponent } from './components/inputs/select-input/select-input.component';
import { FileInputComponent } from './components/inputs/file-input/file-input.component';

@NgModule({
  declarations: [],
  imports: [
    DateInputComponent,
    TextInputComponent,
    SelectInputComponent,
    FileInputComponent,
  ],
  exports: [
    DateInputComponent,
    TextInputComponent,
    SelectInputComponent,
    FileInputComponent,
  ],
})
export class SharedModule {}
