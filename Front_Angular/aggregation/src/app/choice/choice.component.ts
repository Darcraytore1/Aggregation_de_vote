import { Choice } from './../Choice';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-choice',
    templateUrl: './choice.component.html',
    styleUrls: ['./choice.component.css']
})
export class ChoiceComponent implements OnInit {

    @Input() choice: Choice = null
    note: number = 0.5

    constructor() { }

    ngOnInit(): void {
    }

}
