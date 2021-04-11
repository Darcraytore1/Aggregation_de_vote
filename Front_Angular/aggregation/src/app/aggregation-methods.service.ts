import { SurveyResult } from './survey-json/SurveyResult';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AggregationMethodsService {

    constructor() { }

    async getFileContent(survey: File): Promise<string> {


        let result = await fetch(`http://127.0.0.1:8000/api/file-get-content`,{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: survey
        });

        let json = await result.json()
        return json;
    }

    async getSurveyResult(survey: string): Promise<SurveyResult> {

        let url = "http://127.0.0.1:8000/api/aggregation-methods?survey=" + survey

        let result = await fetch(url,{
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        let json = await result.json()
        return json;
    }
}
