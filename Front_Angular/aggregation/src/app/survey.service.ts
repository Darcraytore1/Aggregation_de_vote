import { Vote } from './Vote';
import { Survey } from './Survey';
import { Injectable } from '@angular/core';
import { Choice } from './Choice';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

    constructor() { }

    async closeSurvey(idSurvey:number): Promise<boolean> {

        let data = '{ "idSurvey" :' + idSurvey + '}'


        let result = await fetch(environment.apiUrl + `/close-survey`,{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: data
        });

        let json = await result.json()
        return json
    }

    async getVoteNote(idSurvey:number): Promise<Array<Vote>> {

        let result = await fetch(environment.apiUrl + `/get-vote-note?idSurvey=` + idSurvey,{
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        let json = await result.json()
        return json
    }

    async getAdminSurveys(idUser: number): Promise<Array<Survey>> {

        let result = await fetch(environment.apiUrl + `/get-admin-survey?idUser=` + idUser,{
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        let json = await result.json()
        return json

    }

    async vote(surveyId: number, voteList, idUser: number): Promise<number> {

        let data = '{"idSurvey":' + surveyId + ',"vote":' + JSON.stringify(voteList) + ',"idUser":' + idUser + '}';
        console.log(data)

        let result = await fetch(environment.apiUrl + `/send-vote`,{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: data
        });

        let json = await result.json()


        if (json.isVoted != null) return 2
        if (json.isActive != null) return 3
        if (json.surveyExist != null) return 4

        return 1
    }

    async getChoice(idSurvey: number): Promise<Array<Choice>> {

        let result = await fetch(environment.apiUrl + `/get-choices?idSurvey=` + idSurvey,{
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
        let result = await fetch(environment.apiUrl + `/get-surveys`,{
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        let json = await result.json()
        return json
  }

    async createSurvey(survey: Survey, listChoice: Array<string>, id_user: number): Promise<boolean> {

        let data = JSON.stringify(survey);
        let data2 = '{"survey":' + data + ',"listChoice":' + JSON.stringify(listChoice) + ',"idUser":' + JSON.stringify(id_user) + '}';

        let result = await fetch(environment.apiUrl + `/create-survey`,{
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
