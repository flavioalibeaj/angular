import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject, PLATFORM_ID } from '@angular/core';
import { catchError, finalize, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { StorageService } from '../../shared/services/storage.service';
import { isPlatformBrowser } from '@angular/common';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const spinnerService = inject(NgxSpinnerService);
  const storage = inject(StorageService);
  const platformId = inject(PLATFORM_ID);

  spinnerService.show();

  const setHeaders: { [key: string]: string } = {
    'Accept-Language': storage.language ?? 'en',
    Timezone: JSON.stringify(new Date().getTimezoneOffset() / -60),
  };

  if (authService.isLoggedIn()) {
    setHeaders['Authorization'] = `Bearer ${authService.token()}`;
  }

  return next(
    req.clone({
      setHeaders,
    })
  ).pipe(
    catchError(({ error }: HttpErrorResponse) =>
      throwError(() => {
        if (isPlatformBrowser(platformId) && !navigator.onLine)
          throw new Error('No access to the internet');
        throw new Error(error.error?.message);
      })
    ),
    finalize(() => spinnerService.hide())
  );
};
