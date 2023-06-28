import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard  {
  constructor(public userService: UserService, public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot) {
    const expectedGroup = route.data['expectedGroup'];

    if (
      !this.userService.currentUserValue.token ||
      this.userService.currentUserValue.group !== expectedGroup
    ) {
      this.router.navigate(['user/login']);
      return false;
    }
    return true;
  }
}
