import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss'],
})
export class VerifyComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public checkForKeyEnter(event: KeyboardEvent): void {
    var key = event.key || event.keyCode;
    if (key == 'Enter' || key == 8) {
      // this.login();
    }
  }
}
