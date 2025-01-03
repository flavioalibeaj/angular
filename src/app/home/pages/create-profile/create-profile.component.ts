import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../../core/services/user.service';
import { BehaviorSubject, switchMap, take } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { ProfileService } from '../profile/services/profile.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-create-profile',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    AsyncPipe,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    TranslatePipe,
  ],
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
export class CreateProfileComponent implements OnInit {
  readonly #userService = inject(UserService);
  readonly #profileService = inject(ProfileService);
  readonly #translateService = inject(TranslateService);

  readonly #getUserSubject = new BehaviorSubject<void>(undefined);
  readonly user = this.#getUserSubject
    .asObservable()
    .pipe(switchMap(() => this.#userService.getMe()));

  readonly createProfileFG = new FormGroup({
    firstName: new FormControl<string | undefined>(
      undefined,
      Validators.required
    ),
    lastName: new FormControl<string | undefined>(
      undefined,
      Validators.required
    ),
    bio: new FormControl<string | undefined>(undefined),
    phoneNumber: new FormControl<string | undefined>(undefined), // TODO validate phone numbers
    // profilePicture: new FormControl<string | undefined>(undefined), // TODO add profile pic
  });

  ngOnInit(): void {
    this.#getUserSubject.next();
  }

  createProfile() {
    if (!this.createProfileFG.valid) {
      this.#translateService
        .stream('FORM.FILL_VALID_VALUES')
        .pipe(take(1))
        .subscribe({
          next: (msg) => {
            throw new Error(msg);
          },
        });

      return;
    }

    const { bio, firstName, lastName, phoneNumber } =
      this.createProfileFG.getRawValue();

    this.#profileService
      .createProfile({
        firstName: firstName!,
        lastName: lastName!,
        phoneNumber: phoneNumber ?? undefined,
        bio: bio ?? undefined,
      })
      .subscribe();
  }

  // onFileChange(event: any) {
  //   this.createProfileFG
  //     .get('profilePicture')
  //     ?.setValue(event.target.files[0].name);
  // }
}
