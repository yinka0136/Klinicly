import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { features, faqs } from './data/index';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss'],
})
export class PricingComponent implements OnInit, AfterViewInit {
  features = features;
  faqs = faqs;
  emailstring =
    'mailto:customercare@lawpavilion.com?Subject=Question_About_Primsol&body=I_would_like_to_ask_a_question_about_Primsol.';
  @ViewChild('faq') faq!: ElementRef<HTMLDivElement>;
  @ViewChild('container') container!: ElementRef<HTMLDivElement>;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    (window as any).Intercom('update');
  }

  ngAfterViewInit() {
    this.viewFaQ();
  }

  viewFaQ() {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params['view'] == 'faq') {
        this.faq.nativeElement.scrollIntoView();
        window.scrollBy(0, -100);
      }
    });
  }
}
