import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export class AlertMessages {
  type!: string;
  message!: string;
}

@Injectable({
  providedIn: 'root',
})
export class AlertsService {
  private errors = new Subject<AlertMessages>();

  constructor() {}

  addMessages(errors: AlertMessages) {
    this.errors.next(errors);
  }

  getMessages() {
    return this.errors.asObservable();
  }
}
