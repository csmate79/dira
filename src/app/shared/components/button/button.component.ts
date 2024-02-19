import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
    @Input() color?: string;

    @Input() disabled?: boolean;

    @Input() title: string;

    @Output()
    public btnOnClick = new EventEmitter();

    constructor() { }
}
