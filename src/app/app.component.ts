import { Component, HostListener, inject, OnInit } from '@angular/core';
import {
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterOutlet,
} from '@angular/router';
import { delay, filter, tap } from 'rxjs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NgxSpinnerComponent, NgxSpinnerService } from 'ngx-spinner';
import { Title } from '@angular/platform-browser';
import { StorageService } from './shared/services/storage.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatProgressSpinnerModule,
    TranslateModule,
    NgxSpinnerComponent,
  ],
  template: `
    <router-outlet />
    <ngx-spinner
      bdColor="rgba(0, 0, 0, 0.8)"
      size="medium"
      color="#fff"
      type="ball-triangle-path"
      [fullScreen]="true"
      ><p style="color: white">Loading...</p></ngx-spinner
    >
  `,
})
export class AppComponent implements OnInit {
  readonly #router = inject(Router);
  readonly #translateService = inject(TranslateService);
  readonly #spinnerService = inject(NgxSpinnerService);
  readonly #titleService = inject(Title);
  readonly #storage = inject(StorageService);

  // Listen on document visibility
  @HostListener('document:visibilitychange')
  appVisibility = () =>
    this.#titleService.setTitle(
      document.hidden ? 'Get back here' : 'AngularApp'
    );

  ngOnInit(): void {
    // this.#listenToRouteEvents();
    this.#setUpAppLanguage();
  }

  #listenToRouteEvents() {
    this.#router.events
      .pipe(
        filter(
          (event) =>
            event instanceof NavigationStart ||
            event instanceof NavigationEnd ||
            event instanceof NavigationError
        ),
        tap((event) => {
          if (event instanceof NavigationStart) this.#spinnerService.show();

          // TODO handle navigation errors
          if (event instanceof NavigationError) {
            if (
              event.error instanceof Error &&
              event.error.name === 'ChunkLoadError'
            ) {
              console.warn('Error loading module');
              window.location.reload();
              // window.location.assign(event.url);
            }
            throw new Error(event.error);
          }
        }),
        filter((e) => e instanceof NavigationEnd),
        delay(300),
        tap(() => this.#spinnerService.hide())
      )
      .subscribe();
  }

  #setUpAppLanguage() {
    this.#translateService.addLangs(['en', 'al']);

    const lang =
      this.#storage.language ?? this.#translateService.getBrowserLang();
    const selectedLang = lang?.match(/al|en/) ? lang : 'en';

    this.#translateService.setDefaultLang(selectedLang);
    this.#storage.language = selectedLang;
    this.#translateService.use(selectedLang);
  }
}
