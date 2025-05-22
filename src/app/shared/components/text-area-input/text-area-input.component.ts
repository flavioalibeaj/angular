import { Component, input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TranslatePipe } from '@ngx-translate/core';
import { IFormModel } from '../../model/i-form-model.interface';
import { AsyncPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ClickStopPropagationDirective } from '../../directives/click-stop-propagation.directive';
import { HandleFieldErrorPipe } from '../../pipes/handle-field-error.pipe';

@Component({
  selector: 'text-area-input',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    TranslatePipe,
    AsyncPipe,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    ClickStopPropagationDirective,
    HandleFieldErrorPipe,
  ],
  template: `
    @let errorMessage = control() | handleFieldError | async;

    <mat-form-field [class]="input().baseFields.inputClass">
      <mat-label> {{ input().baseFields.label | translate }} </mat-label>
      <textarea
        matInput
        type="text"
        [formControl]="control()"
        [readonly]="input().baseFields.isReadonly"
      ></textarea>
      @if (input().baseFields.hint) {
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
export class TextAreaInputComponent {
  readonly input = input.required<IFormModel>();
  readonly control = input.required<FormControl>();
}
