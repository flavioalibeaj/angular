import { Component, inject, OnInit, viewChild } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { switchMap, take } from 'rxjs';
import { AuthService } from '../../../../core/services/auth.service';
import { MatFormComponent } from '../../../../shared/components/mat-form/mat-form.component';
import { FieldType } from '../../../../shared/model/field-type.enum';
import { IFormModel } from '../../../../shared/model/i-form-model.interface';
import { IFormResponse } from '../../../../shared/model/i-form-response.interface';

@Component({
  selector: 'app-login',
  imports: [
    MatCardHeader,
    MatCardTitle,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    RouterLink,
    TranslatePipe,
    MatFormComponent,
  ],
  template: `
    <mat-card-header class="justify-content-center">
      <mat-card-title>{{ 'AUTH.LOGIN' | translate }}</mat-card-title>
    </mat-card-header>
    <app-mat-form
      [formModel]="formModel"
      formClass="px-3 mt-4 d-flex flex-column justify-content-center"
      actionsClass="flex-column gap-3"
      submitButtonText="AUTH.LOGIN"
      submitButtonIcon="login"
      submitButtonClass="w-100"
      [contentProjection]="true"
      (formSubmit)="login($event)"
    >
      <span class="text-danger" role="button" routerLink="../register">
        <a>
          {{ 'AUTH.NO_ACC_REGISTER' | translate }}
          <b class="text-decoration-underline">{{
            'AUTH.HERE' | translate
          }}</b></a
        >
      </span>
    </app-mat-form>
  `,
})
export class LoginComponent implements OnInit {
  readonly #authService = inject(AuthService);
  readonly matFormComponent = viewChild.required(MatFormComponent);

  readonly formModel: IFormModel[] = [
    {
      fieldType: FieldType.TEXT,
      fieldName: 'username',
      label: 'AUTH.USERNAME',
      inputClass: 'w-100',
      validators: [Validators.required],
    },
    {
      fieldType: FieldType.PASSWORD,
      fieldName: 'password',
      label: 'AUTH.PASSWORD',
      inputClass: 'w-100',
      validators: [Validators.required, Validators.minLength(8)],
    },
  ];

  ngOnInit(): void {
    this.#authService
      .getUsernameFromCache()
      .pipe(take(1))
      .subscribe((username) => {
        this.matFormComponent()
          .formGroup()
          .get(this.formModel[0].fieldName)
          ?.setValue(username);
      });
  }

  login({ formData }: IFormResponse<{ password: string; username: string }>) {
    if (!formData) return;
    const { password, username } = formData;

    this.#authService
      .login({ password: password, username: username })
      .pipe(switchMap(() => this.#authService.setUsernameInCache(username)))
      .subscribe();
  }
}
