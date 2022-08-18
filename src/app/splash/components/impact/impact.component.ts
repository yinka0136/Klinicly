import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-impact',
  templateUrl: './impact.component.html',
  styleUrls: ['./impact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImpactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
