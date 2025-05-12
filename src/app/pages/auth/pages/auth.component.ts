import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [MatCard, RouterOutlet],
  styles: [
    `
      mat-card {
        width: 350px;
        max-width: 350px;
        justify-content: space-between;
      }
    `,
  ],
  template: `
    <div class="h-100 d-flex justify-content-center align-items-center">
      <mat-card>
        <router-outlet />
      </mat-card>
    </div>
  `,
})
export class AuthComponent {}
