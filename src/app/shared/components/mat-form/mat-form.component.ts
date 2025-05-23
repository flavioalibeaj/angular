import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  output,
} from '@angular/core';
import { IFormModel } from '../../model/i-form-model.interface';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { IFormResponse } from '../../model/i-form-response.interface';
import { take } from 'rxjs';
import { NgTemplateOutlet } from '@angular/common';
import { FieldType } from '../../model/field-type.enum';
import { TextInputComponent } from '../text-input/text-input.component';
import { FormControlPipe } from '../../pipes/form-control.pipe';
import { TextAreaInputComponent } from '../text-area-input/text-area-input.component';
import { NumberInputComponent } from '../number-input/number-input.component';
import { AutocompleteInputComponent } from '../autocomplete-input/autocomplete-input.component';
import { PasswordInputComponent } from '../password-input/password-input.component';
import { SliderInputComponent } from '../slider-input/slider-input.component';
import { CheckboxInputComponent } from '../checkbox-input/checkbox-input.component';
import { SlideToggleInputComponent } from '../slide-toggle-input/slide-toggle-input.component';
import { ColorInputComponent } from '../color-input/color-input.component';
import { RadioInputComponent } from '../radio-input/radio-input.component';
import { DateRangeInputComponent } from '../date-range-input/date-range-input.component';
import { DatePickerInputComponent } from '../date-picker-input/date-picker-input.component';
import { TimePickerInputComponent } from '../time-picker-input/time-picker-input.component';
import { SelectInputComponent } from '../select-input/select-input.component';
import { FileInputComponent } from '../file-input/file-input.component';
import { MultiSelectAutoCompleteInputComponent } from '../multi-select-auto-complete-input/multi-select-auto-complete-input.component';
import { MatDialogClose } from '@angular/material/dialog';
import { PhoneNumberInputComponent } from '../phone-number-input/phone-number-input.component';

@Component({
  selector: 'app-mat-form',
  imports: [
    ReactiveFormsModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    TranslatePipe,
    NgTemplateOutlet,
    FormControlPipe,
    TextInputComponent,
    TextAreaInputComponent,
    NumberInputComponent,
    AutocompleteInputComponent,
    PasswordInputComponent,
    SliderInputComponent,
    CheckboxInputComponent,
    SlideToggleInputComponent,
    ColorInputComponent,
    RadioInputComponent,
    DateRangeInputComponent,
    DatePickerInputComponent,
    TimePickerInputComponent,
    SelectInputComponent,
    FileInputComponent,
    MultiSelectAutoCompleteInputComponent,
    MatDialogClose,
    PhoneNumberInputComponent,
  ],
  templateUrl: './mat-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatFormComponent<T> {
  readonly #translateService = inject(TranslateService);

  readonly formModel = input.required<IFormModel[]>();
  readonly cancelButtonIcon = input<string>('close');
  readonly submitButtonIcon = input<string>('check');
  readonly cancelButtonText = input<string>('GENERAL.close');
  readonly submitButtonText = input<string>('GENERAL.save');
  readonly formClass = input<string>();
  readonly actionsClass = input<string>('w-100 d-flex gap-3');
  readonly submitButtonClass = input<string>();
  readonly showCancelBtn = input<boolean>();
  readonly hideSubmitBtn = input<boolean>();
  readonly contentProjection = input<boolean>();

  readonly formSubmit = output<IFormResponse<T>>();
  readonly formGroup = computed(() => this.#buildFormGroup());
  readonly #blackColor: string = '#000000';
  protected readonly FieldType: typeof FieldType = FieldType;

  onSubmit(): void {
    if (this.formGroup().invalid) {
      this.#translateService
        .stream('FORM.fill_valid_values')
        .pipe(take(1))
        .subscribe({
          next: (msg) => {
            throw new Error(msg);
          },
        });
      this.formGroup().markAllAsTouched();
      return;
    }

    this.formSubmit.emit({
      submitted: true,
      formData: this.formGroup().getRawValue() as T,
    });
  }

  #buildFormGroup() {
    const fg = new FormGroup({});

    this.formModel().forEach(({ baseFields, dateFields, sliderFields }) => {
      switch (baseFields.fieldType) {
        case FieldType.DATERANGE:
          fg.addControl(
            baseFields.fieldName,
            new FormControl(baseFields.fieldValue, baseFields.validators)
          );
          fg.addControl(
            dateFields?.rangeSecondField?.fieldName ?? '',
            new FormControl(
              dateFields?.rangeSecondField?.fieldValue,
              dateFields?.rangeSecondField?.validators
            )
          );
          break;

        case FieldType.COLOR:
          fg.addControl(
            baseFields.fieldName,
            new FormControl(baseFields.fieldValue ?? this.#blackColor, [
              ...(baseFields.validators ?? []),
              Validators.required,
              Validators.pattern(/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/),
            ])
          );
          break;

        case FieldType.CHECKBOX:
        case FieldType.SLIDETOGGLE:
          fg.addControl(
            baseFields.fieldName,
            new FormControl({
              disabled: baseFields.isReadonly,
              value: baseFields.fieldValue ?? false,
            })
          );
          break;

        case FieldType.SLIDER:
          fg.addControl(
            baseFields.fieldName,
            new FormControl(baseFields.fieldValue ?? 0, [
              ...(baseFields.validators ?? []),
              Validators.max(sliderFields?.maxValue ?? 100),
              Validators.min(sliderFields?.minValue ?? 0),
            ])
          );
          if (sliderFields?.rangeSecondField?.fieldName) {
            fg.addControl(
              sliderFields.rangeSecondField.fieldName,
              new FormControl(sliderFields.rangeSecondField.fieldValue ?? 100, [
                ...(baseFields.validators ?? []),
                Validators.max(sliderFields.maxValue ?? 100),
                Validators.min(sliderFields.minValue ?? 0),
              ])
            );
          }
          break;

        default:
          fg.addControl(
            baseFields.fieldName,
            new FormControl(
              { value: baseFields.fieldValue, disabled: baseFields.isReadonly },
              {
                validators: [
                  ...(baseFields.validators ?? []),
                  ...(baseFields.isRequired ? [Validators.required] : []),
                ],
                nonNullable: baseFields.isRequired,
              }
            )
          );
          break;
      }
    });

    return fg;
  }
}

