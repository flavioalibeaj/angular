import { ValidatorFn } from '@angular/forms';
import { FieldType } from './field-type.enum';
import { IOption } from './i-option.interface';
import { Observable } from 'rxjs';

export interface IFormModel {
  baseFields: IBaseFields;
  dateFields?: IDateFields;
  sliderFields?: ISliderFields;
  passwordFields?: IPasswordFields;
  selectFields?: ISelectableInputFields;
}

interface IBaseFields {
  fieldName: string;
  fieldType: FieldType;
  label: string;
  fieldValue?: unknown;
  inputClass?: string;
  validators?: ValidatorFn[];
  isReadonly?: boolean;
  clearFieldValue?: boolean; // set true for optional fields
  hint?: string;
  prefixIcon?: string;
  suffixIcon?: string;
}

interface IDateFields {
  minDate?: Date;
  maxDate?: Date;
  rangeSecondField?: Pick<
    IBaseFields,
    'fieldName' | 'fieldValue' | 'validators'
  >;
}

interface IPasswordFields {
  hideToggle?: boolean;
}

interface ISliderFields {
  maxValue?: number;
  minValue?: number;
  stepValue?: number;
  rangeSecondField?: Pick<IBaseFields, 'fieldName' | 'fieldValue'>;
}

interface ISelectableInputFields {
  options?: IOption[] | Observable<IOption[]>;
  isObservable?: boolean; // set to true if the options being passed are a stream
  isMultiSelect?: boolean;
  radioOptions?: IOption[];
}
