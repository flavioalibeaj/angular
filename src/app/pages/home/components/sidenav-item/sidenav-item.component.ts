import { Component, input, output } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IMenuElement } from '../../model/i-menu-element.interface';
import { TranslatePipe } from '@ngx-translate/core';
import { BuildRoutePipe } from '../../../../shared/pipes/build-route.pipe';
import { ToggleSidenavDirective } from '../../../../shared/directives/toggle-sidenav.directive';

@Component({
  selector: 'app-sidenav-item',
  imports: [
    MatListModule,
    RouterLink,
    RouterLinkActive,
    TranslatePipe,
    BuildRoutePipe,
    ToggleSidenavDirective,
  ],
  styles: [
    `
      ::ng-deep .mat-mdc-nav-list .mat-mdc-list-item {
        border-radius: unset;
      }
    `,
  ],
  template: `
    <mat-list-item
      ariaCurrentWhenActive="page"
      [activated]="rla.isActive"
      [routerLink]="menuElement() | buildRoute : parentRoute()"
      toggleSidenav
    >
      <a
        matListItemTitle
        routerLinkActive
        #rla="routerLinkActive"
        class="text-decoration-none"
        [routerLinkActiveOptions]="{ exact: true }"
        >{{ menuElement().name | translate }}</a
      >
    </mat-list-item>
  `,
})
export class SidenavItemComponent {
  readonly menuElement = input.required<IMenuElement>();
  readonly parentRoute = input.required<string>();
  readonly subMenuOpenened = output<IMenuElement>();

  // TODO: Implement submenus
  // openSubMenu() {
  //   if (!this.menuElement().children?.length) return;

  //   this.subMenuOpenened.emit(this.menuElement());
  // }
}
