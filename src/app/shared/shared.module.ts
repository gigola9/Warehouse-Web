import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionButtonComponent } from './action-button/action-button.component';
import { NotificationsComponent } from './notifications/notifications.component';



@NgModule({
  declarations: [
    ActionButtonComponent,
    NotificationsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ActionButtonComponent,
    NotificationsComponent
  ]
})
export class SharedModule { }
