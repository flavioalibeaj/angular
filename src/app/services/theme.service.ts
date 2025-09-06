import { effect, inject, Injectable, signal, DOCUMENT } from '@angular/core';
import { ThemeType } from '../model/theme-type.enum';

import { ColorPalette } from '../model/color-palette';
import { ITheme } from '../model/i-theme.interface';
import { FormControl } from '@angular/forms';

// TODO ka problem me percaktimin e theme, nuk vihet ne pun nqs komponenti qe esht hap ne view nuk perdor kete servis
@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly #document = inject(DOCUMENT);

  readonly themes: readonly ITheme[] = [
    { palette: ColorPalette.RED, color: '#ffb4a8' },
    { palette: ColorPalette.GREEN, color: '#02e600' },
    { palette: ColorPalette.BLUE, color: '#bec2ff' },
    { palette: ColorPalette.YELLOW, color: '#cdcd00' },
    { palette: ColorPalette.CYAN, color: '#00dddd' },
    { palette: ColorPalette.MAGENTA, color: '#ffabf3' },
    { palette: ColorPalette.ORANGE, color: '#ffb787' },
    { palette: ColorPalette.AZURE, color: '#abc7ff' },
    { palette: ColorPalette.CHARTREUSE, color: '#70e000' },
    { palette: ColorPalette.SPRING_GREEN, color: '#00e472' },
    { palette: ColorPalette.VIOLET, color: '#d5baff' },
    { palette: ColorPalette.ROSE, color: '#ffb1c5' },
  ];

  // readonly #currentTheme = signal<ThemeType>(
  //   localStorage.getItem('theme')
  //     ? (localStorage.getItem('theme') as ThemeType)
  //     : ThemeType.LIGHT
  // );

  // readonly currentTheme = this.#currentTheme.asReadonly();

  // readonly #themeEffect = effect(() => {
  //   console.log('efekt');
  //   const currentTheme = this.#currentTheme();
  //   localStorage.setItem('theme', currentTheme);

  //   currentTheme === ThemeType.DARK
  //     ? this.#document.body.classList.add(ThemeType.DARK)
  //     : this.#document.body.classList.remove(ThemeType.DARK);
  // });

  // toggleTheme() {
  //   const currentTheme = this.#currentTheme();
  //   const newTheme =
  //     currentTheme === ThemeType.LIGHT ? ThemeType.DARK : ThemeType.LIGHT;
  //   this.#currentTheme.set(newTheme);
  // }

  readonly #currentTheme = signal<ThemeType>(ThemeType.LIGHT);
  readonly #currentPalette = signal<ColorPalette>(ColorPalette.AZURE);
  readonly darkMode = new FormControl<boolean>(false);

  constructor() {
    effect(() => {
      this.#document.body.classList.toggle(
        ThemeType.DARK,
        this.#currentTheme() === ThemeType.DARK
      );
      this.#document.body.classList.remove(
        ...this.themes.map((t) => `${t.palette}`)
      );
      this.#document.body.classList.add(`${this.#currentPalette()}`);
    });
  }

  setThemeType(isChecked: boolean) {
    this.#currentTheme.set(isChecked ? ThemeType.DARK : ThemeType.LIGHT);
  }

  setThemeColor(palette: ColorPalette) {
    this.#currentPalette.set(palette);
  }
}
