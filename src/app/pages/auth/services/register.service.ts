import { inject, Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { FieldType } from '../../../shared/model/field-type.enum';
import { IFormModel } from '../../../shared/model/i-form-model.interface';
import { IFormResponse } from '../../../shared/model/i-form-response.interface';

@Injectable()
export class RegisterService {
  readonly #authService = inject(AuthService);

  readonly formModel: IFormModel[] = [
    {
      fieldType: FieldType.TEXT,
      fieldName: 'username',
      label: 'AUTH.USERNAME',
      validators: [Validators.required],
      inputClass: 'w-100',
    },
    {
      fieldType: FieldType.PASSWORD,
      fieldName: 'password',
      label: 'AUTH.PASSWORD',
      validators: [Validators.required, Validators.minLength(8)],
      inputClass: 'w-100',
    },
    {
      fieldType: FieldType.PASSWORD,
      fieldName: 'confirmPassword',
      label: 'AUTH.CONFIRM_PASSWORD',
      validators: [Validators.required, Validators.minLength(8)],
      inputClass: 'w-100',
      hidePasswordToggle: true,
    },
  ];

  register({
    formData,
  }: IFormResponse<{
    username: string;
    password: string;
    confirmPassword: string;
  }>) {
    if (!formData) return;
    const { confirmPassword, password, username } = formData;

    this.#authService
      .register({
        confirmPassword,
        password,
        username,
      })
      ?.subscribe();
  }
}
