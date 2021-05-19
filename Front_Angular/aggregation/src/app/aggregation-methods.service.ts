import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SurveyResult } from './SurveyResult';
import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AggregationMethodsService {

    constructor(private http: HttpClient) { }

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

    getFileContent2(survey: File): Observable<string> {

        return this.http.post<string>(environment.apiUrl + `/file-get-content`, survey, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
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

    getSurveyResult2(survey: string): Observable<SurveyResult> {

        return this.http.post<SurveyResult>(environment.apiUrl + "/aggregation-methods", survey, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
    }
}
