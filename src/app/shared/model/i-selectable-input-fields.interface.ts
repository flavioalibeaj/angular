import { Observable } from 'rxjs';
import { IOption } from './i-option.interface';

export interface ISelectableInputFields {
  options?: IOption[] | Observable<IOption[]>;
  isMultiSelect?: boolean;
  radioOptions?: IOption[];
}
