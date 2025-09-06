import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IMenuElement } from '../model/i-menu-element.interface';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  readonly #toggleSubject = new Subject<void>();

  get toggle$(): Observable<void> {
    return this.#toggleSubject.asObservable();
  }

  readonly menuElements: readonly IMenuElement[] = [
    { name: 'PAGES.dashboard', url: '', icon: 'dashboard' },
    {
      name: 'parent',
      url: 'parent',
      icon: 'folder',
      children: [
        {
          name: 'child1',
          url: 'child1',
          icon: 'account_tree',
        },
      ],
    },
    { name: 'PAGES.settings', url: 'settings', icon: 'settings' },
  ];

  toggleSidenav(): void {
    this.#toggleSubject.next();
  }
}
