import {animate, style, transition, trigger, keyframes} from '@angular/animations';

export const animateMainHeader =
  trigger('moveFromLeftTrig', [
    transition(':enter', [
      animate('1000ms ease-out',
        keyframes([
          style({
            'opacity': 0,
            'transform': 'translateX(-10rem)',
            offset: 0
          }),
          style({
            'transform': 'translateX(1rem)',
            offset: 0.8
          }),
          style({
            'opacity': 1,
            'transform': 'translateX(0)',
            offset: 1
          })
      ]))
    ])
  ]);

export const animateSubHeader =
  trigger('moveFromRightTrig', [
    transition(':enter', [
      animate('1000ms ease-out',
        keyframes([
          style({
            'opacity': 0,
            'transform': 'translateX(10rem)',
            offset: 0
          }),
          style({
            'transform': 'translateX(-1rem)',
            offset: 0.8
          }),
          style({
            'opacity': 1,
            'transform': 'translate(0)',
            offset: 1
          })
        ]))
    ])
  ]);

export const animateCallToActionBtn =
  trigger('moveFromBelowTrig', [
    transition(':enter', [
      style({
        'opacity': 0,
        'transform': 'translateY(3rem)'
      }),
      animate('500ms 1000ms ease-out',
        style({
          'opacity': 1,
          'transform': 'translateY(0)'
        })
      )
    ])
  ]);