// #buildFormGroup() {
//   const fg = new FormGroup({});

//   const addControl = (baseFields: IBaseFields) => {
//     fg.addControl(
//       baseFields.fieldName,
//       new FormControl(
//         { value: baseFields.fieldValue, disabled: baseFields.isReadonly },
//         {
//           validators: baseFields.validators,
//           nonNullable: baseFields.isRequired,
//         }
//       )
//     );
//   };

//   this.formModel().forEach(({ baseFields, dateFields, sliderFields }) => {
//     switch (baseFields.fieldType) {
//       case FieldType.DATERANGE:
//         addControl(baseFields);

//         if (dateFields?.rangeSecondField?.fieldName)
//           addControl({
//             ...baseFields,
//             fieldName: dateFields.rangeSecondField?.fieldName,
//             fieldValue: dateFields?.rangeSecondField?.fieldValue,
//             validators: dateFields?.rangeSecondField?.validators,
//           });

//         break;

//       case FieldType.COLOR:
//         addControl({
//           ...baseFields,
//           fieldValue: baseFields.fieldValue ?? this.#blackColor,
//           validators: [
//             ...(baseFields.validators ?? []),
//             Validators.required,
//             Validators.pattern(/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/),
//           ],
//         });
//         break;

//       case FieldType.CHECKBOX:
//       case FieldType.SLIDETOGGLE:
//         addControl({
//           ...baseFields,
//           fieldValue: baseFields.fieldValue ?? false,
//         });
//         break;

//       case FieldType.SLIDER:
//         addControl({
//           ...baseFields,
//           fieldValue: baseFields.fieldValue ?? 0,
//           validators: [
//             ...(baseFields.validators ?? []),
//             Validators.max(sliderFields?.maxValue ?? 100),
//             Validators.min(sliderFields?.minValue ?? 0),
//           ],
//         });

//         if (sliderFields?.rangeSecondField?.fieldName) {
//           addControl({
//             ...baseFields,
//             fieldName: sliderFields.rangeSecondField.fieldName,
//             fieldValue: sliderFields.rangeSecondField.fieldValue ?? 100,
//             validators: [
//               ...(baseFields.validators ?? []),
//               Validators.max(sliderFields.maxValue ?? 100),
//               Validators.min(sliderFields.minValue ?? 0),
//             ],
//           });
//         }
//         break;

//       default:
//         addControl(baseFields);
//         break;
//     }
//   });

//   return fg;
// }
