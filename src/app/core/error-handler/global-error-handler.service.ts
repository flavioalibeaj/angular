import { ErrorHandler, inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SnackBarComponent } from '../../shared/components/snack-bar/snack-bar.component';

@Injectable({
  providedIn: 'root',
})
export class GlobalErrorHandlerService implements ErrorHandler {
  readonly #snackbar = inject(MatSnackBar);
  readonly #router = inject(Router);

  handleError(error: Error): void {
    const message = error.message || 'Unknown error';
    const route = this.#router.url;
    const time = new Date().toISOString();

    console.log({ message, route, time });

    this.#snackbar.openFromComponent(SnackBarComponent, {
      data: {
        message,
        actionMessage: 'GENERAL.close',
      },
      panelClass: 'snackbar-error',
    });
  }
}
