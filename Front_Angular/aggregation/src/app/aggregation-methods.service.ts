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
        console.log(json)
        return "prout";
    }

    async getSurveyResult(survey: File): Promise<number> {

        let url = "http://127.0.0.1:8000/api/aggregation-methods"
        console.log(url)

        let result = await fetch(url,{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        let json = await result.json()
        console.log(json)
        return -1;
    }
}
