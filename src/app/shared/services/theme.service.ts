import { effect, inject, Injectable, signal } from '@angular/core';
import { ThemeType } from '../model/theme-type.enum';
import { DOCUMENT } from '@angular/common';

// TODO add component for theme switching
@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly #document = inject(DOCUMENT);

  readonly #currentTheme = signal<ThemeType>(
    localStorage.getItem('theme')
      ? (localStorage.getItem('theme') as ThemeType)
      : ThemeType.LIGHT
  );

  readonly #themeEffect = effect(() => {
    const currentTheme = this.#currentTheme();
    localStorage.setItem('theme', currentTheme);

    currentTheme === ThemeType.DARK
      ? this.#document.body.classList.add(ThemeType.DARK)
      : this.#document.body.classList.remove(ThemeType.DARK);
  });

  toggleTheme() {
    const currentTheme = this.#currentTheme();
    const newTheme =
      currentTheme === ThemeType.LIGHT ? ThemeType.DARK : ThemeType.LIGHT;
    this.#currentTheme.set(newTheme);
  }
}
