import {
  style,
  query,
  group,
  trigger,
  animate,
  transition,
  animateChild,
} from '@angular/animations';

export const routeAnimations = trigger('routeAnimations', [
  transition('welcome => step1', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }),
      ],
      { optional: true }
    ),
    query(
      ':enter',
      [
        style({
          transform: 'translateX(100%)',
          opacity: 0,
        }),
      ],
      { optional: true }
    ),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(
        ':leave',
        [
          animate(
            '500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            style({
              transform: 'translateX(-100%)',
              opacity: 0,
            })
          ),
        ],
        { optional: true }
      ),
      query(
        ':enter',
        [
          animate(
            '500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            style({
              transform: 'translateX(0%)',
              opacity: 1,
            })
          ),
        ],
        { optional: true }
      ),
    ]),
    query(':enter', animateChild(), { optional: true }),
  ]),

  transition('step1 => step2', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }),
      ],
      { optional: true }
    ),
    query(
      ':enter',
      [
        style({
          transform: 'translateX(100%)',
          opacity: 0,
        }),
      ],
      { optional: true }
    ),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(
        ':leave',
        [
          animate(
            '400ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            style({
              transform: 'translateX(-50%)',
              opacity: 0,
            })
          ),
        ],
        { optional: true }
      ),
      query(
        ':enter',
        [
          animate(
            '400ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            style({
              transform: 'translateX(0%)',
              opacity: 1,
            })
          ),
        ],
        { optional: true }
      ),
    ]),
    query(':enter', animateChild(), { optional: true }),
  ]),

  transition('step2 => step3', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }),
      ],
      { optional: true }
    ),
    query(
      ':enter',
      [
        style({
          transform: 'translateX(100%)',
          opacity: 0,
        }),
      ],
      { optional: true }
    ),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(
        ':leave',
        [
          animate(
            '400ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            style({
              transform: 'translateX(-50%)',
              opacity: 0,
            })
          ),
        ],
        { optional: true }
      ),
      query(
        ':enter',
        [
          animate(
            '400ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            style({
              transform: 'translateX(0%)',
              opacity: 1,
            })
          ),
        ],
        { optional: true }
      ),
    ]),
    query(':enter', animateChild(), { optional: true }),
  ]),

  transition('step3 => step4', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }),
      ],
      { optional: true }
    ),
    query(
      ':enter',
      [
        style({
          transform: 'translateX(100%)',
          opacity: 0,
          scale: 0.95,
        }),
      ],
      { optional: true }
    ),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(
        ':leave',
        [
          animate(
            '450ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            style({
              transform: 'translateX(-50%)',
              opacity: 0,
              scale: 1.05,
            })
          ),
        ],
        { optional: true }
      ),
      query(
        ':enter',
        [
          animate(
            '450ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            style({
              transform: 'translateX(0%)',
              opacity: 1,
              scale: 1,
            })
          ),
        ],
        { optional: true }
      ),
    ]),
    query(':enter', animateChild(), { optional: true }),
  ]),

  // უკანსახლეცი ანიმაციები
  transition('step1 => welcome', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }),
      ],
      { optional: true }
    ),
    query(
      ':enter',
      [
        style({
          transform: 'translateX(-100%)',
          opacity: 0,
        }),
      ],
      { optional: true }
    ),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(
        ':leave',
        [
          animate(
            '400ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            style({
              transform: 'translateX(100%)',
              opacity: 0,
            })
          ),
        ],
        { optional: true }
      ),
      query(
        ':enter',
        [
          animate(
            '400ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            style({
              transform: 'translateX(0%)',
              opacity: 1,
            })
          ),
        ],
        { optional: true }
      ),
    ]),
    query(':enter', animateChild(), { optional: true }),
  ]),

  transition('step2 => step1', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }),
      ],
      { optional: true }
    ),
    query(
      ':enter',
      [
        style({
          transform: 'translateX(-100%)',
          opacity: 0,
        }),
      ],
      { optional: true }
    ),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(
        ':leave',
        [
          animate(
            '400ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            style({
              transform: 'translateX(100%)',
              opacity: 0,
            })
          ),
        ],
        { optional: true }
      ),
      query(
        ':enter',
        [
          animate(
            '400ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            style({
              transform: 'translateX(0%)',
              opacity: 1,
            })
          ),
        ],
        { optional: true }
      ),
    ]),
    query(':enter', animateChild(), { optional: true }),
  ]),
]);

export const formAnimations = trigger('formEnter', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateY(30px)',
    }),
    animate(
      '300ms 200ms cubic-bezier(0.35, 0, 0.25, 1)',
      style({
        opacity: 1,
        transform: 'translateY(0)',
      })
    ),
  ]),
]);

export const fadeInUp = trigger('fadeInUp', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateY(20px)',
    }),
    animate(
      '250ms ease-out',
      style({
        opacity: 1,
        transform: 'translateY(0)',
      })
    ),
  ]),
]);

export const animations = [routeAnimations, formAnimations, fadeInUp];
