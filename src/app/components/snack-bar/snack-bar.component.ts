import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  imports: [MatButtonModule, MatIconModule, MatTooltipModule, TranslatePipe],
  template: `
    <div class="d-flex align-items-center">
      <span> {{ data.message }} </span>

      <button
        mat-icon-button
        class="ms-auto"
        [matTooltip]="data.actionMessage | translate"
        matTooltipPosition="after"
      >
        <mat-icon>close</mat-icon>
      </button>
    </div>
  `,
})
export class SnackBarComponent {
  protected readonly data = inject(MAT_SNACK_BAR_DATA);
}
