import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent {
    public filterFg: FormGroup;

    constructor(private fb: FormBuilder) {
        this.filterFg = fb.group({
            name: [null],
            location: [null]
        })
    }
}
