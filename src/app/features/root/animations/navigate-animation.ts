import {
  transition,
  trigger,
  animate,
  state,
  style,
} from '@angular/animations';

const sectionExpand = trigger('sectionExpand', [
  state(
    'normal',
    style({
      transform: 'scale(1)',
      zIndex: '1',
    })
  ),
  state(
    'expanding-left',
    style({
      transform: 'scale(1.05)',
      zIndex: '1000',
    })
  ),
  state(
    'expanding-right',
    style({
      transform: 'scale(1.05)',
      zIndex: '1000',
    })
  ),
  state(
    'fullscreen-left',
    style({
      transform: 'scale(5) translateX(30%)',
      zIndex: '1000',
    })
  ),
  state(
    'fullscreen-right',
    style({
      transform: 'scale(5) translateX(-30%)',
      zIndex: '1000',
    })
  ),
  transition('normal => expanding-left', animate('200ms ease-out')),
  transition('normal => expanding-right', animate('200ms ease-out')),
  transition(
    'expanding-left => fullscreen-left',
    animate('600ms cubic-bezier(0.25, 0.8, 0.25, 1)')
  ),
  transition(
    'expanding-right => fullscreen-right',
    animate('600ms cubic-bezier(0.25, 0.8, 0.25, 1)')
  ),
]);

const fadeOut = trigger('fadeOut', [
  state('visible', style({ opacity: 1 })),
  state('hidden', style({ opacity: 0 })),
  transition('visible => hidden', animate('400ms ease-out')),
]);

const overlayFade = trigger('overlayFade', [
  state(
    'hidden',
    style({
      opacity: 0,
      visibility: 'hidden',
    })
  ),
  state(
    'visible',
    style({
      opacity: 1,
      visibility: 'visible',
    })
  ),
  transition('hidden => visible', animate('800ms ease-in')),
]);

export const navigate_animations = [sectionExpand, fadeOut, overlayFade];
