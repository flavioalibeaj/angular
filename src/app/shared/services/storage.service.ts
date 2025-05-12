import { Injectable } from '@angular/core';
import { StorageKeys } from '../model/storage-keys.enum';
import { IViewUser } from '../../core/model/i-view-user.interface';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  static get language(): string | null {
    return localStorage.getItem(StorageKeys.LANGUAGE);
  }

  static set language(value: string) {
    localStorage.setItem(StorageKeys.LANGUAGE, value);
  }

  static get currentUser(): IViewUser | null {
    const user = localStorage.getItem(StorageKeys.CURRENT_USER);

    return user ? JSON.parse(user) : null;
  }

  static set currentUser(user: IViewUser) {
    localStorage.setItem(StorageKeys.CURRENT_USER, JSON.stringify(user));
  }

  static removeCurrentUser(): void {
    localStorage.removeItem(StorageKeys.CURRENT_USER);
  }

  static get accessToken(): string | null {
    return localStorage.getItem(StorageKeys.ACCESS_TOKEN);
  }

  static set accessToken(token: string) {
    localStorage.setItem(StorageKeys.ACCESS_TOKEN, token);
  }

  static removeAccessToken(): void {
    localStorage.removeItem(StorageKeys.ACCESS_TOKEN);
  }
}
