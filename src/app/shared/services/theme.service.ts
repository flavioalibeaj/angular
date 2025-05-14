import { effect, inject, Injectable, signal } from '@angular/core';
import { ThemeType } from '../model/theme-type.enum';
import { DOCUMENT } from '@angular/common';
import { ColorPalette } from '../model/color-palette';
import { ITheme } from '../model/i-theme.interface';
import { FormControl } from '@angular/forms';
import { StorageService } from './storage.service';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly #document = inject(DOCUMENT);
  readonly #storage = inject(StorageService);

  readonly themes: readonly ITheme[] = [
    { palette: ColorPalette.RED, color: '#ffb4a8' },
    // { palette: ColorPalette.GREEN, color: '#02e600' },
    // { palette: ColorPalette.BLUE, color: '#bec2ff' },
    // { palette: ColorPalette.YELLOW, color: '#cdcd00' },
    { palette: ColorPalette.CYAN, color: '#00dddd' },
    { palette: ColorPalette.MAGENTA, color: '#ffabf3' },
    { palette: ColorPalette.ORANGE, color: '#ffb787' },
    { palette: ColorPalette.AZURE, color: '#abc7ff' },
    // { palette: ColorPalette.CHARTREUSE, color: '#70e000' },
    // { palette: ColorPalette.SPRING_GREEN, color: '#00e472' },
    { palette: ColorPalette.VIOLET, color: '#d5baff' },
    { palette: ColorPalette.ROSE, color: '#ffb1c5' },
  ];

  readonly darkMode = new FormControl<boolean>(
    this.#storage.themeType === ThemeType.DARK
  );
  readonly #currentTheme = signal<ThemeType>(
    this.darkMode.value ? ThemeType.DARK : ThemeType.LIGHT
  );
  readonly #currentPalette = signal<ColorPalette>(
    <ColorPalette>this.#storage.colorPalette ?? ColorPalette.AZURE
  );
  readonly currentPalette = this.#currentPalette.asReadonly();

  constructor() {
    effect(() => {
      this.#document.body.classList.toggle(
        ThemeType.DARK,
        this.#currentTheme() === ThemeType.DARK
      );
      this.#storage.themeType = this.#currentTheme();

      this.#document.body.classList.remove(
        ...this.themes.map((t) => `${t.palette}`)
      );
      this.#document.body.classList.add(`${this.#currentPalette()}`);
      this.#storage.colorPalette = this.#currentPalette();
    });
  }

  setThemeType(isChecked: boolean) {
    this.#currentTheme.set(isChecked ? ThemeType.DARK : ThemeType.LIGHT);
  }

  setColorPalette(palette: ColorPalette) {
    this.#currentPalette.set(palette);
  }
}
