import { SurveyResult } from './../SurveyResult';
import { AggregationMethodsService } from './../aggregation-methods.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-survey-json',
  templateUrl: './survey-json.component.html',
  styleUrls: ['./survey-json.component.css']
})
export class SurveyJSONComponent implements OnInit {

    // Faire en sorte que cela sorte des resultats differents en fonction des variables

    fileToSend: File = null
    @Input() surveyResult: SurveyResult = null
    averageMethod: Boolean = true
    bordaMethod: Boolean = true
    MedianMethod: Boolean = true

    constructor(private agr: AggregationMethodsService) { }

    ngOnInit(): void {
    }

    handleFileInput(e): void {
        this.fileToSend = e.target.files[0]
    }

    getSurveyResult(): void {
        this.agr.getFileContent2(this.fileToSend).subscribe(result => {
            this.agr.getSurveyResult2(result).subscribe( resultSurvey => {
                this.surveyResult = resultSurvey
                console.log(resultSurvey)
            })
        })
    }

    anotherSurveyResult(): void {
        this.surveyResult = null
    }
}
