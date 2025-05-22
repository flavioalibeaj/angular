import { AsyncPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { TranslatePipe } from '@ngx-translate/core';
import { IFormModel } from '../../model/i-form-model.interface';
import { ClickStopPropagationDirective } from '../../directives/click-stop-propagation.directive';
import { HandleFieldErrorPipe } from '../../pipes/handle-field-error.pipe';

@Component({
  selector: 'date-range-input',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    TranslatePipe,
    AsyncPipe,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    ClickStopPropagationDirective,
    HandleFieldErrorPipe,
  ],
  template: `
    @let errorMessage = control() | handleFieldError| async; @let
    isClearValueShown = !input().baseFields.isReadonly &&
    input().baseFields.clearFieldValue && control().value &&
    rangeControl().value;

    <mat-form-field [class]="input().baseFields.inputClass">
      <mat-label> {{ input().baseFields.label | translate }} </mat-label>
      <mat-date-range-input
        [min]="input().dateFields?.minDate"
        [max]="input().dateFields?.maxDate"
        [rangePicker]="picker"
      >
        <input
          matStartDate
          [formControl]="control()"
          [readonly]="input().baseFields.isReadonly"
        />
        <input
          matEndDate
          [formControl]="rangeControl()"
          [readonly]="input().baseFields.isReadonly"
        />
      </mat-date-range-input>
      <mat-datepicker-toggle
        matIconSuffix
        [for]="picker"
        [disabled]="input().baseFields.isReadonly"
      />
      <mat-date-range-picker #picker />
      @if (input().baseFields.hint) {
      <mat-hint>{{ input().baseFields.hint }}</mat-hint>
      } @if (isClearValueShown) {
      <button
        matSuffix
        type="button"
        mat-icon-button
        aria-label="Clear"
        click-stop-propagation
        (click)="clearInputValue()"
      >
        <mat-icon>close</mat-icon>
      </button>
      } @if(errorMessage){
      <mat-error>{{ errorMessage }}</mat-error>
      }
    </mat-form-field>
  `,
})
export class DateRangeInputComponent {
  readonly control = input.required<FormControl>();
  readonly rangeControl = input.required<FormControl>();
  readonly input = input.required<IFormModel>();

  clearInputValue() {
    this.rangeControl().setValue(null);
    this.control().setValue(null);
  }
}
