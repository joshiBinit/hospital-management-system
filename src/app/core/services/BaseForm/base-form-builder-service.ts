import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControlOptions } from '@angular/forms';
import {
  disableControls,
  enableControls,
  resetControls,
} from '../../utils/form.utils';

@Injectable({
  providedIn: 'root',
})
export class BaseFormBuilderService {
  #formGroup?: FormGroup;

  protected constructor(protected fb: FormBuilder) {}

  get form(): FormGroup | undefined {
    return this.#formGroup;
  }
  protected set form(formGroup: FormGroup | undefined) {
    this.#formGroup = formGroup;
  }

  buildForm<T extends object>(
    config: T,
    options?: AbstractControlOptions | null
  ): FormGroup {
    this.form = this.fb.group(config, options);
    return this.form;
  }

  reset(): void {
    this.form?.reset();
  }

  hardReset(): void {
    this.form = undefined;
  }

  disableControls(controls: string[] | string): void {
    if (!this.form) return;
    disableControls(this.form, controls);
  }

  enableControls(controls: string[] | string): void {
    if (!this.form) return;
    enableControls(this.form, controls);
  }

  resetControls(controls: string[] | string): void {
    if (!this.form) return;
    resetControls(this.form, controls);
  }

  checkInvalidStatus(): boolean {
    this.applyTouchAndDirtyToForm();
    return this.form?.invalid ?? false;
  }

  protected applyTouchAndDirtyToForm(): void {
    this.form?.markAllAsTouched();
    this.form?.markAsDirty();
  }

  getFormValue<T>(): T {
    return this.form?.value as T;
  }
}
