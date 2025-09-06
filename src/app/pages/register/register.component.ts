import { Component, inject } from '@angular/core';
import { MatCardHeader, MatCardTitle } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { RegisterService } from '../../services/register.service';
import { MatFormComponent } from '../../components/mat-form/mat-form.component';

@Component({
  selector: 'app-register',
  imports: [
    MatCardHeader,
    MatCardTitle,
    RouterLink,
    TranslatePipe,
    MatFormComponent,
  ],
  providers: [RegisterService],
  template: `
    <mat-card-header class="justify-content-center">
      <mat-card-title>{{ 'AUTH.register' | translate }}</mat-card-title>
    </mat-card-header>
    <app-mat-form
      [formModel]="registerService.formModel"
      formClass="px-3 mt-4 d-flex flex-column justify-content-center"
      actionsClass="flex-column gap-3"
      submitButtonText="AUTH.register"
      submitButtonIcon="add"
      submitButtonClass="w-100"
      [contentProjection]="true"
      (formSubmit)="registerService.register($event)"
    >
      <span class="tertiary-color" role="button" routerLink="../login">
        <a
          >{{ 'AUTH.acc_login' | translate }}
          <b class="text-decoration-underline">{{
            'AUTH.here' | translate
          }}</b></a
        >
      </span>
    </app-mat-form>
  `,
})
export class RegisterComponent {
  readonly registerService = inject(RegisterService);
}
