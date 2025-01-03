import { AsyncPipe } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TranslatePipe } from '@ngx-translate/core';
import { GenericService } from '../../services/generic.service';
import { IFormModel } from '../../model/i-form-model.interface';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'password-input',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    AsyncPipe,
    TranslatePipe,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  template: `
    @let errorMessage = genericService.handleErrors(control()) | async;
    <div [class]="input().containerClass">
      <mat-form-field [class]="input().inputClass">
        <mat-label> {{ input().label | translate }} </mat-label>
        <input
          matInput
          [type]="hidePassword ? 'password' : 'text'"
          [formControl]="control()"
        />
        @if (!input().hidePasswordToggle) {
        <button
          mat-icon-button
          matSuffix
          type="button"
          (click)="toggleVisibility($event)"
          [attr.aria-label]="'Hide password'"
          [attr.aria-pressed]="hidePassword"
        >
          <mat-icon>{{
            hidePassword ? 'visibility_off' : 'visibility'
          }}</mat-icon>
        </button>
        } @if (errorMessage) {
        <mat-error>{{ errorMessage }}</mat-error>
        }
      </mat-form-field>
    </div>
  `,
})
export class PasswordInputComponent {
  protected readonly genericService = inject(GenericService);

  readonly input = input.required<IFormModel>();
  readonly control = input.required<FormControl>();

  protected hidePassword: boolean = true;

  toggleVisibility(event: MouseEvent): void {
    event.stopPropagation();
    this.hidePassword = !this.hidePassword;
  }
}
