import { Component, input } from '@angular/core';
import { IFormModel } from '../../model/i-form-model.interface';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatError, MatHint } from '@angular/material/form-field';
import { HandleFieldErrorPipe } from '../../pipes/handle-field-error.pipe';

@Component({
  selector: 'checkbox-input',
  imports: [
    AsyncPipe,
    TranslatePipe,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatHint,
    MatError,
    HandleFieldErrorPipe,
  ],
  template: `
    <mat-checkbox
      [class]="input().baseFields.inputClass"
      [formControl]="control()"
    >
      {{ input().baseFields.label | translate }}</mat-checkbox
    >
    @if (input().baseFields.hint) {
    <mat-hint>{{ input().baseFields.hint }}</mat-hint>
    } @let errorMessage = control() | handleFieldError| async;
    @if(errorMessage){
    <mat-error>{{ errorMessage }}</mat-error>
    }
  `,
})
export class CheckboxInputComponent {
  readonly input = input.required<IFormModel>();
  readonly control = input.required<FormControl>();
}
