import { inject, Injectable } from '@angular/core';
import { StorageKeys } from '../model/storage-keys.enum';
import { IViewUser } from '../../core/model/i-view-user.interface';
import { LOCAL_STORAGE } from '../tokens/local-storage.token';
import { ThemeType } from '../model/theme-type.enum';
import { ColorPalette } from '../model/color-palette';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  readonly #storage = inject(LOCAL_STORAGE);

  get language(): string | null {
    return this.#storage.getItem(StorageKeys.LANGUAGE);
  }

  set language(value: string) {
    this.#storage.setItem(StorageKeys.LANGUAGE, value);
  }

  get currentUser(): IViewUser | null {
    const user = this.#storage.getItem(StorageKeys.CURRENT_USER);

    return user ? JSON.parse(user) : null;
  }

  set currentUser(user: IViewUser) {
    this.#storage.setItem(StorageKeys.CURRENT_USER, JSON.stringify(user));
  }

  removeCurrentUser(): void {
    this.#storage.removeItem(StorageKeys.CURRENT_USER);
  }

  get accessToken(): string | null {
    return this.#storage.getItem(StorageKeys.ACCESS_TOKEN);
  }

  set accessToken(token: string) {
    this.#storage.setItem(StorageKeys.ACCESS_TOKEN, token);
  }

  removeAccessToken(): void {
    this.#storage.removeItem(StorageKeys.ACCESS_TOKEN);
  }

  set themeType(theme: ThemeType) {
    this.#storage.setItem(StorageKeys.THEME_TYPE, theme);
  }

  get themeType(): string | null {
    return this.#storage.getItem(StorageKeys.THEME_TYPE);
  }

  set colorPalette(palette: ColorPalette) {
    this.#storage.setItem(StorageKeys.COLOR_PALETTE, palette);
  }

  get colorPalette(): string | null {
    return this.#storage.getItem(StorageKeys.COLOR_PALETTE);
  }
}
