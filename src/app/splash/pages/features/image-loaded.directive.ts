import {
  Directive,
  ElementRef,
  HostListener,
  Output,
  EventEmitter,
} from "@angular/core";

@Directive({
  selector: "img",
})
export class ImagesLoadedDirective {
  @Output() loaded = new EventEmitter();

  constructor(public elementRef: ElementRef) {}

  @HostListener("load")
  @HostListener("error")
  imageLoaded() {
    this.loaded.emit();
    this.loaded.complete();
  }
}
