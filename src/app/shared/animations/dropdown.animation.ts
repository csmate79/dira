import { animate, style, transition, trigger } from '@angular/animations';

export const dropdownAnimation = trigger('dropdownAnimation', [
    transition(':enter', [
        style({ opacity: 0 }),
        animate('1s ease-out', style({ opacity: 1 })),
    ]),
    transition(':leave', [
        style({ opacity: 1 }),
        animate('0.5s ease-in', style({ opacity: 0 })),
    ]),
]);
