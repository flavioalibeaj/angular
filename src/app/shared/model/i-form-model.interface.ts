import { IBaseFields } from './i-form-base-fields.interface';
import { IDateFields } from './i-date-fields.interface';
import { ISliderFields } from './i-slider-fields.interface';
import { IPasswordFields } from './i-password-fields.interface';
import { ISelectableInputFields } from './i-selectable-input-fields.interface';

export interface IFormModel {
  baseFields: IBaseFields;
  dateFields?: IDateFields;
  sliderFields?: ISliderFields;
  passwordFields?: IPasswordFields;
  selectFields?: ISelectableInputFields;
}
