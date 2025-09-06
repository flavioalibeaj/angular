import { inject, Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { FieldType } from '../model/field-type.enum';
import { IFormModel } from '../model/i-form-model.interface';
import { IFormResponse } from '../model/i-form-response.interface';
import { AuthService } from './auth.service';

@Injectable()
export class RegisterService {
  readonly #authService = inject(AuthService);

  readonly formModel: IFormModel[] = [
    {
      fieldType: FieldType.TEXT,
      fieldName: 'username',
      label: 'AUTH.username',
      validators: [Validators.required],
      inputClass: 'w-100',
    },
    {
      fieldType: FieldType.PASSWORD,
      fieldName: 'password',
      label: 'AUTH.password',
      validators: [Validators.required, Validators.minLength(8)],
      inputClass: 'w-100',
    },
    {
      fieldType: FieldType.PASSWORD,
      fieldName: 'confirmPassword',
      label: 'AUTH.confirm_password',
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
