import { Pipe, PipeTransform } from '@angular/core';
import { IMenuElement } from '../../pages/home/model/i-menu-element.interface';

@Pipe({
  name: 'buildRoute',
})
export class BuildRoutePipe implements PipeTransform {
  transform(item: IMenuElement, parentRoute: string = ''): string | undefined {
    if (item.children?.length) return undefined;

    return `${parentRoute}/${item.url}`;
  }
}
