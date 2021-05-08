import { SurveyResult } from './SurveyResult';
import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AggregationMethodsService {

    constructor() { }

    async getFileContent(survey: File): Promise<string> {

        let result = await fetch(environment.apiUrl + `/file-get-content`,{
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

        let result = await fetch(environment.apiUrl + "/aggregation-methods",{
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
}
