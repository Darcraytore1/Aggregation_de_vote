import { Survey } from './Survey';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor() { }

  async getSurvey(): Promise<Survey> {
    let result = await fetch(`http://127.0.0.1:8000/api/surveys`);
    let json = await result.json()
    let name = "Damien"
    let mail = "john@example.com"

    console.log(json)

    return {name: name, description: mail}
  }
}
