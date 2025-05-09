import { Directive, HostListener, inject } from '@angular/core';
import { SidenavService } from '../../pages/home/services/sidenav.service';

@Directive({ selector: '[toggleSidenav]' })
export class ToggleSidenavDirective {
  readonly #sidenavService = inject(SidenavService);

  @HostListener('click')
  toggleSidenav = (): void => this.#sidenavService.toggleSidenav();
}
