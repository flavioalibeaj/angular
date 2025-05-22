import { Component, input } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { AsyncPipe } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { IFormModel } from '../../model/i-form-model.interface';
import { MatError, MatHint } from '@angular/material/form-field';
import { HandleFieldErrorPipe } from '../../pipes/handle-field-error.pipe';

@Component({
  selector: 'slider-input',
  imports: [
    MatSliderModule,
    AsyncPipe,
    TranslatePipe,
    ReactiveFormsModule,
    MatHint,
    MatError,
    HandleFieldErrorPipe,
  ],
  template: `
    @let errorMessage = control() | handleFieldError | async;

    <label [id]="'slider-label' + input().baseFields.label">{{
      input().baseFields.label | translate
    }}</label>
    <mat-slider
      [class]="input().baseFields.inputClass"
      [attr.aria-labelledby]="'slider-label' + input().baseFields.label"
      discrete
      [max]="input().sliderFields?.maxValue ?? 100"
      [min]="input().sliderFields?.minValue ?? 0"
      [step]="input().sliderFields?.stepValue ?? 1"
      [disabled]="input().baseFields.isReadonly"
    >
      @if(input().sliderFields?.rangeSecondField?.fieldName){
      <input [formControl]="control()" matSliderStartThumb />
      <input [formControl]="rangeControl()!" matSliderEndThumb />
      } @else {
      <input matSliderThumb [formControl]="control()" />
      }
    </mat-slider>
    @if (input().baseFields.hint) {
    <mat-hint>{{ input().baseFields.hint }}</mat-hint>
    } @if(errorMessage){
    <mat-error>{{ errorMessage }}</mat-error>
    }
  `,
})
export class SliderInputComponent {
  readonly input = input.required<IFormModel>();
  readonly control = input.required<FormControl>();
  readonly rangeControl = input<FormControl>();
}
