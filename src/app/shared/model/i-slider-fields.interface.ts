import { IBaseFields } from './i-form-base-fields.interface';

export interface ISliderFields {
  maxValue?: number;
  minValue?: number;
  stepValue?: number;
  rangeSecondField?: Pick<IBaseFields, 'fieldName' | 'fieldValue'>;
}
