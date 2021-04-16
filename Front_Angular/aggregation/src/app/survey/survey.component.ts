import { Router } from '@angular/router';
import { Survey } from './../Survey';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-survey',
    templateUrl: './survey.component.html',
    styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

	@Input() survey: Survey = null;

	constructor(private router: Router) { }

	ngOnInit(): void {
	}

    vote(): void {
        let jsonSurvey = JSON.stringify(this.survey)
        localStorage.setItem("survey", jsonSurvey);
        this.router.navigate(['vote']);
    }
}
