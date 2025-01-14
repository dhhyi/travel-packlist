import { animate, animation, stagger, style } from '@angular/animations';

const qBefore = {
  opacity: 0,
  transform: 'scale(0.9)',
  height: 0,
  padding: 0,
  margin: '-2px',
};
const qAfter = {
  opacity: 1,
  transform: 'scale(1)',
  height: '*',
  padding: '*',
  margin: '*',
};

export const staggerInCard = animation([
  style(qBefore),
  stagger(50, [animate('0.3s ease-in', style(qAfter))]),
]);

export const staggerOutCard = animation([
  style(qAfter),
  stagger(50, [animate('0.3s ease-in', style(qBefore))]),
]);
