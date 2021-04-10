import { Survey } from './Survey';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor() { }

  async getSurvey(): Promise<Survey> {
    let result = await fetch(`http://127.0.0.1:8000/api/surveys`,{
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });

    let json = await result.json()

    let name = json[0].name
    let description = json[0].description

    return {name: name, description: description}
  }
}
