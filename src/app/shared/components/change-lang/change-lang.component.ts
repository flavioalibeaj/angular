import { LowerCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'change-lang',
  imports: [
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule,
    TranslatePipe,
    LowerCasePipe,
  ],
  styles: [
    `
      @use '@angular/material' as mat;

      mat-icon {
        color: var(--mat-sys-on-primary-container);
      }
    `,
  ],
  template: `
    <button
      mat-icon-button
      [matMenuTriggerFor]="changeLanguageMenu"
      aria-label="Change language icon-button"
      [matTooltip]="'TOOLBAR.change_lang' | translate"
    >
      <mat-icon>translate</mat-icon>
    </button>

    <mat-menu #changeLanguageMenu xPosition="before">
      @for (lang of languages; track lang) {
      <button mat-menu-item class="pe-0" (click)="setLanguage(lang.code)">
        <div class="d-flex flex-row align-items-center gap-3">
          <span class="fi fi-{{ lang.img | lowercase }}"></span>
          {{ lang.label | translate }}
          @if (translateService.currentLang == lang.code) {
          <mat-icon>done</mat-icon>
          }
        </div>
      </button>
      }
    </mat-menu>
  `,
})
export class ChangeLangComponent {
  protected readonly translateService = inject(TranslateService);
  readonly #storage = inject(StorageService);

  protected readonly languages = [
    {
      label: 'LANGUAGES.albanian',
      code: 'al',
      img: 'AL',
    },
    {
      label: 'LANGUAGES.english',
      code: 'en',
      img: 'GB',
    },
  ];

  setLanguage(code: string) {
    this.translateService.use(code);
    this.#storage.language = code;
  }
}
