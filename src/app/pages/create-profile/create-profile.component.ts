import { Component, inject } from '@angular/core';
import { switchMap } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { TranslatePipe } from '@ngx-translate/core';
import { PhoneNumberInputComponent } from '../../components/phone-number-input/phone-number-input.component';
import { TextAreaInputComponent } from '../../components/text-area-input/text-area-input.component';
import { TextInputComponent } from '../../components/text-input/text-input.component';
import { FormControlPipe } from '../../pipes/form-control.pipe';
import { CreateProfileService } from '../../services/create-profile.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-create-profile',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    AsyncPipe,
    ReactiveFormsModule,
    TranslatePipe,
    TextInputComponent,
    FormControlPipe,
    PhoneNumberInputComponent,
    TextAreaInputComponent,
  ],
  providers: [CreateProfileService],
  templateUrl: './create-profile.component.html',
  styles: [
    `
      mat-card-header {
        padding: 1rem;
      }

      @media (max-width: 768px) {
        mat-card-actions {
          button {
            margin: 0 3rem;
            width: 100%;
          }
        }
      }
    `,
  ],
})
export class CreateProfileComponent {
  readonly createProfileService = inject(CreateProfileService);
  readonly #userService = inject(UserService);

  readonly user = this.createProfileService.getUser$.pipe(
    switchMap(() => this.#userService.getMe())
  );
}
