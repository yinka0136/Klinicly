import { Component, OnInit } from '@angular/core';
import { notes } from "./data/index";

@Component({
  selector: 'app-whats-new',
  templateUrl: './whats-new.component.html',
  styleUrls: ['./whats-new.component.scss']
})
export class WhatsNewComponent implements OnInit {
  notes=notes;
  constructor() { }

  ngOnInit(): void {
  }

}
