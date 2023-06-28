import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { UserModel } from 'src/app/pages/auth/user.model';
import { HeaderMenu, SubMenu } from "./menu.model";
import { menuData } from './menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnChanges {
  @Input() user = new UserModel();
  @Output() logoutEvent = new EventEmitter<Function>();
  headerMenu!: HeaderMenu[];

  constructor() {}

  ngOnChanges() {
    this.headerMenu = structuredClone(menuData)

    let filteredMenu: Array<HeaderMenu> = [];

    this.headerMenu.forEach((menu: HeaderMenu, index) => {
      if (menu.group === this.user.group || menu.group === 0) {
        filteredMenu = [...filteredMenu, menu];

        menu.children?.forEach((subMenu: SubMenu, i) => {
          if (subMenu.group !== this.user.group && subMenu.group !== 0) {
            filteredMenu[index].children?.splice(i, 1);
          }
        });
      }
    });

    this.headerMenu = filteredMenu;
  }

  logout() {
    this.logoutEvent.emit();
  }
}
