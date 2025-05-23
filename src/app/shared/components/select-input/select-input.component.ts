import { Component, computed, effect, input } from '@angular/core';
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
import { MatOptionSelectionChange } from '@angular/material/core';
import { SelectionModel } from '@angular/cdk/collections';
import { IOption } from '../../model/i-option.interface';

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
  // host: { ngSkipHydration: 'true' },

  template: `
    <!-- 
    <mat-select [formControlName]="input.fieldName" [multiple]="input.isMultiSelect">
      @if (input.isMultiSelect) {
      <mat-option #allSelected (onSelectionChange)="onSelectAllToggle(input.fieldName, allSelected.selected, options)">
        {{"GENERAL.select_all" | translate}}</mat-option>
      @for (option of options; track option) {
      <mat-option [value]="option.key" [disabled]="input.isReadonly"
        (onSelectionChange)="onSelectionChange(allSelected.selected)">{{option.value}}</mat-option>
      }
      }
    </mat-select>
  -->

    @let errorMessage = control() | handleFieldError | async; @let isMultiSelect
    = input().selectFields?.isMultiSelect; @let options = input() | inputOptions
    | async;

    <mat-form-field [class]="input().baseFields.inputClass" ngSkipHydration>
      <mat-label> {{ input().baseFields.label | translate }} </mat-label>
      <mat-select [formControl]="control()" [multiple]="isMultiSelect">
        @if(isMultiSelect){
        <mat-option
          [disabled]="input().baseFields.isReadonly"
          (onSelectionChange)="selectionChange($event, options)"
          >te gjitha</mat-option
        >
        } @for (opt of options; track opt.key) {
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
      input().baseFields.clearFieldValue && (isMultiSelect ?
      control().value?.length : control().value)) {
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

  // readonly selectionModel = computed<SelectionModel<any> | undefined>(() => {
  //   if (!this.input().selectFields?.isMultiSelect) return undefined;

  //   return new SelectionModel(true, this.control().value);
  // });

  // selectionEffect = effect(() => console.log(this.selectionModel()));

  selectionChange(event: MatOptionSelectionChange, options: IOption[] | null) {
    const control = this.control();
    // console.log(event);
    // this.selectionModel.

    control.setValue(event.source.value ? options : []);
    console.log(control.value);
  }
}
