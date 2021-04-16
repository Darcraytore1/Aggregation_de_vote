import { Choice } from './../Choice';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-choice-list',
    templateUrl: './choice-list.component.html',
    styleUrls: ['./choice-list.component.css']
})
export class ChoiceListComponent implements OnInit {

    @Input() choices: Array<Choice> = null

    constructor() { }

    ngOnInit(): void {
    }

    sendVote(): void {

    }
}
