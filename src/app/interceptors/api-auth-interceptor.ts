import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpHeaders,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Config } from '../Config';
import { UserService } from '../services/user.service';
import { catchError, tap } from 'rxjs/operators';
import { AlertsService } from '../services/alerts.service';

@Injectable()
export class ApiAuthInterceptor implements HttpInterceptor {
  constructor(
    private userService: UserService,
    private alertService: AlertsService
  ) {}

  private handleError(err: HttpErrorResponse): Observable<any> {
    let errorMsg;
    if (err.error instanceof Error) {
      // client-side error
      errorMsg = `Error: ${err.error.message}`;
    } else {
      // backend-error
      errorMsg = `Backend error ${err.status}, ${err.error.message}`;
    }
    console.error(errorMsg);
    this.alertService.addMessages({ type: 'error', message: errorMsg });

    if (err.status === 401) {
      this.userService.logout();
    }

    return throwError(errorMsg);
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const { origin } = new URL(req.url);

    if (origin === Config.NEST_URL) {
      // if (this.cookie.get('currentUser')) {
      const headers: any = {};

      if (this.userService.currentUserValue) {
        headers.Authorization = `Bearer ${this.userService.currentUserValue.token}`;
        // }
        return next
          .handle(
            req.clone({
              headers: new HttpHeaders(headers),
            })
          )
          .pipe(
            tap((evt: HttpEvent<any>) => {
              if (evt instanceof HttpResponse) {
                if (req.method === 'DELETE' || req.method === 'PATCH') {
                  this.alertService.addMessages({
                    type: 'success',
                    message: `${req.method} ${evt.statusText}`,
                  })
                }

                if (evt.status === 201) {
                  if (evt.url === `${origin}/reports`) return;
                  if (evt.url === `${origin}/auth/login`) {
                    this.alertService.addMessages({
                      type: 'success',
                      message: 'Successfully Logged In!',
                    });
                  } else {
                    this.alertService.addMessages({
                      type: 'success',
                      message: evt.statusText,
                    });
                  }
                }
              }
            }),
            catchError((error) => this.handleError(error))
          );
      } else {
        return next.handle(req);
      }
    }

    return next.handle(req);
  }
}
