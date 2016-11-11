import { trigger, state, style, transition, animate } from '@angular/core';

export const slideIn = trigger('slideIn', [
  state('*', style({
    opacity : 1,
    transform: 'translateY(0%)',
  })),
  transition('void => *',[
    style({transform: 'translateY(30px)', opacity: 0}),
    animate('450ms 300ms  ease-in-out')
  ]),
  // transition('* => void',  animate('300ms  ease-in-out',style({transform: 'translateY(30px)', opacity: 0})))
]);

