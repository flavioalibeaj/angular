import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class GlobalErrorHandlerService implements ErrorHandler {
  readonly #snackbar = inject(MatSnackBar);

  handleError(error: Error): void {
    if (error instanceof HttpErrorResponse) return;
    console.log(error);

    this.#snackbar.open(error.message, 'Close');
  }
}
