import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { UserModel } from './pages/auth/user.model';
import { AlertMessage, AlertsService } from './services/alerts.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  showHeader = false;
  user = new UserModel();

  alertObject: AlertMessage[] = [];

  constructor(private userService: UserService, router: Router, private alertService: AlertsService) {
    router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        )
      )
      .subscribe((event) => {
        if (userService.currentUserValue.token) {
          this.showHeader = true;
          this.user = userService.currentUserValue;
        } else {
          this.showHeader = false;
        }
      });
  }

  ngOnInit() {
    this.alertService.getMessages().subscribe((res: AlertMessage) => {
      this.alertObject.push(res);

      this.alertObject.forEach((el, index) => {
        setTimeout(() => {
          this.alertObject.splice(index, 1);
        }, 4000)
      })
    });
  }

  logout() {
    this.userService.logout();
  }
}
