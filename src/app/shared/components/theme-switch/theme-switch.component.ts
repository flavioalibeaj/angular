import { Component, computed, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService } from '../../services/theme.service';
import { ThemeType } from '../../model/theme-type.enum';

@Component({
  selector: 'theme-switch',
  imports: [MatButtonModule, MatIconModule],
  template: `
    <button mat-icon-button (click)="toggleTheme()">
      <mat-icon>{{ isLightMode() ? 'dark_mode' : 'light_mode' }}</mat-icon>
    </button>
  `,
})
export class ThemeSwitchComponent {
  readonly #themeService = inject(ThemeService);

  readonly isLightMode = computed(
    () => this.#themeService.currentTheme() === ThemeType.LIGHT
  );

  toggleTheme() {
    this.#themeService.toggleTheme();
  }
}
