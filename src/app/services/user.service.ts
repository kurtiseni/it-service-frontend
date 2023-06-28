import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserModel } from '../pages/auth/user.model';
import { map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService extends ApiService {
  private currentUserSubject = new BehaviorSubject(new UserModel());
  public currentUser!: Observable<UserModel>;

  constructor(
    http: HttpClient,
    private cookieService: CookieService,
    private route: Router
  ) {
    super(http);
    const user = cookieService.get('currentUser');

    if (user) {
      this.currentUserSubject = new BehaviorSubject<UserModel>(
        JSON.parse(user)
      );
      this.currentUser = this.currentUserSubject.asObservable();
    }
  }

  public get currentUserValue(): UserModel {
    return this.currentUserSubject?.value;
  }

  login(body: any) {
    return this.post('/auth/login', body).pipe(
      map((user) => {
        if (user.token) {
          const actualDate = new Date();
          actualDate.setDate(actualDate.getDate() + 1);

          this.cookieService.put('currentUser', JSON.stringify(user), {
            expires: actualDate,
            path: '/',
          });
          this.currentUserSubject.next(user);
        }

        return user;
      })
    );
  }

  logout() {
    this.cookieService.remove('currentUser');
    this.currentUserSubject.next(new UserModel());
    this.route.navigateByUrl('/user/login');
  }

  getUserData() {
    return this.get('/profile');
  }
}
