import { inject, Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMenuElement } from '../../pages/home/model/i-menu-element.interface';
import { map, Observable, of } from 'rxjs';

@Pipe({
  name: 'isParentUrlActive',
})
export class IsParentUrlActivePipe implements PipeTransform {
  readonly #router = inject(Router);
  readonly #activatedRoute = inject(ActivatedRoute);

  transform(
    menuElement: IMenuElement,
    menuElementParent: string
  ): Observable<boolean> {
    // const actualPare nt = this.#router.url.split('/').filter(Boolean)[0];
    // const routeStream = this.#activatedRoute.url;
    const routeStream = of(this.#router.url.split('/').filter(Boolean)[0]);

    return routeStream.pipe(
      map((url) => {
        console.log('url', url);
        return false;
      })
    );

    // console.log('actualParent =>', actualParent);
    // if (
    //   !menuElementParent &&
    //   menuElement.url !== '' &&
    //   menuElement.url === actualParent
    // ) {
    //   return true;
    // }
    // console.log('FALSE');
    // return false;
  }
}
