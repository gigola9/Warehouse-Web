import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss']
})
export class ActionButtonComponent implements OnInit {
  @Input() iconName = '';
  @Input() fieldText = '';
  @Input() url = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  changePage() {
    this.router.navigateByUrl(this.url);
  }
}
