import { ValidatorFn } from '@angular/forms';
import { FieldType } from './field-type.enum';

export interface IBaseFields {
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
  isRequired?: boolean;
}
