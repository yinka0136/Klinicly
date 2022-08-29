import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-global-loader",
  templateUrl: "./global-loader.component.html",
  styleUrls: ["./global-loader.component.scss"],
})
export class GlobalLoaderComponent implements OnInit {
  @Input() type: "regular" | "withBackdrop" = "regular";
  @Input() diameter = 40;
  @Input() inline = false;
  constructor() {}

  ngOnInit(): void {}
  isRegular(): boolean {
    return this.type === "regular";
  }
}
