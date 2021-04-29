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

        let url = environment.apiUrl + "/aggregation-methods?survey=" + survey

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
