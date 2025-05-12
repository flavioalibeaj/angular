import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService } from '../../services/theme.service';
import { MatMenuModule } from '@angular/material/menu';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'theme-switch',
  imports: [
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
  ],
  styles: [
    `
      @use '@angular/material' as mat;

      mat-icon {
        color: var(--mat-sys-on-primary-container);
      }

      .color-preview {
        width: 20px;
        height: 20px;
        border-radius: 50%;
      }
    `,
  ],
  template: `
    <button mat-icon-button [matMenuTriggerFor]="menu">
      <mat-icon>format_color_fill</mat-icon>
    </button>

    <mat-menu #menu="matMenu" xPosition="before">
      <button mat-menu-item [matMenuTriggerFor]="themesMenu">Theme</button>
      <button mat-menu-item>
        <mat-slide-toggle
          [formControl]="themeService.darkMode"
          (change)="themeService.setThemeType($event.checked)"
          >Dark Mode</mat-slide-toggle
        >
      </button>
    </mat-menu>

    <mat-menu #themesMenu="matMenu">
      @for (theme of themeService.themes; track theme.color) {
      <button mat-menu-item (click)="themeService.setThemeColor(theme.palette)">
        <div class="d-flex gap-2 align-items-center">
          <div
            class="color-preview"
            [style.background-color]="theme.color"
          ></div>
          <span>{{ theme.palette }}</span>
        </div>
      </button>
      }
    </mat-menu>
  `,
})
export class ThemeSwitchComponent {
  readonly themeService = inject(ThemeService);
}
