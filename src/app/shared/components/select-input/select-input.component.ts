import { Component, input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { IFormModel } from '../../model/i-form-model.interface';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { InputOptionsPipe } from '../../pipes/input-options.pipe';
import { AsyncPipe } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { ClickStopPropagationDirective } from '../../directives/click-stop-propagation.directive';
import { MatIconModule } from '@angular/material/icon';
import { HandleFieldErrorPipe } from '../../pipes/handle-field-error.pipe';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'select-input',
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    InputOptionsPipe,
    AsyncPipe,
    TranslatePipe,
    ReactiveFormsModule,
    ClickStopPropagationDirective,
    MatIconModule,
    HandleFieldErrorPipe,
    MatButtonModule,
  ],
  template: `
    @let errorMessage = control() | handleFieldError | async;

    <mat-form-field [class]="input().baseFields.inputClass">
      <mat-label> {{ input().baseFields.label | translate }} </mat-label>
      <mat-select [formControl]="control()">
        @for (opt of input() | inputOptions | async; track opt.key) {
        <mat-option
          [value]="opt.key"
          [disabled]="input().baseFields.isReadonly"
          >{{ opt.value }}</mat-option
        >
        }
      </mat-select>
      @if (input().baseFields.prefixIcon) {
      <mat-icon matPrefix>{{ input().baseFields.prefixIcon }}</mat-icon>
      } @if (input().baseFields.hint) {
      <mat-hint>{{ input().baseFields.hint }}</mat-hint>
      } @if (!input().baseFields.isReadonly &&
      input().baseFields.clearFieldValue && control().value) {
      <button
        matSuffix
        type="button"
        mat-icon-button
        aria-label="Clear"
        click-stop-propagation
        (click)="control().setValue(null)"
      >
        <mat-icon>close</mat-icon>
      </button>
      } @if(errorMessage){
      <mat-error>{{ errorMessage }}</mat-error>
      }
    </mat-form-field>
  `,
})
export class SelectInputComponent {
  readonly input = input.required<IFormModel>();
  readonly control = input.required<FormControl>();
}
