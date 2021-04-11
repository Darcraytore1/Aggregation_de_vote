import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AggregationMethodsService {

    constructor() { }

    async getSurveyResult(survey: string): Promise<number> {

        console.log(survey)

        let result = await fetch(`http://127.0.0.1:8000/api/aggregation-methods?survey=`+survey,{
            method: "GET",
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
