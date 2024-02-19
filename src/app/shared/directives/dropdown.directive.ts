import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: 'button[dropdown]',
})
export class DropdownDirective {
    @HostListener('click', ['$event.target'])
    onClick() {
        if (this.elRef.nativeElement.nextSibling.classList.contains('hidden')) {
            this.elRef.nativeElement.nextSibling.classList.remove('hidden');
        } else {
            this.elRef.nativeElement.nextSibling.classList.add('hidden');
        }
    }

    constructor(private elRef: ElementRef) {}
}
