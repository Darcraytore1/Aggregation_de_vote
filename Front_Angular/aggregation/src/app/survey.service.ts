import { Survey } from './Survey';
import { Injectable } from '@angular/core';
import { Choice } from './Choice';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

    constructor() { }

    async getAdminSurveys(idUser: number): Promise<Array<Survey>> {

        let result = await fetch(`http://127.0.0.1:8000/api/get-admin-survey?idUser=` + idUser,{
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        let json = await result.json()
        return json

    }

    async vote(surveyId: number, voteList): Promise<Boolean> {

        let data = '{"idSurvey":' + surveyId + ',"vote":' + JSON.stringify(voteList) + '}';
        console.log(data)

        let result = await fetch(`http://127.0.0.1:8000/api/send-vote`,{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: data
        });

        let json = await result.json()

        return json.success
    }

    async getChoice(idSurvey: number): Promise<Array<Choice>> {

        let result = await fetch(`http://127.0.0.1:8000/api/get-choices?idSurvey=` + idSurvey,{
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        let json = await result.json()
        console.log(json)
        return json

    }

  async getSurveys(): Promise<Array<Survey>> {
        let result = await fetch(`http://127.0.0.1:8000/api/surveys`,{
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        let json = await result.json()
        return json
  }

    async createSurvey(survey: Survey, listChoice: Array<string>, id_user: number): Promise<Boolean> {

        let data = JSON.stringify(survey);
        let data2 = '{"survey":' + data + ',"listChoice":' + JSON.stringify(listChoice) + ',"idUser":' + JSON.stringify(id_user) + '}';
        console.log(data2)

        let result = await fetch(`http://127.0.0.1:8000/api/create-survey`,{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: data2
        });

        let json = await result.json()

        return json.success
    }
}
