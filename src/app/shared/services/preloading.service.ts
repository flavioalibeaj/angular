import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PreloadingService implements PreloadingStrategy {
  readonly #platformId = inject(PLATFORM_ID);

  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    console.log('Preloading route:', route.path);
    return this.#hasBadConnection() ? of(null) : fn();
  }

  #hasBadConnection(): boolean {
    if (!isPlatformBrowser(this.#platformId)) return false;

    const effectiveType: string =
      (navigator as any).connection?.effectiveType ?? '';

    if (!effectiveType) return true;

    const slowConnections: string[] = ['slow-2g', '2g', '3g'];

    return slowConnections.includes(effectiveType);
  }
}
