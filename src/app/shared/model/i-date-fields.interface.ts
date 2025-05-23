import { IBaseFields } from './i-form-base-fields.interface';

export interface IDateFields {
  minDate?: Date;
  maxDate?: Date;
  rangeSecondField?: Pick<
    IBaseFields,
    'fieldName' | 'fieldValue' | 'validators'
  >;
}
