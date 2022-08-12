import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { BaseComponent } from '@core/base/base-component';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { forkJoin } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ImagesLoadedDirective } from './image-loaded.directive';
@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent
  extends BaseComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  @ViewChild('emojiFeatures', { static: true })
  emojiFeatures!: ElementRef<HTMLDivElement>;
  @ViewChild('section1', { static: true })
  section1!: ElementRef<HTMLDivElement>;
  @ViewChild('section2', { static: true })
  section2!: ElementRef<HTMLDivElement>;
  @ViewChild('section3', { static: true })
  section3!: ElementRef<HTMLDivElement>;
  @ViewChild('section4', { static: true })
  section4!: ElementRef<HTMLDivElement>;
  @ViewChild('heroFirstColumn', { static: true })
  heroFirstColumn!: ElementRef<HTMLDivElement>;
  @ViewChild('heroImg', { static: true })
  heroImg!: ElementRef<HTMLImageElement>;
  @ViewChild('heroImgConnector', { static: true })
  heroImgConnector!: ElementRef<HTMLImageElement>;
  @ViewChildren(ImagesLoadedDirective)
  images!: QueryList<ImagesLoadedDirective>;
  screen!: string;
  public loading = true;

  constructor(public mediaObserver: MediaObserver) {
    super();
    gsap.registerPlugin(ScrollTrigger);
    this.addSubscription(
      this.mediaObserver
        .asObservable()
        .pipe(
          filter((changes: MediaChange[]) => changes.length > 0),
          map((changes: MediaChange[]) => changes[0])
        )
        .subscribe((change: MediaChange) => {
          this.screen = change.mqAlias;
        })
    );
  }

  ngOnInit(): void {
    // Update Intercom.
    // (window as any).Intercom('update');
  }

  ngAfterViewInit() {
    this.addSubscription(
      forkJoin(this.images.map((imgDir) => imgDir.loaded)).subscribe(() => {
        this.runAnimation();
      })
    );
  }

  runAnimation(): void {
    this.loading = false;
    this.headerAnimation();
    this.sectionAnimation();
  }

  headerAnimation() {
    gsap
      .timeline()
      .from(this.heroFirstColumn.nativeElement, {
        y: 100,
        opacity: 0,
        ease: 'back',
        duration: 1,
        delay: 0.5,
      })
      .from(this.heroImg.nativeElement, {
        scale: 0,
        ease: 'elastic.out(1, 0.3)',
        duration: 0.5,
      })
      .from(
        this.emojiFeatures.nativeElement.childNodes,
        {
          scale: 0,
          ease: 'elastic.out(1, 0.3)',
          stagger: {
            amount: 0.8,
          },
        },
        '<'
      )
      .from(this.heroImgConnector.nativeElement, { opacity: 0 }, '-=0.5');
  }

  sectionAnimation() {
    let animation = {
      y: 100,
      opacity: 0,
      ease: 'back',
      delay: 0.5,
      duration: 0.6,
    };

    let animation2: any = {
      x: 100,
      opacity: 0,
      ease: 'back',
      duration: 0.6,
    };

    let sections = ['section1', 'section2', 'section3', 'section4'];

    for (let [index, section] of sections.entries()) {
      const element: any = this[section as keyof typeof this];
      const nativeElement = element.nativeElement;
      console.log(element);
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: nativeElement,
          start: 'top 80%',
          end: 'top 10%',
          scrub: true,
        },
      });
      if (['xs', 'sm'].includes(this.screen)) {
        tl.from(nativeElement, animation);
      } else {
        tl.from(nativeElement.firstChild, animation).from(
          nativeElement.lastChild,
          animation2,
          '-=0.3'
        );
      }
    }
  }

  ngOnDestroy(): void {
    this.clearSubscription();
  }
}
