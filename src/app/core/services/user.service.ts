import { effect, inject, Injectable, signal } from '@angular/core';
import { IViewUser } from '../model/i-view-user.interface';
import { HttpService } from '../../shared/services/http.service';
import { USER_ENDPOINTS } from '../../shared/endpoints/endpoints';
import { map, tap } from 'rxjs';
import { StorageService } from '../../shared/services/storage.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  readonly #httpService = inject(HttpService);

  readonly #user = signal<IViewUser | null>(StorageService.currentUser);
  readonly user = this.#user.asReadonly();

  constructor() {
    effect(() => {
      const currentUser = this.#user();

      if (currentUser) {
        StorageService.currentUser = currentUser;
      } else {
        StorageService.removeCurrentUser();
      }
    });
  }

  setUser(user: IViewUser | null) {
    this.#user.set(user);
  }

  getMe() {
    return this.#httpService
      .getById<string, IViewUser>(USER_ENDPOINTS.get, this.#user()?.id ?? '')
      .pipe(
        tap((res) => this.setUser(res.data ?? null)),
        map((res) => res.data)
      );
  }
}
