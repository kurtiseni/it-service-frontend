import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export class AlertMessage {
  type!: string;
  message!: string;
}

@Injectable({
  providedIn: 'root',
})
export class AlertsService {
  private messageSubject = new Subject<AlertMessage>();

  constructor() {}

  addMessages(messageObj: AlertMessage) {
    this.messageSubject.next(messageObj);
  }

  getMessages() {
    return this.messageSubject.asObservable();
  }
}
