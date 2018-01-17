import {animate, style, transition, trigger, keyframes} from '@angular/animations';

export const animateMainHeader =
  trigger('moveFromLeftTrig', [
    transition(':enter', [
      animate('1000ms ease-out',
        keyframes([
          style({
            'opacity': 0,
            'transform': 'translateX(-100px)',
            offset: 0
          }),
          style({
            'opacity': 1,
            'transform': 'translateX(20px)',
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
            'transform': 'translateX(100px)',
            offset: 0
          }),
          style({
            'opacity': 1,
            'transform': 'translateX(-20px)',
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

