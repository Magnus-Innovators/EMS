import { Component, OnInit } from '@angular/core';
import { MenuService } from './services/menu.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [MenuService, UsersService]
})
export class MainComponent implements OnInit {

  lgMenu: Array<any>;
  mdMenu: Array<any>;
  smMenu: Array<any>;
  role: string;
  selectedItem: number;
  userName: string;
  userRoleName: string;
  uid: string;

  getImageUrl() {
    if (this.role === 'admin') {
      return '/assets/img/admin-sidebar.jpeg';
    } else if (this.role === 'teacher') {
      return '/assets/img/teacher-sidebar.jpeg';
    } else if (this.role === 'student') {
      return '/assets/img/sudent-sidebar.jpeg';
    } else if (this.role === 'parent') {
      return '/assets/img/parent-sidebar.jpeg';
    } else if (this.role === 'management') {
      return '/assets/img/management-sidebar.jpeg';
    }
  }


  constructor(private route: ActivatedRoute,
              private router: Router,
              private _menu: MenuService,
              private _users: UsersService) { }

  getLgMenu() {
    return this.lgMenu;
  }

  getMdMenu() {
    return this.mdMenu;
  }

  getSmMenu() {
    return this.smMenu;
  }

  setLgStyleClasses(index: number) {
      return this.lgMenu[index].style;
  }

  setMdStyleClasses(index: number) {
    return this.mdMenu[index].style;
}

setSmStyleClasses(index: number) {
  return this.smMenu[index].style;
}

  setDefaultActive(index: number) {
    if (index === 0) {
      return {'menu-active': true};
    } else {
      return {'menu-active': false};
    }
  }

  setSelected(index: number) {
    this.selectedItem = index;
  }

  isActive(item: number) {
    return this.selectedItem === item;
}

  setDefaultSmActive(index: number) {
    if (index === 0) {
      return {'menu-sm-active': true};
    } else {
      return {'menu-sm-active': false};
    }
  }

  goToLink(page: string) {
    console.log(page);
    return [{outlets: { subroute: [ page ]}}];
  }

  ngOnInit() {
    this.role = this.route.snapshot.paramMap.get('role');
    this.userName = this._users.getUserName(this.role);
    this.userRoleName = this._users.getUserRole(this.role);
    this.lgMenu = this._menu.getLargeMenu(this.role);
    this.mdMenu = this._menu.getMediumMenu(this.role);
    this.smMenu = this._menu.getSmallMenu(this.role);
    this.selectedItem = 0;
    this.router.navigateByUrl('/main/(subroute:' + this.role + ')');
  }

}
