import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-actions',
  templateUrl: './user-actions.component.html',
  styleUrls: ['./user-actions.component.scss']
})
export class UserActionsComponent implements OnInit {
  @Input() admin: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
