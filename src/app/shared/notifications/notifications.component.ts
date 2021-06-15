import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'src/app/feature/services/notifications.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  openNot: boolean = false;

  constructor(private notificationsService: NotificationsService) { }

  ngOnInit(): void {
    this.notificationsService.getState().subscribe((m) => {
      this.openNot = m;
      setTimeout(()=> {
        this.openNot = false;
      }, 3000)
    });
  }

}
