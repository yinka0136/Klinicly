import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Router } from '@angular/router';
import { BaseComponent } from '@core/base/base-component';
import { BehaviorSubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent
  extends BaseComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  @ViewChild('section1', { static: true })
  section1!: ElementRef<HTMLDivElement>;
  @ViewChild('section2', { static: true })
  section2!: ElementRef<HTMLDivElement>;
  @ViewChild('section3', { static: true })
  section3!: ElementRef<HTMLDivElement>;
  @ViewChild('section4', { static: true })
  section4!: ElementRef<HTMLDivElement>;
  @ViewChild('section4', { static: true })
  bird1!: ElementRef<HTMLDivElement>;
  @ViewChild('bird2', { static: true })
  bird2!: ElementRef<HTMLDivElement>;
  @ViewChild('bird3', { static: true })
  bird3!: ElementRef<HTMLDivElement>;

  emailstring =
    'mailto:customercare@lawpavilion.com?subject=Schedule%20A%20Demo&body=I%20would%20like%20to%20schedule%20a%20demo%20for%20the%20Primsol%20product.';

  public mode: BehaviorSubject<any> = new BehaviorSubject('emailMode');
  email: BehaviorSubject<string> = new BehaviorSubject('');
  password: BehaviorSubject<string> = new BehaviorSubject('');
  primsolId: BehaviorSubject<string> = new BehaviorSubject('');
  lpStoreUrl = 'register';
  public guest!: boolean;
  public screen!: string;
  public loading = true;

  constructor(private router: Router, public mediaObserver: MediaObserver) {
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
    // this.guest = !currentUserService.getCurrentUser();
    if (this.guest) {
      // this.currentUserService.clearStorage();
    }
  }

  ngOnInit(): void {
    // (window as any).Intercom('update');
    // (this.password.value);
  }

  ngAfterViewInit() {
    this.addSubscription(this.runAnimation());
  }

  goToDashboard(): void {
    this.router.navigate(['/dashboard']);
  }

  public runAnimation(): void {
    this.loading = false;
    // this.headerAnimation();
    this.animateDrugs();
    this.sectionAnimation();
  }

  // headerAnimation() {
  //   gsap
  //     .timeline()
  //     .from(this.heroFirstColumn.nativeElement, {
  //       y: 100,
  //       opacity: 0,
  //       ease: 'back',
  //       duration: 1,
  //       delay: 0.5,
  //     })
  //     .from(this.heroImg.nativeElement, {
  //       scale: 0,
  //       ease: 'elastic.out(1, 0.3)',
  //       duration: 0.5,
  //     })
  //     .from(
  //       this.emojiFeatures.nativeElement.childNodes,
  //       {
  //         scale: 0,
  //         ease: 'elastic.out(1, 0.3)',
  //         stagger: {
  //           amount: 0.8,
  //         },
  //       },
  //       '<'
  //     )
  //     .from(this.heroImgConnector.nativeElement, { opacity: 0 }, '-=0.5');
  // }

  public sectionAnimation() {
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

  public animateDrugs(): void {
    // let Bird01: any = document.getElementById('#bird01'),
    //   Bird02: any = document.getElementById('#bird01'),
    //   Bird03: any = document.getElementById('#bird01'),
    //   wrapperBirds: any = document.getElementById('#wrapperBirds');
    // Bird01!.data('width', Bird01.width());
    // Bird02!.data('width', Bird02.width());
    // Bird03!.data('width', Bird03.width());
    // let timeFly = this.random(0.4, 0.8),
    //   birdsFly = document.getElementsByClassName('.birdsFly');
    // let tl = gsap.timeline({});
    // tl.to(birdsFly, 0.5, { opacity: -1 });
    // // .staggerTo(".boxes", 1, {
    // //    cycle:{
    // //      opacity:[-1, 1]
    // //      ease: [Power4.easeInOut]
    // //    }
    // //  }, 0.05);
    // // gsap.staggerTo(birdsFly, timeFly, {
    // //   cycle:{morphSVG: ["#bird1fly02", "#bird2fly02", "#bird3fly02"]},
    // //   repeat: -1,
    // //   yoyo: true,
    // //   repeatDelay: 0.07,
    // //   ease: Power3.easeOut
    // // },0.3);
    // let width = wrapperBirds!.width();
    // let height = wrapperBirds!.height();
    // gsap.set([Bird01, Bird02, Bird03], {
    //   xPercent: -50,
    //   yPercent: -50,
    // });
    // // x/y values for how far away from the center they can move
    // let dx = width * 0.4;
    // let dy = height * 0.5;
    // // Animate our properties individually
    // this.tweenProperty(Bird01, 'scale', 0.2, 0.8);
    // this.tweenProperty(Bird01, 'x', -dx, dx);
    // this.tweenProperty(Bird01, 'y', -dy, dy);
    // this.tweenProperty(Bird02, 'scale', 0.5, 1);
    // this.tweenProperty(Bird02, 'x', -dx, dx);
    // this.tweenProperty(Bird02, 'y', -dy, dy);
    // this.tweenProperty(Bird03, 'scale', 0.4, 0.9);
    // this.tweenProperty(Bird03, 'x', -dx, dx);
    // this.tweenProperty(Bird03, 'y', -dy, dy);
  }
  public tweenProperty(target: any, prop: any, min: any, max: any) {
    gsap.to(target, this.random(3, 6), {
      [prop]: this.random(min, max),
      ease: Sine.easeInOut,
      onComplete: this.tweenProperty,
      onCompleteParams: [target, prop, min, max],
    });
  }
  public random(min: any, max: any) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return Math.random() * (max - min) + min;
  }
  public checkForKeyEnter(event: KeyboardEvent): void {
    var key = event.key || event.keyCode;
    if (key == 'Enter' || key == 8) {
      // this.login();
    }
  }
  ngOnDestroy(): void {
    this.clearSubscription();
  }
}
