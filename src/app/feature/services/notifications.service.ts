import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  showNot: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  show() {
    this.showNot.next(true);
  }

  getState() {
    return this.showNot.asObservable();
  }
}
