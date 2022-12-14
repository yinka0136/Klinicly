import {
  trigger,
  transition,
  style,
  animateChild,
  group,
  animate,
  query,
} from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
  transition('* => *', [
    query(
      ':enter, :leave',
      style({ position: 'fixed', width: '100%', height: '100%' }),
      { optional: true }
    ),
    query(':enter', style({ transform: 'translateX(100%)' }), {
      optional: true,
    }),

    group([
      query(
        ':leave',
        [
          style({ transform: 'translateX(0%)' }),
          animate(
            '1.0s ease-in-out',
            style({ transform: 'translateX(-100%)' })
          ),
        ],
        { optional: true }
      ),
      query(
        ':enter',
        [
          animate('1.0s ease-in-out', style({ transform: 'translateX(0%)' })),
          animateChild(),
        ],
        { optional: true }
      ),
    ]),
  ]),
]);

export const pageAnimation = trigger('pageAnimation', [
  transition(':enter', [
    query('h1', [style({ transform: 'scale(0)' }), animate('1s', style('*'))], {
      optional: true,
    }),
  ]),
]);
