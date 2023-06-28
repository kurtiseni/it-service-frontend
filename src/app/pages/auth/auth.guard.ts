import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../../services/user.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard  {
  constructor(private router: Router, private userService: UserService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.userService.currentUserValue;

    if (currentUser.token) return true;

    this.router.navigate(['user/login'], {
      queryParams: { returnUrl: state.url },
    });
    return false;
  }
}
