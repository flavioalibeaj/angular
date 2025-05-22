import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ProfileService } from '../pages/profile/services/profile.service';
import { IFormModel } from '../../../shared/model/i-form-model.interface';
import { FieldType } from '../../../shared/model/field-type.enum';

@Injectable()
export class CreateProfileService {
  readonly #profileService = inject(ProfileService);
  readonly #translateService = inject(TranslateService);

  readonly firstNameInput: IFormModel = {
    baseFields: {
      fieldName: 'firstName',
      fieldType: FieldType.TEXT,
      label: 'PROFILE.first_name',
      inputClass: 'w-100',
    },
  };

  readonly lastNameInput: IFormModel = {
    baseFields: {
      fieldName: 'lastName',
      fieldType: FieldType.TEXT,
      label: 'PROFILE.last_name',
      inputClass: 'w-100',
    },
  };

  readonly phoneNumberInput: IFormModel = {
    baseFields: {
      fieldName: 'phoneNumber',
      fieldType: FieldType.PHONENUMBER,
      label: 'PROFILE.phone_number',
      inputClass: 'w-100',
    },
  };

  readonly textAreaInput: IFormModel = {
    baseFields: {
      fieldName: 'bio',
      fieldType: FieldType.TEXTAREA,
      label: 'PROFILE.biography',
      inputClass: 'w-100',
    },
  };

  readonly #getUserSubject = new BehaviorSubject<void>(undefined);
  readonly getUser$ = this.#getUserSubject.asObservable();

  readonly fg = new FormGroup({
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

  createProfile() {
    if (!this.fg.valid) {
      this.#translateService
        .stream('FORM.fill_valid_values')
        .pipe(take(1))
        .subscribe({
          next: (msg) => {
            throw new Error(msg);
          },
        });

      return;
    }

    const { bio, firstName, lastName, phoneNumber } = this.fg.getRawValue();

    this.#profileService
      .createProfile({
        firstName: firstName!,
        lastName: lastName!,
        phoneNumber: phoneNumber ?? undefined,
        bio: bio ?? undefined,
      })
      .subscribe();
  }
}
