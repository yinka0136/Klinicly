import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import { environment } from "@env/environment";
// import { CurrentUserService } from "@services/current-user/current-user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('header') header!: ElementRef<HTMLDivElement>;
  public guest!: boolean;
  public showSideNav = false;
  lpStoreUrl = 'register';

  constructor() { // private currentUserService: CurrentUserService
    // this.guest = !currentUserService.getCurrentUser();
  }

  ngOnInit(): void {}

  /**
   * Toggle the visibility of the side-nav.
   */
  public toggleSideNav() {
    this.showSideNav = !this.showSideNav;
  }
}
