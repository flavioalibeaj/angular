import { Component, inject, input, output } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IMenuElement } from '../../model/i-menu-element.interface';
import { TranslatePipe } from '@ngx-translate/core';
import { BuildRoutePipe } from '../../../../shared/pipes/build-route.pipe';
import { MatIconModule } from '@angular/material/icon';
import { SidenavService } from '../../services/sidenav.service';

@Component({
  selector: 'app-sidenav-item',
  imports: [
    MatListModule,
    RouterLink,
    RouterLinkActive,
    TranslatePipe,
    BuildRoutePipe,
    MatIconModule,
  ],
  styles: [
    `
      ::ng-deep .mat-mdc-nav-list .mat-mdc-list-item {
        height: 100%;
        border-radius: unset;
      }

      ::ng-deep .mdc-list-item__content {
        display: flex;
        justify-content: space-between;

        * {
          height: 100%;
        }
      }
    `,
  ],
  template: `
    <mat-list-item
      ariaCurrentWhenActive="page"
      [activated]="rla.isActive"
      [routerLink]="menuElement() | buildRoute : parentRoute()"
      (click)="openSubMenu()"
    >
      <mat-icon class="m-3" matListItemIcon>{{ menuElement().icon }}</mat-icon>
      <a
        matListItemTitle
        routerLinkActive
        #rla="routerLinkActive"
        class="text-decoration-none"
        [routerLinkActiveOptions]="{ exact: true }"
        >{{ menuElement().name | translate }}</a
      >
      @if (menuElement().children?.length) {
      <mat-icon class="d-flex align-items-center me-3">chevron_right</mat-icon>
      }
    </mat-list-item>
  `,
})
export class SidenavItemComponent {
  readonly #sidenavService = inject(SidenavService);

  readonly menuElement = input.required<IMenuElement>();
  readonly parentRoute = input.required<string>();
  readonly subMenuOpenened = output<IMenuElement>();

  openSubMenu() {
    !this.menuElement().children?.length
      ? this.#sidenavService.toggleSidenav()
      : this.subMenuOpenened.emit(this.menuElement());
  }
}
