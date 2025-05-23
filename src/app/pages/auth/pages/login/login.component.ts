import { Component, inject, OnInit, viewChild } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { map, of, switchMap, take } from 'rxjs';
import { AuthService } from '../../../../core/services/auth.service';
import { MatFormComponent } from '../../../../shared/components/mat-form/mat-form.component';
import { FieldType } from '../../../../shared/model/field-type.enum';
import { IFormModel } from '../../../../shared/model/i-form-model.interface';
import { IFormResponse } from '../../../../shared/model/i-form-response.interface';
import { IOption } from '../../../../shared/model/i-option.interface';
import { HttpService } from '../../../../shared/services/http.service';
import { HttpClient } from '@angular/common/http';

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
      <mat-card-title>{{ 'AUTH.login' | translate }}</mat-card-title>
    </mat-card-header>
    <app-mat-form
      [formModel]="formModel"
      formClass="px-3 mt-4 d-flex flex-column justify-content-center"
      actionsClass="flex-column gap-3"
      submitButtonText="AUTH.login"
      submitButtonIcon="login"
      submitButtonClass="w-100"
      [contentProjection]="true"
      (formSubmit)="login($event)"
    >
      <span class="tertiary-color" role="button" routerLink="../register">
        <a>
          {{ 'AUTH.no_acc_register' | translate }}
          <b class="text-decoration-underline">{{
            'AUTH.here' | translate
          }}</b></a
        >
      </span>
    </app-mat-form>
  `,
})
export class LoginComponent implements OnInit {
  readonly #authService = inject(AuthService);
  readonly matFormComponent = viewChild.required(MatFormComponent);
  http = inject(HttpClient);

  readonly formModel: IFormModel[] = [
    {
      baseFields: {
        fieldType: FieldType.SELECT,
        fieldName: 'todos',
        label: 'AUTH.todos',
        inputClass: 'w-100',
        // isReadonly: true,
        isRequired: true,
        clearFieldValue: true,
      },
      selectFields: {
        isMultiSelect: true,
        options: this.http
          .get<any>('https://jsonplaceholder.typicode.com/todos')
          .pipe(
            map<any[], IOption[]>((x) =>
              x.map((y) => ({ key: y.id, value: y.title }))
            )
          ),
      },
    },
  ];

  ngOnInit(): void {
    this.#authService
      .getUsernameFromCache()
      .pipe(take(1))
      .subscribe((username) => {
        this.matFormComponent()
          .formGroup()
          .get(this.formModel[0].baseFields.fieldName)
          ?.setValue(username);
      });
  }

  login({ formData }: IFormResponse<{ password: string; username: string }>) {
    // if (!formData) return;
    // const { password, username } = formData;

    // this.#authService
    //   .login({ password: password, username: username })
    //   .pipe(switchMap(() => this.#authService.setUsernameInCache(username)))
    //   .subscribe();

    console.log(formData);
  }
}
