import { inject, Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { Router } from '@angular/router';
import { PROFILE_ENDPOINTS } from '../endpoints/profile-endpoints';
import { ICreateProfile } from '../model/i-create-profile.interface';
import { ILoginResponse } from '../model/i-login-response.interface';
import { AuthService } from './auth.service';
import { HttpService } from './http.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  readonly #httpService = inject(HttpService);
  readonly #userService = inject(UserService);
  readonly #authservice = inject(AuthService);
  readonly #router = inject(Router);

  createProfile(fg: ICreateProfile) {
    return this.#httpService
      .post<ICreateProfile, ILoginResponse>(PROFILE_ENDPOINTS.createProfile, fg)
      .pipe(
        tap(({ data }) => {
          if (!data) return;

          const { accessToken, id, username, profileId } = data;

          this.#authservice.setToken(accessToken);
          this.#userService.setUser({
            id,
            username,
            profileId,
          });

          this.#router.navigate(['']);
        })
      );
  }
}
